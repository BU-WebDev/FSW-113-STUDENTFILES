
class Student{
  constructor (name){
      this.studentName = arguments[0],
      this.className = arguments[1],
      this.scores = arguments[2],
      this.possibleScores = arguments[3]
}

studentScores(){
  let score = this.scores.reduce(
      (previousValue, currentValue) => {
          return previousValue + currentValue
      }, 0
  )
  return score
}

teacherScores(){
  let possible = this.possibleScores.reduce(
      (previousValue, currentValue) => {
          return previousValue + currentValue
      }, 0
  )
  return possible
}

totalValue(){
  let finalGrade = this.studentScores() / this.teacherScores()
  switch(true){
      case (finalGrade < .6):
          return "F"; break;
      case (finalGrade < .7):
          return 'D'; break;
      case (finalGrade < .8):
          return 'C'; break;
      case (finalGrade < .9):
          return 'B'; break;
      default:
          return 'A';
  }
}
}

//!    Rules
// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)
