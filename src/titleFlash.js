let alertShow = false;

export default function titleFlash(){
  setInterval(() => {
    document.title = alertShow
      ? "¡¡¡Bienvenido!!!!"
      : "Portfolio de Guillermo Núñez";
    alertShow = !alertShow;
  }, 3000);
}
