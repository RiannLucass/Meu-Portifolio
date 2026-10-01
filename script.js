const items = document.querySelectorAll(".item[data-modal]");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".modal-close");

/* =========================================
   ABRIR MODAL
========================================= */

items.forEach((item) => {
  item.addEventListener("click", () => {
    const modalId = item.dataset.modal;

    const modal = document.getElementById(modalId);

    if (modal) {
      modal.classList.add("active");
    }
  });
});

/* =========================================
   FECHAR MODAL
========================================= */

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");

    modal.classList.remove("active");
  });
});

/* =========================================
   FECHAR CLICANDO FORA
========================================= */

modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("active");
    }
  });
});

/* =========================================
   FECHAR COM ESC
========================================= */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modals.forEach((modal) => {
      modal.classList.remove("active");
    });
  }
});

// =============================
// ZOOM DOS CERTIFICADOS
// =============================

const certificateImages = document.querySelectorAll(".certificate-image img");

const certificateViewer = document.getElementById("certificateViewer");

const certificateViewerImage = document.getElementById(
  "certificateViewerImage",
);

const certificateViewerClose = document.querySelector(
  ".certificate-viewer-close",
);

// Abrir certificado

certificateImages.forEach((image) => {
  image.addEventListener("click", () => {
    certificateViewerImage.src = image.src;

    certificateViewerImage.alt = image.alt;

    certificateViewer.classList.add("active");
  });
});

// Fechar pelo X

certificateViewerClose.addEventListener("click", () => {
  certificateViewer.classList.remove("active");
});

// Fechar clicando fora da imagem

certificateViewer.addEventListener("click", (event) => {
  if (event.target === certificateViewer) {
    certificateViewer.classList.remove("active");
  }
});

// Fechar com ESC

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    certificateViewer.classList.remove("active");
  }
});

// =============================
// GMAIL
// =============================

function abrirGmail() {

  const largura = 800;
  const altura = 600;

  const esquerda = (screen.width - largura) / 2;
  const topo = (screen.height - altura) / 2;

  const email = "riannlucas22@gmail.com";
  const assunto = encodeURIComponent("Contato através do meu portfólio");

  const url =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${assunto}`;

  window.open(
    url,
    "Gmail",
    `width=${largura},height=${altura},left=${esquerda},top=${topo}`
  );
}


/* =========================================================
   PROJETO EM DESENVOLVIMENTO
========================================================= */

function projetoEmDesenvolvimento() {

  const modal =
    document.getElementById(
      "projetoIndisponivel"
    );

  if (modal) {

    modal.classList.add("active");

  }

}