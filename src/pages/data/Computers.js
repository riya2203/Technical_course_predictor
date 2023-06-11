const Computers = [
    {
        question: "which of the following language does the computer understand?",
        answers: [{ answertext: "C language", iscorrect: false }, { answertext: "Assembly Language", iscorrect: false }, {
            answertext: "Binary language", iscorrect: true
        }, {
            answertext: "Basic language", iscorrect: false
        }]
    },

    {
        question: "which of the following computer language is written in binary code only", answers: [
            { answertext: "pascal", iscorrect: false }, { answertext: "machine language", iscorrect: true }, { answertext: "c", iscorrect: false }, { answertext: "c#", iscorrect: false }
        ]
    },

    {
        question: "which of the following is called the brain of the computer?", answers: [
            { answertext: "cpu", iscorrect: true },
            { answertext: "memory", iscorrect: false },
            { answertext: "Arithmatic and logic unit", iscorrect: false }, {
                answertext: "control unit", iscorrect: false
            }
        ]
    },

    {
        question: "Which of the following is not the characteristic of a computer?"
        ,
        answers: [
            { answertext: "Versatility", iscorrect: false },
            { answertext: "Accuracy", iscorrect: false },
            { answertext: "Diligence", iscorrect: false },
            { answertext: "I.Q", iscorrect: true }
        ]

    }
    ,
    {
        question: "Which is the smallest unit of data in a computer?",
        answers: [{ answertext: "Bit", iscorrect: true },
        { answertext: "KB", iscorrect: false },
        { answertext: "Nibble", iscorrect: false }, {
            answertext: "Byte", iscorrect: false
        }]
    },

    {
        question:"which of the following part of a processor contains the hardware necessry to perform all the operation required by a computer?",
        answers:[
            {answertext:"controller",iscorrect:false},
            {answertext:"registers", iscorrect:false},
            {answertext:"cache", iscorrect:false},
            {  answertext:"Data path", iscorrect:true }
        ]
    }
    ,
    {
        question:"Which of the following is designed to control the operations of a computer?"
        ,answers:[{
            answertext:"User", iscorrect:false
        },{
            answertext:"Application software", iscorrect:false
        },
    {answertext:"System Software", iscorrect:true},{
    answertext:"Utility software", iscorrect:false
    }]
    },
    {
        question:"Which of the following service allows a user to log in to another computer somewhere on the internet?",
        answers:[
            {answertext:"email", iscorrect:false},{answertext:"UseNet", iscorrect:false},
            {
                answertext:"Telnet", iscorrect:true
            },
            {answertext:"FTP", iscorrect:false}
        ]
    },
    {
        question:"Which of the following is the first neural network computer?", answers:[{answertext:"AN", iscorrect:false}, {answertext:"AM", iscorrect:false},{answertext:"RFD", iscorrect:false},{
            answertext:"SNARC", iscorrect:true
        }]
    },

    {
        question:"Which of the following computer is mostly used for automatic operations?", answers:[{answertext:"analog", iscorrect:false},{answertext:"digital",iscorrect:false},{answertext:"hybrid", iscorrect:true},{
            answertext:"remote", iscorrect:false
        }]
    }
]
export default Computers;