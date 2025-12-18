import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import Container from "./Container.tsx";
import { profile } from "../data/portfolio.ts";
import styles from "./Navbar.module.css";

function linkClass(isActive: boolean) {
    return [
        styles.link,
        isActive ? styles.linkActive : styles.linkInactive,
    ].join(" ");
}

export default function Navbar() {
    const links = useMemo(
        () => [
            { to: "/", label: "Présentation" },
            { to: "/parcours", label: "Parcours" },
            { to: "/projets", label: "Projets" },
        ],
        []
    );

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.brand}>
                        <span className={styles.name}>{profile.name}</span>
                        <span className={styles.subtitle}>{profile.subtitle}</span>
                    </div>

                    <nav className={styles.nav}>
                        {links.map((l) => (
                            <NavLink key={l.to} to={l.to} className={({ isActive }) => linkClass(isActive)}>
                                {l.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </Container>
        </header>
    );
}
