using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;

namespace webSage.Models
{
    public class Scene
    {
        public ObjectId Id;
        public string Title { get; private set; }
        public string Text { get; private set; }
        public string Description { get; private set; }
        public string SceneType { get; private set; }
        public List<Option> OptionList { get; set; }
        public Scene(string title, string text, string description, string scenetype, List<Option> options)
        {
            Title = title;
            Text = text;
            Description = description;
            SceneType = scenetype;
            OptionList = options;
        }
    }
}
