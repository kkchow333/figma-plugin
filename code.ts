"use strict";

figma.showUI(__html__, { width: 350, height: 565 });

figma.ui.onmessage = (msg) => {
    console.log("Received message:", msg);
    console.log("Dropdown value:", msg.dropdown);
    console.log("Shape value:", msg.shape);

    const typographyShapes: string[] = ['star', 'circle', 'triangle'];
    const hierarchyShapes: string[] = ['hier1', 'hier2', 'hier3'];
    const spacingShapes: string[] = ['space1', 'space2', 'space3'];
    const contrastShapes: string[] = ['contrast1', 'contrast2', 'contrast3'];

    // Function to get random item from array
    const getRandomItem = (array: string[]) => {
        return array[Math.floor(Math.random() * array.length)];
    };

    // If shuffle button is clicked, randomly select a shape
    if (msg.type === 'shuffle') {
        const randomDropdown = Math.random() < 0.5 ? 'typography' : 'hierarchy';
        const randomShape = randomDropdown === 'typography' 
            ? getRandomItem(typographyShapes) 
            : getRandomItem(hierarchyShapes);
        
        // Send the randomly selected values back to the UI
        figma.ui.postMessage({
            type: 'update-selection',
            dropdown: randomDropdown,
            shape: randomShape
        });
        return;
    }

    if (msg.type === 'apply-shape') {
        const frame = figma.createFrame();
        frame.resize(393, 852);
        frame.x = figma.viewport.center.x - 150;
        frame.y = figma.viewport.center.y - 150;

        console.log("Checking condition:", msg.dropdown === 'typography', typographyShapes.includes(msg.shape));

        if (msg.dropdown === 'typography' && typographyShapes.includes(msg.shape)) {
            if (msg.shape === 'circle') {
                // Create white background rectangle
                const backgroundRect = figma.createRectangle();
                backgroundRect.resize(393, 852);
                backgroundRect.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
                backgroundRect.x = 0;
                backgroundRect.y = 0;
                frame.appendChild(backgroundRect);

                figma.loadFontAsync({ family: "Arial", style: "Regular" }).then(() => {
                    // Main title
                    const mainTitle = figma.createText();
                    mainTitle.fontName = { family: "Arial", style: "Regular" };
                    mainTitle.characters = "Coffee Shop Menu";
                    mainTitle.fontSize = 37;
                    mainTitle.x = 25;
                    mainTitle.y = 75;
                    mainTitle.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
                    frame.appendChild(mainTitle);

                    // Coffee Drinks section with black text
                    const coffeeTitle = figma.createText();
                    coffeeTitle.fontName = { family: "Arial", style: "Regular" };
                    coffeeTitle.characters = "Coffee Drinks";
                    coffeeTitle.fontSize = 29;
                    coffeeTitle.x = 25;
                    coffeeTitle.y = 170;
                    coffeeTitle.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
                    frame.appendChild(coffeeTitle);

                    const coffeeItems = [
                        "Espresso $5",
                        "Double Espresso $5",
                        "Latte $5",
                        "Americano $5"
                    ];

                    coffeeItems.forEach((item, index) => {
                        const itemText = figma.createText();
                        itemText.fontName = { family: "Arial", style: "Regular" };
                        itemText.characters = item;
                        itemText.fontSize = 25;
                        itemText.x = 25;
                        itemText.y = 210 + (index * 35);
                        itemText.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
                        frame.appendChild(itemText);
                    });

                    // Tea Drinks section with black text
                    const teaTitle = figma.createText();
                    teaTitle.fontName = { family: "Arial", style: "Regular" };
                    teaTitle.characters = "Tea Drinks";
                    teaTitle.fontSize = 29;
                    teaTitle.x = 25;
                    teaTitle.y = 400;
                    teaTitle.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
                    frame.appendChild(teaTitle);

                    const teaItems = [
                        "Lemon Tea $3",
                        "Mango Tea $3",
                        "Jasmine Green Tea $3",
                        "Earl Grey Tea $3",
                        "Black Tea $3",
                        "Peach Tea $3"
                    ];

                    teaItems.forEach((item, index) => {
                        const itemText = figma.createText();
                        itemText.fontName = { family: "Arial", style: "Regular" };
                        itemText.characters = item;
                        itemText.fontSize = 25;
                        itemText.x = 25;
                        itemText.y = 440 + (index * 35);
                        itemText.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
                        frame.appendChild(itemText);
                    });
                });

            } else if (msg.shape === 'star') {
                // Create white background rectangle
                const backgroundRect = figma.createRectangle();
                backgroundRect.resize(393, 852);
                backgroundRect.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
                backgroundRect.x = 0;
                backgroundRect.y = 0;
                frame.appendChild(backgroundRect);

                figma.loadFontAsync({ family: "Arial", style: "Regular" }).then(() => {
                    // Title
                    const title = figma.createText();
                    title.fontName = { family: "Arial", style: "Regular" };
                    title.characters = "Romeo and Juliet";
                    title.fontSize = 34;
                    title.x = 25;
                    title.y = 25;
                    title.resize(340, title.height);
                    frame.appendChild(title);

                    // Author
                    const author = figma.createText();
                    author.fontName = { family: "Arial", style: "Regular" };
                    author.characters = "By: William Shakespeare";
                    author.fontSize = 25;
                    author.x = 25;
                    author.y = title.y + title.height + 20;
                    author.resize(340, author.height);
                    frame.appendChild(author);

                    // Intro heading
                    const introHeading = figma.createText();
                    introHeading.fontName = { family: "Arial", style: "Regular" };
                    introHeading.characters = "INTRO";
                    introHeading.fontSize = 25;
                    introHeading.x = 25;
                    introHeading.y = author.y + author.height + 30;
                    introHeading.resize(340, introHeading.height);
                    frame.appendChild(introHeading);

                    // Intro text (first paragraph)
                    const introText1 = figma.createText();
                    introText1.fontName = { family: "Arial", style: "Regular" };
                    introText1.characters = "The Tragedy of Romeo and Juliet, often shortened to Romeo and Juliet, is a tragedy written by William Shakespeare early in his career about the romance between two Italian youths from feuding families";
                    introText1.fontSize = 20;
                    introText1.x = 25;
                    introText1.y = introHeading.y + introHeading.height + 20;
                    introText1.resize(340, introText1.height);
                    frame.appendChild(introText1);

                    // Intro text (second paragraph)
                    const introText2 = figma.createText();
                    introText2.fontName = { family: "Arial", style: "Regular" };
                    introText2.characters = "It was among Shakespeare's most popular plays during his lifetime.";
                    introText2.fontSize = 20;
                    introText2.x = 25;
                    introText2.y = introText1.y + introText1.height + 20;
                    introText2.resize(340, introText2.height);
                    frame.appendChild(introText2);

                    // Plot heading
                    const plotHeading = figma.createText();
                    plotHeading.fontName = { family: "Arial", style: "Regular" };
                    plotHeading.characters = "PLOT";
                    plotHeading.fontSize = 25;
                    plotHeading.x = 25;
                    plotHeading.y = introText2.y + introText2.height + 30;
                    plotHeading.resize(340, plotHeading.height);
                    frame.appendChild(plotHeading);

                    // Plot text (first paragraph)
                    const plotText1 = figma.createText();
                    plotText1.fontName = { family: "Arial", style: "Regular" };
                    plotText1.characters = "Two wealthy families, the Montagues and the Capulets, have another brawl in the city of Verona. The Prince and the townspeople cannot cope with the constant fighting so Prince declares that the next person to break the peace will be killed.";
                    plotText1.fontSize = 20;
                    plotText1.x = 25;
                    plotText1.y = plotHeading.y + plotHeading.height + 20;
                    plotText1.resize(340, plotText1.height);
                    frame.appendChild(plotText1);

                    // Plot text (second paragraph)
                    const plotText2 = figma.createText();
                    plotText2.fontName = { family: "Arial", style: "Regular" };
                    plotText2.characters = "However at the night of the dance Romeo and Juliet cross paths forever changing the course of history for their two families.";
                    plotText2.fontSize = 20;
                    plotText2.x = 25;
                    plotText2.y = plotText1.y + plotText1.height + 20;
                    plotText2.resize(340, plotText2.height);
                    frame.appendChild(plotText2);
                });
            } else if (msg.shape === 'triangle') {
                // Create white background rectangle
                const backgroundRect = figma.createRectangle();
                backgroundRect.resize(393, 852);
                backgroundRect.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
                backgroundRect.x = 0;
                backgroundRect.y = 0;
                frame.appendChild(backgroundRect);

                figma.loadFontAsync({ family: "Arial", style: "Regular" }).then(() => {
                    // Limited Edition text
                    const limitedText = figma.createText();
                    limitedText.fontName = { family: "Arial", style: "Regular" };
                    limitedText.characters = "Limited Edition";
                    limitedText.fontSize = 32;
                    limitedText.x = 25;
                    limitedText.y = 25;
                    limitedText.resize(340, limitedText.height);
                    limitedText.textAlignHorizontal = "CENTER";
                    frame.appendChild(limitedText);

                    // Title (Caribou in July)
                    const title = figma.createText();
                    title.fontName = { family: "Arial", style: "Regular" };
                    title.characters = "Caribou in July";
                    title.fontSize = 34;
                    title.x = 25;
                    title.y = limitedText.y + limitedText.height + 20;
                    title.resize(340, title.height);
                    title.textAlignHorizontal = "CENTER";
                    title.letterSpacing = { value: 5, unit: "PIXELS" };
                    frame.appendChild(title);

                    // Viable dates
                    const viableText = figma.createText();
                    viableText.fontName = { family: "Arial", style: "Regular" };
                    viableText.characters = "Viable only July 10 - August 12";
                    viableText.fontSize = 24;
                    viableText.x = 25;
                    viableText.y = title.y + title.height + 30;
                    viableText.resize(340, viableText.height);
                    viableText.textAlignHorizontal = "CENTER";
                    frame.appendChild(viableText);

                    // Description text with adjusted line height
                    const descText = figma.createText();
                    descText.fontName = { family: "Arial", style: "Regular" };
                    descText.characters = "In July, caribou herds are counted after they begin to gather on their calving grounds in June.";
                    descText.fontSize = 24;
                    descText.lineHeight = { value: 80, unit: "PERCENT" };
                    descText.x = 25;
                    descText.y = viableText.y + viableText.height + 40;
                    descText.resize(340, descText.height);
                    descText.textAlignHorizontal = "CENTER";
                    frame.appendChild(descText);

                    // Gray rectangle at bottom
                    const grayRect = figma.createRectangle();
                    grayRect.resize(300, 338);
                    grayRect.fills = [{ type: 'SOLID', color: { r: 0.9, g: 0.9, b: 0.9 } }];
                    grayRect.x = 45;
                    grayRect.y = descText.y + descText.height + 40;
                    grayRect.cornerRadius = 16;
                    frame.appendChild(grayRect);
                });
            }
        }

        if (msg.dropdown === 'hierarchy' && hierarchyShapes.includes(msg.shape)) {
            if (msg.shape === 'hier1') {
                const square = figma.createRectangle();
                square.resize(100, 100);
                square.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
                square.x = 100;
                square.y = 100;
                frame.appendChild(square);
            } else if (msg.shape === 'hier2') {
                const heart = figma.createPolygon();
                heart.pointCount = 5; // Adjust to create a heart-like shape
                heart.resize(100, 100);
                heart.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }];
                heart.x = 100;
                heart.y = 100;
                frame.appendChild(heart);
            } else if (msg.shape === 'hier3') {
                const hexagon = figma.createPolygon();
                hexagon.pointCount = 6;
                hexagon.resize(100, 100);
                hexagon.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 1 } }];
                hexagon.x = 100;
                hexagon.y = 100;
                frame.appendChild(hexagon);
            }

        }
        if (msg.dropdown === 'spacing' && spacingShapes.includes(msg.shape)) {
            if (msg.shape === 'space1') {
                const square = figma.createRectangle();
                square.resize(100, 100);
                square.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
                square.x = 100;
                square.y = 100;
                frame.appendChild(square);
            } else if (msg.shape === 'space2') {
                const heart = figma.createPolygon();
                heart.pointCount = 5; // Adjust to create a heart-like shape
                heart.resize(100, 100);
                heart.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }];
                heart.x = 100;
                heart.y = 100;
                frame.appendChild(heart);
            } else if (msg.shape === 'space3') {
                const hexagon = figma.createPolygon();
                hexagon.pointCount = 6;
                hexagon.resize(100, 100);
                hexagon.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 1 } }];
                hexagon.x = 100;
                hexagon.y = 100;
                frame.appendChild(hexagon);
            }
        }

        figma.currentPage.appendChild(frame);
        figma.viewport.scrollAndZoomIntoView([frame]);
    }
};
