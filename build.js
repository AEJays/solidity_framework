let fs = require("fs")
let read = fs.readFileSync("./serve.txt").toString()
let Arr = read.split("\n\n")
let keyGroup = []
Arr.map((item,i)=>{
    if(item.indexOf('Account #') == 0){
        keyGroup.push(item)
    }
})
let publicKeys = []
let privateKeys = []
keyGroup.map((item,i)=>{
    let keyArr = item.split("\n")
    let publicKey = keyArr[0].split(": ")[1]
    publicKey = publicKey.split(" (")[0]
    let privateKey = keyArr[1].split(": ")[1]
    publicKeys.push(publicKey)
    privateKeys.push(privateKey)
})
let keys = {publicKey:publicKeys,privateKey:privateKeys}
let write = JSON.stringify(keys)
write = write.replace(/{/g,"{\n\t")
write = write.replace(/\[/g,"[\n\t")
write = write.replace(/,/g,",\n\t")
write = write.replace(/\]/g,"\n\t]")
write = write.replace(/\}/g,"\n}")
fs.writeFileSync("./localKey.json",write)