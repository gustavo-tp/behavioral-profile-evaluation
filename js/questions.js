const questions = [
	{
		question: 'Eu sou...',
		alternatives: {
			I: 'Idealista, criativo e visionário',
			C: 'Divertido, espiritual e benéfico',
			O: 'Confiável, meticuloso e previsível',
			A: 'Focado, determinado e persistente'
		}
	},
	{
		question: 'Eu gosto de...',
		alternatives: {
			A: 'Ser piloto',
			C: 'Conversar com os passageiros',
			O: 'Planejar a viagem',
			I: 'Explorar novas rotas'
		}
	},
	{
		question: 'Se você quiser se dar bem comigo...',
		alternatives: {
			I: 'Me dê liberdade',
			O: 'Me deixe saber sua expectativa',
			A: 'Lidere, siga ou saia do caminho',
			C: 'Seja amigável, carinhoso e compreensivo'
		}
	},
	{
		question: 'Para conseguir obter bons resultados é preciso...',
		alternatives: {
			I: 'Ter incertezas',
			O: 'Controlar o essencial',
			C: 'Diversão e celebração',
			A: 'Planejar e obter recursos'
		}
	},
	{
		question: 'Eu me divirto quando...',
		alternatives: {
			A: 'Estou me exercitando',
			I: 'Tenho novidades',
			C: 'Estou com os outros',
			O: 'Determino as regras'
		}
	},
	{
		question: 'Eu penso que...',
		alternatives: {
			C: 'Unidos venceremos, divididos perderemos',
			A: 'O ataque é melhor que a defesa',
			I: 'E bom ser manso, mas andar com um porrete',
			O: 'Um homem prevenido vale por dois'
		}
	},
	{
		question: 'Minha preocupação é...',
		alternatives: {
			I: 'Gerar a ideia global',
			C: 'Fazer com que as pessoas gostem',
			O: 'Fazer com que funcione',
			A: 'Fazer com que aconteça'
		}
	},
	{
		question: 'Eu prefiro...',
		alternatives: {
			I: 'Perguntas a respostas',
			O: 'Ter todos os detalhes',
			A: 'Vantagens a meu favor',
			C: 'Que todos tenham a chance de serem ouvidos'
		}
	},
	{
		question: 'Eu gosto de...',
		alternatives: {
			A: 'Fazer progresso',
			I: 'Construir memórias',
			O: 'Fazer sentido',
			C: 'Tornar as pessoas confortáveis'
		}
	},
	{
		question: 'Eu gosto de chegar...',
		alternatives: {
			A: 'Na frente',
			C: 'Junto',
			O: 'Na hora',
			I: 'Em outro lugar'
		}
	},
	{
		question: 'Um ótimo dia para mim é quando...',
		alternatives: {
			A: 'Consigo fazer muitas coisas',
			C: 'Me divirto com meus amigos',
			O: 'Tudo segue conforme planejado',
			I: 'Desfruto de coisas novas e estimulantes'
		}
	},
	{
		question: 'Eu vejo a morte como...',
		alternatives: {
			I: 'Uma grande aventura misteriosa',
			C: 'Uma oportunidade para rever os falecidos',
			O: 'Um modo de receber recompensas',
			A: 'Algo que sempre chega muito cedo'
		}
	},
	{
		question: 'Minha filosofia de vida é...',
		alternatives: {
			A: 'Há ganhadores, há perdedores, e eu acredito ser um ganhador',
			C: 'Para eu ganhar, ninguém precisa perder',
			O: 'Para ganhar é preciso seguir regras',
			I: 'Pra ganhar, é necessário inventar novas regras'
		}
	},
	{
		question: 'Eu gosto de mudanças se...',
		alternatives: {
			A: 'Me der uma vantagem competitiva',
			C: 'For divertido e puder ser compartilhado',
			I: 'Me der mais liberdade e variedade',
			O: 'Melhorar ou me der mais controle'
		}
	},
	{
		question: 'Eu sempre gostei de...',
		alternatives: {
			I: 'Explorar',
			O: 'Evitar surpresas',
			A: 'Focalizar a meta',
			C: 'Realizar uma abordagem natural'
		}
	},
	{
		question: 'Não existe nada de errado em...',
		alternatives: {
			A: 'Se colocar na frente',
			C: 'Colocar os outros na frente',
			I: 'Mudar de ideia',
			O: 'Ser consistente'
		}
	},
	{
		question: 'Eu gosto de buscar conselhos de...',
		alternatives: {
			A: 'Pessoas bem-sucedidas',
			C: 'Anciões e conselheiros',
			O: 'Autoridades no assunto',
			I: 'Lugares'
		}
	},
	{
		question: 'Meu lema é...',
		alternatives: {
			I: 'Fazer o que precisa ser feito',
			O: 'Fazer bem feito',
			C: 'Fazer junto com o grupo',
			A: 'Simplesmente fazer'
		}
	},
	{
		question: 'Eu gosto de...',
		alternatives: {
			I: 'Complexidade, mesmo se confuso',
			O: 'Ordem e sistematização',
			C: 'Calor humano e animação',
			A: 'Coisas claras e simples'
		}
	},
	{
		question: 'Tempo para mim é...',
		alternatives: {
			A: 'Algo que detesto desperdiçar',
			C: 'Um grande ciclo',
			O: 'Uma flecha que leva ao inevitável',
			I: 'Irrelevante'
		}
	},
	{
		question: 'Se eu fosse bilionário...',
		alternatives: {
			C: 'Faria doações para muitas entidades',
			O: 'Criaria uma poupança avantajada',
			I: 'Faria o que desse na cabeça',
			A: 'Me exibiria bastante para algumas pessoas'
		}
	},
	{
		question: 'Eu acredito que...',
		alternatives: {
			A: 'O destino é mais importante que a jornada',
			C: 'A jornada é mais importante que o destino',
			O: 'Um centavo economizado é um centavo ganho',
			I: 'Bastam um navio e uma estrela para navegar'
		}
	},
	{
		question: 'Eu acredito também que...',
		alternatives: {
			A: 'Aquele que hesita está perdido',
			O: 'De grão em grão a galinha enche o papo',
			C: 'O que vai, volta',
			I: 'Um sorriso ou uma careta é o mesmo para quem é cego'
		}
	},
	{
		question: 'Eu acredito ainda que...',
		alternatives: {
			O: 'Melhor prudência que arrependimento',
			I: 'A autoridade deve ser desafiada',
			A: 'Ganhar é fundamental',
			C: 'O coletivo é mais importante do que o individual'
		}
	},
	{
		question: 'Eu penso que...',
		alternatives: {
			I: 'Não é fácil ficar encurralado',
			O: 'É preferível olhar, antes de pular',
			C: 'Duas cabeças pensam melhor que do que uma',
			A: 'Se você não tem condições de competir, não compita'
		}
	}
];