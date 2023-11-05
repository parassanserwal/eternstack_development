import React from "react";
import "./product.css";
import Link from "next/link";
const page = () => {
  return (
<>
<div className="container  h-screen w-screen">
<div className="maincontainer w-sceen h-screen flex-col md:h-3/4 md:flex-row  flex items-center justify-center">
<div className="part1 w-4/5 md:2/4 flex justify-center mb-0 mt-[100px] md:mb-16 md:mt-0">
<img src="https://i.ibb.co/RcbbZfd/mockanapi.png" alt="mockanapi" className="w-3/5 gray"/>
</div>
<div className="part2 w-4/5 md:2/4">
<p className="font-semibold text-2xl">Why Choose MockAnAPI?</p>
<br></br>
<p className="font-light text-xl">MockAnAPI, a proud creation of Eternstack, serves as your one-stop destination for hassle-free API mocking and robust development. In the ever-evolving landscape of software development, MockAnAPI stands as a beacon of simplicity and efficiency, empowering developers to streamline their API creation process and enhance collaboration.</p>
<br></br>

<p className="font-light text-xl">- Build APIs with Ease:</p>
<br></br>
<p className="font-light text-xl">- Simulate Bugs and Errors in Seconds:</p>
<br></br>
<p className="font-light text-xl">- Quick Switch for Data Generation:</p>
<br></br>
<p className="font-light text-xl">- Not Just News - It's a Conversation:</p>
<br></br>
<Link
className="btn n btn-outline-primary btn-sm  lg:inline-block "
href="/blog/post-2">
Read more
</Link>
<Link
className="btn n btn-primary btn-sm ml-[16px] lg:inline-block "
href="https://mockanapi.com">
Check Out
</Link>
</div>
</div>
</div>
<div className="container mt-[300px] md:mt-0 h-screen w-screen">
<div className="maincontainer w-sceen h-screen flex-col md:h-3/4 md:flex-row  flex items-center justify-center">
<div className="part1 block md:hidden  w-4/5 md:2/4 flex justify-center mb-0 mt-[100px] md:mb-16 md:mt-0">
<img src="https://i.ibb.co/qsKgxBV/bearthisnews.png" alt="bearthisnews" className="w-2/4 gray"></img>
</div>
<div className="part2 w-4/5 md:w-4/5 md:ml-[30px]">
<p className="font-semibold text-2xl">What is BearThisNews?</p>
<br></br>
<p className="font-light text-xl">BearThisNews is a tech news platform that thrives on simplicity. We recognize that less is often more, and we've automated the process of delivering handpicked tech news straight to your virtual doorstep each morning. In a world overwhelmed by data, we aim to provide a clear, refreshing perspective on the tech realm.</p>
<br></br>
<p className="font-normal text-2xl">What is BearThisNews?</p>
<br></br>
<p className="font-light text-xl">- Wake Up to Essential Tech Tales:</p>
<br></br>
<p className="font-light text-xl">- More Insight, Less Scrolling:</p>
<br></br>
<p className="font-light text-xl">- Meet Us Where You Hang Out:</p>
<br></br>
<p className="font-light text-xl">- Collaboration Made Simple:</p>
<br></br>
<Link
className="btn n btn-outline-primary btn-sm  lg:inline-block "
href="blog/post-3">
Read more
</Link>
<Link
className="btn n btn-primary btn-sm ml-[16px] lg:inline-block "
href="https://bearthisnews.com">
Check Out
</Link>
</div>
<div className="part1 hidden md:flex w-4/5 md:2/4 flex justify-center mb-0 mt-[100px] md:mb-16 md:mt-0">
<img src="https://i.ibb.co/qsKgxBV/bearthisnews.png" alt="bearthisnews" className="w-2/4 gray"></img>
</div>




</div>
</div>
<div className="container mt-[300px] mb-[100px] md:mb-0 md:mt-0 h-screen w-screen">
<div className="maincontainer w-sceen h-screen flex-col md:h-3/4 md:flex-row  flex items-center justify-center">
<div className="part1 w-4/5 md:2/4 flex justify-center mb-0 mt-[100px] md:mb-16 md:mt-0">
<img src="https://i.ibb.co/0F7nmbc/csecrewlogo-z-L7nzrpf-C.png" alt="csecrewlogo-z-L7nzrpf-C" className="w-3/4 gray"/>
</div>
<div className="part2 w-4/5 md:2/4">
<p className="font-semibold text-2xl">#3 CSE Crew:Your Ultimate Study Companion</p>
<br></br>
<p className="font-light text-xl">Are you tired of the daily hassle of scrolling through countless chats, searching for important university-related documents, announcements, or datesheets buried in your messaging apps? We understand your frustration, and that's why CSE Crew is here to simplify your academic life.</p>
<br></br>
<p className="font-normal text-xl">What you get with csecrew:</p>
<br></br>
<p className="font-light text-xl">-Streamlined Access:</p>
<br></br>
<p className="font-light text-xl">-Clutter-Free Viewing:</p>
<br></br>
<p className="font-light text-xl">-Timely Reminders Of Classes:</p>
<br></br>
<p className="font-light text-xl">-Offline Access Of Downloaded Data:</p>
<br></br>
<Link
className="btn n btn-outline-primary btn-sm  lg:inline-block "
href="/blog/post-4">
Read more
</Link>
<Link
className="btn n btn-primary btn-sm ml-[16px] lg:inline-block "
href="https://www.csecrew.com">
Check Out
</Link>
</div>

</div>
</div>
</>
  );
};
export default page;


