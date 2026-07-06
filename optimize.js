const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');
const Terser = require('terser');
const sharp = require('sharp');

// Configuration
const ASSETS_DIR = path.join(__dirname, 'assets');
const LOGO_PNG = path.join(__dirname, 'logo.png');
const LOGO_WEBP = path.join(__dirname, 'logo.webp');

async function optimizeCSS() {
    console.log('Optimizing CSS...');
    const srcPath = path.join(__dirname, 'index.src.css');
    const destPath = path.join(__dirname, 'index.css');

    if (!fs.existsSync(srcPath)) {
        console.warn(`Source CSS file does not exist at ${srcPath}. Skipping CSS optimization.`);
        return;
    }

    try {
        const cssContent = fs.readFileSync(srcPath, 'utf8');
        const minified = new CleanCSS({ level: 2 }).minify(cssContent);

        if (minified.errors.length > 0) {
            console.error('CleanCSS Errors:', minified.errors);
        }
        if (minified.warnings.length > 0) {
            console.warn('CleanCSS Warnings:', minified.warnings);
        }

        fs.writeFileSync(destPath, minified.styles, 'utf-8');
        const origSize = (cssContent.length / 1024).toFixed(2);
        const minSize = (minified.styles.length / 1024).toFixed(2);
        console.log(`✓ CSS Minified: ${origSize} KB -> ${minSize} KB`);
    } catch (err) {
        console.error('Error optimizing CSS:', err);
    }
}

async function optimizeJS() {
    console.log('Optimizing JS...');
    const srcPath = path.join(__dirname, 'main.src.js');
    const destPath = path.join(__dirname, 'main.js');

    if (!fs.existsSync(srcPath)) {
        console.warn(`Source JS file does not exist at ${srcPath}. Skipping JS optimization.`);
        return;
    }

    try {
        const jsContent = fs.readFileSync(srcPath, 'utf8');
        const minified = await Terser.minify(jsContent, {
            compress: true,
            mangle: true
        });

        if (minified.error) {
            console.error('Terser Error:', minified.error);
            return;
        }

        fs.writeFileSync(destPath, minified.code, 'utf-8');
        const origSize = (jsContent.length / 1024).toFixed(2);
        const minSize = (minified.code.length / 1024).toFixed(2);
        console.log(`✓ JS Minified: ${origSize} KB -> ${minSize} KB`);
    } catch (err) {
        console.error('Error optimizing JS:', err);
    }
}

async function convertImageToWebP(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
        
        const origStats = fs.statSync(inputPath);
        const newStats = fs.statSync(outputPath);
        const origKB = (origStats.size / 1024).toFixed(1);
        const newKB = (newStats.size / 1024).toFixed(1);
        const pctReduction = ((origStats.size - newStats.size) / origStats.size * 100).toFixed(0);
        console.log(`Converted ${path.basename(inputPath)}: ${origKB}KB -> WebP: ${newKB}KB (${pctReduction}% reduction)`);
        return true;
    } catch (err) {
        console.error(`Failed to convert image ${inputPath} to WebP:`, err);
        return false;
    }
}

async function optimizeImages() {
    console.log('Optimizing assets and images...');
    
    // 1. Convert logo
    if (fs.existsSync(LOGO_PNG)) {
        const success = await convertImageToWebP(LOGO_PNG, LOGO_WEBP);
        if (success) {
            // Delete original logo.png
            try {
                fs.unlinkSync(LOGO_PNG);
                console.log(`Deleted original source logo: ${LOGO_PNG}`);
            } catch (err) {
                console.warn(`Could not delete original logo.png: ${err.message}`);
            }
        }
    } else {
        console.log('logo.png not found or already processed.');
    }

    // 2. Scan assets directory
    if (!fs.existsSync(ASSETS_DIR)) {
        console.warn(`Assets directory not found at ${ASSETS_DIR}`);
        return;
    }

    const files = fs.readdirSync(ASSETS_DIR);
    let convertedCount = 0;
    
    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (ext === '.png' || ext === '.jpeg' || ext === '.jpg') {
            const inputPath = path.join(ASSETS_DIR, file);
            const baseName = path.basename(file, ext);
            const outputPath = path.join(ASSETS_DIR, `${baseName}.webp`);

            const success = await convertImageToWebP(inputPath, outputPath);
            if (success) {
                convertedCount++;
                try {
                    fs.unlinkSync(inputPath);
                } catch (err) {
                    console.warn(`Could not delete original file ${file}: ${err.message}`);
                }
            }
        }
    }
    
    console.log(`✓ Processed & converted ${convertedCount} images to WebP inside assets/`);
}

async function run() {
    console.log('=== STARTING PERFORMANCE OPTIMIZATION BUILD ===');
    await optimizeCSS();
    await optimizeJS();
    await optimizeImages();
    console.log('=== OPTIMIZATION BUILD COMPLETE ===');
}

run();
