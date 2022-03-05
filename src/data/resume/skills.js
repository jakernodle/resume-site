// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Swift',
    competency: 5,
    category: ['App Development', 'Languages'],
  },
  {
    title: 'Objective-C',
    competency: 5,
    category: ['App Development', 'Languages', 'Objective-C'],
  },
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Dart',
    competency: 2,
    category: ['App Development', 'Languages'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Flutter',
    competency: 3,
    category: ['Web Development', 'App Development'],
  },
  {
    title: 'Amazon Web Services',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Google Firebase',
    competency: 2,
    category: ['Web Development', 'Tools', 'Javascript'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'HTML + SCSS/CSS',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
