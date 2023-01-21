

a=0
function accountopen(){
if ((a/2)==0){
document.getElementById("account").style.height="132px";
a=a+1;
	}
else{
document.getElementById("account").style.height="0px";
a=a-1;
	}
}

function close_sidenav(n){
if (n==0){
document.getElementById("sidenav").style.width="0px"
document.getElementById("sidenav").style.border="none"
document.getElementById("bottom_nav1").style.zIndex="1"
}
else{
document.getElementById("sidenav").style.width="240px"
document.getElementById("sidenav").style.border="1px solid black"
document.getElementById("bottom_nav1").style.zIndex="0"
	}
}

function openwehave(){
document.getElementById("wehave").style.height="235px"
}



backg="p1"
bookmark="pl1"
function color_change(k,m,n){

document.getElementById(bookmark).style.backgroundColor="white";
document.getElementById(bookmark).style.transform="scale(1,1)"
bookmark=k;
document.getElementById(k).style.backgroundColor=m;
document.getElementById(k).style.transform="scale(1.2,1.2)";
document.getElementById("sidenav").style.backgroundColor=m;
document.getElementById("account").style.backgroundColor=m;
document.getElementById(n).style.backgroundAttachment="scroll";
document.getElementById(backg).style.backgroundAttachment="fixed";
backg=n;
document.getElementById("sidenav").style.width="0px";
document.getElementById("sidenav").style.border="none"
document.getElementById("bottom_nav1").style.zIndex="1";
document.getElementById("login").style.backgroundColor=m;
document.getElementById("create_account").style.backgroundColor=m;

if (n=="p2"){
s=document.getElementsByClassName("aboutus3");
for (let an=0;an<6;an++){
s[an].style.animation="height 0.7s linear 0s 1 normal";
		}
	}
	
if (n=="p1" || n=="p3"){
m=m+"00"
}
document.getElementById("header").style.backgroundColor=m;	
}

career=0
function open_career(cdiv){
if (career==0){
document.getElementById(cdiv).style.height="510px"
career=cdiv
	}
else if (career==cdiv){
document.getElementById(cdiv).style.height="0px";
career=0
	}
else{
document.getElementById(career).style.height="0px";
document.getElementById(cdiv).style.height="510px";
career=cdiv
	}
}

popup=0
function open_popup(pop,m){
if (m==1){
document.getElementById("account_popup").style.display="flex";
document.getElementById(pop).style.display="block";
document.getElementById(pop).style.animation="scale 0.35s linear 0s 1 normal"
document.getElementById("account").style.height="0px";
a=a-1
	}
	
else{
document.getElementById("account_popup").style.display="none";
document.getElementById(pop).style.display="none";
document.getElementById(pop).style.animation="";
	}

}

d=0
service=0
m=0
function open_service(k,l){
document.getElementById("service2").style.width="310px";
document.getElementById("service2").style.display="block";
document.getElementById("service3").style.flexDirection="column";
document.getElementById("service4").style.flexDirection="column";
document.getElementById("service3").style.height="260px";
document.getElementById("service4").style.height="160px";
document.getElementById("service4").style.width="100%";
document.getElementById("service5").style.display="block";
document.getElementById("service5").style.width="60%";
x=document.getElementsByClassName("img");
y=document.getElementsByClassName("service_div");

for (let i=0;i<5;i++){
x[i].style.display="none";
y[i].style.height="50px"

}


if (d==0){
document.getElementById(k).style.display="block";
y[l].style.animation="jump 0.2s linear 0s infinite alternate";
document.getElementById(k).style.animation="opac 0.7s linear 0s 1 normal";
m=l;
service=k;
d=d+1
	}

else if (k==service){
document.getElementById("service2").style.width="90%";
document.getElementById("service2").style.display="flex";
document.getElementById("service3").style.flexDirection="row";
document.getElementById("service4").style.flexDirection="row";
document.getElementById("service3").style.height="auto";
document.getElementById("service4").style.height="auto";
document.getElementById("service4").style.width="80%";
document.getElementById("service5").style.display="none";
document.getElementById("service5").style.width="0px";
x=document.getElementsByClassName("img");
y=document.getElementsByClassName("service_div");

for (let j=0;j<5;j++){
x[j].style.display="block";
y[j].style.height="150px";
}

y[l].style.animation="";
m=0;
document.getElementById(k).style.display="none";
document.getElementById(k).style.animation="";
d=0;

	}
	
else{
document.getElementById(k).style.display="block";
document.getElementById(service).style.display="none";
y[l].style.animation="jump 0.2s linear 0s infinite alternate";
y[m].style.animation="";
document.getElementById(k).style.animation="opac 0.5s linear 0s 1 normal";
document.getElementById(service).style.animation="";
m=l
service=k;
	}
	
}



