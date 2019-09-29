from sqlalchemy import Column,Integer,String
from models.mysql.mysql import db


class Items(db.Model):
    id = Column(Integer,primary_key=True,autoincrement=True)
    owner = Column(String(20),nullable=False)
    owner_contact = Column(String(20),nullable=False)
    item_name = Column(String(20),nullable=False)
    item_price = Column(Integer,nullable=False)
    item_intro = Column(String(100), nullable=False)
    item_pic = Column(String(100),nullable=False)