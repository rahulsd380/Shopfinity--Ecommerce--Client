# Shopfinity

Shopfinity is a comprehensive E-Commerce Application designed to provide a seamless and intuitive online shopping experience for users, vendors, and administrators. The platform enables users to browse and purchase products, vendors to manage their shops and inventories, and administrators to control and monitor the entire system.

---

## Live Deployment

Frontend: [Shopfinity Frontend](https://shopfinity-ecommerce.vercel.app/)  
Backend: [Shopfinity Backend](https://shopfinity-server.vercel.app/)

---

## Technology Stack & Packages

### Backend
- **Node.js**: Server-side runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **PostgreSQL**: Relational database for storing data.
- **Prisma** or **Mongoose**: ORM/ODM for database operations.
- **JWT**: Secure user authentication.
- **Cloudinary**: Cloud storage for product images.

### Frontend
- **React.js** or **Next.js**: Frontend framework for building a responsive and interactive UI.
- **Redux** or **Context API**: State management.
- **TypeScript**: Optional, for type safety.

### Additional Packages
- **Aamarpay** or **Stripe**: Payment gateway integration.
- **Tailwind CSS**: Styling framework for responsive design.
- **Axios**: For making HTTP requests.

---

## Key Features & Functionality

### Admin
- Full control over the platform, including monitoring and moderation.
- Manage users (vendors and customers) and restrict operations.
- Dynamically manage product categories.
- Monitor transactions and review activities across the platform.

### Vendor
- Create and manage shops with details like name, logo, and description.
- Add, edit, duplicate, and delete products.
- Manage inventory and view order history.
- Respond to customer reviews and ratings.

### User (Customer)
- Browse products, use advanced filters, and add items to the cart.
- Purchase products with coupon codes during checkout.
- Compare up to three products from the same category.
- View order history and leave reviews for purchased products.

### Additional Functionalities
- Recent Products Page: Displays the last 10 products viewed by the user.
- Responsive Design: Optimized for mobile and desktop users.
- Scalable APIs: Implemented paginated APIs for better performance.

---

## Installation and Setup Instructions

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v14 or higher)
- **PostgreSQL** (or MongoDB if using Mongoose)
- **npm** or **yarn**

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/rahulsd380/Shopfinity-Server
   cd shopfinity-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in a `.env` file:
   ```env
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_URL=your_cloudinary_url
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/rahulsd380/Shopfinity--Ecommerce--Client
   cd shopfinity-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in a `.env` file:
   ```env
   NEXT_PUBLIC_API_URL=your_backend_api_url
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```

4. Start the frontend server:
   ```bash
   npm run dev
   ```

---

## Known Issues/Bugs

- Product comparison functionality currently allows adding products from different categories. Validation will be improved in future updates.
- Pagination UI needs optimization for smaller screen sizes.

---

## Professional Formatting
The project follows industry best practices for code organization and documentation. Key sections of the codebase are documented with clear comments, and the README file is neatly formatted for easy navigation.

---

Thank you for exploring Shopfinity! For any queries or contributions, feel free to reach out or create a pull request.
