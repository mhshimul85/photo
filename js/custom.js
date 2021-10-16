$(function () {
  // Variables
  // let photoName = "3.jpg";

  // Functions
  // function data_input() {}

  function handlePhoto(input) {
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onload = function (e) {
        $(".passport, .stamp").attr("src", e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      alert("Select a Photo.");
      $(".container").html("");
    }
  }

  function photoLoop(length, selector, className) {
    for (let i = 1; i <= length; i++) {
      $(selector).append(`<img class="${className}" src="" />`);
    }
  }

  // function photoLoop(length, selector, className, photoName) {
  //   for (let i = 1; i <= length; i++) {
  //     $(selector).append(
  //       `<img class="${className}" src="images/${photoName}" />`
  //     );
  //   }
  // }

  // Events
  // $(".container").click(function () {});

  // photoLoop(25, ".container", "passport", photoName);
  // photoLoop(10, ".container", "stamp", photoName);

  $(".photo").change(function () {
    $(".container").html("");
    $(".container").html(() => {
      photoLoop(25, ".container", "passport");
      photoLoop(10, ".container", "stamp");
    });
    handlePhoto(this);
  });

  $(".print").click(() => {
    $(".footer").hide();
    window.print();
    $(".container").html("");
    $(".footer").show();
  });

  // console.log($(".container").innerWidth());
});
