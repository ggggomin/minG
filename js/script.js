$(document).ready(function(){
  // scroll
  const menu = $('header ul li'),
        contents = $('section')
  menu.click(function(){
    $(this).addClass('on')

    let idx = $(this).index()
    let section = contents.eq(idx)

    let sectionDistance = section.offset().top -70
    $('html, body').animate({
      scrollTop: sectionDistance
    })
  })
  // $(window).scroll(function(){
  //   contents.each(funtion(){
  //     console.log($(this).offset().top, $(window).scrollTop()+60)
  //     if($(this).offset().top <= $(window).scrollTop()+60){
  //       let idx = $(this).index();
  //       // console.log(idx)
  //       menu.removeClass("on")
  //       menu.eq(idx).addClass("on")
  //     }
  //   })
  // })
  // gotop
  const goTop = $('#gotop')
  goTop.click(function(){
    $('html, body').animate({scrollTop:0},1000)
  })
  // modal
  $('.work-container .list').click(function(){
    $('.modal').addClass("show")
    $('.modal').append(`<div class="item_box">
                          <iframe src="https://www.youtube.com/embed/${$(this).data("video")}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>`)
  })
  $('.modal .dim').click(function(){
    $('.modal .item_box').remove()
    $('.modal').removeClass("show")
  })
  $('.modal .xmark').click(function(){
    $('.modal .item_box').remove()
    $('.modal').removeClass("show")
  })
  $('.list img').mouseover(function(){
    $(this).attr("src",$(this).data("animated"))
  })
  $('.list img').mouseout(function(){
    $(this).attr("src",$(this).data("static"))
  })
})