# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project overview

React + Vite single-page app that mimics a macOS desktop environment as a portfolio. The UI is composed of a global navbar, a central "welcome" hero, a Dock, and multiple draggable "window" components (Finder, Safari, Resume, Terminal, etc.) that open and close via a shared Zustand store.

The project was bootstrapped from the official `react` Vite template (React Compiler is not enabled, as noted in `README.md`).

## Important commands

Use your preferred Node package manager (`npm`, `pnpm`, or `yarn`). Examples below use `npm`; translate as needed (e.g. `pnpm dev`, `yarn dev`).

- Install dependencies:
  - `npm install`
- Start dev server with HMR:
  - `npm run dev`
- Build for production:
  - `npm run build`
- Preview production build locally:
  - `npm run preview`
- Lint the codebase (ESLint):
  - `npm run lint`

There is currently no configured test runner or `test` script in `package.json`. If you add one (e.g. Vitest or Jest), update this file with how to run the full suite and an individual test.

## High-level architecture

### Entry points and bundler

- `src/main.jsx`
  - Standard React + Vite entry that mounts `<App />` into `#root` and pulls in `src/index.css`.
- `src/App.jsx`
  - Top-level layout that renders:
    - `Navbar` (top bar)
    - `Welcome` (centered hero text)
    - `Dock` (bottom macOS-style dock)
    - All window components: `Terminal`, `Safari`, `Resume`, `Finder` (always mounted; visibility controlled via state).
- `vite.config.js`
  - Configures React and Tailwind CSS via plugins.
  - Defines path aliases used throughout the app:
    - `#components` → `src/components`
    - `#constants` → `src/constants`
    - `#store` → `src/store`
    - `#hoc` → `src/hoc`
    - `#windows` → `src/windows`
  - When adding new modules, prefer these aliases instead of deep relative imports.

### State management and window system

All app-level UI state is handled with Zustand stores using the `immer` middleware.

- `src/store/window.js`
  - Central store for all window instances.
  - Initial state comes from `WINDOW_CONFIG` in `src/constants/index.js` and `INITIAL_Z_INDEX` for layering.
  - Exposes actions:
    - `openWindow(windowKey, data?)`
      - Marks the specified window as open, sets its `zIndex` to the next available value, and optionally attaches `data` (e.g. file metadata).
    - `closeWindow(windowKey)`
      - Marks the window as closed, resets its `zIndex` to `INITIAL_Z_INDEX`, and clears `data`.
    - `focusWindow(windowKey)`
      - Brings a window to front by bumping its `zIndex` to the current `nextZIndex`.
- `src/store/location.js`
  - Manages Finder-like navigation between "locations" (work, about, resume, trash, etc.).
  - Initial location is `locations.work` from `src/constants/index.js`.
  - Exposes:
    - `setActiveLocation(location)` to switch the current folder/location.
    - `resetActiveLocation()` to go back to the default location.

#### Window configuration & locations

- `src/constants/index.js` is the single source of truth for:
  - Navigation (`navLinks`, `navIcons`).
  - Dock apps (`dockApps`) that appear in the bottom Dock.
  - Content data for windows (e.g. `blogPosts`, `techStack`, `socials`, gallery images).
  - Finder locations and their contents (`locations`):
    - `WORK_LOCATION`, `ABOUT_LOCATION`, `RESUME_LOCATION`, `TRASH_LOCATION`.
    - Folder/file metadata, including:
      - `kind` (`folder` or `file`)
      - `fileType` (e.g. `txt`, `img`, `url`, `fig`, `pdf`)
      - `position` coordinates for icons in the Finder grid
      - Optional `windowPosition` and rich `description` arrays.
  - Window layout and initial behavior:
    - `INITIAL_Z_INDEX` and `WINDOW_CONFIG` (per-window `isOpen`, `zIndex`, `data`).

When adding a new window or desktop item, you typically:

1. Add or update entries in `WINDOW_CONFIG` and `locations`/`dockApps`/`navLinks` in `src/constants/index.js`.
2. Implement or extend the corresponding window component in `src/windows`.
3. Wire up the component via the `WindowWrapper` HOC (see below).

### Window HOC and drag/animation behavior

