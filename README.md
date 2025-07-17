# Swimlane-Dashboard

# 🏊 Swimlane Dashboard – Next.js

A pixel-perfect, responsive Swimlane Dashboard implemented using **Next.js** and **TailwindCSS**, based on a provided Figma mockup. This project includes drag-and-drop functionality, local data persistence, search capabilities, and state management using **Zustand**.

---

## 🚀 Features

- 🎨 **UI Implementation**
  - Fully responsive layout (down to 768px)
  - Pixel-perfect Figma design recreation
  - Cross-browser compatible
  - Styled using TailwindCSS

- 📊 **Swimlane Display**
  - Tasks organized into swimlanes based on their status

- 🔀 **Drag-and-Drop**
  - Move tasks between swimlanes using smooth drag-and-drop interactions

- 🧠 **State Management**
  - Zustand-based global store for task data
  - Task `status` is updated on movement between lanes

- 📦 **Mock API Integration**
  - Initial task data is prepopulated via a local `tasks.json` file

- 💾 **Data Persistence**
  - Tasks are stored in `localStorage` or `sessionStorage`
  - Ensures persistence across page reloads

- 🔍 **Live Task Search**
  - Dynamic filtering of tasks as the user types in the search bar

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Beautiful DnD](https://github.com/atlassian/react-beautiful-dnd)

---

## 📁 Project Structure

/swimlane-dashboard
├── components/ # Reusable UI components
├── pages/ # Next.js pages
├── public/ # Static files and task data (JSON)
├── store/ # Zustand store
├── styles/ # Tailwind CSS configuration
└── utils/ # Helper functions

```bash
git clone https://github.com/IT21309038/Swimlane-Dashboard
cd swimlane-dashboard
