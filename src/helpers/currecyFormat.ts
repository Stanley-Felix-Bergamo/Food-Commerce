export const currecyFormat = (currency: number) => {

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(currency)
}

