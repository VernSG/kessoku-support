import "@/styles/globals.css";
import "@/styles/partials/_footer.scss";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { NavigationMenu } from "@/components/ui/navigation-menu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme="system"
      attribute="class"
    >
      <a
        href="#main"
        className="fixed p-2 top-0 left-0 -translate-y-full focus:translate-y-0"
      >
        Skip to main content
      </a>
      <div className="flex flex-col max-w-3xl mx-auto min-h-full px-4">
        <NavigationMenu />
        <main id="main">
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
