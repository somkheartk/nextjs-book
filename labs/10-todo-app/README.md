# Lab 10: Todo App - โปรเจคสมบูรณ์

## 🎯 วัตถุประสงค์

สร้างแอพจัดการงาน (Todo App) ที่สมบูรณ์พร้อมใช้งานจริง

**ฟีเจอร์:**
- ✅ เพิ่ม/ลบ/แก้ไข Todo
- ✅ ทำเครื่องหมายว่าเสร็จแล้ว
- ✅ กรอง Todo (All, Active, Completed)
- ✅ นับจำนวน Todo
- ✅ บันทึกข้อมูลใน Local Storage
- ✅ Responsive Design

## 📁 โครงสร้างโปรเจค

```
todo-app/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/
│   ├── TodoForm.js
│   ├── TodoItem.js
│   ├── TodoList.js
│   └── TodoFilters.js
├── hooks/
│   └── useTodos.js
└── package.json
```

## 🚀 เริ่มสร้างโปรเจค

### 1. สร้างโปรเจค

```bash
npx create-next-app@latest todo-app --no-git
cd todo-app
npm run dev
```

### 2. สร้าง Custom Hook (hooks/useTodos.js)

```javascript
'use client'

import { useState, useEffect } from 'react'

export default function useTodos() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all') // all, active, completed

  // โหลดข้อมูลจาก Local Storage
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  // บันทึกข้อมูลใน Local Storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // เพิ่ม Todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString()
    }
    setTodos([newTodo, ...todos])
  }

  // ลบ Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Toggle สถานะ
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // แก้ไข Todo
  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ))
  }

  // กรอง Todos
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }

  // นับจำนวน
  const stats = {
    total: todos.length,
    active: todos.filter(t => !t.completed).length,
    completed: todos.filter(t => t.completed).length
  }

  return {
    todos: getFilteredTodos(),
    filter,
    setFilter,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
    stats
  }
}
```

### 3. สร้าง TodoForm Component

```javascript
'use client'

import { useState } from 'react'

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text.trim())
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="เพิ่มงานใหม่..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          เพิ่ม
        </button>
      </div>
    </form>
  )
}
```

### 4. สร้าง TodoItem Component

```javascript
'use client'

import { useState } from 'react'

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleEdit = () => {
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText.trim())
    }
    setIsEditing(false)
  }

  return (
    <div className={`
      flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm
      ${todo.completed ? 'opacity-60' : ''}
    `}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 cursor-pointer"
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleEdit()
            if (e.key === 'Escape') setIsEditing(false)
          }}
          className="flex-1 px-2 py-1 border border-blue-500 rounded focus:outline-none"
          autoFocus
        />
      ) : (
        <span
          className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.text}
        </span>
      )}

      <div className="flex gap-2">
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded"
          >
            แก้ไข
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded"
        >
          ลบ
        </button>
      </div>
    </div>
  )
}
```

### 5. สร้าง TodoFilters Component

```javascript
export default function TodoFilters({ filter, setFilter, stats }) {
  const filters = [
    { key: 'all', label: 'ทั้งหมด', count: stats.total },
    { key: 'active', label: 'กำลังทำ', count: stats.active },
    { key: 'completed', label: 'เสร็จแล้ว', count: stats.completed }
  ]

  return (
    <div className="flex gap-2 mb-6">
      {filters.map(f => (
        <button
          key={f.key}
          onClick={() => setFilter(f.key)}
          className={`
            px-4 py-2 rounded-lg font-medium transition-colors
            ${filter === f.key
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }
          `}
        >
          {f.label} ({f.count})
        </button>
      ))}
    </div>
  )
}
```

### 6. สร้าง TodoList Component

```javascript
import TodoItem from './TodoItem'

export default function TodoList({ todos, onToggle, onDelete, onEdit }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-xl">ไม่มีงานในรายการ</p>
        <p className="text-sm mt-2">เพิ่มงานใหม่เพื่อเริ่มต้น</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}
```

### 7. แก้ไข app/page.js

```javascript
'use client'

import useTodos from '@/hooks/useTodos'
import TodoForm from '@/components/TodoForm'
import TodoFilters from '@/components/TodoFilters'
import TodoList from '@/components/TodoList'

export default function Home() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
    stats
  } = useTodos()

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            📝 Todo App
          </h1>
          <p className="text-gray-600">
            จัดการงานของคุณให้เรียบร้อย
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          {/* Form */}
          <TodoForm onAdd={addTodo} />

          {/* Filters */}
          <TodoFilters
            filter={filter}
            setFilter={setFilter}
            stats={stats}
          />

          {/* List */}
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-600 text-sm">
          <p>💡 เคล็ดลับ: ดับเบิลคลิกที่งานเพื่อแก้ไข</p>
        </div>
      </div>
    </main>
  )
}
```

### 8. แก้ไข app/layout.js

```javascript
import './globals.css'

export const metadata = {
  title: 'Todo App - จัดการงานของคุณ',
  description: 'แอพจัดการงานที่ใช้งานง่าย สร้างด้วย Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
```

## ✅ ทดสอบแอพ

เปิดเบราว์เซอร์ที่ http://localhost:3000

### ฟีเจอร์ที่ต้องทดสอบ:

1. ✅ เพิ่ม Todo ใหม่
2. ✅ กดที่ checkbox เพื่อทำเครื่องหมายเสร็จ
3. ✅ ดับเบิลคลิกที่ Todo เพื่อแก้ไข
4. ✅ กดปุ่มลบเพื่อลบ Todo
5. ✅ ใช้ Filter เพื่อดู Todo แต่ละประเภท
6. ✅ Refresh หน้าเว็บ - ข้อมูลควรยังอยู่

## 🎨 ปรับแต่งเพิ่มเติม

### เพิ่ม Dark Mode

```javascript
// เพิ่มใน app/page.js
const [darkMode, setDarkMode] = useState(false)

// เพิ่มปุ่ม toggle
<button
  onClick={() => setDarkMode(!darkMode)}
  className="mb-4 px-4 py-2 bg-gray-800 text-white rounded"
>
  {darkMode ? '☀️ Light' : '🌙 Dark'}
</button>
```

### เพิ่ม Animation

```javascript
// ติดตั้ง framer-motion
npm install framer-motion

// ใช้ใน TodoItem
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, x: -100 }}
>
  {/* Todo content */}
</motion.div>
```

## 📚 สิ่งที่ได้เรียนรู้

- ✅ Custom Hooks
- ✅ Local Storage
- ✅ Component Composition
- ✅ State Management
- ✅ Form Handling
- ✅ CRUD Operations
- ✅ Conditional Rendering
- ✅ Event Handling

## 🚀 Challenge

1. เพิ่มฟีเจอร์ Priority (High, Medium, Low)
2. เพิ่มฟีเจอร์ Due Date
3. เพิ่มฟีเจอร์ Categories/Tags
4. เพิ่ม Search/Filter
5. Export/Import ข้อมูลเป็น JSON
6. เชื่อมต่อกับ API จริง
7. เพิ่ม Authentication

## 🎯 Next Steps

ยินดีด้วย! คุณได้สร้าง Todo App สมบูรณ์แล้ว 🎉

ลองนำความรู้ไปสร้างโปรเจคอื่นๆ เช่น:
- Blog System
- E-commerce Store
- Dashboard
- Social Media App

---

**Happy Coding! 💻✨**
