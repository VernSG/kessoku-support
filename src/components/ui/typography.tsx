import Link from "next/link";

export function TypographyDemo() {
  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-6">
        Meet Your New Discord Bot!
      </h1>

      <p className="leading-7 text-lg sm:text-xl text-center">
        Welcome to the future of server management. This Discord bot is designed
        to make managing your community easier, faster, and more enjoyable with
        powerful features like moderation tools, fun interactions, and real-time
        updates!
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        What Can This Bot Do?
      </h2>

      <p className="leading-7 mt-6">
        Our bot offers a wide range of commands and functionalities to help you
        run your server smoothly:
      </p>

      <ul className="my-6 ml-6 list-disc space-y-2">
        <li>
          Get real-time earthquake information with <strong>/info gempa</strong>
        </li>
        <li>Kick or ban users with ease</li>
        <li>Customizable commands tailored to your community</li>
        <li>Automated moderation to prevent spamming</li>
      </ul>

      <blockquote className="mt-6 border-l-4 pl-6 italic">
        &quot;A Discord bot that does it all &mdash; from keeping you informed
        to keeping your server in order!&quot;
      </blockquote>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Why Choose This Bot?
      </h3>

      <p className="leading-7 mt-6">
        Our bot is not just another Discord bot. It&apos;s designed with users
        in mind:
      </p>

      <ul className="my-6 ml-6 list-disc space-y-2">
        <li>Highly responsive with fast command processing</li>
        <li>Reliable uptime with minimal downtime</li>
        <li>Easy-to-use interface with detailed documentation</li>
        <li>Seamless integration with other Discord bots and services</li>
      </ul>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Features and Commands
      </h3>

      <p className="leading-7 mt-6">
        The bot comes equipped with a variety of commands to keep your server
        engaged and under control. Here are some of the main features:
      </p>

      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="m-0 border-t p-0 even:bg-gray-800">
              <th className="border px-4 py-2 text-left font-bold">Feature</th>
              <th className="border px-4 py-2 text-left font-bold">Command</th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t p-0 bg-gray-900 hover:bg-gray-800">
              <td className="border px-4 py-2 text-left">
                Earthquake Information
              </td>
              <td className="border px-4 py-2 text-left">/info gempa</td>
            </tr>
            <tr className="m-0 border-t p-0 bg-gray-800 hover:bg-gray-700">
              <td className="border px-4 py-2 text-left">Moderation Tools</td>
              <td className="border px-4 py-2 text-left">/ban [user]</td>
            </tr>
            <tr className="m-0 border-t p-0 bg-gray-900 hover:bg-gray-800">
              <td className="border px-4 py-2 text-left">
                Anime Manga Command
              </td>
              <td className="border px-4 py-2 text-left">/anime /manga</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="leading-7 mt-6">Check commands in navigation menu docs</p>

      <p className="leading-7 mt-6">
        Whether you&apos;re looking to moderate your server, get real-time
        updates on important events, or just have fun, this bot has everything
        you need.
      </p>

      <p className="leading-7 mt-6 font-bold">
        Ready to enhance your Discord experience? Invite the bot to your server
        and take control today!
      </p>

      <div className="mt-6 text-center">
        <Link href="/invite">
          <a className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500">
            Invite the Bot Now!
          </a>
        </Link>
      </div>
    </div>
  );
}
