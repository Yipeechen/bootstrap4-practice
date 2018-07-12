$(function(){

    //ALERT:點擊紅色close按鈕關閉提示
    $('.js-close-alert').on('click',function(){
      $('.alert').alert('close')
    })

    //關閉提示觸發兩項事件：close.bs.alert & closed.bs.alert
    $('.alert').on('close.bs.alert', () => {  //執行關閉
      console.log('close alert')
    })

    $('.alert').on('closed.bs.alert', () => {  //關閉結束
      console.log('closed alert')
    })

    //CAROUSEL:預設五秒鐘播放下一張，間隔時間設定method-2(js)
    $('.carousel').carousel({
      interval: 3000  //間隔時間
    })

    //滾動時觸發
    $('.carousel').on('slide.bs.carousel', function(event){
      console.log('slide: ', `
        方向：${ event.direction }
        從： ${ event.from }
        到： ${ event.to }
      `)
    })
    //完成滾動後觸發
    $('.carousel').on('slid.bs.carousel', function(event){
      console.log('slid: ', `
        方向：${ event.direction }
        從： ${ event.from }
        到： ${ event.to }
      `)
    })
});