<template>
    <div class="profile">
        <div class="container">
            <header class="hero-section">
                <div class="intro-text">
                    <h1>Ashton Brian Garcia</h1>
                </div>
            </header>
            <div class="divider"></div>
            <main>
                <section class="info-grid">
                    <div class="card">
                        <h3>About me</h3>
                        <p>I am a student who is interested in Technology.</p>
                    </div>
                    <div class="card">
                        <h3>Education / Achievements</h3>
                        <p>NU MOA<br>Asia Pacific College</p>
                    </div>
                    <div class="card">
                        <h3>Course</h3>
                        <p>Information Technology</p>
                    </div>
                    <div class="card">
                        <h3>IT Experience</h3>
                        <p>I have experience using basic coding.</p>
                    </div>
                    <div class="card">
                        <h3>Hobbies & Interests</h3>
                        <p>Gaming<br>Bedrotting</p>
                    </div>
                    <div class="card">
                        <h3>Goals In Life / Dream</h3>
                        <p>To have a stable job.</p>
                    </div>
                    <div class="card">
                        <h3>Skills</h3>
                        <p>My technical skills are basic skills</p>
                        <ul class="skills-list">
                            <li>HTML5 & CSS3</li>
                            <li>JavaScript ES6+</li>
                            <li>Vue.js 3</li>
                            <li>Flexbox & Grid Layout</li>
                            <li>Git & GitHub</li>
                            <li>Responsive Web Design</li>
                            <li>Arduino Programming</li>
                        </ul>
                    </div>
                </section>
            </main>
            <footer>
                <p>IT241 WEBPROG</p>
            </footer>
        </div>
    </div>
  
</template>

<script>
export default {
    name: 'PersonalProfile'
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .profile {
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #000000 0%, #1a1a2e 100%);
        min-height: 100vh;
        padding: 20px;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        background: #0f0f23;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(255, 215, 0, 0.3);
        overflow: hidden;
        border: 2px solid #FFD700;
    }

    .hero-section {
        background: linear-gradient(135deg, #000000 0%, #1e3a8a 100%);
        padding: 60px 40px;
        text-align: center;
        color: #FFD700;
    }

    .intro-text h1 {
        font-size: 2.5rem;
        font-weight: 700;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    }

    .divider {
        height: 4px;
        background: linear-gradient(90deg, #FFD700 0%, #1e3a8a 50%, #FFD700 100%);
    }

    main {
        padding: 40px;
        background: #000000;
    }

    .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 25px;
    }

    .card {
        background: #1a1a2e;
        padding: 25px;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(255, 215, 0, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border: 1px solid #FFD700;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 15px rgba(255, 215, 0, 0.5);
    }

    .card h3 {
        color: #FFD700;
        margin-bottom: 15px;
        font-size: 1.3rem;
        border-bottom: 2px solid #FFD700;
        padding-bottom: 10px;
    }

    .card p {
        color: #ffffff;
        line-height: 1.6;
        margin-bottom: 10px;
    }

    .skills-list {
        list-style: none;
        margin-top: 15px;
    }

    .skills-list li {
        background: #000000;
        padding: 10px 15px;
        margin: 8px 0;
        border-radius: 8px;
        border-left: 4px solid #FFD700;
        color: #ffffff;
        transition: all 0.3s ease;
    }

    .skills-list li:hover {
        background: #1e3a8a;
        color: #FFD700;
        transform: translateX(5px);
        border-left-color: #FFD700;
    }

    footer {
        background: #000000;
        color: #FFD700;
        text-align: center;
        padding: 20px;
        border-top: 2px solid #FFD700;
    }

    @media (max-width: 768px) {
        .hero-section {
            padding: 40px 20px;
        }
        .intro-text h1 {
            font-size: 1.8rem;
        }
        main {
            padding: 20px;
        }
        .info-grid {
            grid-template-columns: 1fr;
        }
    }
</style>