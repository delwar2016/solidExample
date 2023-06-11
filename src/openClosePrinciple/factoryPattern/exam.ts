class ExamResult {

}

class Question {

}

abstract class Exam {
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

class MultipleChoiceExam extends Exam {
    startExam() {
        console.log('MultipleChoiceExam is started');
    }

    submitExam(): ExamResult {
        const examResult = new ExamResult();
        console.log('MultipleChoiceExam is submitted')
        return examResult;
    }
}

class EssayExam extends Exam {
    startExam() {
        console.log('EssayExam is started');
    }

    submitExam(): ExamResult {
        const examResult = new ExamResult();
        console.log('EssayExam is submitted')
        return examResult;
    }
}

class ExamFactory {
    createExam(type: string, id: string, name: string, duration: number, questions: Question[]): Exam {
       switch (type) {
           case 'multiple-choice':
               return new MultipleChoiceExam(id, name, duration, questions);
           case 'essay':
               return new EssayExam(id, name, duration, questions);
           default:
               throw new Error('Invalid Exam type');
       }
    }
}


const examFactory = new ExamFactory();
const exam = examFactory.createExam('multiple-choice','001', 'test 1', 30, [new Question()]);
exam.startExam();
exam.submitExam();
