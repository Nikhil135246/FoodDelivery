# 🍕 Food Delivery App

A modern mobile food delivery application built with React Native, featuring real-time order tracking, restaurant browsing, and seamless user experience.

---

## 🎨 UI & Design

The app features a clean, user-friendly interface with:
- **Intuitive Navigation**: Bottom tab navigation for easy access to key sections
- **Smooth Animations**: Powered by React Native Reanimated and Lottie for engaging transitions
- **Responsive Design**: Fully responsive layouts across all device sizes
- **Modern Styling**: Linear gradients, blur effects, and custom SVG icons
- **Vector Icons**: Comprehensive icon library for better visual communication

---

## ✨ Features

- **🔐 Authentication**: Secure user login and registration
- **🍽️ Restaurant Browsing**: Explore and filter restaurants
- **🛒 Food Ordering**: Browse menus, customize items, and manage cart
- **📍 Delivery Tracking**: Real-time live tracking of food delivery
- **🔄 Reorder**: Quick reorder from previous orders
- **🍴 Dining Mode**: In-app dining experience
- **💾 Persistent Storage**: Redux with persistent state management
- **⚡ Fast & Reliable**: Optimized performance with smooth animations

---

## 🛠️ Tech Stack

### Core Framework
- **React Native** 0.80.0 - Cross-platform mobile development
- **React** 19.1.0 - UI library

### State Management & Storage
- **Redux Toolkit** 2.8.2 - Predictable state container
- **Redux Persist** 6.0.0 - Persist Redux state
- **React Redux** 9.2.0 - React bindings for Redux

### Navigation
- **React Navigation** 7.1.14 - Navigation library
- **React Navigation Bottom Tabs** 7.4.2 - Tab navigation
- **React Navigation Native Stack** 7.3.21 - Stack navigation

### UI & Animations
- **React Native Reanimated** 3.18.0 - Advanced animations
- **Lottie React Native** 7.2.3 - JSON animations
- **React Native Linear Gradient** 2.8.3 - Gradient backgrounds
- **React Native Blur** 4.4.1 - Blur effects
- **React Native SVG** 15.12.0 - SVG support

### Utilities & Libraries
- **Axios** 1.10.0 - HTTP client
- **React Native Vector Icons** 10.2.0 - Icon library
- **React Native Fast Image** 8.6.3 - Fast image loading
- **React Native Safe Area Context** 5.5.0 - Safe area support
- **React Native Gesture Handler** 2.26.0 - Gesture handling
- **React Native MMKV** 3.3.0 - Efficient storage
- **React Native Unistyles** 2.43.0 - Styling solution
- **UUID** 11.1.0 - Unique ID generation

### Development Tools
- **TypeScript** 5.0.4 - Type-safe development
- **ESLint** 8.19.0 - Code linting
- **Prettier** 2.8.8 - Code formatting
- **Jest** 29.6.3 - Testing framework
- **Babel** 7.25.2 - JavaScript transpiler

---

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18
- React Native environment setup ([Setup Guide](https://reactnative.dev/docs/set-up-your-environment))

### Installation

```bash
# Install dependencies
npm install

# Install iOS dependencies (macOS only)
bundle install
bundle exec pod install
```

### Running the App

#### Android
```bash
npm run android
```

#### iOS
```bash
npm run ios
```

### Start Development Server
```bash
npm start
```

---

## 📦 Available Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android emulator/device
- `npm run ios` - Run on iOS simulator/device
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run generate-apk` - Generate APK release build

---

## 📁 Project Structure

```
src/
├── assets/          - Images, fonts, and media
├── components/      - Reusable UI components
├── features/        - Feature modules (auth, dining, delivery, etc.)
├── navigation/      - Navigation configuration
├── states/          - Redux store and slices
├── types/           - TypeScript type definitions
├── unistyles/       - Styling configuration
└── utils/           - Utility functions
```

---

## 🔧 Development Workflow

1. Start the Metro bundler: `npm start`
2. Run the app: `npm run android` or `npm run ios`
3. Edit files and save - changes auto-reload via Fast Refresh
4. For full reload: Press `R` twice on Android or `R` on iOS

---

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

## 📄 License

This project is private and proprietary.
