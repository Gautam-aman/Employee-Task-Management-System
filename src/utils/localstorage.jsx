

const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "Complete the monthly report.",
          "taskDate": "2024-12-24"
        },
        {
          "active": false,
          "new": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 2",
          "taskDescription": "Organize the team meeting.",
          "taskDate": "2024-12-20"
        },
        {
          "active": false,
          "new": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Task 3",
          "taskDescription": "Submit the financial statement.",
          "taskDate": "2024-12-15"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "Update the client database.",
          "taskDate": "2024-12-24"
        },
        {
          "active": true,
          "new": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 2",
          "taskDescription": "Prepare presentation slides.",
          "taskDate": "2024-12-23"
        },
        {
          "active": false,
          "new": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 3",
          "taskDescription": "Organize company files.",
          "taskDate": "2024-12-22"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "Coordinate with the marketing team.",
          "taskDate": "2024-12-25"
        },
        {
          "active": false,
          "new": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 2",
          "taskDescription": "Plan the quarterly budget.",
          "taskDate": "2024-12-19"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "Develop the new feature for the app.",
          "taskDate": "2024-12-26"
        },
        {
          "active": false,
          "new": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 2",
          "taskDescription": "Fix critical bugs in production.",
          "taskDate": "2024-12-18"
        },
        {
          "active": false,
          "new": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Task 3",
          "taskDescription": "Submit the project proposal.",
          "taskDate": "2024-12-15"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "Schedule interviews for new hires.",
          "taskDate": "2024-12-27"
        },
        {
          "active": true,
          "new": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 2",
          "taskDescription": "Review employee performance reports.",
          "taskDate": "2024-12-21"
        },
        {
          "active": false,
          "new": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 3",
          "taskDescription": "Prepare training materials.",
          "taskDate": "2024-12-20"
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

  
  export const Setlocalstorage =()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }

  export const Getlocalstorage =()=>{
    const employee = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return  {employee,admin}

  }