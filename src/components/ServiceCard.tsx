"use client";

import * as Icons from "lucide-react";

type ServiceCardProps = {
  icon?: string;
  title: string;
  description: string;
  details?: { icon?: string; text: string }[];
  accent?: boolean;
  grid?: boolean;
  className?: string;
};

export function ServiceCard({
  icon,
  title,
  description,
  details,
  accent,
  grid,
  className,
}: ServiceCardProps) {
  const Icon =
    (Icons[icon as keyof typeof Icons] || Icons.HelpCircle) as React.ComponentType<{ size?: number }>;

  return (
    <div
      className={`rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-md 
      ${className ?? ""}`}
    >
      {/* Main Icon */}
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10
        ${accent ? "text-orange-700" : "text-primary"}`}
      >
        <Icon size={22} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-foreground/65">
        {description}
      </p>

      {/* Details */}
      {details && details.length > 0 && (
        <div
          className={`mt-5 ${
            grid ? "grid grid-cols-2 gap-2" : "space-y-2"
          }`}
        >
          {details.map((detail, i) => {
            const DetailIcon =
              (Icons[detail.icon as keyof typeof Icons] ||
              Icons.Dot) as React.ComponentType<{ size?: number }>;

            return (
              <DetailRow key={i} icon={<DetailIcon size={16} />}>
                {detail.text}
              </DetailRow>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function DetailRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 text-sm text-foreground/65">
      <span className="text-primary">{icon}</span>
      <span>{children}</span>
    </div>
  );
}