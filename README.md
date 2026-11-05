# Next.js Product API – Zod Validation

A beginner-friendly REST API built using **Next.js App Router and TypeScript** as part of Assignment 08.

This project demonstrates how to create a product API, validate incoming request data using Zod, handle malformed JSON using `try/catch`, and return appropriate HTTP status codes.

## 📌 Assignment Overview

**Assignment 08: Product API – Malformed JSON**

### Problem Statement

Use Zod to validate product name and price, and use try/catch to handle malformed JSON requests.

### Expected Behavior

- Valid product data returns `201 Created`.
- Schema validation errors return `400 Bad Request`.
- Malformed JSON requests return a distinct `400 Bad Request` response.

## 🛠️ Tech Stack

- Next.js (App Router)
- TypeScript
- Zod
- Node.js
- Postman for API testing

## 📂 Project Structure

```text
nextjs-product-api-zod-validation/
├── app/
│   ├── api/
│   │   └── products/
│   │       └── route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/nextjs-product-api-zod-validation.git
```

### 2. Navigate to the project

```bash
cd nextjs-product-api-zod-validation
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Zod

```bash
npm install zod
```

### 5. Start the development server

```bash
npm run dev
```

The application will run at:

http://localhost:3000

## 🔗 API Endpoint

| Property | Value |
|---|---|
| Endpoint | `/api/products` |
| Method | `POST` |
| Content-Type | `application/json` |
| Success Status | `201 Created` |
| Error Status | `400 Bad Request` |

## 📦 Product Validation Schema

The API uses Zod to validate incoming product data.

```typescript
const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.number().positive("Price must be positive"),
});
```

### Validation Rules

| Field | Type | Validation |
|---|---|---|
| name | String | Must not be empty |
| price | Number | Must be greater than zero |

## 🧠 Implementation Details

### 1. JSON Parsing

The API uses:

```typescript
await request.json();
```

This converts the incoming JSON request body into a JavaScript object.

### 2. Malformed JSON Handling

The JSON parsing operation is wrapped inside a `try/catch` block.

If the request contains invalid JSON syntax, the API returns a distinct malformed JSON error before running Zod validation.

### 3. Zod Validation

The API uses:

```typescript
productSchema.safeParse(body);
```

The `safeParse()` method validates the request data without throwing an exception for schema validation failures.

### 4. HTTP Status Codes

- `201 Created` – Product data is valid.
- `400 Bad Request` – JSON is malformed.
- `400 Bad Request` – Product data fails validation.

## 🧪 API Testing with Postman

### Test 1: Valid Product

**Request Body**

```json
{
  "name": "Laptop",
  "price": 50000
}
```

**Expected Response: `201 Created`**

```json
{
  "message": "Product created successfully",
  "product": {
    "name": "Laptop",
    "price": 50000
  }
}
```

### Test 2: Schema Validation Error

**Request Body**

```json
{
  "name": "",
  "price": -100
}
```

**Expected Response: `400 Bad Request`**

```json
{
  "error": "Validation failed",
  "details": [
    {
      "path": ["name"],
      "message": "Name is required"
    },
    {
      "path": ["price"],
      "message": "Price must be positive"
    }
  ]
}
```

*Note: Zod returns additional issue metadata in the actual response.*

### Test 3: Malformed JSON

**Request Body**

```json
{
  "name": "Laptop",
  "price":
}
```

**Expected Response: `400 Bad Request`**

```json
{
  "error": "Malformed JSON",
  "message": "Request body contains invalid JSON"
}
```

## 📚 Learning Outcomes

Through this assignment, I learned:

- Creating REST API endpoints using Next.js App Router.
- Handling POST requests using route handlers.
- Reading request bodies using `request.json()`.
- Validating incoming data using Zod schemas.
- Using `safeParse()` for structured validation.
- Handling malformed JSON using try/catch.
- Returning appropriate HTTP status codes.
- Testing APIs using Postman.

## 👨‍💻 Author

**Mritunjai**

GitHub: https://github.com/itzsonu/nextjs-product-api-zod-validation/edit/main/README.md

---

This project was created for educational purposes to strengthen backend API development and validation concepts.
>>>>>>> ddc879c4a9c24985244d0d84d908eeb956cf674a
