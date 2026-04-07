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
document.getElementById("username-3").textContent = name;
document.getElementById("email").textContent = email;
document.getElementById("profilePhoto").src = user.photo || "Assets/PP.png";

function postBtn() {
  const user = getUserData();

  const Poin = (user.poin ?? 0) + 50; // poin biasa
  addPoints(30); // poin level

  updateUserData({ poin: Poin });

  document.getElementById("poin-1").textContent = `${Poin} poin`;
  document.getElementById("poin-2").textContent = `${Poin} poin`;
}

const MAX_POINTS = 300;
let currentPoints = parseInt(localStorage.getItem("userPoints")) || 0;

function addPoints(amount) {
  currentPoints = Math.min(currentPoints + amount, MAX_POINTS);
  savePoints();
}

function savePoints() {
  localStorage.setItem("userPoints", currentPoints);
}

function communityApp() {
  return {
    deletePost(index) {
      const user = getUserData();

      // Cek apakah yang login adalah pembuat post
      if (this.posts[index].owner !== user.email) {
        alert("Kamu tidak bisa menghapus post orang lain!");
        return;
      }

      const confirmDelete = confirm("Yakin mau hapus post ini?");
      if (!confirmDelete) return;

      this.posts.splice(index, 1);
      localStorage.setItem("communityPosts", JSON.stringify(this.posts));
    },
    showForm: false,

    // 🔥 Ambil data dari localStorage ATAU pakai default jika kosong
    posts: JSON.parse(localStorage.getItem("communityPosts")) || [
      {
        name: "Ibrahim",
        level: 1,
        category: "Discussion",
        time: "Just now",
        title: "Ayo jaga kebersihan lingkungan!",
        message:
          "Halo teman-teman! Mari kita diskusikan cara-cara efektif untuk menjaga kebersihan lingkungan.",
        image: null,
        ppimage: "Assets/PP-2.png",
      },
      {
        name: "Haidar",
        level: 5,
        category: "Achievement",
        time: "2 hours ago",
        title: "Saya berhasil, loh!",
        message:
          "Hari ini saya berhasil mengumpulkan 5kg sampah plastik untuk didaur ulang. Yuk, kita semua berkontribusi!",
        image: "Assets/Post-img.jpg",
        ppimage: "Assets/PP-2.png",
      },
    ],

    addPost(e) {
      e.preventDefault();

      const category = e.target.category.value;
      const title = e.target.title.value;
      const message = e.target.message.value;

      const file = e.target.uploadImg.files[0];

      const user = getUserData();

      // Fungsi baca file jadi Base64
      const reader = new FileReader();

      reader.onload = () => {
        const base64Image = file ? reader.result : null;

        const newPost = {
          name: user.name ?? "Guest",
          owner: user.email ?? "guest", // ← ini penting
          level: user.level ?? 1,
          category,
          time: formatDate(),
          title,
          message,
          image: base64Image,
          ppimage: user.ppimage ?? "Assets/PP.png",
        };

        this.posts.unshift(newPost);

        localStorage.setItem("communityPosts", JSON.stringify(this.posts));

        this.showForm = false;
        e.target.reset();
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        reader.onload();
      }
    },
  };
}

function formatDate() {
  const d = new Date();

  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0"); // +1 karena 0-11
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
}
