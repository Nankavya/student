// const jdata=
// fetch('./MOCK_DATA.json')
// .then(res =>res.json())
// .then(MOCK_DATA =>{console.log(MOCK_DATA)})

// // const data=JSON.stringify(MOCK_DATA)
// // console.log(typeof data)

// console.log(jdata)
import student from './MOCK_DATA.json' assert {type: 'json'}
console.log(student)
// const data=JSON.stringify(student)
console.log(typeof student)
// let studentData = JSON.parse(student);
// console.log(typeof studentData)
// let obj={name:"kavya"}
// console.log(typeof obj)
let fun=student.map((item)=>{
       return item.first_name
        
    })
    console.log(fun)

//selection

let searchinput=document.getElementById('search-id')
let searchbutton=document.getElementById('search-btn')
let sortaz=document.getElementById('sort-a-z')
let sortza=document.getElementById('sort-z-a')
let sortmarks=document.getElementById('sort-marks')
let sortpass=document.getElementById('sort-pass')
let sortclass=document.getElementById('sort-class')
let sortgen=document.getElementById('sort-gen')
let table=document.getElementById('table-id')
let table1=document.getElementById('ts')
let tablehead=document.getElementById('t-id')
let table2=document.getElementById('id-2')


function display(student)
{   
    table.innerHTML=""
    
    student.forEach((item)=>{

        let row=document.createElement('tr')
        
        row.innerHTML=`<td>${item.id}</td>
        <td><img src="https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-avatar-icon-abstract-user-login-icon-png-image_3917181.jpg" border-radious="5px" height=40" width="40">${item.first_name} ${item.last_name}</td>
        <td>${item.gender}</td> <td>${item.class}</td>
        <td>${item.marks}</td><td>${item.passing?"pass":"fail"}</td><td>${item.email}</td>`
        table .append(row)
        
    })
    
}
display(student)
searchbutton.addEventListener('click',search)
sortaz.addEventListener("click", AZ)
sortza.addEventListener('click', ZA)
sortmarks.addEventListener('click',marks)
sortpass.addEventListener('click',paasing)
sortclass.addEventListener('click',sclass)
sortgen.addEventListener('click',gender)


function search()
{
    tablehead.style.visibility='hidden'
    table1.innerText=''
    table2.innerText=''
    let inputval=searchinput.value
    // console.log(inputval)
  
    let searchresult=student.filter((item)=>{ 
       if(item.first_name == inputval)
       {
        return item.first_name
       }
       else if(item.last_name == inputval){
         return item.last_name
       }
       else if(item.email == inputval){
         return item.email
       }
       
        
    })
    console.log(searchresult)
    display(searchresult)
}
function AZ()
{
    tablehead.style.visibility='visible'
    // table1.innerText=''
    table2.innerText=''
    let sortAZ=student.sort((a,b)=>{
        if(a.first_name < b.first_name)
        {
            return -1
        }
        else if(a.first_name > b.first_name)
        {
            return 1
        }
        else{
            return 0
        }
    })
    display(sortAZ)
}
function ZA()
{
    tablehead.style.visibility='visible'
    table1.innerText=''
    table2.innerText=''
    let sortZA=student.sort((a,b)=>{
        if(b.first_name < a.first_name)
        {
            return -1
        }
        else if(b.first_name > a.first_name)
        {
            return 1
        }
        else{
            return 0
        }
    })
    display(sortZA)
}
function marks()
{
    tablehead.style.visibility='visible'
    table1.innerText=''
    table2.innerText=''
    let result=student.sort((a,b)=>
    {
        return a.marks <b.marks?-1:1
    })
    display(result)
}

function sclass()
{
    tablehead.style.visibility='visible'
    table1.innerText=''
    table2.innerText=''
    let result=student.sort((a,b)=>
    {
        return a.class <b.class?-1:1
    })
    display(result)
}

function paasing()
{   
    tablehead.style.visibility='visible'
    table1.innerText=''
    table2.innerText=''
    let result=student.filter((item)=>
    {
        return item.passing==true
    })
    display(result)
}

// function gender()
// {
//     table1.style.visibility='hidden'
//     let result=student.filter((item)=>{
//         if((item.gender=='Female') || (item.gender=='Male'))
//         {
//             return item.gender
//         }
//         student.sort((a,b)=>{
//         return a.gender < b.gender ? 1 : -1
//         })
//     })
// display(result)
// }

function gender()
{   tablehead.style.visibility='hidden'
    table.innerText=''
    
    student.forEach((item)=>{

        if(item.gender=='Female'){
        let trow=document.createElement('tr')
        
        trow.innerHTML="<td>"+item.id+"</td>"+"<td>"+item.first_name+item.last_name+"</td>"+"<td>"+item.gender+"</td>"+"<td>"+item.class+"</td>"+"<td>"+item.marks+"</td>"+"<td>"+item.passing+"</td>"+"<td>"+item.email+"</td>"
        table1.append(trow)
    }})
  
    student.forEach((item)=>{

        if(item.gender=='Male'){
        let trow=document.createElement('tr')
        trow.innerHTML="<br>"+"<td>"+item.id+"</td>"+"<td>"+item.first_name+item.last_name+"</td>"+"<td>"+item.gender+"</td>"+"<td>"+item.class+"</td>"+"<td>"+item.marks+"</td>"+"<td>"+item.passing+"</td>"+"<td>"+item.email+"</td>"
        table2 .append(trow)
    }
        
    })
    
}



            


    

