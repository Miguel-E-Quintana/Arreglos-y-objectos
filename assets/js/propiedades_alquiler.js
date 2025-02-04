

const propiedades_alquiler = [
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street,Anytown, CA 91234',
    habitaciones: 2,
    baños:2,
    costo: 2000,
    smoke: false,
    pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue,Seaside Town, CA 56789',
        habitaciones: 3,
        baños:3,
        costo: 2500,
        smoke: true,
        pets: true
        },
        {
            nombre: 'Condominio moderno en zona residencial',
            src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
            descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
            ubicacion: '123 Main Street,Anytown, CA 91234',
            habitaciones: 2,
            baños:2,
            costo: 2200,
            smoke: false,
            pets: true
            },
            {
                nombre: 'Arriendo de Departamento en Edmundo Eluchans',
                src: 'https://media.houm.com/thumbnail/794f27fd-2574-4411-87cc-3264a1330ed1property794f27fd2574441187cc3264a1330ed13n00329data.jpg',
                descripcion: 'Increíble departamento en arriendo, ubicado en la comuna de Viña del Mar',
                ubicacion: 'Viña del Mar',
                habitaciones: 2,
                baños:2,
                costo: 870,
                smoke: true,
                pets: true
                }
    ]
    
    const alquiler = document.getElementById("cartas2")
    let htmlA = ""
    const primerosTres = propiedades_alquiler.slice(0, 3)

    for( const datos of primerosTres){
        let mensajeSmoke, colorSmoke;
    if (datos.smoke) {
        mensajeSmoke = "Se permite fumar";
        colorSmoke = "green";
    } else {
        mensajeSmoke = "No se permite fumar";
        colorSmoke = "red";
    }

    let mensajePets, colorPets;
    if (datos.pets) {
        mensajePets = "Se admiten mascotas";
        colorPets = "green";
    } else {
        mensajePets = "No se admiten mascotas";
        colorPets = "red";
    }


        htmlA += `
        <div class="cartaA">
  <img src="${datos.src}" alt="${datos.src}">
  <h2>${datos.nombre}</h2>
  <p>${datos.descripcion}</p>
  <p><i class="fas fa-map-marker-alt"></i>${datos.ubicacion}</p>
  <div class="iconos">
  <p><i class="fas fa-bed"></i>${datos.habitaciones}</p>
  <p><i class="fas fa-bath"></i>${datos.baños}</p>
  </div>
  <p><i class="fas fa-dollar-sign"></i>${datos.costo}</p>
  <p style="color: ${colorSmoke};"><i class="fas fa-smoking"></i>${mensajeSmoke}</p>
  <p  style="color: ${colorPets};"><i class="fas fa-paw"></i>${mensajePets}</p>
    
</div>
        `
    }
    alquiler.innerHTML=htmlA