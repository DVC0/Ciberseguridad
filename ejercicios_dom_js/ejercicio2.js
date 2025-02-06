// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div = document.createElement ("div");
document.body.appendChild (div);
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div2 = document.createElement ("div");
div2.innerHTML="<p></p>";
document.body.appendChild (div2);
// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div3 = document.createElement ("div");
for (let i = 0; i < 6; i++) {
  div3.innerHTML="<p></p>";                                                                                   // No consigo ver dónde meter la i para que lo ejecute i veces. AYUDA!!!
};
document.body.appendChild (div3);
// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const p = document.createElement ("p");
document.body.appendChild (p);
p.innerText = "Soy dinámico!";
// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement ("ul");
for (let i = 0; i < apps.length; i++) {
  const lii = apps[i];
  const li = document.createElement ("li");
  li.innerText = lii;
  ul.appendChild (li);
};
document.body.appendChild (ul);
// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const divv = document.querySelector ("div");
divv.insertAdjacentHTML ("afterend", "<p>Voy en medio!</p>");
// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
