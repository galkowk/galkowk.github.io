document.addEventListener("DOMContentLoaded", function () {
    const scheduleWrapper = document.getElementById('scheduleWrapper');

    function loadSchedule() {
        
        fetch('schedule.html?' + new Date().getTime())
            .then(response => {
                if (!response.ok) {
                    throw new Error('icibombelo caonaika');
                }
                return response.text();
            })
            .then(data => {
                scheduleWrapper.innerHTML = data;
            })
            .catch(error => {
                console.error(error);
                scheduleWrapper.innerHTML = '<p style="color:red;">хуваарь үрелген</p>';
            });
    }

    loadSchedule();
    setInterval(loadSchedule, 60 * 60 * 1000);
});