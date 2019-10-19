const saluteList = ['Hello', 'Hi', 'Salut', 'Ola']

const sleep = (time = 1000) => new Promise(resolve => setTimeout(resolve, time))

const getRandomSalute = async () => {
  await sleep()
  return saluteList[~~(Math.random() * saluteList.length)]
}

export const getMessage = async name => `${await getRandomSalute()} ${name}!`
