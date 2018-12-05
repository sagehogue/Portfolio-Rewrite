using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;

namespace SagePortfolio.Models
{
    public class Scene
    {
        public ObjectId Id;
        public string Title { get; private set; }
        public string Text { get; private set; }
        public string Description { get; private set; }
        public string SceneType { get; private set; }
        public List<Option> OptionList = new List<Option>();
        public Scene(string title, string text, string description, string scenetype, Option[] args)
        {
            Title = title;
            Text = text;
            Description = description;
            SceneType = scenetype;
            foreach (var Option in args)
            {
                OptionList.Add(Option);
            }
        }
    }
}
