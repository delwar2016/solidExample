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

class ExamBuilder {
    private id: string;
    private name: string;
    private duration: number;
    private questions: Question[];

    constructor() {
        this.id = '';
        this.name = '';
        this.duration = 0;
        this.questions = [];
    }

    setId(id: string): ExamBuilder {
        this.id = id;
        return this;
    }

    setName(name: string): ExamBuilder {
        this.name = name;
        return this;
    }

    setDuration(duration: number): ExamBuilder {
        this.duration = duration;
        return this;
    }

    setQuestions(questions: Question[]): ExamBuilder {
        this.questions = questions;
        return this;
    }

    build(): Exam {
        return new Exam(this.id, this.name, this.duration, this.questions);
    }
}

class ExamService {
    createExam(exam: Exam): Exam {
        // perform validation and business logic specific to creating an exam
        // for example, check if an exam with the given id already exists


        // Perform the additional operations like saving the exam to a database

        console.log('Exam is created');
        return exam;
    }

    updateExam(id: string, name: string, duration: number) {
        // do logic
    }
}


const examService = new ExamService();
const exam = examService.createExam(
    new ExamBuilder()
        .setId('01')
        .setName('Test Exam')
        .setDuration(30)
        .setQuestions([new Question()])
        .build()
);
exam.startExam();
exam.submitExam();
