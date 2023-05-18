import React from 'react';

const CaptureButton = () => {
  const handleCapture = () => {
    // capture the content of an element
    const activeElement = document.activeElement;
    const capturedText = activeElement.textContent.trim();
    console.log(capturedText);

    if (capturedText) {
      const capturedElement = {
        text: capturedText,
        id: activeElement.id,
        sourceUrl: window.location.href,
      };

      // Save the captured element to local storage
      const capturedElements =
        JSON.parse(localStorage.getItem('capturedElements')) || [];
      capturedElements.push(capturedElement);
      localStorage.setItem(
        'capturedElements',
        JSON.stringify(capturedElements)
      );

      // Display confirmation to the user
      alert('Content has been saved');
    }
  };

  return <button onClick={handleCapture}>Capture This</button>;
};

export default CaptureButton;
