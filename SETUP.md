\# Setup Instructions



\## For GitHub Repository



\### 1. Create New Repository



```bash

\# On GitHub, create a new repository named: natuurwetenskappe-quiz

\# Then locally:



mkdir natuurwetenskappe-quiz

cd natuurwetenskappe-quiz

git init

```



\### 2. Add Files



Create the following structure:



```

natuurwetenskappe-quiz/

├── README.md

├── package.json

├── .gitignore

├── SETUP.md (this file)

├── public/

│   └── index.html

└── src/

&nbsp;   ├── index.js

&nbsp;   ├── App.jsx

&nbsp;   └── data/

&nbsp;       └── curriculum.json

```



\### 3. Copy Files



1\. Copy \*\*README.md\*\* from the downloader

2\. Copy \*\*package.json\*\* from the downloader

3\. Copy \*\*.gitignore\*\* from the downloader

4\. Copy \*\*index.html\*\* content to `public/index.html`

5\. Copy \*\*App.jsx\*\* (the full quiz component) to `src/App.jsx`

6\. Copy \*\*index.js\*\* to `src/index.js`

7\. Copy \*\*curriculum.json\*\* to `src/data/curriculum.json`



\### 4. Initialize Git



```bash

git add .

git commit -m "Initial commit: Natuurwetenskappe Quiz App"

git branch -M main

git remote add origin https://github.com/yourusername/natuurwetenskappe-quiz.git

git push -u origin main

```



\### 5. Install and Run



```bash

npm install

npm start

```



\## For Claude.ai Artifacts



\*\*Easiest Option!\*\* Just copy the `App.jsx` content and paste into Claude artifacts.



\## For Other AI Agents



Share this repository URL with any AI agent:

```

https://github.com/yourusername/natuurwetenskappe-quiz

```



The agent can:

1\. Read all files from the repository

2\. Understand the project structure

3\. Continue development

4\. Make improvements

5\. Add new features



\## Project Context for AI Agents



This is an educational quiz application for South African Grade 5 students. Key points:



\- \*\*Language\*\*: Afrikaans

\- \*\*Curriculum\*\*: CAPS (South African curriculum)

\- \*\*Grade Level\*\*: Grade 5 (10-11 years old)

\- \*\*Subject\*\*: Natural Sciences \& Technology (Natuurwetenskappe en Tegnologie)

\- \*\*Quarter\*\*: Q4 (Topics: Earth, Soil, Rocks, Fossils)



\### Development Notes



\- React functional components with hooks

\- Tailwind CSS for styling (CDN in artifacts)

\- Lucide React for icons

\- No external API dependencies

\- All data embedded in component/JSON



\### Future Enhancements Ideas



\- \[ ] Timer mode

\- \[ ] Progress tracking / localStorage

\- \[ ] More question types (fill-in-blank, matching)

\- \[ ] Image-based questions

\- \[ ] Sound effects

\- \[ ] Leaderboard

\- \[ ] Print certificate feature

\- \[ ] Multi-language support (English)

\- \[ ] Teacher dashboard

\- \[ ] Analytics/reporting

