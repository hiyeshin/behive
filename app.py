# Behive Python Flask Code
# Reference: http://itppyweb2012.herokuapp.com
# You can see http://itppyweb.herokuapp.com
# last revision on November 1, 2013
# by Hiye Shin


import os, datetime
import re
from unidecode import unidecode

from flask import Flask,request, url_for, render_template, json, jsonify,redirect, abort
import models

from flask.ext.mongoengine import mongoengine

import requests

app = Flask(__name__)
app.config['CSRF_ENABLED'] = False

mongoengine.connect('mydata', host=os.environ.get('MONGOLAB_URI'))
app.logger.debug("Connecting to MongoLabs")



# main page
@app.route("/", methods = ["GET", "POST"])
def index():

	user_form = models.UserForm(request.form)

	if request.method == "POST" and user_form.validate():

		user = models.User()
		user.email = request.form.get('email','anonymous')
		user.first = request.form.get('first', 'John')
		user.last = request.form.get('last', 'Doe')
		user.save() 

		return redirect('/thanks' )


	else:
		if request.method=="POST" and request.form.getlist('categories'):
			for c in request.form.getlist('categories'):
				user_form.categories.append_entry(c)

		templateData = {
			'users' : models.User.objects(),
			'form' : user_form
		}

		return render_template("main.html", **templateData)

# thanks page
@app.route("/thanks")
def thanks():
	return render_template("thanks.html")

# error handler
@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404



if __name__ == "__main__":
	app.debug = True
	
	port = int(os.environ.get('PORT', 5000))
	app.run(host='0.0.0.0', port=port)

