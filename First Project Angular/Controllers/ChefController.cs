using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace First_Project_Angular.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ChefController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Chef> Chefs() {
            var uwu = 0;
            return Enumerable.Range(1, 5).Select(index => new Chef {
                id = uwu + 1,
                firstName = "Wind",
                lastName = "Storm",
                day = 24,
                month = 3,
                year = 2000
            });
        }

        public class Chef
        {
            public int id { get; set; }
            public string firstName { get; set; }
            public string lastName { get; set; }
            public int day { get; set; }
            public int month { get; set; }
            public int year { get; set; }
        }
    }
}