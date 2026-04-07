// Alpine root state for navbar (keperluan global small)
function navbar() {
  return {
    openMobile: false,
  };
}

function sendEmail() {
  this.sending = true;

  setTimeout(() => {
    this.fullName = "";
    this.email = "";
    this.subject = "";
    this.message = "";
    this.subscribe = false;

    this.sending = false;
    this.success = true;
    setTimeout(() => (this.success = false), 2500);
  }, 600);
}
