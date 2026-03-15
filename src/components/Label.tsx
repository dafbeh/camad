import { LucideIcon } from "lucide-react";

type LabelProps = {
  text: string;
  icon?: LucideIcon;
  className?: string;
};


export default function Label({ text, icon: Icon, className }: LabelProps) {
  return (
    <div className="flex w-fit gap-2 items-center bg-muted px-4 py-2 rounded-full border border-primary/20 bg-primary/10">
       {Icon && <Icon size={16} className={className ? className : "text-primary"} />}
      <span className={`text-sm font-medium ${className ? className : "text-primary"}`}>
        {text}
      </span>
    </div>
  )
}