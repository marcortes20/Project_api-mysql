




document.addEventListener('DOMContentLoaded', function () {

  redirections();
  contact_window_bahavior();
  charge_page();
  addEventButtons();
  submitForsmEvents();
  formsBehaviors();

});


function formsBehaviors() {


  // EVENTS TO THE ADD CATEGORY FORM
  const addCategoryModal = document.getElementById("addCategoryModal");
  window.addEventListener('click', (event) => {
    if (event.target == addCategoryModal) {
      addCategoryModal.style.display = 'none';
    }
  });

  // EVENTS TO THE ADD SERVICE FORM
  const addServiceModal = document.getElementById("addServiceModal");
  window.addEventListener('click', (event) => {
    if (event.target == addServiceModal) {
      addServiceModal.style.display = 'none';
    }
  });

  // EVENTS TO THE EDIT SERVICE FORM
  const editServiceModal = document.getElementById("editServiceModal");
  window.addEventListener('click', (event) => {
    if (event.target == editServiceModal) {
      editServiceModal.style.display = 'none';
    }
  });

  // EVENTS TO THE EDIT CATEGORY FORM
  const editCategoryModal = document.getElementById("editCategoryModal");
  window.addEventListener('click', (event) => {
    if (event.target == editCategoryModal) {
      editCategoryModal.style.display = 'none';
    }
  });


  // EVENTS TO THE EDIT COMPANY NAME FORM
  const editCopanyNameModal = document.getElementById("editCopanyNameModal");
  window.addEventListener('click', (event) => {
    if (event.target == editCopanyNameModal) {
      editCopanyNameModal.style.display = 'none';
    }
  });


  // EVENTS TO THE EDIT COMPANY  FORM
  const editCompanyModal = document.getElementById("editCompanyModal");
  window.addEventListener('click', (event) => {
    if (event.target == editCompanyModal) {
      editCompanyModal.style.display = 'none';
    }
  });


}


