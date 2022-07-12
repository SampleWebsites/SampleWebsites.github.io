
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function email() {
    location.href="mailto:sample@samplemail.com?body=" + document.getElementById("text").value;
}
