const fieldReplacements = {
    "{{Front}}": "This is the front",
    "{{Back}}": "This is the back",
    "{{Icon}}": "code",
    "{{FrontSide}}": "",
    "{{#Icon}}": "",
    "{{/Icon}}": "",
};

function replaceString(str) {
    str = str.replace(
        new RegExp(
            Object.keys(fieldReplacements)
                .map(key => key.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'))
                .join('|'),
            'g'
        ),
        match => fieldReplacements[match]
    );
    return str;
}

<!--  Display Card  -->
(() => {
    const includes = document.getElementsByTagName('include');
    [].forEach.call(includes, i => {
        let filePath = i.getAttribute('src');
        fetch(filePath).then(file => {
            file.text().then(content => {
                content = replaceString(content);
                i.insertAdjacentHTML('afterend', content);
                i.remove();
            });
        });
    })
})();
