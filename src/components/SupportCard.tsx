"use client";

import Image from "next/image";
import * as Icons from "lucide-react";

type SupportCardProps = {
  image: string;
  title: string;
  description: string;
  details?: { icon?: string; text: string, isLink?: boolean }[];
  accent?: boolean;
  grid?: boolean;
  className?: string;
  isLink?: boolean;
};

export function SupportCard({
  image,
  title,
  description,
  details,
  accent,
  grid,
  className,
}: SupportCardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-md ${className ?? ""
        }`}
    >
      <div className="mb-2 flex items-center">
        <Image
          src={image}
          alt={title}
          width={120}
          height={120}
          className="object-contain rounded-lg"
        />
      </div>

      <h3
        className={`text-lg font-semibold ${accent ? "text-orange-700" : "text-foreground"
          }`}
      >
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-foreground/65">
        {description}
      </p>

      {details && details.length > 0 && (
        <div
          className={`mt-5 ${grid ? "grid grid-cols-2 gap-2" : "space-y-2"
            }`}
        >
          {details.map((detail, i) => {
            const DetailIcon =
              (Icons[detail.icon as keyof typeof Icons] ||
                Icons.Dot) as React.ComponentType<{ size?: number }>;

            return (
              <DetailRow key={i} isLink={detail.isLink} icon={<DetailIcon size={16} />}>
                {detail.text}
              </DetailRow>
            );
          })}
        </div>
      )}
    </div>
  );
}

function DetailRow({
  icon,
  children,
  isLink,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  isLink?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 text-sm text-foreground/65">
      {isLink ? (
        <a
          href={"https://" + (children as string)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
        >
          <span className="text-primary">{icon}</span>
          <span>{children}</span>
        </a>
      ) : (
        <div className="flex items-center gap-3">
          <span className="text-primary">{icon}</span>
          <span>{children}</span>
        </div>
      )}
    </div>
  );
}