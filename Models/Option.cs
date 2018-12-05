using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;

namespace SagePortfolio.Models
{
    public class Option
    {
        public ObjectId Id;
        public string Title { get; private set; }
        public string Text { get; private set; }
        public string Description { get; private set; }
        public Meta Metadata { get; private set; }
        public Option(string title, string text, string description, Scene NextScene, Scene CurrentScene, Scene PreviousScene)
        {
            Title = title;
            Text = text;
            Description = description;
            Metadata = new Meta(NextScene, CurrentScene, PreviousScene);
        }
    }
}
