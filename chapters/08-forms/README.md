# บทที่ 8: Forms และ Validation

## 🎯 สิ่งที่จะได้เรียนรู้

- Controlled Components
- Form Validation
- React Hook Form
- Form Handling Best Practices

## 📝 Controlled Components

Component ที่ควบคุม input ด้วย state

### Basic Form

```javascript
'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="ชื่อ"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="อีเมล"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="ข้อความ"
      />
      <button type="submit">ส่ง</button>
    </form>
  )
}
```

## ✅ Form Validation

### Manual Validation

```javascript
'use client'

import { useState } from 'react'

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const [errors, setErrors] = useState({})
  
  const validate = () => {
    const newErrors = {}
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'กรุณากรอกอีเมล'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'รูปแบบอีเมลไม่ถูกต้อง'
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'กรุณากรอกรหัสผ่าน'
    } else if (formData.password.length < 8) {
      newErrors.password = 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร'
    }
    
    // Confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'รหัสผ่านไม่ตรงกัน'
    }
    
    return newErrors
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    // Submit form
    console.log('Form is valid:', formData)
    setErrors({})
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="อีเมล"
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
      </div>
      
      <div>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="รหัสผ่าน"
          className={errors.password ? 'border-red-500' : ''}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>
      
      <div>
        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="ยืนยันรหัสผ่าน"
          className={errors.confirmPassword ? 'border-red-500' : ''}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}
      </div>
      
      <button type="submit">ลงทะเบียน</button>
    </form>
  )
}
```

## 🎯 React Hook Form

### ติดตั้ง

```bash
npm install react-hook-form
```

### Basic Usage

```javascript
'use client'

import { useForm } from 'react-hook-form'

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  
  const onSubmit = (data) => {
    console.log(data)
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register('email', {
            required: 'กรุณากรอกอีเมล',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'รูปแบบอีเมลไม่ถูกต้อง'
            }
          })}
          placeholder="อีเมล"
        />
        {errors.email && (
          <p className="text-red-500">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <input
          type="password"
          {...register('password', {
            required: 'กรุณากรอกรหัสผ่าน',
            minLength: {
              value: 8,
              message: 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร'
            }
          })}
          placeholder="รหัสผ่าน"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      
      <button type="submit">เข้าสู่ระบบ</button>
    </form>
  )
}
```

### Advanced Validation

```javascript
'use client'

import { useForm } from 'react-hook-form'

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm()
  
  const password = watch('password')
  
  const onSubmit = async (data) => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (res.ok) {
        alert('ลงทะเบียนสำเร็จ!')
      }
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('username', {
            required: 'กรุณากรอกชื่อผู้ใช้',
            minLength: {
              value: 3,
              message: 'ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร'
            }
          })}
          placeholder="ชื่อผู้ใช้"
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}
      </div>
      
      <div>
        <input
          {...register('email', {
            required: 'กรุณากรอกอีเมล',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'รูปแบบอีเมลไม่ถูกต้อง'
            }
          })}
          placeholder="อีเมล"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <input
          type="password"
          {...register('password', {
            required: 'กรุณากรอกรหัสผ่าน',
            minLength: {
              value: 8,
              message: 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร'
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
              message: 'รหัสผ่านต้องมีตัวพิมพ์เล็ก พิมพ์ใหญ่ และตัวเลข'
            }
          })}
          placeholder="รหัสผ่าน"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      
      <div>
        <input
          type="password"
          {...register('confirmPassword', {
            required: 'กรุณายืนยันรหัสผ่าน',
            validate: value =>
              value === password || 'รหัสผ่านไม่ตรงกัน'
          })}
          placeholder="ยืนยันรหัสผ่าน"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
        )}
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 rounded disabled:bg-gray-400"
      >
        {isSubmitting ? 'กำลังลงทะเบียน...' : 'ลงทะเบียน'}
      </button>
    </form>
  )
}
```

## 🎨 Form Components

### Input Component

```javascript
// components/Input.js
export default function Input({ 
  label, 
  error, 
  register, 
  ...props 
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        {...register}
        {...props}
        className={`
          w-full px-3 py-2 border rounded
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  )
}

// Usage
<Input
  label="อีเมล"
  register={register('email', { required: true })}
  error={errors.email?.message}
  type="email"
  placeholder="your@email.com"
/>
```

### Select Component

```javascript
export default function Select({ 
  label, 
  options, 
  error, 
  register,
  ...props 
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>
      <select
        {...register}
        {...props}
        className={`
          w-full px-3 py-2 border rounded
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
      >
        <option value="">เลือก...</option>
        {options.map(option => (
          <key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  )
}
```

## 📤 File Upload

```javascript
'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function FileUploadForm() {
  const { register, handleSubmit } = useForm()
  const [preview, setPreview] = useState(null)
  
  const onSubmit = async (data) => {
    const formData = new FormData()
    formData.append('file', data.file[0])
    
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
    
    const result = await res.json()
    console.log(result)
  }
  
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="file"
        {...register('file')}
        onChange={handleFileChange}
        accept="image/*"
      />
      
      {preview && (
        <img src={preview} alt="Preview" className="mt-4 w-64" />
      )}
      
      <button type="submit">อัปโหลด</button>
    </form>
  )
}
```

## ✅ สรุป

ในบทนี้เราได้เรียนรู้:
- ✅ Controlled Components
- ✅ Form Validation
- ✅ React Hook Form
- ✅ Form Components
- ✅ File Upload

## 🔗 Lab

ไปทำ Lab: [สร้างฟอร์มลงทะเบียน](../../labs/08-registration-form/README.md)

## 📝 แบบฝึกหัด

1. สร้างฟอร์ม Login
2. สร้างฟอร์มลงทะเบียนพร้อม Validation
3. สร้าง Contact Form
4. เพิ่ม File Upload
5. สร้าง Multi-step Form

## 🎯 เป้าหมายต่อไป

ในบทถัดไป เราจะเรียนรู้เรื่อง **Authentication**!
