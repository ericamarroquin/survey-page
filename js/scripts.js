$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const name = $("#name1").val();
    const food = $("#food").val();
    const genre = $("input:radio[name=genre]:checked").val();
    const date = $("#born").val();
    const color = $("#color").val();
    alert().text(name, food, genre, date, color);

  })
})