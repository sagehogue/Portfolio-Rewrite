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
    public class Option
    {
        public ObjectId Id;
         [BsonElement("label")]
        public string Label { get; private set; }
         [BsonElement("text")]
        public string Text { get; private set; }
         [BsonElement("nextScene")]
        public string AssociatedNextScene { get; private set; }

        public Option(string label, string text, string SceneName)
        {
            Label = label;
            Text = text;
            AssociatedNextScene = SceneName;
        }
    }
}
