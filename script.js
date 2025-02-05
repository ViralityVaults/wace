const accessPassword = "WACE2025!";
const uploadPassword = "Upload321!";

function checkAccessPassword() {
    const enteredPassword = document.getElementById('access-password').value;
    if (enteredPassword === accessPassword) {
        document.getElementById('access-section').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        alert("Incorrect Access Password!");
    }
}

function uploadFile() {
    const enteredPassword = document.getElementById('upload-password').value;
    const fileInput = document.getElementById('file-input');

    if (enteredPassword === uploadPassword) {
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            alert(`File "${file.name}" uploaded successfully!`);
            // Here you would typically handle the file upload to a server
        } else {
            alert("Please select a file to upload.");
        }
    } else {
        alert("Incorrect Upload Password!");
    }
}

// Add event listeners to subject links for file download
document.querySelectorAll('.subject-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const subject = this.textContent;
        alert(`Downloading files for ${subject}...`);
        // Here you would typically handle the file download logic
    });
});
