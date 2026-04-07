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
function calculator() {
  return {
    material: "",
    quantity: "",
    co2Saved: 0,
    treesSaved: 0,

    // 🔥 Faktor CO2 untuk masing-masing material
    materialFactors: {
      aluminum: 0.75,
      plastic: 0.04,
      glass: 0.07,
      paper: 0.007,
      cardboard: 0.09,
      iron: 1.05,
      copper: 4.0,
      ewaste: 7.0,
      textile: 3.6,
      organic: 0.27, // per kg kompos
    },

    // 🔥 Label Human-Readable
    materialLabel() {
      const labels = {
        aluminum: "Kaleng Aluminium",
        plastic: "Botol Plastik",
        glass: "Kaca",
        paper: "Kertas",
        cardboard: "Kardus",
        iron: "Besi",
        copper: "Tembaga",
        ewaste: "Elektronik (E-Waste)",
        textile: "Tekstil / Baju",
        organic: "Organik / Kompos",
      };
      return labels[this.material] || "";
    },

    // 🔥 Auto Hitung
    calculateImpact() {
      if (!this.material || !this.quantity || this.quantity <= 0) {
        this.co2Saved = 0;
        this.treesSaved = 0;
        return;
      }

      this.co2Saved = this.materialFactors[this.material] * this.quantity;

      this.treesSaved = this.co2Saved / 21.77; // CO₂ diserap pohon per tahun
    },
  };
}
