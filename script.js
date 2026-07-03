// ============================================
//  MENÚ HAMBURGUESA + CIERRE AUTOMÁTICO
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // ===== MENÚ HAMBURGUESA (abrir/cerrar) =====
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // ===== CERRAR MENÚ AL HACER CLIC EN UN ENLACE =====
    const navLinks = document.querySelectorAll('.nav a');

    if (navLinks && navMenu) {
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active'); // Cierra el menú
            });
        });
    }

    // ===== FORMULARIO → WHATSAPP (sin cambios) =====
    const form = document.getElementById('form-reserva');
    const btn = document.getElementById('btn-enviar-whatsapp');

    if (form && btn) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(form);
            const data = {
                nombre: formData.get('nombre') || '',
                email: formData.get('email') || '',
                telefono: formData.get('telefono') || '',
                servicio: formData.get('servicio') || '',
                fecha: formData.get('fecha') || '',
                horario: formData.get('horario') || '',
                destino: formData.get('destino') || '',
                pasajeros: formData.get('pasajeros') || '',
                detalles: formData.get('detalles') || '',
                cotizacion: formData.get('solicitar-cotizacion') ? 'Sí' : 'No'
            };

            const mensaje = `📋 *NUEVA RESERVA URSA*
            
 *Nombre:* ${data.nombre}
 *Correo:* ${data.email}
 *Teléfono:* ${data.telefono}
 *Servicio:* ${data.servicio}
 *Fecha:* ${data.fecha}
 *Horario:* ${data.horario}
 *Destino:* ${data.destino}
 *Pasajeros:* ${data.pasajeros}
 *Detalles:* ${data.detalles || 'Ninguno'}
 *¿Cotización previa?* ${data.cotizacion}`;

            const mensajeCodificado = encodeURIComponent(mensaje);
            const numero = '529842180514';

            window.open(`https://wa.me/${numero}?text=${mensajeCodificado}`, '_blank');
            alert('✅ Mensaje enviado a WhatsApp. Serás redirigido al chat.');

            form.reset();
            const fileInput = document.getElementById('cot-archivo');
            const fileNameDisplay = document.querySelector('.file-name');
            if (fileInput && fileNameDisplay) {
                fileInput.value = '';
                fileNameDisplay.textContent = 'Ningún archivo seleccionado';
            }
        });
    }

    // ===== CAMPO DE ARCHIVO (mostrar nombre) =====
    const fileInput = document.getElementById('cot-archivo');
    const fileNameDisplay = document.querySelector('.file-name');

    if (fileInput && fileNameDisplay) {
        fileInput.addEventListener('change', function(e) {
            const fileName = e.target.files[0]?.name || 'Ningún archivo seleccionado';
            fileNameDisplay.textContent = fileName;
        });
    }

});