# 🍳 PantryChef

**Turn the ingredients in your kitchen into delicious meal ideas.**

PantryChef is a recipe discovery application that helps users find recipes based on ingredients they already have. Instead of wondering what to cook, simply enter your available ingredients and discover meals you can prepare.

## ✨ Features

- **Ingredient-Based Search:** Find recipes using ingredients you already have.
- **Recipe Discovery:** Explore meal ideas based on your available ingredients.
- **Spoonacular Integration:** Fetch recipe suggestions using the Spoonacular Food API.
- **Responsive Interface:** Designed to provide a smooth experience across different screen sizes.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | User interface |
| Vite | Development and build tooling |
| JavaScript | Application logic |
| CSS | Styling |
| Lucide React | Icons |
| Spoonacular API | Recipe data and ingredient-based search |

## 🚀 Getting Started

Follow these steps to run PantryChef locally.

### 1. Clone the repository

```bash
git clone https://github.com/hamzah697/PantryChef.git
```

### 2. Navigate to the project directory

```bash
cd PantryChef
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
VITE_SPOONACULAR_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your Spoonacular API key.

You can obtain an API key from [Spoonacular](https://spoonacular.com/food-api).

### 5. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to explore PantryChef.

## 📦 Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

The generated production files are stored in the `dist` directory.

## 🔑 API Configuration

PantryChef uses the Spoonacular Food API to retrieve recipe suggestions.

The application requires a valid API key to access recipe data.

**Note:** The current Vite environment variable approach exposes the API key in the browser bundle. For production use, consider moving API requests to a server-side function to protect your key.

## 🌐 Live Demo

[Visit PantryChef](https://pantrychefss.netlify.app/)

## 👨‍💻 Author

**Muhammad Hamzah**

- GitHub: [@hamzah697](https://github.com/hamzah697)

---

*PantryChef — Make something delicious with what you have.*
