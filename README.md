# Sharply kit

Sharply kit provides a set of accessible, reusable, and composable React components for skylos web apps.

## Installing Sharply kit

To use Sharply kit components, all you need to do is install the sharply-kit package and its peer dependencies:

```
$ npx install-peerdeps sharply-kit
```

## Usage

To start using the components, please follow these steps:

1. Wrap your application with the `ThemeProvider` provided by
   **sharply-kit** and import css dependencies.

```jsx
import { ThemeProvider } from "sharply-kit";
import "react-toastify/dist/ReactToastify.min.css";
import "react-phone-input-2/lib/style.css";
import "react-day-picker/lib/style.css";

// Do this at the root of your application
function App({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
```

2. Now you can start using components like so!:

```jsx
import { Button } from "sharply-kit";

function Example() {
  return <Button>Click me</Button>;
}
```
