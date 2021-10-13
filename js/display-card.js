const fieldReplacements = {
    "{{Front}}": "FRONT",
    "{{Back}}": "BACK",
    "{{#Icon}}": "",
    "{{/Icon}}": "",
    "{{Icon}}": "code",
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
