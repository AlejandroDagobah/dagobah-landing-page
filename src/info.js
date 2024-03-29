import {IconBrandGithub, IconDeviceGamepad, IconAppWindow, IconChessKnight} from "@tabler/icons";


const websites = [
    {
        title:'Joyería Flor de la Vida',
        description:'Realice el diseño UI/UX y desarrolle en Wordpress esta \r\n e-commerce para la empresa “Joyería Flor de la Vida”. Además optimice el SEO para alcanzar los primeros puestos en las búsquedas relacionadas.',
        buttons: ['e-commerce', 'Web Design', 'Wordpress', 'SEO'],
        websiteImage: 'img/web-fdlv-img.png',
        phoneImage:'img/phone-fdlv-img.png',
        altImg:"Página web Joyería Flor de la Vida",
        isRight:true,
        url: 'https://joyeriaflordelavida.com/'
    },
    {
        title:'Ministerio de la Salud',
        description:'Realice los recursos, animación y montaje de tres comerciales con estilo Pixel Art, en conjunto con la consultora de comunicación “Farola” para el Ministerio de la Salud con el fin de educar y promover la conciencia frente al Covid-19, VIH y la VBG (Violencia Basada en Género).',
        buttons: ['Motion Graphics', 'Animation', 'Illustration'],
        websiteImage: 'img/campaing-one-life.png',
        phoneImage:'',
        altImg:"Trabajo de Audiovisuales para Ministerio de la Salud",
        isRight:false,
        url: 'https://www.youtube.com/watch?v=PFLYHtWaaz0&list=PLWd8jJ5W_3iN3w-CuFJt-oFq0HG25V_5G&ab_channel=Aledevelops&themeRefresh=1'


    },
    {
        title:'Fenix Delivery',
        description:'Realicé el diseño UI/UX y desarrollé en wordpress una e-commerce en conjunto con la consultora tecnológica “MCD manager” para una empresa de entrega de alimentos y productos nacionales. Además hice la edición fotográfica para todos los productos de la página.',
        buttons: ['e-commerce', 'Web Design', 'Photo Retouch'],
        websiteImage: 'img/website-portfolio-fenix.png',
        phoneImage:'img/phone-portfolio-fenix.png',
        altImg:"Página web Fenix Delivery",
        isRight:false,
        url: 'https://fenix.com.ec/'

    },
    {
        title:'Dino Propulsion',
        description:'Un pequeño juego inspirado en Flappy Bird en el que eres un dinosaurio que intenta volar por el cielo. Publiqué este juego en la Play Store, pero en el medio de la pandemia fue retirado sin motivo, por el momento se encuentra en Itch.io.',
        buttons: ['Game Development', 'Unity', 'Pixel Art'],
        websiteImage: 'img/dino-propulsion-web.png',
        phoneImage:'img/dino-propulsion.png',
        altImg:"Videojuego Móvil Dino Propulsion",

        isRight:false,
        url:'https://alejandrodagobah.itch.io/dino-propulsion'
    },
    {
        title:'Quality B2B',
        description:'Una asombrosa página web que realice para Quality B2B donde diseñe y desarrolle una web enfocada a presentar la marca y los productos como la solución ambiental a productos de limpieza para negocios, organizaciones y grandes fábricas.',
        buttons: ['UI/UX Design', 'Web Development', 'Wordpress'],
        websiteImage: 'img/website-portfolio-quality-2.png',
        phoneImage:'img/phone-portfolio-quality-2.png',
        altImg:"Página web Quality B2B",
        isRight:false,
        url:'https://qualityb2b.com/'

    },
    {
        title:'Natomovil',
        description:'Una e-commerce que hice para un pequeño negocio distribuidor de computadoras y celulares ubicado en Santo Domingo de los Tsáchilas.',
        buttons: ['e-commerce', 'Web Design'],
        websiteImage: 'img/natomovil.png',
        phoneImage:'img/natomovil-phone.png',
        altImg:"Página web Natomovil",
        isRight:false,
        url:'https://natomovil.com.ec/'


    }
]

