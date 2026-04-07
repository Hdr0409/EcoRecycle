const user = getUserData();

// Teks Halo username
const name = user.name ? user.name : "User";
const email = user.email ? user.email : "User@gmail.com";
const poin = `${user.poin ?? 0}`;
const level = `${user.level ?? 1}`;
document.getElementById("level").textContent = `${level}`;
document.getElementById("level-1").textContent = `Level ${level}`;
document.getElementById("level-2").textContent = `Level ${level}`;
document.getElementById("level-3").textContent = `Level ${level}`;
document.getElementById("poin").textContent = poin;
document.getElementById("poin-1").textContent = `${poin} poin`;
document.getElementById("poin-2").textContent = `${poin} poin`;
document.getElementById("poin-3").textContent = `${poin} poin`;
document.getElementById("greeting").textContent = `Halo, ${name}`;
document.getElementById("username-1").textContent = name;
document.getElementById("username-2").textContent = name;
document.getElementById("email").textContent = email;
document.getElementById("profilePhoto").src = user.photo || "Assets/PP.png";
const notifications =
  JSON.parse(localStorage.getItem("notifications-data")) || [];

const notifIcon = document.getElementById("notifIcon");

const unreadCount = notifications.filter((n) => !n.read).length;

if (unreadCount === 0 && notifications.length > 0) {
  notifIcon.src = "Assets/notif.png";
} else {
  notifIcon.src = "Assets/Lonceng.png";
}
window.addEventListener("focus", () => {
  const notifications =
    JSON.parse(localStorage.getItem("notifications-data")) || [];
  const notifIcon = document.getElementById("notifIcon");

  const unreadCount = notifications.filter((n) => !n.read).length;

  notifIcon.src =
    unreadCount === 0 && notifications.length > 0
      ? "Assets/notif.png"
      : "Assets/Lonceng.png";
});
const MAX_POINTS = 300;

// Ambil data dari localStorage atau pakai default
let currentPoints = parseInt(localStorage.getItem("userPoints")) || 0;

function updateProgress() {
  const percent = Math.min((currentPoints / MAX_POINTS) * 100, 100);

  // ===== Circle Progress =====
  const circle = document.getElementById("circleProgress");
  const circleText = document.getElementById("circlePercent");

  circle.style.background = `conic-gradient(#10b981 ${
    percent * 3.6
  }deg, #e5e7eb 0deg)`;
  circleText.textContent = `${Math.round(percent)}%`;

  // ===== Bar Progress =====
  document.getElementById("progressBar").style.width = percent + "%";

  // ===== Text =====
  document.getElementById(
    "progressText"
  ).textContent = `${currentPoints}/${MAX_POINTS}`;

  // ===== Level logic =====
  let level = "Beginner";
  if (currentPoints >= 100) level = "Intermediate";
  if (currentPoints >= 200) level = "Advanced";

  document.getElementById("levelText").textContent = `(${level})`;
}

// Simpan points ke localStorage
function savePoints() {
  localStorage.setItem("userPoints", currentPoints);
}

// Jalankan saat load
updateProgress();

// ====== Contoh: Tambah poin (untuk tes) ======
function addPoints(amount) {
  currentPoints = Math.min(currentPoints + amount, MAX_POINTS);
  savePoints();
  updateProgress();
}
