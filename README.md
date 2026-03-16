<div align="center">

# 🐕 It's Ridiculous API

### _"My dog ate my homework"_ was just the beginning.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Hono](https://img.shields.io/badge/Hono-4.12-E36002?logo=hono&logoColor=white)](https://hono.dev/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/MichalZak17/Its-Ridiculous-API/pulls)
[![Excuses](https://img.shields.io/badge/Excuses-60+-ff69b4)]()
[![Categories](https://img.shields.io/badge/Categories-10-blueviolet)]()

<br />

A RESTful API that serves the most **ridiculously creative excuses** for not submitting homework on time.

Dedicated to all my students who have _never_ run out of excuses. Now you don't have to come up with them yourself — we automate that. 🎓

<br />

**[Explore the API](#-api-endpoints)** · **[Get Started](#-getting-started)** · **[View Categories](#-categories)** · **[Contributing](#-contributing)**

</div>

---

## 📖 About

**It's Ridiculous API** was born out of years of hearing the most creative, absurd, and sometimes _genuinely impressive_ excuses from students. Instead of fighting it, we embraced it — and built an API around it.

Each excuse comes with:

| Field | Description |
|---|---|
| `excuse` | The actual excuse text |
| `ridiculous_rating` | How ridiculous it is (1–10) |
| `category` | What kind of excuse it is |
| `will_work` | Whether it'll _actually_ fool anyone |
| `teacher_reaction` | What your teacher will probably say |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Vercel CLI](https://vercel.com/docs/cli) installed globally (for deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/MichalZak17/Its-Ridiculous-API.git
cd Its-Ridiculous-API

# Install dependencies
npm install
```

### Development

```bash
npm run dev
# → Server running at http://localhost:3000
```

### Deploy to Vercel

```bash
vc deploy
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

### List All Excuses (Paginated)

```http
GET /api/excuses
GET /api/excuses?category=tech&limit=5&offset=0
```

| Parameter | Default | Max | Description |
|-----------|---------|-----|-------------|
| `category` | — | — | Filter by category |
| `limit` | `20` | `100` | Number of excuses per page |
| `offset` | `0` | — | Pagination offset |

**Response:**
```json
{
    "excuses": [ ... ],
    "total": 60,
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
        "pets", "tech", "family", "weather", "existential",
        "health", "time", "supernatural", "school", "creative"
    ]
}
```

---

## 🏷️ Categories

| Category | Description | Example |
|----------|-------------|---------|
| 🐾 `pets` | Animal-related disasters | _"My parrot memorized my essay and won't stop reciting it incorrectly"_ |
| 💻 `tech` | Technology failures | _"My laptop gained sentience and refused to open Word"_ |
| 👨‍👩‍👧 `family` | Family emergencies (creative ones) | _"My mom accidentally used my thesis as a shopping list"_ |
| 🌧️ `weather` | Weather-related catastrophes | _"A tornado specifically targeted my backpack"_ |
| 🤔 `existential` | Deep philosophical crises | _"I realized homework is a social construct"_ |
| 🤒 `health` | Health-related excuses | _"I'm allergic to deadlines — it's a real condition"_ |
| ⏰ `time` | Time-related mishaps | _"I finished it in a parallel universe but can't access it from this one"_ |
| 👻 `supernatural` | Paranormal interference | _"A ghost possessed my printer and printed 500 blank pages"_ |
| 🏫 `school` | School-related complications | _"The classroom clock was running backwards so I thought it wasn't due yet"_ |
| 🎨 `creative` | Wildly creative excuses | _"I turned my homework into an NFT and someone bought it"_ |

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
└── excuses.ts    # The excuse database (60 excuses, 10 categories)
```

---

## 🤝 Contributing

Got a ridiculous excuse that deserves to be immortalized in an API? Contributions are welcome!

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
