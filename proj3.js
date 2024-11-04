
document.getElementById('fanForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
    const playerName = document.getElementById('playerName').value;
    
    if (playerName.trim()) {
        const submissionList = document.getElementById('fanSubmissions');
        const newSubmission = document.createElement('li');
        newSubmission.textContent = playerName;
        submissionList.appendChild(newSubmission);
        document.getElementById('playerName').value = ''; 
    } else {
        alert('Please enter a player name!');
    }
});
