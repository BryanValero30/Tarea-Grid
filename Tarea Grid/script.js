document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const form = e.target;
    const hobbies = Array.from(form.querySelectorAll('input[name="hobbies"]:checked'))
                         .map(h => h.value)
                         .join(', ');
  
    const datos = `
      <p><strong>Cédula:</strong> ${form.cedula.value}</p>
      <p><strong>Nombre:</strong> ${form.nombre.value}</p>
      <p><strong>Apellido:</strong> ${form.apellido.value}</p>
      <p><strong>Dirección:</strong> ${form.direccion.value}</p>
      <p><strong>Teléfono:</strong> ${form.telefono.value}</p>
      <p><strong>Correo:</strong> ${form.correo.value}</p>
      <p><strong>Fecha de nacimiento:</strong> ${form.fecha_nacimiento.value}</p>
      <p><strong>Hora de cita:</strong> ${form.hora_cita.value}</p>
      <p><strong>Género:</strong> ${form.genero.value}</p>
      <p><strong>Hobbies:</strong> ${hobbies}</p>
      <p><strong>Comentarios:</strong> ${form.comentarios.value}</p>
    `;
  
    document.getElementById('resultado').innerHTML = datos;
  });
  