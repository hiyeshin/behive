# -*- coding: utf-8 -*-
from mongoengine import *

from flask.ext.mongoengine.wtf import model_form
from datetime import datetime

class Log(Document):
	text = StringField()
	timestamp = DateTimeField(default=datetime.now())

class User(Document):
	email = EmailField(max_length=120, required=True, verbose_name="Email: ")
	first = StringField()
	last = StringField()
	timestamp = DateTimeField(default=datetime.now())

# Create a Validation Form from the Idea model
UserForm = model_form(User)
