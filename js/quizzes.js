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

document.addEventListener("alpine:init", () => {
  Alpine.data("quizApp", () => ({
    currentIndex: 0,
    selected: null,
    showExplanation: false,
    score: 0,
    quizCompleted: false,

    questions: [
      {
        question: "Jenis sampah apa yang paling mudah di daur ulang?",
        options: ["Botol plastik", "kemasan saset", "styrofoam", "kertas"],
        answer: 3,
        explanation:
          "kertas hanya perlu dihancurkan menjadi pulp, disaring, dibersihkan, lalu dicetak kembali.",
      },
      {
        question: "Mengapa daur ulang penting?",
        options: [
          "Agar sampah semakin banyak",
          "Menghemat sumber daya alam",
          "Membuat udara menjadi kotor",
          "Mengurangi bahan bakar",
        ],
        answer: 1,
        explanation:
          "Recycle membantu menghemat sumber daya alam agar tidak cepat habis.",
      },
      {
        question: "Simbol recycle biasanya berbentuk...",
        options: [
          "Segitiga dengan tiga panah",
          "Lingkaran penuh",
          "Persegi",
          "Garis lurus",
        ],
        answer: 0,
        explanation:
          "Simbol universal recycle adalah segitiga dari tiga panah.",
      },
      {
        question: "Salah satu manfaat recycle bagi lingkungan adalah…",
        options: [
          "Sampah menjadi bertambah",
          "Menghemat sumber daya alam",
          "Menghasilkan lebih banyak limbah beracun",
          "Mengurangi kegiatan penghijauan",
        ],
        answer: 1,
        explanation: "Recycle membantu mengurangi penggunaan bahan mentah.",
      },
      {
        question: "Berikut yang termasuk contoh kegiatan recycle adalah…",
        options: [
          "Memakai botol minum plastik sebagai tempat pensil",
          "Mengurangi penggunaan sedotan plastik",
          "Mengubah botol plastik menjadi serat kain",
          "Menyimpan kotak makanan untuk dipakai ulang",
        ],
        answer: 2,
        explanation:
          "Botol plastik bisa diolah menjadi serat kain untuk pakaian.",
      },
    ],

    get currentQuestion() {
      return this.questions[this.currentIndex];
    },

    selectOption(i) {
      if (this.showExplanation) return;
      this.selected = i;
      this.showExplanation = true;

      if (i === this.currentQuestion.answer) {
        this.score++;
      }
    },

    getOptionClass(i) {
      if (!this.showExplanation) return "border-gray-300 hover:bg-gray-100";

      if (i === this.currentQuestion.answer) {
        return "bg-green-100 border-green-400 text-green-700";
      }
      if (i === this.selected && i !== this.currentQuestion.answer) {
        return "bg-red-100 border-red-400 text-red-700";
      }
      return "border-gray-300";
    },

    nextQuestion() {
      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;
        this.selected = null;
        this.showExplanation = false;
      } else {
        this.quizCompleted = true;

        // ➕ Tambah poin jika score 5
        if (this.score === 5) {
          const user = getUserData(); // baca data terbaru
          const Poin = (user.poin ?? 0) + 30; // tambah 10

          addPoints(25);

          updateUserData({ poin: Poin }); // simpan
          document.getElementById("poin-1").textContent = `${Poin} poin`;
          document.getElementById("poin-2").textContent = `${Poin} poin`;
        }
      }
    },

    restart() {
      this.currentIndex = 0;
      this.selected = null;
      this.score = 0;
      this.quizCompleted = false;
      this.showExplanation = false;
    },
  }));
});
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
