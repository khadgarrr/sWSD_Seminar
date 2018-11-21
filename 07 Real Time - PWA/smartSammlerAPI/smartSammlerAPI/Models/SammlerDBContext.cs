using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace smartSammlerAPI
{
    //To manage Migrations & create the DB go to console:
    //[dotnet restore]
    //dotnet ef migrations add MIGRATION-NAME
    //dotnet ef database update

    public class SammlerDBContext : IdentityDbContext
    {
        public SammlerDBContext()
        {

        }

        public SammlerDBContext(DbContextOptions<SammlerDBContext> options) : base(options)
        {

        }

        public DbSet<Marker> Markers { get; set; }
        public DbSet<MarkerType> MarkerTypes { get; set; }

    }
}
