function move(e,t,r,l){clearInterval(e[t+"Timer"]),e[t+"Timer"]=setInterval(function(){if("opacity"==t)var a=Math.round(100*parseFloat(getStyle(e,t)));else var a=parseInt(getStyle(e,t));if(a===r)return clearInterval(e[t+"Timer"]),void(l&&l());var n=r-a,i=n>0?Math.ceil(n/10):Math.floor(n/10);"opacity"==t?(e.style[t]=(a+i)/100,e.style.filter="alpha(opacity="+(a+i)+")"):e.style[t]=a+i+"px"},30)}function getStyle(e,t){return e.currentStyle?e.currentStyle[t]:getComputedStyle(e)[t]}