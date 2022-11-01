let x = 0
document.getElementById("counter").innerHTML = x.toString()
document.getElementById('btn').addEventListener("click", iterate)
function iterate(){
    x += 2
    document.getElementById("counter").innerHTML = x.toString()
}