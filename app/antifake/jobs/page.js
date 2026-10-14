import AntifakeJobsClient from "./AntifakeJobsClient";

export const metadata = {
  title: "Jobs",
  description: "Jobs at AntiFake: open roles including Project Sales Manager and Graphic Designer.",
  alternates: { canonical: "/antifake/jobs" },
};

export default function AntifakeJobsPage() {
  return <AntifakeJobsClient />;
}
