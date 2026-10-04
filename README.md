# Vanilla JS Kanban Board

A modular, framework-free Kanban board web application built using modern Vanilla JavaScript, ES6 Modules, and Object-Oriented Programming (OOP) principles. Data persists locally using the browser's `localStorage` API.

---

## Features

- **Component-Based Architecture:** Modular design using native ES6 JavaScript classes (`Kanban`, `Column`, `Item`, `KanbanAPI`).
- **Drag-and-Drop Interface:** Built with the native HTML5 Drag and Drop API for reordering cards within and across columns.
- **Full CRUD Capabilities:** Add, edit inline, move, and double-click to delete tasks.
- **State Persistence:** Local storage integration ensures board state persists across browser reloads.
- **Zero External Dependencies:** Built with pure HTML5, CSS3, and modern JavaScript without framework overhead.

---

## Project Structure

```text
├── index.html          # Application entry point
├── css/
│   └── main.css        # Layout and drag-and-drop visual states
└── js/
    ├── main.js         # Application bootstrap
    ├── api/
    │   └── KanbanAPI.js# Service layer for LocalStorage CRUD
    └── view/
        ├── Kanban.js   # Root UI component
        ├── Column.js   # Individual column controller
        ├── Item.js     # Task card component with drag listeners
        └── DropZone.js # Drop zone area target logic
```
