import { useEffect, useRef } from "react";

type Circle = { x: number; y: number; vx: number; vy: number; r: number };
type Line = { x: number; y: number; vx: number; vy: number; l: number };

export default function BackgroundCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let W = window.innerWidth;
        let H = window.innerHeight;

        // Retina support
        const resize = () => {
            W = window.innerWidth;
            H = window.innerHeight;

            const dpr = Math.max(1, window.devicePixelRatio || 1);
            canvas.width = Math.floor(W * dpr);
            canvas.height = Math.floor(H * dpr);
            canvas.style.width = `${W}px`;
            canvas.style.height = `${H}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        resize();
        window.addEventListener("resize", resize);

        const circlesCount = 20;
        const linesCount = 15;

        const circles: Circle[] = Array.from({ length: circlesCount }, () => {
            const vx = 0.1 + Math.random() * 0.5;
            return {
                x: Math.random() * W,
                y: Math.random() * H,
                vx,
                vy: -vx,
                r: 10 + Math.random() * 50,
            };
        });

        const lines: Line[] = Array.from({ length: linesCount }, () => {
            const vx = 0.1 + Math.random() * 0.8;
            return {
                x: Math.random() * W,
                y: Math.random() * H,
                vx,
                vy: -vx,
                l: 5 + Math.random() * 20,
            };
        });

        const draw = () => {
            // Background gradient
            const grad = ctx.createLinearGradient(0, 0, W, H);
            grad.addColorStop(0, "rgb(0, 0, 40)");
            grad.addColorStop(0.9, "rgb(0, 0, 10)");

            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, W, H);

            // Circles
            for (const c of circles) {
                const blurGrad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r);
                blurGrad.addColorStop(0, "rgba(0,0,60,0.5)");
                blurGrad.addColorStop(0.85, "rgba(0,0,30,0.5)");
                blurGrad.addColorStop(1, "rgba(0,0,15,0.0)");

                ctx.beginPath();
                ctx.globalCompositeOperation = "lighter";
                ctx.fillStyle = blurGrad;
                ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
                ctx.fill();

                c.x += c.vx;
                c.y += c.vy;

                if (c.x < -50) c.x = W + 50;
                if (c.y < -50) c.y = H + 50;
                if (c.x > W + 50) c.x = -50;
                if (c.y > H + 50) c.y = -50;
            }

            // Lines
            for (const l of lines) {
                ctx.beginPath();
                ctx.globalCompositeOperation = "lighter";

                ctx.save();
                ctx.moveTo(l.x, l.y);
                ctx.shadowColor = "blue";
                ctx.shadowBlur = 10;
                ctx.lineTo(l.x + l.l, l.y - l.l);
                ctx.strokeStyle = "rgba(0,0,50,0.5)";
                ctx.stroke();
                ctx.restore();

                l.x += l.vx;
                l.y += l.vy;

                if (l.x < -20) l.x = W + 20;
                if (l.y < -20) l.y = H + 20;
                if (l.x > W + 20) l.x = -20;
                if (l.y > H + 20) l.y = -20;
            }

            rafRef.current = requestAnimationFrame(draw);
        };

        rafRef.current = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", resize);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 h-full w-full pointer-events-none"
            aria-hidden="true"
        />
    );
}
