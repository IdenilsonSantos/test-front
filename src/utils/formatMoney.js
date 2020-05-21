function formatMoney(data) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(data)
}

export default formatMoney