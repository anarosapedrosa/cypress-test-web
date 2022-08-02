import { faker } from '@faker-js/faker'

export default {

    user: function() {

        var username = faker.name.firstName()
        var data = {
            username: String(Math.ceil(Math.random()*1000000)),
            email: faker.internet.email(username).toLowerCase(),
            password: String(Math.ceil(Math.random()*1000000))
        }

        return data

    }

}