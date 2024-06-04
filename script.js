let dateInput = document.querySelector('input'),
pElement = document.querySelector('p');

dateInput.addEventListener('change', () => {
    let birthDate = new Date(dateInput.value),
    today = new Date();
    if(birthDate > today){
        pElement.innerText = 'Invalid input';
    }
    else{
        let age = today.getFullYear() - birthDate.getFullYear(),
        month = today.getMonth() - birthDate.getMonth(),
        day = today.getDate() - birthDate.getDate();
        if(month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
            age--;
            month += 12;
        }
        if(day < 0){
            month--;
            day += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }
        pElement.innerText = `${age} year ${month} month ${day} day`;
    }
});