# Kanban To-Do App

A simple Kanban-style To-Do application built with React and TypeScript, inspired by Trello. Manage your tasks across different statuses: **To Do**, **In Progress**, and **Done**.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- **Add Tasks**: Quickly add new tasks to your To Do column.
- **Move Tasks**: Seamlessly move tasks between statuses.

## Demo

<!-- Insert screenshots or a link to a live demo if available -->
https://github.com/user-attachments/assets/6f6a9afb-b965-4ffd-b7ad-f9a38aa0241e



## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/kanban-todo-app.git
   cd kanban-todo-app
  ```
2. **Install Dependencies**

  ```bash
  npm install
  ```

  Or using Yarn:
  ```bash
  yarn install
  ```
3. **Start the Dev Server**

  ```bash
  npm start
  ```

  Or using Yarn:
  ```bash
  yarn start
  ```
4. **Open the App**

Open your browser and navigate to `http://localhost:3000`.

---

## Usage

- **Add a Task**: Type a task name in the input field and press **Enter** or click the **+** button.
- **Move a Task Forward**: Click the **Forward** button on a task to move it to the next status.
- **Move a Task Backward**: Click the **Back** button on a task to move it to the previous status.
- **Task Statuses**: Tasks are organized in columns based on their status.

## Folder Structure

**Note: only the most important files are listed**

```src/
├── components/
│   ├── AddTask
│   ├── Board
│   ├── StatusColumn
│   └── Task
├── context/
│   └── TasksContext.ts
│   └── TasksProvider.tsx
├── hooks/
│   └── useTasks.ts
│   └── useTasksActions.ts
├── reducers/
│   └── tasksReducer.ts
├── types/
│   ├── Status.ts
│   └── Task.ts
├── utils/
│   ├── getReadableStatus.ts
├── App.tsx
└── index.tsx
```

## Technologies Used

- **React**
- **Typescript**
- **Tailwind**

Setup with Create React App.

## License

This project is licensed under the MIT License.
