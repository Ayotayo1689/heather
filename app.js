 const admin = document.getElementById('admin')
 const closeAcc = document.getElementById('close-acc')  
 
 
 
closeAcc.addEventListener('click',function(){
    admin.style.visibility = "visible"
    })
document.getElementById('close-admin').addEventListener('click',function(){
admin.style.display = "none"
})