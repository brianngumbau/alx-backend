import redis from 'redis';

// Create Redis client
const subscriber = redis.createClient();

// Handle connection
subscriber.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Handle error
subscriber.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

// Subscribe to the channel "holberton school channel"
subscriber.subscribe('holberton school channel');

// Handle incoming messages
subscriber.on('message', (channel, message) => {
  console.log(message);
  if (message === 'KILL_SERVER') {
    subscriber.unsubscribe();
    subscriber.quit();
  }
});
