// Balance Chart

const ctx = document.getElementById("financialChart").getContext("2d");
const financialChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Income", "Expenses", "Credit Limit"],
    datasets: [
      {
        label: "Amount ($)",
        data: [12304, 8145, 5345],
        backgroundColor: [
          "rgba(255, 206, 86, 0.6)", // Yellow
          "rgba(75, 192, 192, 0.6)", // Green
          "rgba(153, 102, 255, 0.6)", // Light Green
        ],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
        borderRadius: 15,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        display: false,
      },
    },
  },
});
