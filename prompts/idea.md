You are an expert front end developer. Build a complete static personal website for an 8th grade student named Joel Lopez. The site will be hosted on GitHub Pages and should be pure HTML, CSS, and vanilla JavaScript. No build tools. No frameworks.

Goal: a clean, modern, one page personal site that Joel can use to showcase his work for High Tech High School admissions and future projects.

Contact Information:
Name: Joel Lopez
Email: joel.matthew.lopez12@gmail.com

Technical requirements:
	•	Create three files: index.html, styles.css, script.js.
	•	Use semantic HTML: header, main, section, footer.
	•	Make the layout responsive for desktop, tablet, and phone.
	•	Use a simple navigation bar with smooth scrolling to sections.
	•	Use a light background with dark text. Accent colors should be black and gold to reflect High Tech High colors.
	•	Use a clean sans serif font stack (for example system UI fonts).
	•	No external libraries or CDNs besides Google Fonts if you think it is needed.
	•	All CSS should be in styles.css. All JavaScript in script.js.

Site structure:
	1.	Header / Hero section

	•	Full width hero at the top.
	•	Title: “Joel Lopez”
	•	Subtitle: “Future High Tech High School Freshman · Industrial Design and Animation · Computer Programming”
	•	Short intro text: something like “I am a creative 13 year old student who loves design, animation, coding, and building real projects with technology.”
	•	A prominent button “View My Projects” that scrolls down to the Projects section.

	2.	About section
Include content that explains Joel’s story. Use this text, lightly polished, as the base copy:

“When I was younger, I used to watch my dad work for hours protecting his company’s technology. He works as an Executive Director at MSCI and uses software to keep important systems running. Seeing how fast his programs generated code made me want to learn how technology works.

I want to learn to code and design so I can build tools that help people and make the world better. I enjoy turning ideas into real things, whether it is a design, an animation, or a working prototype.”

Also add a short bullet list under that called “Things I Enjoy”:
	•	3D modeling and design
	•	Animation and interactive projects
	•	Learning Python and coding concepts
	•	Swimming, pickleball, and golfing with my family

	3.	Majors and Goals section
Create a section with two cards side by side on desktop and stacked on mobile.

Card 1: “First Choice Major · Industrial Design and Animation”
Body text idea:
“I am drawn to Industrial Design and Animation because it lets me turn ideas into real objects and stories. I like the mix of creativity and technology. I want to learn how to design products, create 3D models, and bring animations to life.”

Card 2: “Second Choice Major · Computer Programming”
Body text idea:
“Computer Programming interests me because it can change both the digital and physical world. I want to learn the fundamentals of coding so I can understand every line, not just use AI tools. My goal is to build apps and tools that help people learn, communicate, and solve real problems.”

Below the cards, add a small paragraph titled “Long Term Goals”:
“Long term, I want to design and build things that people use every day. That might be a game, a tool for students, or a product that helps a small business like my mom’s coffee company. I want to combine design, animation, and programming to make useful and fun experiences.”
	4.	Projects section
Create a grid of three project cards. Each card should have:

	•	Project title
	•	Short description
	•	Placeholder area for a future video or link button.
Add simple hover effects on cards.

Project 1:
Title: “NFC Enabled 3D Print for Brew Point Coffee”
Description:
“I designed a circular 3D printed tag that holds a 25 millimeter NFC chip. I modeled it in Onshape, printed it on a Bambu Labs P1S, paused the print to insert the NFC tag, and then used my iPhone to write a link to my mom’s Brew Point coffee contact page. When you tap the tag with a phone, it opens the site instantly.”

Add a placeholder button: “Watch NFC Tag Video” that currently links to “#” so I can update it later.

Project 2:
Title: “Math Models Quiz App · Relations and Functions”
Description:
“For my Math Models homework on relations and functions, I used Python and Cursor to build a quiz game. The app uses Streamlit to show questions like ‘Is this a function?’ or ‘What is the domain and range?’ It tracks my score and uses a timer so I can practice under pressure and make homework feel more like a game.”

Add a placeholder button: “View Quiz Demo” linking to “#”.

Project 3:
Title: “Roblox Animation for Creator Marketplace”
Description:
“I create animations in Roblox Studio and publish them to the Creator Marketplace. I use keyframes to build smooth motion and then test the animations in game. It feels great to share my work so that other creators can use it.”

Add a placeholder button: “View Roblox Animation” linking to “#”.
	5.	Skills section
Create a simple icon grid or bullet list of skills. Use plain HTML icons or simple CSS circles, not external icon libraries. Skills should include:

	•	3D modeling (introductory)
	•	3D printing with Bambu Labs P1S
	•	Laser cutting with xTool D1 and F1
	•	Python basics with help from Cursor
	•	Roblox Studio and basic animation
	•	Persistence, focus, and on time work

	6.	Video section
Add a section called “Featured Videos”. Include three placeholders side by side on desktop, stacked on mobile:

	•	“Using AI Tools and Python to Study Math”
	•	“Creating NFC Tags for Brew Point Coffee”
	•	“Roblox Animation for Creator Marketplace”
Each should have:
	•	A thumbnail placeholder (use a simple div with background color and text “Video Placeholder”).
	•	A button “Play Video” linking to “#”.

	7.	Contact section
Simple contact style section with text:
“Thank you for visiting my site. I am excited to keep learning, building projects, and growing as a designer and programmer.”
Add a simple list for contact methods with placeholders:

	•	Email: placeholder like “joel.email@example.com”
	•	GitHub: “github.com/joel-placeholder”
Make the email clickable with a mailto link and the GitHub a normal link.

Design instructions:
	•	Use a consistent spacing system and plenty of white space.
	•	Use a simple card style with rounded corners and subtle shadow.
	•	Add smooth scroll behavior on navigation clicks.
	•	Add basic hover animation on buttons and project cards.
	•	Ensure all text is readable and accessible with good contrast.

JavaScript requirements in script.js:
	•	Implement smooth scrolling for nav links.
	•	Optionally add a simple “back to top” button that appears after scrolling down.
	•	No complex frameworks. Keep the JS easy to read and well commented.

Finally, include clear comments in the code so a motivated 8th grader can read and understand the structure and make small edits, such as updating text, links, and adding future projects.