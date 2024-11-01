"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "../../../lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";

const commands = [
  {
    title: "/userinfo",
    href: "/docs/commands",
    description: "Displays information about user.",
  },
  {
    title: "/quiz-anime",
    href: "/docs/commands",
    description: "Get question about anime.",
  },
  {
    title: "/leaderboard",
    href: "/docs/commands",
    description: "Display top 10 point quiz anime.",
  },
  {
    title: "/info gempa",
    href: "/docs/commands/gempa",
    description: "Get information about Indonesian Earthquake.",
  },
  {
    title: "/suggestion",
    href: "/docs/commands/suggestion",
    description: "Allows users to submit suggestions to the server.",
  },
  {
    title: "/avatar",
    href: "/docs/commands",
    description: "Shows the avatar of the user.",
  },
  {
    title: "/anime",
    href: "/docs/commands",
    description: "Searches anime information from various databases.",
  },
  {
    title: "/manga",
    href: "/docs/commands",
    description: "Searches manga information from various databases.",
  },
];

const documentationLinks = [
  {
    title: "Commands",
    href: "/docs/commands",
    description: "Learn more about available commands.",
  },
  {
    title: "Vote",
    href: "https://top.gg/bot/1256409606373113988",
    description: "Top.gg vote.",
  },
  {
    title: "Terms of Service (ToS)",
    href: "/docs/tos",
    description: "Read the Terms of Service for using the bot.",
  },
  {
    title: "Privacy Policy",
    href: "/docs/privacy",
    description: "Read the Privacy Policy.",
  },
  {
    title: "Teams",
    href: "/team",
    description: "Ryo support team.",
  },
  {
    title: "Blog",
    href: "/posts",
    description: "Ryo Blog.",
  },
];

export function NavigationMenuDemo() {
  return (
    <div className="flex justify-center my-10">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">
          {/* Getting Started Section */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <Image
                        src="/1.jpg"
                        alt="Bot Logo"
                        width={24}
                        height={24}
                      />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Discord Bot
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Manage your server with powerful commands and features.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/introduction" title="Introduction">
                  Overview of the bot&apos;s features and how to get started.
                </ListItem>
                <ListItem href="/invite" title="Invite the Bot">
                  Invite the bot to your server and start using commands.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Commands Section */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Commands</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {commands.map((command) => (
                  <ListItem
                    key={command.title}
                    title={command.title}
                    href={command.href}
                  >
                    {command.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Documentation Section */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {documentationLinks.map((doc) => (
                  <ListItem key={doc.title} title={doc.title} href={doc.href}>
                    {doc.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href = "/", ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
