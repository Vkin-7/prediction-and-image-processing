const { Kafka } = require('kafkajs')

var kafkaTestConnect=async()=>{
    const kafka = new Kafka({
      clientId: 'my-app',
      brokers: ['localhost:9092']
    })
    const producer = kafka.producer()
    try{
      await producer.connect()
      await  producer.send({
        topic: 'test-topic',
        messages: [
          { value: 'Hello KafkaJS user!' },
        ]
      })
      return producer
    }catch(e){
      console.error(e)
    }finally{
      producer != null && producer.disconnect()
    }
    return 'Deu errado'
}
/*export var testeConsume=async ()=>{
  const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
  })
  const consumer = kafka.consumer({ groupId: 'test-group' })

  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
  
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      })
    },
  })
}*/
export default kafkaTestConnect