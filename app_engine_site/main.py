import logging, requests, json

from flask import Flask, render_template

pocket_post = {"consumer_key": "64793-4b8c9f2890f28cbfb63c719c", "redirect_uri": "http://127.0.0.1:8080/handle"}

app = Flask(__name__)


@app.route('/')
def hello():
    headers = {'content-type': 'application/json; charset=UTF8'}
    pocket_data = requests.post('https://getpocket.com/v3/oauth/request', data=pocket_post)
    print pocket_data.content
    redirect = resquest.get("https://getpocket.com/auth/authorize?request_token=%s&redirect_uri=YOUR_REDIRECT_URI" % (pocket_data.content)
    return render_template('index.html')

@app.route('/handle')
def hi():
    print 'hello world'
    return render_template('index.html')

@app.errorhandler(500)
def server_error(e):
    # Log the error and stacktrace.
    logging.exception('An error occurred during a request.')
    return 'An internal error occurred.', 500
