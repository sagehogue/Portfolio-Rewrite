using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;

namespace SagePortfolio.Models
{
    public class Story
    {
        public ObjectId Id;
        public string Title { get; private set; }
        public string Text { get; private set; }
        public string Description { get; private set; }
        public List<Scene> SceneList = new List<Scene>();
        public Story(string title, string text, string description, Scene[] args)
        {
            Title = title;
            Text = text;
            Description = description;

            foreach (var Scene in args)
            {
                SceneList.Add(Scene);
            }
        }
    }
}