- `src/hoc/WindowWrapper.jsx`
  - Higher-order component `WindowWrapper(Component, windowKey)` that wraps each window to:
    - Read `isOpen` and `zIndex` for `windowKey` from `useWindowStore`.
    - Use `@gsap/react` + `gsap` + `Draggable` to:
      - Animate the window opening (scale/opacity/position tween when `isOpen` becomes true).
      - Make the window draggable; `onPress` triggers `focusWindow(windowKey)` so the dragged window is brought to front.
    - Toggle DOM visibility via `display: none` / `display: block` from a `useLayoutEffect` hook based on `isOpen`.
    - Render the wrapped component inside a `<section id={windowKey} className="absolute" style={{ zIndex }}>`.
  - To create a new window:
    - Implement a plain React component defining the window content.
    - Wrap it: `const MyWindow = WindowWrapper(MyComponent, "myWindowKey");`.
    - Export the wrapped component and ensure `"myWindowKey"` is defined in `WINDOW_CONFIG` and styled via `#myWindowKey` in `index.css` if needed.

### Main UI components

- `src/components/Navbar.jsx`
  - Renders the top nav bar using `navLinks` and `navIcons` from `#constants`.
  - Clicking a nav link calls `openWindow(type)` from `useWindowStore`, where `type` is the window key (e.g. `"finder"`, `"resume"`).
  - Shows current date/time via `dayjs`.
- `src/components/Dock.jsx`
  - Renders the macOS-style Dock using `dockApps` from `#constants`.
  - Uses `useGSAP` and `gsap` to animate icons on hover based on mouse proximity.
  - Toggling a dock icon uses `windows[app.id]` from `useWindowStore`:
    - If the window is open, calls `closeWindow(app.id)`.
    - Otherwise calls `openWindow(app.id)`.
- `src/components/Welcome.jsx`
  - Central hero section that animates per-letter font weight on mouse movement using `gsap` and custom logic (`setupTextHover`).
- `src/components/WindowControls.jsx`
  - Renders the three macOS-style traffic-light buttons.
  - `close` button calls `closeWindow(target)`.
  - Used at the top of each window (Finder, Safari, Resume, Terminal, etc.).

### Window implementations

Each window component focuses on a specific piece of the portfolio while delegating open/close/focus behavior to the window store and `WindowWrapper`.

- `src/windows/Finder.jsx`
  - Uses `locations` and `useLocationStore` to render a two-pane Finder-like UI:
    - Left sidebar lists locations; clicking updates `activeLocation`.
    - Right pane renders `activeLocation.children` as positioned icons using the metadata from `constants`.
  - `openItem(item)` behavior depends on `item` metadata:
    - `fileType === "pdf"` → opens the resume window (`openWindow("resume")`).
    - `kind === "folder"` → navigates into that location via `setActiveLocation(item)`.
    - `fileType` in `['fig', 'url']` with `href` → opens external links in a new browser tab.
    - Otherwise, uses `openWindow(`${item.fileType}${item.kind}`, item)` to route certain files to generic windows (e.g. `txtfile`, `imgfile`) with `data` attached.
- `src/windows/Resume.jsx`
  - Uses `react-pdf` to embed `files/resume.pdf`.
  - Configures `pdfjs.GlobalWorkerOptions.workerSrc` manually via `import.meta.url`.
  - Provides a download link for the same PDF.
- `src/windows/Safari.jsx`
  - Browser-like UI using `blogPosts` from `#constants`.
  - Renders posts with image, date, title, and external link.
- `src/windows/Terminal.jsx`
  - Terminal-style view of the developer tech stack using `techStack` from `#constants`.
  - Renders categories and items in a styled list.

All of the above components are wrapped with `WindowWrapper` and exported via `src/windows/index.js`, which is then imported in `App.jsx`.

### Styling and layout

- `src/index.css`
  - Imports Google fonts and Tailwind CSS v4.
  - Defines global body/background styles to simulate a macOS desktop wallpaper.
  - Uses Tailwind's `@theme`, `@utility`, `@layer base`, and `@layer components` features to define:
    - Global utilities (`flex-center`, `col-center`, `abs-center`).
    - Component-level styles for IDs corresponding to major UI regions and windows (e.g. `#welcome`, `#dock`, `#window-controls`, `#window-header`, `#safari`, `#terminal`, `#finder`, `#resume`, `#contact`, `#photos`, `#txtfile`, `#imgfile`, `#home`).
  - When you introduce new windows or adjust layout, prefer to:
    - Keep component-specific layout/styling in this file under appropriate ID or class selectors.
    - Reuse Tailwind utilities via `@apply` rather than ad-hoc inline styles.

## Working effectively in this codebase

- Prefer imports via Vite path aliases (`#components`, `#constants`, `#store`, `#hoc`, `#windows`) to maintain readable, shallow import paths.
- When adding new windows or desktop items, treat `src/constants/index.js` as the central metadata hub and keep `WINDOW_CONFIG` and `locations` in sync with any new UI you introduce.
- Use the existing `WindowWrapper` HOC and Zustand stores as the standard pattern for any draggable, z-index-managed window-like UI you add to the desktop experience.
