# -*- coding: utf-8 -*-
from mongoengine import *

from flask.ext.mongoengine.wtf import model_form
from datetime import datetime

class Log(Document):
	text = StringField()
	timestamp = DateTimeField(default=datetime.now())

class User(Document):
	email = EmailField(max_length=120, required=True, verbose_name="Email: ")
	first = StringField(max_length=30, verbose_name = "First Name:")
	last = StringField(max_length=50, verbose_name = "Last Name:")
	timestamp = DateTimeField(default=datetime.now())

UserForm = model_form(User)
