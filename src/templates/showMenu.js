export function showMenu(event) {
  const navButton = document.getElementById("navbar__burgermenue");
  const navBar = document.getElementById("burgermenue");
  if (event.target.closest(".navbar__burgermenue")) {
    navButton.classList.toggle("active");
    navBar.classList.toggle("hidden");
  } else if (event.target === navBar) {
    return;
  } else if (
    !event.target.closest(".navbar__burgermenue") ||
    event.target.closest(".nav-link")
  ) {
    navButton.classList.remove("active");
    navBar.classList.add("hidden");
  }
}
