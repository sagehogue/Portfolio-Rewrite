using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using webSage.Models;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace webSage.Controllers
{

    [Route("api/[controller]")]
    public class StoryController : Controller
    {
        // Retrieves all stories!
        // GET: api/<controller>
        [HttpGet]
        // public IMongoQueryable<Story> Get
        public object Get()
        {
            // var StoryList = RetrieveCollection();
            var StoryList = RetrieveCollection();
            // AsQueryable makes it respond to these Linq queries
            var query = StoryList.AsQueryable().Where(story => story.Title == "test")
                .Select(story => story);

            var filter = Builders<Story>.Filter.Empty;
            var result = StoryList.Find(filter).ToList();
            // .ToList();
            Console.WriteLine(result);
            return result;
        }

        // GET: api/Story/{id} -- Fetches <Story> by ID
        [HttpGet("{id}")]
        public Story GetOne(string id)
        {
            IMongoDatabase db = GetDbReference("atlas");

            var collection = db.GetCollection<Story>("Stories");
            var StoryList = RetrieveCollection();
            // Rather than using that Linq stuff, this just uses Mongo driver I believe


            var filter = Builders<Story>.Filter.Eq("_id", ObjectId.Parse(id));
            var result = collection.Find(filter).FirstOrDefault();
            return result;

        }

        [HttpPost]
        public string Post([FromBody]string value)
        {
            // First I will have to parse the request - I shall have to see what kind of post this is, be it story, scene, or option
            // then I will have to track how it is related to the other story components, properly assemble a objects, and insert
            // them into my db with proper formatting.
            IMongoCollection<Story> collection = RetrieveCollection();
            var story = new Story("test", "we are testing", "yeh this a test description", null);
            // Manual way of BsonDocument creation
            var document = new BsonDocument
            {
                { "firstname", BsonValue.Create("Peter")},
                { "lastname", new BsonString("Mbanugo")},
                { "subjects", new BsonArray(new[] {"English", "Mathematics", "Physics"}) },
                { "class", "JSS 3" },
                { "age", int.MaxValue }
            }
            // Add properties, values
            .Add("first-name", "sagacious")
            .Add("last-name", "salubrious");
            // Access like a dictionary, by index
            document["sageAge"] = 21;
            // Insert processesed document to collection of mongo documents
            collection.InsertOneAsync(story);
            return "Posted!";
        }



        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
            IMongoDatabase db = GetDbReference("atlas");
        }



        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            //IMongoDatabase db = GetDbReference();
            //var collection = db.GetCollection<Story>("Stories");
            //var StoryList = collection.AsQueryable();
        }




        private IMongoDatabase GetDbReference(string useAtlasOrLocal)
        {
            var connectionStrings = new
            {
                mongoLocal = "mongodb://localhost:27017",
                // so it connects if I directly put the connection string in here. the proper way to do this is using environment variables tho, I think, so I need to figure that out. I also need to figure out how to access my data once I've connected because now I'm getting some weird encoding error.
                mongoAtlas = "placeholder", // replace this with string
                // mongoAtlas = Environment.GetEnvironmentVariable("MONGO_CONNECT_STRING", EnvironmentVariableTarget.User),
            };
            var DbNames = new
            {
                mongoLocal = "Test",
                mongoAtlas = "webSage"
            };
            if (useAtlasOrLocal == "local")
            {
                string connectionString = connectionStrings.mongoLocal;
                string SelectedDb = DbNames.mongoLocal;
                var client = new MongoClient(connectionString);
                return client.GetDatabase(SelectedDb);
            }
            else
            {
                string connectionString = connectionStrings.mongoAtlas;
                string SelectedDb = DbNames.mongoAtlas;
                var client = new MongoClient(connectionString);
                return client.GetDatabase(SelectedDb);
            }
        }

        private IMongoCollection<Story> RetrieveCollection(string specified = "Stories")
        {
            var db = GetDbReference("atlas");
            var collection = db.GetCollection<Story>(specified);
            return collection;
        }
    }
}
