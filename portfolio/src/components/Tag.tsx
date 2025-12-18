export default function Tag({ children }: { children: string }) {
    return (
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
      {children}
    </span>
    );
}
