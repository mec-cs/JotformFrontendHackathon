# JotformFrontendHackathon

## Overview

This is a e-commerce demo built with React, TypeScript, and Vite. It demonstrates seamless integration with the Jotform API for real-time product listing and order submission, including payment/product fields. The project can be built and run by everyone.

---

## 🚀 Features

- **Live Product Listing:**
  - Fetches products directly from a Jotform form using the Jotform API.
  - Product images, names, prices, and details are displayed dynamically.
- **Shopping Cart:**
  - Add, remove, and update product quantities.
  - Total price is calculated according to the product price and quantity.
  - Cart state is managed globally in localStorage and persists during the session.
  - Clean and simple UI with responsive design.
- **Checkout Flow:**
  - User fills in full name and address.
  - Shopping card summary and total shown before order confirmation.
  - Submits the order directly to Jotform (submissions API) in the exact format Jotform expects.
  - Shopping card is cleared after successful order.
- **Route Protection:**
  - Users cannot access the checkout page directly via URL if the shopping card is empty.
  - Checkout is only accessible after adding products to the shopping card.
- **Navigation:**
  - Back buttons on both shopping card and checkout for smooth UX.
  - Direct navigation to Home and Shopping Card from the header.
- **Error Handling:**
  - User-friendly error messages for failed submissions or empty cart.
- **Configurable:**
  - Easily change the Jotform FORM_ID and API_KEY in `src/utils/util.ts` to connect to any compatible Jotform.

---

## 🛠️ Tech Stack
- **React** (with hooks)
- **TypeScript**
- **Vite** (for fast dev/build)
- **TailwindCSS** (utility-first styling)
- **Jotform API** (REST)
- **React Router** (routing, route guards)

---

## 📂 Project Structure

```
src/
  components/
    checkout/         # Checkout form and logic
    product/          # Product list, card, and detail views
    shop-card/        # Shopping cart (card) component
  context/
    CardContext.tsx   # Global cart state management
  routes/
    AppRoutes.tsx     # All app route definitions
    ProtectedCheckout.tsx # Route guard for checkout
  utils/
    util.ts           # API keys, endpoints, constants
  App.tsx             # Main app layout
  main.tsx            # Entry point
```

---

## ⚙️ Setup & Development

### 1. Clone the Repository
```sh
git clone <repo-url>
cd JotformFrontendHackathon
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Configure Jotform API
- Edit `src/utils/util.ts`:
  - Set `FORM_ID` to your Jotform form ID
  - Set `API_KEY` to your Jotform API key (for demo/test only in your local; do **not** expose in production)

### 4. Run the App (Development)
```sh
npm run dev
```
- Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for Production
```sh
npm run build
```
- Output will be in the `dist/` folder.

### 6. Preview Production Build
```sh
npm run preview
```

---

## 📝 How It Works

1. **Product Listing:**
   - Fetches product/payment fields from the Jotform API using the configured `FORM_ID`.
2. **Cart Management:**
   - Users can add/remove/update products in the cart. Cart state is managed globally.
3. **Checkout:**
   - User fills in Full Name and Address. Cart summary is shown. Submission is sent to Jotform API as a native submission (correct field ids, payment field structure).
4. **Order Submission:**
   - Uses Jotform’s `form/:formId/submissions` endpoint. Handles all required field formats for payment/product fields.
5. **Route Protection:**
   - Checkout page is only accessible if there are items in the shopping card.

---

## 🛡️ Security & Best Practices
- **API Key Exposure:**
  - The API key is in the frontend for demo purposes only. For real projects, use a backend proxy or environment variables.
- **Route Guards:**
  - Checkout is protected; users can’t access it directly when the shopping card is empty.
- **Component Organization:**
  - Routing logic is separated under `routes/` for maintainability.
- **Error Handling:**
  - All API and user errors are caught and displayed.

---

## 💡 Customization
- **Change Form:**
  - Update `FORM_ID` in `util.ts` to connect to any Jotform form with compatible fields.
- **Add Features:**
  - Extend with user authentication, order history, payment gateways, etc.
- **Styling:**
  - Easily customize with TailwindCSS classes or add your own styles.

---

## 🙋 FAQ

**Q: Can I use my own Jotform?**  
A: Yes! Change the `FORM_ID` and ensure your Jotform has compatible product/payment fields.

**Q: Is my API key safe?**  
A: No, never expose your API key in production. This is for demo/hackathon use only.

**Q: Where do orders go?**  
A: Orders are submitted directly to your Jotform account and visible in the Jotform submissions panel.

---

## 📣 Credits & License
- Built for Jotform Hackathon.
- Created by Mehmet Enes Çakır.

---

For questions, suggestions, or contributions, please open an issue or PR!
