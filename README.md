# InternHunt

**InternHunt** is a full-stack internship tracker and scoring platform built to help students manage internship applications, prioritize top opportunities, and track progress in real time.

## 🚀 Features

- Add, edit, and delete internship applications
- Score each application based on interest, company prestige, urgency, and other custom weights
- View a centralized dashboard of deadlines and statuses
- Secure user authentication
- Real-time updates using serverless AWS infrastructure
- _(Planned)_ Resume uploads (S3), Email/Discord reminders (SES/SNS)

## 🧱 Tech Stack

### Frontend

- React.js
- Tailwind CSS
- AWS Amplify (CI/CD + Hosting)

### Backend

- AWS Lambda (Python)
- API Gateway (RESTful endpoints)
- DynamoDB (NoSQL database)

### Auth & Storage

- AWS Cognito (User Authentication)
- AWS S3 (Resume uploads - optional)
- AWS SES/SNS (Email/SMS reminders - optional)

## 📦 Folder Structure

InternHunt/
├── amplify/ # AWS Amplify project config
├── backend/ # Python Lambda functions & logic
│ ├── scoring/
│ ├── handlers/
│ └── shared/
├── frontend/ # React + Tailwind frontend
│ ├── src/
│ └── public/
├── README.md
└── .gitignore

less
Copy
Edit

## 👥 Collaborators

- Sopeaq Chhom (@SopeckChhom)
- [Teammate Name] (@GitHubUsername)

## ✅ Project Status

- [x] Project initialized
- [ ] Backend Lambda functions written
- [ ] Frontend connected to API
- [ ] Auth and data storage complete
- [ ] Optional features integrated

## 📝 License

MIT License
