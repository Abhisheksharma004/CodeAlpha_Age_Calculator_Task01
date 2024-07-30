function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        document.getElementById('result').textContent = 'Please select your date of birth.';
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    let days = today.getDate() - dobDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // days in the previous month
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('result').textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
    setEmojiBackground(years);
}

function setEmojiBackground(age) {
    document.body.classList.remove('emoji-0', 'emoji-1', 'emoji-2', 'emoji-3', 'emoji-4', 'emoji-5', 'emoji-6');
    
    let emojiClass = 'emoji-6'; // default to the oldest age group
    if (age < 10) {
        emojiClass = 'emoji-0';
    } else if (age < 20) {
        emojiClass = 'emoji-1';
    } else if (age < 30) {
        emojiClass = 'emoji-2';
    } else if (age < 40) {
        emojiClass = 'emoji-3';
    } else if (age < 50) {
        emojiClass = 'emoji-4';
    } else if (age < 60) {
        emojiClass = 'emoji-5';
    }
    
    document.body.classList.add(emojiClass);
}

document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
