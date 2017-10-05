module.exports = ({body, css, ids, title}) => {
	return `
    <!DOCTYPE html>
    <html>
      <head>
      <meta charset="utf-8">
				<link rel="shortcut icon" href="/favicon.ico">
        <title>${title}</title>
        <style>${css}</style>
        <link rel="stylesheet" href="/style.css" />
        <script>window.__data = ${ids}</script>
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
      <script src="/bundle.js"></script>
    </html>
  `;
};