const projects = [
    {
        title: "Desarrollo Web",
        projects: [
            {
                img: "./img/projects/trigonometry.png",
                title: "VisualTrig",
                subtitle: "Proyecto Destacado",
                description: "Visualizador de trigonometría realizado en colaboración con Corporación Cultural MCD para enseñar matemáticas y trigonometría a niños y jovenes.",
                tags: ["REACT", "TAILWIND", "JAVASCRIPT", "MATH"],
                prodURL: "https://visualtrig.netlify.app/",
                repoURL: "https://github.com/AlejandroDagobah/VisualTrig"
            },
            {
                img: "./img/innova-1.jpg",
                title: "Sitio Web Innova Egroup",
                subtitle: "Proyecto Destacado",
                description: "Diseño, desarrollo y optimización de un sitio web para una constructora ecologíca centrada en la construcción de conjuntos y edificios residenciales con materiales y ladrillos ecológicos",
                tags: ["GATSBY.JS", "REACT", "TAILWIND", "JAVASCRIPT"],
                repoURL: "https://github.com/AlejandroDagobah/innova-website-gatsby",
                prodURL: "https://innova-egroup.com.ec/"
            },
            {
                img: "./img/projects/chessToNotion.png",
                title: "Chess To Notion",
                subtitle: "Proyecto Destacado",
                description: "Registra tus partidas de Chess.com a Notion, guarda la repericion las derrotas y victorias tiempos y más, útil para registrar vicorias de participantes en clubs.",
                tags: ["REACT", "TAILWIND", "NODE.JS"],
                repoURL: "https://github.com/AlejandroDagobah/chess-to-notion"
            }
        ]
    },
    {
        title: "Diseño Gráfico",
        projects: [
            {
                img: "./img/projects/campaña-ministerio-salud-design.jpg",
                title: "Campaña Tu Eres Prioridad",
                subtitle: "Proyecto Destacado",
                description: "Branding para una campaña de concientización del COVID, VIH y VBG para el Ministerio de Salud del Ecuador",
                tags: ["PHOTOSHOP", "ILLUSTRATOR", "BRANDING",],
                prodURL: "https://www.behance.net/gallery/188245643/Campana-Tu-Eres-Prioridad-Ministerio-de-Salud-EC"
            },
            {
                img: "./img/projects/baby-amaranth-packaging-design.jpg",
                title: "Diseño de Empaque Baby Amaranth",
                subtitle: "Proyecto Destacado",
                description: "Diseño de empaque para un super alimento andino instantáneo destinado para el consumo de bebés y madres en etapa de lactancia o gestación.",
                tags: ["PHOTOSHOP", "ILLUSTRATOR", "PACKAGING DESIGN",],
                prodURL: "https://www.behance.net/gallery/188301559/Packaging-Design-Superfood-Amaranth-Powder"
            },
            {
                img: "./img/projects/logo-design.jpg",
                title: "Portfolio de Diseño de Logotipos",
                subtitle: "Proyecto Destacado",
                description: "Registra tus partidas de Chess.com a Notion, guarda la repericion las derrotas y victorias tiempos y más, útil para registrar vicorias de participantes en clubs.",
                tags: ["PHOTOSHOP", "ILLUSTRATOR", "LOGO DESIGN",],
                prodURL: "https://www.behance.net/gallery/188305817/Portfolio-de-Diseno-de-Logotipos"
            }
        ]
    },
    {
        title: "Wordpress Development",
        projects: [
            {
                img: "./img/quality-1.jpg",
                title: "Sitio Web Quality B2B",
                subtitle: "Proyecto Destacado",
                description: "Sitio web que diseñé y desarrollé para Quality B2B enfocada en presentar la marca y productos de limpieza ecológicos para negocios, organizaciones y grandes fábricas.",
                tags: ['UI/UX DESIGN', 'WORDPRESS'],
                prodURL: "https://qualityb2b.com/"
            },
            {
                img: "./img/fdlv.jpg",
                title: "E-Commerce Joyería Flor de la Vida",
                subtitle: "Proyecto Destacado",
                description: "Realice el diseño UI/UX y desarrolle en Wordpress esta \r\n e-commerce para la empresa “Joyería Flor de la Vida”. Además optimice el SEO para alcanzar los primeros puestos en las búsquedas relacionadas.",
                tags: ['E-COMMERCE', 'WORDPRESS', 'SEO'],
                prodURL: "https://joyeriaflordelavida.com/"
            },
            {
                img: "./img/probox-web.jpg",
                title: "Sitio Web Probox",
                subtitle: "Proyecto Destacado",
                description: "Realice el diseño de UI/UX y desarrollé el tema de Wordpress para una courier de Ecuador siguiendo buenas practicas de SEO",
                tags: ['UI/UX Design', 'WORDPRESS', 'SEO'],
                prodURL: "https://probox.com.ec/"
            }
        ]
    },    
    {
        title: "Game Development",
        projects: [
            {
                img: "./img/dino-propulsion-web2.jpg",
                title: "Dino propulsion",
                subtitle: "Proyecto Destacado",
                description: "Un pequeño juego inspirado en Flappy Bird en el que eres un dinosaurio que intenta volar por el cielo, por el momento se encuentra en Itch.io.",
                tags: ['Game Development', 'Unity', 'Pixel Art'],
                prodURL: "https://alejandrodagobah.itch.io/dino-propulsion"
            }
        ]
    },
    // {
    //     title: "Optimización para Motores de Busqueda (SEO)",
    //     projects: [
    //         {
    //             img: "./img/project-sample-img.jpg",
    //             title: "Project 1",
    //             subtitle: "Proyecto Destacado",
    //             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi.",
    //             tags: ["HTML", "CSS", "JAVASCRIPT"],
    //             repoURL: "#",
    //             prodURL: "#"
    //         }
    //     ]
    // },
    // {
    //     title: "Diseño Gráfico",
    //     projects: [
    //         {
    //             img: "./img/project-sample-img.jpg",
    //             title: "Project 1",
    //             subtitle: "Proyecto Destacado",
    //             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi.",
    //             tags: ["HTML", "CSS", "JAVASCRIPT"],
    //             repoURL: "#",
    //             prodURL: "#"
    //         }
    //     ]
    // },
    {
        title: "Edicion de Video / Motion Graphics",
        projects: [
            {
                img: "./img/covid.jpg",
                title: "Solo tienes una Vida",
                subtitle: "Proyecto Destacado",
                description: "Realice los recursos, animación y montaje de tres comerciales con estilo Pixel Art, en conjunto con la consultora de comunicación “Farola” para el Ministerio de la Salud con el fin de educar y promover la conciencia frente al Covid-19, VIH y la VBG (Violencia Basada en Género).",
                tags: ["Adobe Suite", "Motion Graphics", "Pixel Art"],
                prodURL: "https://www.youtube.com/watch?v=PFLYHtWaaz0&list=PLWd8jJ5W_3iN3w-CuFJt-oFq0HG25V_5G&ab_channel=Aledevelops"
            },
            {
                img: "./img/videos-joyeria.jpg",
                title: "Canal de YT Joyería Flor de la Vida",
                subtitle: "Proyecto Destacado",
                description: "Fui el editor de video del canal de la joyería Flor de la Vida hasta la fecha 01/06/2023",
                tags: ["Adobe Premiere", "Adobe After Effects", "Edición de Video"],
                prodURL: "https://www.youtube.com/@joyeriaflordelavida8318/videos"
            }
        ]
    },  
]
    

