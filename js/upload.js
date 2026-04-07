const user = getUserData();
const name = user.name ? user.name : "Guest";
const email = user.email ? user.email : "Guest@gmail.com";
const poin = `${user.poin ?? 0}`;
const level = `${user.level ?? 1}`;
document.getElementById("level-1").textContent = `Level ${level}`;
document.getElementById("level-2").textContent = `Level ${level}`;
document.getElementById("poin-1").textContent = `${poin} poin`;
document.getElementById("poin-2").textContent = `${poin} poin`;
document.getElementById("username-1").textContent = name;
document.getElementById("username-2").textContent = name;
document.getElementById("email").textContent = email;
document.getElementById("profilePhoto").src = user.photo || "Assets/PP.png";

function wasteFlow() {
  return {
    step: 1,
    imageData: null,

    // Default result (bisa kamu ganti sesuai dataset)
    result: {
      category: "UNORGANIK",
      item: "Botol Plastik",
      description:
        "Sampah ini termasuk golongan material plastik, yang seharusnya didaur ulang atau dikumpulkan ke bank sampah.",
      points: 10,
      do: [
        "Bersihkan botol sebelum didaur ulang",
        "Pisahkan dengan sampah organik",
        "Masukkan ke bank sampah",
      ],
      dont: [
        "Membuang botol ke sungai",
        "Membakar botol plastik",
        "Mencampur dengan sampah basah",
      ],
    },

    handleFile(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageData = e.target.result;
        this.step = 2;
      };
      reader.readAsDataURL(file);
    },

    reset() {
      this.step = 1;
      this.imageData = null;
    },

    analyze() {
      // Normalnya di sini kirim ke AI / API model deteksi & analisis
      this.step = 3;
    },
    addPoinBtn() {
      const user = getUserData(); // baca data terbaru
      const Poin = (user.poin ?? 0) + 10; // tambah 10

      updateUserData({ poin: Poin }); // simpan
      document.getElementById("poin-1").textContent = `${Poin} poin`;
      document.getElementById("poin-2").textContent = `${Poin} poin`;
    },
  };
}

const MAX_POINTS = 300;

// Ambil data dari localStorage atau pakai default
let currentPoints = parseInt(localStorage.getItem("userPoints")) || 0;

// Simpan points ke localStorage
function savePoints() {
  localStorage.setItem("userPoints", currentPoints);
}

// ====== Contoh: Tambah poin (untuk tes) ======
function addPoints(amount) {
  currentPoints = Math.min(currentPoints + amount, MAX_POINTS);
  savePoints();
}
