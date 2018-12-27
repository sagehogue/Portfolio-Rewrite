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
    public class Scene
    {
        public ObjectId Id;
        [BsonElement("title")]
        public string Title { get; private set; }
        [BsonElement("text")]
        public string Text { get; private set; }
        [BsonElement("options")]
        public object Options { get; set; }
        [BsonElement("first")]
        public object first { get; set; }
        [BsonElement("second")]
        public object second { get; set; }
        [BsonElement("title")]
        public object third { get; set; }
        [BsonElement("fourth")]
        public object fourth { get; set; }
        [BsonElement("fifth")]
        public object fifth { get; set; }

        public Scene(string title, string text, string description, string scenetype, object Option1, object Option2, object Option3, object Option4, object Option5)
        {
            Title = title;
            Text = text;
            Options = new {
                first = Option1,
                second = Option2,
                third = Option3,
                fourth = Option4,
                fifth = Option5
            };
        }
    }
}
