const {ethers} = require("hardhat")
let Web3 = require("web3")
let web3 = new Web3()
let { publicKey } = require('../localKey.json')

// 主程序文件
async function main(){
    const Permission_Address = "0x2706A171ECb68E0038378D40Dd1d136361d0cB7d"
    const Permission = await ethers.getContractFactory("testSol")
    const Permission_contract = await Permission.attach(Permission_Address)
    // 设置管理员
    // await setAdmin(Permission_contract,publicKey[5])
    // 获取所有者
    // await getOwner(Permission_contract)
    // 设置所有者
    // await setOwner(Permission_contract,publicKey[2])
    // 设置ban禁的人
    // await setBanner(Permission_contract,publicKey[3])
    // 获取ban禁的所有地址
    await getBanner(Permission_contract)
    // 取消ban禁
    // await removeBanner(Permission_contract,publicKey[3])
}

async function setAdmin(Permission_contract,admin){
    let res = await Permission_contract.setAdmin(admin)
    console.log("setAdmin","返回的数据如下",res)
}

async function setOwner(Permission_contract,admin){
    let res = await Permission_contract.setOwner(admin)
    console.log("setOwner","返回的数据如下",res)
}

async function getOwner(Permission_contract){
    let res = await Permission_contract.getOwner()
    console.log("getOwner","返回的数据如下",res)
}

async function setBanner(Permission_contract,banner){
    let res = await Permission_contract.setBanner(banner)
    console.log("setBanner","返回的数据如下",res)
}

async function getBanner(Permission_contract){
    let res = await Permission_contract.getBanner()
    console.log("getBanner","返回的数据如下",res)
}

async function removeBanner(Permission_contract,banner){
    let res = await Permission_contract.removeBanner(banner)
    console.log("removeBanner","返回的数据如下",res)
}

main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.error(error)
    process.exit(1)
})