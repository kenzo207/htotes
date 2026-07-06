// Language Data
const translations = {
    fr: {
        nav_home: "Accueil", nav_collection: "Collection", nav_config: "Personnaliser", nav_about: "Notre Histoire", nav_order: "Commander",
        hero_tagline: "Artisanat & Personnalisation",
        hero_title: "As unique<br>as you are<span>.</span>",
        hero_desc: "Donnez vie à vos envies avec nos tote bags premium faits main.",
        config_title: "Configurez votre H Tote",
        config_desc: "Personnalisez votre sac en temps réel.",
        config_base_price: "(Base + Options)",
        config_color_title: "Couleur du sac",
        config_options_title: "Options de personnalisation",
        opt_flocage: "Ajouter un flocage (+1,500 F)",
        opt_charm: "Ajouter un charm en perles (+2,000 F)",
        opt_broderie: "Ajouter une broderie (+3,000 F)",
        opt_perles: "Ajouter un motif entier en perles (+4,000 F)",
        opt_strass: "Rajoute des strass (+2,000 F)",
        placeholder_broderie: "Quel motif ou mot souhaitez-vous broder ?",
        placeholder_charm_precision: "Des précisions ? (couleurs, taille...)",
        order_charm: "Charm choisi : ",
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
        about_p1: "Fondé en 2025 au Bénin, H Totes est né d'une conviction simple :\nce que tu portes doit te ressembler. Chaque tote bag est imaginé,\nbrodé et assemblé à la main, avec soin et intention.\nDes perles choisies une à une, des motifs pensés pour toi,\ndes couleurs qui parlent de qui tu es.\nIci, il n'y a pas de stock, pas de série.\nSeulement des pièces uniques, créées sur commande,\npour des femmes et des hommes qui savent ce qu'ils veulent.",
        about_insta: "Suivez-nous sur Instagram",
        footer_desc: "L'élégance artisanale, conçue pour durer.",
        footer_copy: "&copy; 2026 H Totes. Tous droits réservés.",
        order_summary_head: "Nouvelle commande H Totes !",
        order_color: "Couleur de base : ",
        order_options: "Options choisies : ",
        order_total: "Total : ",
        order_none: "Aucune",
        config_info_title: "Vos Informations",
        placeholder_lastname: "Nom",
        placeholder_firstname: "Prénom",
        placeholder_phone: "Numéro de téléphone",
        config_insta_btn: "Instagram",
        proto_title: "Prototypes Réels",
        proto_desc: "Visualisez nos créations terminées pour vous inspirer.",
        delivery_urgency: "Urgence Livraison :",
        delivery_time: "Délai minimum : 5 jours ouvrés.",
        tier4_name: "Custom Premium",
        cust_info_summary: "Client : ",
        config_model_title: "Choisir mon modèle",
        config_insp_title: "Mon inspiration",
        insp_btn_label: "Ajouter une image d'inspiration",
        insp_helper: "Partage une photo de référence (motif, couleurs, style...) pour que je puisse créer exactement ce que tu imagines.",
        insp_ready: "Image sélectionnée",
        order_insp_reminder: "⚠️ N'oubliez pas de joindre votre image d'inspiration à ce message !",
        inspo_title: "VOS INSPOS",
        inspo_desc: "Vous aimez une de nos créations ? Sélectionnez-la et dites-nous comment la personnaliser pour vous.",
        inspo_mod_label: "Des modifications à apporter ? (couleur, texte, motif...)",
        placeholder_inspo_mod: "Vos précisions ici...",
        order_gallery_inspo: "Inspiration choisie : ",
        order_gallery_mods: "Modifications : ",
        insta_toast: "Infos copiées ! Colle-les dans le DM ✦"
    },
    en: {
        nav_home: "Home", nav_collection: "Collection", nav_config: "Customize", nav_about: "Our Story", nav_order: "Order Now",
        hero_tagline: "Craftsmanship & Personalization",
        hero_title: "As unique<br>as you are<span>.</span>",
        hero_desc: "Bring your desires to life with our premium handmade tote bags.",
        config_title: "Configure your H Tote",
        config_desc: "Personalize your bag in real-time.",
        config_base_price: "(Base + Options)",
        config_color_title: "Bag Color",
        config_options_title: "Personalization Options",
        opt_flocage: "Add flocking (+1,500 F)",
        opt_charm: "Add a beaded charm (+2,000 F)",
        opt_broderie: "Add embroidery (+3,000 F)",
        opt_perles: "Add full bead motif (+4,000 F)",
        opt_strass: "Add rhinestones (+2,000 F)",
        placeholder_broderie: "What pattern or word would you like to embroider?",
        placeholder_charm_precision: "Any details? (colors, size...)",
        order_charm: "Chosen charm: ",
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
        about_p1: "Founded in 2025 in Benin, H Totes was born from a simple conviction:\nwhat you wear should look like you. Every tote bag is imagined,\nembroidered and hand-assembled, with care and intention.\nBeads chosen one by one, patterns designed for you,\ncolors that speak to who you are.\nHere, there is no stock, no series.\nOnly one-of-a-kind pieces, made to order,\nfor women and men who know what they want.",
        about_insta: "Follow us on Instagram",
        footer_desc: "Artisanal elegance, designed to last.",
        footer_copy: "&copy; 2026 H Totes. All rights reserved.",
        order_summary_head: "New H Totes Order!",
        order_color: "Base Color: ",
        order_options: "Chosen Options: ",
        order_total: "Total: ",
        order_none: "None",
        config_info_title: "Your Information",
        placeholder_lastname: "Last Name",
        placeholder_firstname: "First Name",
        placeholder_phone: "Phone Number",
        config_insta_btn: "Instagram",
        proto_title: "Real Prototypes",
        proto_desc: "Check out our finished creations for inspiration.",
        delivery_urgency: "Delivery Urgency:",
        delivery_time: "Minimum time: 5 business days.",
        tier4_name: "Custom Premium",
        cust_info_summary: "Customer: ",
        config_model_title: "Choose my Model",
        config_insp_title: "My Inspiration",
        insp_btn_label: "Add an inspiration image",
        insp_helper: "Share a reference photo (motif, colors, style...) so I can create exactly what you imagine.",
        insp_ready: "Image selected",
        order_insp_reminder: "⚠️ Don't forget to attach your inspiration image to this message!",
        inspo_title: "YOUR INSPOS",
        inspo_desc: "Love one of our creations? Select it and tell us how to personalize it for you.",
        inspo_mod_label: "Any modifications? (color, text, motif...)",
        placeholder_inspo_mod: "Your details here...",
        order_gallery_inspo: "Gallery Inspiration: ",
        order_gallery_mods: "Modifications: ",
        insta_toast: "Info copied! Paste it in the DM ✦"
    }
};

