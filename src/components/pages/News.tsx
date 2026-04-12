import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Label from "@/components/Label"
import NewsCard from "@/components/NewsCard"
import { Footer } from "@/components/Footer"
import { Heart, Calendar, ArrowRight } from "lucide-react"
import { getPosts } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { formatDate } from "@/lib/formatDate"

export const revalidate = 60

export default async function Page({ welsh }: { welsh?: boolean }) {
  const posts = await getPosts()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar background={true} welsh={welsh} />

      <main className="flex-1">
        <header className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full pb-18 pt-12">
          <Label text={welsh ? "Newyddion a Storiadau" : "News & Stories"} icon={Heart} />
          <h1 className="text-foreground md:text-6xl text-5xl text-center font-bold font-serif tracking-tight text-center">
            {welsh ? "Diweddariadau Cymunedol" : "Community Updates"}
          </h1>
          <p className="text-center text-foreground/75 text-lg md:px-0 px-5">
            {welsh ? "Straeon, digwyddiadau, a newyddion gan CAMAD a chymuned Machynlleth." : "Stories, events, and news from CAMAD and the Machynlleth community."}
          </p>
        </header>

        <section className="flex bg-accent/95 justify-center w-full lg:p-18 py-18 px-3">
          <Link href={`/news/${posts[0].slug.current}`} className="select-none max-w-6xl h-full flex lg:flex-row flex-col gap-10 cursor-pointer group">
            <div className="my-auto relative aspect-[6/4] lg:w-[550px] lg:min-w-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src={urlFor(posts[0].mainImage).width(500).height(500).url()}
                alt="image"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-5">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  {posts[0].category}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-foreground/65">
                  <Calendar className="h-4 w-4" />
                  {formatDate(posts[0].publishedAt)}
                </span>
              </div>
              <div className="lg:max-w-lg max-w-full flex flex-col h-full gap-2">
                <h2 className="text-foreground group-hover:text-primary md:text-5xl text-3xl font-bold font-serif tracking-tight lg:leading-14">
                  {posts[0].title}
                </h2>
                <p className="text-foreground/75 text-lg">{posts[0].summary}</p>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-primary">
                Read full story
                <ArrowRight className="h-4 w-4 mt-px transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </section>

        {posts.length >= 2 &&
          <section className="bg-[#e6ece8] w-full sm:pb-16 pb-10 pt-12 px-3 lg:px-0">
            <Link href={`/news/${posts[0].slug.current}`} className="flex max-w-5xl mx-auto">
              <div className="flex flex-col gap-3 w-full">
                <h1 className="text-foreground text-3xl max-w-lg font-bold font-serif">{welsh ? "Yr Ymbarion Diweddar" : "Recent Stories"}</h1>
                <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
                  {posts.slice(1).map((post: any) => (
                    <div key={post._id}>
                      <NewsCard
                        image={post.mainImage}
                        category={post.category}
                        date={formatDate(post.publishedAt)}
                        title={post.title}
                        summary={post.summary}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </section>
        }
      </main>

      <Footer welsh={welsh} />
    </div>
  )
}