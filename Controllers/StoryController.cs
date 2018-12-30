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

// I think I can use the below snippet as inspiration - return weakly typed objects to be serialized. 
//public object Get()
//{
//    return new
//    {
//        Name = "Alice",
//        Age = 23,
//        Pets = new List<string> { "Fido", "Polly", "Spot" }
//    };
//}





namespace webSage.Controllers
{

    [Route("api/[controller]")]
    public class StoryController : Controller
    {
        // Retrieves all stories!
        // GET: api/<controller>
        [HttpGet]
        public IMongoQueryable<Story> Get()
        {
            // Guess I'm just putting filtering logic in my front-end.. for now. Obviously a lazy solution and bad for performance..
            var StoryList = RetrieveCollection().AsQueryable(); // AsQueryable makes it respond to these Linq queries
            var query = StoryList.Where(story => story.Title == "test")
                .Select(story => story);
            Console.WriteLine(query);
            return query;
        }

        // Fetches <Story> by ID
        // GET: api/Story/{id}
        [HttpGet("{id}")]
        public Story GetOne(string id)
        {
            IMongoDatabase db = GetDbReference();

            var collection = db.GetCollection<Story>("Stories");
            var StoryList = RetrieveCollection(); // Rather than using that Linq stuff, this just uses Mongo driver I believe
            var filter = Builders<Story>.Filter.Eq("_id", ObjectId.Parse(id));
            var result = collection.Find(filter).FirstOrDefault();
            return result;

        }

        // Okay, so can use db id as identifier but will have to create a security layer before anyone else has access.
        // or else I have total api exposure D:
        // 



        // POST api/<controller>
        // So what I need in here is to add something that does a little... deduction.
        // I want my requests to have a 'type' field that I can use to decide whether to save a scene/story/option.
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
            IMongoDatabase db = GetDbReference();
        }



        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            IMongoDatabase db = GetDbReference();
            var collection = db.GetCollection<Story>("Stories");
            var StoryList = collection.AsQueryable();
        }




        private IMongoDatabase GetDbReference(string SelectedDb = "Test", string connectionString = "mongodb://localhost:27017")
        {
            var client = new MongoClient(connectionString);
            return client.GetDatabase(SelectedDb);
        }

        private IMongoCollection<Story> RetrieveCollection(string specified = "Stories")
        {
            var db = GetDbReference();
            var collection = db.GetCollection<Story>(specified);
            return collection;
        }
    }
}
