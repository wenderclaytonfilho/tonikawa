episodes = [
	`<iframe src="https://drive.google.com/file/d/1mw4D2bPKksU3bmHcFkNDURi4mRVS-98w/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://drive.google.com/file/d/1IACOYFSZD0pp9vZNDl8oTFnkHuxv8MwA/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://drive.google.com/file/d/1BFGxssbA5DvpBixCpMClik7On-ZgylFY/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://drive.google.com/file/d/1mak4TR5gNPMGRRKXXzSP_aZOYaxjXrMc/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://drive.google.com/file/d/1vtFTHMpo7xC-zmrt3y3XbmpIr6NAJnj_/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://drive.google.com/file/d/1tXS9hWKINbmgZMltKp18rFBic0S4Xxi0/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://drive.google.com/file/d/1gX8Cm8yx_god2oDqM7Ickh3NMIWR5f6l/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://drive.google.com/file/d/1U7K43VRcolZgwK8x6yu_MIHLSHKFFPVc/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://drive.google.com/file/d/1U7K43VRcolZgwK8x6yu_MIHLSHKFFPVc/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://drive.google.com/file/d/1upIQzNEpNnP33_aTpfC7c_3m7NCAPfCY/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://drive.google.com/file/d/1teYMZPhC_Ge2o51hcjjxB_TCUac5DC1K/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://drive.google.com/file/d/1Id2J_-JHyT28GYOli_3E-D7jea_hlThY/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://rr1---sn-voxuxaxjvh-gxjl.googlevideo.com/videoplayback?expire=1665048977&ei=ETE-Y7bNFfuAy_sP0oe6-A0&ip=138.99.153.31&id=5108f07b716435b8&itag=22&source=blogger&mh=2I&mm=31&mn=sn-voxuxaxjvh-gxjl&ms=au&mv=m&mvi=1&pcm2cms=yes&pl=24&susc=bl&eaua=59teFSXwgbE&mime=video/mp4&vprv=1&dur=1425.287&lmt=1608922115252542&mt=1665019982&txp=1311224&sparams=expire,ei,ip,id,itag,source,susc,eaua,mime,vprv,dur,lmt&sig=AOq0QJ8wRAIgeGWwNr7lYLHIPfEkpO9AAGhKUMd3ddz-2pKhOpjk06sCIEN4_cphgHhmTNtqJJYYPu56DKVfETC7N-Ad9--WXwsO&lsparams=mh,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRAIgFT-S-HNAggm7Bl2EMKuHtdCXUKCXclGwOCG_jY3FXB0CIAoEASt9CZb7YxIja8CyzXG5elV1Un8S9uY1wvNC5BUY&cpn=FxJ8uKkh3Q0Vok23&c=WEB_EMBEDDED_PLAYER&cver=1.20221004.01.00" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`


];

var player = document.getElementById("player");

function redirect(episode){
	switch(episode){
		case 0:
			player.innerHTML=episodes[0];
			break;
		case 1:
			player.innerHTML=episodes[1];
			break;
		case 2:
			player.innerHTML=episodes[2];
			break;
		case 3:
			player.innerHTML=episodes[3];
			break;
		case 4:
			player.innerHTML = episodes[4];
			break;
		case 5:
			player.innerHTML = episodes[5];
			break;
		case 6:
			player.innerHTML = episodes[6];
			break;
		case 7:
			player.innerHTML=episodes[7];
			break;
		case 8:
			player.innerHTML=episodes[8];
			break;
		case 9:
			player.innerHTML=episodes[9];
			break;
		case 10:
			player.innerHTML=episodes[10];
			break;
		case 11:
			player.innerHTML=episodes[11];
			break;
		case 12:
			player.innerHTML=episodes[12];
			break;
	}
}

function unavailable(){
	window.alert("Episódio indisponível!");
}