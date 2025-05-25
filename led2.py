import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
LED_PIN = 21
GPIO.setup(LED_PIN, GPIO.OUT)

try: 
    while True:
        GPIO.output(LED_PIN,GPIO.HIGH)
        print("LED Açık")
        time.sleep(10 )
        GPIO.output(LED_PIN, GPIO.LOW)
        print("LED Kapandı")
        time.sleep(5)
except KeyboardInterrupt:
    GPIO.cleanup()