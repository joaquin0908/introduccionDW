function obtenerCodigoViaje(){
 return  Math.floor(Math.random()*999) + 1;
}

const paquetesViajes = [
    {
      nombre: "cancun",
      codigo: 1,
      descripcion: "viaje a cancun a todo culo",
      duracion: "6 noches y 7 dias"
    },
    {
        nombre: "paris",
        codigo: 2,
        descripcion: "tour romántico por París con visitas guiadas",
        duracion: "5 noches y 6 días"
    },
    {
        nombre: "tokio",
        codigo: 3,
        descripcion: "aventura tecnológica y cultural en Tokio",
        duracion: "7 noches y 8 días"
    },
    {
        nombre: "roma",
        codigo: 4,
        descripcion: "descubre la historia y gastronomía de Roma",
        duracion: "4 noches y 5 días"
    },
    {
        nombre: "nueva york",
        codigo: 5,
        descripcion: "explora la ciudad que nunca duerme",
        duracion: "6 noches y 7 días"
    },
    ]

const paquetesBox = document.querySelector(".listaPaquetes");
function crearCarta(nombre, codigo, descripcion, duracion){
    const div =  document.createElement("div");
    const nombreh2 =  document.createElement("h2")
    const codigop =  document.createElement("p")
    const descripcionP =  document.createElement("p")
    const duracionP =  document.createElement("p")

    div.appendChild(nombreh2);
    div.appendChild(codigop);
    div.appendChild(descripcionP);
    div.appendChild(duracionP);

    div.querySelector("h2").textContent = nombre
    div.querySelector("p").textContent = codigo
    div.querySelector("p").nextElementSibling.textContent = descripcion
    div.querySelector("p").nextElementSibling.nextElementSibling.textContent = duracion
    div.classList.add("carta")
    paquetesBox.appendChild(div)
}

paquetesViajes.forEach( (viaje) => {
 crearCarta(viaje.nombre, viaje.codigo, viaje.descripcion, viaje.duracion)
})  


document.getElementById('btnSubir').addEventListener('click', function() {
  const nombre = document.getElementById('nombre').value;
  const descripcion = document.getElementById('descripcion').value;
  const duracion = document.getElementById('duracion').value;

  if (!nombre || !descripcion || !duracion) return;

  let paquetes = JSON.parse(localStorage.getItem('paquetesViajes')) || [];

  const codigo = obtenerCodigoViaje();
  const nuevoPaquete = { nombre, descripcion, duracion, codigo };

  paquetes.push(nuevoPaquete);
  localStorage.setItem('paquetesViajes', JSON.stringify(paquetes));

  crearCarta(nombre, codigo, descripcion, duracion);

  document.querySelector('.formularioPaquete').reset();
});

