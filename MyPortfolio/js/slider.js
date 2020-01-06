$(function() {
  $('.slick').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    slidesToShow:3,
    slidesToScroll:1,
    centerMode: true,
    responsive: [ //レスポンシブの設定

      {
        breakpoint: 700, //ブレークポイント2の値
          settings: { //ブレークポイント2のオプション
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
      }
    ]
  });
});
