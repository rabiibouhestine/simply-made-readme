const sections = [
    {
        id: 'custom-section',
        name: 'Custom Section',
        description: `Use this empty section if none of the other sections seem helpful.`,
        markdown: ``,
      },
    {
      id: 'title-and-description',
      name: 'Title and Description',
      description: `A brief description of what this project does and who it's for.`,
      markdown: `
  # Project Title
  
  A brief description of what this project does and who it's for.
  
  `,
    },
    {
      id: 'installation',
      name: 'Installation',
      description: `Listing specific steps helps remove ambiguity and confusion.`,
      markdown: `
  ## Installation
  
  Install my-project with npm
  
  \`\`\`bash
    npm install my-project
    cd my-project
  \`\`\`
      `,
    },
    {
      id: 'logo',
      name: 'Logo',
      description: `It can be a good idea to include a logo for your project.`,
      markdown: `
  ![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)
  
  `,
    },
    {
      id: 'run-locally',
      name: 'Run Locally',
      description: `Listing specific steps helps remove ambiguity and confusion.`,
      markdown: `
  ## Run Locally
  
  Clone the project
  
  \`\`\`bash
    git clone https://link-to-project
  \`\`\`
  
  Go to the project directory
  
  \`\`\`bash
    cd my-project
  \`\`\`
  
  Install dependencies
  
  \`\`\`bash
    npm install
  \`\`\`
  
  Start the server
  
  \`\`\`bash
    npm run start
  \`\`\`
  
  `,
    },
    {
      id: 'screenshots',
      name: 'Screenshots',
      description: `It can be a good idea to include screenshots of your project.`,
      markdown: `
  ## Screenshots
  
  ![App Screenshot](https://via.placeholder.com/600x300?text=App+Screenshot+Here)
  
  `,
    },
    {
      id: 'env-variables',
      name: 'Environment Variables',
      description: `List environment variables that are required to run the project.`,
      markdown: `
  ## Environment Variables
  
  To run this project, you will need to add the following environment variables to your .env file
  
  \`API_KEY\`
  
  \`ANOTHER_API_KEY\`
  
  `,
    },
    {
      id: 'features',
      name: 'Features',
      description: `List the features of your project to highlight what sets it apart.`,
      markdown: `
  ## Features
  
  - Light/dark mode toggle
  - Live previews
  - Fullscreen mode
  - Cross platform
  
  `,
    },
    {
      id: 'usage-examples',
      name: 'Usage/Examples',
      description: `Use examples liberally, and show the expected output if you can.`,
      markdown: `
  ## Usage/Examples
  
  \`\`\`javascript
  import Component from 'my-project'
  
  function App() {
    return <Component />
  }
  \`\`\`
  
  `,
    },
    {
      id: 'api',
      name: 'API Reference',
      description: `Include a table of API parameters with their type and description.`,
      markdown: `
  ## API Reference
  
  #### Get all items
  
  \`\`\`http
    GET /api/items
  \`\`\`
  
  | Parameter | Type     | Description                |
  | :-------- | :------- | :------------------------- |
  | \`api_key\` | \`string\` | **Required**. Your API key |
  
  #### Get item
  
  \`\`\`http
    GET /api/items/$\{id}
  \`\`\`
  
  | Parameter | Type     | Description                       |
  | :-------- | :------- | :-------------------------------- |
  | \`id\`      | \`string\` | **Required**. Id of item to fetch |
  
  #### add(num1, num2)
  
  Takes two numbers and returns the sum.
  
  `,
    },
    {
      id: 'contributing',
      name: 'Contributing',
      description: `State what your requirements are for accepting contributions.`,
      markdown: `
  ## Contributing
  
  Contributions are always welcome!
  
  See \`contributing.md\` for ways to get started.
  
  Please adhere to this project's \`code of conduct\`.
  
  `,
    },
    {
      id: 'tests',
      name: 'Running Tests',
      description: `Listing specific steps helps remove ambiguity and confusion.`,
      markdown: `
  ## Running Tests
  
  To run tests, run the following command
  
  \`\`\`bash
    npm run test
  \`\`\`
  
  `,
    },
    {
      id: 'license',
      name: 'License',
      description: `For some projects, it is important to say how they are licensed.`,
      markdown: `
  ## License
  
  [MIT](https://choosealicense.com/licenses/mit/)
  
  `,
    },
    {
      id: 'badges',
      name: 'Badges',
      description: `Add badges from somewhere like shields to convey metadata.`,
      markdown: `
  ## Badges
  
  Add badges from somewhere like: [shields.io](https://shields.io/)
  
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
  [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
  [![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
  
  `,
    },
    {
      id: 'roadmap',
      name: 'Roadmap',
      description: `It is a good idea to list ideas for future relases in the readme.`,
      markdown: `
  ## Roadmap
  
  - Additional browser support
  
  - Add more integrations
  
  `,
    },
    {
      id: 'authors',
      name: 'Authors',
      description: `Show your appreciation to those who have contributed.`,
      markdown: `
  ## Authors
  
  - [@octokatherine](https://www.github.com/octokatherine)
  
  `,
    },
    {
      id: 'acknowledgement',
      name: 'Acknowledgements',
      description: `Show your appreciation to the ustilised projects or tools.`,
      markdown: `
  ## Acknowledgements
  
   - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
   - [Awesome README](https://github.com/matiassingers/awesome-readme)
   - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
  
  `,
    },
    {
      id: 'support',
      name: 'Support',
      description: `Tell people how they can get help. Ex: a link, an email address, etc.`,
      markdown: `
  ## Support
  
  For support, email fake@fake.com or join our Slack channel.
  
  `,
    },
    {
      id: 'feedback',
      name: 'Feedback',
      description: `Tell people how they can provide feedbacks. Ex: an email address.`,
      markdown: `
  ## Feedback
  
  If you have any feedback, please reach out to us at fake@fake.com
  
  `,
    },
    {
      id: 'related',
      name: 'Related',
      description: `Tell people about alternatives or other similar or related projects.`,
      markdown: `
  ## Related
  
  Here are some related projects
  
  [Awesome README](https://github.com/matiassingers/awesome-readme)
  
  `,
    },
    {
      id: 'demo',
      name: 'Demo',
      description: `Include a video that showcases a demo of your project.`,
      markdown: `
  ## Demo
  
  Insert gif or link to demo
  
  `,
    },
    {
      id: 'tech',
      name: 'Tech',
      description: `What Tech Stack did you use in your project? E.g. React, Redux...`,
      markdown: `
  ## Tech Stack
  
  **Client:** React, Redux, TailwindCSS
  
  **Server:** Node, Express
  
  `,
    },
    {
      id: 'optimizations',
      name: 'Optimizations',
      description: `What optimizations did you make in your code? E.g. refactors, etc.`,
      markdown: `
  ## Optimizations
  
  What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility
  
  `,
    },
    {
      id: 'lessons',
      name: 'Lessons',
      description: `What did you learn while building this project? Any challenges?`,
      markdown: `
  ## Lessons Learned
  
  What did you learn while building this project? What challenges did you face and how did you overcome them?
  
  `,
    },
    {
      id: 'faq',
      name: 'FAQ',
      description: `Answer what you would expect as frequently asked questions.`,
      markdown: `
  ## FAQ
  
  #### Question 1
  
  Answer 1
  
  #### Question 2
  
  Answer 2
  
  `,
    },
    {
      id: 'used-by',
      name: 'Used By',
      description: `Include organisations that are currently using this project.`,
      markdown: `
  ## Used By
  
  This project is used by the following companies:
  
  - Company 1
  - Company 2
  
  `,
    },
    {
      id: 'documentation',
      name: 'Documentation',
      description: `Include a link to a detailed documentation of the project.`,
      markdown: `
  ## Documentation
  
  [Documentation](https://linktodocumentation)
  
  `,
    },
    {
      id: 'deployment',
      name: 'Deployment',
      description: `Listing specific steps helps remove ambiguity and confusion.`,
      markdown: `
  ## Deployment
  
  To deploy this project run
  
  \`\`\`bash
    npm run deploy
  \`\`\`
  
  `,
    },
    {
      id: 'appendix',
      name: 'Appendix',
      description: `Add any additionnal information in the appendix of the readme.`,
      markdown: `
  ## Appendix
  
  Any additional information goes here
  
  `,
    },
    {
      id: 'github-profile-intro',
      name: 'Github Profile - Introduction',
      description: `Add a brief introduction. Example: 'Hi, I'm John Doe! 👋'`,
      markdown: `
  # Hi, I'm John Doe! 👋
  
  `,
    },
    {
      id: 'github-profile-about-me',
      name: 'Github Profile - About Me',
      description: `Say a few things about yourself. Example: 'I'm a developer...'`,
      markdown: `
  ## 🚀 About Me
  I'm a full stack developer...
  
  `,
    },
    {
      id: 'github-profile-skills',
      name: 'Github Profile - Skills',
      description: `List your skills, all of your skills, the more the merrier :)`,
      markdown: `
  ## 🛠 Skills
  Javascript, HTML, CSS...
  
  `,
    },
    {
      id: 'github-profile-links',
      name: 'Github Profile - Links',
      description: `List your socials or other links, nicely displayed in badges.`,
      markdown: `
  ## 🔗 Links
  [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
  [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
  [![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)
  
  `,
    },
    {
      id: 'github-profile-other',
      name: 'Github Profile - Other',
      description: `What are you currently working on? Learning? Fun Facts?`,
      markdown: `
  ## Other Common Github Profile Sections
  👩‍💻 I'm currently working on...
  
  🧠 I'm currently learning...
  
  👯‍♀️ I'm looking to collaborate on...
  
  🤔 I'm looking for help with...
  
  💬 Ask me about...
  
  📫 How to reach me...
  
  😄 Pronouns...
  
  ⚡️ Fun fact...
  
  `,
    },
    {
      id: 'colorreference',
      name: 'Color Reference',
      description: `Add a nicely formatted table to provide color reference.`,
      markdown: `## Color Reference
  
  | Color             | Hex                                                                |
  | ----------------- | ------------------------------------------------------------------ |
  | Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
  | Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
  | Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
  | Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |
  
  `,
    },
    {
        id: 'attribution',
        name: 'Attribution',
        description: `Because you're awesome and enjoy Simply Made Readme.`,
        markdown: `
\\
\\
\\
\\
This readme was made with [Simply Made Readme](https://simplymadereadme.com).
    
    `,
      },
  ]

export default sections;