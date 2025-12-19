import { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./NavArrow.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

type NavArrowProps = {
    to: string;
    label: string;
    direction?: "left" | "right";
};

export default function NavArrow({
                                     to,
                                     label,
                                     direction = "left",
                                 }: NavArrowProps) {
    const intervalRef = useRef<number | null>(null);

    const startTyping = (el: HTMLSpanElement | null) => {
        if (!el) return;

        const fullText = label;
        let index = 0;
        el.textContent = "";

        if (intervalRef.current) {
            window.clearInterval(intervalRef.current);
        }

        intervalRef.current = window.setInterval(() => {
            el.textContent = fullText.slice(0, index);
            index += 1;

            if (index > fullText.length && intervalRef.current) {
                window.clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }, 30);
    };

    const stopTyping = (el: HTMLSpanElement | null) => {
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        if (el) el.textContent = "";
    };

    return (
        <Link to={to} className={styles.link}>
            <div
                className={styles.arrow}
                onMouseEnter={(e) =>
                    startTyping(
                        e.currentTarget.querySelector<HTMLSpanElement>("[data-text]")
                    )
                }
                onMouseLeave={(e) =>
                    stopTyping(
                        e.currentTarget.querySelector<HTMLSpanElement>("[data-text]")
                    )
                }
            >
        <span className={styles.icon}>
          {direction === "left" ? <FontAwesomeIcon icon={faArrowLeft} /> : <FontAwesomeIcon icon={faArrowRight} />}
        </span>

                <span
                    className={styles.text}
                    data-text=""
                    aria-label={label}
                />
            </div>
        </Link>
    );
}
