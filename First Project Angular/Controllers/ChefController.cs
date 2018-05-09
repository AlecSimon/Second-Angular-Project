using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace First_Project_Angular.Controllers
{
    [Produces("application/json")]
    [Route("api/Chef")]
    public class ChefController : Controller
    {
        [HttpGet]
        public IActionResult Test()
        {
            return Ok("Hello");
        }
    }
}