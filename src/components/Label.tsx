import { LucideIcon } from "lucide-react";

type LabelProps = {
  text: string;
  icon?: LucideIcon;
};


export default function Label({ text, icon: Icon }: LabelProps) {
  return (
    <div className="flex gap-2 items-center bg-muted px-4 py-2 rounded-full border border-primary/20 bg-primary/10">
       {Icon && <Icon size={16} className="text-primary" />}
      <span className="font-sans text-sm font-medium text-primary">
        {text}
      </span>
    </div>
  )
}