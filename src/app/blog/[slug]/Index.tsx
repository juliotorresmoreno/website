import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { locale } from "@/lib/date";
import Image from "next/image";
import Link from "next/link";
import "./content.css";
import { CallToAction } from "@/components/CallToAction";

interface IndexProps {
  id?: string;
  title?: string;
  description?: string;
  content?: string | null;
  category?: string | null;
  imageUrl?: string | null;
  keywords?: string | null;
  shortUrl?: string | null;
  published?: boolean;
  authorId?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  deleted?: boolean;
}

const showCategories = false;

export function Index(props: IndexProps) {
  return (
    <>
      <Header />

      <main>
        <section className="pt-8 sm:py-16 lg:py-20 mx-auto">
          <article>
            <header>
              <div className="px-4 flex justify-between flex-col sm:flex-row max-w-4xl mx-auto mt-0 mb-2 sm:items-center">
                <p>
                  {showCategories && (
                    <>
                      {"· "}
                      <Link
                        className="capitalize hover:underline inline-block"
                        href={`/category/${props.category?.toLocaleLowerCase()}`}
                      >
                        {props.category}
                      </Link>
                    </>
                  )}
                </p>
              </div>
              <h1 className="px-4 max-w-5xl mt-4 mx-auto text-4xl md:text-5xl bold leading-tighter tracking-tighter font-heading">
                {
                  //<h1 className="max-w-5xl mx-auto text-4xl md:text-5xl text-center font-bold leading-tighter tracking-tighter font-heading">
                }
                {props.title}
              </h1>
              <p className="px-4 max-w-5xl mt-4 mx-auto text-xl text-muted text-justify">
                {props.description}
              </p>

              <p className="px-4 max-w-5xl mx-auto mt-4 mb-8 text-muted dark:text-slate-400">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 inline-block -mt-0.5"
                  data-icon="tabler:clock"
                >
                  <symbol id="ai:tabler:clock">
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" />
                      <path d="M12 7v5l3 3" />
                    </g>
                  </symbol>
                  <use xlinkHref="#ai:tabler:clock" />
                </svg>
                &nbsp;
                <time
                  dateTime={locale(props.createdAt as any)}
                  className="inline-block"
                >
                  {locale(props.createdAt as any)}
                </time>
              </p>

              <Image
                src={props.imageUrl ?? ""}
                width={1024}
                height={0}
                alt=""
                style={{
                  objectFit: "fill",
                  objectPosition: "center",
                  aspectRatio: "1.78",
                  width: "100%",
                }}
                className="px-4 max-w-full lg:max-w-[1024px] mx-auto mb-6 sm:rounded-md"
              />
            </header>
            <div
              //px-4 max-w-5xl mt-4 mx-auto text-xl text-muted text-justify
              className="content text-lg text-justify mx-auto px-4 max-w-5xl prose prose-lg lg:prose-xl dark:prose-invert dark:prose-headings:text-slate-300 prose-md prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:font-bold prose-a:text-primary dark:prose-a:text-blue-400 prose-img:rounded-md prose-img:shadow-lg mt-8 prose-headings:scroll-mt-[80px]"
              //className="px-4 max-w-5xl mt-4 mx-auto text-xl text-muted text-justify"
              dangerouslySetInnerHTML={{ __html: props.content ?? "" }}
            ></div>
          </article>
        </section>

        <p className="px-4 max-w-5xl mx-auto text-xl text-muted text-justify">
          This content was generated by or with an AI and reviewed by the author
          of this site, along with all current and future tools. I am here to
          help in your implementation.
        </p>

        <CallToAction />
      </main>

      <Footer />
    </>
  );
}
