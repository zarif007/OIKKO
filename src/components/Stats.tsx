"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive bar chart";

const chartData = [
  { date: "2024-09-01", users: 222, posts: 150 },
  { date: "2024-09-02", users: 97, posts: 180 },
  { date: "2024-09-03", users: 167, posts: 120 },
  { date: "2024-09-04", users: 242, posts: 260 },
  { date: "2024-09-05", users: 373, posts: 290 },
  { date: "2024-09-06", users: 301, posts: 340 },
  { date: "2024-09-07", users: 245, posts: 180 },
  { date: "2024-09-08", users: 409, posts: 320 },
  { date: "2024-09-09", users: 59, posts: 110 },
  { date: "2024-09-10", users: 261, posts: 190 },
  { date: "2024-09-11", users: 327, posts: 350 },
  { date: "2024-09-12", users: 292, posts: 210 },
  { date: "2024-09-13", users: 342, posts: 380 },
  { date: "2024-09-14", users: 137, posts: 220 },
  { date: "2024-09-15", users: 120, posts: 170 },
  { date: "2024-09-16", users: 138, posts: 190 },
];

const chartConfig = {
  views: {
    label: "Page Views",
  },
  users: {
    label: "users",
    color: "white",
  },
  posts: {
    label: "posts",
    color: "white",
  },
} satisfies ChartConfig;

const Stats = () => {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("users");

  const total = React.useMemo(
    () => ({
      users: chartData.reduce((acc, curr) => acc + curr.users, 0),
      posts: chartData.reduce((acc, curr) => acc + curr.posts, 0),
    }),
    []
  );

  return (
    <Card className="my-4 w-[90%] md:w-[75%]">
      <CardHeader className="flex flex-col space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle className="">Activity</CardTitle>
        </div>
        <div className="flex w-5xl">
          {["users", "posts"].map((label) => {
            const chart = label as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-white data-[active=true]:text-black sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-lg text-muted-foreground">{label}</span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[label as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Stats;
