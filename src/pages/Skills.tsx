import Container from "../components/Container.tsx";
import Card from "../components/Card.tsx";
import {competences} from "../data/portfolio.ts";
import styles from "./Skills.module.css";
import NavArrow from "../components/NavArrow.tsx";

export default function Skills() {
    return (
        <Container>
            <div className={styles.navArrows}>
                <NavArrow to="/projets" label="Projets" direction="left" />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.grid}>
                    {competences.map((c) => (
                        <Card key={c.title}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>{c.title}</h3>
                                <div className={styles.skillsGrid}>
                                    {c.skills.map((skill) => (
                                        <div key={skill.name} className={styles.skillCard}>
                                            <img
                                                src={skill.svg}
                                                alt={skill.name}
                                                className={styles.skillIcon}
                                            />
                                            <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Container>
    );
}
