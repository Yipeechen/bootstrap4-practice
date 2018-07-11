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
});