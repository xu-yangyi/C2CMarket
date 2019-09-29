# 一、项目介绍
**应用技术**：</br>　　前端：React+Redux全家桶；</br>　　服务器端：flask</br>　　新技术尝试：react-Cropper(在线裁剪图片，好用推荐！)</br>　　　　　　　　flask-socket（实现服务器向客户端主动推送，实现实时通信）</br>　　实现功能：登录注册，物品收藏，上架下架，图片裁剪，实时聊天，搜索过滤等

**项目说明**：</br>　　学校课设选题开发一个校园C2C市场，刚好能把学习的React和flsk框架应用上，自己最近也在着手开发个人博客，就把这个demo嵌入到博客页中了。这次的UI界面和业务逻辑全是自己亲手写的，可能有些地方地方不尽人意，自己也在不断完善。</br>
　　（补充：消息界面存在些BUG，还需要进一步完善，后续更新上传）
     
# 二、实现功能与截图展示

1.**用户登录注册** ：没啥难点，所以讲登录注册合并在同个界面，这里不赘述</br>
<img src="https://raw.githubusercontent.com/JunYuanHub/img/master/C2CMarket/login.png" width=90%></br>
2.**收藏物品** ：用户登录后物品栏会发生状态改变，点击右上红心即可收藏，并会出现在个人收藏页中</br>
<img src="https://raw.githubusercontent.com/JunYuanHub/img/master/C2CMarket/shoucang.png" width=90%></br>
3.**上架/下架物品**：进入我的上架界面可上架/下架物品</br>
<img src="https://raw.githubusercontent.com/JunYuanHub/img/master/C2CMarket/shangxiajia.png" width=90%></br>
4.**在线剪辑图片**：上架物品时会要求上传图片，图片从本地上传后需要经过裁剪，以适应网页呈现样式，主要通过react-Cropper组件实现</br>
<img src="https://raw.githubusercontent.com/JunYuanHub/img/master/C2CMarket/caijain.png" width=90%></br>
5.**搜索过滤**：在用户操作栏的搜索框，可输入关键字搜索商品名或者商家名字，进行筛选</br>
<img src="https://raw.githubusercontent.com/JunYuanHub/img/master/C2CMarket/search.png" width=90%></br>
6.**实时聊天**：点击商品图片会进入聊天界面，可以发送信息（待修复）</br>
<img src="https://raw.githubusercontent.com/JunYuanHub/img/master/C2CMarket/xiaoxi.png" width=90%></br>
# END
