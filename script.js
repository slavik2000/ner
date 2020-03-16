window.addEventListener("load", function(event) {
  var slider1 = document.querySelector(".slider-1");
  var slider2 = document.querySelector(".slider-2");
  var slider3 = document.querySelector(".slider-3");
  var s2 = document.querySelector(".s2");
  var s3 = document.querySelector(".s3");
  var s4 = document.querySelector(".s4");
  var s6 = document.querySelector(".s6");
  var s7 = document.querySelector(".s7");
  var s8 = document.querySelector(".s8");
  var link = document.querySelector(".contacts-btn");
  var popup = document.querySelector(".modal-content");
  var close = popup.querySelector(".modal-content-close");

  link.addEventListener("click", function() {
    event.preventDefault();
    popup.classList.toggle("modal-content-show");
  });
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
  });

  s2.addEventListener("click", function(event) {
    event.preventDefault();
    if (slider1.classList.contains("show")) {
      slider1.classList.remove("show");
    }
    if (!slider2.classList.contains("show")) {
      slider2.classList.add("show");
    }
    if (slider3.classList.contains("show")) {
      slider3.classList.remove("show");
    }
  });

  s3.addEventListener("click", function(event) {
    event.preventDefault();
    if (slider1.classList.contains("show")) {
      slider1.classList.remove("show");
    }
    if (slider2.classList.contains("show")) {
      slider2.classList.remove("show");
    }
    if (!slider3.classList.contains("show")) {
      slider3.classList.add("show");
    }
  });

  s4.addEventListener("click", function(event) {
    event.preventDefault();
    if (!slider1.classList.contains("show")) {
      slider1.classList.add("show");
    }
    if (slider2.classList.contains("show")) {
      slider2.classList.remove("show");
    }
    if (slider3.classList.contains("show")) {
      slider3.classList.remove("show");
    }
  });

  s6.addEventListener("click", function(event) {
    event.preventDefault();
    if (slider1.classList.contains("show")) {
      slider1.classList.remove("show");
    }
    if (slider2.classList.contains("show")) {
      slider2.classList.remove("show");
    }
    if (!slider3.classList.contains("show")) {
      slider3.classList.add("show");
    }
  });

  s7.addEventListener("click", function(event) {
    event.preventDefault();
    if (!slider1.classList.contains("show")) {
      slider1.classList.add("show");
    }
    if (slider2.classList.contains("show")) {
      slider2.classList.remove("show");
    }
    if (slider3.classList.contains("show")) {
      slider3.classList.remove("show");
    }
  });

  s8.addEventListener("click", function(event) {
    event.preventDefault();
    if (slider1.classList.contains("show")) {
      slider1.classList.remove("show");
    }
    if (!slider2.classList.contains("show")) {
      slider2.classList.add("show");
    }
    if (slider3.classList.contains("show")) {
      slider3.classList.remove("show");
    }
  });
});