function submitForsmEvents() {


  //EVENTS TO SUBMIT ADD CATEGORY FORM
  const addCategoryModal = document.getElementById("addCategoryModal");
  const formCategory = document.getElementById("addCategoryForm");

  formCategory.addEventListener("submit", (event) => {
    console.log("entra");
    event.preventDefault();
    const image = document.getElementById("categoryImg").value;
    fetch('http://localhost:3000/Project/api/categories', {
      method: 'POST',
      body: JSON.stringify({
        img: image,
        company_id: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {

        reloadCategories();

      });
    addCategoryModal.style.display = "none";
    formCategory.reset();

  });


  //EVENTS TO SUBMIT ADD SERVICE FORM
  const addServiceModal = document.getElementById("addServiceModal");
  const formService = document.getElementById("addServiceForm");

  formService.addEventListener("submit", (event) => {
    event.preventDefault();
    const service_title = document.getElementById("titleService").value;
    const descriptionService = document.getElementById("descriptionService").value;
    const iconService = document.getElementById("iconService").value;
    fetch('http://localhost:3000/Project/api/services', {
      method: 'POST',
      body: JSON.stringify({
        title: service_title,
        desccription: descriptionService,
        icon: iconService,
        company_id: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        reloadServices();
      });
    addServiceModal.style.display = "none";
    formService.reset();
  });



  //EVENTS TO SUBMIT EDIT SERVICE FORM
  const editServiceModal = document.getElementById("editServiceModal");
  const editServiceForm = document.getElementById("editServiceForm");

  editServiceForm.addEventListener("submit", (event) => {

    event.preventDefault();
    const serviceID = document.getElementById("serviceID");
    editTitleService = document.getElementById("editTitleService");

    editDescriptionService = document.getElementById("editDescriptionService");

    editIconService = document.getElementById("editIconService");



    fetch(`http://localhost:3000/Project/api/services/${serviceID.value}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: editTitleService.value,
        desccription: editDescriptionService.value,
        icon: editIconService.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        editServiceForm.reset();
        editServiceModal.style.display = "none";
        reloadServices();
      })
  })



  //EVENTS TO SUBMIT EDIT CATEGORY FORM
  const editCategoryModal = document.getElementById("editCategoryModal");

  const editCategoryForm = document.getElementById("editCategoryForm");


  editCategoryForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const editCategoryImg = document.getElementById("editCategoryImg");
    const CategoryID = document.getElementById("CategoryID");


    fetch(`http://localhost:3000/Project/api/categories/${CategoryID.value}`, {
      method: 'PATCH',
      body: JSON.stringify({
        img: editCategoryImg.value,

      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        editCategoryForm.reset();
        editCategoryModal.style.display = "none";
        reloadCategories();
      })
  })




  //EVENTS TO SUBMIT EDIT COMPANY NAME FORM
  const editCopanyNameModal = document.getElementById("editCopanyNameModal");

  const editCompanyNameForm = document.getElementById("editCompanyNameForm");


  editCompanyNameForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const companyNameField = document.getElementById("companyNameField");

    const company_nameTitle = document.getElementById("company_name");


    fetch(`http://localhost:3000/Project/api/companies/1`, {
      method: 'PATCH',
      body: JSON.stringify({
        company_name: companyNameField.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {


        editCopanyNameModal.style.display = "none";
        company_nameTitle.style.opacity = 0;

        setTimeout(() => {
          company_nameTitle.textContent = companyNameField.value;
          company_nameTitle.style.opacity = 1;
          editCompanyNameForm.reset();

        }, 500);

      })
  })




  //EVENTS TO SUBMIT EDIT COMPANY FORM

  // this is the container of all company information
  const companyInformation = document.getElementById("companyInformation");

  const editCompanyModal = document.getElementById("editCompanyModal");

  const editCompanyForm = document.getElementById("editCompanyForm");


  editCompanyForm.addEventListener("submit", (event) => {

    event.preventDefault();

    //variables from html form
    const companyTitle = document.getElementById("companyTitle");
    const companyDescription = document.getElementById("companyDescription");
    const companyImage = document.getElementById("companyImage");

    //variables from html fields
    const title_secction_1 = document.getElementById("title_secction_1");
    const paragraph_section_1 = document.getElementById("paragraph_section_1");
    const img_section_1 = document.getElementById("img_section_1");


    fetch(`http://localhost:3000/Project/api/companies/1`, {
      method: 'PATCH',
      body: JSON.stringify({
        company_title_description: companyTitle.value,
        company_description:companyDescription.value,
        company_img_description: companyImage.value ,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {


        editCompanyModal.style.display = "none";
        companyInformation.style.opacity = 0;

        setTimeout(() => {

          title_secction_1.textContent = companyTitle.value;
          paragraph_section_1.textContent = companyDescription.value;
          img_section_1.src = companyImage.value;
          companyInformation.style.opacity = 1;
          editCompanyForm.reset();
        }, 500);

      })
  })

}


function addEventButtons() {

  const butttonAddCategory = document.getElementById("btnAddCategory").addEventListener("click", () => {
    const addCategoryModal = document.getElementById("addCategoryModal");

    addCategoryModal.style.display = "block";
  });


  const butttonAddService = document.getElementById("btnAddService").addEventListener("click", () => {
    const addServiceModal = document.getElementById("addServiceModal");

    addServiceModal.style.display = "block";
  });



  const btnEditNameCompany = document.getElementById("btnEditNameCompany").addEventListener("click", () => {

    const editCopanyNameModal = document.getElementById("editCopanyNameModal");

    const companyNameField = document.getElementById("companyNameField");
    const company_name = document.getElementById("company_name");

    companyNameField.value = company_name.textContent;

    editCopanyNameModal.style.display = "block";
  });



  const btnEditCompany = document.getElementById("btnEditCompany").addEventListener("click", () => {

    const editCompanyModal = document.getElementById("editCompanyModal");

    //variables from html fields
    const title_secction_1 = document.getElementById("title_secction_1");
    const paragraph_section_1 = document.getElementById("paragraph_section_1");
    const img_section_1 = document.getElementById("img_section_1");

    //variables from html form
    const companyTitle = document.getElementById("companyTitle");
    const companyDescription = document.getElementById("companyDescription");
    const companyImage = document.getElementById("companyImage");

    companyTitle.value = title_secction_1.textContent;

    companyDescription.value = paragraph_section_1.textContent;
    companyImage.value = img_section_1.src;


    editCompanyModal.style.display = "block";
  });


}

function delete_category(id_category) {

  fetch(`http://localhost:3000/Project/api/categories/${id_category}`, {
    method: 'DELETE',
  });

}

// This function is used to charge al categories from bd to html
function loadCategories(option) {
  // search the father of news categories
  let catContainer = document.getElementById('catContainer');

  //create a new category
  let new_category = document.createElement("img");


  //create the father or the edit delete buttos categoies
  let edit_delete_container = document.createElement("div");


  //create delete/edit buttons
  let btn_delete = document.createElement("button");
  let btn_edit = document.createElement("button");

  btn_delete.classList.add("btnDelete");
  btn_edit.classList.add("btnEdit");




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

  new_category.style.opacity = 0;
  edit_delete_container.style.opacity = 0;
  //add buttons
  catContainer.appendChild(edit_delete_container);
  catContainer.appendChild(new_category);
  setTimeout(() => {
    new_category.style.opacity = 1;
    edit_delete_container.style.opacity = 1;
  }, 500);


  btn_edit.addEventListener("click", () => {

    const editCategoryModal = document.getElementById("editCategoryModal");

    const CategoryID = document.getElementById("CategoryID");

    const editCategoryImg = document.getElementById("editCategoryImg");

    CategoryID.value = option.id;

    editCategoryImg.value = option.img;

    editCategoryModal.style.display = "block";

  })


  btn_delete.addEventListener('click', () => {

    const confirmDelete = confirm("Are you sure you want to delete this service? ");

    if (confirmDelete) {

      new_category.style.opacity = 0;
      edit_delete_container.style.opacity = 0;
      // Después de un breve retraso, cambia la imagen y restaura la opacidad
      setTimeout(() => {

        catContainer.removeChild(new_category);
        catContainer.removeChild(edit_delete_container);
        delete_category(option.id);

      }, 500);
    }



  });

}

//this fuction is used when add a new category, first delete all categories at html then charge again
function reloadCategories() {

  clearCategories();
  fetch('http://localhost:3000/Project/api/categories')
    .then((response) => response.json())
    .then((categories) => {

      categories.forEach(option => {

        loadCategories(option);

      });


    });


}

// this funtion delete all categories at html
function clearCategories() {

  const divElement = document.getElementById("catContainer"); // Reemplaza "miDiv" con el ID de tu div

  while (divElement.firstChild) {
    divElement.removeChild(divElement.firstChild);
  }



}

function reloadServices() {

  clearServices();
  fetch('http://localhost:3000/Project/api/services')
    .then((response) => response.json())
    .then((categories) => {
      categories.forEach(option => {
        loadServices(option);

      });


    });

}

function clearServices() {
  const divElement = document.getElementById("services_container"); // Reemplaza "miDiv" con el ID de tu div

  while (divElement.firstChild) {
    divElement.removeChild(divElement.firstChild);
  }

}

function loadServices(option) {

  let services_container = document.getElementById('services_container');

  //create the father or the edit delete buttos categoies
  let edit_delete_container = document.createElement("div");
  //give class to the buttons container to make styles
  edit_delete_container.classList.add("edit_delete_container_serv");

  //create delete/edit buttons
  let btn_delete = document.createElement("button");
  let btn_edit = document.createElement("button");

  btn_delete.classList.add("btnDelete");
  btn_edit.classList.add("btnEdit");

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
  new_service.style.opacity = 0;

  setTimeout(() => {
    new_service.style.opacity = 1;
  }, 900);



  btn_edit.addEventListener("click", () => {

    const editServiceModal = document.getElementById
      ("editServiceModal");

    ServiceID = document.getElementById("serviceID");

    editTitleService = document.getElementById("editTitleService");

    editDescriptionService = document.getElementById("editDescriptionService");

    editIconService = document.getElementById("editIconService");

    editTitleService.value = option.title;

    editDescriptionService.value = option.desccription;

    editIconService.value = option.icon;

    serviceID.value = option.id;



    editServiceModal.style.display = "block";

  })


  btn_delete.addEventListener('click', () => {

    const confirmDelete = confirm("Are you sure you want to delete this service? ");

    if (confirmDelete) {

      new_service.style.opacity = 1;
      new_service.style.opacity = 0;
      // Después de un breve retraso, cambia la imagen y restaura la opacidad
      setTimeout(() => {

        services_container.removeChild(new_service);

        delete_service(option.id);

      }, 900);
    }

  });

}
















function delete_service(id_category) {

  fetch(`http://localhost:3000/Project/api/services/${id_category}`, {
    method: 'DELETE',
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


function charge_page() {

  fetch('http://localhost:3000/Project/api/companies/1')
    .then((response) => response.json())
    .then((company) => {
      load_header(company);
      load_main(company);
    })
}



function load_header(header_information) {

  const company_name = document.getElementById('company_name');

  company_name.textContent = header_information.company_name;

  //variables de la seccion 1 del main
  const title_section_1 = document.getElementById('title_secction_1');
  const paragraph = document.getElementById('paragraph_section_1');
  const img_section_1 = document.getElementById('img_section_1');

  //cargar seccion 1 del main
  title_section_1.textContent = header_information.company_title_description;
  paragraph.textContent = header_information.company_description;
  img_section_1.src = header_information.company_img_description;

  header_information.menuOptions.forEach(option => {
    // obtenemos cada uno de los enlaces del menú principal
    document.getElementById(`menu_option_${option.id}`).textContent = option.name;

  });
}



function load_main(main_information) {


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

      }, 900);
    });

  });


  //variables de la seccion 3
  //cargando seccion 3

  main_information.categories.forEach(option => {

    loadCategories(option);

  });







  //cargando seccion 4

  main_information.services.forEach(option => {
    loadServices(option);
  });


}


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


