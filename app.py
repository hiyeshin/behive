import os, datetime

from flask import Flask, request, jsonify # Retrieve Flask, our framework
from flask import render_template


#import requests # used to make calls to remote youtube api

app = Flask(__name__)   # create our flask app

# this is our main page
@app.route("/")
def index():
	return render_template("main.html")

@app.route("/boston")
def boston():
	return render_template("boston.html")

@app.route("/whitney")
def whitney():
	return render_template("whitney.html")

@app.route("/gotham")
def gotham():
	return render_template("gotham.html")

@app.route("/macarons")
def macarons():
	return render_template("macarons.html")

@app.route("/palimpsest")
def palimpsest():
	return render_template("palimpsest.html")	

@app.route("/smartmat")
def smartmat():
	return render_template("smartmat.html")	





####################################
# below is for RWET class blogging.#
####################################
@app.route("/rwet")
def rwet():
	return render_template("rwet.html")

@app.route("/rwet/week2")
def week2():
	return render_template("week2.html")

@app.route("/rwet/week4")
def week4():
	return render_template("week4.html")

@app.route("/rwet/midterm")
def midterm():
	return render_template("midterm.html")

@app.route("/rwet/final")
def final():
	return render_template("final.html")


# error handler
@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404


# start the webserver
if __name__ == "__main__":
	app.debug = True
	
	port = int(os.environ.get('PORT', 5000)) # locally PORT 5000, Heroku will assign its own port
	app.run(host='0.0.0.0', port=port)

