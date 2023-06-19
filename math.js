//
//

/*select character type*/
/* character-type(select) to type(let) */
/*when type change, value to event*/
let type = document.querySelector('#character-type');
type.addEventListener('change', (event) => { 
    let result = document.querySelector('#result');
    result.textContent = event.target.value;

    /*console.log by character type */
    let typepic = document.getElementById('typepic');

    /*
    //タイプ別キャラ一覧画像の表示に関して
    //srcのアドレスに変数が使えたので簡略したパターン
    typepic.src = ''+result.textContent + '.png';
    */

    /*サーバーの都合上、if(result.textContent)で条件分けしたパターン */
    if(result.textContent=='スポーツ'){
        typepic.src = 'https://dl.dropbox.com/s/oqblmz2s7iwrgar/type-sports.png';
    }
    else if(result.textContent=='インテリ'){
        typepic.src = 'https://dl.dropbox.com/s/8uo2cy7pjo088j2/type-intelligence.png';
    }
    else if(result.textContent=='バラエティ'){
        typepic.src = 'https://dl.dropbox.com/s/wdnkoznmy76pgg3/type-variety.png';
    }
    else{
        typepic.src = '';
    }
});


//select-skill
//function Swrite(){} 選択されたスキルを書き出す。
//Snumber:スキルリストの番号、listnum:選択肢の番号、pass:選択肢のvalue
var i = 1; //選択されたスキルを記述する行の指定に使う
function Scounter(Snumber,listnum,pass){
    Snumber = 'slist'+Snumber; //slist1~slsit4に対応するためSnumberを使用
        console.log('Snumber='+Snumber);
    let Sname = document.getElementById(Snumber); //slistの要素を取得
        console.log('Sname=');
        console.log(Sname);
    let Stext = Sname[listnum].textContent;
        console.log('Stext='+Stext); //選択肢のスキル名の表示 listnumには選択肢の番号が入る
    
    let namewrite = document.getElementById('skill'+i); //スキル名を書き出す。書記位置をずらす
    namewrite.textContent = Stext;

    //スキル名(value)に応じて必要素材を割り出す関数を呼び出す。
    console.log('pass='+pass);
    needElements(pass);
}

//選択されたスキルのvalueに応じて必要なアイテム数を書き出す。
function needElements(Svalue){
    console.log(Svalue);
    if(Svalue==0){ //valueの値に応じてR,G,Bの数を引数に指定
        console.log('value=0、RGB=0,0,0');
        Swriter(0,0,0);
    }
    else if(Svalue==1){
        console.log('value=1、RGB=30,0,0');
        Swriter(30,0,0);
    }
    else if(Svalue==2){
        console.log('RGB=20,10,0');
        Swriter(20,10,0);
    }
    else if(Svalue==3){
        console.log('RGB=10,10,10');
        Swriter(10,10,10);
    }
    else if(Svalue==4){
        console.log('RGB=16,14,0');
        Swriter(16,14,0);
    }
    else if(Svalue==5){
        console.log('RGB=0,30,0');
        Swriter(0,30,0);
    }
    else if(Svalue==6){
        console.log('RGB=10,20,0');
        Swriter(10,20,0);
    }
    else if(Svalue==7){
        console.log('RGB=0,8,6');
        Swriter(0,8,6);
    }
    else if(Svalue==8){
        console.log('RGB=0,16,14');
        Swriter(0,16,14);
    }
    else if(Svalue==9){
        console.log('RGB=6,8,0');
        Swriter(6,8,0);
    }
    else if(Svalue==10){
        console.log('RGB=0,0,30');
        Swriter(0,0,30);
    }
    else if(Svalue==11){
        console.log('RGB=14,0,16');
        Swriter(14,0,16);
    }
    else if(Svalue==12){
        console.log('RGB=0,14,16');
        Swriter(0,14,16);
    }
    else if(Svalue==13){
        console.log('RGB=0,20,0');
        Swriter(0,20,0);
    }
    else if(Svalue==14){
        console.log('RGB=24,0,6');
        Swriter(24,0,6);
    }
    else if(Svalue==15){
        console.log('RGB=14,16,0');
        Swriter(14,16,0);
    }
    else if(Svalue==16){
        console.log('RGB=0,24,6');
        Swriter(0,24,6);
    }
    else if(Svalue==17){
        console.log('RGB=10,0,0');
        Swriter(10,0,0);
    }
    else if(Svalue==18){
        console.log('RGB=0,6,24');
        Swriter(0,6,24);
    }

    function Swriter(R,G,B){
        let itemwrite = document.getElementById('swriter'+i); //スキル名を書き出す
        itemwrite.textContent = '赤'+R+' / 緑'+G+' / 青'+B;
        sumWriter(R,G,B);
    };
}


//Swriter()で書いた個数を清算する
var itemR = [0,0,0,0,0]; //配列の合計をもとめる際に空の値があるとエラーになるため
var itemG = [0,0,0,0,0];
var itemB = [0,0,0,0,0];
function sumWriter(R,G,B){
    //R
    itemR[i-1]=R;
    var rTotal=0;
    for(n=0; n<5; n++){ //forで総和をもとめているが、reduceを使うこともできる
        rTotal += itemR[n];
    };

    //G
    itemG[i-1]=G;
    var gTotal=0;
    for(n=0; n<5; n++){
        gTotal += itemG[n];
    };

    //B
    itemB[i-1]=B;
    var bTotal=0;
    for(n=0; n<5; n++){
        bTotal += itemB[n];
    };

    console.log('rTotal= '+rTotal);
    console.log('gTotal= '+gTotal);
    console.log('bTotal= '+bTotal);
    document.getElementById('itemR').textContent = '赤'+rTotal+' / ';
    document.getElementById('itemG').textContent = '緑'+gTotal+' / ';
    document.getElementById('itemB').textContent = '青'+bTotal;

    i ++; //筆記位置の変更、リセット
    if(i>5){i=1}; 
}


//slist1の記述。リストが変更されたらSwrite(#,#);を呼び出す
var slist1 = document.getElementById('slist1');
    console.log(slist1);
slist1.addEventListener('change', function(event){
    let num = event.target.selectedIndex; //選択肢の番号をnumに入力
        console.log('Index num='+num);
    let pass = event.target.value;
        console.log('value='+pass);
    Scounter(1,num,pass); //skill1のnumが選択されたので(1,選択肢の番号,選択肢のvalue)
});

//以下slist2~5の記述
var slist2 = document.getElementById('slist2');
    console.log(slist2);
slist2.addEventListener('change', function(event){
    let num = event.target.selectedIndex;
        console.log('Index num='+num);
    let pass = event.target.value;
        console.log('value='+pass);
    Scounter(2,num,pass);
});

var slist3 = document.getElementById('slist3');
    console.log(slist3);
slist3.addEventListener('change', function(event){
    let num = event.target.selectedIndex;
        console.log('Index num='+num);
    let pass = event.target.value;
        console.log('value='+pass);
    Scounter(3,num,pass);
});

var slist4 = document.getElementById('slist4');
    console.log(slist4);
slist4.addEventListener('change', function(event){
    let num = event.target.selectedIndex;
        console.log('Index num='+num);
    let pass = event.target.value;
        console.log('value='+pass);
    Scounter(4,num,pass);
});