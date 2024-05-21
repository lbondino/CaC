/* =====================================================
Faq: Script para que si abro un item los demas se cierren:
======================================================== */
var detalles = document.querySelectorAll('.acordeon');

detalles.forEach(function (detalle) {
    detalle.addEventListener('click', function () {
        // Cerrar todos los elementos <details> excepto el que se ha hecho clic
        detalles.forEach(function (otroDetalle) {
            if (otroDetalle !== detalle) {
                otroDetalle.removeAttribute('open'); // Cerrar el detalle
            }
        });
    });
});