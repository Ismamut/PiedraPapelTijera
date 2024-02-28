using Microsoft.AspNetCore.Mvc;

namespace PiedraPapelTijera.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }



        [HttpPost]
        [Route("jugada")]
        public async Task<WeatherForecast> jugada([FromBody] WeatherForecast Jugada)
        {
            if (string.IsNullOrEmpty(Jugada.Jugador1))
                return new WeatherForecast { Summary = "" };//      StatusCode(StatusCodes.Status200OK, "");
            if (string.IsNullOrEmpty(Jugada.Jugador2))
                return new WeatherForecast { Summary = "" };// return StatusCode(StatusCodes.Status200OK, "");

            switch (Jugada.Jugador1.ToLower())
            {
                case "piedra":
                    if (Jugada.Jugador2.ToLower() == "papel")
                        return new WeatherForecast { Summary = "Ganador el Jugardor 2" };//  return StatusCode(StatusCodes.Status200OK, "Ganador el Jugardor 2");
                    if (Jugada.Jugador2.ToLower() == "tijera")
                        return new WeatherForecast { Summary = "Ganador el Jugardor 1" };// return StatusCode(StatusCodes.Status200OK, "Ganador el Jugardor 1");
                    if (Jugada.Jugador2.ToLower() == "piedra")
                        return new WeatherForecast { Summary = "Empate" };//return StatusCode(StatusCodes.Status200OK, "Empate");
                    break;

                case "papel":
                    if (Jugada.Jugador2.ToLower() == "papel")
                        return new WeatherForecast { Summary = "Empate" };//return new WeatherForecast { Summary = "Empate" }; //return StatusCode(StatusCodes.Status200OK, "Empate");
                    if (Jugada.Jugador2.ToLower() == "piedra")
                        return new WeatherForecast { Summary = "Ganador el Jugardor 1" };//return StatusCode(StatusCodes.Status200OK, "Ganador el Jugardor 2");
                    if (Jugada.Jugador2.ToLower() == "tijera")
                        return new WeatherForecast { Summary = "Ganador el Jugardor 2" };//return StatusCode(StatusCodes.Status200OK, "Ganador el Jugardor 1");
                    break;
                case "tijera":
                    if (Jugada.Jugador2.ToLower() == "papel")
                        return new WeatherForecast { Summary = "Ganador el Jugardor 1" };//return StatusCode(StatusCodes.Status200OK, "Ganador el Jugardor 1");
                    if (Jugada.Jugador2.ToLower() == "piedra")
                        return new WeatherForecast { Summary = "Ganador el Jugardor 2" };//return StatusCode(StatusCodes.Status200OK, "Empate");
                    if (Jugada.Jugador2.ToLower() == "tijera")
                        return new WeatherForecast { Summary = "Empate" };//return StatusCode(StatusCodes.Status200OK, "Ganador el Jugardor 2");
                    break;
            }

            return new WeatherForecast { Summary = "" };//return StatusCode(StatusCodes.Status200OK, "");
        }
    }
}