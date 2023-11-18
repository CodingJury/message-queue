const {Worker} = require('bullmq');

const sendEmail = (sec) => new Promise((res,rej) => setTimeout(() => res(), sec * 1000))

const worker = new Worker('email-queue', async(job) => {
  console.log(`Message rec id: ${job.id}`)
  console.log(`Processing messages`)

  console.log(`Sending email to ${job.data.email}`)
  await sendEmail(5); //Let sending email takes 5 sec
  console.log("Email sent")
})