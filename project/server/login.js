document.getElementById("login").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(username);
    console.log(password);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8083/peoples");
    xhr.setRequestHeader("Content-Type" , "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin" , "*");

    xhr.onreadystatechange = () => {
      if(xhr.readyState == 4 && xhr.status == 200)
      {
        res=JSON.parse(xhr.responseText)
        console.log(res);
        for(let i=0;i<res.length;i++)
        {
            if (res[i].username==username && res[i].password==password) 
            {

                
                 window.location.href="http://localhost:5500/index.html";
                
            }
            if(res[i].username!=username && res[i].password!=password)
            {
                document.getElementById('message').innerHTML="incorrect details";

                
            }
        }
      }
    }

    xhr.send();
  })