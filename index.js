function toast({
    title = "",
    message = "",
    type = "info",
    duration = 3000
}) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");

        const autoRemove = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);

        toast.onclick = function(e) {
            if (e.target.closest(".toast_close")) {
                main.removeChild(toast);
                clearTimeout(autoRemove);
            }
        }

        const icons = {
            info: "fa-solid fa-circle-info",
            success: "fa-solid fa-circle-check",
            warning: "fa-solid fa-circle-exclamation",
            error: "fa-solid fa-circle-exclamation"
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add("toast", `toast--${type}`)
        toast.style.animation = `slideLeft linear 0.4s, fadeOut 1s ${delay}s forwards`;

        toast.innerHTML = `
        <div class="toast_icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast_body">
            <h3 class="toast_title">${title}</h3>
            <p class="toast_msg">${message}</p>
        </div>
        <div class="toast_close">
            <i class="fa-solid fa-xmark"></i>
        </div>`;
        main.appendChild(toast); 
    }
} 

function showSuccessToast() {
    toast({
        title: "Success",
        message: "Máy vi tính kết nối Internet (Windows, Ubuntu hoặc MacOS)",
        type: "success",
        duration: 5000
    })
} 

function showErrorToast() {
    toast({
        title: "Error",
        message: "Máy vi tính chưa được kết nối Internet (Windows, Ubuntu hoặc MacOS)",
        type: "error",
        duration: 5000
    })
}

function showWarnToast() {
    toast({
        title: "Warning",
        message: "vui lòng kiểm tra kết nối Internet",
        type: "warning",
        duration: 5000
    })
}