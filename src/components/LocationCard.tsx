export default function LocationCard({ name, address, status, description, website, map, statusColor = 'green' }: {
  name: string;
  address: string;
  status: string;
  description: string;
  website?: string;
  map?: string;
  statusColor?: 'green' | 'blue' | 'gray';
}) {
  const colors = {
    green: 'bg-green-100 text-green-700',
    blue: 'bg-blue-100 text-blue-700',
    gray: 'bg-gray-100 text-gray-600',
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-[#050A34]">{name}</h3>
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${colors[statusColor]}`}>{status}</span>
        </div>
        <p className="text-sm text-gray-500">{address}</p>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>
      <div className="flex flex-wrap gap-3">
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[#085CF0] hover:underline min-h-[44px]">
            웹사이트 방문
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        )}
        {map && (
          <a href={map} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:underline min-h-[44px]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            네이버 지도
          </a>
        )}
      </div>
    </div>
  );
}