const work = [
    {
        charge:'Desarrollador Web, CRM Manager y Analista SEO',
        company:'Markadaria',
        date:'Octubre 2022 - Noviembre 2023',
        points:[
            "Diseñé y desarrollé páginas web para diversos clientes de la agencia, resolviendo necesidades específicas de cada uno. Dependiendo de estas necesidades, se emplearon diferentes tecnologías, siendo las más comunes Gatsby.js o WordPress, y en ocasiones ambas, utilizando GraphQL.",
            "Trabajé en la optimización para buscadores de las páginas web, manteniendo un estándar alto para el posicionamiento orgánico. Se dio especial atención a la mejora de las tasas de conversión de los anuncios SEM.",
            "Realicé la integración y administración de diversos CRMs según las necesidades de cada negocio. Adapté los CRMs Kommo y Clientify en función del tipo de negocio, además de proporcionar capacitación a los ejecutivos de ventas. Estas acciones condujeron a una significativa mejora en los procesos y la tasa de conversión de ventas."
        ],
        url:"https://markadaria.com/"
    },
    {
        charge:'Desarrollador Web y Diseñador Gráfico',
        company:'Joyería Flor de la Vida',
        date:'Mayo 2018 - Septiembre 2022',
        points:[
            "Desarrollé la página Web de la empresa abordando tanto el Diseño UI/UX como el desarrollo en Wordpress, estableciendo la identidad online de Joyería Flor de la Vida como una de las mejores en el mercado.",
            "Trabajé en la optimización para buscadores o (SEO) de la página web donde pudimos alcanzar los primeros puestos en Google de búsquedas relacionadas.",
            "Diseño de catálogos, trípticos, materiales de impresión además de retoque fotográfico especializado para joyería."
        ],
        url:"https://joyeriaflordelavida.com/"
    },
    {
        charge:'Profesor de Tecnología',
        company:'MCD School',
        date:'Septiembre 2022 - Junio 2023',
        points:[
            "Trabajé medio tiempo enseñando desarrollo web (HTML, CSS, JS) e informática donde cree distintas aplicaciones para la enseñanza a jóvenes y niños entre las que se encuentran: un <a class='text-aleBlue hover:underline' href='https://github.com/AlejandroDagobah/trigonofiesta-dagobah'>Visualizador de trigonometría</a>, un <a class='text-aleBlue hover:underline' href='https://github.com/AlejandroDagobah/apocalyse-game-enable3D'>Juego de supervivencia</a> utilizando Enable.js y un <a class='text-aleBlue hover:underline' href='https://github.com/MCD-School/atom-visuzlizer'>Visualizador de átomos</a> utilizando Three.js.",
        ],
        url:"https://www.miconscienciadespierta.com/"
    },
    {
        charge:'Diseñador Gráfico Freelance',
        company:'Farola',
        date:'Abril 2022 - Presente',
        points:[
            "Trabaje para Farola como Diseñador Gráfico desarrollando una propuesta de diseño para la campaña de Solo una Vida del Ministerio de la Salud.",
            "Diseñe tres comerciales con temas educativos para el Ministerio de la Salud. Ecuatoriano en Motion graphics y Pixel Art.",
            "Desarrolle la identidad corporativa y propuesta de marca de Farola y su web actual."
        ],
        url:"https://www.farola.com.ec/"
    },
    {
        charge:'Desarrollador Web y Diseñador Gráfico',
        company:'MCD Manager',
        date:'Julio 2018 - Septiembre 2021',
        points:[
            "Colabore con el equipo de MCDmanager para crear, diseñar y desarrollar la Identidad gráfica, Packaging y Product design de nuestros clientes.",
            "Trabaje como principal Front End Developer y Diseñador Gráfico desarrollando websites que perduren para nuestros clientes.",
        ]
    }
]

