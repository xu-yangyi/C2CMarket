from sqlalchemy import Column,Integer,String
from models.mysql.mysql import db


class SchoolUserMsg(db.Model):
    id=Column(Integer,primary_key=True,autoincrement=True)
    chatId=Column(String(40),nullable=False)
    msg_from=Column(String(20),nullable=False)
    msg_to=Column(String(20),nullable=False)
    content=Column(String(1000),nullable=False)
    msg_date=Column(String(100),nullable=False)
