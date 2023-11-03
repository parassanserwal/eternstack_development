// import ImageFallback from "@/helpers/ImageFallback";
// import MDXContent from "@/helpers/MDXContent";
// import { getListPage } from "@/lib/contentParser";
// import { markdownify } from "@/lib/utils/textConverter";
// import SeoMeta from "@/partials/SeoMeta";
// import { RegularPage } from "@/types";

// const About = () => {
//   const data: RegularPage = getListPage("about/_index.md");
//   const { frontmatter, content } = data;
//   const { title, meta_title, description, image } = frontmatter;

//   return (
//     <>
//       <SeoMeta
//         title={title}
//         meta_title={meta_title}
//         description={description}
//         image={image}
//       />
//       <section className="section-sm">
//         <div className="container">
//           <div className="row justify-center">
//             <div className="text-center md:col-10 lg:col-7">
//               {image && (
//                 <ImageFallback
//                   className="mx-auto mb-6 rounded-lg"
//                   src={image}
//                   width={200}
//                   height={200}
//                   alt={title}
//                 />
//               )}
//               <h2
//                 dangerouslySetInnerHTML={markdownify(title)}
//                 className="h3 mb-6"
//               />
//               <div className="content">
//                 <MDXContent content={content} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;
import React from "react";

const AimPage = () => {
  return (
    <div>
      <header className="bg-blue-300 text-white text-center py-4">
        <h1 className="text-3xl">Welcome to EternStack</h1>
        <p>Your Gateway to Simplified Development</p>
      </header>

      <section className="max-w-4xl mx-auto bg-white p-6 shadow-lg my-6">
        <h2 className="text-2xl">Our Aim</h2>
        <p>
        EternStack is a dynamic startup dedicated to simplifying work and enhancing learning for developers and students. Our mission is clear: to provide innovative SaaS platforms that make tasks easier and more efficient. With a commitment to quality and affordability, we're here to empower individuals on their journey towards success.
        </p>

        <ul className="list-disc pl-6">
          <li>
            <strong>Simplicity:</strong> We simplify complex tasks, making them
            accessible to all.
          </li>
          <li>
            <strong>Education:</strong> We encourage learning and personal growth
            through our platforms.
          </li>
          <li>
            <strong>Innovation:</strong> We constantly innovate to bring you
            cutting-edge solutions.
          </li>
          <li>
            <strong>Community:</strong> We foster a collaborative community of tech
            enthusiasts.
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto bg-white p-6 shadow-lg my-6">
        <h2 className="text-2xl">Our SaaS Platforms</h2>
        <div className="flex justify-between">
          <div className="set1">
          <div className="saas-card flex-1 bg-gray-100 p-4 border rounded-lg shadow-md">
            
            <img src="https://i.ibb.co/RcbbZfd/mockanapi.png" alt="mockanapi"className="w-32 mx-auto mb-4" />
            <h3 className="text-lg">Mockanapi</h3>
            <p>Streamline API mocking with MockAnAPI</p>
            <a href="/products" className="text-blue-500 hover:underline">Learn More</a>
          </div>
          <div className="saas-card flex-1 mt-8 bg-gray-100 p-4 border rounded-lg shadow-md">
            
          <img src="https://i.ibb.co/gVj0P3G/csecrew.png" alt="csecrew" className="w-24 mx-auto mb-2"/>
            <h3 className="text-lg">Csecrew</h3>
            <p>Your college's central information hub</p>
            <a href="/products" className="text-blue-500 hover:underline">Learn More</a>
          </div>
          </div>
          <div className="set2">
          <div className="saas-card flex-1 bg-gray-100 p-4 border rounded-lg shadow-md">
          <img src="https://i.ibb.co/qsKgxBV/bearthisnews.png" alt="bearthisnews" className="w-20 mx-auto mb-2"/>
            <h3 className="text-lg">BearThisNews</h3>
            <p>Your Daily Dose of Essential Tech Insights</p>
            <a href="/products" className="text-blue-500 hover:underline">Learn More</a>
          </div>
          <div className="saas-card flex-1 mt-8 bg-gray-100 p-4 border rounded-lg shadow-md">
            <img src="https://i.ibb.co/RTXxX8M/updatebox.png" alt="updatebox" className="w-40 mx-auto mb-4"/>
            <h3 className="text-lg">Updatebox</h3>
            <p>Your Gateway to Seamless API Development</p>
            <a href="/products" className="text-blue-500 hover:underline">Learn More</a>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AimPage;
