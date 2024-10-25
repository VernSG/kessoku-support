import Footer from "@/components/ui/footer";
import React from "react";

export default function Gempa() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        Cara Menggunakan Command Gempa
      </h1>
      <p className="leading-7 mb-6 text-lg">
        Command <strong>/info gempa set channel</strong> memungkinkan Anda untuk
        mengatur channel tertentu sebagai tempat bot mengirimkan informasi gempa
        secara otomatis. Berikut ini adalah langkah-langkah penggunaan command
        ini.
      </p>
      <ol className="list-decimal list-inside mb-6">
        <li className="mb-2">
          Buka Discord dan ketikkan command <code>/info gempa set channel</code>
          .
        </li>
        <li className="mb-2">
          Pilih channel di mana Anda ingin bot mengirimkan informasi gempa
          secara otomatis.
        </li>
        <li className="mb-2">
          Bot akan mengonfirmasi bahwa channel telah diatur sebagai tempat
          pengiriman informasi gempa.
        </li>
      </ol>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Video Tutorial</h2>
        <video controls className="w-full h-auto rounded-lg">
          <source src="/gempa.mp4" type="video/mp4" />
          Browser Anda tidak mendukung tag video.
        </video>
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg border border-gray-300">
        <p className="text-gray-700">
          <strong>Catatan:</strong> Anda hanya dapat mengatur satu channel
          sebagai penerima notifikasi gempa. Untuk mengganti channel, ulangi
          langkah di atas dengan channel yang baru.
        </p>
      </div>
      <Footer />
    </div>
  );
}
