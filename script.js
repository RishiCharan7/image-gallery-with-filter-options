// script.js

$(document).ready(function () {
  // Initial state: show all images
  $(".image").show();

  // Filter images based on button click
  $(".filter button").on("click", function () {
    var category = $(this).data("filter");

    // Show all images if 'All' button is clicked
    if (category === "all") {
      $(".image").show();
    } else {
      // Hide all images and show only those with the selected category
      $(".image").hide();
      $("." + category).show();
    }

    // Highlight the active filter button
    $(".filter button").removeClass("active");
    $(this).addClass("active");
  });
});
