document.addEventListener("DOMContentLoaded", () => {
    // Display current time in UTC
    function updateTime() {
      const now = new Date();
      const utcTime = now.toUTCString().split(' ')[4]; // Get time part of UTC string
      document.getElementById("utcTime").textContent = utcTime;
    }
  
    // Display current day of the week
    function updateDay() {
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const now = new Date();
      const currentDay = daysOfWeek[now.getUTCDay()]; // Get day of week in UTC
      document.getElementById("currentDay").textContent = currentDay;
    }
  
    updateTime();
    updateDay();
    
    // Update time every second
    setInterval(updateTime, 1000);
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    // Select the image and pre elements
    const image = document.querySelector('img.card-avatar');
    const output = document.querySelector('pre');
  
    image.addEventListener('load', function() {
      // Get natural dimensions
      const naturalWidth = image.naturalWidth;
      const naturalHeight = image.naturalHeight;
  
      // Display dimensions in the pre element
      output.textContent = `
  Natural size: ${naturalWidth} x ${naturalHeight} pixels
  Displayed size: ${image.width} x ${image.height} pixels
      `;
    });
  
    // Handle cached images that have already been loaded
    if (image.complete) {
      image.dispatchEvent(new Event('load'));
    }
  });
  