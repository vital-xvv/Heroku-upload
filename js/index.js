const hr = document.getElementById('hr');
const mn = document.getElementById('mn');
const sc = document.getElementById('sc');


setInterval(() => {
    const day = new Date();

    let hh = day.getHours()*30;
    let mm = day.getMinutes()*6;
    let ss = day.getSeconds()*6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    let hour = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm')

    hour.innerText = day.getHours() < 10 ? '0'+day.getHours(): day.getHours()%12 === 0? "12": '0'+day.getHours()%12;
    minutes.innerText = day.getMinutes() > 9? day.getMinutes(): '0' + day.getMinutes();
    seconds.innerText = day.getSeconds() > 9? day.getSeconds(): '0' + day.getSeconds();
    ampm.innerText = day.getHours() >= 12? "PM": "AM";
})