# message-queue

### How to run project locally
```javascript
npm install //installs dependencies (for 1st time only)

docker-compose up //to run the redis server (make sure docker is installed in system)
node producer.js //to add the jobs in queue
node worker.js //to process jobs persent in queue
```

> This is a bare bone project for just the basic understanding of how message queue works