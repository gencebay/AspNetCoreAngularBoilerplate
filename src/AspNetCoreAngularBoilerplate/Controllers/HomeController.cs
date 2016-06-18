using AspNetCoreAngularBoilerplate.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace AspNetCoreAngularBoilerplate.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHostingEnvironment _environment;

        protected string UploadsPath
        {
            get
            {
                return Path.Combine(_environment.WebRootPath, "uploads");
            }
        }

        private List<ListedFile> GetFiles()
        {
            List<ListedFile> files = new List<ListedFile>();
            var names = Directory.GetFiles(UploadsPath);
            foreach (var name in names)
            {
                FileInfo fInfo = new FileInfo(name);
                var encodedFileUrl = $"/uploads/{WebUtility.UrlEncode(fInfo.Name)}";
                files.Add(new ListedFile { Name = fInfo.Name, Size = fInfo.Length, Url = encodedFileUrl, DeleteType = "POST", DeleteUrl = "" });
            }

            return files;
        }

        public HomeController(IHostingEnvironment environment)
        {
            _environment = environment;
        }

        public IActionResult Index()
        {
            ViewBag.Title = "SPA Boilerplate MVC6";
            return View();
        }

        [HttpGet]
        public IActionResult GetUploadedFiles()
        {
            return new JsonResult(new { files = GetFiles() });
        }

        [HttpPost]
        public async Task<IActionResult> Upload(ICollection<IFormFile> files)
        {
            foreach (var file in files)
            {
                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    using (FileStream fs = new FileStream(fileName, FileMode.OpenOrCreate))
                    {
                        await file.CopyToAsync(fs);
                    }
                }
                return View();
            }

            return new JsonResult(new { });
        }

        [HttpPost]
        public async Task<IActionResult> UploadFilesAjax()
        {
            long size = 0;
            var files = Request.Form.Files;
            foreach (var file in files)
            {
                var filename = ContentDispositionHeaderValue
                                .Parse(file.ContentDisposition)
                                .FileName
                                .Trim('"');
                filename = UploadsPath + $@"\{filename}";
                size += file.Length;

                using (FileStream fs = new FileStream(filename, FileMode.OpenOrCreate))
                {
                    await file.CopyToAsync(fs);
                }
            }
            
            return Json(new { files = GetFiles() });
        }
    }
}
