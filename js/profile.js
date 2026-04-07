const user = getUserData();
const name = user.name ? user.name : "Guest";
const bio = user.bio
  ? user.bio
  : "Saya adalah kontributor aktif DIYrecycle yang berdedikasi dalam pengelolaan sampah berkelanjutan. Memiliki pengalaman luas dalam pemilahan sampah organik dan anorganik, serta aktif menyalurkan makanan surplus. Bergabung sejak 2024 dengan misi membuat lingkungan lebih bersih dan berkelanjutan.";
document.getElementById("username-1").textContent = name;
document.getElementById("bio").textContent = bio;
document.getElementById("profileBanner").src =
  user.banner || "Assets/Banner.png";

document.getElementById("profilePhoto").src = user.photo || "Assets/PP.png";
