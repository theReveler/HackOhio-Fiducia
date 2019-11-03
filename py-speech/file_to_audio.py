import speech_recognition as sr
r = sr.Recognizer()

def file_to_text(path):
    source = sr.AudioFile(path)
    with source as file:
        audio = r.record(file)
    return r.recognize_google(audio)

def test():
    print(file_to_text('harvard.wav'))