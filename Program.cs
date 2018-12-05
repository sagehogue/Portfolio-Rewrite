using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MongoDB.Bson;
using MongoDB.Driver;

namespace webSage
{
    public class Program
    {
        public static void Main(string[] args)
        {
            MainAsync().Wait();
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();

        static async Task MainAsync()
        {
            var connectionString = "mongodb://localhost:27017";
            var client = new MongoClient(connectionString);

            //IMongoDatabase db = client.GetDatabase("Portfolio");
            //IMongoCollection<BsonDocument> collection = db.GetCollection<BsonDocument>("Stories");
            IMongoDatabase testdb = client.GetDatabase("Test");
            IMongoCollection<BsonDocument> collection = testdb.GetCollection<BsonDocument>("testies");
            var document = new BsonDocument
            {
                { "firstname", BsonValue.Create("Peter")},
                { "lastname", new BsonString("Mbanugo")},
                { "subjects", new BsonArray(new[] {"English", "Mathematics", "Physics"}) },
                { "class", "JSS 3" },
                { "age", int.MaxValue }
            }
            .Add("first-name", "sagacious")
            .Add("last-name", "salubrious");
            document["sageAge"] = 21;
            await collection.InsertOneAsync(document);
        }
    }
}
