import Container from "../components/Container";
import Card from "../components/Card";
import { experiences, formations } from "../data/portfolio";
import styles from "./Parcours.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe, faPaperclip} from "@fortawesome/free-solid-svg-icons";
import NavArrow from "../components/NavArrow.tsx";


export default function Parcours() {
    return (
        <Container>
            <div className={styles.navArrows}>
                <NavArrow to="/" label="Présentation" direction="left" />
                <NavArrow to="/projets" label="Projets" direction="right" />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Expériences</h3>

                    <div className={styles.grid}>
                        {experiences.map((e) => (
                            <Card key={e.title}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardTitle}>{e.title}</div>

                                    <div className={styles.btnGroup}>
                                        {e.site && (<a href={e.site} target="_blank" rel="noreferrer" className={styles.githubBtn}>Site <FontAwesomeIcon icon={faGlobe} /></a>)}
                                        {e.rapport && (<a href={e.rapport} target="_blank" rel="noreferrer" className={styles.githubBtn}>Rapport <FontAwesomeIcon icon={faPaperclip} /></a>)}
                                    </div>
                                </div>

                                <div className={styles.cardCompany}>{e.company}</div>
                                <div className={styles.cardSubtitle}>{e.date}</div>
                                <ul className={styles.list}>
                                    {e.bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Formations</h3>

                    <div className={styles.grid}>
                        {formations.map((f) => (
                            <Card key={f.title}>
                                <div className={styles.cardTitle}>{f.title}</div>
                                <div className={styles.cardText}>{f.detail}</div>
                                <div className={styles.cardSubtitle}>{f.place}</div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
}
