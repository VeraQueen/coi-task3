class CustomSwiper {
  constructor(selector) {
    this.swiper = document.querySelector(selector);
    this.swiperInstance = null;
    this.prevButton = this.swiper.querySelector(".swiper-button-prev");
    this.nextButton = this.swiper.querySelector(".swiper-button-next");
  }

  // Initialize swiper
  initializeSwiper() {
    if (this.swiperInstance) return;
    this.swiperInstance = new Swiper(this.swiper, {
      slidesPerView: "1",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // Destroy swiper
  destroySwiper() {
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
      this.swiperInstance = null;
    }
  }

  // Log active slides
  logActiveSlide() {
    if (this.swiperInstance) {
      this.swiperInstance.on("slideChange", () => {
        console.log(`Active slide index: ${this.swiperInstance.activeIndex}`);
        this.togglePrevNextButton();
      });
    }
  }

  // Toggle prev/next btns on mobile
  togglePrevNextButton() {
    const activeSlideIndex = this.swiperInstance.activeIndex;

    if (activeSlideIndex === 0) {
      this.prevButton.classList.remove("show-prev");
    } else {
      this.prevButton.classList.add("show-prev");
    }

    if (activeSlideIndex === 3) {
      this.nextButton.classList.add("remove-next");
    } else {
      this.nextButton.classList.remove("remove-next");
    }
  }
}

const mySwiper = new CustomSwiper(".swiper");

// Swiper toggle btn
document.querySelector(".swipper-toggle-btn").addEventListener("click", () => {
  if (mySwiper.swiperInstance) {
    mySwiper.destroySwiper();
  } else {
    mySwiper.initializeSwiper();
    mySwiper.logActiveSlide();
  }
});
