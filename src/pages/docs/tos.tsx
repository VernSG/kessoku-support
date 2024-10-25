import Footer from "@/components/ui/footer";

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto my-10 px-6">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        By using this Discord bot, you agree to the following terms and
        conditions:
      </p>
      <h2 className="text-2xl font-semibold mb-4">Usage Policy</h2>
      <p className="mb-4">
        This bot is provided as-is and may be updated or removed at any time.
        The bot is intended for use on Discord servers in accordance with
        Discord&apos;s Terms of Service. Abusive behavior, misuse of commands,
        or any violation of Discord&apos;s guidelines may result in the bot
        being banned from your server.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Data Policy</h2>
      <p className="mb-4">
        This bot does not store or retain any personal information. All data is
        processed in real-time and no information is saved outside of the
        server&apos;s current session.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Liability</h2>
      <p className="mb-4">
        The creators of this bot are not liable for any issues that arise from
        the use of the bot. It is your responsibility to ensure that the bot is
        used in a safe and appropriate manner within your server.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to update or modify these terms at any time without
        prior notice. Continued use of the bot will be considered acceptance of
        the updated terms.
      </p>
      <Footer />
    </div>
  );
}
