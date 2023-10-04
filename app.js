document.addEventListener('DOMContentLoaded', function () {
        let nameValue = document.getElementById('user');
        let sendName = document.getElementById('submitForm');
        let greeting = document.getElementById('greeting');
        let ageResult = document.getElementById('ageResult');
    
        sendName.addEventListener('click', function (e) {
            e.preventDefault();
            let userName = nameValue.value;
    
            if (userName.trim() === "") {
                greeting.textContent = "Please enter your name.";
            } else {
                let userTown = document.getElementById('userTown').value;
                let likeCatsYes = document.getElementById('yesLikeCats').checked;
                let additionalComment = document.getElementById('textInput').value;
                let preference = document.getElementById('selectPreference').value;
                let preferences = [];
                if (document.getElementById('checkOption1').checked) preferences.push("Football");
                if (document.getElementById('checkOption2').checked) preferences.push("Volleyball");
                if (document.getElementById('checkOption3').checked) preferences.push("Tennis");
    
                let sentence = `Hello ${userName}, it looks like it is busy in ${userTown}`;
    
                if (likeCatsYes) {
                    sentence += " and because it seems that you like cats you can see below the picture of a very cute cat";
                    let catImageContainer = document.getElementById('catImageContainer');
                    catImageContainer.style.display = 'block';
                }
    
                sentence += `. Your favorite movie type is ${preference}. You describe yourself as "${additionalComment}". Your favorite sport is ${preferences.join(', ')}.`;
    
                greeting.textContent = sentence;
            }
    
            nameValue.value = "";
        });
    
        function updateClock() {
            const clock = document.getElementById('clock');
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            clock.textContent = timeString;
        }
    
        setInterval(updateClock, 1000);
    
        const calculateAgeButton = document.getElementById('calculateAge');
        const birthdateInput = document.getElementById('birthdateInput');
        
        calculateAgeButton.addEventListener('click', function (e) {
            e.preventDefault();
            
            const birthdate = new Date(birthdateInput.value);
            const now = new Date();
            const ageInMilliseconds = now - birthdate;
            const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
            
            ageResult.textContent = `You are ${ageInYears} years old.`;
        });
    });
    