import Footer from "@/components/ui/footer";

export default function Introduction() {
  return (
    <div className="max-w-3xl mx-auto my-10 px-6">
      <h1 className="text-4xl font-bold mb-4">
        Introduction to the Discord Bot
      </h1>
      <p className="text-lg leading-relaxed">
        Welcome to our powerful Discord bot! This bot helps you manage your
        server with ease through a variety of commands, from user moderation to
        interactive entertainment features. It's designed to be intuitive, fast,
        and reliable. Whether you want to keep your server under control or
        simply have fun with your community, this bot has got you covered.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        With commands like <strong>/info</strong> and <strong>/avatar</strong>,
        you can quickly access relevant information about users or the server.
        The bot also has a dedicated <strong>/anime </strong>
        command for those who want to search for their favorite anime.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        Get started by inviting the bot and exploring its powerful features. Our
        bot is constantly evolving, so stay tuned for more updates and commands!
      </p>
      <Footer />
    </div>
  );
}
