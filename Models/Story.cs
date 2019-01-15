using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;

namespace webSage.Models
{
    [BsonIgnoreExtraElements]
    public class Story
    {
        [BsonId]
        public ObjectId Id;
        [BsonElement("title")]
        public string Title { get; set; }
        [BsonElement("text")]
        public string Text { get; set; }
        [BsonElement("description")]
        public string Description { get; set; }
        private object _setScenes;
        [BsonElement("scenes")]
        public object Scenes
        {
             get 
             {
                 return this._setScenes;
             }
             set {
                 _setScenes = value;
             }
        }
             
        public Story(string title, string text, string description, object scenes)
        {
            
            Title = title;
            Text = text;
            Description = description;
            Scenes = scenes;
        }

        // static void Main(List<Scene> scenes)
        // {
        //     // var scenes = new {

        //     // };
        //     int counter = 0;
        //     foreach (Scene scene in scenes)
        //     {

        // }
        // }
    }
}
