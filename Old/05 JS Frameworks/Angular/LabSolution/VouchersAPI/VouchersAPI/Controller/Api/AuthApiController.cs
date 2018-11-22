using System.Security.Principal;
using Microsoft.AspNetCore.Mvc;

namespace Vouchers
{
    [Route("api/[controller]")]
    public class AuthApiController : Microsoft.AspNetCore.Mvc.Controller
    {
        [HttpGet]
        [Route("getWinUser")]
        public string Get()
        {
            return HttpContext.User.Identity is WindowsIdentity identity
                ? identity.Name
                : "Not Authenticated";
        }
    }
}