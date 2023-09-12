# 存放扩展插件flask-sqlalchemy
# 这个文件就是解决app.py,models.py和exts.py之间循环引用问题的
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail

db = SQLAlchemy()
mail = Mail()