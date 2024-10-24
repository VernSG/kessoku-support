"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "../../lib/utils"; // Pastikan path ini benar
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../src/components/ui/navigation-menu"; // Pastikan path ini benar

const commands: { title: string; href: string; description: string }[] = [
  {
    title: "/userinfo",
    href: "/docs/commands",
    description: "Displays information about user.",
  },
  {
    title: "/info gempa",
    href: "/docs/commands",
    description: "Get information about Indonesian Earthquake.",
  },
  {
    title: "/suggestion",
    href: "/docs/commands",
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

export function NavigationMenuDemo() {
  return (
    <div className="flex justify-center my-10">
      {" "}
      {/* Flex container for centering */}
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">
          {/* Getting Started Section */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Image
                        src="/1302070.png"
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
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs/introduction" title="Introduction">
                  Overview of the bot's features and how to get started.
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

          {/* Documentation Link */}
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
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
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
