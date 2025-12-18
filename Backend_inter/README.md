# MuseKart Backend

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env`:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

3. Seed the database with initial data:
```bash
node seedData.js
```

4. Start the server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user

### Albums
- GET `/api/albums` - Get all albums (supports ?language=&genre= filters)
- GET `/api/albums/:id` - Get album by ID
- POST `/api/albums` - Create album (Admin only)
- PUT `/api/albums/:id` - Update album (Admin only)
- DELETE `/api/albums/:id` - Delete album (Admin only)

### Orders
- POST `/api/orders` - Create order (Auth required)
- GET `/api/orders/myorders` - Get user orders (Auth required)
- GET `/api/orders/:id` - Get order by ID (Auth required)
- GET `/api/orders` - Get all orders (Admin only)

## Default Admin Credentials
- Email: admin@musekart.com
- Password: admin123
