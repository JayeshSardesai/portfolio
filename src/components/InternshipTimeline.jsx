export default function InternshipTimeline({ items }) {
    return (
        <div className="space-y-4">
            {items.map((it, i) => (
                <div key={i} className="bg-surface p-4 rounded flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold">{it.company}</h3>
                        <p className="text-gray-400 text-sm">{it.role} • {it.duration}</p>
                    </div>
                    <p className="text-gray-300 text-sm">{it.desc}</p>
                </div>
            ))}
        </div>
    );
}
