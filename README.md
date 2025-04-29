# 运行失败的解决办法

```bash
npx rimraf node_modules
npm cache clean --force
rm $HOME/.android/debug.keystore # 如果显示被占用，删除失败，可以重启电脑再试
npm install
npm run android
```

# 运行方法
1. 克隆代码：

```
git clone git@github.com:licoded/rn-wechat.git --branch release/try-run-under-windows
```

2. 进入项目根目录并安装依赖：

```
cd rn-wechat
npm install
```

3. 运行项目到安卓模拟器或真机：

```
npm install
npm run start-avd
# 新建第2个terminal
npm run start
# 新建第3个terminal
npm run android # 打包debug apk包，并安装到安卓虚拟机
```

# 已实现功能
- [x] 登录、注册
- [x] 单聊发送文本与图片
- [x] 发朋友圈
- [x] 朋友圈点赞与评论
- [x] 与机器人聊天
- [x] 修改昵称与头像

# 未实现功能
- [ ] 群聊
- [ ] 发送位置、表情、文件、视频等
- [ ] 适配刘海屏

# 更新记录
* 2018-12-22 更新项目，RN为当前的最新版本0.57.8，react-navigation库为当前的最新版本3.x
* 2018-03-09 删除react-native-camera库和ac-qrcode库，扫一扫功能不可用(由于官方react-native-camera库更新了，导致我的iOS项目里使用一直报错无法解决，遂暂时去掉扫一扫功能，后续解决问题了再恢复)
* 2018-01-19 加入图灵聊天机器人
* 2018-01-10 接口做上传限制，禁止上传非图片类型的文件
* 2018-01-09 服务端迁移，域名改为app.yubo725.top
* 2017-10-11 修复客户端和服务端的某些bug，由于服务端代码回退和覆盖导致客户端修改头像修改昵称的功能不可用，目前已恢复。
* 2017-10-09 UI适配iOS。
* 2017-09-30 代码适配iOS（目前还有一些小问题），加入iOS截图，修复之前的一些bug。
* 2017-09-29 删除网易云信IM，改用环信IM（网易巨坑，免费版超过100人无法收发消息，文档里又没有注明，法克！！！）。
* 2017-09-15 聊天界面显示消息时间。
* 2017-09-13 加入单聊功能，目前仅支持文本消息，加入修改昵称的功能。
* 2017-09-06 加入摇一摇页面，加入APP更新对话框（该更新不是热更新，而是下载apk覆盖安装的更新，等后面完成所有功能的开发后再加入热更新功能），修复某些bug。
* 2017-09-05 完成朋友圈的点赞和评论功能，为了逻辑简单，只做了针对楼主的评论，没有做针对回复人的评论。
* 2017-08-29 完成发朋友圈的功能。
* 2017-08-24 加入个人信息页面，加入修改头像的功能。
* 2017-08-18 修改注册和登录功能，加入了网易云信SDK。
* 2017-08-15 加入注册、登录和注销功能，可以注册新用户，IM功能采用了网易云信SDK。
* 2017-08-11 加入扫一扫功能，加入登录注册页面，登录和注册的功能后面实现，加入购物页面和卡包页面。
* 2017-06-08 修改联系人数据从服务端获取，包括联系人姓名、头像等，其他部分数据暂时为测试数据。

# 截图

## iOS截图（iPhone8）
<div>
<img src='./screenshots/ios01.png' width=280>
<img src='./screenshots/ios02.png' width=280>
<img src='./screenshots/ios03.png' width=280>
</div>
<div>
<img src='./screenshots/ios04.png' width=280>
<img src='./screenshots/ios05.png' width=280>
<img src='./screenshots/ios06.png' width=280>
</div>
<div>
<img src='./screenshots/ios07.png' width=280>
<img src='./screenshots/ios08.png' width=280>
<img src='./screenshots/ios09.png' width=280>
</div>

## Android截图
<img src='./screenshots/01.png'>
<img src='./screenshots/02.png'>
<img src='./screenshots/03.png'>
<img src='./screenshots/04.png'>
<img src='./screenshots/new.jpg'>
