document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.mobile-menu-icon').addEventListener('click', function() {
      this.classList.toggle('open');
      document.querySelector('.dropdown-menu').classList.toggle('open');
  });
});
