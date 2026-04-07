AOS.init({
  duration: 900, // kecepatan animasi
  once: true, // animasi hanya sekali
  offset: 120, // jarak sebelum animasi mulai
  easing: "ease-out-cubic",
});

function countUp() {
  return {
    display: "0",
    target: 0,
    duration: 1500,

    start() {
      this.target = Number(this.$el.dataset.target); // ambil angka dari HTML
      let start = 0;
      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let percentage = Math.min(progress / this.duration, 1);

        let value = Math.floor(percentage * this.target);

        // Format otomatis: 85%, 200+, 1M+, dll
        if (this.target < 100) {
          // Format persen
          this.display = value + "%";
        } else if (this.target >= 1000000) {
          this.display = Math.floor(value / 1000000) + "M+";
        } else if (this.target >= 1000) {
          this.display = Math.floor(value / 1000) + "K+";
        } else {
          this.display = value.toLocaleString();
        }

        if (percentage < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    },
  };
}
function navbar() {
  return {
    openMobile: false,
  };
}
