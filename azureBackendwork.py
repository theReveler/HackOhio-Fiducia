import mysql.connector as sql
import azure.cognitiveservices.speech as ssdk
#import pymongo as mongo


# azure configs
speech_key = aa5972d479ec46cf8571485719c62c7d
service_region = East US
speech_config = speechsdk.speechConfig(subscription=speech_key, region=service_region

# DATABASE WORK :later step query database for data

# part 1 connect to the data base

#connect to database
db = mysql.connector.connect(
    host="localhost",
    user="yourusername",
    passwd="yourpassword"
    database = "name of db"
    )


cursor = db.cursor()


# audioFiles is a list of the audioFile
audioFiles = cursor.execute("SELECT id, audio FROM rd_tbl WHERE transcript IS NULL" )





# extract data

# put into sdk fxn 

# get back data 

# parse/clean then send back transcript from database 





# upload audio transcript to Azure





# process the transcript 


# send result of Azure work to DB 



