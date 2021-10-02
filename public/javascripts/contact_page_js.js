// File Name: contact_page_js.js | Student Name: Zachery Cardoza | Student Id: 301183433 | Oct 2nd, 2021
var userInfo = {
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
};
(function ($) {
  $(document).ready(function () {
    $(".contact-btn").on("click", function () {
      var inputs = document.querySelectorAll(".input1");
      if (inputs != null) {
        inputs.forEach((input) => {
          switch (input.name) {
            case "name":
              userInfo.name = $(input).html();
              break;
            case "email":
              userInfo.email = $(input).html();
              break;
            case "phone":
              userInfo.phoneNumber = $(input).html();
              break;
            case "message":
              userInfo.message = $(input).html();
              break;
            default:
              break;
          }
        });
      }
      localStorage.setItem("UserInfo", JSON.stringify(userInfo));
      location.href = "/";
    });
  });
})(jQuery);
