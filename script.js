var result = document.getElementById('Result');
var button = document.getElementById('three');
var inp = document.getElementById('input');
var fe = 0, se = 1 ,l,n;
var out = '0 ' + '1 ' + '';

button.addEventListener('click',function(event){
        out = '0 ' + '1 ' + '';
        if(inp.value < 1){
            alert('Not valid, enter number from 1 to 99');
        }
        else {
            l = inp.value;
            for(i = 0; i<=l-3; i++){
                 n = fe + se;
                 out += n + ' ';
                 fe = se;
                 se = n; 
                }
        }
    
        result.innerHTML = out;
        fe = 0; se = 1; n = 0;
});









