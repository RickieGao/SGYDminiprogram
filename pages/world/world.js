// pages/world/world.js

// const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // newsList:[],
    // openid:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // setTimeout(()=>{
    //   this.setData({
    //     className:"content active"
    //   });      
    // },2000);
    
    // this.setData({
    //   openid:wx.getStorageSync('openid')
    // });
    // this.getData();
  },

  // getData(){
    
    // db.collection('card').where({
    //   _openid: this.data.openid
    // }).get({
    //   success:res=>{
      
    //     let data = res.data.map((item)=>{
    //         item.className = 'content';
    //         return item;
    //     });

    //     this.setData({
    //       newsList:data
    //     });
    //   }
    // })
  // },

  // remove(e){
  //   console.log(e.target.dataset.id);
  //   let id = e.target.dataset.id;
  //   let list = this.data.newsList;
  //   let changeList = list.map((item)=>{
  //       if(item._id === id){
  //         item.className = 'content active';
  //       }
  //       return item;
  //   });

    //TODO:加上删除动画
    /*
      修改active这个class  
        加上动画，css animation

    */

    // this.setData({
    //   newsList:changeList
    // });
    
    // db.collection('card').doc(id).remove({
    //   success:(res)=>{
    //     console.log(res);
    //     this.getData();
    //   }
    // });
  // },

  /*
    删除做成动画
  */

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  // onPullDownRefresh: function () {
  //   this.getData();
  // },

  /**
   * 页面上拉触底事件的处理函数
   */
  // onReachBottom: function () {

  // },

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {

  // }
})