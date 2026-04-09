
# ChatFlix - React Chat Application

## Real Project Structure

```
src/
  App.css
  App.jsx
  assets/
    hero.png
    react.svg
    vite.svg
  components/
    ChatBox.jsx
    Contact.jsx
    Message.jsx
    SignIn.jsx
    SignUp.jsx
    UserList.jsx
  constants/
    actionTypes.js
    config.js
  contexts/
    AuthContext.jsx
    ChatContext.jsx
  hooks/
    useAuth.js
    useChat.js
  index.css
  layouts/
    AuthLayout.jsx
    MainLayout.jsx
  main.jsx
  pages/
    AboutPage.jsx
    ChatPage.jsx
    EntryPage.jsx
  services/
    authService.js
    chatService.js
  styles/
    global.css
    variables.css
  types/
    index.d.ts
  utils/
    formatDate.js
    validateMessage.js
```

Other project files:
```
.gitignore
eslint.config.js
index.html
package.json
package-lock.json
public/
README.md
vite.config.js
```


## Description
This project is a modular, scalable React chat application. The structure is designed for maintainability and easy feature expansion.


### Folder Descriptions
- **components/**: All reusable UI elements (ChatBox, Message, UserList, Contact, SignIn, SignUp)
- **pages/**: Main screens/routes (ChatPage, AboutPage, EntryPage)
- **hooks/**: Custom React hooks for logic reuse (useChat, useAuth)
- **contexts/**: React context providers for global state (AuthContext, ChatContext)
- **utils/**: Helper functions (formatDate, validateMessage)
- **services/**: API and business logic (chatService, authService)
- **constants/**: App-wide constants (actionTypes, config)
- **layouts/**: Layout wrappers for pages (MainLayout, AuthLayout)
- **styles/**: CSS/SCSS files for styling (global.css, variables.css)
- **types/**: TypeScript type definitions (optional)
- **assets/**: Static files (images, icons)

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser at `http://localhost:5173` (or the port shown)

## Contribution
Feel free to open issues or submit pull requests to improve the project!