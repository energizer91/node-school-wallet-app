module.exports = ({body, css, title}) => {
	return `
    <!DOCTYPE html>
    <html>
      <head>
      <meta charset="utf-8">
				<link rel="shortcut icon" href="/favicon.ico">
        <title>${title}</title>
        <style>${css}</style>
        <link rel="stylesheet" href="/style.css" />
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
    </html>
  `;
};
