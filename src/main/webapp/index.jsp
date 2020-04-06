<html>
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="async.js" ></script>
</head>
<body onload="setInterval('startRequest()' ,5000)">
    <div  class="container">
        <h4>first task</h4>
        <FORM method="POST" name="ajax" action="">
            <input type="button" value="Submit" onclick="submitForm();">
            <input type="text" value="" name="dyn">
        </FORM>
    </div>
    <div class="container">
        <h4>second task</h4>
        <FORM name="ajax2" action="">
            <label>username: </label>
            <input type="text" id="theName" value="" size="20" onblur="submitSecondForm();">
            <label id="status"></label>
            <br>
            <label>password:</label><input type="password" id="pass" value="" size="20">
            <br>
            <input type="submit" value="login">
        </FORM>
    </div>
    <div class=" container">
        <h4>third task</h4>
        <div id="results">
        </div>
    </div>
</body>
</html>
