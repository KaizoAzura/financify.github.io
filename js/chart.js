// Balance Chart
const financialCtx = document.getElementById("financialChart").getContext("2d");
const financialChart = new Chart(financialCtx, {
  type: "bar",
  data: {
    labels: ["Income", "Expenses", "Credit Limit"],
    datasets: [
      {
        label: "Amount ($)",
        data: [12304, 8145, 5345],
        backgroundColor: [
          "rgba(239, 133, 209, 1)",
          "rgba(109, 40, 95, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(109, 40, 95, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
        borderRadius: 15,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
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

// Payment Chart
const paymentCtx = document.getElementById("paymentChart").getContext("2d");
const paymentChart = new Chart(paymentCtx, {
  type: "bar",
  data: {
    labels: [
      "09 March",
      "10 March",
      "11 March",
      "12 March",
      "13 March",
      "14 March",
      "15 March",
    ],
    datasets: [
      {
        label: "Income",
        data: [25000, 18000, 20000, 29000, 22000, 27000, 24000],
        backgroundColor: "rgba(255, 206, 86, 0.6)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
        borderRadius: 5,
      },
      {
        label: "Expenses",
        data: [15000, 22000, 14000, 21000, 16000, 20000, 19000],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        borderRadius: 5,
      },
      {
        label: "Credit Limit",
        data: [12000, 13000, 16000, 28000, 18000, 25000, 22000],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 30000, // adjust as needed
      },
    },
  },
});
