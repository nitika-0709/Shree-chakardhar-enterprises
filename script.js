<script>
document.addEventListener("DOMContentLoaded", function () {

  const ADMIN_USER = "jangrah247";
  const ADMIN_PASS = "jangra2025";

  const loginBtn = document.getElementById("adminLoginBtn");
  const panel = document.getElementById("adminPanel");

  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      const u = document.getElementById("adminUser").value;
      const p = document.getElementById("adminPass").value;

      if (u === ADMIN_USER && p === ADMIN_PASS) {
        panel.style.display = "block";
        alert("Admin login successful");
        loadBookings(); // bookings load
      } else {
        alert("Wrong username or password");
      }
    });
  }

});

/* LOAD BOOKINGS */
function loadBookings() {
  db.collection("bookings").onSnapshot(s => {
    bookingList.innerHTML = "";
    s.forEach(d => {
      let x = d.data();
      bookingList.innerHTML += `
      <div class="car-card">
        ${x.name} | ${x.car} | ${x.mobile}<br>
        Status: ${x.status}<br>
        <button onclick="updateBooking('${d.id}','Accepted')">Accept</button>
        <button onclick="rejectBooking('${d.id}')">Reject</button>
      </div>`;
    });
  });
}

/* UPDATE */
function updateBooking(id, status) {
  db.collection("bookings").doc(id).update({
    status: status,
    reason: ""
  });
}

/* REJECT */
function rejectBooking(id) {
  const reason = prompt("Reason for rejection?");
  if (!reason) return;

  db.collection("bookings").doc(id).update({
    status: "Rejected",
    reason: reason
  });
}
</script>
