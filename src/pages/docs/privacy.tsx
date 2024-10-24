import Footer from "@/components/ui/footer";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto my-10 px-6">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is important to us. This privacy policy explains how we
        collect, use, and protect your personal information while using our
        Discord bot.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
      <p className="mb-4">
        Our bot does not collect or store any personal information. We may
        process certain user data during the bot's interaction with Discord
        servers, but no data is stored persistently outside of Discord.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        2. How We Use Your Information
      </h2>
      <p className="mb-4">
        We use the information provided by Discord’s APIs to facilitate the
        bot’s functionality. This includes managing server roles, providing
        information about users (e.g., user avatars), and managing commands
        related to the server’s administration.
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
      <p className="mb-4">
        The bot does not store any personal data. All interactions happen in
        real-time and do not involve long-term storage. We follow Discord’s
        privacy and security policies to ensure user data remains safe.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
      <p className="mb-4">
        Our bot may integrate with third-party APIs (such as for fetching
        information about anime or weather) but does not store any personal
        information from these services. All data passed through is for
        immediate use only.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Changes to This Policy</h2>
      <p className="mb-4">
        We reserve the right to update this Privacy Policy at any time. Any
        changes will be posted here. Your continued use of the bot after any
        changes indicates your acceptance of the new policy.
      </p>

      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us
        at [your contact email].
      </p>
      <Footer />
    </div>
  );
}
