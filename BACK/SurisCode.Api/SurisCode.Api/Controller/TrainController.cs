using Microsoft.AspNetCore.Mvc;
using SurisCode.Api.Model;

namespace SurisCode.Api.Controller
{
    [Controller]
    [Route("api/train")]
    public class TrainController : ControllerBase
    {
        public static List<int> Tren = new List<int>();
        public TrainController() { }

        [HttpPost]
        [Route("/Add")]
        public IActionResult Add([FromBody]TrainParams vagon)
        {
            if (vagon.Right)
            {
                Tren.Add(vagon.Vagon);
            } else
            {
                Tren.Insert(0, vagon.Vagon);
            }
            return Ok(Tren);
        }

        [HttpPost]
        [Route("/Delete")]
        public IActionResult Remove([FromBody]bool right)
        {
            if (right)
            {
                Tren.RemoveAt(Tren.Count - 1);
            }
            else
            {
                Tren.RemoveAt(0);
            }

            return Ok(Tren);
        }

    }
}
