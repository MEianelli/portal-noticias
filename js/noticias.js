async function getNoticias(){
    let resposta = await fetch("http://newsapi.org/v2/top-headlines?apiKey=b51892084dc34b95aa48faf2277b2fcc&country=br");
    let todasNoticias = await resposta.json();
    let principal = document.querySelector('#principal');
    let container = document.querySelector('#listaDeNoticias0');
    console.log(todasNoticias.articles[0]);
    
    
    for(let i=0; i < todasNoticias.articles.length; i++){
        let artigo = todasNoticias.articles[i];

        if( i % 3 == 0 && i > 0){
            principal.innerHTML += `
            <div id="listaDeNoticias${i/3}" class="row">
                 
            </div>`
            container = document.querySelector('#listaDeNoticias'+i/3);
        }

        container.innerHTML += `
        <div class="col-4">
            <div class="card">
                <img src="${artigo.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${artigo.title}</h5>
                <p class="card-text">${artigo.content}</p>
                <a href="${artigo.url}" class="btn btn-primary">Saiba Mais</a>
            </div>
          </div>
        </div>`
    }


}
getNoticias();


/* 
author: "UOL"
content: "Na última quarta-feira (30), duas semanas após ser incendiada ao vivo pelo ex-marido, morreu a influencer digital chinesa Lamu, de 30 anos. O ex jogou gasolina e ateou fogo no corpo dela durante uma … [+1560 chars]"
description: "Na última quarta-feira (30), duas semanas após ser incendiada ao vivo pelo ex-marido, morreu a influencer digital chinesa Lamu, de 30 anos. O ex jogou gasolina e ateou fogo no corpo dela durante uma live que a moça realizava na versão chinesa do TikTok.O"
publishedAt: "2020-10-02T13:19:01Z"
source: {id: null, name: "Uol.com.br"}
title: "Influencer chinesa morre após ser incendiada por ex em transmissão ao vivo - UOL Notícias"
url: "https://noticias.uol.com.br/internacional/ultimas-noticias/2020/10/02/em-transmissao-ao-vivo-influencer-chinesa-morre-ao-ser-queimada-por-ex.htm"
urlToImage: "https://conteudo.imguol.com.br/c/noticias/f7/2020/10/02/influe */





/* todasNoticias.articles[0].author */
/* 
`<div class="col-3">
<div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>` */