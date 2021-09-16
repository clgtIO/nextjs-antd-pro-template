module.exports = {
  presets: [['next/babel']],
  plugins: [['import', {
    libraryName: 'antd', style: name => {
      console.log(name)
      return `${name}/style`
    },
  }]],
}
