import {IconFolders, IconBrandGithub, IconLink, IconDeviceGamepad2, IconDeviceGamepad, IconAppWindow, IconMovie, IconLayoutCollage, IconPhoto, IconBox, IconPackage, IconChessKnight} from "@tabler/icons";


const websites = [
    {
        title:'Joyería Flor de la Vida',
        description:'Realice el diseño UI/UX y desarrolle en Wordpress esta \r\n e-commerce para la empresa “Joyería Flor de la Vida”. Además optimice el SEO para alcanzar los primeros puestos en las búsquedas relacionadas.',
        buttons: ['e-commerce', 'Web Design', 'Wordpress', 'SEO'],
        websiteImage: 'img/web-fdlv-img.png',
        phoneImage:'img/phone-fdlv-img.png',
        isRight:true,
        url: 'https://joyeriaflordelavida.com/'
    },
    {
        title:'Ministerio de la Salud',
        description:'Realice los recursos, animación y montaje de tres comerciales con estilo Pixel Art, en conjunto con la consultora de comunicación “Farola” para el Ministerio de la Salud con el fin de educar y promover la conciencia frente al Covid-19, VIH y la VBG (Violencia Basada en Género).',
        buttons: ['Motion Graphics', 'Animation', 'Illustration'],
        websiteImage: 'img/campaing-one-life.png',
        phoneImage:'',
        isRight:false,
        url: 'https://www.youtube.com/watch?v=PFLYHtWaaz0&list=PLWd8jJ5W_3iN3w-CuFJt-oFq0HG25V_5G&ab_channel=Aledevelops&themeRefresh=1'


    },
    {
        title:'Fenix Delivery',
        description:'Realicé el diseño UI/UX y desarrollé en wordpress una e-commerce en conjunto con la consultora tecnológica “MCD manager” para una empresa de entrega de alimentos y productos nacionales. Además hice la edición fotográfica para todos los productos de la página.',
        buttons: ['e-commerce', 'Web Design', 'Photo Retouch'],
        websiteImage: 'img/website-portfolio-fenix.png',
        phoneImage:'img/phone-portfolio-fenix.png',
        isRight:false,
        url: 'https://fenix.com.ec/'

    },
    {
        title:'Dino Propulsion',
        description:'Un pequeño juego inspirado en Flappy Bird en el que eres un dinosaurio que intenta volar por el cielo. Publiqué este juego en la Play Store, pero en el medio de la pandemia fue retirado sin motivo, por el momento se encuentra en Itch.io.',
        buttons: ['Game Development', 'Unity', 'Pixel Art'],
        websiteImage: 'img/dino-propulsion-web.png',
        phoneImage:'img/dino-propulsion.png',
        isRight:false,
        url:'https://alejandrodagobah.itch.io/dino-propulsion'
    },
    {
        title:'Quality B2B',
        description:'Una asombrosa página web que realice para Quality B2B donde diseñe y desarrolle una web enfocada a presentar la marca y los productos como la solución ambiental a productos de limpieza para negocios, organizaciones y grandes fábricas.',
        buttons: ['UI/UX Design', 'Web Development', 'Wordpress'],
        websiteImage: 'img/website-portfolio-quality-2.png',
        phoneImage:'img/phone-portfolio-quality-2.png',
        isRight:false,
        url:'https://qualityb2b.com/'

    },
    {
        title:'Natomovil',
        description:'Una e-commerce que hice para un pequeño negocio distribuidor de computadoras y celulares ubicado en Santo Domingo de los Tsáchilas.',
        buttons: ['e-commerce', 'Web Design'],
        websiteImage: 'img/natomovil.png',
        phoneImage:'img/natomovil-phone.png',
        isRight:false

    }
]
    

const work = [
    {
        charge:'Web developer',
        company:'Joyería Flor de la Vida',
        date:'May 2018 - Present',
        points:[
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
        ]
    },
    {
        charge:'Web developer',
        company:'Farola ',
        date:'May 2018 - Present',
        points:[
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
        ]
    },
    {
        charge:'Web developer',
        company:'C.C     MCD',
        date:'May 2018 - Present',
        points:[
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
        ]
    },
    {
        charge:'Web developer',
        company:'Quality',
        date:'May 2018 - Present',
        points:[
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
        ]
    },
    {
        charge:'Web developer',
        company:'Fenix Delivery',
        date:'May 2018 - Present',
        points:[
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
        ]
    },
    {
        charge:'Web developer',
        company:'Natomovil',
        date:'May 2018 - Present',
        points:[
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
        ]
    },
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
        description:'El clásico juego Tenzi donde tienes que tirar los dados hasta tener el mismo numero, esta realizado en React.',
        tags: ['React', 'Mini Game'],
    }
]

export {websites, work, others}
