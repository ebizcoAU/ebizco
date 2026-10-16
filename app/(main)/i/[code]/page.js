import Invite from "./Invite";

// An invite link from the B10 pre-trial gate (https://ebizco.com.au/i/48217730). Private per person:
// never indexed, no canonical.
export const metadata = {
  title: "Your invitation",
  description: "Open AURA or BANOI with your invite code.",
  robots: { index: false, follow: false },
};

export default async function InvitePage({ params }) {
  const { code } = await params;
  const digits = /^\d{8}$/.test(String(code || "")) ? String(code) : null;
  return (
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <Invite code={digits} />
          </div>
        </div>
      </div>
    </section>
  );
}
