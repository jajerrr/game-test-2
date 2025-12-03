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

## 📌 โค้ดหลัก (Logic หลักใน `<script setup>`)

### โหลดเกมทั้งหมด
```js
const loadGames = async () => {
  loading.value = true;
  error.value = null;

  try {
    const res = await fetch("https://fe-test-api.midassoft.dev/api/games", {
      method: "POST",
    });
    if (!res.ok) throw new Error();

    const data = await res.json();
    games.value = data.result || [];
  } catch (err) {
    error.value = "โหลดข้อมูลเกมไม่สำเร็จ";
  } finally {
    loading.value = false;
  }
};
```

### ค้นหาเกม
```js
const searchGames = async () => {
  const q = searchTerm.value.trim();
  if (!q) return loadGames();

  loading.value = true;
  error.value = null;

  try {
    const res = await fetch(
      `https://fe-test-api.midassoft.dev/api/search?query=${encodeURIComponent(q)}`,
      { method: "POST" }
    );
    if (!res.ok) throw new Error();

    const data = await res.json();
    games.value = data.result || [];
  } catch (err) {
    error.value = "ค้นหาเกมไม่สำเร็จ";
  } finally {
    loading.value = false;
  }
};
```

### เปิดรายละเอียดเกม (Modal)
```js
const viewDetail = (game) => {
  selected.value = game;
};
```

---

## 🎬 วิธีใช้ Video/GIF เป็นพื้นหลัง

ไฟล์วางไว้ใน `/public`

```html
<img
  src="/pixel2.gif"
  class="absolute top-0 left-0 w-full h-full object-cover -z-10"
/>
```

หรือถ้าใช้ Video จริง:

```html
<video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover -z-10">
  <source src="/bg.mp4" type="video/mp4" />
</video>
```

---

## 🟪 ฟอนต์ Pixel (Custom Font)

วางไฟล์ใน `/public/fonts/Pixel.ttf`

```css
@font-face {
  font-family: Pixel-Bold;
  src: url("/fonts/PixelifySans-Bold.ttf");
}

.Pixel-Bold {
  font-family: Pixel-Bold, sans-serif;
}
```

---

## 🤝 ผู้พัฒนา (Developer)
Achiraya Komatsu 

---