// State
let currentLang = 'fr';
let selectedModel = 'classic';
let selectedColor = 'Marron';
let basePrice = 2000;
let hasInspiration = false;
let selectedGalleryInspo = null;

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

// Model Selection Logic
document.querySelectorAll('.model-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.model-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedModel = card.getAttribute('data-model');
        basePrice = parseInt(card.getAttribute('data-price'));
        
        // Filter colors
        document.querySelectorAll('.color-circle').forEach(circle => {
            const models = circle.getAttribute('data-models').split(',');
            if (models.includes(selectedModel)) {
                circle.style.display = 'block';
            } else {
                circle.style.display = 'none';
                if (circle.classList.contains('selected')) {
                    // Switch to Blanc if current color is hidden
                    document.querySelector('.color-circle.color-white').click();
                }
            }
        });
        
        updatePrice();
        updatePreviewImage();
    });
});

// Color Logic
document.querySelectorAll('.color-circle').forEach(circle => {
    circle.addEventListener('click', () => {
        document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('selected'));
        circle.classList.add('selected');
        selectedColor = circle.getAttribute('data-color');
        updatePreviewImage();
    });
});

function updatePreviewImage() {
    const previewImg = document.getElementById('preview-img');
    const colorKey = selectedColor.toLowerCase();
    
    let imageSrc = '';
    
    if (selectedModel === 'classic') {
        const colorImages = {
            'marron': 'assets/inspo5.webp',
            'blanc': 'assets/inspo3.webp',
            'rose': 'assets/inspo2.webp',
            'violet': 'assets/inspo4.webp',
            'noir': 'assets/inspo1.webp',
            'gris': 'assets/inspo6.webp',
            'navy': 'assets/inspo7.webp'
        };
        imageSrc = colorImages[colorKey];
    } else {
        const softImages = {
            'vert': 'assets/soft_vert.webp',
            'bleu': 'assets/soft_bleu.webp',
            'blanc': 'assets/soft_blanc.webp',
            'gris': 'assets/soft_gris.webp',
            'noir': 'assets/soft_noir.webp',
            'navy': 'assets/soft_bleu.webp', // Fallback
            'marron': 'assets/soft_brown.webp',
            'violet': 'assets/soft_purple.webp',
            'rose': 'assets/soft_rose.webp'
        };
        imageSrc = softImages[colorKey] || softImages['blanc'];
    }

    if (imageSrc) {
        previewImg.style.opacity = '0';
        setTimeout(() => {
            previewImg.src = imageSrc;
            previewImg.style.opacity = '1';
        }, 300);
    }
}

