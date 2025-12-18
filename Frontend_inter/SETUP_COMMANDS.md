# MuseKart Frontend Setup Commands

## Prerequisites
Make sure you have Node.js installed on your system.

## Setup Commands

### 1. Navigate to project directory
```bash
cd c:\Frontend_inter
```

### 2. Install dependencies (if not already installed)
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

### 4. Open your browser
The application will be available at: http://localhost:5173

## Demo Login Credentials
- Email: admin@test.com
- Password: password

OR

- Email: john@test.com  
- Password: password

## Features Implemented

### ✅ Header & Navigation
- Responsive header with dropdown menu for albums
- Cart counter showing number of items
- User authentication status display
- Mobile-friendly hamburger menu

### ✅ Footer
- Responsive footer with links and contact information
- Multi-column layout on desktop

### ✅ Home Page
- Hero section with call-to-action
- Language cards with images and navigation buttons
- Features section highlighting key benefits

### ✅ Albums by Language
- Browse albums filtered by language (Tamil, Hindi, English, Korean)
- Responsive grid layout
- Album cards with cover images, artist info, and action buttons

### ✅ Genre Navigation
- Browse albums by genre within each language
- Genre cards showing sample album covers
- Album count per genre

### ✅ Album Details
- Comprehensive album information page
- Track listing
- Buy Now and Add to Cart functionality
- Responsive design with image and details side-by-side

### ✅ Shopping Cart
- Add/remove albums from cart
- Cart persistence using localStorage
- Total calculation
- Checkout functionality
- Empty cart state with call-to-action

### ✅ User Authentication
- Login/logout functionality
- Protected routes for purchase
- Demo user accounts
- Redirect to intended page after login

### ✅ Buy Now / Checkout
- Secure checkout process
- Order summary with item details
- Payment form (demo)
- Order confirmation
- Cart clearing after successful purchase

### ✅ Admin Panel
- Add new albums with complete form
- View all albums in table format
- Delete albums functionality
- Form validation and error handling

### ✅ Responsive Design
- Mobile-first approach
- Responsive navigation
- Flexible grid layouts
- Touch-friendly buttons and interactions

### ✅ Additional Features
- Loading states
- Error handling
- Local storage persistence
- Smooth transitions and hover effects
- Accessibility considerations

## Project Structure
```
src/
├── components/
│   ├── Header.jsx          # Main navigation header
│   ├── Footer.jsx          # Site footer
│   ├── AlbumCard.jsx       # Album display card
│   ├── LanguageCard.jsx    # Language selection card
│   └── ProtectedRoute.jsx  # Route protection component
├── pages/
│   ├── Home.jsx           # Landing page
│   ├── Albums.jsx         # Albums by language
│   ├── Genres.jsx         # Genres by language
│   ├── AlbumDetails.jsx   # Individual album page
│   ├── Cart.jsx           # Shopping cart
│   ├── Login.jsx          # User authentication
│   ├── BuyNow.jsx         # Checkout process
│   └── Admin.jsx          # Album management
├── context/
│   ├── AuthContext.jsx    # User authentication state
│   └── CartContext.jsx    # Shopping cart state
├── data/
│   └── albums.js          # Sample album data
├── App.jsx                # Main app component
├── main.jsx              # App entry point
└── index.css             # Global styles
```

## Technologies Used
- React 19
- React Router DOM 7
- Tailwind CSS 4
- Vite
- Context API for state management
- Local Storage for persistence

## Next Steps
1. Run the setup commands above
2. Test all functionality in the browser
3. Customize the design and data as needed
4. Add backend integration when ready