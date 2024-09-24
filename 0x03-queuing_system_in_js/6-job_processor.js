import kue from 'kue';

// Create a Kue queue
const queue = kue.createQueue();

// Define the sendNotification function
function sendNotification(phoneNumber, message) {
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
}

// Process jobs in the queue
queue.process('push_notification_code', function(job, done) {
  const { phoneNumber, message } = job.data;  // Get phone number and message from job data
  sendNotification(phoneNumber, message);
  done();
});
