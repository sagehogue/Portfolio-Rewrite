using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;

namespace webSage.Models
{
    public class Option
    {
        public ObjectId Id;
        public string Title { get; private set; }
        public string Text { get; private set; }
        public string Description { get; private set; }
        //public Meta Metadata { get; private set; }
        public Option(string title, string text, string description)
        {
            Title = title;
            Text = text;
            Description = description;
        }
    }
}
