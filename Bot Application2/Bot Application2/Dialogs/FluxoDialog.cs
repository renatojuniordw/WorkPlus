using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.Luis;
using Microsoft.Bot.Builder.Luis.Models;
using Microsoft.Bot.Connector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Bot_Application2.Dialogs
{
    [Serializable]
    [LuisModel("34f4c079-b012-42ab-8b66-f708bf8e50b6", "e83618586b75469d914422502d9ca016")] // (string modelID, string subscriptionkey)

    public class FluxoDialog : LuisDialog<object>
    {
        [LuisIntent("None")]
        public async Task None(IDialogContext context, LuisResult result)
        {
            await context.PostAsync($"**( ͡° ͜ʖ ͡°)** - Desculpe, mas não consegui entender a frase: {result.Query}");
        }

        [LuisIntent("Cumprimento")]
        public async Task Cumprimento(IDialogContext context, LuisResult result)
        {
            var now = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time")).TimeOfDay;
            string saudacao;

            if (now < TimeSpan.FromHours(12))
            {
                saudacao = "Bom dia";
            }
            else if (now < TimeSpan.FromHours(18))
            {
                saudacao = "Boa tarde";
            }
            else if (now < TimeSpan.FromHours(00))
            {
                saudacao = "Boa noite";
            }
            else
            {
                saudacao = "Boa madrugada";
            }

            await context.PostAsync($"{saudacao}! \nEm que posso ajudar??? ???");
            context.Done<string>(null);

            // await context.PostAsync($"Oi, Como vai? \nTudo bem com você?");  // ($"{result.Query} Como vai?");
        }

        [LuisIntent("")]
        public async Task Localizacao(IDialogContext context, LuisResult result)
        {
            string text = $"Qual a cidade que você mora?.";
            await context.PostAsync(text);

          //  if ({result.Query} = Recife)
          //  {
          //  }
        }

        [LuisIntent("Sobre")]
        public async Task Sobre(IDialogContext context, LuisResult result)
        {
            await context.PostAsync($"**(▀̿Ĺ̯▀̿ ̿)** - Eu sou um Bot e estou aprendendo. \nPor favor, tenha paciência comigo!!!");
        }
        // context.Wait(MessageReceivedAsync);       
    }
}