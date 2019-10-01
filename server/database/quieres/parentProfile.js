const connection = require('../config/connection');

const getParentProfile = (id) => connection.query(
  'select student_name, class from student  inner join parent on parent.id=student.parent_id where parent.id = $1',
  [id],
);

module.exports = { getParentProfile };