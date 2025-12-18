import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Parcours from "./pages/Parcours";
import Projets from "./pages/Projets";
import BackgroundCanvas from "./components/BackgroundCanva.tsx";
import styles from "./App.module.css"

export default function App() {
    return (
        <div>
            <BackgroundCanvas />
            <Navbar />
            <main className="py-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/parcours" element={<Parcours />} />
                    <Route path="/projets" element={<Projets />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    © {new Date().getFullYear()} — Priyank Solanki
                </div>
            </footer>
        </div>
    );
}
