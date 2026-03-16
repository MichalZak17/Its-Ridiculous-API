<div align="center">

### **The Homework Excuse API** ─ _because "my dog ate it" just doesn't cut it anymore._

<br />

![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Hono](https://img.shields.io/badge/Hono-4.12-E36002?style=for-the-badge&logo=hono&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)

![Excuses](https://img.shields.io/badge/🎭_Excuses-120+-ff69b4?style=for-the-badge)
![Categories](https://img.shields.io/badge/📂_Categories-10-8b5cf6?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

<br />

> _"Professor, I swear — a time-traveling pigeon stole my USB drive. I have witnesses. Well, they were also pigeons, but still."_

<br />

🎓 **Dedicated to all my students** who have mastered the art of creative storytelling instead of, you know, _just doing the homework._

After years of hearing excuses that ranged from mildly creative to _genuinely Oscar-worthy,_ I decided the world deserved an API for this.

**You're welcome.**

<br />

[<kbd> <br> 📡 Explore the API <br> </kbd>](#-api-endpoints)&nbsp;&nbsp;
[<kbd> <br> 🚀 Get Started <br> </kbd>](#-getting-started)&nbsp;&nbsp;
[<kbd> <br> 🏷️ Categories <br> </kbd>](#-categories)&nbsp;&nbsp;
[<kbd> <br> 🤝 Contribute <br> </kbd>](#-contributing)

</div>

---

## 📖 About

**The Homework Excuse API** was born out of years of hearing the most creative, crazy, and sometimes _impressive_ excuses from students. Instead of fighting it, we embraced it — and built an API around it.

Each excuse comes with:

| Field               | Description                          |
| ------------------- | ------------------------------------ |
| `excuse`            | The actual excuse text               |
| `ridiculous_rating` | How ridiculous it is (1–10)          |
| `category`          | What kind of excuse it is            |
| `will_work`         | Whether it'll _actually_ fool anyone |
| `teacher_reaction`  | What your teacher will probably say  |

---

## 🚀 Getting Started

### What you need first

- [Node.js](https://nodejs.org/) (v18+)

### Installation

```bash
# Clone the repository
git clone https://github.com/MichalZak17/Its-Ridiculous-API.git
cd Its-Ridiculous-API

# Install packages
npm install
```

### Run it locally

```bash
npm run dev
# → Server running at http://localhost:3000
```

---

## 💻 Quick Usage Example

Want to use this in your own website? It's super easy! Just fetch the data like this:

```javascript
// Get a random excuse
fetch('http://localhost:3000/api/excuse')
    .then((response) => response.json())
    .then((data) => console.log('Excuse:', data.excuse));
```

---

## 📡 API Endpoints

Base URL: `/api`

### Get a Random Excuse

```http
GET /api/excuse
GET /api/excuse?category=pets
```

**Response:**

```json
{
    "id": 1,
    "excuse": "My dog didn't just eat my homework, he critiqued it first and said it wasn't worth eating",
    "ridiculous_rating": 8,
    "category": "pets",
    "will_work": false,
    "teacher_reaction": "I... actually want to meet this dog"
}
```

### Get Excuse by ID

```http
GET /api/excuse/:id
```

Returns `404` if the excuse doesn't exist. Unlike your homework, we don't pretend it's somewhere it isn't.

### List All Excuses (With Pages)

```http
GET /api/excuses
GET /api/excuses?category=tech&limit=5&offset=0
```

| Parameter  | Default | Max   | Description                      |
| ---------- | ------- | ----- | -------------------------------- |
| `category` | —       | —     | Only show this category          |
| `limit`    | `20`    | `100` | How many excuses to show at once |
| `offset`   | `0`     | —     | Skip this many excuses           |

**Response:**

```json
{
    "excuses": [ "..." ],
    "total": 120,
    "limit": 20,
    "offset": 0
}
```

### List Categories

```http
GET /api/categories
```

**Response:**

```json
{
    "categories": [
        "pets",
        "tech",
        "family",
        "weather",
        "existential",
        "health",
        "time",
        "supernatural",
        "school",
        "creative"
    ]
}
```

---

## 🏷️ Categories

| Category          | Description           | Example                                                                      |
| ----------------- | --------------------- | ---------------------------------------------------------------------------- |
| 🐾 `pets`         | Animal disasters      | _"My parrot memorized my essay and won't stop reciting it incorrectly"_      |
| 💻 `tech`         | Technology failures   | _"My laptop gained sentience and refused to open Word"_                      |
| 👨‍👩‍👧 `family`       | Family emergencies    | _"My mom accidentally used my thesis as a shopping list"_                    |
| 🌧️ `weather`      | Crazy weather events  | _"A tornado specifically targeted my backpack"_                              |
| 🤔 `existential`  | Deep thoughts         | _"I realized homework is a social construct"_                                |
| 🤒 `health`       | Medical problems      | _"I'm allergic to deadlines — it's a real condition"_                        |
| ⏰ `time`         | Time-travel mix-ups   | _"I finished it in a parallel universe but can't access it from this one"_   |
| 👻 `supernatural` | Ghosts and magic      | _"A ghost possessed my printer and printed 500 blank pages"_                 |
| 🏫 `school`       | School issues         | _"The classroom clock was running backwards so I thought it wasn't due yet"_ |
| 🎨 `creative`     | Wildly creative stuff | _"I turned my homework into an NFT and someone bought it"_                   |

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center"><strong>Runtime</strong></td>
<td align="center"><strong>Language</strong></td>
<td align="center"><strong>Framework</strong></td>
<td align="center"><strong>Deployment</strong></td>
</tr>
<tr>
<td align="center"><img src="https://img.shields.io/badge/Node.js-18+-339933?logo=nodedotjs&logoColor=white" /></td>
<td align="center"><img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white" /></td>
<td align="center"><img src="https://img.shields.io/badge/Hono-4.12-E36002?logo=hono&logoColor=white" /></td>
<td align="center"><img src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white" /></td>
</tr>
</table>

---

## 📁 Project Structure

```
src/
├── app.ts        # Routes & API logic
├── dev.ts        # Development server entry point
├── index.ts      # Export wrapper
└── excuses.ts    # The excuse database (120 excuses, 10 categories)
```

---

## 🤝 Contributing

Got a ridiculous excuse that deserves to be in the API? You can add it!

1. Fork the repository
2. Create your branch (`git checkout -b feature/my-excuse`)
3. Add your excuse to `src/excuses.ts`
4. Commit your changes (`git commit -m 'Add excuse about time-traveling hamster'`)
5. Push to the branch (`git push origin feature/my-excuse`)
6. Open a Pull Request

> **Note:** Excuses must have a `ridiculous_rating` of at least 5. We have _standards_.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

_Built with ❤️ and years of hearing "my dog ate my homework"_

**Remember: The best excuse is a submitted assignment.** 📝

</div>
