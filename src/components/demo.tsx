'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Heart, Star, Menu, Github, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Demo() {
  const [liked, setLiked] = useState(false);
  const [starred, setStarred] = useState(false);

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">UI Toolkit Demo</h1>
      
      {/* Navigation Menu Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Navigation Menu (shadcn/ui)</CardTitle>
          <CardDescription>Responsive navigation with Radix UI primitives</CardDescription>
        </CardHeader>
        <CardContent>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                )}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                )}>
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                )}>
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </CardContent>
      </Card>

      {/* Buttons with Lucide Icons Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Buttons (lucide-react + clsx + tailwind-merge)</CardTitle>
          <CardDescription>Buttons with icons and state management</CardDescription>
        </CardHeader>
        <CardContent className="space-x-4">
          <Button
            variant={liked ? "default" : "outline"}
            onClick={() => setLiked(!liked)}
            className={cn(
              "transition-all duration-200",
              liked && "bg-red-500 hover:bg-red-600 text-white"
            )}
          >
            <Heart className={cn("w-4 h-4 mr-2", liked && "fill-current")} />
            {liked ? "Liked" : "Like"}
          </Button>
          
          <Button
            variant={starred ? "default" : "outline"}
            onClick={() => setStarred(!starred)}
            className={cn(
              "transition-all duration-200",
              starred && "bg-yellow-500 hover:bg-yellow-600 text-white"
            )}
          >
            <Star className={cn("w-4 h-4 mr-2", starred && "fill-current")} />
            {starred ? "Starred" : "Star"}
          </Button>
        </CardContent>
      </Card>

      {/* Sheet Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Sheet Component (shadcn/ui)</CardTitle>
          <CardDescription>Slide-out panel with social links</CardDescription>
        </CardHeader>
        <CardContent>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Menu className="w-4 h-4 mr-2" />
                Open Menu
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Social Links</SheetTitle>
                <SheetDescription>
                  Connect with us on social media
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>

      {/* Utility Demo */}
      <Card>
        <CardHeader>
          <CardTitle>cn() Utility Function</CardTitle>
          <CardDescription>Combining clsx and tailwind-merge for optimal class handling</CardDescription>
        </CardHeader>
        <CardContent>
          <div className={cn(
            "p-4 rounded-lg border",
            "bg-blue-50 border-blue-200",
            "hover:bg-blue-100 transition-colors",
            "text-blue-900"
          )}>
            This div uses the cn() utility to merge Tailwind classes efficiently!
          </div>
        </CardContent>
      </Card>
    </div>
  );
}