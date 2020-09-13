module.exports = {
    api: {
        port: process.env.PORT || 3000
    },
    db: {
        url: 'mongodb+srv://lucas:Abc123@@cluster0.8wt1f.mongodb.net/pipedrive-bling-integration?retryWrites=true&w=majority',
        options: {
            poolSize: 5, 
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }
    },
    pipedriveAccess: {
        user: 'lucasoliveira',
        properties: '(id,title,value,currency,status,add_time,update_time)',
        token: '2b1a3c4f0f9c0c05b394bef8d2413ab3e9dbbb60'
    },
    blingAccess: {
        url: `https://bling.com.br/Api/v2/pedido/?apikey=c74d9e5b4915c434487630dfbca629a33c62c8a45d5511eda1cfe5b851a19f2a29e9b29f&xml=`,
        token: 'c74d9e5b4915c434487630dfbca629a33c62c8a45d5511eda1cfe5b851a19f2a29e9b29f',
        createXml: (name, value) => {
            return `<?xml version="1.0" encoding="UTF-8"?>
            <pedido>
                <cliente>
                    <nome>${name}</nome>
                </cliente>
                <itens>
                    <item>
                        <codigo>001</codigo>
                        <descricao>Serviço 001</descricao>
                        <un>Pç</un>
                        <qtde>1</qtde>
                        <vlr_unit>0</vlr_unit>
                    </item>
                </itens>
                    <parcelas>
                        <parcela>
                        <data>01/09/2009</data>
                        <vlr>${value}</vlr>
                        <obs>Teste obs 1</obs>
                        </parcela>
                </parcelas>
                <vlr_frete>15</vlr_frete>
                <vlr_desconto>10</vlr_desconto>
                <obs>Testando o campo observações do pedido</obs>
                <obs_internas>Testando o campo observações internas do pedido</obs_internas>
            </pedido>`
        }
    }
}