console.log("Eye Relaxer Extension");

const showModal = () => {
    
    const modal = document.getElementById("eye-extension-dialog");
    console.log(modal);
    if (modal == null) {
        const newModal = document.createElement("dialog");
        newModal.setAttribute("id", "eye-extension-dialog");
        newModal.setAttribute(
            "style", `
        height:250px;
        width: 500px;
        border: none;
        top:0px;
        border-radius:20px;
        background-color: #90EE90;
        position: fixed; box-shadow: 0px 12px 48px rgba(29, 5, 64, 0.32);
        `
        );

        newModal.innerHTML = `<button style="padding: 8px 12px; font-size: 16px; border: none; border-radius: 20px;">x</button>
        <iframe id="eye-extension-popup"; style="height:100%; width:100%"></iframe>`;
        document.body.appendChild(newModal);

        const iframe = document.getElementById("eye-extension-popup");
        iframe.src = chrome.extension.getURL("webpage.html");
        iframe.frameBorder = 0;
    }

    const dialog = document.querySelector("dialog");
    dialog.showModal();
    dialog.querySelector("button").addEventListener("click", () => {
        dialog.close();
    });

    const closeModal = () => {
        const dialog = document.querySelector("dialog");
        dialog.close();
        console.log("dialog closed");
    };
    setTimeout(closeModal, 3000);

    setTimeout(showModal, 10000);

}


setTimeout(showModal, 5000);

