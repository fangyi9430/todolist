

## Project Overview

This is a single-page application (SPA) that allows users to:
- Create, read, update, and delete tasks
- Mark tasks as completed or pending
- View detailed information about each task
- Persist data locally using browser localStorage



### Technology Stack
- React 18
- React Router v6
- JavaScript (ES6+)
- CSS3
- localStorage API

## Setup Instructions

### Prerequisites
- Node.js (version 14.0 or higher)
- npm (comes with Node.js)
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/fangyi9430/task-manager.git
   cd task-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - The application will automatically open at `http://localhost:3000`
   - If it doesn't open automatically, navigate to the URL manually

## Running the Application

### Development Mode
```bash
npm start
```
- Runs on `http://localhost:3000`
- Hot reloading enabled
- Error messages displayed in console

### Production Build
```bash
npm run build
```
- Creates optimized production build in `build/` folder
- Ready for deployment




## Usage Guide

### Adding a Task
1. Click "Add New Task" button on home page
2. Enter task title (required) and description
3. Click "Add Task" to save

### Editing a Task
1. Click on task title to view details
2. Click "Edit Task" button
3. Modify information and update status if needed
4. Click "Update Task" to save changes

### Managing Task Status
- Click "Mark Complete" to mark as done
- Click "Mark Pending" to mark as incomplete

### Deleting a Task
- Click "Delete" button on any task
- Task is permanently removed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## Contact

GitHub: [@fangyi9430](https://github.com/fangyi9430)