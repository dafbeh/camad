import Navbar from "@/components/Navbar"
import { PortableText, type SanityDocument } from "next-sanity";
import Image from "next/image"
import Link from "next/link"
import { urlFor } from "@/sanity/lib/image"
import { client } from '@/sanity/lib/client'
import { formatDate } from "@/lib/formatDate"
import { ArrowLeft, Calendar } from "lucide-react"

export default async function Page({ params }: any) {
  const { slug } = await params
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }  // ← now slug is a plain string
  )

  return (
    <div>
      <Navbar background={true} />

      <article className="flex flex-col sm:gap-8 gap-5 max-w-5xl mx-auto py-12 lg:px-0 px-3">
        <Link href="/news">
          <button className="flex w-fit gap-1 items-center font-medium text-sm text-foreground/70 select-none hover:text-primary cursor-pointer">
            <ArrowLeft size={15} /> Back to News
          </button>
        </Link>

        <div className="flex gap-5">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {formatDate(post.publishedAt)}
          </span>
        </div>

        <h1 className="max-w-2xl text-foreground md:text-5xl text-3xl font-bold font-serif tracking-tight lg:leading-14">
          {post.title}
        </h1>

        <p className="text-foreground/70 text-lg">{post.summary}</p>

        <Image
          src={urlFor(post.mainImage).width(1200).height(675).url()}
          alt={post.title}
          width={1200}
          height={675}
          className="w-full rounded-lg object-cover"
        />

        <div className="prose max-w-none w-full mt-2">
          {Array.isArray(post.body) && <PortableText value={post.body} />}
        </div>
      </article>
    </div>
  )
}