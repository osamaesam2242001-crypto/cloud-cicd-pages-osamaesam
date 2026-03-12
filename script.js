const button = document.getElementById("btn");
const message = document.getElementById("msg");

button.addEventListener("click", () => {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  message.textContent = `Workflow completed successfully at ${time}. GitHub Pages is now updated.`;
  button.textContent = "Deployment Completed";
});
