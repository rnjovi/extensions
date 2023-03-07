chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'extractValue') {
      // Extract the "published" value from the page source
      var pattern = /"published":"(.*?)"/;
      var match = pattern.exec(document.documentElement.innerHTML);
      var published = match ? match[1] : null;
      // Send the extracted value back to the popup script
      sendResponse({ published: published });
    }
  });