const stars = document.querySelectorAll(".stars i");

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});


stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    document.cookie = "rating=" + (index1);
    stars.forEach((star, index2) => {
      if (index1 >= index2) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });
  });
});

const resetButton = document.querySelector(".reset_button");
resetButton.addEventListener("click", resetRating);

const rating = getRating();
stars.forEach((star, index1) => {
  if (index1 <= rating) {
    star.classList.add("active");
  } else {
    star.classList.remove("active");
  }
});

function resetRating(event) {
  stars.forEach((star) => {
    star.classList.remove("active");
  });
  document.cookie = "rating=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  event.preventDefault();
}

function getRating() {
  const rating = parseInt(
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("rating="))
      ?.split("=")[1]
  );

  return rating;
}
