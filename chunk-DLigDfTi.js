var p=r=>r.replace(/→/g,`->`).replace(/€/g,`\\200`).replace(/[\\()]/g,n=>`\\`+n).replace(/[^\x20-\x7e]/g,n=>n.charCodeAt(0)<256?`\\`+n.charCodeAt(0).toString(8).padStart(3,`0`):`?`);function g(r,n){let a=[`BT`,`/F2 20 Tf`,`50 790 Td`,`(${p(r)}) Tj`,`ET`],e=755;for(let o of n){if(o===``){e-=10;continue}let i=o.startsWith(`## `);if(a.push(`BT`,`${i?`/F2 13`:`/F1 11`} Tf`,`50 ${e} Td`,`(${p(i?o.slice(3):o)}) Tj`,`ET`),e-=i?22:16,e<60)break}let c=a.join(`
`),s=[`<< /Type /Catalog /Pages 2 0 R >>`,`<< /Type /Pages /Kids [3 0 R] /Count 1 >>`,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>`,`<< /Length ${c.length} >>
stream
${c}
endstream`,`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>`,`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>`],t=`%PDF-1.4
`,l=[];s.forEach((o,i)=>{l.push(t.length),t+=`${i+1} 0 obj
${o}
endobj
`});let d=t.length;t+=`xref
0 ${s.length+1}
0000000000 65535 f 
`;for(let o of l)t+=`${String(o).padStart(10,`0`)} 00000 n 
`;return t+=`trailer
<< /Size ${s.length+1} /Root 1 0 R >>
startxref
${d}
%%EOF`,new Blob([t],{type:`application/pdf`})}function f(r,n){let a=URL.createObjectURL(r),e=document.createElement(`a`);e.href=a,e.download=n,document.body.appendChild(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(a),4e3)}function b(r){let[n,a=``]=r.split(`,`),e=/data:([^;]+)/.exec(n??``)?.[1]??`application/pdf`,c=atob(a),s=new Uint8Array(c.length);for(let t=0;t<c.length;t++)s[t]=c.charCodeAt(t);return new Blob([s],{type:e})}export{f as n,g as r,b as t};