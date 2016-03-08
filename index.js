document.addEventListener("readystatechange",function()
{
	if(document.readyState=="complete")
	{
		//audio对象的属性方法和事件
		var audio=document.querySelector("audio");
		var playbtn=document.querySelector("#play");
		var vol=document.querySelector("#vol");
		var volposition=document.querySelector("#vol-position");
		var jingyin=document.querySelector("#jingyin");
		var jindu=document.querySelector("#jindu");
		var jinduposition=document.querySelector("#jindu-position");
		var tips=document.querySelector(".tips");
		var yinyueku=[{name:"非你莫属",src:"./music/1.mp3",geshou:"林依晨",duration:"4:43"},{name:"可惜没如果",src:"./music/2.mp3",geshou:"林俊杰",duration:"4:58"},{name:"远走高飞",src:"./music/3.mp3",geshou:"林忆莲",duration:"3:42"},{name:"Rain Man",src:"./music/Akihide - Rain Man.mp3",geshou:"Akihide",duration:"5:45"},{name:"All I Want",src:"./music/Kodaline - All I Want.mp3",geshou:"Kodaline",duration:"5:06"},{name:"样(Young)",src:"./music/Tfboys - 样(Young).mp3",geshou:"Tfboys",duration:"4:24"},{name:"苍浪剑赋",src:"./music/苍浪剑赋.mp3",geshou:"仙剑奇侠传",duration:"1:21"},{name:"蝶恋",src:"./music/蝶恋.mp3",geshou:"仙剑奇侠传",duration:"1:51"},{name:"We Are! - ウィ ア",src:"./music/东方神起 - We Are! - ウィ ア.mp3",geshou:"东方神起",duration:"3:37"},{name:"凤鸣曲-命起涟漪",src:"./music/凤鸣曲-命起涟漪.mp3",geshou:"仙剑奇侠传",duration:"1:27"},{name:"浮生狱",src:"./music/浮生狱.mp3",geshou:"仙剑奇侠传",duration:"2:51"},{name:"回梦游仙",src:"./music/回梦游仙.mp3",geshou:"仙剑奇侠传",duration:"2:06"},{name:"龙影随风",src:"./music/龙影随风.mp3",geshou:"仙剑奇侠传",duration:"2:42"},{name:"泣心谱",src:"./music/泣心谱.mp3",geshou:"仙剑奇侠传",duration:"2:50"},{name:"群山飞鹤",src:"./music/群山飞鹤.mp3",geshou:"仙剑奇侠传",duration:"2:36"},{name:"水龙吟-余情幽梦",src:"./music/水龙吟-余情幽梦.mp3",geshou:"仙剑奇侠传",duration:"2:28"},{name:"云谷鹤峰",src:"./music/云谷鹤峰.mp3",geshou:"仙剑奇侠传",duration:"2:22"},{name:"织梦行云",src:"./music/织梦行云.mp3",geshou:"仙剑奇侠传",duration:"2:21"}];
		var currentsongindex;
		var LIEBIAO=3;
		var SHUNXU=2;
		var DANQU=1;
		var SUIJI=4;
		var currentbofangmoshi=LIEBIAO;
		//事件
		btnplay.onclick=function()//暂停和播放
		{	
			if(currentsongindex==undefined){return};
			if(audio.paused)
			{
				audio.play();
			}
			else
			{
				audio.pause();
			}
		}
		audio.onplay=function()
		{
			//playbtn.style.background="green";
			btnplay.className="pause_bt"
		}
		audio.onpause=function()
		{	
			btnplay.className="play_bt"
			//playbtn.style.background="yellow";
		}
		spanvolume.onclick=function(ev)//控制音量
		{	
			var v=ev.offsetX/spanvolume.offsetWidth;
			audio.volume=v;
		}
		audio.onvolumechange=function()
		{	
			if(audio.volume===0)
			{
				spanmute.className="volume_mute"
			}else
			{
				spanmute.className="volume_icon";
			}
				var r=audio.volume*100;
				spanvolumeop.style.left=r+"%";
				spanvolumebar.style.width=r+"%";
				
				
		}
		spanvolumeop.onclick=function(ev)
		{
			ev.stopPropagation();//阻止事件冒泡		
		}
		
		/*spanvolumeop.onmousedown=function()//拖动
		{	
			
			spanvolumeop.onmousemove=function(ev)
			{
				var x=ev.offsetX;
				var xx=ev.clientX;
				console.log(x);
				var xxx=x/spanvolume.offsetWidth*100;
				//spanvolumeop.style.left=xxx+"%";
				//spanvolumebar.style.width=xxx+"%";
			}
		}	
		 spanvolumeop.onmouseup=function()
		 {
		 	spanvolumeop.onmousemove=null;
		 }
		*/
		spanmute.onclick=(function()//静音事件
		{
			var oldvolume;
			return function()
			{
				if(audio.volume!=0)
				{
					oldvolume=audio.volume;
					audio.volume=0;
				}
				else
				{
					audio.volume=oldvolume;
				}
			}
		})()
		var playerbar=document.querySelector(".player_bar")
		playerbar.onclick=function(ev)//播放进度的处理
		{	
			var j=ev.offsetX/playerbar.offsetWidth*audio.duration;
			audio.currentTime=j;
		}
		
		spanprogress_op.onclick=function(ev)
		{
			ev.stopPropagation();
		}
		var zhuanhuan=function(time)//对时间的转换
		{
			var x=parseInt(time/60);
			var y=parseInt(time%60);
			if(y<10)
			{
				y="0"+y;
			}
			if(x<10)
			{
				x="0"+x;
			}
			return (x+":"+y)
		}
		var timeshow=document.querySelector(".time_show");
		playerbar.onmouseover=function(ev)
		{
			timeshow.style.display="block";
			timeshow.style.left=ev.offsetX-timeshow.offsetWidth/2+"px";
			playerbar.onmousemove=function(ev)
			{
				timeshow.style.left=ev.offsetX-timeshow.offsetWidth/2+"px";
				var shijian=ev.offsetX/playerbar.offsetWidth*audio.duration;				
				time_show.innerHTML=zhuanhuan(shijian)
			}
		}
		playerbar.onmouseout=function()
		{
			timeshow.style.display="none"
		}
		spanprogress_op.onmouseover=function(ev)
		{
			ev.stopPropagation();
		}
		//var qiege=document.querySelector("#qiege");//切歌按钮
		// qiege.onclick=function()
		// {
		// 	audio.src="./music/2.mp3";
		// 	audio.play();
		// }
		

		var createList=function()
		{
			var el="";
			for(var i=0;i<yinyueku.length;i++)
			{	
				var ac=(i==currentsongindex)?"a":"";
				el+='<li data-index='+i+' class='+ac+'><strong class="music_name">'+yinyueku[i].name+'</strong><strong class="singer_name">'+yinyueku[i].geshou+'</strong><strong class="play_time">'+yinyueku[i].duration+'</strong><div class="list_cp"><strong class="btn_like" title="喜欢" name="myfav_000hntd91kI1kJ" mid="000hntd91kI1kJ"><span>我喜欢</span></strong><strong class="btn_share" title="分享"><span>分享</span></strong><strong class="btn_fav" title="收藏到歌单"><span>收藏</span></strong><strong class="btn_del" title="从列表中删除"><span>删除</span></strong></div></li>'
			}
			spansongnum1.innerHTML='<span>'+yinyueku.length+'</span>';
			divsonglist.firstElementChild.innerHTML=el;
			var lis=divsonglist.firstElementChild.children;
			for(var i=0;i<lis.length;i++)
			{	
				lis[i].index=i;
				lis[i].onclick=function()//单击歌曲放歌
				{	
					audio.src=yinyueku[this.index].src;
					audio.play();
					for(var j=0;j<lis.length;j++)
					{
						lis[j].classList.remove("a");
					}
					this.classList.add("a");
					document.querySelector(".music_op").style.display="block";
					currentsongindex=this.index;
					onsongchange();
				}
				lis[i].onmouseover=function()
				{
					lis[this.index].classList.add("play_hover");
				}
				lis[i].onmouseout=function()
				{
					lis[this.index].classList.remove("play_hover");
				}
			}
			var btndel=document.querySelectorAll(".btn_del");//单个删除
			for(var i=0;i<btndel.length;i++)
			{	
				btndel[i].index=i;
				btndel[i].onclick=function(ev)
				{	
					ev.stopPropagation();
					var newarr=[];
					for(var j=0;j<yinyueku.length;j++)
					{	
						if(yinyueku[j]!=yinyueku[this.index])
						{
							newarr.push(yinyueku[j])
						}
					}
					yinyueku=newarr;

					
					if(this.index==currentsongindex)
					{
						if(currentsongindex==yinyueku.length)
						{
							audio.src="";
							uireset();
						}
						else 
						{
							audio.src=yinyueku[currentsongindex].src;
							audio.play();
							onsongchange()
						}
					}
					if(this.index<currentsongindex)
					{
						currentsongindex-=1;
					}
					createList();

				}
			}
		}
		createList();
		var lis=divsonglist.firstElementChild.children;
		clear_list.onclick=function()//清空列表
		{
			yinyueku=[];
			createList();
			uireset();
		}
		var uireset=function()
		{
			document.querySelector(".music_name").innerHTML='<span>'+'听我想听的歌'+'</span>';
			document.querySelector(".singer_name").innerHTML='<span>'+'QQ音乐'+'</span>';
			document.querySelector(".play_date").innerHTML='<span></span>';
			document.querySelector(".music_op").style.display="none";
			audio.src="";
			btnplay.className="play_bt";
			spanprogress_op.style.left="0%";
			spanplaybar.style.width="0%";
		}

		var onsongchange=function()//歌曲改变时的处理
		{
			for(var i=0;i<lis.length;i++)
			{
				lis[i].classList.remove("a")
			}
			lis[currentsongindex].className="a";
			var cu=yinyueku[currentsongindex];
			document.querySelector(".music_name").innerHTML=cu.name;
			document.querySelector(".singer_name").innerHTML=cu.geshou;
			document.querySelector(".play_date").innerHTML=cu.duration;
		}
		var randomsong=function()//随机模式
		{	var oldcurrentindex=currentsongindex;
			currentsongindex=Math.floor(Math.random()*yinyueku.length);
			while(currentsongindex==oldcurrentindex)
			{
				currentsongindex=Math.floor(Math.random()*yinyueku.length);
			}
			audio.src=yinyueku[currentsongindex].src;
			audio.play();
			onsongchange();
		}
		var nextsong=function()//切歌下一首
		{	
			if(currentsongindex==undefined){return};
			if(currentbofangmoshi==SUIJI)
			{
				randomsong();
				return
			}
			currentsongindex+=1;
			currentsongindex=(currentsongindex==yinyueku.length)?0:currentsongindex;
			audio.src=yinyueku[currentsongindex].src;
			audio.play();
			onsongchange();
		}
		var prevsong=function()//切歌上一首
		{	
			if(currentsongindex==undefined){return};
			if(currentbofangmoshi==SUIJI)
			{
				randomsong();
				return
			}
			currentsongindex-=1;
			currentsongindex=(currentsongindex==-1)?(yinyueku.length-1):currentsongindex;
			audio.src=yinyueku[currentsongindex].src;
			audio.play();
			onsongchange();
		}
		
		document.querySelector(".next_bt").onclick=nextsong;
		document.querySelector(".prev_bt").onclick=prevsong;
		
		btnPlayway.onclick=function()//切换播放模式
		{
			divselect.style.display="block";
		}
		// divselect.onclick=function(ev)
		// {	
		// 	var obj=ev.target||ev.srcElement;
		// 	divselect.style.display="none";
		// 	var w=obj.className;
		// 	btnPlayway.className=w;
		// }

		setbofangmoshi=function(num)
		{
			currentbofangmoshi=num;
			divselect.style.display="none";
			var data={1:"cycle_single_bt",2:"ordered_bt",3:"cycle_bt",4:"unordered_bt"};
			btnPlayway.className=data[num];
		}

		audio.ontimeupdate=function()
		{	
			var l=audio.currentTime/audio.duration*100;
			spanprogress_op.style.left=l+"%";
			spanplaybar.style.width=l+1+"%";
			if(audio.ended)
			{	
				if(currentbofangmoshi==DANQU)
				{
					audio.play()
				}
				else if(currentbofangmoshi==LIEBIAO)
				{
					nextsong()
				}
				else if(currentbofangmoshi==SUIJI)
				{
					randomsong()
				}
				else if(currentbofangmoshi==SHUNXU)
				{
					if(currentsongindex!=yinyueku.length-1)
					{
						nextsong()
					}
				}
				
			}
		}

		var flag=true;
		var flag2=true;
		spansongnum1.onclick=btnclose.onclick=function()
		{	
			if(flag)
			{
				divplayframe.style.display="none";
				flag=false;
			}
			else
			{
				divplayframe.style.display="block";
				flag=true
			}
			
		}
		btnfold.onclick=function()
		{	
			divplayframe.style.display="none";
			if(flag2)
			{
				divplayer.style.left="-540px";
				divplayer.className="m_player mini_version m_player_folded m_player_playing";
				flag2=false;
			}
			else
			{
				divplayer.style.left="0px";
				divplayer.className="m_player mini_version";
				flag2=true;
				flag=false
			}
			
		}
		//这是一个虚假的例子，添加事件，让两个操作（数据逻辑和ui）分开
		// var obj={a:1,b:2}
		// el.onclick=function()
		// {
		// 	obj.a=4
		// }
		// obj.onAchange=function()
		// {
		// 	div.style.height=16*this.a+"px"
		// }


		//属性
		//src 歌曲的地址 改掉src会去加载另外一首歌
		//paused 布尔值 如果audio处于暂停状态 true
		//ended 布尔值 如果audio播放完毕 true
		//currentTime 歌曲的播放进度
		//duration    歌曲的总播放时长
		//volume 设置音量
		//paused
		//ended
		//方法
		//play() pause()
		//事件
		//ontimeupdate     onplay    onpause   onvolumechange
	}
},false)