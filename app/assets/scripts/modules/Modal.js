class Modal {
  constructor() {
    this.injectHTML();
    this.modal = document.querySelector(".modal");
    this.closeIcon = document.querySelector(".modal__close");
    this.events();
  }

  events() {
    // listen for close click
    this.closeIcon.addEventListener("click", () => this.closeTheModal());
    // listen for any key but must press ESC (27) to close
    document.addEventListener("keyup", e => this.keyPressHandler(e));
  }

  keyPressHandler(e) {
    // pres ESC to lose
    if (e.keyCode == 27) {
      this.closeTheModal();
    }
  }

  openTheModal() {
    this.modal.classList.add("modal--is-visible");
  }

  closeTheModal() {
    this.modal.classList.remove("modal--is-visible");
  }

  injectHTML() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
        <div class="modal">
    <div class="modal__inner">
      <h2 class="section-title section-title--newcolor section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon section-title__icon--not-right-now">쏘리 벗 낫 <strong>롸잇나우</strong>!</h2>
      <div class="wrapper wrapper--narrow">
        <p class="modal__description">곧 롸잇나우 서비스가 활성화될 예정입니다. 그때까지 문의 사항은 아래 플랫폼을 이용해서 연락해주시면 성실 것 답변해드리겠습니다!</p>
      </div>

      <div class="social-icons">
        <a href="https://youtube.com/dossbaby" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
        <a href="https://instagram.com/dossbaby" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
        <a href="https://facebook.com/dossbaby" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
        <a href="https://twitter.com/dossbb" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
      </div>
    </div>
    <div class="modal__close">X</div>
  </div>
        `
    );
  }
}

export default Modal;
