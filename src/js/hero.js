document.addEventListener('DOMContentLoaded', function() {
    // Данные для секции Hero
    const mainHeadingText = "Hello. I’m Fullstack developer Lloyd Jefferson.";
    const socialLinks = [
        { name: "Instagram", url: "https://www.instagram.com/goitclub/" },
        { name: "YouTube", url: "https://www.youtube.com/c/GoIT" },
        { name: "Facebook", url: "https://www.facebook.com/goITclub/" },
        { name: "GitHub", url: "https://github.com/team-project-url" } 
    ];
    const contactEmail = "lloydjefferson@gmail.com";

    // Функция для создания секции Hero
    function createHeroSection() {
        const heroSection = document.getElementById('hero-section');

        // Создаем заголовок
        const heading = document.createElement('h1');
        heading.textContent = mainHeadingText;
        heroSection.appendChild(heading);

        // Создаем список ссылок на соц. сети
        const ul = document.createElement('ul');
        socialLinks.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.url;
            a.target = "_blank";
            a.textContent = link.name;
            li.appendChild(a);
            ul.appendChild(li);
        });
        heroSection.appendChild(ul);

        // Создаем контактный email
        const emailLink = document.createElement('a');
        emailLink.href = `mailto:${contactEmail}`;
        emailLink.textContent = contactEmail;
        heroSection.appendChild(emailLink);
    }

    // Вызов функции для создания секции Hero
    createHeroSection();
});