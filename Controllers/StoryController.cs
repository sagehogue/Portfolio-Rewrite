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

    // To select all documents in the collection, pass an empty document as the query filter parameter to the find method.
    [Route("api/[controller]")]
    public class StoryController : Controller
    {

        // GET: api/<controller>
        [HttpGet]
        public IMongoQueryable Get()
        {
            IMongoDatabase db = GetDbReference();
            var collection = db.GetCollection<Story>("Stories");
            var StoryList = collection.AsQueryable();
            //var StoryList = collection.Find(_ => true).ToListAsync();
            return StoryList;
        }

        //GET api/<controller>/5
        //[HttpGet]
        //public string Get()
        //{
        //    IMongoDatabase db = GetDbReference();
        //    var collection = db.GetCollection<Story>("stories");
        //    var story = new Story {Title="testStory", Text="This is a test story", Description="This is def a description"};
        //    var id = story.Id;
        //    var query = Query<Story>.EQ(e => e.Id, id);
        //    collection.InsertOneAsync(story);
            
        //    return "value";
        //}

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
            IMongoDatabase db = GetDbReference();
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
        }

        private IMongoDatabase GetDbReference(string SelectedDb="Test")
        {
            var connectionString = "mongodb://localhost:27017";
            var client = new MongoClient(connectionString);
            return client.GetDatabase(SelectedDb);
        }
    }
}
