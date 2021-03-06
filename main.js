var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    var queryData= url.parse(_url, true).query;
    var title = queryData.id;

    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);   
    fs.readFile('data/${queryData.id}', 'utf8', function(err, data){
    var description = data;
    var template =`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>
    <body> 
        <h1><a href="file:///C:/Users/Admin/Desktop/6.28%20node%20js/index.html">${title}</a></h1>
        <ul>
            <li><a href="file:///C:/Users/Admin/Desktop/%EC%83%88%20%ED%8F%B4%EB%8D%94%20(3)/1.html">English</a></li>
            <li><a href="file:///C:/Users/Admin/Desktop/%EC%83%88%20%ED%8F%B4%EB%8D%94%20(3)/2.html">Korean</a></li>
            <li><a href="file:///C:/Users/Admin/Desktop/6.28%20node%20js/3.html">Chinese</a></li>
        </ul>
        <h2>English</h2>
        <p>
    원어 발음은 다들 알다시
    영어(英語, English)는 영국의 잉글랜드(England) 지방에서 기원한 게르만어파 언어이다. '영어'나 'English'나 둘 다 '잉글랜드어'라는 뜻이다. 잉글랜드의 옛날 한자 음차 표현이 '영길리(英吉利)'고, '영길리어'를 줄여 불러서 '영어'가 되었다. 중국어에서도 영국과 영어를 英国, 英语 라고 표기하며, 각각 yīngguó(잉궈), yīngyǔ(잉위)로 발음된다.피 잉글리시 정도로 표현되고, 위에서 잠깐 나온 것처럼 국가 원어명+어(語) 식 조어법으로는 잉글랜드어 라는 명칭이 만들어지지만, 한국에서는 이렇게 표기하는 경우보다 한자로 음차하는 과정을 거쳐 만들어진 영어라는 표현이 압도적으로 많이 쓰이는 특이한 모습을 보인다. 영어보다는 덜하지만 한자 음차식 표현으로 비교적 많이 통용되는 언어로는 흔히 불어라고 부르는 프랑스어와 노어라 부르는 러시아어가 있다.
    오늘날 영국과 미국을 필두로 전 세계 어디에서나 폭넓게 쓰이고 있는 링구아 프랑카(lingua franca)로, 가장 영향력이 큰 언어이다. 모국어 화자 수에서 부동의 1위인 중국어나 영어 다음으로 화자 수가 많은 스페인어에 비해 영어의 모국어 화자 수는 적지만 통용 가능 지역은 영어가 이들보다 훨씬 넓다. 중국어는 중국이나 대만, 홍콩, 싱가포르 등 중국계 혹은 화교가 많이 사는 지역에서만 한정적으로 쓰이고, 스페인어는 스페인과 중남미에 한정되어 있기 때문이다. 심지어, 홍콩이나 싱가포르나 대만이나 인도나 멕시코는 제2언어가 '영어'라고 볼 수 있다.
    이렇게 사용 범위가 넓은 이유는 영어를 주로 쓰는 영국과 미국 때문이다. 영국은 대영제국의 위세로 한 때 식민지의 영역이 넓었고 제2차 세계 대전 전까지 최강 패권국가였으며, 제2차세계대전 후부터 오늘날에는 초강대국이자 최강 패권국가인 미국의 영향력으로 전 세계에 영어의 영향력이 지속적으로 퍼지고 있다. 따라서 사실상 세계 공용어, 국제 표준 언어나 다름없는 언어다.
        </p>
    </body>
    </html>`;

    response.end(template);
    });
       // response.end(fs.readFileSync(__dirname + url));
    //  a tag 안에  바꿔서  가게만든다.
app.listen(3000);
// boolean datatype 제3 의 추상적인 데이터 
// boolean 활용 연산자 (비교연산자)
// conditional statement 