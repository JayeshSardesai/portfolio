export default function SkillBadge({ label }) {
    return (
        <span className="inline-flex items-center gap-2 bg-surface/70 px-3 py-1 mr-2 mb-2 rounded-full text-sm">
            <span className="text-sm">{label}</span>
        </span>
    );
}
