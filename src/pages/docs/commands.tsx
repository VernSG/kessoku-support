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
      </ul>
      <p className="text-lg mt-6">
        To see detailed usage instructions, type the command followed by help,
        for example <strong>/info help</strong>.
      </p>
    </div>
  );
}
