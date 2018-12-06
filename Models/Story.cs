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
        [BsonElement("scenes")]
        public List<Scene> Scenes { get; set; }
        public Story(string title, string text, string description, List<Scene> scenes)
        {
            Title = title;
            Text = text;
            Description = description;
            Scenes = scenes;
        }
    }
}
