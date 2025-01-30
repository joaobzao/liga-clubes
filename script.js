document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        const task = checkbox.parentNode.textContent.trim();
        
        checkbox.checked = localStorage.getItem(task) === "true";

        checkbox.addEventListener('change', function() {
            localStorage.setItem(task, this.checked);
        });
    });
});
