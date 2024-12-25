from flask import Flask, send_from_directory, render_template
import os

app = Flask(__name__)

# Servir imágenes de la carpeta estática
@app.route('/img/<filename>')
def serve_image(filename):
    return send_from_directory(os.path.join(app.root_path, 'static/img'), filename)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
