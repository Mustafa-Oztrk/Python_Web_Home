import RPi.GPIO  as GPIO
import time

GPIO.setmode(GPIO.BOARD) # fiziksel pin numaları
GPIO.setwarnings(False)
GPIO.setup(11, GPIO.OUT)

try:
    while True:
        GPIO.output(11, GPIO.HIGH)
        print("Led Açık")
        time.sleep(22)
        GPIO.output(11,GPIO.LOW)
        print("Led Sondur")
        time.sleep(2)
except KeyboardInterrupt:
    GPIO.cleanup()