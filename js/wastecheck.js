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

function wasteChecker() {
  return {
    search: "",
    selected: null,
    result: null,

    materials: [
      // ORGANIK
      { name: "Sisa Makanan", type: "Organik" },
      { name: "Daun Kering", type: "Organik" },
      { name: "Buah Busuk", type: "Organik" },
      { name: "Sayuran Busuk", type: "Organik" },
      { name: "Serbuk Kayu", type: "Organik" },
      { name: "Tulang Ikan / Ayam", type: "Organik" },
      { name: "Kulit Telur", type: "Organik" },
      { name: "Kertas Tisu", type: "Organik" },

      // ANORGANIK
      { name: "Kertas", type: "Anorganik" },
      { name: "Botol Plastik", type: "Anorganik" },
      { name: "Kaleng", type: "Anorganik" },
      { name: "Kaca", type: "Anorganik" },
      { name: "Kemasan Kardus", type: "Anorganik" },
      { name: "Styrofoam", type: "Anorganik" },
      { name: "Aluminium Foil", type: "Anorganik" },
      { name: "Plastik Kresek", type: "Anorganik" },
      { name: "Pakaian Bekas", type: "Anorganik" },
      { name: "Elektronik Rusak", type: "Anorganik" },
      { name: "Ban Bekas", type: "Anorganik" },

      // B3 (Berbahaya & Beracun)
      { name: "Aki / Baterai", type: "B3" },
      { name: "Oli Bekas", type: "B3" },
      { name: "Lampu Pijar", type: "B3" },
      { name: "Lampu Neon", type: "B3" },
      { name: "Pestisida", type: "B3" },
      { name: "Obat Kedaluwarsa", type: "B3" },
      { name: "Cat & Thinner", type: "B3" },
      { name: "Termometer Raksa", type: "B3" },
      { name: "Detergen Pekat", type: "B3" },
      { name: "Pemutih Pakaian", type: "B3" },
    ],

    info: {
      Organik: {
        color: "from-green-500 to-green-600",
        desc: "Sampah organik adalah sampah yang mudah terurai secara alami. Dapat diolah menjadi kompos dan sangat aman bagi lingkungan jika dikelola dengan benar.",
      },
      Anorganik: {
        color: "from-yellow-500 to-yellow-600",
        desc: "Sampah anorganik adalah sampah yang sulit terurai seperti plastik, kaca, dan kaleng. Sebaiknya dipisahkan dan didaur ulang agar tidak mencemari lingkungan.",
      },
      B3: {
        color: "from-red-500 to-red-600",
        desc: "Sampah B3 (Bahan Berbahaya & Beracun) sangat berbahaya bagi kesehatan dan lingkungan. Harus dibuang ke fasilitas khusus dan tidak boleh dicampur dengan sampah lainnya.",
      },
    },

    filteredMaterials() {
      return this.materials.filter((m) =>
        m.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },

    choose(item) {
      this.selected = item;
      this.search = "";
    },

    detect() {
      if (!this.selected) return;

      const typeInfo = this.info[this.selected.type];

      this.result = {
        type: this.selected.type,
        color: typeInfo.color,
        desc: typeInfo.desc,
      };
    },
  };
}
