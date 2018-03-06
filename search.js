function SendRequest()
{
    var word = document.getElementById("Search").value;
    //console.log(word);
    var res = document.getElementById("Result");
    var url='https://search.paytm.com/suggest?s='+word;
    $.get(url,display,"jsonp")
    function display(data){
       //console.log(data);
       for(var i=0;i<data.keywords.length;i++){
            //console.log(data.keywords.length)
            res.innerHTML = (data.keywords.map(function (keyword) { return keyword.text}).join('\n'));
        }
    }
}