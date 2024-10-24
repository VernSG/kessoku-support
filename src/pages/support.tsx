import Footer from "@/components/ui/footer";

export default function Support() {
  return (
    <div className="max-w-3xl mx-auto my-10 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Support Ryo Discord Bot</h1>
      <p className="text-lg leading-relaxed mb-6">
        Thank you for considering supporting Ryo Discord Bot! Your contributions
        help us maintain and improve the bot with new features, better
        performance, and timely updates.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        If you enjoy using the bot and would like to help out, consider donating
        through Saweria. Every contribution, no matter the size, is greatly
        appreciated!
      </p>

      <div className="mt-6">
        <a
          href="https://trakteer.id/vern_sg/link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-400"
        >
          Donate via Trakteer
        </a>
      </div>

      <p className="mt-8 text-gray-600">
        You can also join our support server to get more information and
        interact with the community.
      </p>
      <div className="mt-4">
        <a
          href="https://discord.gg/zmeA3gS9k2"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500"
        >
          Join Support Server
        </a>
        <Footer />
      </div>
    </div>
  );
}
