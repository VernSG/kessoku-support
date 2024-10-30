import Link from "next/link";

export function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
      <div className="col-span-4">
        <p
          className="text-white text-4xl font-bold"
          dangerouslySetInnerHTML={{ __html: "RyoYamada" }}
        />
        <p
          className="text-white text-md font-medium text-gray-500/75"
          dangerouslySetInnerHTML={{
            __html:
              "How about creating the best environment to relax yourself with your own emotions?",
          }}
        />
        <Link
          href="/invite"
          className="mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"
        >
          <i className="fab fa-discord mr-2" />
          Invite Ryo Yamada
        </Link>
      </div>

      <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="text-white">
            <p className="text-xl font-semibold mt-5">
              <i className={`fa fa-cogs text-2xl text-amber-500`} />{" "}
              Optimization
            </p>
            <p className="text-gray-500 line-clamp-4">
              With fast and customizable settings specific to your server, Ryo
              gives you easy moderation of your server.
            </p>
          </div>
        </div>
        <div>
          <div className="text-white">
            <p className="text-xl font-semibold mt-5">
              <i className={`fa fa-universal-access text-2xl text-amber-500`} />{" "}
              Universal
            </p>
            <p className="text-gray-500 line-clamp-4">
              A bot that supports Anime and Manga commands | (It is a bot that
              complies with all copyrights and licenses.)
            </p>
          </div>
        </div>
        <div>
          <div className="text-white">
            <p className="text-xl font-semibold mt-5">
              <i className={`fa fa-shield text-2xl text-amber-500`} /> Security
            </p>
            <p className="text-gray-500 line-clamp-4">
              An open source safe bot that you can browse and help us develop.
            </p>
          </div>
        </div>
        <div>
          <div className="text-white">
            <p className="text-xl font-semibold mt-5">
              <i className={`fa fa-ticket text-2xl text-amber-500`} /> Support
            </p>
            <p className="text-gray-500 line-clamp-4">
              With our best teammates, we provide the fastest response to anyone
              who needs help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}