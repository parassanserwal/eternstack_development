import Breadcrumbs from "@/components/Breadcrumbs";
import { humanize } from "@/lib/utils/textConverter";

const PageHeader = ({ title }: { title: string }) => {
  return (
    <section>
      <div className="container text-center flex  justify-center items-center">
        <div className="rounded-2xl bg-gradient-to-b flex  justify-center items-center  flex-col from-body to-theme-light px-8 py-14 dark:from-darkmode-body dark:to-darkmode-theme-light">
          <h1>{humanize(title)}</h1>
          <div className="note w-3/4 bg-slate-50 hover:bg-slate-100 rounded-xl text-left text-s mt-8">
            <h5>*Note*</h5>
            <h6>We're here to hear from you. Got questions, suggestions, or just want to say hello? Reach out to us! Our dedicated support team is ready to assist you. Feel free to drop us a line. We value your feedback and are committed to making your EternStack experience exceptional. Let's stay connected and make things happen together…….Let’s make things easier for us with Eternstack!!</h6></div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
