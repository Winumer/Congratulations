(function(){
  var L="АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЮЯ".split(""),f=document.getElementById("fl");
  for(var i=0;i<22;i++){var s=document.createElement("span");s.textContent=L[Math.floor(Math.random()*L.length)];
    s.style.left=Math.random()*100+"%";s.style.fontSize=(24+Math.random()*40)+"px";
    s.style.animationDuration=(10+Math.random()*12)+"s";s.style.animationDelay=(-Math.random()*20)+"s";f.appendChild(s);}
  var m=document.getElementById("m");
  function boom(){var e=["🎉","✨","🌸","💛","Р","Ш","Л","🎈","⭐"];
    for(var i=0;i<36;i++){(function(){var c=document.createElement("div");c.className="cf";
      c.textContent=e[Math.floor(Math.random()*e.length)];c.style.left=Math.random()*100+"vw";
      c.style.animationDelay=(Math.random()*.8)+"s";document.body.appendChild(c);
      setTimeout(function(){c.remove()},4200);})();}}
  document.getElementById("env").onclick=function(){m.classList.add("open");boom();};
  document.getElementById("cf").onclick=boom;
})();
