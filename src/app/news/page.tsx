import Image from "next/image"
import Navbar from "@/components/Navbar"
import Label from "@/components/Label"
import NewsCard from "@/components/NewsCard"
import { Footer } from "@/components/Footer"
import { Heart, Calendar, ArrowRight } from "lucide-react"
import { getPosts } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"

export default async function Page() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar background={true} />

      <main className="flex-1">
        <header className="flex flex-col gap-8 bg-[#eff0ec] justify-center items-center w-full pb-18 pt-12">
          <Label text={"News & Stories"} icon={Heart} />
          <h1 className="text-foreground sm:text-5xl md:text-6xl text-4xl font-bold font-serif tracking-tight">Community Updates</h1>
          <p className="text-center text-foreground/70 text-lg md:px-0 px-5">
            Stories, events, and news from CAMAD and the Machynlleth community.
          </p>
        </header>

        <section className="flex bg-accent/95 justify-center w-full lg:p-18 py-18 px-3">
          <div className="select-none max-w-6xl h-full flex lg:flex-row flex-col gap-10 cursor-pointer group">
            <div className="my-auto relative aspect-[6/4] lg:w-[500px] lg:min-w-[400px] w-full overflow-hidden rounded-lg">
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
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {formatDate(posts[0].publishedAt)}
                </span>
              </div>
              <div className="lg:max-w-lg max-w-full flex flex-col h-full gap-2">
                <h2 className="text-foreground group-hover:text-primary md:text-5xl text-3xl font-bold font-serif tracking-tight leading-14">
                  {posts[0].title}
                </h2>
                <p className="text-foreground/70 text-lg">{posts[0].summary}</p>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-primary">
                Read full story
                <ArrowRight className="h-4 w-4 mt-px transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </section>

        {posts.length >= 2 &&
          <section className="bg-[#efebe1] w-full sm:pb-16 pb-10 pt-12 px-3 lg:px-0">
            <div className="flex max-w-5xl mx-auto">
              <div className="flex flex-col gap-3 w-full">
                <h1 className="text-foreground text-3xl max-w-lg font-bold font-serif">Recent Stories</h1>
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
            </div>
          </section>
        }
      </main>

      <Footer />
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