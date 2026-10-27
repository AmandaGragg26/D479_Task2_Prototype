// Filter buttons (Stay, Eat & Shop, Things to Do)
document.querySelectorAll(".filters button").forEach(function (b) {
  b.addEventListener("click", function () {
    document.querySelectorAll(".filters button").forEach(function (x) {
      x.setAttribute("aria-pressed", x === b);
    });
    document.querySelectorAll("[data-cat]").forEach(function (card) {
      card.hidden = b.dataset.c !== "all" && card.dataset.cat !== b.dataset.c;
    });
  });
});

// Booking form (book.html)
var go = document.getElementById("go");
if (go) {
  var item = new URLSearchParams(location.search).get("item") || "your choice";
  document.getElementById("item").textContent = item;
  go.addEventListener("click", function () {
    var d = document.getElementById("d").value, e = document.getElementById("e").value;
    if (!d || !e) { alert("Please enter a date and email."); return; }
    var n = document.getElementById("g").value;
    var box = document.getElementById("f");
    box.innerHTML = '<div class="note"><b>Step 2 of 2 – Confirmed (demo)</b><br></div>' +
      '<a class="btn" href="things-to-do.html">Back to Things to Do</a> <a class="btn o" href="index.html">Home</a>';
    box.querySelector(".note").append(item + " on " + d + " for " + n + " people. A confirmation would be sent to " + e + ".");
  });
}
