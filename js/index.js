
$(document).ready(function(){

  var counting = 0;
  $.count_display = function(card_num_check){
  	if($("#" +card_num_check).css("display")!="none"){
          counting = counting+1;
          $("#count_txt").text(counting);
    }
    else if ($("#"+card_num_check).css("display") == "none") {
          counting = counting-1;
          $("#count_txt").text(counting);
    }
    if(counting==3){
        $("#analyze_img").css('display','inline-block');
    }
    else{
        $("#analyze_img").css('display','none');
    }

 }
    $("#btn_down").click(function(){
        $(".headermiddle").slideToggle("slow");
        $("#btn_down").hide();
        $("#btn_up").css('display','block');
    });
    $("#btn_up").click(function(){
        $(".headermiddle").slideToggle("slow");
        $("#btn_up").hide();
        $("#btn_down").css('display','block');
    });
//card1
    $(".rank1").click(function(){
      $('#card_1_check').toggle();
      $('#card_1_des').fadeToggle( "600", "linear" );
      $.count_display('card_1_check');
    });

    $(".rank1").mouseover(function(){
      if($("#card_1_back").css("display")=="none"){
          $("#card_1_back").css('display','block');
        };
    });
    $(".rank1").mouseout(function(){
      if($("#card_1_check").css("display")=="none"){
          $("#card_1_back").css('display','none');
        };
    });
  //end card1

    //card2
    $(".rank2").click(function(){
      $('#card_2_check').toggle();
      $('#card_2_des').fadeToggle( "600", "linear" );
      $.count_display('card_2_check');
    });
    $(".rank2").mouseover(function(){
      if($("#card_2_back").css("display")=="none"){
          $("#card_2_back").css('display','block');
        };
    });
    $(".rank2").mouseout(function(){
      if($("#card_2_check").css("display")=="none"){
          $("#card_2_back").css('display','none');
        };
    });
    //end card2

    //card3
    $(".rank3").click(function(){
      $('#card_3_check').toggle();
      $('#card_3_des').fadeToggle( "600", "linear" );
      $.count_display('card_3_check');
    });
    $(".rank3").mouseover(function(){
      if($("#card_3_back").css("display")=="none"){
          $("#card_3_back").css('display','block');
        };
    });
    $(".rank3").mouseout(function(){
      if($("#card_3_check").css("display")=="none"){
          $("#card_3_back").css('display','none');
        };
    });
    //end card3

});