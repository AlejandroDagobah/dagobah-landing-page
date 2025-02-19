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
                img: "./img/royal-flowers.png",
                title: "Royal Flowers Group Website",
                subtitle: "Proyecto Destacado",
                description: "Desarrollé la web de Royal Flowers con Gatsby.js, creando una plataforma con un alto performance, optimizada para SEO y con arquitectura escalable. Una experiencia digital premium que refleja su identidad de élite.",
                tags: ["GATSBY.JS", "REACT", "TAILWIND", "JAVASCRIPT"],
                prodURL: "https://royalflowersgroup.com/"
            },
            {
                img: "./img/projects/trigonometry.png",
                title: "VisualTrig",
                subtitle: "Proyecto Destacado",
                description: "Creé VisualTrig como un proyecto personal para explorar la trigonometría de forma interactiva. Desarrollada con la API de Canvas, ofrece visualizaciones dinámicas que hacen más intuitiva la geometría y las funciones trigonométricas.",
                tags: ["REACT", "TAILWIND", "JAVASCRIPT", "MATH"],
                prodURL: "https://visualtrig.netlify.app/",
                repoURL: "https://github.com/AlejandroDagobah/VisualTrig"
            },
            {
                img: "./img/projects/pbya-screen.png",
                title: "PB&A Website",
                subtitle: "Proyecto Destacado",
                description: "Desarrollé el catálogo web de PBYA, una de las distribuidoras líderes en cables industriales. Construido como Headless CMS con Gatsby, ofrece una navegación rápida, búsqueda eficiente y un diseño optimizado para el sector.",
                tags: ["REACT", "TAILWIND", "GATSBY.JS"],
                prodURL: "https://pbya.com/"
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
                img: "./img/projects/colexio.png",
                title: "Colexio Concepción Arenal",
                subtitle: "Proyecto Destacado",
                description: "Diseñé y desarrollé el portal web del Colegio Concepción Arenal en Galicia, creando una plataforma rápida y accesible con WordPress. Optimizado para SEO y fácil gestión, mejora la comunicación y visibilidad del colegio.",
                tags: ['UI/UX DESIGN', 'WORDPRESS'],
                prodURL: "https://ccarenal.es/"
            },
            {
                img: "./img/projects/mushuk.png",
                title: "Mushuk Yuyay Website",
                subtitle: "Proyecto Destacado",
                description: "Desarrollé la web de Mushuk Yuyay, fusionando un diseño artesanal y auténtico con una plataforma funcional en WordPress. Un espacio que destaca su identidad cultural y ofrece acceso a sus productos y proyectos.",
                tags: ['E-COMMERCE', 'WORDPRESS', 'SEO'],
                prodURL: "https://mushukyuyay.org/"
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
        charge:'Lead Developer',
        company:'Hipopink',
        date:'Enero 2024 - Present',
        points:[
            "Lidero el equipo de desarrollo web, gestionando todo el proceso desde la identificación de necesidades del cliente y la planificación del proyecto hasta el diseño, desarrollo y lanzamiento de sitios web a medida.",
            "Apoyo soluciones escalables y de alto rendimiento, utilizando <b>React, Gatsby y GraphQL para arquitecturas Headless CMS.</b>",
            "Selecciono estratégicamente la mejor tecnología para cada proyecto, integrando <b>WordPress, Shopify y Contentful</b> cuando es necesario, <b>optimizando velocidad, accesibilidad y SEO</b>. Para proyectos más ágiles, uso Webflow, Framer y WordPress, equilibrando eficiencia y calidad.",
            "Más allá del desarrollo, lidero y guío a mi equipo, asegurando el cumplimiento de plazos y <b>manteniendo altos estándares de diseño, rendimiento y experiencia de usuario</b>. Apasionado por conectar diseño y tecnología para crear experiencias digitales fluidas y de alto impacto."
        ],
        url:"https://hipopink.com/"
    },
    {
        charge:'Creative Web Designer & WordPress Developer',
        company:'ZabIA',
        date:'Mar 2024 - Present',
        points:[
            "Diseñé y desarrollé sitios web de alta calidad en WordPress para pequeñas empresas en España, como parte del programa KitDigital, impulsando su presencia digital. Priorizando un diseño atractivo y fácil de usar, creé sitios web impactantes en poco tiempo, asegurando una presencia online profesional y efectiva para cada negocio."
        ],
        // url:"https://hipopink.com/"
    },
    {
        charge:'Desarrollador web y especialista en CRMs',
        company:'Markadaria',
        date:'Enero - Noviembre 2023',
        points:[
            "Diseñé y desarrollé sitios web personalizados para diversos clientes utilizando Gatsby.js y WordPress, abordando necesidades específicas y objetivos comerciales.",
            "Gestioné integraciones de CRM, personalizando plataformas como Kommo y Clientify para adaptarlas a diferentes modelos de negocio y brindé capacitación a ejecutivos de ventas, lo que resultó en mejoras significativas en los procesos de ventas y las tasas de conversión.",
        ],
        // url:"https://markadaria.com/"
    },
    {
        charge:'Diseñador Gráfico como Freelance',
        company:'Aledevelops',
        date:'Febrero 2022 - Diciembre 2022',
        points:[
            "Diseñé empaques para una empresa de suplementos para bebés, creando un diseño llamativo y funcional que conectó con el público objetivo.",
            'Desarrollé una propuesta de branding para varias marcas, destacando el proyecto de la campaña "Solo Una Vida" para el Ministerio de Salud.',
            "Creé tres comerciales educativos para el Ministerio de Salud de Ecuador, utilizando un estilo de pixel art para educar y captar la atención de los espectadores."
        ],
        url:"https://www.aledevelops.me/"
    },
    {
        charge:'Web Master y Especialista en SEO',
        company:'Joyería Flor de la Vida',
        date:'Enero 2019 - Nov 2020',
        points:[
            "Lideré los esfuerzos de SEO, optimizando el sitio web para alcanzar las primeras posiciones en Google en búsquedas relevantes relacionadas con joyería en Ecuador.",
            'Diseñé materiales digitales e impresos, incluidos catálogos, folletos y retoques fotográficos especializados para mejorar el atractivo visual de la colección de joyería.',
        ],
        url:"https://joyeriaflordelavida.com/"
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
