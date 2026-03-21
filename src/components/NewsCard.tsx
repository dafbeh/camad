import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

type NewsCardProps = {
  image: any,
  category: string,
  date: string,
  title: string,
  summary: string,
}

export default function NewsCard({ image, category, date, title, summary }: NewsCardProps) {
  return (
    <div>
      <article className="flex flex-col group select-none cursor-pointer">
        <div className="overflow-hidden rounded-lg mb-3">
          <Image
            src={urlFor(image).width(500).height(500).url()}
            alt="image"
            width={500}
            height={500}
            className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="mb-2 flex items-center gap-3">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
            {category.toUpperCase()}
          </span>
          <span className="text-xs text-foreground/70">{formatDate(date)}</span>
        </div>
        <h3 className="font-serif text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary text-balance">
          {title}
        </h3>
        <p className="mt-2 mb-5 line-clamp-2 text-xs leading-relaxed text-foreground/70">
          {summary}
        </p>
      </article>
    </div>
  )
}

function formatDate(dateString: string) {
  const date = new Date(dateString)

  const day = date.getDate()
  const month = date.toLocaleString('en-GB', { month: 'long' })
  const year = date.getFullYear()

  const getSuffix = (d: number) => {
    if (d > 3 && d < 21) return 'th'
    switch (d % 10) {
      case 1: return 'st'
      case 2: return 'nd'
      case 3: return 'rd'
      default: return 'th'
    }
  }

  return `${day}${getSuffix(day)} ${month} ${year}`
}