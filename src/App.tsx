import { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
import "./App.css";

const RadarChart = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.onresize = (data) => setWidth(window.innerWidth);
  }, []);

  return (
    <div className="App">
      <Radar
        data={{
          labels: [
            "Utility",
            "Uniqueness",
            "Comunity",
            "Team",
            "Viral Potential",
            "Visual Quality",
          ],
          datasets: [
            {
              label: "Score",
              data: [5, 9, 9, 6, 9, 8],
              backgroundColor: "rgba(123, 97, 255,0.25)",
              borderColor: "rgba(123, 97, 255, 1)",
              borderWidth: 1,
              pointBackgroundColor: "rgba(123, 97, 255, 1)",
              pointBorderColor: "#000",
              pointRadius: 5,
              pointHoverRadius: 5,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },

            tooltip: {
              displayColors: false,
              bodyAlign: "center",
              callbacks: {
                title: (tooltipItem) =>
                  tooltipItem[0].label.toLocaleUpperCase(),
                label: (tooltipItem) => tooltipItem.formattedValue,
              },
            },
          },
          scales: {
            r: {
              beginAtZero: false,
              suggestedMin: 3,
              suggestedMax: 10,
              angleLines: {
                color: "rgba(100, 100, 100, 0.35)",
              },
              grid: {
                color: "rgba(100, 100, 100, 0.35)",
              },
              ticks: {
                color: "#fff",
                showLabelBackdrop: false,
                stepSize: width <= 768 ? 2 : 1,
              },
              pointLabels: {
                color: "rgba(100, 100, 100, 1)",
                font: {
                  size: 16,
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default RadarChart;
