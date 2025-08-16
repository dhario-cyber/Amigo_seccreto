const participantes = ["Ana", "Juan", "Sofía", "Carlos"];

function asignarAmigos(lista) {
  let amigosDisponibles = [...lista];
  let asignaciones = {};
  for (let i = 0; i < lista.length; i++) {
    let persona = lista[i];
    let indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
    let amigoSecreto = amigosDisponibles[indiceAleatorio];
    if (amigoSecreto === persona) {
      indiceAleatorio = (indiceAleatorio + 1) % amigosDisponibles.length;
      amigoSecreto = amigosDisponibles[indiceAleatorio];
    }
    asignaciones[persona] = amigoSecreto;
    amigosDisponibles.splice(indiceAleatorio, 1);
  }
  return asignaciones;
}

let resultado = asignarAmigos(participantes);
console.log(resultado);
