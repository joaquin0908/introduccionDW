const clientes = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    dni: "12345678",
    fechaNacimiento: "1990-05-12",
    telefono: "1122334455",
    correo: "juan.perez@email.com"
  },
  {
    nombre: "Ana",
    apellido: "García",
    dni: "87654321",
    fechaNacimiento: "1985-10-30",
    telefono: "1199887766",
    correo: "ana.garcia@email.com"
  },
  {
    nombre: "Carlos",
    apellido: "López",
    dni: "45678912",
    fechaNacimiento: "1992-03-22",
    telefono: "1133557799",
    correo: "carlos.lopez@email.com"
  },
  {
    nombre: "Lucía",
    apellido: "Martínez",
    dni: "34567891",
    fechaNacimiento: "1995-11-03",
    telefono: "1177889900",
    correo: "lucia.martinez@email.com"
  },
  {
    nombre: "Pedro",
    apellido: "Gómez",
    dni: "56789123",
    fechaNacimiento: "1982-01-27",
    telefono: "1166554433",
    correo: "pedro.gomez@email.com"
  },
  {
    nombre: "Sofía",
    apellido: "Ruiz",
    dni: "67891234",
    fechaNacimiento: "1998-09-19",
    telefono: "1155332211",
    correo: "sofia.ruiz@email.com"
  },
];


const lista = document.querySelector('.listaClientes');

clientes.forEach(cliente => {
  const div = document.createElement('div');
  div.className = 'cartaCliente';
  div.innerHTML = `
    <h2>${cliente.nombre} ${cliente.apellido}</h2>
    <p> ${cliente.dni}</p>
    <p> ${cliente.fechaNacimiento}</p>
    <p > ${cliente.telefono}</p>
    <p > ${cliente.correo}</p>
  `;
  lista.appendChild(div);
});