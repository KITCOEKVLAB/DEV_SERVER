$(document).ready(function(){
    var lineCount=0, line_no;
    var cmt;
    var source=["01h","02h","03h","04h","05h"]
    var destination=["11h","12h","13h","14h","15h"]
    counter=5
    

    
    $("#Start").click(function(){
        $("#Start").html("Next");
        $("#Start").css("background-color", "#FFFF33");
        $("#Start").css("color", "black");
    });
    var div=document.getElementById('line11');
    var div1=document.getElementById('line12');
    var div2=document.getElementById('line13');
    var div3=document.getElementById('line14');
    var switchBtn = document.getElementById('switch')
    
    switchBtn.addEventListener("click", () =>{
        StartBtn.disabled=true;
        document.getElementById("exchange").innerHTML="ASSEMBLY CODE FOR BLOCK TRANSFER"
        document.getElementById("switch").innerHTML="next"
        document.getElementById("line6").innerHTML="mov @r1,a"
        document.getElementById("line7").innerHTML="inc r0"
        document.getElementById("line8").innerHTML="inc r1"
        document.getElementById("line9").innerHTML="djnz r7 repeat"
        document.getElementById("line10").innerHTML="end"
        div.remove()
        div1.remove()
        div2.remove()
        div3.remove()
        
        if(lineCount !=0)
        {
            document.getElementById(line_no).style.color="black"
            document.getElementById(line_no).style.fontWeight="normal"
        }
        lineCount += 1
        line_no = 'line'+ lineCount

        document.getElementById(line_no).style.color="#8B0000"
        document.getElementById(line_no).style.fontWeight="bold"
        
        if(line_no == 'line2')
        {
            document.getElementById("loc1").innerHTML=source[0];
        }
        else if(line_no=='line3')
        {
        }
        else if(line_no=='line4')
        {
            document.getElementById("PC").innerHTML=counter;
        }
        else if(line_no=='line5')
        {
            
            document.getElementById("AC").innerHTML=source[0];
            if(counter==4){
                document.getElementById("AC").innerHTML=source[1];
            }
            else if(counter==3){
                document.getElementById("AC").innerHTML=source[2];
            }
            else if(counter==2){
                document.getElementById("AC").innerHTML=source[3];
            }
            else if(counter==1){
                document.getElementById("AC").innerHTML=source[4];
            }
        }
        else if(line_no=='line6')
        {
            document.getElementById("loc6").innerHTML=source[0];
            document.getElementById("loc6").style.background="#8B0000";
            document.getElementById("loc6").style.color="white";
            
            if(counter==4){
                document.getElementById("loc7").innerHTML=source[1];
                document.getElementById("loc7").style.background="#8B0000";
                document.getElementById("loc7").style.color="white";
        
            }
            else if(counter==3){
                document.getElementById("loc8").innerHTML=source[2];
                document.getElementById("loc8").style.background="#8B0000";
                document.getElementById("loc8").style.color="white";
            }
            else if(counter==2){
                document.getElementById("loc9").innerHTML=source[3];
                document.getElementById("loc9").style.background="#8B0000";
                document.getElementById("loc9").style.color="white";
            }
            else if(counter==1){
                document.getElementById("loc10").innerHTML=source[4];
                document.getElementById("loc10").style.background="#8B0000";
                document.getElementById("loc10").style.color="white";
            }
        }
        else if(line_no=='line7')
        {
            if(counter==5){
               document.getElementById("loc2").innerHTML=source[1];
            }
            else if(counter==4){
                document.getElementById("loc3").innerHTML=source[2];
            }
            else if(counter==3){
                document.getElementById("loc4").innerHTML=source[3];
            }
            else if(counter==2){
                document.getElementById("loc5").innerHTML=source[4];
            }
        }
        else if(line_no=='line8')
        {
            if(counter==5){
                document.getElementById("loc7").innerHTML="";
            }
            else if(counter==4){
                document.getElementById("loc8").innerHTML="";
            }
            else if(counter==3){
                document.getElementById("loc9").innerHTML="";
            }
             else if(counter==2){
                document.getElementById("loc10").innerHTML="";
             }
        }
        else if(line_no=='line9')
        {
           counter -= 1
            document.getElementById("PC").innerHTML=counter;
            lineCount=4
            if(counter==0){
               lineCount=9
            }
        }
        else if(line_no=='line10')
        {
            alert("Execution completed!!")
            switchBtn.disabled=true
            document.getElementById("AC").innerHTML="";
            document.getElementById("PC").innerHTML="";
        }
    });
    var StartBtn = document.getElementById('Start')
   
    StartBtn.addEventListener("click", () =>{
       
        if(lineCount !=0)
        {
            document.getElementById(line_no).style.color="black"
            document.getElementById(line_no).style.fontWeight="normal"
            cmt.style.visibility="hidden"
        }
        lineCount += 1
        line_no = 'line'+ lineCount
        
        document.getElementById(line_no).style.color="#8B0000"
        document.getElementById(line_no).style.fontWeight="bold"
    
        cmt=document.getElementById(line_no).children[0]
        
        if(line_no == 'line2')
        {
            addComment(cmt, "set memory location in register")
           
            document.getElementById("loc1").innerHTML=source[0];
            
            document.getElementById("border1").innerHTML=source[0];
            document.getElementById("border1").style.background="#8B0000";
            document.getElementById("border1").style.color="white";
        }
        else if(line_no=='line3')
        {
            addComment(cmt, "set memory location in register")
            document.getElementById("loc6").innerHTML=destination[0];
            document.getElementById("border2").innerHTML=destination[0];
            document.getElementById("border2").style.background="#8B0000";
            document.getElementById("border2").style.color="white";
        }
        else if(line_no=='line4')
        {
            addComment(cmt, "set counter to 5")
            document.getElementById("PC").innerHTML=counter;
        }
        else if(line_no=='line5')
        {
            addComment(cmt, "moving from memory block to AC")
            document.getElementById("AC").innerHTML=source[0];
           document.getElementById("border1").style.background="#ffffcc"
           document.getElementById("border1").style.color="white";

            if(counter==4){
                document.getElementById("AC").innerHTML=source[1];
            }
            else if(counter==3){
                document.getElementById("AC").innerHTML=source[2];
            }
            else if(counter==2){
                document.getElementById("AC").innerHTML=source[3];
            }
            else if(counter==1){
                document.getElementById("AC").innerHTML=source[4];
            }
        }
        else if(line_no=='line6')
        {
            addComment(cmt, "moving from accumulator to register")
            document.getElementById("border5").innerHTML=source[0];
            document.getElementById("border5").style.background="#8B0000";
            document.getElementById("border5").style.color="white";

            if(counter==4){
                document.getElementById("border5").innerHTML=source[1];
            }
            else if(counter==3){
                document.getElementById("border5").innerHTML=source[2];
            }
            else if(counter==4){
                document.getElementById("border5").innerHTML=source[2];
            }
            else if(counter==4){
                document.getElementById("border5").innerHTML=source[4];
            }
        }
        else if(line_no=='line7')
        {
            addComment(cmt, "moving from register block to AC ")
            document.getElementById("AC").innerHTML=destination[0];
        
            document.getElementById("border2").style.background="#ffffcc";

            if(counter==4){
                document.getElementById("AC").innerHTML=destination[1];
            }
            else if(counter==3){
                document.getElementById("AC").innerHTML=destination[2];
            }
            else if(counter==4){
                document.getElementById("AC").innerHTML=destination[3];
            }
            else if(counter==4){
                document.getElementById("AC").innerHTML=destination[4];
            }
        }
        else if(line_no=='line8')
        {
            addComment(cmt, "moving from AC to register")
            document.getElementById("loc1").innerHTML=destination[0];
            document.getElementById("loc1").style.background="#8B0000";
            document.getElementById("loc1").style.color="white";

            if(counter==4){
                document.getElementById("loc2").innerHTML=destination[1];
            }
            else if(counter==3){
                document.getElementById("loc3").innerHTML=destination[2];
            }
            else if(counter==2){
                document.getElementById("loc4").innerHTML=destination[3];
            }
            else if(counter==1){
                document.getElementById("loc5").innerHTML=destination[4];
            }
        }
        else if(line_no=='line9')
        {
            addComment(cmt, "moving from register block to AC")
            document.getElementById("AC").innerHTML=source[0];
            document.getElementById("border5").style.color="#ffffcc";
            document.getElementById("border5").style.background="#ffffcc";

            if(counter==4){
                document.getElementById("AC").innerHTML=source[1];
            }
            else if(counter==3){
                document.getElementById("AC").innerHTML=source[2];
            }
            else if(counter==2){
                document.getElementById("AC").innerHTML=source[3];
            }
            else if(counter==1){
                document.getElementById("AC").innerHTML=source[4];
            }
        }
        else if(line_no=='line10')
        {
            addComment(cmt, "moving from AC to register")
            document.getElementById("loc6").innerHTML=source[0];
            document.getElementById("loc6").style.background="#8B0000";
            document.getElementById("loc6").style.color="white";
            
            if(counter==4){
                document.getElementById("loc7").innerHTML=source[1];
            }
            else if(counter==3){
                document.getElementById("loc8").innerHTML=source[2];
            }
            else if(counter==2){
                document.getElementById("loc9").innerHTML=source[3];
            }
            else if(counter==1){
                document.getElementById("loc10").innerHTML=source[4];
            }
        }
        else if(line_no=='line11')
        {
            if(counter==5){
            addComment(cmt, "increment register")
            document.getElementById("loc2").innerHTML=source[1];
            document.getElementById("loc2").style.background="#8B0000";
            document.getElementById("loc2").style.color="white";
            }
            else if(counter==4){
                document.getElementById("loc3").innerHTML=source[2];
                document.getElementById("loc3").style.background="#8B0000";
                document.getElementById("loc3").style.color="white";
            }
            else if(counter==3){
                document.getElementById("loc4").innerHTML=source[3];
                document.getElementById("loc4").style.background="#8B0000";
                document.getElementById("loc4").style.color="white";
            }
            else if(counter==2){
                document.getElementById("loc5").innerHTML=source[4];
                document.getElementById("loc5").style.background="#8B0000";
                document.getElementById("loc5").style.color="white";
            }
           
        }
        else if(line_no=='line12')
        {
            if(counter==5){
            addComment(cmt, "increment register")
            document.getElementById("loc7").innerHTML=destination[1];
            document.getElementById("loc7").style.background="#8B0000";
            document.getElementById("loc7").style.color="white";
            }
            else if(counter==4){
                document.getElementById("loc8").innerHTML=destination[2];
                document.getElementById("loc8").style.background="#8B0000";
                document.getElementById("loc8").style.color="white";
            }
            else if(counter==3){
                document.getElementById("loc9").innerHTML=destination[3];
                document.getElementById("loc9").style.background="#8B0000";
                document.getElementById("loc9").style.color="white";
            }
            else if(counter==2){
                document.getElementById("loc10").innerHTML=destination[4];
                document.getElementById("loc10").style.background="#8B0000";
                document.getElementById("loc10").style.color="white";
            }
        }
        else if(line_no=='line13')
        {
            addComment(cmt, "jump if counter is not zero")
            counter -= 1
            document.getElementById("PC").innerHTML=counter;

            lineCount=4
            
            if(counter==0){
               lineCount=13
            }
        }
        else if(line_no=='line14')
        {
            alert("Execution completed!!")
            StartBtn.disabled=true
            document.getElementById("AC").innerHTML="";
            document.getElementById("PC").innerHTML="";
        }
    })
    function addComment(ele, text){
        ele.style.visibility = "visible"
        ele.innerHTML= text
    }

    var resetBtn = document.getElementById('Reset')
    resetBtn.addEventListener('click',()=>{
        location.reload();
    });
    
    window.onresize=checkwidth
    function checkwidth(){
        var width=window.innerWidth
        var md_8=document.getElementsByClassName('col-md-8')[0]
        if(width<=768){
            md_8.parentElement.style.flexdirection='coloumn'
        }
        else{
            md_8.parentElement.style.flexdirection='row'
        }
    }
    checkwidth()
});