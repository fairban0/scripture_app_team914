using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers
{
    [Route("[controller]")]
    [ApiController]

    public class ScriptureController : ControllerBase
    {
        private ScriptureDbContext _scriptContext;
        
        public ScriptureController(ScriptureDbContext temp)
        {
            _scriptContext = temp;
        }

    }
}