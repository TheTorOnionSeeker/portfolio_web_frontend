let alertShow = false;

setInterval(() => {
  document.title = alertShow
    ? "¡¡¡Bienvenido!!!!"
    : "Portfolio de Guillermo Núñez";
  alertShow = !alertShow;
}, 3000);
