
# FRNDZ Web App – v1.0

**FRNDZ** is a social dating app that flips the script on traditional matchmaking. Instead of swiping for yourself, your trusted friends ("FRNDZ") create your profile and make blind date decisions on your behalf. It's about building not just romantic relationships—but also new friendships along the way.

---

## 🚀 Project Overview

FRNDZ is built as a mobile-first **web application** for version 1.0, with plans to transition to a native iOS app in future versions.

### 💡 Core Concept
- **Player**: The person seeking a match (but not actively participating).
- **PlayerFRNDZ**: 2–3 trusted friends who create the Player's dating profile and select potential matches.
- **Match**: Another person in the app, also represented by their own team.
- **MatchFRNDZ**: Friends managing the Match's profile and making connections.

> **Tagline:** *We met through FRNDZ.*  
> Designed to avoid the stigma of saying "we met on a dating app."

---

## 📁 Folder Structure

```
/index.html                → Pre-launch email signup landing
/welcome.html             → Main homepage after app launch
/signup.html              → Player creates account + friend code
/friend-code-confirmation.html → FRNDZ joins Player team
/player-dashboard.html     → View Player's FRNDZ team (can remove members)
/dashboard.html           → FRNDZ or MatchFRNDZ dashboard
/build-profile.html       → FRNDZ completes Player profile (name, age, bio, interests)
/discover.html            → Browse completed Player profiles
/match-preview.html       → View Match details before chat
/chat.html                → Placeholder chat page
/match.html               → Entry into matching flow
/account.html             → Account settings
/scripts/
  └── storage.js          → LocalStorage handlers (friend codes, profiles, etc.)
  └── nav-loader.js       → Shared top nav injection
/assets/                  → Logos, icons, images
```

---

## ✅ Functionality Highlights

- Player receives a **custom 6-character friend code**
- FRNDZ enter the code and their own name to join the team
- Player Dashboard displays a **live list of all FRNDZ**, and allows **removal**
- FRNDZ complete a full Player profile:
  ```json
  {
    "name": "Jess",
    "age": "30",
    "bio": "Loves books and biking.",
    "interests": ["hiking", "coffee", "trivia"]
  }
  ```
- Discover Page shows **all Players with completed profiles**
- Match Preview loads selected Match into `localStorage.selectedMatch`
- Chat button directs to a placeholder (real chat coming soon!)

---

## 🛠 Tech Stack

- HTML + CSS (mobile-first responsive design)
- JavaScript with `localStorage` for data handling
- Google Fonts: [Montserrat](https://fonts.google.com/specimen/Montserrat)
- SheetDB for email collection on pre-launch page
- Plans to move to Firebase for backend (auth, chat, storage)

---

## 📌 To Do (v1.1+)

- Firebase authentication and real-time database
- FRNDZ-to-FRNDZ private chat
- Match filtering and infinite scroll on Discover
- Profile photos
- “Pitch your Player” videos
- Push notifications

---

## 👩‍💻 Developed by

**Nicole Gallo**  
Creative Data Analyst & Builder of Human-Centered Tools  
[GitHub](https://github.com/nicolegallo) | [Instagram](https://instagram.com/thefrndzapp)

---

> This is a living project. The future of dating is social. And blind. ✨
