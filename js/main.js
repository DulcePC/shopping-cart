//Variables
const shoppingCart = document.querySelector('#shoppingCart');
const shoppintCartList = document.querySelector('#shoppingCartList');
const courseLists = document.querySelector('#courseList');
const deleteAllProducts = document.querySelector('#deleteAllProducts');
let productsCart = [];

loadEventListeners();
function loadEventListeners() {
  courseLists.addEventListener('click', addTocart);

  //Eliminia cursos del carrito
  shoppingCart.addEventListener('click', deleteCourse);
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

//Eliminar un curso del carrito
function deleteCourse(e) {
  if(e.target.classList.contains('delete')) {
    console.log(e.target)
  }
}

//Aqui obtenemos la informacion del curso seleccionado en la funcion de addToCart
function readCourseData(course) {
  // console.log(course);

  //Aqui creamos un objeto con la informacion del curso seleccionado en la funcion anterior
  const courseInformation = {
    //Aqui le pasamos el course. porque es quien ya contiene los elementos htmml del curso que seleccionamos
    image: course.querySelector('img').src,
    title: course.querySelector('h5').textContent,
    price: course.querySelector('p').textContent,
    id:    course.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  }
  // console.log(courseInformation);

  //Revisar si un elemento existe en el carrito
  const producExist = productsCart.some(course => course.id === courseInformation.id);
  console.log(producExist);
  if (producExist) {
    //actualizamos la cantidad
    const courses = productsCart.map( course => {
      if(course.id === courseInformation.id ){
        course.cantidad++;
        // console.log(course.cantidad);
        return course;
      } else {
        return course;
      }
    });
    productsCart = [...courses];
  } else {
    //Lo que se hizo aqui fue un spread operator, que se utiliza para unir, entonces se repite productsCart
    //porque aun yo vaya agregando productos al carrito debe mantenere una copia de los ya agregados
    productsCart = [...productsCart, courseInformation];
    // console.log(productsCart);
  }

  //Agregar elementos al arreglo de carritos
  shoppingCartHtml();
}

//Mostrar carrito de compra en el html
//Crear el html
function shoppingCartHtml() {
  cleanListContainer();

  //recorre el carrito y genera el html
  productsCart.forEach( course => {
    const li = document.createElement('li');
    li.classList.add('mb-1');
    li.innerHTML = 
    `
    <div class="flex items-center">
      <figure class="w-20 h-14 relative">
        <img src="${course.image}" alt="html course" class="w-full h-full object-center object-cover">
        <span class="font-bold absolute -top-1 -right-2 text-xs w-5 h-5 bg-pink-secondary text-white flex items-center justify-center rounded-full leading-none">${course.cantidad}</span>
      </figure>
      <div class="pl-2 flex items-center justify-between w-full">
        <h5 class="uppercase font-bold text-pink-secondary text-xs tracking-wide">${course.title}</h5>
        <p class="font-bold text-pink-secondary text-xs">${course.price}</p>
        <a class="w-5 h-5 bg-red text-white flex items-center justify-center rounded-full leading-none delete" href="#" data-id="${course.id}">x</a>
      </div>
    </div> 
    `;
    //Agregar el li al a la lista
    shoppintCartList.appendChild(li);
  })
}

//Hay que limpiar el shoppingcartlist, porque va agregar al que le damos click pero no eliminara los previos
//Entonces se supone que cuando le das al carrito una vez se muestre algo, pero cuando le das nuevamente
//No deberia quedarse los viejos, sin actualizarse con lo que hay en el carrito de compra

//Limpiar el html
function cleanListContainer() {
  //Forma Lenta
  // shoppintCartList.innerHTML = '';

  //Recuerda que ejecuta una funcion almenos sea verdadera
  while(shoppintCartList.firstChild) {
    shoppintCartList.removeChild(shoppintCartList.firstChild)
  }
}