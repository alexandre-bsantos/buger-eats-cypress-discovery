var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function() {

        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();
        
        var data = {
            fullName: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '4699999999999',
            address: {
                postalcode: '85502280',
                street: 'Rua Munhoz da Rocha',
                number: '1000',
                details: 'Casa',
                district: 'Menino Deus',
                city_state: 'Pato Branco/PR'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data;
    }
}