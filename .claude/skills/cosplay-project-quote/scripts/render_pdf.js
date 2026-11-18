const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const pg=await b.newPage();
await pg.goto('file://'+process.argv[2]);await pg.emulateMedia({media:'print',colorScheme:'light'});
await pg.pdf({path:process.argv[3],format:'A4',scale:0.72,printBackground:true,margin:{top:'12mm',bottom:'12mm',left:'10mm',right:'10mm'}});await b.close()})()
