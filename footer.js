const template2 = document.createElement('template');

template.innerHTML = `
<!DOCTYPE HTML>
<HTML LANG="EN-GB">
    <HEAD>
        <META charset="UTF-8">
        <LINK REL='stylesheet' HREF='style.css'>
        <TITLE>Why are you here</TITLE>
    </HEAD>
    <BODY>
    <footer>
        <a href="#top">Back to the top</a>
        <a href="index.html">Main Page</a>
        <a href="login.htm">NCO Drive</a>
        <a href="exco.htm">Leadership</a>
        <a href="contact.htm">Contact</a>
    <div class="credits">© Maris Stella High School St John's Brigade (<a href="MAILTO:cjz-cjz@hotmail.com" style="margin:0; padding:0"><i>Webmaster</i></a>)</div>
    </footer>
    </BODY>
</HTML>

`;

document.body.appendChild(template2.content);