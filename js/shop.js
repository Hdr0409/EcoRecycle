const user = getUserData();
const name = user.name ? user.name : "Guest";
const email = user.email ? user.email : "Guest@gmail.com";
const poin = Number(user.poin ?? 0);
const level = `${user.level ?? 1}`;
const stock1 = user.stock1 ? user.stock1 : 50;
const stock2 = user.stock2 ? user.stock2 : 10;
const stock3 = user.stock3 ? user.stock3 : 70;
const stock4 = user.stock4 ? user.stock4 : 5;
document.getElementById("level-1").textContent = `Level ${level}`;
document.getElementById("level-2").textContent = `Level ${level}`;
document.getElementById("poin-1").textContent = `${poin} poin`;
document.getElementById("poin-2").textContent = `${poin} poin`;
document.getElementById("poin-3").textContent = `${poin} poins`;
document.getElementById("username-1").textContent = name;
document.getElementById("username-2").textContent = name;
document.getElementById("email").textContent = email;
document.getElementById("profilePhoto").src = user.photo || "Assets/PP.png";

function shopData() {
  return {
    balance: poin,
    openPopup: false,
    selectedItem: {},
    qty: 1,

    openRedeem(item) {
      this.selectedItem = item;
      this.qty = 1;
      this.openPopup = true;

      if (item.stock <= 0) {
        alert("Stok barang ini sudah habis!");
        this.openPopup = false;
      }
    },

    closePopup() {
      this.openPopup = false;
    },
    increaseQty() {
      if (this.qty < this.selectedItem.stock) {
        this.qty++;
      }
    },

    decreaseQty() {
      if (this.qty > 1) {
        this.qty--;
      }
    },

    confirmRedeem() {
      // Ambil data user
      const user = getUserData();

      // Cek stok dulu
      if (this.selectedItem.stock <= 0) {
        alert("Stok habis!");
        return;
      }

      // Cek jika qty > stok
      if (this.qty > this.selectedItem.stock) {
        alert(`Stok hanya tersisa ${this.selectedItem.stock}`);
        return;
      }

      // Kurangi poin
      const totalCost = this.qty * this.selectedItem.price;
      user.poin -= totalCost;

      // Kurangi stok item
      const stok = (this.selectedItem.stock -= this.qty);
      if (this.selectedItem.name === "Eco Tote Bag") {
        user.stock1 = stok;
      } else if (this.selectedItem.name === "Shirt Eco Design") {
        user.stock2 = stok;
      } else if (this.selectedItem.name === "Coffe") {
        user.stock3 = stok;
      } else if (this.selectedItem.name === "Sticker") {
        user.stock4 = stok;
      }
      user[
        `stock${
          this.selectedItem.name.split(" ")[1] === "Eco"
            ? "1"
            : this.selectedItem.name.split(" ")[1] === "Shirt"
            ? "2"
            : this.selectedItem.name.split(" ")[0] === "Coffe"
            ? "3"
            : "4"
        }`
      ] = stok;

      // Simpan data user
      saveUserData(user);

      // Tutup popup utama & tampilkan popup sukses
      this.openPopup = false;
      this.successPopup = true;

      // Update tampilan poin di HTML
      document.getElementById("poin-1").textContent = `${user.poin} poin`;
      document.getElementById("poin-2").textContent = `${user.poin} poin`;
      document.getElementById("poin-3").textContent = `${user.poin} poins`;
      this.balance = user.poin;
    },

    items: [
      {
        name: "Eco Tote Bag",
        desc: "Tote bag official unik dari ecorecycle",
        price: 200,
        stock: stock1,
        image: "Assets/S-1.png",
      },
      {
        name: "Shirt Eco Design",
        desc: "Design unik official dari EcoRecycle",
        price: 500,
        stock: stock2,
        image: "Assets/S-2.png",
      },
      {
        name: "Coffe",
        desc: "Kopi susu hangat yang menemani pagi anda",
        price: 400,
        stock: stock3,
        image: "Assets/S-3.png",
      },
      {
        name: "Sticker",
        desc: "Design stiker unik official dari EcoRecycle",
        price: 100,
        stock: stock4,
        image: "Assets/S-4.png",
      },
    ],
  };
}
