import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { Button, Feature } from "@/types";
import { FaCheck } from "react-icons/fa/index.js";
import Link from "next/link";
import "./home.css";

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const callToAction = getListPage("sections/call-to-action.md");
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button; subtitle?: string; };
    features: Feature[];
  } = frontmatter;

  return (
    <>
      <SeoMeta />
      <section className="section pt-14">
        <div className="container flex flex-col sm:flex-row w-screen justify-between">
          <div className="para1 w-full sm:w-2/4">
            <h1
              className="mb-4"
              dangerouslySetInnerHTML={markdownify(banner.title)}
            />
            <h3
              className="mb-4 text-indigo-300 underline hover:underline-offset-4"
              dangerouslySetInnerHTML={markdownify(banner.subtitle ?? "")}
            />
            <p
              className="mt-10"
              dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
            />
            <Link
                  className="btn n btn-outline-primary btn-sm mt-[20px] md:mt-[60px] lg:inline-block "
                  href="/products">
                  Our Products
                  </Link>
          </div>
          <div className="para2 mt-[10px]">
            <div>
              <ImageFallback
                src={banner.image}
                className="mx-auto"
                width="400"
                height="500"
                alt="banner image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {features.map((feature, index: number) => (
        <section
          key={index}
          className={`section-sm ${index % 2 === 0 && "bg-gradient"}`}
        >
          <div className="container">
            <div className="row items-center justify-between">
              <div
                className={`mb:md-0 mb-6 md:col-5 ${
                  index % 2 !== 0 && "md:order-2"
                }`}
              >
                <ImageFallback
                  src={feature.image}
                  height={480}
                  width={520}
                  alt={feature.title}
                />
              </div>
              <div
                className={`md:col-7 lg:col-6 ${
                  index % 2 !== 0 && "md:order-1"
                }`}
              >
                <h2
                  className="mb-4"
                  dangerouslySetInnerHTML={markdownify(feature.title)}
                />
                <p
                  className="mb-8 text-lg"
                  dangerouslySetInnerHTML={markdownify(feature.content)}
                />
                <ul>
                  {feature.bulletpoints.map((bullet: string) => (
                    <li className="relative mb-4 pl-6" key={bullet}>
                      <FaCheck className={"absolute left-0 top-1.5"} />
                      <span dangerouslySetInnerHTML={markdownify(bullet)} />
                    </li>
                  ))}
                </ul>
                {feature.button.enable && (
                  <Link
                  className="btn n btn-outline-primary btn-sm mt-[60px] lg:inline-block "
                  href="/products">
                  Read more
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* <Testimonials data={testimonial} /> */}
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
