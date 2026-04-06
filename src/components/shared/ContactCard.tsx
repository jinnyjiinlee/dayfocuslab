export default function ContactCard({ href, title, subtitle, linkLabel, iconBg, icon, external }: {
  href: string;
  title: string;
  subtitle: string;
  linkLabel: string;
  iconBg: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="block p-8 rounded-3xl transition-all group bg-white border border-gray-100 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="flex flex-col items-start gap-4">
        <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center`}>{icon}</div>
        <div>
          <p className="font-bold text-lg mb-1 text-[#050A34]">{title}</p>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <span className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all text-[#085CF0]">
          {linkLabel}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </a>
  );
}
