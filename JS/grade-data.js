// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  // the data is in a nested block
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  //data is located in a object array
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  

  // #1 Loop. Loop through assignments to calculate sum of points_possible for Assignments ID 1, 2, & 3 
  
  let pointsPossibleSum = 0;

  AssignmentGroup.assignments.forEach(assignment => {
      pointsPossibleSum += assignment.points_possible;
  });
  
   console.log(" Sum of points_possible:", pointsPossibleSum);

  
// #1 if..else statement. Calculate sum of scores for learner_id 125 using reduce

const scoreSumLearner125 = LearnerSubmissions.reduce((sum, submission) => {
   
    if (submission.learner_id === 125) {
        return sum + submission.submission.score;
    } else {
        return sum; 
    }
}, 0);

console.log("Sum of scores for learner_id 125:", scoreSumLearner125);



  // Calculate  weighted average for learner ID 125
  const average = (scoreSumLearner125/pointsPossibleSum) * 100 ;
  
  console.log("Average:", average);


  // #2 Loop. Loop through assignment to calculate possible points from Assignments ID 1 & 2 (excluding assignment 3 bc of future due date). Used break as a control. 
  
  function sumPointsPossibleTwo(assignments) {
    let totalPoints = 0;
    let i = 0;
    while (i < assignments.length) { 

      if (assignments[i].due_at <= "2023-02-27") {
        totalPoints += assignments[i].points_possible;
      } else {

        break;
      }
      i++;
    }
    return totalPoints;
  }
  
  const totalPoints = sumPointsPossibleTwo(AssignmentGroup.assignments);
console.log("Total points possible (excluding non current due dates):", totalPoints);


// #2 if..else statement. Atttempt 1. Calculate sum of scores for learner ID 132. deduct 10% if outside due date. Could not get this code to work. 

//function scoreSumLearner132(submissions) {
  //let totalScore = 0;
  //for (let i= 0; i < submissions.length; i++) {
    //const submission = submissions[i];
    //if (submission.learner_id === 132 && submission.submission.submitted_at == "2023-03-07"){
      //totalScore += submission.submission.score * 0.1;
   //} else {
    //totalScore += submission.submission.score;

   //}
  //}
//return totalScore;
//}

//const totalScore = scoreSumLearner132(LearnerSubmissions);
//console.log (totalScore)

// #2 if..else statement. Attempt 2. Needed Help to Calculate sum of scores for learner_id 132. deduct 10% if after due date
function scoreSumLearner132(submissions) {
  let totalScore = 0;
  for (let i = 0; i < submissions.length; i++) {
    const submission = submissions[i];
    const assignment = AssignmentGroup.assignments.find(assignment => assignment.id === submission.assignment_id);
    if (submission.learner_id === 132) {
      const dueDate = new Date(assignment.due_at);
      const submittedDate = new Date(submission.submission.submitted_at);
      if (submittedDate <= dueDate) {
        totalScore += submission.submission.score;
      } else if (submittedDate >= new Date("2023-02-27")) {
        totalScore += submission.submission.score * 0.9;
      }
    }
  }
  return totalScore;
}

const totalScore = scoreSumLearner132(LearnerSubmissions);
console.log( "Total score with 10 off for late due date", totalScore);

    
// Calculate weighted average for learner_id 132
    const averageSecond = (totalScore/ totalPoints) * 100
  
    console.log("Average_132:", averageSecond);


   
    /// write try catch statement. Did not understand how to do. 
    
    // create array to display data

    function getLearnerData(id, score, assignment) {
      const result = {};

      result.id = id
      result.score = score
      result.assignment_id = assignment;

      return result; 
    }

    const learnerTwo = getLearnerData ("132", 82.5, 1);
    console.log(learnerTwo)

   