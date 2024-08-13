const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
let matrizCodigo = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

// Validación: solo letras minúsculas y sin acentos.
textArea.addEventListener("input", function (event) {
  const regex = /^[a-z\s]*$/;
  if (!regex.test(event.target.value)) {
    event.target.value = event.target.value.replace(/[^a-z\s]/g, "");
    alert("Solo se permiten letras minúsculas y sin acento.");
  }
});
function btnCopiar() {
  mensaje.select();
  document.execCommand("copy");
}
function btnEncriptar() {
  if (textArea.value.trim() === "") {
    alert(
      "El campo de texto está vacío. Por favor, ingrese un texto para encriptar."
    );
    return;
  }
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
  if (textArea.value.trim() === "") {
    alert(
      "El campo de texto está vacío. Por favor, ingrese un texto para desencriptar."
    );
    return;
  }
  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.value = textoDesencriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
  stringEncriptada = stringEncriptada.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
  stringDesencriptada = stringDesencriptada.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}
