import utils from '../../helpers/utils';
import buildClasses from '../classes/buildClasses/buildClasses';
import buildStudent from '../students/buildStudent/buildStudent';
import lesson from '../lessons/lesson';
import addLesson from '../lessons/addLesson/addLessonForm';
import teachers from '../teachers/teachers';

const defaultMain = () => {
  const domString = '<img src="../../../assets/default-main.jpg">';
  utils.printToDom('#cards-container', domString);
};

const buildCards = (e) => {
  e.preventDefault();
  $('#default-main').addClass('hidden');
  $('#cards-container').removeClass('hidden');
  utils.readData(e.target.value);
  if (e.target.value === 'classes') {
    buildClasses.buildClasses();
  } else if (e.target.value === 'students') {
    buildStudent.buildStudents();
  } else if (e.target.value === 'lessons') {
    lesson.lessonMaker();
    addLesson.buildLessonForm();
  } else if (e.target.value === 'teachers') {
    teachers.teacherMaker();
  } else {
    defaultMain();
  }
};

const filterClicks = () => {
  $('.filterButton').click(buildCards);
};

export default { filterClicks };
