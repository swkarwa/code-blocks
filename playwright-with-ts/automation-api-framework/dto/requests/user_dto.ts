type Address = {
    street: string
    pin_code: number
    city: string,
    state: string
    country: string
}

export class AddressImpl {
    data: Partial<Address> = {}
    private constructor() { }

    static default(): AddressImpl {
        return new AddressImpl()
    }

    street(street: string) {
        this.data.street = street
        return this
    }

    pin_code(pin_code: number) {
        this.data.pin_code = pin_code
        return this
    }

    city(city: string) {
        this.data.city = city
        return this
    }

    state(state: string) {
        this.data.state = state
        return this
    }

    country(country: string) {
        this.data.country = country
        return this
    }

    build(): Address {
        return this.data as Address
    }
}