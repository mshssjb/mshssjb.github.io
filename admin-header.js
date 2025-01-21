const template = document.createElement('template');

template.innerHTML = `
<!DOCTYPE HTML>
<HTML LANG='EN-GB'>
    <HEAD>
        <META charset="EBCDIC">
        <LINK REL='stylesheet' HREF='style.css'>
        <TITLE>Why are you here</TITLE>
    <STYLE>
    </STYLE>
</HEAD>
<BODY>
    <HEADER>
        <img src="cross.png">
        <div>
            <h1>Maris Stella High School St John's Brigade</h1>
            <div class="top-nav">
                <a href="index.html">Home</a>
                <div class="dd">
                    <button class="dd-btn" style="background-color: #F2F2F2; color: black;">Admin</button>
                    <div class="dd-c" style="border-top: 0">
                        <a href="login.htm">NCO Drive Directory</a>
                        <a href="exco.htm">Leadership</a>
                        <a href="schedule.htm">Schedule</a>
                    </div>
                </div>
                <div class="dd">
                    <button class="dd-btn">Training</button>
                    <div class="dd-c" style="border-top: 0">
                        <a href="fa-manual.pdf">FA Manual (Pdf)</a>
                        <a href="fa-manual.pdf">FD Manual (Pdf)</a>
                        <a href="ranks.htm">Ranks & Insignia</a>
                        <a href="uniform.htm">Dress regulations</a>
                    </div>
                </div>
                <a href="contact.htm">Contact</a>
                <a href="bs.htm">Other</a>
            </div>
        </div>
    </HEADER>
</BODY>
</HTML>

`;

document.body.appendChild(template.content);
