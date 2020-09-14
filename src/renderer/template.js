
/**
 * @param {Object} data {title, category, date, views, likes, replies}
 */

 const generateHtml = data => {
    const { title, category, date, views, likes, replies } = data
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
  <style>
  body{
  margin:0;
  padding:0;
}
.outer-container{
  background-color: white;
  height: 300px;
  width: 600px;
  padding: 0px 50px;
  border-bottom: 5px solid #e45735;
  color: #333;
  display: flex;
  align-items: center;
  justify-content:flex-start;
  font-family: 'Lato', sans-serif;
}
.logo img{
  width: 200px;
  position: absolute;
  top: 12px;
  left: 25px;
}
.information .category h5{
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 10px;
}
.title h1{
  margin-top: 0;
  padding-top: 0;
  font-size: 28px;
}
.date{
  display:flex;
  margin-top: 5px;
  margin-bottom: 10px
}
.stats{
  display: flex;
}
.brick{
  display:flex;
  margin-right:15px;
  align-items:center;
}
.icon-tabler{
  margin-right: 4px
}
  </style>
</head>
<body>
  <div class="outer-container">
    <div class="logo">
      <img src="${process.env.LOGO}" alt="logo">
    </div>
    <div class="information">
      <div class="category">
        <h5>${category}</h5>
      </div>
      <div class="title">
        <h1>${title}</h1>
      </div>
      <div class="stats">
        <div class="brick">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#333" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <rect x="4" y="5" width="16" height="16" rx="2" />
  <line x1="16" y1="3" x2="16" y2="7" />
  <line x1="8" y1="3" x2="8" y2="7" />
  <line x1="4" y1="11" x2="20" y2="11" />
  <line x1="11" y1="15" x2="12" y2="15" />
  <line x1="12" y1="15" x2="12" y2="18" />
</svg> ${date}
        </div>
        <div class="brick">
 <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#333" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <circle cx="12" cy="12" r="2" />
  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
</svg> ${views}
        </div>
        <div class="brick">
 <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#333" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />
  <line x1="8" y1="9" x2="16" y2="9" />
  <line x1="8" y1="13" x2="14" y2="13" />
</svg> ${replies}
        </div>
        <div class="brick">
 <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#333" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
</svg> ${likes}
        </div>
      </div>
    </div>
  </div>
</body>
</html>
    `
}

module.exports = generateHtml