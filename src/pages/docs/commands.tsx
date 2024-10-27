import Link from "next/link";
import Footer from "@/components/ui/footer";

export default function Commands() {
  return (
    <div className="max-w-3xl mx-auto my-10 px-6">
      <h1 className="text-4xl font-bold mb-4">Available Commands</h1>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>/userinfo</strong> - Displays information about the server or
          a user.
        </li>
        <li>
          <strong>/suggestion</strong> - Allows users to submit suggestions to
          the server.
          <Link href="/docs/commands/suggestion" legacyBehavior>
            <a
              style={{
                color: "#4F46E5",
                fontWeight: "bold",
                marginLeft: "8px",
                textDecoration: "underline",
              }}
            >
              See how to set suggestion channel.
            </a>
          </Link>
        </li>
        <li>
          <strong>/avatar</strong> - Shows the avatar of the user.
        </li>
        <li>
          <strong>/anime</strong> - Searches anime information from various
          databases.
        </li>
        <li>
          <strong>/manga</strong> - Searches manga information from various
          databases.
        </li>
        <li>
          <strong>/info gempa</strong> - Provides earthquake information.
          <Link href="/docs/commands/gempa" legacyBehavior>
            <a
              style={{
                color: "#4F46E5",
                fontWeight: "bold",
                marginLeft: "8px",
                textDecoration: "underline",
              }}
            >
              See how to set earthquake info channel.
            </a>
          </Link>
        </li>
      </ul>
      <p className="text-lg mt-6">
        To see detailed usage instructions, type the command followed by help,
        for example <strong>/info help</strong>.
      </p>
      <Footer />
    </div>
  );
}
