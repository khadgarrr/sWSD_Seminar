using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace smartSammlerAPI
{
    public static class DBInitializer
    {
        public static void Initialize(SammlerDBContext context)
        {
            context.Database.EnsureCreated();

            if (context.MarkerTypes.FirstOrDefault() == null)
            {
                var mt1 = new MarkerType { label = "Beeren" };
                var mt2 = new MarkerType { label = "Schwammerl" };
                var mt3 = new MarkerType { label = "Holunderblüten" };

                context.MarkerTypes.AddRange(mt1, mt2, mt3);

                var m1 = new Marker
                {
                    imgURL = "/assets/images/beeren.png",
                    lable = "Beerenplatz Waldviertel",
                    type = 1,
                    lat = 48.5839237,
                    lng = 15.4276355,
                    remark = "Mittelmäßige Vorkommen - Dafür 100% Bio"
                };

                var m2 = new Marker
                {
                    imgURL = "/assets/images/schwammerl.png",
                    lable = "Schwammerlplatz Stmk",
                    type = 3,
                    lat = 47.5308866,
                    lng = 15.9476211,
                    remark = "Unmengen - so weit das Auge reicht"
                };

                var m3 = new Marker
                {
                    imgURL = "/assets/images/holler.png",
                    lable = "Holler in Neuwaldegg",
                    type = 2,
                    lat = 48.234201,
                    lng = 16.277753,
                    remark = "Mittelmäßige Vorkommen - Tendenziell eher auf Marwiesenseite"
                };

                var m4 = new Marker
                {
                    imgURL = "/assets/images/eis.png",
                    lable = "Bortolotti beim Gänsehäufel",
                    type = 4,
                    lat = 48.226581,
                    lng = 16.4213303,
                    remark = "Best Eis in Town"
                };

                context.Markers.AddRange(m1, m2, m3, m4);
                context.SaveChanges();
            }

        }
    }
}
