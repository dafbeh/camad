import { LucideIcon } from "lucide-react";

interface smallCardProps {
  title: string,
  body: string,
  icon?: LucideIcon,
}

export function SmallCard({ title, body, icon: Icon }: smallCardProps) {
  return (
    <div className="h-full">
      <div className="h-full bg-card/90 rounded-2xl border-1 border-primary/20 transition-shadow hover:shadow-md">
        <div className="flex flex-col gap-2 p-8">

          <div className="flex bg-foreground/10 p-3 rounded-md self-start mb-3">
             {Icon ? <Icon size={22} className="text-primary" /> : <div className="w-5 h-5 text-center"> </div>}
          </div>

          <h1 className="font-semibold text-lg text-foreground">
            {title}
          </h1>

          <p className="text-foreground/75 text-sm tracking-tight">
            {body}
          </p>
        </div>
      </div>
    </div>
  )
}

export function SmallerCard({ title, body, icon: Icon }: smallCardProps) {
  return (
    <div className="h-full">
      <div className="h-full bg-card/90 rounded-2xl border-1 border-primary/20 transition-shadow hover:shadow-md">
        <div className="flex flex-col gap-2 p-8 items-center text-center">

          <div className="flex bg-foreground/10 p-3 self-start mb-3 mx-auto rounded-full">
             {Icon ? <Icon size={22} className="text-orange-700/60" /> : <div className="w-5 h-5 text-center"> </div>}
          </div>

          <h1 className="font-semibold text-foreground text-md">
            {title}
          </h1>

          <p className="text-foreground/75 text-sm tracking-tight">
            {body}
          </p>
        </div>
      </div>
    </div>
  )
}