// Customizer Logic
const totalPriceEl = document.getElementById('total-price');
const broderieCheck = document.getElementById('opt-broderie');
const motifInput = document.getElementById('motif-text');
const optChecks = document.querySelectorAll('.opt-check');
const charmCheck = document.getElementById('opt-charm');
const charmSection = document.getElementById('charm-section');
const charmItems = document.querySelectorAll('.charm-item');
const charmPrecisionInput = document.getElementById('charm-precision-text');
let selectedCharmNum = null;

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

    charmSection.style.display = charmCheck.checked ? 'block' : 'none';
    if (!charmCheck.checked) {
        charmItems.forEach(i => i.classList.remove('selected'));
        selectedCharmNum = null;
        charmPrecisionInput.classList.remove('visible');
        charmPrecisionInput.value = '';
    }
}

optChecks.forEach(check => check.addEventListener('change', updatePrice));

charmItems.forEach(item => {
    item.addEventListener('click', () => {
        const isSelected = item.classList.contains('selected');
        charmItems.forEach(i => i.classList.remove('selected'));

        if (isSelected) {
            selectedCharmNum = null;
            charmPrecisionInput.classList.remove('visible');
        } else {
            item.classList.add('selected');
            selectedCharmNum = item.getAttribute('data-charm-num');
            charmPrecisionInput.classList.add('visible');
        }
    });
});

// Finalize Order Logic
function getOrderData() {
    const lastName = document.getElementById('cust-lastname').value;
    const firstName = document.getElementById('cust-firstname').value;
    const phone = document.getElementById('cust-phone').value;

    if (!lastName || !firstName || !phone) {
        alert(currentLang === 'fr' ? "Veuillez remplir vos informations." : "Please fill in your information.");
        return null;
    }

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

    const orderData = {
        model: selectedModel === 'classic' ? 'H · Classic' : 'H · Soft',
        customer: `${firstName} ${lastName}`,
        phone: phone,
        color: selectedColor,
        options: options,
        total: total,
        hasInspiration: hasInspiration,
        galleryInspo: selectedGalleryInspo,
        galleryMods: selectedGalleryInspo ? document.getElementById('inspo-mod-text').value : '',
        charmChoice: charmCheck.checked && selectedCharmNum ? `Charm N°${selectedCharmNum}` : '',
        charmPrecision: charmCheck.checked && selectedCharmNum ? charmPrecisionInput.value : '',
        date: new Date().toISOString()
    };

    // Save to localStorage
    const history = JSON.parse(localStorage.getItem('htotes_orders') || '[]');
    history.push(orderData);
    localStorage.setItem('htotes_orders', JSON.stringify(history));

    return orderData;
}

function buildOrderSummary(order) {
    const t = translations[currentLang];
    return `
${t.order_summary_head}
-------------------------
Modèle : ${order.model}
${t.cust_info_summary}${order.customer}
${t.placeholder_phone}: ${order.phone}
${t.order_color} ${order.color}
${t.order_options} ${order.options.length > 0 ? order.options.join(', ') : t.order_none}
${t.order_total} ${order.total.toLocaleString()} F CFA
${order.hasInspiration ? '\n' + t.order_insp_reminder : ''}
${order.galleryInspo ? `\n${t.order_gallery_inspo}${order.galleryInspo}` : ''}
${order.galleryMods ? `\n${t.order_gallery_mods}${order.galleryMods}` : ''}
${order.charmChoice ? `\n${t.order_charm}${order.charmChoice}${order.charmPrecision ? ' - ' + order.charmPrecision : ''}` : ''}
    `.trim();
}

