import React from 'react';

const CaptureButton = () => {
  const handleCapture = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: 'captureSelectedText' }, (response) => {
        if (response && response.selectedText) {
          const capturedElement = {
            text: response.selectedText,
            sourceUrl: activeTab.url,
          };

          // Save the captured element to local storage
          const capturedElements = JSON.parse(localStorage.getItem('capturedElements')) || [];
          capturedElements.push(capturedElement);
          localStorage.setItem('capturedElements', JSON.stringify(capturedElements));

          // Display confirmation to the user
          alert('Content has been saved');
        }
      });
    });
  };

  return (
    <button onClick={handleCapture}>
      Capture Selected Text
    </button>
  );
};

export default CaptureButton;
