import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowBigLeftDash, Bike, Icon } from "lucide-react";

type Props = {};

const ResponseCard = (props: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
      <Card className="bg-[#0d3e1e] text-white">
        <CardHeader className="flex items-center space-x-2">
          <div>
            <ArrowBigLeftDash />
          </div>
          <CardTitle className="text-lg font-bold">KLM</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>SYD→JFK</p>
          <p>2024-07-09 - 2024-10-07</p>
          <p>N/A</p>
          <p className="text-xs">Min Business Miles</p>
          <p>53500 + $189</p>
          <p className="text-xs">Min Economy Miles</p>
          <p>N/A</p>
          <p className="text-xs">Min First Miles</p>
        </CardContent>
      </Card>
      <Card className="bg-[#0d3e1e] text-white">
        <CardHeader className="flex items-center space-x-2">
          <div>
            <ArrowBigLeftDash />
          </div>{" "}
          <CardTitle className="text-lg font-bold">Qantas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>SYD→JFK</p>
          <p>2024-07-09 - 2024-10-07</p>
          <p>144600 + $177</p>
          <p className="text-xs">Min Business Miles</p>
          <p>55200 + $158</p>
          <p className="text-xs">Min Economy Miles</p>
          <p>N/A</p>
          <p className="text-xs">Min First Miles</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResponseCard;