const chartElement = document.querySelector('#chart').getContext('2d');

new Chart(chartElement, {
  type: 'line',
  data: {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: 'Men',
        data: [10, 13, 12, 9, 2, 4, 2, 6, 6, 3, 2, 4],
        borderColor: 'red',
        borderWidth: 2,
      },
      {
        label: 'Women',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        borderColor: 'yellow',
        borderWidth: 2,
      },
      {
        label: 'Kid',
        data: [3, 4, 5, 6, 7, 8, 1, 2, 12, 11, 9, 10],
        borderColor: 'blue',
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
