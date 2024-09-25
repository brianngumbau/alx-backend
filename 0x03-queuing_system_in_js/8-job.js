// Import Kue for queue handling
import kue from 'kue';

function createPushNotificationsJobs(jobs, queue) {
  // Check if jobs is an array
  if (!Array.isArray(jobs)) {
    throw new Error('Jobs is not an array');
  }

  // Loop through each job in the jobs array
  jobs.forEach((jobData) => {
    // Create a new job in the queue 'push_notification_code_3'
    const job = queue.create('push_notification_code_3', jobData)
      .save((err) => {
        if (!err) {
          // Log job creation
          console.log(`Notification job created: ${job.id}`);
        }
      });

    // Listen for job completion and log it
    job.on('complete', () => {
      console.log(`Notification job ${job.id} completed`);
    });

    // Listen for job failure and log the error
    job.on('failed', (err) => {
      console.log(`Notification job ${job.id} failed: ${err}`);
    });

    // Listen for job progress and log the progress
    job.on('progress', (progress) => {
      console.log(`Notification job ${job.id} ${progress}% complete`);
    });
  });
}

export default createPushNotificationsJobs;
