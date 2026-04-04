export default function InfoGrid({ items }: {
  items: { label: string; value: string }[];
}) {
  return (
    <div className="bg-blue-50 p-6 rounded-xl">
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div key={i}>
            <p className="text-xs text-[#085CF0] uppercase tracking-wider font-medium mb-1">
              {item.label}
            </p>
            <p className="font-bold text-[#050A34]">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
