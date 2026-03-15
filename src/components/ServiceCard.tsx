type serviceCardProps = {
  icon: React.ReactNode,
  title: string,
  description: string,
  details?: { icon: React.ReactNode; text: string }[],
  accent?: boolean,
  className?: string
}

export function ServiceCard({ icon, title, description, details, accent, className }: serviceCardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-md 
          ${className ?? ""}`}>
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl 
            ${accent ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"}`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {details && details.length > 0 && (
        <div className="mt-5 space-y-2">
          {details.map((detail, i) => (
            <DetailRow key={i} icon={detail.icon}>
              {detail.text}
            </DetailRow>
          ))}
        </div>
      )}
    </div>
  )
}

export function DetailRow({ icon, children }: { icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      <span className="text-primary">{icon}</span>
      <span>{children}</span>
    </div>
  )
}
