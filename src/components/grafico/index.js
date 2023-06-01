import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { ChartContainer } from "./styles";

function TemperatureChart({ name, value }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const layout = {
    autosize: true, // Allow the chart to automatically adjust its size
    showlegend: false, // Hide the legend if necessary
    margin: {
      l: 0, // Set the left margin to 0
      r: 0, // Set the right margin to 0
      t: 20, // Set the top margin to 0
      b: 0, // Set the bottom margin to 0
    },
    width: windowWidth > 600 ? 600 : 260,
    height: windowWidth > 600 ? 300 : 150,
      title: {
        text: `<b>${name}</b>`,
        font: {
          size: windowWidth > 600 ? 16 : 12,
          color: "#222E6A",
          weight: "bold",
        },
        x: 0.05,
        y: 1,
      },
    }
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
     windowWidth > 600 ?
    
    <Plot 
      data={[
        {
          x: value.map((e) => e.time.split(" ")[4]),
          y: value.map((e)=> {return e.value}),
          type: "lines",
          marker: { color: "#4A88C1" },
        },
      ]}
      layout={layout}
      config={{ displayModeBar: false }}
    /> 
     :
     <Plot 
     data={[
       {
         x: value.map((e) => e.time.split(" ")[4]),
         y: value.map((e)=> {return e.value}),
         type: "lines",
         marker: { color: "#4A88C1" },
        },
     ]}
     layout={layout}
       config={{ displayModeBar: false }}
     />
    
  );
}

export default TemperatureChart;
