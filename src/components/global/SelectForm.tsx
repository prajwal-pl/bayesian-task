"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import ResponseCard from "./ResponseCard";
import { cabinList, destinationList, originList } from "@/lib/utils";
import { useState } from "react";
import axios from "axios";

export default function Component() {
  const [origin, setOrigin] = useState<string>("JFK");
  const [destination, setDestination] = useState<string>("JFK");
  const [cabin, setCabin] = useState<string>("economy");
  const [search, setSearch] = useState([]);
  const [searchFound, setSearchFound] = useState<boolean>(false);

  const handleClick = async () => {
    console.log(origin, destination, cabin);
    const response = await axios.post("https://cardgpt.in/apitest", {
      origin: origin,
      destination: destination,
      cabinSelection: [cabin],
      departureTimeFrom: "2024-07-09T00:00:00Z",
      departureTimeTo: "2024-10-07T00:00:00Z",
      isOldData: false,
      partnerPrograms: [
        "Air Canada",
        "United Airlines",
        "KLM",
        "Qantas",
        "American Airlines",
        "Etihad Airways",
        "Alaska Airlines",
        "Qatar Airways",
        "LifeMiles",
      ],
      limit: 302,
      offset: 0,
      date: Date.now(),
    });
    console.log(response.data.data);
    setSearch(response.data.data);
    if (response.data.data.length > 0) {
      setSearchFound(true);
    }
  };
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#0d1b0e] text-white p-6">
      <div className="space-y-4">
        <h2 className="text-lg font-bold">
          Choose Origin & Destination Airports:
        </h2>
        <div className="space-y-2">
          <Label htmlFor="origin">Origin</Label>
          <Select onValueChange={(value) => setOrigin(value)}>
            <SelectTrigger
              id="origin"
              aria-label="Origin"
              className="bg-[#181818]"
            >
              <SelectValue placeholder="SYD" />
            </SelectTrigger>
            <SelectContent className="bg-[#181818]">
              {originList.map((origin) => (
                <SelectItem
                  key={origin}
                  className="text-white hover:bg-white hover:text-inherit"
                  value={origin}
                >
                  {origin}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="destination">Destination</Label>
          <Select onValueChange={(value) => setDestination(value)}>
            <SelectTrigger
              id="destination"
              aria-label="Destination"
              className="bg-[#181818]"
            >
              <SelectValue placeholder="JFK" />
            </SelectTrigger>
            <SelectContent className="bg-[#181818]">
              {destinationList.map((destination) => (
                <SelectItem
                  key={destination}
                  className="text-white hover:bg-white hover:text-inherit"
                  value={destination}
                >
                  {destination}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="cabin">Cabin Selection</Label>
          <Select onValueChange={(value) => setCabin(value)}>
            <SelectTrigger
              id="cabin"
              aria-label="Cabin Selection"
              className="bg-[#181818]"
            >
              <SelectValue placeholder="economy" />
            </SelectTrigger>
            <SelectContent className="bg-[#181818]">
              {cabinList.map((cabin) => (
                <SelectItem
                  key={cabin}
                  className="text-white hover:bg-white hover:text-inherit"
                  value={cabin}
                >
                  {cabin}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="pro-filters" />
          <Label
            htmlFor="pro-filters"
            className="text-sm font-medium leading-none"
          >
            Show <span className="text-orange-500">Pro Filters</span>
          </Label>
        </div>
        <Button onClick={handleClick} className="bg-[#00bfa5] text-white">
          Search
        </Button>
      </div>
      <div className="md:flex items-center gap-4 xs:flex-col">
        {/* {searchFound === false && (
          <p className="text-center text-lg font-bold">
            Try another search route!
          </p>
        )} */}

        {search.map((data) => (
          <ResponseCard key={data} data={data} searchFound={searchFound} />
        ))}
      </div>
    </div>
  );
}
