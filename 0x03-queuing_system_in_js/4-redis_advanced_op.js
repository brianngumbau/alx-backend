import redis from 'redis';

// Create a Redis client
const client = redis.createClient();

client
  .on('error', (error) => {
    console.log(`Redis client not connected to the server: ${error.message}`);
  })
  .on('connect', () => {
    console.log('Redis client connected to the server');
  });

// Function to set hash values
function createHolbertonSchoolsHash() {
  client.hset('HolbertonSchools', 'Portland', 50, redis.print);
  client.hset('HolbertonSchools', 'Seattle', 80, redis.print);
  client.hset('HolbertonSchools', 'New York', 20, redis.print);
  client.hset('HolbertonSchools', 'Bogota', 20, redis.print);
  client.hset('HolbertonSchools', 'Cali', 40, redis.print);
  client.hset('HolbertonSchools', 'Paris', 2, redis.print);
}

// Function to display the hash
function displayHolbertonSchoolsHash() {
  client.hgetall('HolbertonSchools', (err, reply) => {
    if (err) {
      console.error(`Error: ${err.message}`);
    } else {
      console.log(reply);
    }
  });
}

// Call functions to create and display the hash
createHolbertonSchoolsHash();
displayHolbertonSchoolsHash();
