function changeColor(sender) {
    if (sender.classList.contains("selected")) {
        sender.classList.remove("selected")
    } else {
        sender.classList.add("selected");
    }
}