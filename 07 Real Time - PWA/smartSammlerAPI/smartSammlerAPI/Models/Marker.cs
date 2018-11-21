using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace smartSammlerAPI
{
    public class Marker
    {
        public int id { get; set; }
        public string imgURL { get; set; }
        public string lable { get; set; }

        public int type { get; set; }

        public double lng { get; set; }

        public double lat { get; set; }

        public string remark { get; set; }

        public byte[] picture { get; set; }

    }
}
