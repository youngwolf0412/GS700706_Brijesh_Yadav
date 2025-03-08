# Data Viewer Application

A modern React dashboard application for viewing and managing retail data metrics.

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/youngwolf0412/GS700706_Brijesh_Yadav.git
   cd GS700706_Brijesh_Yadav
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Set up environment variables
   Create a `.env.local` file in the root directory with your Clerk authentication keys:

   ```
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_aHVtYmxlLW5ld3QtMjguY2xlcmsuYWNjb3VudHMuZGV2JA
   # The secret key below should only be in your .env.local file, never commit it to version control
   # VITE_CLERK_SECRET_KEY=sk_test_a4xCsT3OmOL9O9w3c4Nf5zq7dE52BfVcbwZTNgWqusVI
   ```

   > **Important Security Note**: The secret key should never be included in public files like README.md or committed to version control. It's only shown here commented out for reference. In a real application, this key should only exist in your local environment files.

4. Start the development server

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

### Authentication

When first visiting the website, you'll be prompted to login. Use your Google provider to login/signup. Once authenticated, the home page will become accessible.

## Features and Implementation Highlights

### 1. Interactive Data Grid Implementation

The application uses AG Grid to display data in a highly interactive and customizable manner. Features include:

- Sortable and filterable columns
- Row deletion functionality
- Custom cell renderers
- Auto-height adjustment

This demonstrates proficiency in integrating and extending complex third-party libraries to meet specific requirements.

### 2. Data Visualization

The Chart component shows a robust implementation of data visualization using Recharts:

- Combined chart types (bar and line) on a single view
- Multi-axis visualization showing different but related metrics
- Formatted tooltips for better user experience
- Responsive design that adapts to container size

This showcases advanced data presentation skills and the ability to create intuitive visualizations for complex data.

### 3. Modern Authentication Flow

Implemented a secure authentication system using Clerk:

- Protected routes with auto-redirection
- Sign-in/sign-up modals
- User profile management
- Clean loading states during authentication

This demonstrates understanding of modern authentication patterns and security considerations.

### 4. Component Architecture

The project follows a clean and maintainable component structure:

- Reusable components with proper typing
- Clear separation of concerns
- Consistent styling approach
- Conditional rendering based on state

This shows proficiency in designing scalable React applications with well-organized code.

### 5. Styling and UI/UX

The application uses Tailwind CSS for styling:

- Responsive design that works across device sizes
- Consistent visual language throughout the application
- Interactive elements with appropriate feedback
- Accessibility considerations in color and contrast

This highlights the ability to create polished, professional user interfaces with attention to detail.

## Technology Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **AG Grid** - Data grid
- **Recharts** - Data visualization
- **Clerk** - Authentication
- **React Icons** - Icon library

## License

[MIT](LICENSE)
