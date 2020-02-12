#! C:\Python37\python.exe


from flask import Flask, render_template, send_from_directory
from flask_socketio import SocketIO



app = Flask(__name__)
app.config['SECRET_KEY'] = 'SECRET123'
socketio = SocketIO(app)


host = "localhost"
port = 4976
defaultFile = "index.html"



@app.route("/socket.io/socket.io.js")
def socketjs():
    return open("root/socket.io.js", "r").read()


@app.route("/")
def index():
    return open("root/docs/index.html", "r").read()

@app.route('/<path:path>')
def send_js(path):
    return send_from_directory('root/docs', path)





if __name__ == '__main__':
    socketio.run(app, debug=True, port=4976)
    