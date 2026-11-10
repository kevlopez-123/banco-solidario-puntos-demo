var h=[278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584];var g=(s,t,c=!1)=>{let o=0;for(let i of s){let r=(i.normalize(`NFD`)[0]??i).charCodeAt(0);o+=r>=32&&r<=126?h[r-32]??556:556}return o/1e3*t*(c?1.06:1)};var b=s=>s.replace(/[—–]/g,`-`).replace(/[“”]/g,`"`).replace(/[‘’]/g,`'`).replace(/[\\()]/g,t=>`\\`+t).replace(/[^\x20-\x7e]/g,t=>t.charCodeAt(0)<256?`\\`+t.charCodeAt(0).toString(8).padStart(3,`0`):`?`);var f=s=>{let t=/^#?([0-9a-f]{6})$/i.exec(s.trim()),c=t?parseInt(t[1],16):48594;return[(c>>16)/255,(c>>8&255)/255,(c&255)/255]};var d=s=>s.map(t=>t.toFixed(3)).join(` `);function $(s,t,c,o,i=!1){let l=s.split(/\s+/).filter(Boolean),r=[],p=``,u=e=>{let n=e;for(;g(n,c,i)>t&&n.length>1;){let a=n.length-1;for(;a>1&&g(n.slice(0,a),c,i)>t;)a--;r.push(n.slice(0,a)),n=n.slice(a)}return n};for(let e of l){let n=p?`${p} ${e}`:e;g(n,c,i)<=t?p=n:(p&&r.push(p),p=g(e,c,i)>t?u(e):e)}if(p&&r.push(p),r.length>o){let e=r.slice(0,o),n=e[o-1];for(;n.length>1&&g(n+`...`,c,i)>t;)n=n.slice(0,-1);return e[o-1]=n+`...`,e}return r.length?r:[``]}function y(s,t,c){let o=[],i=e=>5+e*2;o.push(`<< /Type /Catalog /Pages 2 0 R >>`),o.push(`<< /Type /Pages /Kids [${s.map((e,n)=>`${i(n)} 0 R`).join(` `)}] /Count ${s.length} >>`),o.push(`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>`),o.push(`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>`),s.forEach((e,n)=>{o.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${t} ${c}] /Contents ${i(n)+1} 0 R /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> >>`),o.push(`<< /Length ${e.length} >>
stream
${e}
endstream`)});let l=`%PDF-1.4
`,r=[];o.forEach((e,n)=>{r.push(l.length),l+=`${n+1} 0 obj
${e}
endobj
`});let p=l.length;l+=`xref
0 ${o.length+1}
0000000000 65535 f 
`;for(let e of r)l+=`${String(e).padStart(10,`0`)} 00000 n 
`;l+=`trailer
<< /Size ${o.length+1} /Root 1 0 R >>
startxref
${p}
%%EOF`;let u=new Uint8Array(l.length);for(let e=0;e<l.length;e++)u[e]=l.charCodeAt(e)&255;return new Blob([u],{type:`application/pdf`})}export{g as a,f as i,b as n,y as o,d as r,$ as t};