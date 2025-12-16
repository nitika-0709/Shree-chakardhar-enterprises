document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("bookingForm");

  if (!form) {
    console.error("bookingForm not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const car = document.getElementById("car").value;
    const fromDate = document.getElementById("from_date").value;
    const toDate = document.getElementById("to_date").value;

    db.collection("bookings").add({
      name: name,
      mobile: mobile,
      car: car,
      from_date: fromDate,
      to_date: toDate,
      status: "Pending",
      reason: "",
      createdAt: new Date()
    })
    .then(() => {
      alert("Booking submitted successfully. Status: Pending");
      form.reset();
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      alert("Error submitting booking. Check console.");
    });
  });

});

function checkStatus() {
  const mob = document.getElementById("checkMobile").value;
  const result = document.getElementById("statusResult");

  if (!mob) {
    result.innerText = "Please enter mobile number";
    return;
  }

  db.collection("bookings")
    .where("mobile", "==", mob)
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.empty) {
        result.innerText = "No booking found for this number";
      } else {
        querySnapshot.forEach((doc) => {
          const d = doc.data();
          result.innerText =
            "Status: " + d.status +
            (d.reason ? " | Reason: " + d.reason : "");
        });
      }
    })
    .catch((error) => {
      console.error("Error checking status: ", error);
      result.innerText = "Error checking status";
    });
}
