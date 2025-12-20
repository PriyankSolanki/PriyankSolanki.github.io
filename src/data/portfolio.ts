import rapportDistricall from "../assets/rapports/rapport_districall.pdf";
import rapportAgitel from "../assets/rapports/rapport_agitel.pdf";
import rapportUcar from "../assets/rapports/rapport_ucar.pdf";
import BUTGraduation from "../assets/graduation/dbut.jpeg";
import BACGraduation from "../assets/graduation/dbac.jpeg";
import CV from "../assets/cv.pdf"
import HTML from "../assets/skills/html.svg"
import CSS from "../assets/skills/css.svg"
import JS from "../assets/skills/js.svg"
import TS from "../assets/skills/ts.svg"
import Twig from "../assets/skills/twig.svg"
import Python from "../assets/skills/python.svg"
import Java from "../assets/skills/java.svg"
import C from "../assets/skills/c.svg"
import Cpp from "../assets/skills/cpp.svg"
import Csharp from "../assets/skills/csharp.svg"
import Angular from "../assets/skills/angular.svg"
import Docker from "../assets/skills/docker.svg"
import Maven from "../assets/skills/maven.svg"
import PHP from "../assets/skills/php.svg"
import React from "../assets/skills/react.svg"
import Spring from "../assets/skills/spring.svg"
import Symfony from "../assets/skills/symfony.svg"
import Vuejs from "../assets/skills/vuejs.svg"
import NextJS from "../assets/skills/nextjs.svg"
import Trello from "../assets/skills/trello.svg"
import Eclipse from "../assets/skills/eclipse.svg"
import JetBrains from "../assets/skills/jetbrains.svg"
import Postman from "../assets/skills/postman.svg"
import Notion from "../assets/skills/notion.svg"
import Github from "../assets/skills/github.svg"
import Unity from "../assets/skills/unity.svg"


export const profile = {
    name: "Priyank SOLANKI",
    subtitle: "Développeur Full-Stack",
    location: "France",
    bio: [
        "Passionné du développement informatique. Je suis fasciné par tout ce que l'on peut créer grâce aux différents langages de programmation.",
        "Créatif dans l'âme. J'adore insuffler ma touche personnelle à chaque projet, cherchant continuellement à apporter des innovations.",
        "L'informatique a toujours été au cœur de mes intérêts, voilà pourquoi je veux devenir développeur !",
    ],
    links: {
        github: "https://github.com/priyanksolanki",
        linkedin: "https://www.linkedin.com/in/priyank-solanki-114b182a0/",
        email: "mailto:priyank.slki@gmail.com",
        cv : CV
    },
};

export const experiences = [
    {
        title: "Alternance — Développeur Full-Stack",
        company: "Districall • Paris",
        date: "Décembre 2024 - Décembre 2025",
        site : "https://www.districall.com/",
        rapport : rapportDistricall,
        bullets: [
            "Automatisation de tâches (cron)",
            "Développement de nouvelles fonctionnalités",
            "Création et envoi de mails automatiques",
            "Maintenance et correction de bugs",
            "Développement base de données",
            "Configuration de Webhook Stripe",
            "Utilisation de l’API Notion",
        ],
    },
    {
        title: "Stage — Administrateur systèmes & réseaux",
        company: "Agitel Groupe • Paris 8ᵉ",
        date : "Mai 2024 - Juillet 2024",
        rapport : rapportAgitel,
        bullets: [
            "Configuration de Wazuh",
            "Déploiement de SentinelOne",
            "Surveillance d’alertes de sécurité",
            "Déploiement stack monitoring sur VM clientes",
            "Développement d’un dashboard en PHP",
        ],
    },
    {
        title: "Stage — Support IT",
        company: "UCAR TECHNOLOGY • Boulogne-Billancourt",
        date : "Mai 2023 - Juillet 2023",
        rapport : rapportUcar,
        bullets: [
            "Migration téléphonie fixe vers Webex",
            "Installation plugin Webex pour VDI",
            "Gestion de tickets via Zendesk",
            "Mise à jour des clients légers",
            "Amélioration de la qualité Wi-Fi (paramétrage admin)",
            "Installation matériels (caméra Poly, postes, etc.)",
        ],
    },
];

export const formations = [
    {
        title: "ING1 — 2024/2025",
        detail: "Parcours LSI (Logiciels et systèmes d'information)",
        place: "EFREI — Villejuif",
    },
    {
        title: "BUT Informatique — 2021/2024",
        detail: "Réalisation d'applications : conception, développement, validation",
        place: "IUT de Montreuil — Montreuil",
        graduation : BUTGraduation,
    },
    {
        title: "Baccalauréat — 2020/2021",
        detail: "Spécialités Mathématiques / NSI",
        place: "Lycée Condorcet — Montreuil",
        graduation : BACGraduation,
    },
];

export type Project = {
    title: string;
    description: string;
    url: string;
    context?: string;
    stack: string[];
    features?: string[];
    demo?: string;
};

