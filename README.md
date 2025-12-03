# 🎮 Game Library – Nuxt 3 Project

โปรเจกต์เว็บไซต์ Game Library สำหรับแสดงเกม ค้นหาเกม และดูรายละเอียดแบบ Popup  
สร้างด้วย **Nuxt 3 + Vue 3 + TailwindCSS**  
รองรับพื้นหลังแบบวิดีโอ/GIF พร้อม UI แนว Pixel Retro

---

## 🚀 ฟีเจอร์หลัก (Features)

### 🎲 1. แสดงรายชื่อเกมทั้งหมด
- โหลดข้อมูลจาก API จริง  
  `POST https://fe-test-api.midassoft.dev/api/games`
- แสดงข้อมูล: รูปภาพเกม, ชื่อ, หมวดหมู่, คะแนน

### 🔍 2. ระบบค้นหาเกม (Search)
- ค้นหาแบบ Real-time ด้วย API  
  `POST /api/search?query=ข้อความ`
- รองรับกด Enter หรือปุ่ม "ค้นหา"

### 🪟 3. Popup Modal รายละเอียดเกม
- แสดงข้อมูลเกมแบบจัดเต็ม
- กดปิดได้ (Close Button)
- มีไอคอน Rating แบบดาว

### 🎬 4. พื้นหลังแบบวิดีโอหรือ GIF
- รองรับ autoplay / loop / muted  
- ใช้เป็น Background แบบเต็มหน้าจอ  
- รองรับมือถือด้วย (playsinline)

### 🎨 5. UI สวยงาม
- Tailwind CSS  
- Navbar แบบ Glassmorphism (blur + transparency)  
- Card Layout แบบ Responsive  
- Pixel-style font

---

## 📁 โครงสร้างโปรเจกต์

```
project/
│
├── components/
│   └── Home/
│       └── index.vue        # ไฟล์หลักของหน้า Game Library
│
├── pages/
│   └── index.vue            # เรียก HomeIndex (auto-import)
│
├── public/
│   ├── pixel2.gif           # พื้นหลัง GIF
│   ├── game-controller.png  # โลโก้
│   └── fonts/               # ฟอนต์ Pixel (ถ้ามี)
│
├── assets/
│   └── css/
│       └── tailwind.css     # ไฟล์ Tailwind global
│
├── nuxt.config.ts
└── README.md
```

---

## 🛠 การติดตั้งและรันโปรเจกต์

### 1️⃣ ติดตั้ง Dependencies
```bash
npm install
```

### 2️⃣ รัน Development Server
```bash
npm run dev
```

### 3️⃣ เปิดเว็บ
```
http://localhost:3000
```

---



## 🤝 ผู้พัฒนา (Developer)
Achiraya Komatsu 

---


