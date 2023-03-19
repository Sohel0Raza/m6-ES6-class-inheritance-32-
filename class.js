class Instructor{
    name;
    designation = 'Web Course Instructor'
    team = 'Web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support  session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}

const amir = new Instructor('amir', 'Dhaka');
console.log('amir :', amir);
amir.startSupportSession('9:00')
amir.createQuiz(60)

const hime = new Instructor('Himu', 'Khulna')
console.log('hime :', hime);