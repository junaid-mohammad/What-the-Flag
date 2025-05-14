# What the Flag? 🚩

[![Deployed via GitHub Actions](https://img.shields.io/badge/Deployed%20via-GitHub%20Actions-blue?logo=github)](https://github.com/junaid-mohammad/What-the-Flag)
[![Azure App Service](https://img.shields.io/badge/Hosted%20on-Azure%20App%20Service-brightgreen)](https://wtf-heb8cdgdadeya4gv.canadacentral-01.azurewebsites.net/)
[![Azure DevOps](https://img.shields.io/badge/Tracked%20in-Azure%20DevOps-blue)](https://dev.azure.com/Junaid-Arif/What%20the%20Flag)

**What the Flag?**, is a brutal global trivia game that asks: _do you know your flags, or will you confuse Norway for Nigeria?_ Whether you wave proudly or fold under pressure, your geopolitical reputation is on the line.

This project is a proud spin-off of [**Capitalism 🦈**](https://github.com/junaid-mohammad/Capitalism), my capital city quiz that laid the groundwork for reusable, modular, and unhinged geography-based apps. We reused the same full-stack architecture — **Node.js**, **Express**, **EJS**, **PostgreSQL**, and **Azure** — with a few tweaks and a whole lot of flagpoles.

Because once you’ve shorted your IQ, it only makes sense to offend an entire continent next.

---

## 🖥️ Live Website

👉 **[What the Flag?](https://wtf-heb8cdgdadeya4gv.canadacentral-01.azurewebsites.net/)**  
👉 **[GitHub Repo](https://github.com/junaid-mohammad/What-the-Flag)**  
👉 **[Azure DevOps Project](https://dev.azure.com/Junaid-Arif/What%20the%20Flag)**

---

## 🎯 Purpose

**What the Flag?** builds on the same stack and sass as [**Capitalism 🦈**](https://github.com/junaid-mohammad/Capitalism), but with a twist — now you’re misidentifying flags instead of capitals.

This project was designed to:

- Reuse the **full-stack quiz architecture** from Capitalism with a new dataset and theme.
- Practice modularizing **server-side rendering** using **EJS partials**.
- Work with a **live PostgreSQL cloud database** to deliver randomized country flags.
- Create a clean, sarcastic, and mobile-friendly **UX**.
- Separate client logic (submit button insults, game over injection) via modular **JavaScript**.
- Continuously deploy to **Azure App Service** using **GitHub Actions**.
- Keep things DRY, modular, and maintainable while scaling out meme-tier apps.

---

## 🛠️ Features

- **Random Flag Prompts**: Test your geography by identifying country flags one by one.
- **Brutal Feedback**: Every mistake is met with passive-aggressive roasts and bad diplomacy.
- **Score = Reputation**: Your global scorecard reflects how badly you embarrassed yourself.
- **Rotating Button Insults**: Submit button text changes every round — and none of it is encouraging.
- **Game Over View**: See the flag you butchered and the country you owe an apology.
- **Responsive Design**: Looks crisp and painful across all screen sizes.
- **Modular Codebase**: Views split into partials (`header`, `footer`), styles and scripts neatly organized.
- **Cloud-Backed Flag Data**: Quiz data lives in a PostgreSQL DB hosted on Azure.
- **Dark Footer Theme**: Optimized for visibility regardless of the chaotic background image.

---

## 💻 Technologies Used

- **Node.js** — JavaScript backend runtime
- **Express** — Server-side routing
- **EJS** — Dynamic HTML templating
- **PostgreSQL** — Cloud-hosted flag database
- **pg** — PostgreSQL client for Node.js
- **Body-Parser** — Parses form data from the quiz input
- **JavaScript (Client-side)** — Game logic and UI manipulation
- **HTML / CSS** — Structure and styling
- **Flexbox / Media Queries** — Responsive layout adjustments
- **Azure App Service** — Hosting platform
- **Azure PostgreSQL Flexible Server** — Flag data storage
- **GitHub Actions** — CI/CD automation
- **Azure DevOps** — Project tracking and history

---

## 🧠 What I Learned

- How to **modularize a full-stack quiz app** across multiple projects.
- Writing and maintaining **clean, responsive CSS** even with complex backgrounds.
- Designing UI/UX with an intentionally **meme-tier, satirical tone**.
- Working with **environment configs** to connect to Azure PostgreSQL on deployment.
- Leveraging **JavaScript modules** for small but crucial UI interactions (e.g., Game Over, button text).
- **Reusing existing backends** while creating entirely new experiences.
- Managing **multiple deployments** through GitHub and Azure DevOps simultaneously.

---

## 🚀 Deployment & Workflow

**What the Flag?** is deployed on **Azure App Service**, with its own cloud-hosted **PostgreSQL Flexible Server**, created in a new **Resource Group**. The entire cloud infrastructure — from App Service to DB — was set up from scratch, but using the **exact same deployment process** as [**Capitalism**](https://github.com/junaid-mohammad/Capitalism).

The project uses **GitHub Actions** for continuous deployment, while **Azure DevOps** is connected for backup version control and optional CI/CD extensions.

If you're setting this up from scratch or want to replicate the architecture, follow the **Capitalism README’s full deployment guide**, which details:

- How to create and configure PostgreSQL Flexible Server on Azure
- How to import `.sql` dumps
- How to securely manage environments across dev and production
- How to trigger deployments via GitHub Actions

---

### 🔗 Live Links

| Resource        | URL                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 🚩 App Website  | [wtf-heb8cdgdadeya4gv.canadacentral-01.azurewebsites.net](https://wtf-heb8cdgdadeya4gv.canadacentral-01.azurewebsites.net/) |
| 🛠 GitHub Repo   | [github.com/junaid-mohammad/What-the-Flag](https://github.com/junaid-mohammad/What-the-Flag)                                |
| 📈 Azure DevOps | [dev.azure.com/Junaid-Arif/What the Flag](https://dev.azure.com/Junaid-Arif/What%20the%20Flag)                              |

---

### 🧪 Local Dev vs Production

| Mode       | Database Source      | Config Source      |
| ---------- | -------------------- | ------------------ |
| Local Dev  | Localhost PostgreSQL | `.env` file        |
| Production | Azure PostgreSQL     | Azure App Settings |

The app supports both environments through shared connection logic powered by `dotenv`.

---

### ⚙️ Deployment Flow

After making changes:

```bash
git add .                                    # Stage changes
git commit -m "Your change message"          # Commit locally
git pull origin main --rebase                # Sync with remote (prevent conflicts)
git push origin main                         # Trigger GitHub Actions deployment
```

Pushing to `main` triggers GitHub Actions to auto-deploy to the live Azure site.

> Want step-by-step help? See [Capitalism’s Deployment Docs](https://github.com/junaid-mohammad/Capitalism#-deployment--workflow) — same exact process, just different vibes.

---

### 📦 Azure DevOps (Optional)

This project is also connected to **Azure DevOps** as a secondary remote:

```bash
git remote add azure https://Junaid-Arif@dev.azure.com/Junaid-Arif/What%20the%20Flag/_git/What%20the%20Flag
git push azure main
```

Currently used for **backup source control**, Azure DevOps may be used in the future for CI/CD via **Azure Pipelines**.

---

## 🤝 Contribution

This project was built as a follow-up to [**Capitalism**](https://github.com/junaid-mohammad/Capitalism) — because one unhinged geography quiz wasn’t enough. If you want to add country streaks, multiplayer mayhem, or a real-time geopolitical scoreboard, feel free to fork it and PR your flag-waving chaos into existence.

---

## 📄 License

This repo is open-source and proudly available for remixing, deploying, learning from, or using to embarrass your friends in front of a map. Use it for good — or for borderline geographical slander.

---

## 🔗 Credits

- Inspired by **Capitalism** — the game and the system.
- Built with **Node.js**, **Express**, **PostgreSQL**, and far too many flag emojis.
- Concept, code, and slander by [@junaid-arif](https://github.com/junaid-mohammad)
