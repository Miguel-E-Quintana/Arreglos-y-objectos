const propiedades_ventas = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños:1,
        costo: 1200,
        smoke: true,
        pets: true
        },
        {
            nombre: 'Penthouse de lujo con terraza panorámica',
            src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
            descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
            ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
            habitaciones: 3,
            baños:3,
            costo: 4500,
            smoke: false,
            pets: true
            },
            {
                nombre: 'Venta de Departamento en Apóstol Santiago',
                src: 'https://s3.amazonaws.com/properties-media/thumbnail/76f11b60-09c7-48ab-9837-df2c5c5d4f2eimg202202091156463.jpg ',
                descripcion: 'Departamento ideal para quienes trabajan o estudian en el sector Centro de la capital, cercano a Universidades, Supermercados, Autopistas, Bancos, Restaurantes, Tiendas del Retail, Museos y Mall.',
                ubicacion: 'Pedro alarcon 927, San Miguel',
                habitaciones: 1,
                baños:1,
                costo: 2100,
                smoke: true,
                pets: false
                }
    ]

    const ventas= document.getElementById("cartas")
    let htmlv = ""
    const primerosTres1 = propiedades_ventas.slice(0, 3)

    for( const datos of primerosTres1){
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


        htmlv += `
        <div class="cartav">
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
    ventas.innerHTML=htmlv
