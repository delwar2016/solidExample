class ExamResult {

}

class Question {

}

class Exam {
    id: string;
    name: string;
    duration: number;
    questions: Question[];
    constructor(id: string, name: string, duration: number, questions: Question[]) {
        this.id = id;
        this.name = name;
        this.duration = duration;
        this.questions = questions;
    }

    startExam(): void {
        console.log('Exam is started');
    }

    submitExam(): ExamResult {
        const examResult = new ExamResult();

        // do calculation
        console.log('Exam is submitted');
        return examResult;
    }
}

class ExamService {
    createExam(id: string, name: string, duration: number, questions: Question[]): Exam {
        // perform validation and business logic specific to creating an exam
        // for example, check if an exam with the given id already exists

        //create the exam object
        const exam = new Exam(id, name, duration, questions);

        // Perform the additional operations like saving the exam to a database

        console.log('Exam is created');
        return exam;
    }

    updateExam(id: string, name: string, duration: number) {
        // do logic
    }
}


const examService = new ExamService();
const exam = examService.createExam('001', 'test 1', 30, [new Question()]);
exam.startExam();
exam.submitExam();
