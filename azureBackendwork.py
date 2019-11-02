import mysql.connector as sql
import azure.cognitiveservices.speech as ssdk
#import pymongo as mongo
import sys
import os


def main ():
  # azure configs
  speech_key = aa5972d479ec46cf8571485719c62c7d
  service_region = East US
  speech_config = speechsdk.speechConfig(subscription=speech_key, region=service_region

  # DATABASE WORK :later step query database for data

  # part 1 connect to the data base
  readFile = ""

  try:
  
    host = ""
    user = ""
    passwd =""
    database = ""

    #connect to database
    db = mysql.connector.connect(
      host=host,
      user=user,
      passwd=passwd,
      database = database)

    # get the cursor 
    cursor = db.cursor()


    # audioFiles is a list of the audioFile location 
    audioFiles = cursor.execute("SELECT id, audio FROM rd_tbl WHERE transcript IS NULL" )

    # convert the LongBlobs ( make a func)  
    afs = generateAudioFiles(audioFiles)

    for f in afs:
        


      
  except:
    print("an error occured with the audio handling")
    
  
def convert_file(data,filename): 
  with open(filename, 'wb') as file:
    file.write(data)


def generateAudioFiles(audioFiles):
  genFiles = []
  for af in audioFiles:
    
    num = 1
    filename = "sample" + str(num) 
    fullPath = os.path.dirname(os.path.realpath(".")) + filename + ".wav"
    
    convert_file(af,fullPath)
    newFile = fullPath
    
    genFiles.append(fullPath)

  return genFiles







# extract data

# put into sdk fxn 

# get back data 

# parse/clean then send back transcript from database 





# upload audio transcript to Azure





# process the transcript 


# send result of Azure work to DB 



