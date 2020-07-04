export default (showBackground, setShowBackground) => {
  const scrollTop = document.scrollingElement.scrollTop;

  if (scrollTop > 100) {
    if (!showBackground) {
      setShowBackground(true);
    }
  } else {
    if (showBackground) {
      setShowBackground(false);
    }
  }
};
