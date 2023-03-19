const user = [
    {id: 1, name: 'Abul', job: 'doctor'}
]
// console.log(user[0].name)

const data = {
    count: 8000,
    data:[
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'cabul', job: 'leader'}
    ]
}
const firstJob = data.data[0].job;
// console.log(firstJob)

const users = {
    id: 5001,
    address:{
        street:{
            lane:'27/H kochukhet lane',
            floor: 'third floor',
            side: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    },
}
const userFloor = users.address.steet?.floor;
console.log(userFloor)