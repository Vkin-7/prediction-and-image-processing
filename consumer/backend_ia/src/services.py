from kafka import TopicPartition
from kafka import KafkaConsumer
import json
class kafkaServidor:
        consumer = KafkaConsumer('test-topic',
        bootstrap_servers = ['localhost:9092'],
        group_id = None,
        auto_offset_reset = 'smallest')
        print ("Consuming messages from the given topic")
        for message in consumer:
            print ("Message", message)
        if message is not None:
            print (message.offset, message.value)

        print ("Quit")
       
  
        


