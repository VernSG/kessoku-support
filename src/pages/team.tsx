import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faYoutube,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Footer from "@/components/ui/footer";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Meet Our Team</h1>

        {/* First Profile Card */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 p-6 rounded-lg shadow-lg bg-gray-800">
          <div className="flex items-center space-x-4 mb-4">
            <div className="rounded-full overflow-hidden">
              <Image src="/image.png" alt="YN Avatar" width={80} height={80} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">YN</h2>
              <p className="text-gray-400">Creating my own sunshine</p>
            </div>
          </div>
          <div>
            <p className="mb-4">stfu</p>
            <p className="text-gray-400 mb-2">
              <strong>Member Since:</strong> Mar 16, 2020
            </p>
            <a
              href="https://yusufs.me/"
              className="text-blue-400 hover:underline"
            >
              Personal Website
            </a>
            <h3 className="text-xl font-semibold mt-6 mb-2">Connections</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/VernSG"
                className="flex items-center space-x-2 text-blue-400 hover:underline"
              >
                <FontAwesomeIcon icon={faGithub} width={24} />
                <span>VernSG (GitHub)</span>
              </a>
              <a
                href="https://youtube.com/VernSG"
                className="flex items-center space-x-2 text-blue-400 hover:underline"
              >
                <FontAwesomeIcon icon={faYoutube} width={24} />
                <span>Vern SG (YouTube)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Second Profile Card */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mt-8 p-6 rounded-lg shadow-lg bg-gray-800">
          <div className="flex items-center space-x-4 mb-4">
            <div className="rounded-full overflow-hidden">
              <Image
                src="/xiao.png"
                alt="Xiao Vol Avatar"
                width={80}
                height={80}
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Xiao Vol</h2>
              <p className="text-gray-400">Active Trader & UI/UX Enthusiast</p>
            </div>
          </div>
          <div>
            <p className="mb-4">Active Traders Since 2020</p>
            <p className="text-gray-400 mb-2">
              <strong>Member Since:</strong> Apr 9, 2019
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-2">Connections</h3>
            <div className="flex space-x-4">
              <a
                href="https://open.spotify.com/user/31bw4pv2p5755ejm5isgjo7xw2du"
                className="flex items-center space-x-2 text-blue-400 hover:underline"
              >
                <FontAwesomeIcon icon={faSpotify} width={24} />
                <span>ke2 Akun (Spotify)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
