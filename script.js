let saved = JSON.parse(localStorage.getItem("saved")) || [];

/* Welcome Message */

function welcomeMessage(){

alert("Welcome to SnapAI 🤖 Find the Right AI Tool, Instantly!");

updateSaved();

}

/* Save Tool */

function saveTool(name){

if(saved.indexOf(name) !== -1){

alert(name + " is already saved!");

return;

}

saved.push(name);

localStorage.setItem("saved", JSON.stringify(saved));

alert(name + " has been saved!");

updateSaved();

}

/* Update Saved Panel */

function updateSaved(){

let count = document.getElementById("savedCount");

let list = document.getElementById("savedItems");

if(count){

count.innerText = saved.length;

}

if(!list) return;

list.innerHTML = "";

if(saved.length === 0){

list.innerHTML = "<li style='color:#94a3b8; font-size:14px;'>No tools saved yet.</li>";

return;

}

saved.forEach((item, index) => {

let li = document.createElement("li");

li.innerHTML = `<span>${item}</span><button class="remove-btn" onclick="removeItem(${index})">Remove</button>`;

list.appendChild(li);

});

}

/* Remove Item */

function removeItem(index){

saved.splice(index, 1);

localStorage.setItem("saved", JSON.stringify(saved));

updateSaved();

}

/* Clear Saved */

function clearSaved(){

saved = [];

localStorage.removeItem("saved");

updateSaved();

}

/* Toggle Saved Panel */

function toggleSaved(){

document.getElementById("savedPanel").classList.toggle("active");

}

/* Toggle Details - closes others before opening */

function toggleDetails(id){

let allDetails = document.querySelectorAll(".details");

allDetails.forEach(section => {

if(section.id !== id){

section.style.display = "none";

}

});

let current = document.getElementById(id);

if(current.style.display === "block"){

current.style.display = "none";

} else {

current.style.display = "block";

}

}

/* Tools Data */

