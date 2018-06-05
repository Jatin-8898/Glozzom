$(function() {
  // Auto play modal video
  $(".video").click(function () {
    var theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-video"),
    videoSRCauto = videoSRC + "Src1reQjAng";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});


$(document).on('click', '[data-toggle="lightbox"]', function(event){
  event.preventDefault();
  $(this).ekkoLightbox();
});



$('.slider').slick({
  infinite: true,
  slideToShow:1,
  slideToScroll:1
    
});