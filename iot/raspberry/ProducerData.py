from kafka import KafkaProducer
import time
import sys
import json

bootStrapServers = ["k7d208.p.ssafy.io:8992","k7d208.p.ssafy.io:8993","k7d208.p.ssafy.io:8994"]

topicName = "ddokbun_pot_data"

def sendData(data):
    producer = KafkaProducer(acks=1,bootstrap_servers=bootStrapServers)
    producer.send(topicName,data.encode())
    producer.flush()

def readDataFromShareFile():
    f = open('/home/ddokbun/iot/envDataShare.txt','r')
    stringData = f.readlines()[0]
    f.close()
    return stringData

if __name__=="__main__":

    try: 
        print("this is kafka producer")
        stringData = readDataFromShareFile()
        temp = json.loads(stringData)
        temp["simple"] = 0;

        print(temp)
        sendData(json.dumps(temp))
        f = open("/home/ddokbun/iot/producer_log.txt","a+")
        f.write(time.asctime(time.localtime())+"주기적 프로듀싱 성\n")
    except Exception as e:
        print(e)
        f = open("/home/ddokbun/iot/producer_log.txt","a+")
        f.write(time.asctime(time.localtime())+"주기적 프로듀싱실패\n")

