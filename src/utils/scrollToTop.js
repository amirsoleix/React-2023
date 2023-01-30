export default function scrollToTop(scrollTo = 0) {
  document.body.scrollTop = scrollTo; // for Safari
  document.documentElement.scrollTop = scrollTo; // For Chrome, Firefox, IE and Opera
}
