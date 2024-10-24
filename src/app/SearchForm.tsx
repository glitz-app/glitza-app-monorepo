"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { MoreVertical } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/lib/data/countries";
import { Slider } from "@/components/ui/slider";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const searchSchema = z.object({
  query: z.string().optional(),
  location: z.string().optional(),
  remote: z.boolean().optional(),
  minSalary: z.number().optional(),
});

type SearchFormData = z.infer<typeof searchSchema>;

const SearchForm = ({}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const form = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: searchParams.get("query") ?? "",
      location: searchParams.get("location") ?? "anywhere",
      remote: searchParams.get("remote") === "true",
      minSalary: searchParams.get("minSalary")
        ? Number(searchParams.get("minSalary"))
        : 0,
    },
  });

  const [moreOpen, setMoreOpen] = useState(false);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateParam = (name: string, value: any) => {
      if (value != null && value !== "") {
        params.set(name, String(value));
      } else {
        params.delete(name);
      }
    };

    updateParam("query", form.watch("query"));
    updateParam("location", form.watch("location"));
    updateParam("remote", form.watch("remote"));
    updateParam("minSalary", form.watch("minSalary"));

    const queryString = params.toString();
    router.push(queryString ? `?${queryString}` : "/");
  }, [form.watch(), searchParams, router]);

  return (
    <Form {...form}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex items-center space-x-4 pb-4">
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Search Query</FormLabel>
                <FormControl>
                  <Input placeholder="Enter tags, position, etc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="flex-2">
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem className="" value="anywhere">
                        🗺️ Anywhere
                      </SelectItem>
                      <SelectSeparator />
                      {countries.map((country) => (
                        <SelectItem
                          className=""
                          key={country["alpha-2"]}
                          value={country["alpha-2"]}
                        >
                          {country.flag} {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="remote"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0 pt-8">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Remote</FormLabel>
                </div>
              </FormItem>
            )}
          />

          <Button
            variant="outline"
            className="!ml-20 mt-8 h-10 w-10 rounded-full p-2"
            onClick={(e) => {
              e.preventDefault();
              setMoreOpen(!moreOpen);
            }}
          >
            <MoreVertical className="text-neutral-500" />
          </Button>
        </div>
        <Accordion type="single" collapsible value={moreOpen ? "item-1" : ""}>
          <AccordionItem value="item-1">
            <AccordionContent className="flex flex-row space-x-4">
              <FormField
                control={form.control}
                name="minSalary"
                render={({ field }) => (
                  <FormItem className="max-w-56 flex-1">
                    <FormLabel>Min Salary: ${field.value}k</FormLabel>
                    <FormControl>
                      <Slider
                        onValueChange={(value) => field.onChange(value[0])}
                        defaultValue={[field.value ?? 0]}
                        max={250}
                        step={10}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
    </Form>
  );
};

export default SearchForm;
