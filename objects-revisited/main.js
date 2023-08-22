// declaring a object called business
const business = {
  opens: '9am',
  closes: '9pm',
  totalEmployees: 3,
  daysOpen: ['M', 'Tu', 'W', 'Th', 'F'],
  Marke: {
    position: 'Manger',
    daysOfWeekWorking: ['M', 'Tu', 'F'],
  },
  Aiden: {
    position: 'Front End Developer',
    daysOfWeekWorking: ['W', 'Th', 'F'],
  },
  bob: {
    position: 'Intern',
    daysOfWeekWorking: ['Tu', 'W', 'Th', 'F'],
  },
};

function addEmployees(obj) {
  // crating a new instance of the 'XMLHttpRequest' object
  // to make HTTP requests to a server
  const request = new XMLHttpRequest();

  // Makes an API request to https://jsonplaceholder.typicode.com/users.
  request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      // parse -> convert it into a JavaScript object we are
      // passing in converted request object as a string
      const users = JSON.parse(request.responseText);

      // Create an array of positions
      const jobTitles = [
        'Web Developer',
        'Software engineer',
        'Cyber Security specialist',
        'UI/UX Designer',
      ];

      // Create an array of weekday options
      const weekdays = ['M', 'Tu', 'W', 'Th', 'F'];

      // extracting the first 4 elements in the users array
      // and assigning the
      for (let i = 0; i < 4; i++) {
        // extracting each element in the users array
        const user = users[i];

        // Generate a random number between 1 and 5 for weekday workdays
        const weekdayWorkdays = Math.floor(Math.random() * 5) + 1;

        // creating a empty array for each employee
        const myWorkWeek = [];

        // looping though the weekdayWorkdays and adding
        // weekdays at i into myWorkWeek array
        for (let day = 0; day < weekdayWorkdays; day++) {
          const index = Math.floor(Math.random() * 5);
          myWorkWeek.push(weekdays[index]);
        }
        myWorkWeek.push('Sat', 'Sun');

        // Adding each user as an employee to the object passed in
        // ensuing each employee their set schedule for a week, their position
        // and if they are working less than 5 weekdays or not
        obj[user.name] = createEmployee({
          name: user.name,
          daysOfWeekWorking: myWorkWeek,
          position: jobTitles[i],
          fullTime: checkIfFullTime({ daysOfWeekWorking: myWorkWeek }),
        });
      }
    } else {
      console.error('Error fetching data');
    }
  };

  // Sending the API request
  request.send();
}

function createEmployee(employeeObj) {
  const { name, daysOfWeekWorking, position, fullTime } = employeeObj;
  return {
    name,
    daysOfWeekWorking,
    position,
    fullTime,
  };
}

// Function to check if an employee works at least 5 days a week
function checkIfFullTime(obj) {
  // Calculate if the employee works more than 5 days a week
  // 'true' if weekdayWorkdays is greater than 5
  // 'false' if weekdayWorkdays is less than or equal to 5
  return obj.daysOfWeekWorking.length >= 5;
}

function updateNumberOfEmp(obj) {
  let numberOfEmp = 0;
  for (const employee in obj) {
    if (obj[employee]) {
      numberOfEmp++;
    }
  }
  return (obj.totalEmployees = numberOfEmp);
}

function deleteEmployee(employeeName) {
  if (business[employeeName]) {
    delete business[employeeName];
    updateNumberOfEmp(business);
  }
}

function addWeekends(obj) {
  // Update daysOpen to include weekends
  obj.daysOpen = ['M', 'Tu', 'W', 'Th', 'F', 'Sat', 'Sun'];

  // Update employee schedules to work on weekends
  for (const employee in obj) {
    if (obj[employee].daysOfWeekWorking) {
      obj[employee].daysOfWeekWorking.push('Sat', 'Sun');
    }
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  // Adding weekends to the business schedule
  addWeekends(business);

  // Adding employees from API response to the business object
  addEmployees(business);

  // calling updateNumberOfEmp to update the totalEmployees in the business object
  updateNumberOfEmp(business);

  // calling deleteEmployee to delete property by name in the business object
  deleteEmployee('bob');

  console.log(business);
});
