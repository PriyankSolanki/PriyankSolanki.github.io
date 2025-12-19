import rapportDistricall from "../assets/rapports/rapport_districall.pdf";
import rapportAgitel from "../assets/rapports/rapport_agitel.pdf";
import rapportUcar from "../assets/rapports/rapport_ucar.pdf";
import BUTGraduation from "../assets/graduation/dbut.jpeg";
import BACGraduation from "../assets/graduation/dbac.jpeg";



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
