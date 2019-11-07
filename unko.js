var t=document.getElementById('passing');
//１つ目のボタンの名前
var aho=document.getElementById('aho');
//写真の名前
firstClick=true;
t.addEventListener('click',function(){if(firstClick){const pW=prompt('この画像の薬は？','');
if(pW==='セフジトレンピボキシル'){alert('正解');
document.aho.src='img/20191106221009.png';
aho.style.height='400px';
aho.style.width='600px';
//動作を早くするためにpng画像を使う(jpgより早い)
firstClick=false;
//正解したらファーストクリックが無効
}
else{alert('違うよー');};
//間違えたら振り出しに戻る
};
},false);
//１つ目のボタン(正解したらチェンジ！)
var t2=document.getElementById('passing2');
//2つ目のボタンの名前
t2.addEventListener('click',function(){
firstClick=true;
//元に戻して振り出しに戻る
document.aho.src="img/20191106220049.png";
aho.style.height='800px';
aho.style.width='500px';
},false);
//２つ目のボタン(元に戻す)
//家家家々家々遺影家々イエイエエイ
