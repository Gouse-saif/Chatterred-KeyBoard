const hamburger_menu = document.querySelector(".hamburger-menu");

const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

$(".child1").on({
  click: function () {
    $(".change").fadeOut("slow", function () {
      $(".change").attr("src", "assets/images/pic1.png");
      $(".change").fadeIn("slow");
    });
  },
});
$(".child2").on({
  click: function () {
    $(".change").fadeOut("slow", function () {
      $(".change").attr("src", "assets/images/pic2.png");
      $(".change").fadeIn("slow");
    });
  },
});
$(".child3").on({
  click: function () {
    $(".change").fadeOut("slow", function () {
      $(".change").attr("src", "assets/images/pic1.png");
      $(".change").fadeIn("slow");
    });
  },
});
$(".child4").on({
  click: function () {
    $(".change").fadeOut("slow", function () {
      $(".change").attr("src", "assets/images/pic2.png");
      $(".change").fadeIn("slow");
    });
  },
});

$(".child5").on({
  click: function () {
    $(".change").fadeOut("slow", function () {
      $(".change").attr("src", "pic1.png");
      $(".change").fadeIn("slow");
    });
  },
});
$(".child6").on({
  click: function () {
    $(".change").fadeOut("slow", function () {
      $(".change").attr("src", "pic2.png");
      $(".change").fadeIn("slow");
    });
  },
});
$(".child7").on({
  click: function () {
    $(".change").fadeOut("slow", function () {
      $(".change").attr("src", "pic1.png");
      $(".change").fadeIn("slow");
    });
  },
});
$(".child8").on({
  click: function () {
    $(".change").fadeOut("slow", function () {
      $(".change").attr("src", "pic2.png");
      $(".change").fadeIn("slow");
    });
  },
});

$(".child9").on({
  click: function () {
    $(".change").fadeOut("slow", function () {
      $(".change").attr("src", "assets/images/pic1.png");
      $(".change").fadeIn("slow");
    });
  },
});
$(".child10").on({
  click: function () {
    $(".change").fadeOut("slow", function () {
      $(".change").attr("src", "assets/images/pic2.png");
      $(".change").fadeIn("slow");
    });
  },
});
$(".child11").on({
  click: function () {
    $(".change").fadeOut("slow", function () {
      $(".change").attr("src", "assets/images/pic1.png");
      $(".change").fadeIn("slow");
    });
  },
});
$(".child12").on({
  click: function () {
    $(".change").fadeOut("slow", function () {
      $(".change").attr("src", "assets/images/pic2.png");
      $(".change").fadeIn("slow");
    });
  },
});

$(".child13").on({
  click: function () {
    $(".change").fadeOut("slow", function () {
      $(".change").attr("src", "pic1.png");
      $(".change").fadeIn("slow");
    });
  },
});
$(".child14").on({
  click: function () {
    $(".change").fadeOut("slow", function () {
      $(".change").attr("src", "pic2.png");
      $(".change").fadeIn("slow");
    });
  },
});
$(".child15").on({
  click: function () {
    $(".change").fadeOut("slow", function () {
      $(".change").attr("src", "pic1.png");
      $(".change").fadeIn("slow");
    });
  },
});
$(".child16").on({
  click: function () {
    $(".change").fadeOut("slow", function () {
      $(".change").attr("src", "pic2.png");
      $(".change").fadeIn("slow");
    });
  },
});

// ======= Onclick Sound Effect =======
// var sound = new Audio('assets/Audio/Keyboard_press_-_Sound_Effect.mp3');
// let child = document.querySelectorAll(".child");

// child.addEventListener('click',()=>{
// 	sound.currentTime = 0;
// 	sound.play();
// });

function play() {
  var audio = new Audio('assets/Audio/Keyboard_press_-_Sound_Effect.mp3');
  audio.play();
}


// ======= Scroll Reveal Animation =======
const sr = ScrollReveal({ 
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: false,
});

// Scroll For Home
sr.reveal(".title", { delay: 700, distance: "100px" });
sr.reveal(".btn", { delay: 200, distance: "100px" });

