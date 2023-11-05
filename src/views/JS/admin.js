document.addEventListener('DOMContentLoaded', function () {

  redirections();
  contact_window_bahavior();
  reload_page();



  //   let btn_reload = document.getElementById('reload');
  //   btn_reload.addEventListener("click", function(event) {
  //     // Evita que el enlace redireccione a la URL especificada en 'href'
  //     event.preventDefault();
  //     reload_page();
  // });

  function reload_page() {

    fetch('http://localhost:3000/Project/api/companies/1')
      .then((response) => response.json())
      .then((company) => {
        console.log(company);
        load_header(company);
        load_main(company);
      })
  }

  function load_header(header_information) {

    const company_name = document.getElementById('company_name');

    company_name.textContent = header_information.company_name;

    header_information.menuOptions.forEach(option => {
      // obtenemos cada uno de los enlaces del menú principal
      document.getElementById(`menu_option_${option.id}`).textContent = option.name;

    });

    // header_information.icons_header.forEach(option => {
    //   // obtenemos cada uno de los iconos del menú principal
    //   document.getElementById(`icon_header_${option.id}`).src = option.path;

    // });

  }

  // function load_contact(contact_informacion) {
  //   const title_contact = document.getElementById('contact_title');
  //   const for_contact = document.getElementById('for_label');
  //   const issue_label = document.getElementById('issue_label');
  //   const message_label = document.getElementById('message_label');
  //   const btn_send = document.getElementById('btn_send');

  //   title_contact.textContent = contact_informacion.contact_field.title;
  //   for_contact.textContent = contact_informacion.contact_field.for;
  //   issue_label.textContent = contact_informacion.contact_field.issues;
  //   message_label.textContent = contact_informacion.contact_field.message;
  //   btn_send.textContent = contact_informacion.contact_field.button_text;



  // }


  function delete_category(id_category) {


    fetch(`http://localhost:3000/Project/api/categories/${id_category}`, {
      method: 'DELETE',
    });



  }

  function delete_service(id_category) {


    fetch(`http://localhost:3000/Project/api/services/${id_category}`, {
      method: 'DELETE',
    });


  }


  function load_main(main_information) {

    //variables de la seccion 1 del main
    const title_section_1 = document.getElementById('title_secction_1');
    const paragraph = document.getElementById('paragraph_section_1');
    const img_section_1 = document.getElementById('img_section_1');

    //cargar seccion 1 del main
    title_section_1.textContent = main_information.company_title_description;
    paragraph.textContent = main_information.company_description;
    img_section_1.src = main_information.company_img_description;



    //variables de la seccion 2 del main

    const img = document.getElementById('picture-content_two');
    const discount = document.getElementById('content-discount');
    const description_product = document.getElementById('description_product');
    const price_product = document.getElementById('price_product');
    const size_product = document.getElementById('size_product');


    //inicializar una imagen y sus campos por default
    img.src = main_information.products[0].image;
    discount.textContent = main_information.products[0].discount;
    description_product.textContent = main_information.products[0].description;
    price_product.textContent = main_information.products[0].price;
    size_product.textContent = main_information.products[0].size;



    main_information.products.forEach(option => {
      // obtenemos cada uno de los enlaces de la lista de productos

      document.getElementById(`button_${option.id}`).addEventListener("click", () => {
        // Cambia la opacidad de la imagen a 0 (invisible)
        img.style.opacity = 0;
        // Después de un breve retraso, cambia la imagen y restaura la opacidad
        setTimeout(() => {

          img.src = option.image; // Cambia la imagen
          discount.textContent = option.discount;
          img.style.opacity = 1; // Restaura la opacidad
          description_product.textContent = option.description;
          price_product.textContent = option.price;
          size_product.textContent = option.size;

        }, 500);
      });

    });


    //variables de la seccion 3
    //cargando seccion 3

    main_information.categories.forEach(option => {

      // search the father of news categories
      let catContainer = document.getElementById('catContainer');

      //create a new category
      let new_category = document.createElement("img");


      //create the father or the edit delete buttos categoies
      let edit_delete_container = document.createElement("div");

      //create delete/edit buttons
      let btn_delete = document.createElement("button");
      let btn_edit = document.createElement("button");

      btn_delete.classList.add("category_delete");
      btn_edit.classList.add("category_edit");




      //create 2 i tags to add icons into buttons
      const icon_delete = document.createElement("i");
      icon_delete.className = "fa-solid fa-trash";
      const icon_edit = document.createElement("i");
      icon_edit.className = "fa-solid fa-pen-to-square";


      //give class to the buttons container to make styles
      edit_delete_container.classList.add("edit_delete_container_cat");

      //add the icons
      btn_edit.appendChild(icon_edit);
      btn_delete.appendChild(icon_delete);

      //insert buttons into div father
      edit_delete_container.appendChild(btn_delete);
      edit_delete_container.appendChild(btn_edit);

      // this is the div who contains just image category
      new_category.src = option.img;

      //give class to make styles
      new_category.classList.add("categories");

      //add buttons
      catContainer.appendChild(edit_delete_container);
      catContainer.appendChild(new_category);

      btn_delete.addEventListener('click', () => {


        new_category.style.opacity = 1;
        new_category.style.opacity = 0;
        // Después de un breve retraso, cambia la imagen y restaura la opacidad
        setTimeout(() => {

          catContainer.removeChild(new_category);
          catContainer.removeChild(edit_delete_container);
          delete_category(option.id);

        }, 500);


      });

    });







    //cargando seccion 4

    //obetenemos el contennedor padre de los servicios
    let services_container = document.getElementById('services_container');


    main_information.services.forEach(option => {
      //create the father or the edit delete buttos services


      //create the father or the edit delete buttos categoies
      let edit_delete_container = document.createElement("div");
      //give class to the buttons container to make styles
      edit_delete_container.classList.add("edit_delete_container_serv");

      //create delete/edit buttons
      let btn_delete = document.createElement("button");
      let btn_edit = document.createElement("button");

      btn_delete.classList.add("category_delete");
      btn_edit.classList.add("category_edit");

      //create 2 i tags to add icons into buttons
      const icon_delete = document.createElement("i");
      icon_delete.className = "fa-solid fa-trash";
      const icon_edit = document.createElement("i");
      icon_edit.className = "fa-solid fa-pen-to-square";

      //add the icons
      btn_edit.appendChild(icon_edit);
      btn_delete.appendChild(icon_delete);

      //insert buttons into div father
      edit_delete_container.appendChild(btn_delete);
      edit_delete_container.appendChild(btn_edit);


      

      //create a new div to the service
      let new_service = document.createElement('div');
      new_service.classList.add('service');

      //create content to save title and description
      let service_content = document.createElement('div');

      //create new img tag
      let img_service = document.createElement('img');
      img_service.classList.add('service_icons');
      img_service.src = option.icon;


      let service_title = document.createElement('h3')
      let service_description = document.createElement('p');

      service_title.textContent = option.title;

      service_description.textContent = option.desccription;

      service_content.appendChild(service_title);
      service_content.appendChild(service_description);

      new_service.appendChild(edit_delete_container);
      new_service.appendChild(img_service);
      new_service.appendChild(service_content);

      services_container.appendChild(new_service);

      btn_delete.addEventListener('click', () => {


        new_service.style.opacity = 1;
        new_service.style.opacity = 0;
        // Después de un breve retraso, cambia la imagen y restaura la opacidad
        setTimeout(() => {

          services_container.removeChild(new_service);
          
          delete_service(option.id);

        }, 500);


      });

    });


  }


  // function load_footer(footer_information) {

  //   footer_information.footer.footer_sections.forEach(option => {

  //     //obtengo los titulos de cada columna y les doy su texto (hay 3 secciones)
  //     document.querySelector(`#footer_section_${option.id} h3`).textContent = option.title;


  //     const footer_options = document.querySelectorAll(`#list_${option.id} li a`);
  //     //optengo los a de cada columna del footer y luego los recorro para llenarlos
  //     footer_options.forEach((item, indice) => {

  //       item.textContent = option.items[indice].text;

  //     });

  //   });

  //   footer_information.footer.footer_icons.forEach(icons => {

  //     document.getElementById(`footer_ico_${icons.id}`).src = icons.url;

  //   });

  // }


  function redirections() {
    //desplazamiento a el apartado de inicio
    document.querySelector('a[href="#start"').addEventListener('click', function (e) {
      e.preventDefault(); // Previene el comportamiento de enlace predeterminado

      const destino = document.getElementById('start');

      destino.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });

    //desplazamiento a el apartado de productos
    document.querySelector('a[href="#products"]').addEventListener('click', function (e) {
      e.preventDefault(); // Previene el comportamiento de enlace predeterminado

      const destino = document.getElementById('products');

      destino.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });

    //desplazamiento a el apartado de servicios
    document.querySelector('a[href="#services"]').addEventListener('click', function (e) {
      e.preventDefault(); // Previene el comportamiento de enlace predeterminado

      const destino = document.getElementById('services');

      destino.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }




  function contact_window_bahavior() {
    const openEmailModal = document.getElementById('menu_option_4');
    const emailModal = document.getElementById('emailModal');
    const closeEmailModal = document.getElementById('closeEmailModal');

    // Abre el modal cuando se hace clic en el botón de abrir
    openEmailModal.addEventListener('click', () => {
      emailModal.style.display = 'block';
    });

    // Cierra el modal cuando se hace clic en la "x" o fuera del modal
    closeEmailModal.addEventListener('click', () => {
      emailModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
      if (event.target == emailModal) {
        emailModal.style.display = 'none';
      }
    });
  }


});
