using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB;
using MongoDB.Bson;
using MongoDB.Driver;
using webSage.Models;

namespace webSage.DAO
{
    public class StoryDAO
    {
        private MongoClient mongoClient;
        private IMongoCollection<Story> storyCollection;
        public StoryDAO()
        {
            string DesiredDatabase = "test";
            string StoryCollection = "Stories";
            string MongoConnectionStr = "mongodb://localhost:27017";
            mongoClient = new MongoClient(MongoConnectionStr);
            var db = mongoClient.GetDatabase(DesiredDatabase);
            var storyCollection = db.GetCollection<Story>(StoryCollection);
        }
        public void FindAll()
        {
            var stories = storyCollection.AsQueryable<Story>().ToList();
        }
    }
}
