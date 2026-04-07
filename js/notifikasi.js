document.addEventListener("alpine:init", () => {
  Alpine.data("notificationApp", () => ({
    notifications: [],

    defaultNotifications: [
      {
        id: 1,
        title: "Poin Bertambah!",
        desc: "15+ poin untuk daily quiz yang sudah terselesaikan.",
        time: "Nov 26, 2023",
        section: "today",
        read: false,
      },
      {
        id: 2,
        title: "Latest Article",
        desc: "3 artikel terbaru yang wajib kamu baca!",
        time: "Nov 26, 2023",
        section: "today",
        read: false,
      },
      {
        id: 6,
        title: "Anda mendapat follower baru",
        desc: "Haidar mulai mengikuti Anda.",
        time: "Nov 25, 2023",
        section: "today",
        read: false,
      },
    ],

    init() {
      const saved = localStorage.getItem("notifications-data");

      if (saved) {
        this.notifications = JSON.parse(saved);
      } else {
        this.notifications = this.defaultNotifications;
        this.save();
      }
    },

    save() {
      localStorage.setItem(
        "notifications-data",
        JSON.stringify(this.notifications)
      );
    },

    get unreadCount() {
      return this.notifications.filter((n) => !n.read).length;
    },

    markAllRead() {
      this.notifications.forEach((n) => (n.read = true));
      this.save();
    },

    markRead(id) {
      const notif = this.notifications.find((n) => n.id === id);
      if (notif) {
        notif.read = true;
        this.save();
      }
    },

    deleteNotif(id) {
      this.notifications = this.notifications.filter((n) => n.id !== id);
      this.save();
    },
  }));
});
