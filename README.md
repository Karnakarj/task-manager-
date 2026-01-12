# Simple Task Manager

This is a simple Task Manager application built using Angular (Standalone Components).
The app supports basic CRUD operations and stores data using browser LocalStorage.

## Features
- Add new tasks
- Edit task title and description
- Change task status (To Do / In Progress / Done)
- Delete tasks
- Data persists using LocalStorage

## Tech Stack
- Angular 21
- TypeScript
- HTML & CSS
- LocalStorage (No backend)

## Getting Started

### Prerequisites
- Node.js (v20 or higher)
- npm (v10 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Karnakarj/task-manager-.git
cd task-manager-
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

### Building for Production

Build the project:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Usage

### Adding a Task
1. Fill in the task title (required)
2. Optionally add a description
3. Click "Add Task" button

### Editing a Task
1. Click the edit icon (✏️) on any task
2. Modify the title and/or description
3. Click "Update Task" to save changes or "Cancel" to discard

### Changing Task Status
1. Use the dropdown menu on each task to select a status:
   - To Do (blue border)
   - In Progress (orange border)
   - Done (green border)

### Deleting a Task
1. Click the delete icon (🗑️) on any task
2. Confirm the deletion in the popup dialog

## Data Persistence

All tasks are automatically saved to browser LocalStorage. Your tasks will persist even after:
- Closing the browser
- Refreshing the page
- Restarting your computer

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── task-form/        # Task add/edit form component
│   │   ├── task-item/         # Individual task display component
│   │   └── task-list/         # Task list container component
│   ├── models/
│   │   └── task.model.ts      # Task interface and status enum
│   ├── services/
│   │   └── task.service.ts    # Task CRUD and LocalStorage service
│   ├── app.ts                 # Main app component
│   ├── app.html               # Main app template
│   └── app.css                # Main app styles
└── styles.css                 # Global styles
```

## License

This project is open source and available under the MIT License.

