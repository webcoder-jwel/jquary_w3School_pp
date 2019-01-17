      $(document).ready(function(){
        $('button').click(function(){
          $("p:first").hide();
          $('.into').hide();
          $('ul li:nth-child(2)').hide();
        });

        $(".show").click(function(){
          $("ul li:nth-child(2)").show();
          $('.into').show();
          $('p:first').show();

        });
        $('tr:odd').css("background-color", "red");
        $('tr:odd').css("color", "white");
        $('tr:odd').css( "font-size", 25);
      });

      $(document).ready(function(){
        $('#mouse').mouseenter(function(){
          alert("You enter mouse!");
        });
        $('#mouse1').mouseleave(function(){
          alert("Bye! You now leave mouse");
        });

       $('#hover').hover(function(){
        alert("Yes, Mouse Hover Effect");
       },
       function(){
        alert("Bye, Mouse Hover Effect");
       });

       $('input').focus(function(){
        $(this).css("background-color", "red");
       });
       $('input').blur(function(){
        $(this).css("background-colr", "white");
       }); 
      });

      $(document).ready(function(){
        $('h3').on({
          mouseenter: function(){
            $(this).css("background-color", "red");
          },
          mouseleave: function(){
            $(this).css("background-color", "blue");
          },
          click: function(){
            $(this).css("background-color", "yellow");
          }
        });
      });

$(document).ready(function(){
  $('.btn').click(function(){
    $('.box').fadeIn();
    $('.box1').fadeIn('slow');
    $('.box2').fadeIn(3000);
  });

    $('.btn1').click(function(){
    $('.box').fadeOut();
    $('.box1').fadeOut('slow');
    $('.box2').fadeOut(3000);
    });

    $('.btn2').click(function(){
    $('.box').fadeToggle();
    $('.box1').fadeToggle('slow');
    $('.box2').fadeToggle(3000);
    });

    $('.btn3').click(function(){
    $('.box').fadeTo('slow', .5);
    $('.box1').fadeTo('slow', .75);
    $('.box2').fadeTo('slow', .9);
    });

    $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
    $('.flip').click(function(){
    $('.panel').slideUp("slow");
    });

    $('.flip1').click(function(){
    $('.panel1').slideToggle("slow");
    });

 $(".ani").click(function(){
    $("div").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
  });

// w3 shcool hw
$(document).ready(function(){
  $("button").click(function(){
    $(".box").animate({
      left: '250px',
      height: '-=100px',
      width: '+=100px',
      marginTop: '100px'
      
  });
  $(".box1").animate({
    left: '50px',
    height: 'toggle'
  })
  });

  $('.blue_btn').click(function(){
    var div = $("div");
      div.animate({height: '300px', opacity: '0.4'}, 'slow');
      div.animate({width: '300px', opacity: '0.8'}, 'slow');
      div.animate({height: '100px', opacity: '0.4'}, 'slow');
      div.animate({width: '100px', opacity: '0.8'}, 'slow');
  });




  $('#flip').click(function(){
    $('#pane').slideToggle(5000);
  });
  $('.slide').click(function(){
    $('#pane').stop();
  });


  $('#hide').click(function(){
    $('.p_hide').hide("slow", function(){
      alert('This paragraph is hide');
    });
  });

  $('#hide1').click(function(){
    $('.p_hide1').hide("slow");
    alert('this paragaph is hide');
  });

  $('#hide2').click(function(){
    $('.p_hide2')
    .css("fontSize", "25px")
    .css("color", "#fff")
    .slideUp(2000)
    .css("backgroundColor", "#ff751a")
    .css("display", "block")
    .css("padding", "20px")
    .slideDown(2000);
    $('#hide3').click(function(){
      $('.p_hide2').stop();
    })
  });

  $('li:odd').addClass('odd');
  $('li:even').addClass('even');
  $('li:first').addClass('first');
  $('li:last').addClass('last');
  $('li:eq(5)').addClass('nth');

});

$(document).click(function(){
  $('p').click(function(){
    $(this).hide('fast');
  });
});

$(document).ready(function(){
  $('h2:not(h2:eq(3))').fadeOut(3000);

  $('h3').hide();
  $('#show').click(function(){
  $("h3:contains('Forhat')").fadeIn(2000);
  });

  $('a[title=tw]').fadeOut(3000);
  $(':input:password').addClass('fn');
});


// w3 shcool hw