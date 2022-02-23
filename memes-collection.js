//#001: Job search ad
import post from './post'
import visitor from './visitor-profile'

const me = {
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

const sendMessage = (candidateProfile, visitorProfile) => {
  const { currentPosition, openToWork, experienceInYears, mainStack } =
    candidateProfile
  const { hiring, vacancy } = visitorProfile

  // if(openToWork)
}

sendMessage(myProfile)
