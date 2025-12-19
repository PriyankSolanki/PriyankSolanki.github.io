import Container from "../components/Container.tsx";
import Card from "../components/Card.tsx";
import Tag from "../components/Tag.tsx";
import { projects } from "../data/portfolio.ts";
import styles from "./Projets.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import NavArrow from "../components/NavArrow.tsx";
import {faDesktop} from "@fortawesome/free-solid-svg-icons";

export default function Projets() {
    return (
        <Container>
            <div className={styles.navArrows}>
                <NavArrow to="/parcours" label="Parcours" direction="left" />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.grid}>
                    {projects.map((p) => (
                        <Card key={p.title}>
                            <div className={styles.cardHeader}>
                                <div>
                                    <h3 className={styles.cardTitle}>{p.title}</h3>
                                    {p.context && (
                                        <p className={styles.context}>{p.context}</p>
                                    )}
                                </div>

                                <div className={styles.btnGroup}>
                                    {p.demo && (
                                        <a
                                            href={p.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={styles.githubBtn}
                                        >
                                            Demo <FontAwesomeIcon icon={faDesktop} />
                                        </a>
                                    )}

                                    <a
                                        href={p.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={styles.githubBtn}
                                    >
                                        GitHub <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </div>
                            </div>

                            <p className={styles.description}>{p.description}</p>

                            {p.features?.length ? (
                                <ul className={styles.list}>
                                    {p.features.map((f) => (
                                        <li key={f}>{f}</li>
                                    ))}
                                </ul>
                            ) : null}

                            <div className={styles.tags}>
                                {p.stack.map((s) => (
                                    <Tag key={s}>{s}</Tag>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Container>
    );
}
