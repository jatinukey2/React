import React from 'react'
import Card from "./components/Card.jsx"

const App = () => {
  return (
    <div className="parent">
      <Card user = "YOYO" age = {20} img = "https://images.unsplash.com/photo-1779903726446-6f796d533d47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" />
      <Card user = "Raftaar" age = {22} img = "https://images.unsplash.com/photo-1778159242389-00f28329cc16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App
