import React from "react";
import { Doughnut } from 'react-chartjs-2';

function DoughnutChart({ chartData }) {

    return (
      <div className="chart-container">
        <h2 style={{ textAlign: "center", color: 'black' }}>Expense Chart</h2>
        {/* <span>{chartData.dataset[0].data}</span> */}
        <Doughnut
          data={ chartData }
          options={{
            plugins: {
              colors: {
                enabled: true
              }
            }
          }}
        />
      </div>
    );
  }

  export default DoughnutChart;