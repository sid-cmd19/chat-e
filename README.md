# chat-e

A full-stack chat application with user authentication and real-time messaging (in progress).

## Tech stack

| Layer   | Stack |
|--------|--------|
| **Backend** | Node.js, Express, MongoDB (Mongoose), JWT, bcrypt |
| **Frontend** | React 19, Vite 7 |

## Project structure

```
chat-e/
├── be/                 # Backend (Express API)
│   └── src/
│       ├── controllers/
│       ├── lib/        # db, utils, constants
│       ├── models/
│       ├── routes/
│       └── server.js
├── ui/                 # Frontend (React + Vite)
│   └── src/
├── package.json        # Root scripts (build, start)
└── README.md
```

## Prerequisites

- **Node.js** ≥ 20.0.0
- **MongoDB** (local or Atlas)

## Setup

### 1. Clone and install

```bash
git clone https://github.com/sid-cmd19/chat-e.git
cd chat-e
npm install
```

### 2. Backend environment

Create `be/.env` with:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/chat-e
JWT_SECRET=your-secret-key
NODE_ENV=development
```

- `MONGO_URI` – MongoDB connection string (e.g. local or [MongoDB Atlas](https://www.mongodb.com/atlas)).
- `JWT_SECRET` – Strong random string for signing JWTs (keep private).

### 3. Run the app

**Production-style (build UI, then start API):**

```bash
npm run build
npm start
```

API runs at `http://localhost:3000`. In production mode it also serves the built UI.

**Development (API and UI separately):**

```bash
# Terminal 1 – backend with auto-reload
cd be && npm run dev

# Terminal 2 – frontend dev server
cd ui && npm run dev
```

## API overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/signup` | Register (body: `fullName`, `email`, `password`) |
| `GET`  | `/api/auth/login`  | Login (placeholder) |
| `GET`  | `/api/auth/logout` | Logout (placeholder) |
| `GET`  | `/api/messages/send` | Send message (placeholder) |

**Signup** returns user `_id`, `fullName`, `email`, `profilePic` and sets an httpOnly cookie with a JWT (7-day expiry).

## Scripts

| Command | Where | Description |
|---------|--------|-------------|
| `npm run build` | root | Install deps in `be` and `ui`, then build `ui` |
| `npm start` | root | Start backend (serves built UI in production) |
| `npm run dev` | `be/` | Start API with nodemon |
| `npm run dev` | `ui/` | Start Vite dev server |
| `npm run build` | `ui/` | Build for production |
| `npm run preview` | `ui/` | Preview production build |

## License

ISC
