import Container from "../components/Container";
import Card from "../components/Card";
import { profile } from "../data/portfolio";
import me from "../assets/me.jpeg";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import NavArrow from "../components/NavArrow.tsx";


export default function Home() {
    return (
        <Container>
            <div className={styles.navArrows}>
                <div></div>
                <NavArrow to="/parcours" label="Parcours" direction="right" />
            </div>
            <div className={styles.grid}>
                <div className={styles.imageWrap}>
                    <img
                        src={me}
                        alt={`Photo de ${profile.name}`}
                        className={styles.image}
                    />
                </div>
                <div className={styles.cardWrap}>
                    <Card>
                        <div className={styles.content}>
                            <div className={styles.body}>
                                <h1 className={styles.title}>{profile.name}</h1>
                                <p className={styles.subtitle}>{profile.subtitle}</p>

                                <div className={styles.bio}>
                                    {profile.bio.map((p) => (
                                        <p key={p} className={styles.bioP}>
                                            {p}
                                        </p>
                                    ))}
                                </div>

                                <div className={styles.links}>
                                    <a
                                        className={styles.btnSecondary}
                                        href={profile.links.github}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faGithub} /> -
                                        GitHub
                                    </a>

                                    <a
                                        className={styles.btnSecondary}
                                        href={profile.links.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faLinkedin} /> -
                                        LinkedIn
                                    </a>

                                    <a className={styles.btnSecondary} href={profile.links.email}>
                                        <FontAwesomeIcon icon={faEnvelope} /> -
                                        Me contacter
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Container>
    );
}
