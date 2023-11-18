const {Queue} = require("bullmq")

const notificationQueue = new Queue('email-queue', {
  connection: {
    host: '127.0.0.1',
    port: '6379'
  }
})

async function init() {
  const job = await notificationQueue.add('email to dhanajay', {
    email: 'dhananjaypatel.mailto@gmail.com',
    subject: 'Greeting to join',
    body: 'Welcome folks'
  })

  console.log("Job added to queue", job.id)
}

init();