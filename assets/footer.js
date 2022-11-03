(function ($) {
  $(".menu-items-wrapper h2, .contact-info, .join-us, svg").on("click", function () {
    $(this).toggleClass("active");
    $(this).closest(".menu-wrapper").toggleClass("active-menu");
  });
});
