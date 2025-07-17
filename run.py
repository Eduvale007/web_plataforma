from flask import Flask
from config import get_connection
from routes import paginas

app = Flask(__name__)

conn = get_connection()

app.register_blueprint(paginas)


if __name__ == '__main__':
    app.run(debug=True)