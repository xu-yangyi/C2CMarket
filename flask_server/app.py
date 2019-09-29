import base64
import json
import time
from flask import Flask, jsonify, request

from tools import AlchemyEncoder
from models.mysql.school_user_items import Items
from models.mysql.user import User
from models.mysql.school_user import SchoolUser
from models.mysql.school_user_chat import SchoolUserMsg
from models.mysql.mysql import db


app = Flask(__name__)
app.config.from_object('secure')
app.config.from_object('setting')


db.init_app(app)
db.create_all(app=app)



@app.route('/user/login',methods=['GET','POST'])
def get_user_msg():
    if request.method=='POST':
        data=request.json
        q_user = User.query.filter_by(name=data['user']).first()
        if q_user.pwd==data['pwd']:
            return jsonify({'code':0,'user':q_user.name,'contact':q_user.contact})
        else:
            return jsonify({'code':1,'msg':'用户名或密码错误'})
    else:
        pass


@app.route('/user/register',methods=['GET','POST'])
def user_register():
    if request.method=='POST':
        data=request.json
        if User.query.filter_by(name=data['user']).count():
            return jsonify({'code':1,'msg':'用户名已存在'})
        add_user=User(name=data['user'],pwd=data['pwd'],contact=data['contact'])
        db.session.add(add_user)
        db.session.commit()
        return jsonify({'code':0})
    else:
        pass


# 跳蚤市场demo部分
@app.route('/school_user/register',methods=["GET","POST"])
def register_school_user():
    if request.method=='POST':
        data=request.json
        if SchoolUser.query.filter_by(name=data['user']).count():
            return jsonify({'code':1,'msg':'用户名已存在'})
        add_user=SchoolUser(name=data['user'],pwd=data['pwd'])
        db.session.add(add_user)
        db.session.commit()
        return jsonify({'code':0})
    else:
        pass


@app.route('/school_user/login',methods=['GET','POST'])
def get_school_user_msg():
    if request.method=='POST':
        data=request.json
        q_user = SchoolUser.query.filter_by(name=data['user']).first()
        if not q_user:
            return jsonify({'code': 1, 'msg': '用户名不存在'})
        if q_user.pwd==data['pwd']:
            return jsonify({'code':0,'user':q_user.name,'favors':q_user.favors})
        else:
            return jsonify({'code':1,'msg':'用户名或密码错误'})
    else:
        pass


@app.route('/schoolC2C/upload',methods=['GET',"POST"])
def record_school_items():
    def get_data_from_DataURL(data):
        index = data.find(',')
        return data[index:]
    if request.method == 'POST':
        data=request.json

        add_item = Items(item_name=data['itemName'], item_price=data['itemPrice'],
                         item_intro=data['itemIntro'],owner=data['itemOwner'],
                         owner_contact=data['contact'],item_pic='None')
        db.session.add(add_item)
        db.session.commit()

        # 生成唯一标识id后在命名图片，防止图片过多时命名重复
        Id='static/itemsImg/'+str(add_item.id)+str(time.time())+'.jpg'
        img_data=data['imgURL']
        img_data=get_data_from_DataURL(img_data)
        with open(Id,'wb') as f:
            f.write(base64.b64decode(img_data))
        add_item.item_pic=Id
        db.session.commit()

        return jsonify({'code':0})
    return jsonify({'code':1,'msg':'服务器出错！请稍后重试'})


@app.route('/school_user/get_personal_items_list',methods=["GET","POST"])
def get_personal_items_list():
    if request.method=="POST":
        user=request.json['user']
        if user!='all':
            items=Items.query.filter_by(owner=user).all()
        else:
            items = Items.query.all()

        return json.dumps({'code':0,'itemsList':items},cls=AlchemyEncoder)
    return jsonify({'code':1})


@app.route('/school_user/get_item_pic',methods=['GET','POST'])
def get_item_pic():
    if request.method=="POST":
        user=request.json['user']
        items=Items.query.filter_by(owner=user).all()

        return json.dumps({'code':0,'itemsList':items},cls=AlchemyEncoder)
    return jsonify({'code':1})


@app.route('/school_user/add_favor',methods=['GET','POST'])
def add_favor():
    if request.method=="POST":
        name = request.json['user']
        item_id = request.json['itemId']

        user_row = SchoolUser.query.filter_by(name=name).first()
        if user_row.favors:
            user_row.favors+=str(item_id)+','
        else:
            user_row.favors=str(item_id)+','    # 首次收藏
        db.session.commit()

        return json.dumps({'code':0,'favors':user_row.favors})
    return jsonify({'code':1})


@app.route('/school_user/del_favor',methods=['GET','POST'])
def del_favor():
    if request.method=="POST":
        name = request.json['user']
        item_id = str(request.json['itemId'])+','

        row = SchoolUser.query.filter_by(name=name).first()
        row.favors=row.favors.replace(item_id,'')
        db.session.commit()

        return json.dumps({'code':0,'favors':row.favors})
    return jsonify({'code':1})


@app.route('/school_user/del_item',methods=['GET','POST'])
def del_item():
    if request.method=="POST":
        item_id = request.json['id']

        row = Items.query.filter_by(id=item_id).first()
        db.session.delete(row)
        db.session.commit()

        return json.dumps({'code':0})
    return jsonify({'code':1})

@app.route('/school_user/send_msg',methods=['GET','POST'])
def school_send_msg():
    if request.method=="POST":
        chatId=request.json['chatId']
        from_user=request.json['from_user']
        to_user=request.json['to_user']
        content=request.json['content']
        date=request.json['date']

        add_msg=SchoolUserMsg(msg_from=from_user,msg_to=to_user,msg_date=date,chatId=chatId,content=content)
        db.session.add(add_msg)
        db.session.commit()
        return json.dumps({'code':0})
    return jsonify({'code':1})

if __name__ == '__main__':
    app.run()