let tools = [

{ name: "ChatGPT", category: "Writing", desc: "Conversational AI for writing, brainstorming and answering questions.", pricing: "freemium", img: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=400", url: "https://chat.openai.com" },

{ name: "Claude", category: "Writing", desc: "AI assistant known for detailed, thoughtful long-form responses and analysis.", pricing: "freemium", img: "https://images.unsplash.com/photo-1655720031554-a929595ffad7?w=400", url: "https://claude.ai" },

{ name: "Gemini", category: "Writing", desc: "Google's AI assistant for writing, research, coding and multimodal tasks.", pricing: "freemium", img: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400", url: "https://gemini.google.com" },

{ name: "Perplexity", category: "Writing", desc: "AI-powered search engine that gives cited, up-to-date answers.", pricing: "freemium", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400", url: "https://perplexity.ai" },

{ name: "Midjourney", category: "Image", desc: "Create stunning, high quality artistic images from text prompts.", pricing: "paid", img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400", url: "https://midjourney.com" },

{ name: "DALL E 3", category: "Image", desc: "OpenAI's image generator. Great for quick, accurate image creation.", pricing: "freemium", img: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400", url: "https://openai.com/dall-e-3" },

{ name: "Stable Diffusion", category: "Image", desc: "Open-source image generator. Run locally for free with unlimited use.", pricing: "free", img: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=400", url: "https://stability.ai" },

{ name: "Adobe Firefly", category: "Image", desc: "Adobe's generative AI for images trained on licensed content.", pricing: "freemium", img: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400", url: "https://firefly.adobe.com" },

{ name: "GitHub Copilot", category: "Coding", desc: "AI pair programmer that autocompletes code and writes tests in your IDE.", pricing: "paid", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400", url: "https://github.com/features/copilot" },

{ name: "Cursor", category: "Coding", desc: "AI-first code editor built on VS Code. Rewrite and refactor with AI.", pricing: "freemium", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400", url: "https://cursor.sh" },

{ name: "Replit AI", category: "Coding", desc: "Build, run and deploy apps in browser with an AI that writes your code.", pricing: "freemium", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400", url: "https://replit.com" },

{ name: "Runway ML", category: "Video", desc: "Generate, edit and transform videos using AI. Industry leading models.", pricing: "freemium", img: "https://images.unsplash.com/photo-1601132359864-c974e79890ac?w=400", url: "https://runwayml.com" },

{ name: "Pika Labs", category: "Video", desc: "Turn text or images into short expressive video clips in seconds.", pricing: "freemium", img: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400", url: "https://pika.art" },

{ name: "Descript", category: "Video", desc: "Edit video and audio like a document. Remove filler words and add captions.", pricing: "freemium", img: "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?w=400", url: "https://descript.com" },

{ name: "Notion AI", category: "Productivity", desc: "AI built into Notion for drafting, summarizing and brainstorming.", pricing: "freemium", img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400", url: "https://notion.so" },

{ name: "Otter.ai", category: "Productivity", desc: "Transcribes meetings in real-time and generates summaries automatically.", pricing: "freemium", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400", url: "https://otter.ai" },

{ name: "Beautiful.ai", category: "Productivity", desc: "AI-powered slide design that auto-layouts your presentations as you type.", pricing: "freemium", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400", url: "https://beautiful.ai" },

{ name: "ElevenLabs", category: "Audio", desc: "Ultra-realistic AI voice generation and cloning for creators.", pricing: "freemium", img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400", url: "https://elevenlabs.io" },

{ name: "Suno AI", category: "Audio", desc: "Generate full original songs with vocals and instruments from text.", pricing: "freemium", img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400", url: "https://suno.ai" }

];

/* Render Tools Grid */

let currentFilter = "All";

function renderTools(){

let grid = document.getElementById("toolGrid");

if(!grid) return;

let searchInput = document.getElementById("searchInput");

let query = searchInput ? searchInput.value.toLowerCase() : "";

let filtered = tools.filter(t => {

let matchFilter = currentFilter === "All" || t.category === currentFilter;

let matchSearch = t.name.toLowerCase().includes(query) ||
                  t.category.toLowerCase().includes(query) ||
                  t.desc.toLowerCase().includes(query);

return matchFilter && matchSearch;

});

grid.innerHTML = "";

let noResults = document.getElementById("noResults");

if(filtered.length === 0){

if(noResults) noResults.style.display = "block";

return;

}

if(noResults) noResults.style.display = "none";

filtered.forEach(tool => {

let card = document.createElement("div");

card.className = "card";

card.innerHTML = `
<img src="${tool.img}" alt="${tool.name}">
<h3>${tool.name}</h3>
<span class="tag">${tool.category}</span>
<span class="pricing ${tool.pricing}">${tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}</span>
<p>${tool.desc}</p>
<div class="card-buttons">
<button class="save-btn" onclick="saveTool('${tool.name}')">🔖 Save</button>
<a href="${tool.url}" target="_blank"><button class="visit-btn">Visit</button></a>
</div>`;

grid.appendChild(card);

});

}

/* Filter Tools */

function filterTools(){

renderTools();

}

/* Set Category Filter */

function setFilter(category, btn){

currentFilter = category;

let buttons = document.querySelectorAll(".filter-btn");

buttons.forEach(b => b.classList.remove("active"));

btn.classList.add("active");

renderTools();

}

/* Hero Search Redirect */

function heroRedirect(event){

if(event.key === "Enter"){

window.location.href = "tools.html";

}

}

/* Page Load */

window.onload = function(){

welcomeMessage();

updateSaved();

if(document.getElementById("toolGrid")){

renderTools();

}

if(document.getElementById("contactForm")){

document.getElementById("contactForm").addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value;

alert("Thank you " + name + "! Your message has been submitted successfully.");

this.reset();

});

}

}
