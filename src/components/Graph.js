import { Chart } from "react-google-charts"
import withHistoryFetch from "./withHistoryFetch"

function Graph({ ratios }) {
  return (
    <Chart
      width={"100%"}
      height={"250px"}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={ratios}
      options={{
        colors: ["#357EDD"],
        curveType: "function",
        legend: "none",
        lineWidth: 0.5,
        chartArea: { width: "80%", height: "80%" },
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
          textPosition: "in",
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

export default withHistoryFetch(Graph)
