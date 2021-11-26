from kafka import TopicPartition
from kafka import KafkaConsumer
class kafkaServidor:
    def kafkaConfiguration():
        consumer = KafkaConsumer(bootstrap_servers='127.0.0.1:9092')
        consumer.subscribe(['msgpackfoo'])
        for msg in consumer:
            print(msg)