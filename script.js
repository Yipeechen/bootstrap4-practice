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

    //DROPDOWN觸發事件
    //開始顯示時
    $('#js-dropdown').on('show.bs.dropdown', () => {
      console.log('show')
    })
    //完全顯示後
    $('#js-dropdown').on('shown.bs.dropdown', () => {
      console.log('shown')
    })
    //開始隱藏時
    $('#js-dropdown').on('hide.bs.dropdown', () => {
      console.log('hide')
    })
    //完成隱藏時
    $('#js-dropdown').on('hidden.bs.dropdown', () => {
      console.log('hidden')
    })

    //LISTGROUP:點擊顯示該對應的內容
    const list = $('#js-tab-demo .list-group a')
    list.on('click', function(event){
      event.preventDefault();
      $(this).tab('show')
    })

    //LISTGROUP觸發事件
    //開始顯示時
    list.on('show.bs.tab',function(event){
      console.log(`開始顯示：${ event.target.getAttribute('href')}`)
    })
    //完全顯示時
    list.on('shown.bs.tab',function(event){
      console.log(`完全顯示：${ event.target.getAttribute('href')}`)
    })
    //開始隱藏時
    list.on('hide.bs.tab',function(event){
      console.log(`開始隱藏：${ event.target.getAttribute('href')}`)
    })
    //完全隱藏時
    list.on('hidden.bs.tab',function(event){
      console.log(`完全隱藏：${ event.target.getAttribute('href')}`)
    })

    //MODAL
    //開始顯示時
    $('#modal-demo').on('show.bs.modal', function(){
      console.log('show')
    })
    //完全顯示時
    $('#modal-demo').on('shown.bs.modal', function(){
      console.log('shown')
    })
    //開始隱藏時
    $('#modal-demo').on('hide.bs.modal', function(){
      console.log('hide')
    })
    //完全隱藏時
    $('#modal-demo').on('hidden.bs.modal', function(){
      console.log('hidden')
    })

    //POPOVERS
    $('[data-toggle="popover"]').popover()

    //TOOLTIP
    $('[data-toggle="tooltip"]').tooltip()

    //FORM VALIDATE
    $('#form-demo').on('submit', function(event){
      const form = $(this)

      //如果沒有通過驗證
      if(form[0].checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      }

      //通過驗證
      form.addClass("was-validated");
    })
  });