"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Check } from "lucide-react";

export function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    // You can send `data` to your backend or API here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-[#ffffff]">
      <div className="rounded-lg border bg-card p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <img
              src="/placeholder.svg?height=64&width=64"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-sm font-medium px-3 py-1 rounded-full bg-muted inline-block">
              Personal information
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="first-name">
              First name<span className="text-red-500">*</span>
            </Label>
            <Input
              id="first-name"
              {...register("firstName", {
                required: true,
                minLength: 3,
              })}
              defaultValue="David"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">
                First name must be at least 2 characters long
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobile-number">
              Mobile number<span className="text-red-500">*</span>
            </Label>
            <div className="flex">
              <Input
                id="mobile-number"
                {...register("mobileNumber", { required: true, minLength: 10 })}
                defaultValue="+77 934 3482 733"
              />
              {/* <Button   className="ml-2 gap-1 whitespace-nowrap"> */}
              {/* <Check className="h-4 w-4" /> */}
              {/* Verify */}
              {/* </Button> */}
            </div>
            {errors.mobileNumber && (
              <p className="text-red-500 text-sm">Please enter valid number</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="last-name">
              Last name<span className="text-red-500">*</span>
            </Label>
            <Input
              id="last-name"
              {...register("lastName", { required: true })}
              defaultValue="John"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input id="country" {...register("country")} defaultValue="Nepal" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email address<span className="text-red-500">*</span>
            </Label>
            <div className="flex">
              <Input
                id="email"
                {...register("email", { required: true })}
                defaultValue="david.john@example.com"
              />
              <div className="ml-2 flex items-center gap-1 text-sm text-green-600">
                {/* <Check className="h-4 w-4" /> */}
                Verified
              </div>
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" {...register("city")} defaultValue="Kathmandu" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dob">
              Date of birth<span className="text-red-500">*</span>
            </Label>
            <Input
              id="dob"
              {...register("dob", { required: true })}
              defaultValue="1990-06-15"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="occupation">Occupation</Label>
            <Input
              id="occupation"
              {...register("occupation")}
              defaultValue="Software Engineer"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender">
              Gender<span className="text-red-500">*</span>
            </Label>
            <Input
              id="gender"
              {...register("gender", { required: true })}
              defaultValue="Male"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="education">Education Level</Label>
            <Input
              id="education"
              {...register("education")}
              defaultValue="Bachelor's Degree"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button type="submit" className="bg-red-300 hover:bg-orange-300">
          Save changes
        </Button>
      </div>
    </form>
  );
}
