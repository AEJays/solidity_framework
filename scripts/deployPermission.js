const {ethers} = require("hardhat")
let { publicKey } = require('../localKey.json')

async function main(){
    const Permission = await ethers.getContractFactory("testSol")
    const permission = await Permission.deploy(publicKey[0])
    await permission.deployed()
    console.log("Permission 合约已部署在地址",permission.address)
}

main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.error(error)
    process.exit(1)
})