import redis from 'redis';
import { promisify } from 'util';

// Create a Redis client
const client = redis.createClient();

client
  .on('error', (error) => {
    console.log(`Redis client not connected to the server: ${error.message}`);
  })
  .on('connect', () => {
    console.log('Redis client connected to the server');
  });

// Promisify the client.get method
const getAsync = promisify(client.get).bind(client);

// Function to set a key-value pair in Redis
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, (err, reply) => {
    redis.print(`Reply: ${reply}`);
  });
}

// Function to get a key's value using async/await
async function displaySchoolValue(schoolName) {
  try {
    const reply = await getAsync(schoolName);
    console.log(reply);
  } catch (err) {
    console.error('Error:', err);
  }
}

// Calling the functions to demonstrate functionality
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
