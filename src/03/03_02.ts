import {GovernmentBuildingsType, CityType, HousesType} from "./03_02_01";

let city = {
    title: 'New York',
    houses: [
        {
            buildeAt: 2012, repaired: false,
            address: {number: 100, street: {title: 'White street'}}
        }, {
            buildeAt: 2008, repaired: false,
            address: {number: 100, street: {title: 'Happy street'}}
        }, {
            buildeAt: 2020, repaired: false,
            address: {number: 101, street: {title: 'Happy street'}}
        }
    ],
    governmentBuildings: [
        {
            type: 'HOSPITAL', budget: 200000, staffCount: 200,
            address: {
                street: {
                    title: 'Central Str'
                }
            }
        }, {
            type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
            address: {
                street: {
                    title: 'South Str'
                }
            }
        }
    ],
    citizensNumber: 1000000
}


export function addMoneyToBudget(building: GovernmentBuildingsType, budget: number) {
    building.budget += budget;
}

export function repairHouse(obj: HousesType) {
    obj.repaired = true;
}

export function toFireStaff(obj: GovernmentBuildingsType, number: number) {
    obj.staffCount -= number;
}

export function toHireStaff(staff: GovernmentBuildingsType, number: number) {
    staff.staffCount += number;
}