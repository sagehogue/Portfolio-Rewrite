using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SagePortfolio.Models
{
    public class Meta
    {
        public Scene PreviousScene { get; private set; }
        public Scene CurrentScene { get; private set; }
        public Scene NextScene { get; private set; }

        public Meta(Scene previous, Scene current, Scene next)
        {
            PreviousScene = previous;
            CurrentScene = current;
            NextScene = next;
        }

    }
}
