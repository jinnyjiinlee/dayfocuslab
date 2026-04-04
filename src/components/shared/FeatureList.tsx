import DFLSymbol from '@/components/brand/DFLSymbol';

export default function FeatureList({ features, className = '' }: {
  features: string[];
  className?: string;
}) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {features.map((feature, i) => (
        <li key={i} className="flex items-center text-gray-700">
          <DFLSymbol size={14} variant="blue" className="mr-3 flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
  );
}
