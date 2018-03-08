var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one':{
        title:'Article 1 | Albert Abraham',
        heading:'Article 1',
        date:'8th March',
        content:`
            <p>
                Est dolore sed consequatur autem ut tenetur est ut. Corporis eos qui eveniet aut et consectetur. Itaque provident autem
                impeditiure consectetur. Vel quod ipsam ut ut. Id quos impedit consequatur nemo sequi facilis non voluptates. Est aut ut qui.
            </p>
            <p>
                Est dolore sed consequatur autem ut tenetur est ut. Corporis eos qui eveniet aut et consectetur. Itaque provident autem
                impeditiure consectetur. Vel quod ipsam ut ut. Id quos impedit consequatur nemo sequi facilis non voluptates. Est aut ut qui.
            </p>
            <p>
                Est dolore sed consequatur autem ut tenetur est ut. Corporis eos qui eveniet aut et consectetur. Itaque provident autem
                impeditiure consectetur. Vel quod ipsam ut ut. Id quos impedit consequatur nemo sequi facilis non voluptates. Est aut ut qui.
            </p>
            <p>
                Est dolore sed consequatur autem ut tenetur est ut. Corporis eos qui eveniet aut et consectetur. Itaque provident autem
                impeditiure consectetur. Vel quod ipsam ut ut. Id quos impedit consequatur nemo sequi facilis non voluptates. Est aut ut qui.
            </p>`
    },
    'article-two':{
        title:'Article 1 | Albert Abraham',
        heading:'Article 1',
        date:'8th March',
        content:`
            <p>
                Est dolore sed consequatur autem ut tenetur est ut. Corporis eos qui eveniet aut et consectetur. Itaque provident autem
                impeditiure consectetur. Vel quod ipsam ut ut. Id quos impedit consequatur nemo sequi facilis non voluptates. Est aut ut qui.
            </p>
            <p>
                Est dolore sed consequatur autem ut tenetur est ut. Corporis eos qui eveniet aut et consectetur. Itaque provident autem
                impeditiure consectetur. Vel quod ipsam ut ut. Id quos impedit consequatur nemo sequi facilis non voluptates. Est aut ut qui.
            </p>
            <p>
                Est dolore sed consequatur autem ut tenetur est ut. Corporis eos qui eveniet aut et consectetur. Itaque provident autem
                impeditiure consectetur. Vel quod ipsam ut ut. Id quos impedit consequatur nemo sequi facilis non voluptates. Est aut ut qui.
            </p>`
    }
};


function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var header = data.header;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <title>${title}</title>
            
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="ui/style.css" rel="stylesheet"/>

        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">HOME</a>
                </div>
                <h3>${header}</h3>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});






// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
