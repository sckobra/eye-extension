# Eye Easer Chrome Extension

**Eye Extension** is a simple Chrome extension that reminds you to take short breaks for eye relaxation using the **20-20-20 rule**: every 20 minutes, look at something 20 feet away for 20 seconds. This helps reduce digital eye strain.

---

## ✨ Features

- Displays a pop-up reminder on any webpage after a set interval.
- Encourages users to take eye relaxation breaks.
- Lightweight and easy to use.

---

## 📂 Project Structure

Eye-Extension/
│
├── manifest.json # Chrome extension manifest file
├── content.js # Injected script that displays the modal dialog
├── webpage.html # Popup content shown inside the modal
├── icon.png # Extension icon (19x19)



---

## 🔧 Installation

1. **Clone or Download** this repository to your local machine.

2. Open **Google Chrome** and go to:


3. Enable **Developer Mode** (toggle switch in the top-right corner).

4. Click **Load Unpacked** and select the folder containing the extension files.

---

## ▶️ Usage

- After installing, the extension will:
- Wait **5 seconds** after the page loads.
- Show a **modal reminder** for **3 seconds**.
- Repeat reminders every **10 seconds** (for demo; can be adjusted).

- The modal includes:
- A motivational message.
- A close button (`x`) to dismiss early.

---

## ⚙️ Permissions

The extension requests:

- **tabs** – To interact with the current webpage.
- **content scripts** – To inject the reminder modal.

---

## 🛠️ Technologies Used

- **HTML** – Popup content.
- **JavaScript** – Logic for scheduling and displaying reminders.
- **Chrome Extensions API** – For content script injection and resource loading.

---

## 🚀 Future Improvements

- Add options for customizing reminder intervals.
- Include notifications instead of modals.
- Improve design and accessibility.

---

## 📜 License

This project is licensed under the MIT License.
