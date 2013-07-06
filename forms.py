from flaskext.wtf import Form, TextField, TextAreaField, Required, PasswordField, validators, SelectField, EqualTo
from flaskext.wtf.html5 import EmailField
from flask import Flask, session

class RegisterForm(Form):
	email = EmailField('Email Address', validators=[], description="Enter your email address.")
	# first = TextField('First Name', validators = [], description = "First Name")
	# last = TextField('Last Name', validators = [], description = "Last Name")
