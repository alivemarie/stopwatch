(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,c){"use strict";c.r(t);c(16),c(19);var n=c(23),i=c(13),u=c(20),b=c(22),o=c(14),r=c(21),s=Object(n.a)(1e3),a=document.getElementById("timer"),p=!1,m=0;s.subscribe((function(e){p&&(m++,a.innerHTML=Math.floor(m/3600)+":"+Math.floor(m/60)+":"+m%60)}));var l=Object(i.a)(document.getElementById("wait"),"click"),f=l.pipe(Object(u.a)(300));l.pipe(Object(b.a)(f),Object(o.a)((function(e){return e.length})),Object(r.a)((function(e){return 2===e}))).subscribe((function(){p=!1})),Object(i.a)(document.getElementById("start"),"click").subscribe((function(e){p=!0})),Object(i.a)(document.getElementById("stop"),"click").subscribe((function(e){p=!1,m=0,a.innerHTML="0:0:00"})),Object(i.a)(document.getElementById("reset"),"click").subscribe((function(e){p=!1,m=0,a.innerHTML="0:0:00"}))},19:function(e,t,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.fc7c8d84.chunk.js.map