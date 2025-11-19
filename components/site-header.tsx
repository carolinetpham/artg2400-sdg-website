"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Appointments", href: "/appointments" },
  { label: "Guides", href: "/guides" },
  { label: "24/7 Chat", href: "/chat" },
  { label: "Insurance", href: "/insurance" },
];

const mobileLinkBaseDelay = 0.15;

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-linear-to-r from-background/95 to-card/90 shadow-[0_10px_40px_-25px_rgba(18,34,23,0.6)] backdrop-blur supports-[backdrop-filter]:bg-card/90">
      <div className="mx-auto w-full max-w-6xl px-4 py-3 md:py-4 lg:px-6">
        <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-card/90 px-4 py-2.5 shadow-sm md:px-6">
          <motion.div
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="flex items-center gap-3"
          >
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2 text-lg font-semibold text-foreground"
            >
              <Image
                src="/logo/campus-care-logo.png"
                width={30}
                height={24}
                alt="CampusCare logo"
                className="h-6 w-auto"
              />
              <span className="text-lg text-foreground/90">CampusCare</span>
            </Link>
          </motion.div>

          <div className="hidden flex-1 items-center justify-end md:flex">
            <NavigationMenu viewport={false} className="justify-end">
              <NavigationMenuList className="relative gap-3 text-sm font-medium">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <NavigationMenuItem key={link.href}>
                      <motion.div
                        whileTap={{ scale: 0.985 }}
                        whileHover={{ scale: 1.01 }}
                        className="relative"
                      >
                        <NavigationMenuLink
                          href={link.href}
                          data-active={isActive}
                          className={cn(
                            "relative overflow-hidden rounded-full px-4 py-2 text-muted-foreground transition-colors hover:text-foreground",
                            "focus-visible:ring-ring/40 focus-visible:ring-2 focus-visible:outline-none"
                          )}
                        >
                          {isActive ? (
                            <motion.span
                              layoutId="nav-highlight"
                              className="absolute inset-0 rounded-full bg-muted/90 shadow-sm"
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 30,
                              }}
                            />
                          ) : null}
                          <span className="relative z-10">{link.label}</span>
                        </NavigationMenuLink>
                      </motion.div>
                    </NavigationMenuItem>
                  );
                })}

                <NavigationMenuItem>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.985 }}
                  >
                    <NavigationMenuLink
                      href="/sign-in"
                      className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/30 transition-colors hover:bg-primary/90"
                    >
                      Profile
                    </NavigationMenuLink>
                  </motion.div>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <motion.button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-full border border-input bg-card/90 p-2 text-foreground shadow-sm transition-colors hover:bg-accent/70 hover:text-accent-foreground md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            whileTap={{ scale: 0.94 }}
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isMenuOpen ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 26 }}
            className="border-t border-border/60 bg-gradient-to-b from-card to-background pb-4 pt-3 md:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <nav className="flex flex-col gap-4 text-sm font-medium">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: mobileLinkBaseDelay + 0.05 * index }}
                      whileHover={{ x: 2 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={cn(
                          "flex items-center justify-between rounded-2xl px-4 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                          isActive && "bg-muted text-foreground shadow-sm"
                        )}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="size-3.5 text-muted-foreground/70" />
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: mobileLinkBaseDelay + navLinks.length * 0.05,
                  }}
                  whileHover={{ x: 2 }}
                >
                  <Link
                    href="/sign-in"
                    onClick={closeMenu}
                    className="w-full rounded-full bg-primary px-5 py-2 text-center text-sm font-semibold text-primary-foreground shadow-md shadow-primary/30 transition-colors hover:bg-primary/90"
                  >
                    Profile
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
