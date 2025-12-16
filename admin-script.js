// Admin credentials
const ADMIN_USER = "jangrah247";
const ADMIN_PASS = "jangra2025";

function login() {
  const u = document.getElementById("adminUser").value;
  const p = document.getElementById("adminPass").value;

  if (u === ADMIN_USER && p === ADMIN_PASS) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
    loadBookings();
  } else {
    alert("Wrong username or password");
  }
}

function loadBookings() {
  const list = document.getElementById("bookingList");
  list.innerHTML = "Loading...";

  db.collection("bookings")
    .orderBy("createdAt", "desc")
    .onSnapshot(snapshot => {
      list.innerHTML = "";
      snapshot.forEach(doc => {
        const d = doc.data();

        let statusClass = "pending";
        if (d.status === "Accepted") statusClass = "accepted";
        if (d.status === "Rejected") statusClass = "rejected";

        list.innerHTML += `
          <div class="booking">
            <p><b>Name:</b> ${d.name}</p>
            <p><b>Mobile:</b> ${d.mobile}</p>
            <p><b>Car:</b> ${d.car}</p>
            <p><b>From:</b> ${d.from_date} | <b>To:</b> ${d.to_date}</p>
            <p><b>Status:</b> <span class="${statusClass}">${d.status}</span></p>
            ${d.reason ? `<p><b>Reason:</b> ${d.reason}</p>` : ""}

            <button onclick="acceptBooking('${doc.id}')">Accept</button>
            <button onclick="rejectBooking('${doc.id}')">Reject</button>
          </div>
        `;
      });
    });
}

function acceptBooking(id) {
  db.collection("bookings").doc(id).update({
    status: "Accepted",
    reason: ""
  });
}

function rejectBooking(id) {
  const reason = prompt("Enter reason for rejection:");
  if (!reason) return;

  db.collection("bookings").doc(id).update({
    status: "Rejected",
    reason: reason
  });
}