const others = [
    {
        icon: IconChessKnight,
        iconLink: IconBrandGithub,
        title:'Chess.com to Notion',
        repo: 'https://github.com/AlejandroDagobah/chess-to-notion',
        description:'Una aplicación que realiza una solicitud de la información de un usuario a la API de chess.com y lo postea en tablas de Notion.',
        tags: ['Node JS', 'API', 'Notion'],
    },
    {
        icon: IconDeviceGamepad,
        iconLink: IconBrandGithub,
        title:'Linked Town',
        prod: 'https://alejandrodagobah.itch.io/linked-town',
        description:'Un juego realizado en la Game Jam Ecuador del año 2022 en el que tienes que instalar antenas en una comunidad amazónica. ',
        tags: ['Game Dev', 'Unity', 'C#'],
    },
    {
        icon: IconAppWindow,
        iconLink: IconBrandGithub,
        title:'Aledevelops Portafolio',
        repo: 'https://github.com/AlejandroDagobah/dagobah-landing-page',
        prod: '#',
        description:'Revisa el repositorio de este mismo portafolio en Github puedes usar el código siempre y cuando se me dé el crédito por él. :)',
        tags: ['React', 'UI/UX'],
    },
    {
        icon: IconAppWindow,
        iconLink: IconBrandGithub,
        title:'General Culture Quiz',
        repo: 'https://github.com/AlejandroDagobah/quiz-generator',
        // prod: 'https://github.com/AlejandroDagobah/chess-to-notion',
        description:'Una simple app que genera nuevas preguntas de cultura general haciendo una solicitud a Open Trivia DB.',
        tags: ['React', 'API'],  
    },
    {
        icon: IconAppWindow,
        iconLink: IconBrandGithub,
        title:'Meme Generator',
        repo: 'https://github.com/AlejandroDagobah/meme-generator',
        // prod: 'https://github.com/AlejandroDagobah/chess-to-notion',
        description:'Una divertida app que genera memes aleatorios y puedes poner un texto arriba y abajo de la imagen.',
        tags: ['React', 'API'],
        
    },
    {
        icon: IconDeviceGamepad,
        iconLink: IconBrandGithub,
        title:'Tenzi Game',
        repo: 'https://github.com/AlejandroDagobah/tenzies-with-react',
        // prod: 'https://github.com/AlejandroDagobah/chess-to-notion',
        description:'El clásico juego Tenzi donde tiras los dados hasta obtener el mismo numero, esta realizado en React.',
        tags: ['React', 'Mini Game'],
    }
]

export {websites, work, others, projects}
