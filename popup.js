// Send a message to the content script to extract the value
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'extractValue' }, function(response) {
      if (response.published) {
        // Update the text of the "published" element in the popup window
        document.getElementById("published").textContent = response.published;
      }
    });
  });