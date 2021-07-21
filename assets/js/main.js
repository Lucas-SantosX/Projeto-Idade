function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gênero = 'Masculino'
      if (idade >= 0 && idade < 10) {
        // CRIANÇA
        img.setAttribute('src', 'criancamasculina.png')
      } else if (idade < 21) {
        // JOVEM
        img.setAttribute('src', 'jovemmasculino.png')
      } else if (idade < 50) {
        // ADULTO
        img.setAttribute('src', 'adultomasculino.png')
      } else {
        // IDOSO
        img.setAttribute('src', 'idosomasculino.png')
      }
    } else if (fsex[1].checked) {
      gênero = 'Feminino'
      if (idade >= 0 && idade < 10) {
        // CRIANÇA
        img.setAttribute('src', 'criancafeminina.png')
      } else if (idade < 21) {
        // JOVEM
        img.setAttribute('src', 'jovemfeminina.png')
      } else if (idade < 50) {
        // ADULTO
        img.setAttribute('src', 'adultafeminina.png')
      } else {
        // IDOSO
        img.setAttribute('src', 'idosafeminina.png')
      }
    }
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }
}
