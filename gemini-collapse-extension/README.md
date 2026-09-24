# Gemini Response Collapser

**Gemini Response Collapser** is a minimalist Google Chrome extension (Manifest V3) that allows you to easily collapse or expand individual Google Gemini responses inside your chat using a clean, universal toggle button.

It is a helpful utility for taking clean screenshots, hiding outdated AI responses, or improving readability during long conversations.

## ✨ Features
* 🌐 **International Design:** Uses universal emojis (`🔼` / `🔽`) with no text, making it language-agnostic and clean.
* 🎨 **Native Look:** Features a modern, round button that integrates seamlessly with Gemini's user interface.
* 🔄 **Dynamic Chat Support:** Powered by a `MutationObserver` that automatically detects and hooks into new messages as the AI generates them in real-time.

## 🚀 How to Install Locally (Developer Mode)

To test or modify this extension on your own browser, follow these steps:

1. **Download the code:** Clone this repository or download it as a ZIP file and extract it.
2. **Open Extensions page:** In Google Chrome, navigate to `chrome://extensions/`.
3. **Enable Developer Mode:** Toggle the **"Developer mode"** switch in the top-right corner.
4. **Load the extension:** Click the **"Load unpacked"** button in the top-left corner.
5. **Select the folder:** Choose the directory containing the extension files (`manifest.json`, `content.js`, `content.css`, `README.md`).

Now, open [Gemini](https://google.com) and start a chat to see the toggle buttons in action!

## 🛠️ Project Structure
* `manifest.json`: Extension configuration and Chrome permission settings.
* `content.js`: Script injected into the page to handle button insertion and toggle logic.
* `content.css`: Visual styling for the round button and smooth UI interactions.

## 📄 License
This project is open-source and available under the **MIT License**. Feel free to use, modify, and distribute it as you like.
