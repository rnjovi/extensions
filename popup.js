document.addEventListener('DOMContentLoaded', function() {
  // Send a message to the content script requesting the extracted value
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'extractValue' }, function(response) {
      // Update the popup with the extracted value and the number of days since the publish date
      if (response.published) {
        var publishDate = new Date(response.published);
        var currentDate = new Date();
        var daysSincePublish = Math.round((currentDate - publishDate) / (1000 * 60 * 60 * 24));
        document.getElementById('published').textContent = response.published + ' (' + daysSincePublish + ' days ago)';
      } else {
        document.getElementById('published').textContent = 'Value not found.';
      }
    });
  });
});