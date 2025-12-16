document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  db.collection("bookings").add({
    name: document.getElementById("name").value,
    mobile: document.getElementById("mobile").value,
    car: document.getElementById("car").value,
    status: "Pending",
    reason: ""
  }).then(() => {
    alert("Booking submitted. Status: Pending");
    document.getElementById("bookingForm").reset();
  });
});

function checkStatus() {
  const mob = document.getElementById("checkMobile").value;
  const result = document.getElementById("statusResult");

  db.collection("bookings").where("mobile", "==", mob).get()
    .then(snapshot => {
      if (snapshot.empty) {
        result.innerText = "No booking found";
      } else {
        snapshot.forEach(doc => {
          const d = doc.data();
          result.innerText =
            "Status: " + d.status +
            (d.reason ? " | Reason: " + d.reason : "");
        });
      }
    });
}
