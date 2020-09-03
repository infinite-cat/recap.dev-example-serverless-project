export // eslint-disable-next-line no-return-await
const handler = async () => await new Promise((resolve) => {
  setTimeout(() => {
    resolve({})
  }, 10000)
})
