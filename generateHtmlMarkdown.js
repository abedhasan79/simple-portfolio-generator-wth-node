//markdown of the html file to be generated
function generateHtmlMarkdown(data){
    return `
<!DOCTYPE html>\n
<html lang="en">\n
<head>\n
    <meta charset="UTF-8">\n
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n
    <title>Portfolio Generator</title>\n
    <link rel="stylesheet" href="./style.css">\n
</head>\n
<body>\n
    <header>\n
        <h1>Portfolio</h1>\n
    </header>\n

    <section>\n
        <div>\n
            <img src="${data.image}" alt="iamge">\n
            <h2>Name: ${data.name}</h2>\n
            <h3>Location: ${data.location}</h3>\n
            <h3>Bio: ${data.bio}</h3>\n
            <h3>View my profile:</h3>\n
            <ul>\n
                <li>Linkdin URL: <a href="${data.linkdin}">Linkdin</a></li>\n
                <li>GitHub URL: <a href="${data.github}">GitHub</a></li>\n
            </ul>\n
        </div>\n
    </section>\n
    
</body>\n
</html>\n
    `;
}

module.exports = generateHtmlMarkdown;