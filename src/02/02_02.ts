export type CityType = {
    title: string
    houses: Array<ObjHousesType>
    governmentBuildings: Array<[]>
    citizensNumber: number
}

type ObjHousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

type AddressType = {
    number: number
    street: StreetType
}

type StreetType = {
    title: string
}