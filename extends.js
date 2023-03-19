class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}

class Instructor extends TeamMember{
    designation = 'Web Course Instructor'
    team = 'Web team'
    constructor(name, location){
        super(name,location)
    
    }
    startSupportSession(time){
        console.log(`start the support  session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}

class Developer extends TeamMember{
    designation = 'Web Course Instructor'
    team = 'Web team'
    tech;
    constructor(name, location, tech){
        super(name, location)
        this.tech = tech;
    }
    startSupportSession(feature){
        console.log(`please develop the ${feature}`)
    }
    createQuiz(version){
        console.log(`please release the version ${version}`)
    }
}

class JobPlacement extends TeamMember{
    designation = 'Job Placement Commandos'
    team = 'Job Placement'
    region;
    constructor(name, location, tech){
        super(name, location)
        this.region = tech;
    }
    provideResume(feature){
        console.log(`please develop the ${feature}`)
    }
    prepareStudent(version){
        console.log(`please release the version ${version}`)
    }
}

const alia = new Developer('Alia Bhatt', 'Dhaka', 'React')
console.log(alia);
alia.provideFeedback();