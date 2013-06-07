import os, datetime
import re
from unidecode import unidecode

from flask import Flask, session, request, url_for, escape, render_template, json, jsonify, flash, redirect, abort
# session is just a dictionary and flask converts it to cookie
import models

from flask.ext.mongoengine import mongoengine

import requests

from flaskext.bcrypt import Bcrypt

#custom user library - maps User object to User model
# from libs.user import *

app = Flask(__name__)   # create our flask app
app.config['CSRF_ENABLED'] = False
app.secret_key = os.environ.get('SECRET_KEY')

flask_bcrypt = Bcrypt(app)

#  MONGOLAB_URI=mongodb://localhost:27017/dwdfall2012

mongoengine.connect('mydata', host=os.environ.get('MONGOLAB_URI'))


# this is our main page
@app.route("/", methods = ["GET", "POST"])

def index():
	return render_template("main.html")

@app.route("/about")
def boston():
	return render_template("about.html")



# error handler
@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404


# start the webserver
if __name__ == "__main__":
	app.debug = True
	
	port = int(os.environ.get('PORT', 5000)) # locally PORT 5000, Heroku will assign its own port
	app.run(host='0.0.0.0', port=port)

