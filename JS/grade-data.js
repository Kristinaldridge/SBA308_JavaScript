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

  
// #1 if..else statement. Calculate sum of scores for learner ID 125 using reduce

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

// #2 if..else statement. Calculate sum of scores for learner ID 132 on or before 2023-01-27 using reduce
  const scoreSumLearner132 = LearnerSubmissions.reduce((sum, submission)=>{
    if (submission.learner_id === 132 && submission.submission.submitted_at <= "2023-01-27")
    {return sum + submission.submission.score;
    } else {
        return sum; 
    }
  }, 0);

console.log( "Sum of scores for learner_id: 132:", scoreSumLearner132)


    // Calculate  weighted average for learner_id 132
    const averageSecond = (scoreSumLearner132 / totalPoints) * 100
  
    console.log("Average_132:", averageSecond);


    /// fix 10% with id 132
    /// write try catch statement 
    // create array to display data