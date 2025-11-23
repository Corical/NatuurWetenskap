import React, { useState } from 'react';
import { FileText, Github, Download, Copy, CheckCircle } from 'lucide-react';

const ProjectFilesDownloader = () => {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const downloadFile = (content, filename) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const files = {
    readme: {
      name: 'README.md',
      content: `# Natuurwetenskappe Quiz App - Graad 5

🎓 Interactive quiz application for Grade 5 Natural Sciences (Afrikaans curriculum, Quarter 4)

## 📚 Features

- ✅ **Multiple Question Types**: Multiple choice, True/False, Multiple select
- ✅ **4 Curriculum Units**: Earth movement, Soil types, Sedimentary rocks, Fossils
- ✅ **48+ Questions**: Manual + Auto-generated + Web-sourced
- ✅ **Dynamic Randomization**: Fisher-Yates shuffle algorithm
- ✅ **Web Questions Toggle**: Include 10 additional internet-researched questions
- ✅ **Instant Feedback**: Explanations with page references
- ✅ **Grade System**: A-E grading with personalized feedback
- ✅ **Review Mode**: Complete answer review with explanations

## 🚀 Quick Start

### Option 1: React Development

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/natuurwetenskappe-quiz.git
cd natuurwetenskappe-quiz

# Install dependencies
npm install

# Start development server
npm start
\`\`\`

### Option 2: Use in Claude.ai Artifacts

1. Copy the content from \`src/App.jsx\`
2. Paste into Claude.ai artifacts
3. Quiz runs instantly!

## 📂 Project Structure

\`\`\`
natuurwetenskappe-quiz/
├── README.md
├── package.json
├── src/
│   ├── App.jsx              # Main quiz component
│   ├── data/
│   │   └── curriculum.json  # Curriculum data
│   └── index.js             # Entry point
└── public/
    └── index.html
\`\`\`

## 📖 Curriculum Coverage

### Eenheid 1: Die aarde beweeg (74-75)
- Earth's rotation (24 hours)
- Earth's orbit (365 days)
- Day/night cycle

### Eenheid 2: Grond - Soorte grond (76-79)
- Three soil types: Sand, Loam, Clay
- Soil properties and uses
- Topsoil vs subsoil

### Eenheid 3: Sedimentêre gesteentes (82-88)
- Formation over millions of years
- Types: Sandstone, Limestone, Shale, Coal
- Layered structure

### Eenheid 4: Fossiele (89-97)
- Body fossils vs trace fossils
- South African fossils (Sterkfontein, Karoo)
- Coelacanth (living fossil)

## 🎯 Question Sources

| Source | Count | Description |
|--------|-------|-------------|
| Manual Curriculum | 23 | Original textbook questions |
| Auto-Generated Vocab | 12+ | From vocabulary definitions |
| Auto-Generated Concepts | 3+ | From key concepts |
| Web-Sourced | 10 | Internet-researched (optional) |
| **Total** | **48+** | Fully randomized pool |

## 🔧 Technologies

- **React 18**: UI framework
- **Lucide React**: Icons
- **Tailwind CSS**: Styling (via CDN in artifacts)

## 🌐 Web Questions Source

Web questions researched from:
- Thunderbolt Kids educational resources
- South African CAPS curriculum materials
- Educational assessment papers (Grade 5-6)

## 📝 Usage Tips

1. **Select Units**: Choose which topics to include
2. **Set Difficulty**: Easy, Medium, Hard, or Mixed
3. **Choose Question Count**: 5-20 questions
4. **Toggle Web Questions**: Add internet-sourced questions
5. **Review Answers**: Complete review with explanations

## 🎓 Grading System

- **A (90%+)**: Uitstekend! 🌟
- **B (80-89%)**: Goed gedoen! 👏
- **C (70-79%)**: Redelik goed 📚
- **D (60-69%)**: Moet meer oefen 💪
- **E (<60%)**: Vra hulp en bestudeer weer 🎓

## 📄 License

MIT License - Free for educational use

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Made with ❤️ for South African learners**`
    },
    
    packageJson: {
      name: 'package.json',
      content: `{
  "name": "natuurwetenskappe-quiz",
  "version": "1.0.0",
  "description": "Interactive quiz app for Grade 5 Natural Sciences (Afrikaans CAPS curriculum)",
  "main": "src/index.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "lucide-react": "^0.263.1"
  },
  "eslintConfig": {
    "extends": [
      "react-app"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "keywords": [
    "education",
    "quiz",
    "natuurwetenskappe",
    "grade-5",
    "south-africa",
    "afrikaans",
    "CAPS"
  ],
  "author": "Your Name",
  "license": "MIT"
}`
    },

    gitignore: {
      name: '.gitignore',
      content: `# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Production
/build

# Misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo
*~`
    },

    setupInstructions: {
      name: 'SETUP.md',
      content: `# Setup Instructions

## For GitHub Repository

### 1. Create New Repository

\`\`\`bash
# On GitHub, create a new repository named: natuurwetenskappe-quiz
# Then locally:

mkdir natuurwetenskappe-quiz
cd natuurwetenskappe-quiz
git init
\`\`\`

### 2. Add Files

Create the following structure:

\`\`\`
natuurwetenskappe-quiz/
├── README.md
├── package.json
├── .gitignore
├── SETUP.md (this file)
├── public/
│   └── index.html
└── src/
    ├── index.js
    ├── App.jsx
    └── data/
        └── curriculum.json
\`\`\`

### 3. Copy Files

1. Copy **README.md** from the downloader
2. Copy **package.json** from the downloader
3. Copy **.gitignore** from the downloader
4. Copy **index.html** content to \`public/index.html\`
5. Copy **App.jsx** (the full quiz component) to \`src/App.jsx\`
6. Copy **index.js** to \`src/index.js\`
7. Copy **curriculum.json** to \`src/data/curriculum.json\`

### 4. Initialize Git

\`\`\`bash
git add .
git commit -m "Initial commit: Natuurwetenskappe Quiz App"
git branch -M main
git remote add origin https://github.com/yourusername/natuurwetenskappe-quiz.git
git push -u origin main
\`\`\`

### 5. Install and Run

\`\`\`bash
npm install
npm start
\`\`\`

## For Claude.ai Artifacts

**Easiest Option!** Just copy the \`App.jsx\` content and paste into Claude artifacts.

## For Other AI Agents

Share this repository URL with any AI agent:
\`\`\`
https://github.com/yourusername/natuurwetenskappe-quiz
\`\`\`

The agent can:
1. Read all files from the repository
2. Understand the project structure
3. Continue development
4. Make improvements
5. Add new features

## Project Context for AI Agents

This is an educational quiz application for South African Grade 5 students. Key points:

- **Language**: Afrikaans
- **Curriculum**: CAPS (South African curriculum)
- **Grade Level**: Grade 5 (10-11 years old)
- **Subject**: Natural Sciences & Technology (Natuurwetenskappe en Tegnologie)
- **Quarter**: Q4 (Topics: Earth, Soil, Rocks, Fossils)

### Development Notes

- React functional components with hooks
- Tailwind CSS for styling (CDN in artifacts)
- Lucide React for icons
- No external API dependencies
- All data embedded in component/JSON

### Future Enhancements Ideas

- [ ] Timer mode
- [ ] Progress tracking / localStorage
- [ ] More question types (fill-in-blank, matching)
- [ ] Image-based questions
- [ ] Sound effects
- [ ] Leaderboard
- [ ] Print certificate feature
- [ ] Multi-language support (English)
- [ ] Teacher dashboard
- [ ] Analytics/reporting`
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-4">
              <Github className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Natuurwetenskappe Quiz Project
            </h1>
            <p className="text-gray-600">Complete project files ready for GitHub or any AI agent</p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-xl text-center">
              <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">7 Files</h3>
              <p className="text-sm text-gray-600">Ready to download</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl text-center">
              <Github className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">GitHub Ready</h3>
              <p className="text-sm text-gray-600">Push to repository</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl text-center">
              <Copy className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">AI Compatible</h3>
              <p className="text-sm text-gray-600">Share with agents</p>
            </div>
          </div>

          {/* Files List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📂 Project Files</h2>

            {Object.entries(files).map(([key, file]) => (
              <div key={key} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-gray-600" />
                    <h3 className="text-lg font-semibold text-gray-800">{file.name}</h3>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => copyToClipboard(file.content, key)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center space-x-2"
                    >
                      {copied === key ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => downloadFile(file.content, file.name)}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition flex items-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 max-h-40 overflow-y-auto">
                  <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono">
                    {file.content.slice(0, 500)}...
                  </pre>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Files Note */}
          <div className="mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">⚠️ Additional Files Needed</h3>
            <p className="text-gray-700 mb-4">
              You also need these files (available from previous artifacts):
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">📄</span>
                <div>
                  <strong>src/App.jsx</strong> - The complete quiz component (from main artifact)
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📄</span>
                <div>
                  <strong>src/data/curriculum.json</strong> - The JSON curriculum file (from document 1)
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📄</span>
                <div>
                  <strong>public/index.html</strong> - Basic HTML template
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📄</span>
                <div>
                  <strong>src/index.js</strong> - React entry point
                </div>
              </li>
            </ul>
          </div>

          {/* GitHub Setup Guide */}
          <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Github className="w-8 h-8 mr-3" />
              Quick GitHub Setup
            </h3>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 font-mono text-sm space-y-2">
              <div>$ git init</div>
              <div>$ git add .</div>
              <div>$ git commit -m "Initial commit: Quiz app"</div>
              <div>$ git branch -M main</div>
              <div>$ git remote add origin https://github.com/YOUR-USERNAME/natuurwetenskappe-quiz.git</div>
              <div>$ git push -u origin main</div>
            </div>
          </div>

          {/* For AI Agents */}
          <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">🤖 For AI Agents</h3>
            <p className="text-gray-700 mb-4">
              To resume this project with another AI agent, simply share:
            </p>
            <div className="bg-white rounded-lg p-4 border border-green-300">
              <code className="text-sm text-gray-800">
                "Please help me with the Natuurwetenskappe Quiz project at: [GitHub URL]"
              </code>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              The agent can read all files, understand the context, and continue development seamlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilesDownloader;