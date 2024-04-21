import Image from 'next/image';
import * as React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { Badge } from '@/components/ui/badge';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

type SliderProps = React.ComponentProps<typeof Slider>;


export default function Home({ className, ...props }: SliderProps) {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      {/* Accordian */}
      <div>
        <h3 className="font-bold">Accordian</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className=" rounded px-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className=" rounded px-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              ipsa, obcaecati tempora saepe sit rerum aspernatur quia ratione
              vero atque, maxime, molestias numquam? Pariatur, culpa?
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Alert Dialog */}
      <div className="mt-6">
        <h3 className="font-bold">Alert Dialog</h3>
        <div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="mt-3">
                Show Dialog
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      {/* Badges */}
      <div className="bg-black w-[900px] m-auto p-10 rounded mt-5">
        <h3 className="text-white">Using Badges</h3>
        <div className="flex justify mt-3">
          <Badge variant="default">Javascript</Badge>
          <Badge variant="destructive" className="ml-2">
            Typescript
          </Badge>
          <Badge variant="secondary" className="ml-2">
            Java
          </Badge>
          <Badge variant="secondary" className="ml-2">
            Python
          </Badge>
          <Badge variant="secondary" className="ml-2">
            FastAPI
          </Badge>
          <Badge variant="secondary" className="ml-2">
            AWS
          </Badge>
          <Badge variant="secondary" className="ml-2">
            Dev OPS
          </Badge>
        </div>
      </div>

      {/* Card */}
      <Card className="w-[350px] mt-5">
        <CardHeader>
          <CardTitle>Order Your Pizza</CardTitle>
          <CardDescription>Create your own Pizza</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name here" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input id="name" placeholder="Enter your Email Here" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Phone</Label>
                <Input id="name" placeholder="Enter your Phone Number" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Choose the Size of your pizza</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Medium</SelectItem>
                    <SelectItem value="sveltekit">Large</SelectItem>
                    <SelectItem value="astro">Extra Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Select Crust</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Hand Toast</SelectItem>
                    <SelectItem value="sveltekit">Pan</SelectItem>
                    <SelectItem value="astro">Italian</SelectItem>
                    <SelectItem value="nuxt">Crunchy Thin</SelectItem>
                    <SelectItem value="nuxt">Double Melt</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <p className="font-bold">Choose your Drink</p>
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2 mt-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Fanta</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Big Apple</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">Red Anaar</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Add To Cart</Button>
        </CardFooter>
      </Card>

      {/* Sheet */}
      <div className="mt-5">
        <h3 className="text-black font-bold">
          Using Shadcn Ui's Sheet Component
        </h3>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="mt-3">
              Click Here to open Sheet from Right
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      {/* Slider */}
      <div className="mt-10 max-w-7xl " >
        <h3 className='font-bold'>slider</h3>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className={cn('w-[300px]', className)}
          {...props}
        />
      </div>
    </main>
  );
}
