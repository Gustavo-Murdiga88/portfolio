interface IFetchReturn {
  data: string;
  liturgia: string;
  cor: string;
  dia: string;
  oferendas: string;
  comunhao: string;
  primeiraLeitura: {
    referencia: string;
    titulo: string;
    texto: string;
  };
  segundaLeitura: string;
  salmo: {
    referencia: string;
    refrao: string;
    texto: string;
  };
  evangelho: {
    referencia: string;
    titulo: string;
    texto: string;
  };
  antifonas: {
    entrada: string;
    ofertorio: string;
    comunhao: string;
  };
}

export async function getDailyLiturgy() {
  "use cache";

  const today = new Date();
  const restInMiliSeconds = 60 * 60; // 1 hour

  const data = (await fetch(
    `${process.env.DAILY_LITURGY_URL}?dia=${today.getDate()}&mes=${today.getMonth() + 1}`,
    {
      method: "GET",
      next: {
        revalidate: restInMiliSeconds,
      },
    },
  ).then((result) => result.json())) as IFetchReturn;

  return data;
}
