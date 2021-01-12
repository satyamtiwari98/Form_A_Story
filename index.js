function sendData() {

    let animal1name = document.getElementById("animal1name").value;
    localStorage.setItem("animal1name", animal1name);


    let animal2name = document.getElementById("animal2name").value;
    localStorage.setItem("animal2name", animal2name);


    let animal3name = document.getElementById("animal3name").value;
    localStorage.setItem("animal3name", animal3name);


    let adjective = document.getElementById("adjective").value;
    localStorage.setItem("adjective", adjective);


    let verb = document.getElementById("verb").value;
    localStorage.setItem("verb", verb);


    let n1 = document.getElementById("requiredNumber").value;
    localStorage.setItem("n1", n1);


    let speed = document.getElementById("relativeSpeed").value;
    localStorage.setItem("speed", speed);


    let Quote = document.getElementById("motivationalQuote").value;
    localStorage.setItem("Quote", Quote);


    let message = document.getElementById("message").value;
    localStorage.setItem("message", message);


    let YesNo;
    if (document.getElementById("yes").checked) {
        YesNo = "Yes";
        localStorage.setItem("YesNo", YesNo);
    } else if (document.getElementById("no").checked) {
        YesNo = "No";
        localStorage.setItem("YesNo", YesNo);
    }

}


function storyFunction() {

    const title = "The <b> " + localStorage.getItem("animal1name") + " </b> And The <b> " + localStorage.getItem("animal2name") + "</b>";

    document.getElementById("title").innerHTML = title;


    const myStory = 'A <b>' + localStorage.getItem("animal1name") + '</b> was making fun of the <b>' + localStorage.getItem("animal2name") + '</b> one day for being so slow. <br><br> "Do you ever get anywhere?" he asked with a mocking laugh.<br><br><b>' + localStorage.getItem("YesNo") + '</b>, replied the <b> ' + localStorage.getItem("animal2name") + '</b> "but I get there  <b>' + localStorage.getItem("speed") + '</b>  than you think. I\'ll run you a race prove it."<br><br> The <b>' + localStorage.getItem("animal1name") + '</b> was much <b>' + localStorage.getItem("adjective") + '</b> at the idea of running a race with the <b>' + localStorage.getItem("animal2name") + '</b>. but for the fun of the thing he agreed. So the <b>' + localStorage.getItem("animal3name") + '</b>. who had consented to act as judge, marked the distance yelled, "<b>' + localStorage.getItem("Quote") + '</b>". <br><br>The <b>' + localStorage.getItem("animal1name") + '</b> was soon far out of sight,and to make the <b>' + localStorage.getItem("animal2name") + '</b> feel very deeply how rediculous it was for him to try a race with a <b>' + localStorage.getItem("animal1name") + '</b>. he went off the course to practice <b>' + localStorage.getItem("verb") + '</b> for <b>' + localStorage.getItem("n1") + '</b> hours until the <b>' + localStorage.getItem("animal2name") + '</b> should catch up.<br><br>The <b>' + localStorage.getItem("animal2name") + '</b> meanwhile kept going slowly but steadily. and, after a time, passed the place where the <b>' + localStorage.getItem("animal1name") + '</b> was <b>' + localStorage.getItem("verb") + '</b> .The <b>' + localStorage.getItem("animal1name") + '</b> was so caught up in  <b>' + localStorage.getItem("verb") + '</b> ; and when at last he did stop, the  <b>' + localStorage.getItem("animal2name") + '</b>  was near the goal.The  <b>' + localStorage.getItem("animal1name") + '</b>  now ran his swiftesy, but he could not overtake the  <b>' + localStorage.getItem("animal2name") + '</b>  in time.';

    document.getElementById("story").innerHTML = myStory;


    const moral = 'Moral of the Story :- "<b>' + localStorage.getItem("message") + '</b>"';
    document.getElementById("moral").innerHTML = moral;


}



