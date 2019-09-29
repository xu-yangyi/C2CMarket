from sqlalchemy import Column,Integer,String
from models.mysql.mysql import db


class SchoolUser(db.Model):
    id=Column(Integer,primary_key=True,autoincrement=True)
    name=Column(String(20),nullable=False,unique=True)
    pwd=Column(String(20),nullable=False)
    favors=Column(String(1000),nullable=True)
