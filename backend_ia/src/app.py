import flask
from flask import jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

# if __name__ == '__main__':
#       app.run(port=3001, host='0.0.0.0', debug=True, threaded=True)

@app.route('/', methods=['GET'])
def home():
    return jsonify({ "message": "Hello IA" })

app.run()