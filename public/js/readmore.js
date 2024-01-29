$('.moreless-button').click(function() {
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "Click below to check out the account details!") {
      $(this).text("Click below to check out the account details!")
    } else {
      $(this).text("Click here to check out the account details!")
    }
  });