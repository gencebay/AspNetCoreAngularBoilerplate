using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreAngularBoilerplate.Models
{
    public class ListedFile
    {
        public string Url { get; set; }
        public string Name { get; set; }
        public long Size { get; set; }
        public string DeleteUrl { get; set; }
        public string DeleteType { get; set; }
    }
}
