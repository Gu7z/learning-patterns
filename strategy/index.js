const strategy_get_profissional_info = (data) => {
  return {
    name: data.name,
    email: data.email
  }
}
const strategy_mount_profile = (data) => {
  return {
    name: data.name,
    emaiphotol: data.photo
  }
}


function extractData(data, strategy){
  switch(strategy){
    case 1:
      return strategy_get_profissional_info(data)
    case 2:
      return strategy_mount_profile(data)
  }
}

async function main(){
  const data =  {
    id: 1,
    name: "Gustavo Ferri",
    email: "gustavo@ferri.biz",
    photo: 'https://avatars1.githubusercontent.com/u/48556195'
  }

  profissionalInfo = extractData(data, 1)
  mountProfile = extractData(data, 2)

  console.log(profissionalInfo)
  console.log('----------')
  console.log(mountProfile)
}

main()