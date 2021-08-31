$(function () {

  // 메인 1개씩 나타나는 효과
  var jbTime = 500;
  $('.order_1').animate({
    opacity: '1',
    margin: '0'
  }, jbTime, function () {
    $('.order_2').animate({
      opacity: '1',
      margin: '0'
    }, jbTime, function () {
      $('.order_3').animate({
        opacity: '1',
        margin: '0'
      }, jbTime, function () {
        $('.order_4').animate({
          opacity: '1',
          margin: '0'
        }, jbTime, function () {
          $('.order_5').animate({
            opacity: '1',
            margin: '0'
          }, jbTime, function () {
            $('.order_6').animate({
              opacity: '1',
              margin: '0'
            }, jbTime, function () {
              $('.order_7').animate({
                opacity: '1',
                margin: '0'
              }, jbTime, function () {
                $('.order_8').animate({
                  opacity: '1',
                  margin: '0'
                }, jbTime, function () {
                  $('.order_9').animate({
                    opacity: '1',
                    margin: '0'
                  }, jbTime, function () {
                    $('.order_10').animate({
                      opacity: '1',
                      margin: '0'
                    }, jbTime, function () {
                      $('.order_11').animate({
                        opacity: '1',
                        margin: '0'
                      }, jbTime, function () {
                        $('.order_12').animate({
                          opacity: '1',
                          margin: '0'
                        }, jbTime, function () {
                          $('.order_13').animate({
                            opacity: '1',
                            margin: '0'
                          }, jbTime, function () {
                            $('.order_14').animate({
                              opacity: '1',
                              margin: '0'
                            }, jbTime, function () {
                              $('.order_15').animate({
                                opacity: '1',
                                margin: '0'
                              }, jbTime, function () {
                                $('.order_16').animate({
                                  opacity: '1',
                                  margin: '0'
                                }, jbTime, function () {
                                  $('.order_17').animate({
                                    opacity: '1',
                                    margin: '0'
                                  }, jbTime);
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });

  $(window).load(function () {
    setTimeout(function() {
      $('.content-sub--tit span').addClass('on');
    }, 100);

    setTimeout(function() {
      $('.content-sub--tit b').addClass('on');
    }, 1200);
  });

});