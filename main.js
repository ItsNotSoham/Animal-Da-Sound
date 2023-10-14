function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    mymodel=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sWsBDIyZ3/model.json',modelReady)
}
function modelReady(){
    mymodel.classify(gotResults)
}
function gotResults(error,results){

    if(error)
    {console.log(error)}
    else
    {
        document.getElementById("soundname").innerHTML="I can hear :"+results[0].label
        document.getElementById("accuracy").innerHTML="Accuracy :"+(results[0].confidence*100).toFixed(2)+" %"
        i1=document.getElementById("al1")
        i2=document.getElementById("al2")
        i3=document.getElementById("al3")
        i4=document.getElementById("al4")
    if(results[0].label=="Lion"){
        {i1.src="Animals.jpeg"
    i2.src="cat.jpg"
    i3.src="goat.jpg"
    i4.src="liong.gif"

    }
    }
    else if(results[0].label=="cat"){
        i1.src="Animals.jpeg"
        i2.src="catg.gif"
        i3.src="goat.jpg"
        i4.src="lion.jpg"
    }
    else if(results[0].label=="goat"){
        i1.src="Animals.jpeg"
        i2.src="cat.jpg"
        i3.src="goatg.gif"
        i4.src="lion.jpg"
    }
    else
    {
        i1.src="Animalsg.gif"
        i2.src="cat.jpg"
        i3.src="goat.jpg"
        i4.src="lion.jpg"
    }









    }

}