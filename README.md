# Meal Planner App

A web application to help you plan and manage your meals.

## Features

- User authentication with Firebase
- Meal suggestions for breakfast, lunch, and dinner
- Meal management and history tracking
- Responsive design with Material-UI

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/meal-planner-app.git
cd meal-planner-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables with your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. Start the development server:
```bash
npm run dev
```

## Deployment

The app is automatically deployed to GitHub Pages when changes are pushed to the master branch. The deployment process:

1. Builds the app with the Firebase configuration from GitHub Secrets
2. Deploys the built files to the gh-pages branch

To set up deployment for your own repository:

1. Add the following secrets to your GitHub repository:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
   - `VITE_FIREBASE_MEASUREMENT_ID`

2. Enable GitHub Pages in your repository settings, using the gh-pages branch as the source.

## Technologies Used

- React
- TypeScript
- Firebase Authentication
- Material-UI
- Vite
- GitHub Actions for CI/CD

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/meal-planner-app.git
```

2. Install dependencies:
```bash
cd meal-planner-app
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Usage

1. Add your meals in the "Manage Meals" tab
2. Get suggestions in the "Today's Suggestions" tab
3. View your meal history in the "Meal History" tab

## License

MIT
