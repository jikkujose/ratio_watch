import { Chart } from "react-google-charts"

export function Graph({ ratios }) {
  return (
    <Chart
      width={"600px"}
      height={"400px"}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={ratios}
      options={{
        colors: ["#357EDD"],
        curveType: "function",
        legend: "none",
        animation: { startup: true, duration: 1000, easing: "out" },
        titleTextStyle: {
          color: "#232323",
          fontName: "Consolas",
          bold: true,
          fontSize: 16,
        },
        hAxis: {
          format: "MMM, YY",
          textStyle: {
            color: "#232323",
            fontName: "Consolas",
            fontSize: 12,
          },
        },
        vAxis: {
          textStyle: {
            color: "#232323",
            fontName: "Consolas",
            fontSize: 12,
          },
        },
      }}
    />
  )
}
