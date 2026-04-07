// Ambil data user
function getUserData() {
  return JSON.parse(localStorage.getItem("userData")) || {};
}

// Simpan data user
function saveUserData(data) {
  localStorage.setItem("userData", JSON.stringify(data));
}

// Update sebagian data user
function updateUserData(newData) {
  const current = getUserData();
  const updated = { ...current, ...newData };
  saveUserData(updated);
}
function updateUserData(data) {
  const user = getUserData() || {};
  const updated = { ...user, ...data };
  localStorage.setItem("userData", JSON.stringify(updated));
}

function getUserData() {
  return JSON.parse(localStorage.getItem("userData")) || {};
}
