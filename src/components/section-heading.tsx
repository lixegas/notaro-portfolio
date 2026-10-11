import {formatText} from "@/lib/text";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({title, subtitle}: SectionHeadingProps) {
  return (
    <div className="space-y-3" data-reveal>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
        {formatText(title)}
      </h2>
      {subtitle && (
        <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">{formatText(subtitle)}</p>
      )}
    </div>
  );
}
