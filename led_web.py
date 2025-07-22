# Flask ve RPi.GPIO kütüphanelerini içe aktar
from flask import Flask, render_template, jsonify
import RPi.GPIO as GPIO
import http.server
import socketserver

                
# Flask uygulamasını oluştur
app = Flask(__name__)

HOST ="192.168.0.155"
PORT = 2003


# GPIO pinlerini BCM modunda ayarla (Raspberry Pi pin numaralandırması)
GPIO.setmode(GPIO.BCM)
# LED için kullanılacak GPIO pini (18 numaralı pin)
LED_PIN = 5
LED_PIN2 = 6
LED_PIN3 = 13
LED_PIN4 = 19

# LED pinini çıkış (output) olarak yapılandır
GPIO.setup(LED_PIN, GPIO.OUT)
GPIO.setup(LED_PIN2, GPIO.OUT)
GPIO.setup(LED_PIN3, GPIO.OUT)
GPIO.setup(LED_PIN4, GPIO.OUT) 

# Ana sayfa için rota tanımla ("/" adresine gelen istekler)
@app.route('/')

def index():
    # index.html dosyasını templates klasöründen yükle ve göster
    return render_template('index.html')

# LED kontrolü için rota tanımla ("/led/<state>" adresine gelen istekler)
@app.route('/led/<state>')
def led_control(state):
    # Gelen state parametresine göre LED’i kontrol et
    if state == 'on':
        # LED’i yak (GPIO pini HIGH yap)
        GPIO.output(LED_PIN, GPIO.HIGH)
        # JSON yanıtı döndür
        return jsonify({'message': 'LED YANDI'})
    elif state == 'off':
        # LED’i söndür (GPIO pini LOW yap)
        GPIO.output(LED_PIN, GPIO.LOW)
        # JSON yanıtı döndür
        return jsonify({'message': 'LED SÖNDÜ'})
    # Geçersiz komut için hata mesajı
    return jsonify({'message': 'Geçersiz komut'}), 400

@app.route('/table/<state>')
def tableLedController(state):
    if state == 'on':
        GPIO.output(LED_PIN2, GPIO.HIGH)
        return jsonify({'message': 'Table LED YANDI'})
    elif state == 'off':
        GPIO.output(LED_PIN2, GPIO.LOW)
        return jsonify({'message': 'Table LED SÖNDÜ'})
    return jsonify({'message': 'Geçersiz komut'}), 400

@app.route('/speaker/<state>')
def speakerController(state):
    if state == 'on':
        GPIO.output(LED_PIN3, GPIO.HIGH)
        return jsonify({'message' : 'Hoperlörler Açıldı'})
    elif state == 'off':
        GPIO.output(LED_PIN3, GPIO.LOW)
        return jsonify({'message' :'Hoperlörler Kapatıldı'})
    return jsonify({'message' : 'Geçersiz Komut'})



# Programın ana bloğu: Flask sunucusunu başlat
if __name__ == '__main__':
    # Sunucuyu tüm IP adreslerinden erişilebilir yap (0.0.0.0) ve 5000 portunda çalıştır
    app.run(host=HOST, port=PORT)