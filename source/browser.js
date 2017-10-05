module.exports = ({ body, title }) => {
	return `
    <!DOCTYPE html>
    <html>
      <head>
      <meta charset="utf-8">
				<link rel="shortcut icon" href="/public/favicon.ico">
        <title>${title}</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
    </html>
  `;
};
