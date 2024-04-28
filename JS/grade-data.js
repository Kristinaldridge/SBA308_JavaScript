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
  //data is located in a...
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
  
  
  // Loop through assignments to calculate sum of points_possible
  
  let pointsPossibleSum = 0;

  AssignmentGroup.assignments.forEach(assignment => {
      pointsPossibleSum += assignment.points_possible;
  });
  
   console.log("Sum of points_possible:", pointsPossibleSum);

  
// Calculate sum of scores for learner ID 125 using reduce

const scoreSumLearner125 = LearnerSubmissions.reduce((sum, submission) => {
    // If learner_id is 125, add the score to the sum
    if (submission.learner_id === 125) {
        return sum + submission.submission.score;
    } else {
        return sum; // Otherwise, return the sum unchanged
    }
}, 0);

console.log("Sum of scores for learner_id 125:", scoreSumLearner125);



  // Calculate  weighted average for learner ID 125
  const average = (scoreSumLearner125/pointsPossibleSum) * 100 ;
  
  console.log("Average:", average);



  