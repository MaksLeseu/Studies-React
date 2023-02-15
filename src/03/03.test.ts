import {StudentType} from "../02/02";
import {addSkill} from "./03";
import exp from "constants";

let student:StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: 'Maks',
        age: 25,
        isActive: false,
        address: {
            streetTitle: 'Surgenova 2',
            city: {
                title: 'Kielce',
                coutryTitle: 'Poland'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'React'
            }
        ]
    }
})

test('student push', () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, 'JavaScript');

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JavaScript');
});