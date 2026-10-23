import { execFileSync } from 'node:child_process';
import { mkdirSync, copyFileSync } from 'node:fs';
const run = (command,args) => execFileSync(command,args,{stdio:'inherit'});
run('npm',['install','--include=dev']);
run('npm',['run','build','--workspace','incidents']);
mkdirSync('.deploy/html5-deployer/resources',{recursive:true});
copyFileSync('app/incidents/dist/incidents.zip','.deploy/html5-deployer/resources/incidents.zip');
run(process.execPath,['node_modules/@sap/cds-dk/bin/cds.js','build','--production']);
