import { Component, OnInit } from '@angular/core';



@Component({

  selector: 'app-news',

  templateUrl: './News.page.html',

  styleUrls: ['./News.page.scss'],

})

export class NewsPage implements OnInit {

  public news = [

    { title: "GILBERTO G.O.A.T.", description: "Embora já muitos esperassem, Gilberto foi mais uma vez vencedor do prémio Ballon D'Or, ganhando assim a sua 10ª Bola de Ouro e aumentando a vantagem entre Ronaldo e Messi. Senhoras e senhores, mais uma vez podemos afirmar... GILBERTO é O MELHOR JOGADOR DA HISTÓRIA", year: '2022', image: 'https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=415ba776-bae5-4e41-9023-0a883667856c&w=768&h=512&t=20210829193647', icon: '' }, { title: "GILBERTO DES-BAH-LORIZADO", description: "Com a chegada do novo treinador, Shôr Roger, os encarnados enfrentam um dilema. Trocar o Gilberto ou não por Bah, reforço dinamarquês, muitos defendem que o G.O.A.T. deve permanecer a titularíssimo e que Bah deve vir só para o deixar descansar nos menores jogos. Mesmo assim, Benfica avança na contratação!", year: '2022', image: 'https://images.rr.sapo.pt/2022-04-14t205630z-375359250-up1ei4e1m64ds-rtrmadp-3-soccer-europaconf-slp-fey-report20772dacdefaultlarge_1024.jpg', icon: '' }, { title: "GILBERTO MELHOR MARCADOR DA CHAMPIONS!", description: "Pela primeira vez na história da competição, um jogador da liga portuguesa foi o melhor marcador. Gilberto Moraes Junior, ao serviço do Benfica, torna-se o melhor marcador da UEFA Champions League com 39 golos em 13 jogos nesta edição da competição.", year: '2022', image: 'https://i.ytimg.com/vi/zV90Yen2wcg/maxresdefault.jpg', icon: '' }

  ];



  constructor() { }



  ngOnInit() {

  }



}