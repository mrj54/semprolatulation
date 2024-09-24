// Get the current page URL
const currentPageUrl = window.location.href;

// Define a mapping of pages
const pageMapping = {
  'index.html': 'page2.html',
  'page2.html': 'page3.html',
  // Add more page mappings as needed
};

// Get the button element
const nextPageButton = document.querySelector('button.bg-red-600');

// Add an event listener to the button
nextPageButton.addEventListener('click', () => {
  // Determine the next page based on the current page
  const nextPageUrl = pageMapping[currentPageUrl];
  if (nextPageUrl) {
    // Navigate to the next page
    window.location.href = nextPageUrl;
  }
});