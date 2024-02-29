const loc=document.querySelector('.loc')
const dt=document.querySelector('.dt')
const day=document.querySelector('.day')
const tm=document.querySelector('.tm')
const tmp=document.querySelector('.tmp')
const feel=document.querySelector('.feel')
const er=document.querySelector('.er')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

async function getData(po){
    try{
        const response =await fetch(`https://api.weatherapi.com/v1/current.json?key=f1b24f91f69d4cc6bdb00203242202&q=${po}`)
        const data= await response.json()
        loc.textContent=`${data.location.name}, ${data.location.country}`
        let date=new Date(data.location.localtime)
        dt.textContent=`${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`
        day.textContent=`${days[date.getDay()]}`
        let s="PM"
        if(date.getHours()<12)s="AM"
        let mn=date.getMinutes()
        let h=date.getHours()-12
        if(h<=0)h+=12
        let hr="",min=""
        if(h<10)hr=`0${h}`
        else hr=`${h}`
        if(mn<10)min=`0${mn}`
        else min=`${mn}`
        tm.textContent=`${hr}:${min} ${s}`
        tmp.textContent=`${data.current.temp_c} °C`
        feel.textContent=`${data.current.condition.text}`
        er.textContent=''
    }catch{
        er.textContent='city not found'
    }
    
}

const btn=document.getElementById('btn')
const inp=document.querySelector('.inp')
const form=document.getElementById('fm')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const d=inp.value
    if(d){
        getData(d)
    }
})
getData('cairo')
inp.value='cairo'