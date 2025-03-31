# Euro to Dollar Converter

A modern, responsive currency converter application built with React, TypeScript, Material UI, and Framer Motion.

## Features

- **Real-time Exchange Rate Simulation**: Updates every 3 seconds with a random fluctuation
- **Bidirectional Conversion**: Convert EUR to USD or USD to EUR
- **Custom Exchange Rate**: Set your own exchange rate
- **Conversion History**: Keep track of past conversions
- **Modern UI**: Clean and intuitive interface with glassmorphism design
- **Light/Dark Mode**: Toggle between light and dark themes

## Tech Stack

- **Vite**: Fast development server and optimized builds
- **React**: UI library for building component-based interfaces
- **TypeScript**: Type-safe JavaScript
- **Material UI 5**: Modern component library
- **Framer Motion**: Animation library
- **Styled Components**: CSS-in-JS styling solution

## Environment Variables

The application uses the following environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| VITE_FLUCTUATION_RANGE | The range of random fluctuation for exchange rates | 0.1 |
| VITE_MAX_PERCENT_DIFFERENCE | Maximum percentage difference before resetting manual rate | 2 |
| VITE_UPDATE_INTERVAL | Interval (in ms) for exchange rate updates | 3000 |

## Setting Up Environment Variables

1. Create a `.env` file in the root directory
2. Add the variables with your desired values:

```
VITE_FLUCTUATION_RANGE=0.1
VITE_MAX_PERCENT_DIFFERENCE=2
VITE_UPDATE_INTERVAL=3000
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to [http://localhost:5173](http://localhost:5173)

## Project Structure

- `src/components/`: UI components
- `src/context/`: Context providers for state management
- `src/hooks/`: Custom React hooks
- `src/themes/`: Theme configurations for light/dark mode

## Future Improvements

Check out the `todo.md` and `roadmap.md` files for planned improvements and future features.

## License

MIT
