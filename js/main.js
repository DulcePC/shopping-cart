//Variables
const shoppingCart = document.querySelector('#shoppingCart');
const shoppintCartList = document.querySelector('#shoppingCartList');
const courseLists = document.querySelector('#courseList');
const deleteAllProducts = document.querySelector('#deleteAllProducts');

loadEventListeners();
function loadEventListeners() {
  courseLists.addEventListener('click', addTocart);
}

//Functions

// El parametro e se refiere precisamente al elemento el cual le damos click, y no trae todos los elementos del card
//Esto se llama event bubbling
function addTocart(e) {
  e.preventDefault();

  // Esto muestra en consola a cada etiqueta que le damos click solamente en nuestro card
  // console.log(e.target);

  //Esto muestra todas las clases de la etiqueta que seleccionamos
  // console.log(e.target.classList);

  //Con esto verificamos si al elemento que estamos seleccionando contiene la clase "add-to-cart-btn" entonces que ejecute cierta funcion
  if(e.target.classList.contains('add-to-cart-btn')) {
    // console.log("Agregando al carrito");

    //Con esto seleccionamos el div que contiene el elemente seleccionado
    const selectedCourse = e.target.parentElement.parentElement;
    // console.log(selectedCourse);

    // Aqui le pasamos como paramentro el padre que contiene el elemento donde damos click para obtener la informacion
    readCourseData(selectedCourse);
  }

  //Entonces esta funcion en resumen lo que hace es cuando seleccionamos el tag a, busca el elemento que donde lo agrupamos 
  //Para luego en la funcion readCourseData cree un objeto con esa informacion seleccionada
}

//Aqui obtenemos la informacion del curso seleccionado en la funcion de addToCart
function readCourseData(course) {
  // console.log(course);

  //Aqui creamos un objeto con la informacion del curso seleccionado en la funcion anterior
  const courseInformation = {
    //Aqui le pasamos el course. porque es quien ya contiene los elementos htmml del curso que seleccionamos
    image: course.querySelector('img').src,
    title: course.querySelector('h5').textContent,
    price: course.querySelector('p'),
    id:    course.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  }

  console.log(courseInformation);
}