function showToast(message, duration = 3000) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'app-toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.remove('visible');
    requestAnimationFrame(() => toast.classList.add('visible'));
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => toast.classList.remove('visible'), duration);
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    }
    return Promise.resolve(fallbackCopy(text));
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
    } catch (e) { /* clipboard unavailable */ }
    document.body.removeChild(textarea);
}

document.getElementById('order-btn').addEventListener('click', () => {
    const order = getOrderData();
    if (!order) return;

    const summary = buildOrderSummary(order);
    const encodedSummary = encodeURIComponent(summary);
    const waLink = `https://wa.me/22955352525?text=${encodedSummary}`;

    window.open(waLink, '_blank');
});

function openInstagram() {
    const appUrl = 'instagram://user?username=h.totes';
    const webUrl = 'https://instagram.com/h.totes';
    let appOpened = false;

    const onHide = () => { appOpened = true; };
    document.addEventListener('visibilitychange', onHide);
    window.addEventListener('blur', onHide, { once: true });

    window.location.href = appUrl;

    setTimeout(() => {
        document.removeEventListener('visibilitychange', onHide);
        if (!appOpened) {
            window.open(webUrl, '_blank');
        }
    }, 1500);
}

document.getElementById('insta-btn').addEventListener('click', () => {
    const order = getOrderData();
    if (!order) return;

    const summary = buildOrderSummary(order);
    const t = translations[currentLang];

    copyToClipboard(summary).then(() => {
        showToast(t.insta_toast);
        setTimeout(openInstagram, 600);
    });
});

// Initial Price Update
updatePrice();

// Inspiration Upload Logic
const inspUpload = document.getElementById('insp-upload');
const uploadTrigger = document.getElementById('upload-trigger');
const previewContainer = document.getElementById('insp-preview-container');
const imgPreview = document.getElementById('insp-img-preview');
const removeInsp = document.getElementById('remove-insp');

if (uploadTrigger) {
    uploadTrigger.addEventListener('click', () => inspUpload.click());

    inspUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            alert(currentLang === 'fr' ? "L'image est trop volumineuse (max 5MB)." : "Image is too large (max 5MB).");
            inspUpload.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            imgPreview.src = e.target.result;
            previewContainer.style.display = 'flex';
            uploadTrigger.style.display = 'none';
            hasInspiration = true;
        };
        reader.readAsDataURL(file);
    });

    removeInsp.addEventListener('click', () => {
        inspUpload.value = '';
        previewContainer.style.display = 'none';
        uploadTrigger.style.display = 'flex';
        hasInspiration = false;
    });
}

// VOS INSPOS Interaction
const inspoItems = document.querySelectorAll('.inspo-item');
const inspoModContainer = document.getElementById('inspo-mod-container');

inspoItems.forEach(item => {
    item.addEventListener('click', () => {
        const isSelected = item.classList.contains('selected');
        
        // Clear all selections
        inspoItems.forEach(i => i.classList.remove('selected'));
        
        if (isSelected) {
            // Deselect
            selectedGalleryInspo = null;
            inspoModContainer.style.display = 'none';
        } else {
            // Select
            item.classList.add('selected');
            selectedGalleryInspo = item.getAttribute('data-inspo');
            inspoModContainer.style.display = 'block';
            inspoModContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
});

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

// Image Preloading for Configurator (Option E)
const imagesToPreload = [
    'assets/inspo5.webp',
    'assets/inspo3.webp',
    'assets/inspo2.webp',
    'assets/inspo4.webp',
    'assets/inspo1.webp',
    'assets/inspo6.webp',
    'assets/inspo7.webp',
    'assets/soft_vert.webp',
    'assets/soft_bleu.webp',
    'assets/soft_blanc.webp',
    'assets/soft_gris.webp',
    'assets/soft_noir.webp',
    'assets/soft_brown.webp',
    'assets/soft_purple.webp',
    'assets/soft_rose.webp',
    'assets/hero.webp'
];

window.addEventListener('load', () => {
    // Delay slightly to prioritize critical page resources
    setTimeout(() => {
        imagesToPreload.forEach(src => {
            const img = new Image();
            img.src = src;
        });
        console.log(`[Option E] Preloaded ${imagesToPreload.length} configurator assets successfully.`);
    }, 1000);
});
