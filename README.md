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

## ▶️ Usage

- After installing, the extension will:
- Show a **modal reminder** for **20 seconds**.
- Repeat reminders every **20 minutes** 

- The modal includes:
- A message reminding you to look 20 feet into the distance.
- A close button (`x`) to dismiss early.

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