export const projects: Project[] = [
    {
        title: "Todo App",
        url: "https://github.com/PriyankSolanki/Todo_App",
        description:
            "Application web inspirée de Trello permettant de gérer des tâches avec titre, description et organisation par colonnes.",
        features: ["Inscription / Connexion", "Création, modification et suppression de cartes", "Création, modification et suppression de colonnes", "Drag & Drop des cartes"],
        context: "Projet Personnelle",
        demo : "https://todoapp.ecyriaque.dev/login",
        stack: ["React", "NestJS", "TypeScript", "GraphQL", "Prisma", "MySQL", "Docker"],
    },
    {
        title: "BlazorGameQuest1234",
        url: "https://github.com/priyanksolanki/BlazorGameQuest1234",
        description:
            "Jeu à choix : survivre à 5 étapes et maximiser le score en prenant les meilleures décisions.",
        features: ["Connexion via Keycloak", "Salles aléatoires", "Système de score"],
        context: "Cycle ingénieur — 7ᵉ semestre",
        stack: ["C#", ".NET", "xUnit", "Swagger", "Rider", "EFCore InMemory"],
    },
    {
        title: "Projet ALTN72 – Gestion des Apprentis",
        url: "https://github.com/priyanksolanki/Java_Project",
        description:
            "Ce projet est une application Spring Boot + Thymeleaf permettant la gestion complète des apprentis, de leurs entreprises, tuteurs, soutenances, évaluations et visites.",
        features: ["Créer, modifier, consulter et supprimer des apprentis", "Gestions des soutenances, missions, évaluations et visites", "Ajouter des apprentis via un fichier CSV"],
        context: "Cycle ingénieur — 7ᵉ semestre",
        stack: ["Java", "Spring Boot", "PostgreSQL", "Hibernate / JPA", "Render", "Maven", "IntelliJ", "Swagger"],
    },
    {
        title: "PROJET REFONTE MAIL",
        url: "https://github.com/priyanksolanki/PROJET_DEV_WEB",
        description:
            "Application permettant la gestion de ses mails",
        features: ["Ce connecter via MicrosoftAuth", "Consulter vos e-mails", "Créer des nouveaux e-mails", "Archiver vos e-mails"],
        context: "Cycle ingénieur — 6ᵉ semestre",
        stack: ["Vue.js", "Symfony", "PHP", "PostgreSQL", "Node.js", "Swagger", "PhpStorm", "WebStorm"],
    },
    {
        title: "Blazing maquette (projet en cour)",
        url: "https://github.com/priyanksolanki/BlazingMaquette",
        description:
            "Jeu mobile inspiré du jeu mobile Naruto Ultimate Ninja Storm Blazing, aujourd'hui disparu, j'essaye de la faire revivre",
        features: ["Drag and drop de ses personnages", "Infligé des dégâts aux ennemis", "Utiliser vos compétences", "Changer de personnages quand vous le souhaiter"],
        context: "Projet personnelle",
        stack: ["C#", "Unity", "Trello"],
    },
    {
        title: "RECONNAISSANCE VOCAL",
        url: "https://github.com/priyanksolanki/communication-reconnaissance-vocale",
        description:
            "Énoncer une couleur à l'oral et elle s'affichera",
        features: ["Reconnaissance vocale via le traitement du signal", "Affichage de la couleur énoncé"],
        context: "Cycle ingénieur — 5ᵉ semestre",
        stack: ["Python", "Google Recognize"],
    },

    {
        title: "PROJET-METRO",
        url: "https://github.com/priyanksolanki/PROJET-METRO",
        description:
            "Obtenez le chemin le plus cours pour votre trajet dans les métros de Paris grâce à l'algorithme de Bellman",
        features: ["Voir la carte du métro parisien", "Voir l'arbre couvrant minimal de la carte du métro parisien", "Choisir 2 stations pour obtenir le chemin de plus cours", "Voir l'arbre couvrant du métro parisien grâce à l'algorithme PRIM"],
        context: "Cycle ingénieur — 5ᵉ semestre",
        stack: ["Python", "NetworkX"],
    },
    {
        title: "EDT Montreuil",
        url: "https://github.com/priyanksolanki/SAE-5.A-EntMontreuil-Front",
        description:
            "Un nouvel éditeur d'emploi du temps conçu pour les enseignants. Avec cette application gérer facilement et simplement l'emploi du temps de vos élèves !",
        features: ["Gestion complète des emplois du temps des élèves", "Créer, modifier ou supprimer des cours", "Gestion complète des élèves et des classes", "Gestions des ressources (salle, pc, ...)"],
        context: "BUT Informatique — 5ᵉ semestre",
        stack: ["Angular", "Flask", "PostgreSQL", "Docker", "Swagger", "Visual Studio Code"],
    },
];


export const competences = [
    {
        title : "Développement Web",
        skills : [
            {svg : HTML, name : "HTML"}, {svg : CSS, name : "CSS"},
            {svg : JS, name : "JS"}, {svg : TS, name : "TS"},
            {svg : Twig, name : "Twig"}
        ]
    },
    {
        title : "Langages de programmation",
        skills : [
            {svg : Python, name : "Python"}, {svg : Java, name : "Java"},
            {svg : C, name : "C"}, {svg : Cpp, name : "C++"},
            {svg : Csharp, name : "C#"}, {svg : PHP, name : "PHP"}
        ]
    },
    {
        title : "Frameworks",
        skills : [
            {svg : Angular, name : "Angular"}, {svg : Symfony, name : "Symfony"},
            {svg : Spring, name : "SpringBoot"}, {svg : React, name : "React"},
            {svg : Vuejs, name : "VueJS"}, {svg : NextJS, name : "NextJS"}
        ]
    },
    {
        title : "Logiciels et outils",
        skills : [
            {svg : Maven, name : "Maven"}, {svg : Docker, name : "Docker"},
            {svg : Trello, name : "Trello"}, {svg : Github, name : "GitHub"},
            {svg : Postman, name : "Postman"}, {svg : Unity, name : "Unity"},
            {svg : Eclipse, name : "Eclipse"}, {svg : Notion, name : "Notion"},
            {svg : JetBrains, name : "JetBrains"},
        ]
    }
];