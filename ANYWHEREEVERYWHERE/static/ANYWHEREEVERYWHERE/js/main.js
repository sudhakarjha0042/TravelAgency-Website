const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

function submitRating(location) {
    event.preventDefault();
    const rating = document.getElementById(location + "-rating").value;
    console.log("location:", location, "rating:", rating);
  
fetch(`/save_rating/${location}/${rating}`)
    .then(response => response.json())
    .then(data => {
        console.log("data:", data);
      document.getElementById(location + "-rating-msg").textContent = "Thanks for rating!";
      document.getElementById(location + "-avg-rating").textContent = "Average rating: " + data.avg_rating;
      const avgRatingDiv = document.getElementById("avg-rating");
      avgRatingDiv.textContent = "Average rating: " + data.avg_rating.toFixed(1);
    })
  }
  
  function submitReview(location, review) {
    console.log(location, review);
    fetch(`/save_review/${location}/${review}`)
    .then(response => response.json())
    .then(data => {
      console.log("data:", data);
  })
}

