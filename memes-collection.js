//#001: Job search ad

const candidateProfile = {
  fullName: 'Heorhii Aksiuk',
  currentPosition: 'Front-End Developer (React)',
  openToWork: true,
  experienceInYears: '1+',
  mainStack: [
    'HTML5',
    'CSS3',
    'SCSS',
    'JavaScriptES6+',
    'React',
    'Redux',
    'Node.js',
    'Express',
    'MongoDB',
  ],
}

const { fullName, currentPosition, openToWork, experienceInYears, mainStack } =
  candidateProfile

const sendMessage = ({
  fullName,
  currentPosition,
  openToWork,
  experienceInYears,
  mainStack,
}) => {
  // if(openToWork)
}

sendMessage(candidateProfile)
