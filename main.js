// Language Data
const translations = {
    fr: {
        nav_home: "Accueil", nav_collection: "Collection", nav_config: "Personnaliser", nav_about: "Notre Histoire", nav_order: "Commander",
        hero_tagline: "Artisanat & Personnalisation",
        hero_title: "As unique<br>as you are<span>.</span>",
        hero_desc: "Donnez vie à vos envies avec nos tote bags premium faits main.",
        hero_cta: "Explorer la collection",
        config_title: "Configurez votre H Tote",
        config_desc: "Personnalisez votre sac en temps réel.",
        config_base_price: "(Base + Options)",
        config_color_title: "Couleur du sac",
        config_options_title: "Options de personnalisation",
        opt_flocage: "Ajouter un flocage (+1,500 F)",
        opt_chainette: "Ajouter une chaînette (+2,500 F)",
        opt_broderie: "Ajouter une broderie (+3,000 F)",
        opt_perles: "Ajouter un motif entier en perles (+4,000 F)",
        placeholder_broderie: "Quel motif ou mot souhaitez-vous broder ?",
        config_order_btn: "Finaliser ma commande",
        config_order_note: "* Un résumé sera généré pour votre message direct.",
        how_title: "C'est vous qui créez",
        how_desc: "Un processus simple pour un résultat d'exception.",
        step1_title: "Configuration", step1_desc: "Choisissez la couleur de votre base directement ci-dessus.",
        step2_title: "Personnalisation", step2_desc: "Sélectionnez vos options et visualisez le prix.",
        step3_title: "Confection", step3_desc: "Nos artisans préparent votre sac unique.",
        step4_title: "Livraison", step4_desc: "In-person ou envoi postal.",
        about_tagline: "NOTRE HISTOIRE",
        about_title: "Le Savoir-faire de Huziane",
        about_p1: "Fondé en 2025, H Totes est né d'une passion pour les accessoires qui racontent une histoire. Chaque objet que nous portons doit être le reflet de notre identité.",
        about_insta: "Suivez-nous sur Instagram",
        footer_desc: "L'élégance artisanale, conçue pour durer.",
        footer_copy: "&copy; 2026 H Totes. Tous droits réservés.",
        order_summary_head: "Nouvelle commande H Totes !",
        order_color: "Couleur de base : ",
        order_options: "Options choisies : ",
        order_total: "Total : ",
        order_none: "Aucune"
    },
    en: {
        nav_home: "Home", nav_collection: "Collection", nav_config: "Customize", nav_about: "Our Story", nav_order: "Order Now",
        hero_tagline: "Craftsmanship & Personalization",
        hero_title: "As unique<br>as you are<span>.</span>",
        hero_desc: "Bring your desires to life with our premium handmade tote bags.",
        hero_cta: "Explore Collection",
        config_title: "Configure your H Tote",
        config_desc: "Personalize your bag in real-time.",
        config_base_price: "(Base + Options)",
        config_color_title: "Bag Color",
        config_options_title: "Personalization Options",
        opt_flocage: "Add flocking (+1,500 F)",
        opt_chainette: "Add bead chain (+2,500 F)",
        opt_broderie: "Add embroidery (+3,000 F)",
        opt_perles: "Add full bead motif (+4,000 F)",
        placeholder_broderie: "What pattern or word would you like to embroider?",
        config_order_btn: "Finalize my order",
        config_order_note: "* A summary will be generated for your direct message.",
        how_title: "You're the Creator",
        how_desc: "A simple process for an exceptional result.",
        step1_title: "Configuration", step1_desc: "Choose your base color directly above.",
        step2_title: "Personalization", step2_desc: "Select your options and visualize the price.",
        step3_title: "Crafting", step3_desc: "Our artisans prepare your unique bag.",
        step4_title: "Delivery", step4_desc: "In-person or post delivery.",
        about_tagline: "OUR STORY",
        about_title: "Huziane's Craftsmanship",
        about_p1: "Founded in 2025, H Totes was born from a passion for accessories that tell a story.",
        about_insta: "Follow us on Instagram",
        footer_desc: "Artisanal elegance, designed to last.",
        footer_copy: "&copy; 2026 H Totes. All rights reserved.",
        order_summary_head: "New H Totes Order!",
        order_color: "Base Color: ",
        order_options: "Chosen Options: ",
        order_total: "Total: ",
        order_none: "None"
    }
};

// State
let currentLang = 'fr';
let selectedColor = 'Beige';
const basePrice = 2000; // Updated as per user feedback

// Language Logic
function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) el.placeholder = translations[lang][key];
    });
    document.getElementById('btn-fr').classList.toggle('active', lang === 'fr');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
}

document.getElementById('btn-fr').addEventListener('click', () => setLanguage('fr'));
document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));

// Color Logic
document.querySelectorAll('.color-circle').forEach(circle => {
    circle.addEventListener('click', () => {
        document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('selected'));
        circle.classList.add('selected');
        selectedColor = circle.getAttribute('data-color');
    });
});

// Customizer Logic
const totalPriceEl = document.getElementById('total-price');
const broderieCheck = document.getElementById('opt-broderie');
const motifInput = document.getElementById('motif-text');
const optChecks = document.querySelectorAll('.opt-check');

function updatePrice() {
    let total = basePrice;
    optChecks.forEach(check => {
        if (check.checked) {
            total += parseInt(check.getAttribute('data-price'));
            check.closest('.check-item').classList.add('selected');
        } else {
            check.closest('.check-item').classList.remove('selected');
        }
    });
    totalPriceEl.textContent = total.toLocaleString();
    motifInput.classList.toggle('visible', broderieCheck.checked);
}

optChecks.forEach(check => check.addEventListener('change', updatePrice));

// Finalize Order Logic
document.getElementById('order-btn').addEventListener('click', () => {
    let options = [];
    let total = basePrice;
    
    optChecks.forEach(check => {
        if (check.checked) {
            let label = check.nextElementSibling.textContent.split('(')[0].trim();
            if (check.id === 'opt-broderie' && motifInput.value) {
                label += ` ("${motifInput.value}")`;
            }
            options.push(label);
            total += parseInt(check.getAttribute('data-price'));
        }
    });

    const t = translations[currentLang];
    const summary = `
${t.order_summary_head}
-------------------------
${t.order_color} ${selectedColor}
${t.order_options} ${options.length > 0 ? options.join(', ') : t.order_none}
${t.order_total} ${total.toLocaleString()} F CFA
    `.trim();

    // Generate WhatsApp link (placeholder number, user should update it)
    const encodedSummary = encodeURIComponent(summary);
    const waLink = `https://wa.me/?text=${encodedSummary}`;
    
    // Fallback: Copy to clipboard and alert user
    navigator.clipboard.writeText(summary).then(() => {
        const msg = currentLang === 'fr' 
            ? "Résumé de commande copié ! Redirection vers la messagerie..." 
            : "Order summary copied! Redirecting to messaging...";
        alert(msg);
        window.open(waLink, '_blank');
    });
});

// Initial Price Update
updatePrice();

// Scroll & Animations
const header = document.querySelector('header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 50));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section, .product-card, .step').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

const revealStyles = document.createElement('style');
revealStyles.textContent = `
    .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
    .reveal-visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(revealStyles);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    });
});
