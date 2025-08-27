import{c as o,u as r,r as l}from"./transition.MUZrSsh7.js";import{m as i}from"./vue.Bx8V6p_T.js";import"./js.cookie.Cz0CWeBA.js";import{j as p}from"./jsx-runtime.D_zvdyIk.js";import{f as g}from"./number.al1uMBuK.js";import{c as d}from"./classname.y9b8gBZq.js";import{U as y}from"./users.Dwmw0pd7.js";const f=()=>`<p>In this project, you are required to create a form UI using only HTML and CSS. The form will include fields for a full name, email, password, and confirm password, along with a button to toggle the visibility of the password text. Additionally, the form will feature a completeness progress bar and a checklist of requirements that must be met for the form to reach 100% completeness. While this version of the form won’t be functional, it will be a static UI component that can be enhanced with JavaScript in the future.</p>
<p>The goal of this project is to not only help you practice your HTML and CSS but also to focus on creating an accessible form that is easy to use for all users, including those with disabilities. Given below is the rough mockup of the form UI that you need to create:</p>
<p><a href="https://assets.roadmap.sh/guest/form-components-7t4b3.png" rel="noopener noreferrer nofollow" target="_blank"><img src="https://assets.roadmap.sh/guest/form-components-7t4b3.png" alt="Form UI"></a></p>
<h2 id="accessibility-guidelines">Accessibility Guidelines</h2>
<p>You should read up on accessibility guidelines and best practices before starting this project. However, here are some key points to keep in mind while creating an accessible form UI:</p>
<ul>
<li><strong>Labeling</strong>: Ensure that each form field has a corresponding <code>&#x3C;label></code> element that is clearly associated with the field using the <code>for</code> attribute.</li>
<li><strong>Focus State</strong>: Style the focus state of each input field so that users navigating with a keyboard can easily see which field is currently active.</li>
<li><strong>Error Messaging</strong>: Consider adding space for error messages that can be displayed when a user inputs invalid data. These messages should be clearly associated with the relevant input field.</li>
<li><strong>ARIA Attributes</strong>: Use ARIA (Accessible Rich Internet Applications) attributes where necessary, such as <code>aria-required</code> for required fields and <code>aria-invalid</code> for fields with errors.</li>
<li><strong>Color Contrast</strong>: Ensure that the color contrast between text and background is sufficient to meet WCAG (Web Content Accessibility Guidelines) standards, making the form readable for users with visual impairments.</li>
<li><strong>Interactive Elements</strong>: Make sure that the button to show/hide the password is accessible via keyboard and screen readers, providing clear feedback on the current state (e.g., “Password is hidden” or “Password is visible”).</li>
</ul>
<p>Once done, you can test the form UI using a screen reader or browser extensions like Axe or Lighthouse to check for accessibility issues and make necessary adjustments.</p>
<hr>
<p>After completing this project, you will have a solid foundation in creating accessible and well-structured forms using HTML and CSS. You can later enhance this form by adding JavaScript to make it fully functional and dynamic in future projects.</p>`,b={title:"Accessible Form UI",description:"Create an accessible form UI using HTML and CSS.",isNew:!1,sort:7,difficulty:"beginner",nature:"Accessibility",skills:["HTML","CSS","Layouts","Positioning","Accessibility"],seo:{title:"Create an Accessible Form UI for a Website Using HTML and CSS",description:"Learn how to create an accessible form component using HTML and CSS.",keywords:["accessible forms","css project idea","responsive design","html and css"]},roadmapIds:["frontend"]},F="C:/Users/HP/developer-roadmap-master/src/data/projects/accessible-form-ui.md",w=void 0;o((t,a,n)=>{const{layout:s,...e}=b;return e.file=F,e.url=w,l`${i()}${r(f())}`});const v=()=>`<p>You are required to create an accordion component that displays a list of questions or headings. When a user clicks on a question, its corresponding answer or content section will expand while collapsing any previously opened section. This allows only one section to be open at a time, keeping the UI clean and organized.</p>
<p>Given below is the mockup showing the accordion in its default and expanded states:</p>
<p><a href="https://assets.roadmap.sh/guest/accordion-rbvpo.png" rel="noopener noreferrer nofollow" target="_blank"><img src="https://assets.roadmap.sh/guest/accordion-rbvpo.png" alt="Accordion"></a></p>
<p>This project will help you practice DOM manipulation, event handling, and implementing responsive design patterns using JavaScript.</p>`,k={title:"Accordion",description:"Create an accordion component using HTML, CSS, and JavaScript.",isNew:!1,sort:18,difficulty:"beginner",nature:"JavaScript",skills:["HTML","CSS","JavaScript","DOM Manipulation"],seo:{title:"Build an Accordion Component with JavaScript",description:"Learn how to create a responsive accordion component that allows users to toggle between different sections of content.",keywords:["accordion","javascript accordion","html and css"]},roadmapIds:["frontend"]},C="C:/Users/HP/developer-roadmap-master/src/data/projects/accordion.md",A=void 0;o((t,a,n)=>{const{layout:s,...e}=k;return e.file=C,e.url=A,l`${i()}${r(v())}`});const E=()=>`<p>The goal of this project is to help you learn about how to use external packages using <a href="https://www.npmjs.com/" rel="noopener noreferrer nofollow" target="_blank">npm</a>. The user inputs their birthdate via a <a href="https://www.npmjs.com/package/js-datepicker" rel="noopener noreferrer nofollow" target="_blank">JavaScript Datepicker</a>, and the app calculates and displays their exact age, including years, and months using <a href="https://www.npmjs.com/package/luxon" rel="noopener noreferrer nofollow" target="_blank">Luxon</a>.</p>
<p><img src="https://assets.roadmap.sh/guest/age-calculator-do1un.png" alt="Age Calculator"></p>
<h2 id="requirements">Requirements</h2>
<p>You are required to develop an age calculator with the following features:</p>
<ul>
<li>A form that allows users to input their birthdate using a JavaScript datepicker (avoid the default HTML date picker)</li>
<li>Use the <a href="https://www.npmjs.com/package/luxon" rel="noopener noreferrer nofollow" target="_blank">Luxon</a> library to calculate the exact age in years, months, and days</li>
<li>Display the result on the same page after the user submits the form</li>
<li>Implement basic validation to ensure the birthdate is valid</li>
<li>Use simple styling to make the calculator visually appealing and responsive</li>
</ul>
<hr>
<p>This project will help you understand how to manipulate dates and times in JavaScript using <a href="https://www.npmjs.com/package/luxon" rel="noopener noreferrer nofollow" target="_blank">Luxon</a>. You’ll gain experience handling user input via a datepicker, performing date calculations, and designing a simple user interface.</p>`,S={title:"Age Calculator",description:"Create an age calculator using HTML, CSS, and JavaScript.",isNew:!0,sort:19,difficulty:"beginner",nature:"Frontend",skills:["HTML","CSS","JavaScript","DOM Manipulation","Package Management"],seo:{title:"Build an Age Calculator App with JavaScript",description:"Create an age calculator using HTML, CSS, and JavaScript.",keywords:["age calculator","frontend project idea","luxon date manipulation","javascript datepicker"]},roadmapIds:["frontend"]},T="C:/Users/HP/developer-roadmap-master/src/data/projects/age-calculator.md",x=void 0;o((t,a,n)=>{const{layout:s,...e}=S;return e.file=T,e.url=x,l`${i()}${r(E())}`});const j=()=>`<p>The goal of this project is to setup a scheduled workflow to backup a Database every 12 hours and upload the backup to <a href="https://developers.cloudflare.com/r2/" rel="noopener noreferrer nofollow" target="_blank">Cloudflare R2</a> which has a free tier for storage.</p>
<h2 id="requirements">Requirements</h2>
<p>The pre-requisite for this project is to have a server setup and a database ready to backup. You can use one of the projects did in <a href="/projects/multi-container-service">the other project</a>. Alternatively:</p>
<ul>
<li>Setup a server on <a href="https://m.do.co/c/b29aa8845df8" rel="noopener noreferrer nofollow" target="_blank">Digital Ocean</a> or any other provider</li>
<li>Run a MongoDB instance on the server</li>
<li>Seed some data to the database</li>
</ul>
<p>Once you have a server and a database ready, you can proceed to the next step.</p>
<h3 id="scheduled-backups">Scheduled Backups</h3>
<p>You can do this bit either by setting up a cron job on the server or alternatively setup a <a href="https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#schedule" rel="noopener noreferrer nofollow" target="_blank">scheduled workflow in Github Actions</a> that runs every 12 hours and execute the backup from there. Database should be backedup up into a tarball and uploaded to <a href="https://developers.cloudflare.com/r2/" rel="noopener noreferrer nofollow" target="_blank">Clouodflare R2</a>.</p>
<p>Hint: You can use the <code>mongodump</code> to dump the database and then use <code>aws cli</code> to upload the file to R2.</p>
<h3 id="stretch-goal">Stretch Goal</h3>
<p>Write a script to download the latest backup from R2 and restore the database.</p>
<hr>
<p>Database backups are essential to ensure that you can restore your data in case of a disaster. This project will give you hands on experience on how to setup a scheduled workflow to backup a database and how to restore it from a backup.</p>`,I={title:"Automated DB Backups",description:"Setup a scheduled workflow to backup a Database every 12 hours",isNew:!1,sort:1600,difficulty:"intermediate",nature:"Backups",skills:["bash","devops"],seo:{title:"Automated DB Backups",description:"Setup a scheduled workflow to backup a Database every 12 hours",keywords:["Backup","Database","MongoDB"]},roadmapIds:["devops"]},B="C:/Users/HP/developer-roadmap-master/src/data/projects/automated-backups.md",P=void 0;o((t,a,n)=>{const{layout:s,...e}=I;return e.file=B,e.url=P,l`${i()}${r(j())}`});const D=()=>`<p>The goal of this project is to learn and practice the basics of DNS. You are required to purchase a custom domain name and setup the basic DNS records.</p>
<h2 id="requirements">Requirements</h2>
<p>You are required to have a custom domain name to complete this project. You can use the domain name you already own or purchase a new domain name from any provider such as Cloudflare, Namecheap, Godaddy etc. Once you have a domain name, you can proceed to the next step.</p>
<h3 id="task-1---custom-domain-for-github-pages">Task #1 - Custom Domain for GitHub Pages</h3>
<p>If you have not completed the <a href="/projects/github-actions-deployment-workflow">GitHub pages project</a>, go ahead and complete that project first. Once you have a github pages site setup, set up your custom domain name to point to your github pages site.</p>
<h3 id="task-2---custom-domain-for-digitalocean-droplet">Task #2 - Custom Domain for DigitalOcean Droplet</h3>
<p>If you have not completed the <a href="/projects/static-site-server">Static Site Server project</a>, go ahead and complete that project first so you have a basic static site to serve. Once you have a digital ocean droplet setup serving a static site, set up your DNS records to point to your droplet.</p>
<hr>
<h3 id="submission-guidelines">Submission Guidelines</h3>
<p>Output for this project is the steps you took to setup the custom domain name for both GitHub Pages and a DigitalOcean Droplet. You can write a simple markdown file in tutorial format, add screenshots and any other relevant information to help you remember the steps.</p>
<hr>
<p>Once you have completed the project, you should have a basic understanding of how to setup a custom domain name for both GitHub Pages and a DigitalOcean Droplet.</p>`,$={title:"Basic DNS Setup",description:"Purchase a custom domain and set up basic DNS records.",isNew:!1,sort:700,difficulty:"beginner",nature:"DNS",skills:["devops","dns"],seo:{title:"Basic DNS Setup",description:"Purchase a custom domain and set up basic DNS records.",keywords:["basic dns","dns","domain"]},roadmapIds:["devops"]},L="C:/Users/HP/developer-roadmap-master/src/data/projects/basic-dns.md",H=void 0;o((t,a,n)=>{const{layout:s,...e}=$;return e.file=L,e.url=H,l`${i()}${r(D())}`});const U=()=>`<p>In this project, you will write a basic Dockerfile to create a Docker image. When this Docker image is run, it should print “Hello, Captain!” to the console before exiting.</p>
<h2 id="requirements">Requirements</h2>
<ul>
<li>The Dockerfile should be named <code>Dockerfile</code>.</li>
<li>The Dockerfile should be in the root directory of the project.</li>
<li>The base image should be <code>alpine:latest</code>.</li>
<li>The Dockerfile should contain a single instruction to print “Hello, Captain!” to the console before exiting.</li>
</ul>
<p>You can learn more about writing a Dockerfile <a href="https://docs.docker.com/engine/reference/builder/" rel="noopener noreferrer nofollow" target="_blank">here</a>.</p>
<hr>
<p>If you are looking to build a more advanced version of this project, you can consider adding the ability to pass your name to the Docker image as an argument, and have the Docker image print “Hello, [your name]!” instead of “Hello, Captain!”.</p>`,q={title:"Basic Dockerfile",description:"Build a basic Dockerfile to create a Docker image.",isNew:!1,sort:1e3,difficulty:"beginner",nature:"Docker",skills:["docker","dockerfile","linux","devops"],seo:{title:"Basic Dockerfile",description:"Write a basic Dockerfile to create a Docker image.",keywords:["basic dockerfile","dockerfile","docker"]},roadmapIds:["devops"]},M="C:/Users/HP/developer-roadmap-master/src/data/projects/basic-dockerfile.md",R=void 0;o((t,a,n)=>{const{layout:s,...e}=q;return e.file=M,e.url=R,l`${i()}${r(U())}`});const N=()=>`<blockquote>
<p>Goal of this project is to teach you how to structure a website using HTML i.e. different sections of a website like header, footer, navigation, main content, sidebars etc. Do not style the website, only focus on the structure. Styling will be done in separate projects.</p>
</blockquote>
<p>In this project, you are required to create a simple HTML only website with multiple pages. The website should have following pages:</p>
<ul>
<li>Homepage</li>
<li>Projects</li>
<li>Articles</li>
<li>Contact</li>
</ul>
<p>The website should have a navigation bar that should be present on all pages and link to all the pages.</p>
<p>You are not required to style the website, you are only required to create the structure of the website using HTML. Goals of this project are:</p>
<ul>
<li>Learn how to create multiple pages in a website.</li>
<li>Structure a website using HTML in a semantic way.</li>
<li>Structure in a way that you can easily add styles later.</li>
<li>Add SEO meta tags to the website.</li>
</ul>
<p>You can use the following mockup example to create the structure of the website (remember, you are not required to style the website, only focus on the structure that you can style later):</p>
<p><img src="https://assets.roadmap.sh/guest/portfolio-design-83lku.png" alt="Basic HTML Website"></p>
<p>Again, make sure that your submission includes the following:</p>
<ul>
<li>Semantically correct HTML structure.</li>
<li>Multiple pages with a navigation bar.</li>
<li>SEO meta tags in the head of each page.</li>
<li>Contact page should have a form with fields like name, email, message etc.</li>
</ul>
<hr>
<p>After completing this project, you will have a good understanding of how to structure a website using HTML, basic SEO meta tags, HTML tags, forms etc. You can now move on to the next project where you will learn how to style this website using CSS.</p>`,G={title:"Basic HTML Website",description:"Create simple HTML only website with multiple pages.",isNew:!1,sort:2,difficulty:"beginner",nature:"HTML",skills:["HTML","Layouts","semantic HTML"],seo:{title:"Basic HTML Website Project",description:"Create a simple HTML only website with multiple pages.",keywords:["basic html","html project idea"]},roadmapIds:["frontend"]},Y="C:/Users/HP/developer-roadmap-master/src/data/projects/basic-html-website.md",_=void 0;o((t,a,n)=>{const{layout:s,...e}=G;return e.file=Y,e.url=_,l`${i()}${r(N())}`});const O=()=>`<p>The goal of this project is to learn and practice how to set up a <strong>bastion host</strong>—a secure entry point that enables authorized users to access private infrastructure or internal systems without exposing them to the public internet.</p>
<p>A <strong>bastion host</strong> is a server specifically designed to act as a secure gateway between external users and a private network. It reduces the attack surface of your infrastructure by being the only publicly accessible server, ensuring that all external connections go through a single, well-secured entry point. Typically, bastion hosts are configured to allow secure SSH or RDP access and are heavily monitored.</p>
<hr>
<h2 id="requirements">Requirements</h2>
<p>You will set up a bastion host in a cloud environment and configure it to securely allow access to a private server.</p>
<ul>
<li>
<p>Choose a cloud provider (e.g., AWS, DigitalOcean, GCP, Azure) and create <strong>two servers</strong>:</p>
<ul>
<li><strong>Bastion Host</strong> (publicly accessible).</li>
<li><strong>Private Server</strong> (accessible only from the bastion host IP address and not publicly).</li>
</ul>
</li>
<li>
<p>Configure both the servers to allow SSH connection and configure SSH in a way that you can SSH into the private server by jumping through the bastion host</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#50FA7B">Host</span><span style="color:#F1FA8C"> bastion</span></span>
<span class="line"><span style="color:#50FA7B">    HostName</span><span style="color:#FF79C6"> &#x3C;</span><span style="color:#F1FA8C">bastion-i</span><span style="color:#F8F8F2">p</span><span style="color:#FF79C6">></span></span>
<span class="line"><span style="color:#50FA7B">    User</span><span style="color:#FF79C6"> &#x3C;</span><span style="color:#F1FA8C">bastion-use</span><span style="color:#F8F8F2">r</span><span style="color:#FF79C6">></span></span>
<span class="line"><span style="color:#50FA7B">    IdentityFile</span><span style="color:#FF79C6"> &#x3C;</span><span style="color:#F1FA8C">path-to-bastion-private-ke</span><span style="color:#F8F8F2">y</span><span style="color:#FF79C6">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#50FA7B">Host</span><span style="color:#F1FA8C"> private-server</span></span>
<span class="line"><span style="color:#50FA7B">    HostName</span><span style="color:#FF79C6"> &#x3C;</span><span style="color:#F1FA8C">private-server-i</span><span style="color:#F8F8F2">p</span><span style="color:#FF79C6">></span></span>
<span class="line"><span style="color:#50FA7B">    User</span><span style="color:#FF79C6"> &#x3C;</span><span style="color:#F1FA8C">private-server-use</span><span style="color:#F8F8F2">r</span><span style="color:#FF79C6">></span></span>
<span class="line"><span style="color:#50FA7B">    ProxyJump</span><span style="color:#F1FA8C"> bastion</span></span>
<span class="line"><span style="color:#50FA7B">    IdentityFile</span><span style="color:#FF79C6"> &#x3C;</span><span style="color:#F1FA8C">path-to-private-server-private-ke</span><span style="color:#F8F8F2">y</span><span style="color:#FF79C6">></span></span></code></pre>
</li>
<li>
<p>Connect to the bastion host using:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#50FA7B">ssh</span><span style="color:#F1FA8C"> bastion</span></span></code></pre>
</li>
<li>
<p>From the bastion host, connect to the private server:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#50FA7B">ssh</span><span style="color:#F1FA8C"> private-server</span></span></code></pre>
</li>
<li>
<p>Alternatively, connect directly using your local machine:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#50FA7B">ssh</span><span style="color:#F1FA8C"> private-server</span></span></code></pre>
</li>
<li>
<p>Optionally set up basic monitoring for SSH access attempts using tools like <code>fail2ban</code> for example.</p>
</li>
</ul>
<h2 id="stretch-goals">Stretch Goals</h2>
<ul>
<li><strong>Harden Security</strong>: Configure multi-factor authentication (MFA) for the bastion host. Use <code>iptables</code> or similar tools for more granular traffic filtering.</li>
<li><strong>Automate Setup</strong>: Use Terraform or Ansible to automate the deployment and configuration of your bastion host and private server.</li>
</ul>
<hr>
<h2 id="important-note-for-solution-submission">Important Note for Solution Submission</h2>
<p><strong>Do not share sensitive information (e.g., private keys, IP addresses) in public repositories.</strong> Your submission should contain a <code>README.md</code> file describing the steps and configurations you used to complete the project.</p>
<hr>
<p>After completing this project, you will have a strong understanding of how to set up a bastion host and securely manage access to private infrastructure. This foundational knowledge will prepare you for more advanced projects in network and infrastructure security.</p>`,W={title:"Bastion Host",description:"Setup a bastion host for managing access to private infrastructure.",isNew:!0,sort:1601,difficulty:"intermediate",nature:"Networking",skills:["devops","security","linux"],seo:{title:"Bastion Host Setup",description:"Learn how to set up a bastion host to securely manage access to your private infrastructure.",keywords:["bastion host","linux","security","devops"]},roadmapIds:["devops"]},J="C:/Users/HP/developer-roadmap-master/src/data/projects/bastion-host.md",z=void 0;o((t,a,n)=>{const{layout:s,...e}=W;return e.file=J,e.url=z,l`${i()}${r(O())}`});const V=()=>`<p>You are required to create a simple RESTful API with basic CRUD operations for a personal blogging platform. CRUD stands for Create, Read, Update, and Delete.</p>
<h2 id="goals">Goals</h2>
<p>The goals of this project are to help you:</p>
<ul>
<li>Understand what the RESTful APIs are including best practices and conventions</li>
<li>Learn how to create a RESTful API</li>
<li>Learn about common HTTP methods like GET, POST, PUT, PATCH, DELETE</li>
<li>Learn about status codes and error handling in APIs</li>
<li>Learn how to perform CRUD operations using an API</li>
<li>Learn how to work with databases</li>
</ul>
<h2 id="requirements">Requirements</h2>
<p>You should create a RESTful API for a personal blogging platform. The API should allow users to perform the following operations:</p>
<ul>
<li>Create a new blog post</li>
<li>Update an existing blog post</li>
<li>Delete an existing blog post</li>
<li>Get a single blog post</li>
<li>Get all blog posts</li>
<li>Filter blog posts by a search term</li>
</ul>
<p>Given below are the details for each API operation.</p>
<h3 id="create-blog-post">Create Blog Post</h3>
<p>Create a new blog post using the <code>POST</code> method</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>POST /posts</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  "title": "My First Blog Post",</span></span>
<span class="line"><span>  "content": "This is the content of my first blog post.",</span></span>
<span class="line"><span>  "category": "Technology",</span></span>
<span class="line"><span>  "tags": ["Tech", "Programming"]</span></span>
<span class="line"><span>}</span></span></code></pre>
<p>Each blog post should have the following fields:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="json"><code><span class="line"><span style="color:#F8F8F2">{</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">title</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">My First Blog Post</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">content</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">This is the content of my first blog post.</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">category</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Technology</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">tags</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#F8F8F2"> [</span><span style="color:#E9F284">"</span><span style="color:#F1FA8C">Tech</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">, </span><span style="color:#E9F284">"</span><span style="color:#F1FA8C">Programming</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">]</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span></code></pre>
<p>The endpoint should validate the request body and return a <code>201 Created</code> status code with the newly created blog post i.e.</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="json"><code><span class="line"><span style="color:#F8F8F2">{</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">id</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#BD93F9"> 1</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">title</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">My First Blog Post</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">content</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">This is the content of my first blog post.</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">category</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Technology</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">tags</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#F8F8F2"> [</span><span style="color:#E9F284">"</span><span style="color:#F1FA8C">Tech</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">, </span><span style="color:#E9F284">"</span><span style="color:#F1FA8C">Programming</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">],</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">createdAt</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">2021-09-01T12:00:00Z</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">updatedAt</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">2021-09-01T12:00:00Z</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span></code></pre>
<p>or a <code>400 Bad Request</code> status code with error messages in case of validation errors.</p>
<h2 id="update-blog-post">Update Blog Post</h2>
<p>Update an existing blog post using the <code>PUT</code> method</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>PUT /posts/1</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  "title": "My Updated Blog Post",</span></span>
<span class="line"><span>  "content": "This is the updated content of my first blog post.",</span></span>
<span class="line"><span>  "category": "Technology",</span></span>
<span class="line"><span>  "tags": ["Tech", "Programming"]</span></span>
<span class="line"><span>}</span></span></code></pre>
<p>The endpoint should validate the request body and return a <code>200 OK</code> status code with the updated blog post i.e.</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="json"><code><span class="line"><span style="color:#F8F8F2">{</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">id</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#BD93F9"> 1</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">title</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">My Updated Blog Post</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">content</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">This is the updated content of my first blog post.</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">category</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Technology</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">tags</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#F8F8F2"> [</span><span style="color:#E9F284">"</span><span style="color:#F1FA8C">Tech</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">, </span><span style="color:#E9F284">"</span><span style="color:#F1FA8C">Programming</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">],</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">createdAt</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">2021-09-01T12:00:00Z</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">updatedAt</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">2021-09-01T12:30:00Z</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span></code></pre>
<p>or a <code>400 Bad Request</code> status code with error messages in case of validation errors. It should return a <code>404 Not Found</code> status code if the blog post was not found.</p>
<h3 id="delete-blog-post">Delete Blog Post</h3>
<p>Delete an existing blog post using the <code>DELETE</code> method</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>DELETE /posts/1</span></span></code></pre>
<p>The endpoint should return a <code>204 No Content</code> status code if the blog post was successfully deleted or a <code>404 Not Found</code> status code if the blog post was not found.</p>
<h3 id="get-blog-post">Get Blog Post</h3>
<p>Get a single blog post using the <code>GET</code> method</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>GET /posts/1</span></span></code></pre>
<p>The endpoint should return a <code>200 OK</code> status code with the blog post i.e.</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="json"><code><span class="line"><span style="color:#F8F8F2">{</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">id</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#BD93F9"> 1</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">title</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">My First Blog Post</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">content</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">This is the content of my first blog post.</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">category</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Technology</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">tags</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#F8F8F2"> [</span><span style="color:#E9F284">"</span><span style="color:#F1FA8C">Tech</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">, </span><span style="color:#E9F284">"</span><span style="color:#F1FA8C">Programming</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">],</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">createdAt</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">2021-09-01T12:00:00Z</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">updatedAt</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">2021-09-01T12:00:00Z</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span></code></pre>
<p>or a <code>404 Not Found</code> status code if the blog post was not found.</p>
<h3 id="get-all-blog-posts">Get All Blog Posts</h3>
<p>Get all blog posts using the <code>GET</code> method</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>GET /posts</span></span></code></pre>
<p>The endpoint should return a <code>200 OK</code> status code with an array of blog posts i.e.</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="json"><code><span class="line"><span style="color:#F8F8F2">[</span></span>
<span class="line"><span style="color:#F8F8F2">  {</span></span>
<span class="line"><span style="color:#8BE9FE">    "</span><span style="color:#8BE9FD">id</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#BD93F9"> 1</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">    "</span><span style="color:#8BE9FD">title</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">My First Blog Post</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">    "</span><span style="color:#8BE9FD">content</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">This is the content of my first blog post.</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">    "</span><span style="color:#8BE9FD">category</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Technology</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">    "</span><span style="color:#8BE9FD">tags</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#F8F8F2"> [</span><span style="color:#E9F284">"</span><span style="color:#F1FA8C">Tech</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">, </span><span style="color:#E9F284">"</span><span style="color:#F1FA8C">Programming</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">],</span></span>
<span class="line"><span style="color:#8BE9FE">    "</span><span style="color:#8BE9FD">createdAt</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">2021-09-01T12:00:00Z</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">    "</span><span style="color:#8BE9FD">updatedAt</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">2021-09-01T12:00:00Z</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#F8F8F2">  },</span></span>
<span class="line"><span style="color:#F8F8F2">  {</span></span>
<span class="line"><span style="color:#8BE9FE">    "</span><span style="color:#8BE9FD">id</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#BD93F9"> 2</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">    "</span><span style="color:#8BE9FD">title</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">My Second Blog Post</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">    "</span><span style="color:#8BE9FD">content</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">This is the content of my second blog post.</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">    "</span><span style="color:#8BE9FD">category</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Technology</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">    "</span><span style="color:#8BE9FD">tags</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#F8F8F2"> [</span><span style="color:#E9F284">"</span><span style="color:#F1FA8C">Tech</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">, </span><span style="color:#E9F284">"</span><span style="color:#F1FA8C">Programming</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">],</span></span>
<span class="line"><span style="color:#8BE9FE">    "</span><span style="color:#8BE9FD">createdAt</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">2021-09-01T12:30:00Z</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">    "</span><span style="color:#8BE9FD">updatedAt</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">2021-09-01T12:30:00Z</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#F8F8F2">  }</span></span>
<span class="line"><span style="color:#F8F8F2">]</span></span></code></pre>
<p>You don’t have to implement pagination, authentication or authorization for this project. You can focus on the core functionality of the API.</p>
<p>While retrieving posts, user can also filter posts by a search term. You should do a wildcard search on the title, content or category fields of the blog posts. For example:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>GET /posts?term=tech</span></span></code></pre>
<p>This should return all blog posts that have the term “tech” in their title, content or category. You can use a simple SQL query if you are using a SQL database or a similar query for a NoSQL database.</p>
<hr>
<h2 id="tech-stack">Tech Stack</h2>
<p>Feel free to use any programming language, framework, and database of your choice for this project. Here are some suggestions:</p>
<ul>
<li>If you are using JavaScript, you can use Node.js with Express.js</li>
<li>If you are using Python, you can use Flask or Django</li>
<li>If you are using Java, you can use Spring Boot</li>
<li>If you are using Ruby, you can use Ruby on Rails</li>
</ul>
<p>For databases, you can use:</p>
<ul>
<li>MySQL if you are using SQL</li>
<li>MongoDB if you are using NoSQL</li>
</ul>`,Q={title:"Blogging Platform API",description:"Build a RESTful API for a personal blogging platform",isNew:!1,sort:800,difficulty:"beginner",nature:"API",skills:["Programming Language","CRUD","RESTful API","Database"],seo:{title:"Blogging Platform API Project Idea",description:"Build a RESTful API for a personal blogging platform. Users can create, read, update, and delete blog posts using the API.",keywords:["blogging platform api","backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot"]},Z="C:/Users/HP/developer-roadmap-master/src/data/projects/blogging-platform-api.md",K=void 0;o((t,a,n)=>{const{layout:s,...e}=Q;return e.file=Z,e.url=K,l`${i()}${r(V())}`});const X=()=>`<p>The goal of this project is to practice setting up a blue-green deployment strategy for a simple web application. This will allow you to deploy your application in a more efficient and reliable way.</p>
<h2 id="requirement">Requirement</h2>
<p>You are required to take an existing application (e.g. the one you built in <a href="/projects/multi-container-service">multi-container service project</a>) and setup a blue-green deployment strategy for it. The goal is to deploy the next version of the application in a separate container and switch the traffic to the new container only when the new version is ready.</p>
<h2 id="bonus">Bonus</h2>
<ul>
<li>Setup a CI/CD pipeline to automatically deploy the application to the server when the code is pushed to the repository.</li>
<li>Setup a monitoring system to monitor the application and the deployment process.</li>
</ul>
<hr>
<p>After finishing this project you will have a good understanding of how to deploy a containerized application in a more efficient way without downtime and with zero data loss.</p>`,ee={title:"Blue-Green Deployment",description:"Setup a blue-green deployment strategy for your application.",isNew:!1,sort:1700,difficulty:"advanced",nature:"DevOps",skills:["bash","devops","monitoring"],seo:{title:"Blue-Green Deployment",description:"Setup a blue-green deployment strategy for your application.",keywords:["Blue-Green Deployment","Deployment Strategy","DevOps","Server Metrics"]},roadmapIds:["devops"]},se="C:/Users/HP/developer-roadmap-master/src/data/projects/blue-green-deployment.md",ne=void 0;o((t,a,n)=>{const{layout:s,...e}=ee;return e.file=se,e.url=ne,l`${i()}${r(X())}`});const te=()=>`<p>You are required to create a simple broadcast server that will allow clients to connect to it, send messages that will be broadcasted to all connected clients.</p>
<h2 id="goal">Goal</h2>
<p>The goal of this project is to help you understand how to work with websockets and implement real-time communication between clients and servers. This will help you understand how the real-time features of applications like chat applications, live scoreboards, etc., work.</p>
<h2 id="requirements">Requirements</h2>
<p>You are required to build a CLI based application that can be used to either start the server or connect to the server as a client. Here are the sample commands that you can use:</p>
<ul>
<li><code>broadcast-server start</code> - This command will start the server.</li>
<li><code>broadcast-server connect</code> - This command will connect the client to the server.</li>
</ul>
<p>When the server is started using the <code>broadcast-server start</code> command, it should listen for client connections on a specified port (you can configure that using command options or hardcode for simplicity). When a client connects and sends a message, the server should broadcast this message to all connected clients.</p>
<p>The server should be able to handle multiple clients connecting and disconnecting gracefully.</p>
<h2 id="implementation">Implementation</h2>
<p>You can use any programming language to implement this project. Here are some of the steps that you can follow to implement this project:</p>
<ol>
<li>Create a server that listens for incoming connections.</li>
<li>When a client connects, store the connection in a list of connected clients.</li>
<li>When a client sends a message, broadcast this message to all connected clients.</li>
<li>Handle client disconnections and remove the client from the list of connected clients.</li>
<li>Implement a client that can connect to the server and send messages.</li>
<li>Test the server by connecting multiple clients and sending messages.</li>
<li>Implement error handling and graceful shutdown of the server.</li>
</ol>
<hr>
<p>This project will help you understand how to work with websockets and implement real-time communication between clients and servers. You can extend this project by adding features like authentication, message history, etc.</p>`,ae={title:"Broadcast Server",description:"Build a server that can broadcast messages to connected clients.",isNew:!1,sort:1500,difficulty:"intermediate",nature:"CLI",skills:["Programming Language","Networking","Websockets","HTTP"],seo:{title:"Broadcast Server Project Idea",description:"Build a server that can broadcast messages to connected clients.",keywords:["broadcast server","backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot"]},oe="C:/Users/HP/developer-roadmap-master/src/data/projects/broadcast-server.md",re=void 0;o((t,a,n)=>{const{layout:s,...e}=ae;return e.file=oe,e.url=re,l`${i()}${r(te())}`});const le=()=>`<p>You are required to build a CLI tool that starts a caching proxy server, it will forward requests to the actual server and cache the responses. If the same request is made again, it will return the cached response instead of forwarding the request to the server.</p>
<h2 id="requirements">Requirements</h2>
<p>User should be able to start the caching proxy server by running a command like following:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="shell"><code><span class="line"><span style="color:#50FA7B">caching-proxy</span><span style="color:#BD93F9"> --port</span><span style="color:#FF79C6"> &#x3C;</span><span style="color:#F1FA8C">numbe</span><span style="color:#F8F8F2">r</span><span style="color:#FF79C6">></span><span style="color:#BD93F9"> --origin</span><span style="color:#FF79C6"> &#x3C;</span><span style="color:#F1FA8C">ur</span><span style="color:#F8F8F2">l</span><span style="color:#FF79C6">></span></span></code></pre>
<ul>
<li><code>--port</code> is the port on which the caching proxy server will run.</li>
<li><code>--origin</code> is the URL of the server to which the requests will be forwarded.</li>
</ul>
<p>For example, if the user runs the following command:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="shell"><code><span class="line"><span style="color:#50FA7B">caching-proxy</span><span style="color:#BD93F9"> --port</span><span style="color:#BD93F9"> 3000</span><span style="color:#BD93F9"> --origin</span><span style="color:#F1FA8C"> http://dummyjson.com</span></span></code></pre>
<p>The caching proxy server should start on port 3000 and forward requests to <code>http://dummyjson.com</code>.</p>
<p>Taking the above example, if the user makes a request to <code>http://localhost:3000/products</code>, the caching proxy server should forward the request to <code>http://dummyjson.com/products</code>, return the response along with headers and cache the response. Also, add the headers to the response that indicate whether the response is from the cache or the server.</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span># If the response is from the cache</span></span>
<span class="line"><span>X-Cache: HIT</span></span>
<span class="line"><span></span></span>
<span class="line"><span># If the response is from the origin server</span></span>
<span class="line"><span>X-Cache: MISS</span></span></code></pre>
<p>If the same request is made again, the caching proxy server should return the cached response instead of forwarding the request to the server.</p>
<p>You should also provide a way to clear the cache by running a command like following:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="shell"><code><span class="line"><span style="color:#50FA7B">caching-proxy</span><span style="color:#BD93F9"> --clear-cache</span></span></code></pre>
<hr>
<p>After building the above project, you should have a good understanding of how caching works and how you can build a caching proxy server to cache responses from other servers.</p>`,ie={title:"Caching Proxy",description:"Build a caching server that caches responses from other servers.",isNew:!1,sort:1200,difficulty:"intermediate",nature:"CLI",skills:["Programming Language","Text Processing","Markdown libraries","File Uploads"],seo:{title:"Caching Proxy Project Idea",description:"Build a caching proxy server that caches responses from proxied server.",keywords:["backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot","cpp"]},pe="C:/Users/HP/developer-roadmap-master/src/data/projects/caching-server.md",ce=void 0;o((t,a,n)=>{const{layout:s,...e}=ie;return e.file=pe,e.url=ce,l`${i()}${r(le())}`});const de=()=>`<p>In this project you are required to create a simple component for a website that displays a changelog. A changelog is a log or record of all notable changes made to a project or software. It is often used to keep users informed about the latest updates and improvements.</p>
<p>The goal of this project is to teach you about positioning and layout in CSS. You will create a simple HTML structure and use CSS to style it into a visually appealing and responsive changelog component. Given below is a rough mockup of the changelog component you need to create.</p>
<p><a href="https://assets.roadmap.sh/guest/changelog-component-1m86j.png" rel="noopener noreferrer nofollow" target="_blank"><img src="https://assets.roadmap.sh/guest/changelog-component-1m86j.png" alt="Changelog Component"></a></p>
<p>Feel free to customize the design and layout of the component as you see fit. The focus should be on creating a well-structured and responsive component that can be easily integrated into a website.</p>
<hr>
<p>After completing this project, you will have a good understanding of how to create simple layouts using HTML and CSS. You can further enhance your skills by exploring more complex layouts, such as grids and flexbox, in future projects.</p>`,ue={title:"Changelog Component",description:"Create a changelog component for a website using HTML and CSS.",isNew:!1,sort:4,difficulty:"beginner",nature:"CSS",skills:["HTML","Layouts","CSS","Flexbox"],seo:{title:"Create a Changelog Component Website Using HTML and CSS",description:"Learn how to create a changelog component for a website using HTML and CSS.",keywords:["basic css","css project idea","responsive design","html and css"]},roadmapIds:["frontend"]},he="C:/Users/HP/developer-roadmap-master/src/data/projects/changelog-component.md",me=void 0;o((t,a,n)=>{const{layout:s,...e}=ue;return e.file=he,e.url=me,l`${i()}${r(de())}`});const ge=()=>`<p>The goal of this project is to introduce you to the basics of configuration management using Ansible. You will write an Ansible playbook to configure a Linux server.</p>
<h2 id="requirements">Requirements</h2>
<p>If you have been doing the previous projects, you should already have a Linux server running. If not, setup a Linux server on <a href="https://m.do.co/c/b29aa8845df8" rel="noopener noreferrer nofollow" target="_blank">DigitalOcean</a>, AWS or another cloud provider.</p>
<p>You are required to write an Ansible playbook called <code>setup.yml</code> and create the following roles:</p>
<ul>
<li><code>base</code> — basic server setup (installs utilities, updates the server, installs <code>fail2ban</code>, etc.)</li>
<li><code>nginx</code> — installs and configures <code>nginx</code></li>
<li><code>app</code> — uploads the given tarball of a static HTML website to the server and unzips it.</li>
<li><code>ssh</code> - adds the given public key to the server</li>
</ul>
<p>Set up the inventory file <code>inventory.ini</code> to include the server you are going to configure When you run the playbook, it should run the roles above in sequence. You should also assign proper tags to the roles so that you can run only specific roles.</p>
<p>Example:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#6272A4"># Run all the roles</span></span>
<span class="line"><span style="color:#50FA7B">ansible-playbook</span><span style="color:#F1FA8C"> setup.yml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6272A4"># Run only the app role</span></span>
<span class="line"><span style="color:#50FA7B">ansible-playbook</span><span style="color:#F1FA8C"> setup.yml</span><span style="color:#BD93F9"> --tags</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">app</span><span style="color:#E9F284">"</span></span></code></pre>
<h3 id="stretch-goal">Stretch goal</h3>
<p>Modify the <code>app</code> role to pull the repository from GitHub and deploy it.</p>
<hr>
<p>Once you are done with the project, you should have a basic understanding of how Ansible works and how it can be used to manage server configuration.</p>`,ye={title:"Configuration Management",description:"Write an Ansible playbook to configure a Linux server.",isNew:!1,sort:1100,difficulty:"intermediate",nature:"Ansible",skills:["ansible","linux","devops"],seo:{title:"Configuration Management",description:"Write an Ansible playbook to configure a Linux server.",keywords:["Configuration Management","Ansible","Linux"]},roadmapIds:["devops"]},fe="C:/Users/HP/developer-roadmap-master/src/data/projects/configuration-management.md",be=void 0;o((t,a,n)=>{const{layout:s,...e}=ye;return e.file=fe,e.url=be,l`${i()}${r(ge())}`});const Fe=()=>`<p>This project is designed to introduce you to basic DOM manipulation and event handling in JavaScript.</p>
<p>Many websites display a cookie consent popup to inform users about the use of cookies and to obtain their consent. In this project, you will create a simple cookie consent popup that appears when the user visits the page. The popup will include a message and a button to accept the consent. Once accepted, the popup will disappear. Given below is an example of how the popup might look:</p>
<p><a href="https://assets.roadmap.sh/guest/cookie-consent-banner-07etz.png" rel="noopener noreferrer nofollow" target="_blank"><img src="https://assets.roadmap.sh/guest/cookie-consent-banner-07etz.png" alt="Cookie Consent Popup"></a></p>
<p>Bonus points if you persist the user’s consent using cookies or local storage and prevent the popup from appearing on subsequent visits.</p>`,we={title:"Cookie Consent",description:"Create a simple cookie consent banner using JavaScript.",isNew:!1,sort:12,difficulty:"beginner",nature:"JavaScript",skills:["HTML","CSS","JavaScript","DOM Manipulation"],seo:{title:"Create a Cookie Consent Popup Using HTML, CSS, and JavaScript",description:"Learn how to build a cookie consent popup with basic JavaScript for managing user consent.",keywords:["cookie consent","javascript popup","html and css","javascript project"]},roadmapIds:["frontend"]},ve="C:/Users/HP/developer-roadmap-master/src/data/projects/cookie-consent.md",ke=void 0;o((t,a,n)=>{const{layout:s,...e}=we;return e.file=ve,e.url=ke,l`${i()}${r(Fe())}`});const Ce=()=>`<p>You will create a custom dropdown menu that lets users select an item from a list. The dropdown should have a default state showing a placeholder text, an open state revealing all options, and a selected state where the chosen item is displayed. When an item is selected, the dropdown closes, and the selected item is highlighted.</p>
<p>Given below is the mockup showing the dropdown in its default, open, and selected states:</p>
<p><a href="https://assets.roadmap.sh/guest/dropdown-1f4b3.png" rel="noopener noreferrer nofollow" target="_blank"><img src="https://assets.roadmap.sh/guest/dropdown-1f4b3.png" alt="Custom Dropdown"></a></p>
<p>This project will help you practice DOM manipulation, event handling, and creating responsive and interactive elements with JavaScript.</p>`,Ae={title:"Custom Dropdown",description:"Create a custom dropdown using HTML, CSS, and JavaScript.",isNew:!1,sort:20,difficulty:"intermediate",nature:"JavaScript",skills:["HTML","CSS","JavaScript","DOM Manipulation"],seo:{title:"Build a Custom Dropdown Menu with JavaScript",description:"Learn how to create a fully customizable dropdown menu that allows users to select an item and see the selection reflected in the dropdown.",keywords:["custom dropdown","javascript dropdown","html and css"]},roadmapIds:["frontend"]},Ee="C:/Users/HP/developer-roadmap-master/src/data/projects/custom-dropdown.md",Se=void 0;o((t,a,n)=>{const{layout:s,...e}=Ae;return e.file=Ee,e.url=Se,l`${i()}${r(Ce())}`});const Te=()=>`<p>You are required to build a command-line interface (CLI) utility for backing up any type of database. The utility will support various database management systems (DBMS) such as MySQL, PostgreSQL, MongoDB, SQLite, and others. The tool will feature automatic backup scheduling, compression of backup files, storage options (local and cloud), and logging of backup activities.</p>
<h2 id="project-requirements">Project Requirements</h2>
<p>The CLI tool should support the following features:</p>
<h3 id="database-connectivity">Database Connectivity</h3>
<ul>
<li><strong>Support for Multiple DBMS:</strong> Provide support for connecting to various types of databases (e.g., MySQL, PostgreSQL, MongoDB).</li>
<li><strong>Connection Parameters:</strong> Allow users to specify database connection parameters. Parameters may include host, port, username, password, and database name.</li>
<li><strong>Connection Testing:</strong> Validate credentials based on the database type before proceeding with backup operations.</li>
<li><strong>Error Handling:</strong> Implement error handling for database connection failures.</li>
</ul>
<h3 id="backup-operations">Backup Operations</h3>
<ul>
<li><strong>Backup Types:</strong> Support full, incremental, and differential backup types based on the database type and user preference.</li>
<li><strong>Compression:</strong> Compress backup files to reduce storage space.</li>
</ul>
<h3 id="storage-options">Storage Options</h3>
<ul>
<li><strong>Local Storage:</strong> Allow users to store backup files locally on the system.</li>
<li><strong>Cloud Storage:</strong> Provide options to store backup files on cloud storage services like AWS S3, Google Cloud Storage, or Azure Blob Storage.</li>
</ul>
<h3 id="logging-and-notifications">Logging and Notifications</h3>
<ul>
<li><strong>Logging:</strong> Log backup activities, including start time, end time, status, time taken, and any errors encountered.</li>
<li><strong>Notifications:</strong> Optionally send slack notification on completion of backup operations.</li>
</ul>
<h3 id="restore-operations">Restore Operations</h3>
<ul>
<li><strong>Restore Backup:</strong> Implement a restore operation to recover the database from a backup file.</li>
<li><strong>Selective Restore:</strong> Provide options for selective restoration of specific tables or collections if supported by the DBMS.</li>
</ul>
<h2 id="constraints">Constraints</h2>
<p>Feel free to use any programming language or framework of your choice to implement the database backup utility. Ensure that the tool is well-documented and easy to use. You can leverage existing libraries or tools for database connectivity and backup operations.</p>
<ul>
<li>The tool should be designed to handle large databases efficiently.</li>
<li>Ensure that the backup and restore operations are secure and reliable.</li>
<li>The utility should be user-friendly and provide clear instructions for usage (e.g., help command).</li>
<li>Consider the performance implications of backup operations on the database server.</li>
<li>Implement proper error handling and logging mechanisms to track backup activities.</li>
<li>Ensure compatibility with different operating systems (Windows, Linux, macOS).</li>
</ul>
<hr>
<p>Working on this project will help you gain a deeper understanding of database management systems, backup strategies, command-line interface development, and error handling. You will also learn about cloud storage integration and logging mechanisms. This project will enhance your skills in programming, database management, and system administration.</p>`,xe={title:"Database Backup Utility",description:"Build a database backup utility that can backup and restore any DB",isNew:!1,sort:2100,difficulty:"advanced",nature:"CLI",skills:["Programming Language","Databases","CLI"],seo:{title:"Database Backup Utility Project Idea",description:"",keywords:["multiplayer game server","backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot","cpp"]},je="C:/Users/HP/developer-roadmap-master/src/data/projects/database-backup-utility.md",Ie=void 0;o((t,a,n)=>{const{layout:s,...e}=xe;return e.file=je,e.url=Ie,l`${i()}${r(Te())}`});const Be=()=>`<p>In this project, you are required to create a simple datepicker UI using only HTML and CSS. It will not be a functional datepicker, but a static UI component that you can later enhance with JavaScript.</p>
<p>The goal of this project is to help you practice positioning, layout, and styling techniques in CSS. Below is a rough mockup showing the datepicker UI you need to create.</p>
<p><a href="https://assets.roadmap.sh/guest/datepicker-ui-7l480.png" rel="noopener noreferrer nofollow" target="_blank"><img src="https://assets.roadmap.sh/guest/datepicker-ui-7l480.png" alt="Datepicker UI"></a></p>
<p>Feel free to customize the colors, fonts, and overall design to match your style.</p>
<hr>
<p>While this version won’t be functional, it will provide a solid foundation for creating an interactive datepicker in a future project.</p>`,Pe={title:"Datepicker UI",description:"Create a simple datepicker UI using HTML and CSS.",isNew:!1,sort:6,difficulty:"beginner",nature:"CSS",skills:["HTML","CSS","Layouts","Positioning"],seo:{title:"Create a Datepicker UI for a Website Using HTML and CSS",description:"Learn how to create a datepicker component using HTML and CSS.",keywords:["basic css","css project idea","responsive design","html and css"]},roadmapIds:["frontend"]},De="C:/Users/HP/developer-roadmap-master/src/data/projects/datepicker-ui.md",$e=void 0;o((t,a,n)=>{const{layout:s,...e}=Pe;return e.file=De,e.url=$e,l`${i()}${r(Be())}`});const Le=()=>`<p>The goal of this project is to dockerize a simple Node.js service and deploy it to a remote server using GitHub Actions. You will also practice secrets management.</p>
<h2 id="requirements">Requirements</h2>
<p>There are 4 parts to this project:</p>
<ul>
<li><strong>Step 1</strong> — Creating a Node.js service</li>
<li><strong>Step 2</strong> — Dockerizing the Node.js service</li>
<li><strong>Step 3</strong> — Setup a remote Linux Server</li>
<li><strong>Step 4</strong> — Deploying the Dockerized Node.js service to a remote server using GitHub Actions</li>
</ul>
<h3 id="part-1-creating-a-nodejs-service">Part 1: Creating a Node.js service</h3>
<p>You are required to create a simple Node.js service with two routes:</p>
<ul>
<li><code>/</code> route - which simply returns <code>Hello, world!</code></li>
<li><code>/secret</code> route - protected by Basic Auth</li>
</ul>
<p>Project should have a <code>.env</code> file with the following variables:</p>
<ul>
<li><code>SECRET_MESSAGE</code> - the secret message that the <code>/secret</code> route should return</li>
<li><code>USERNAME</code> - the username for the Basic Auth</li>
<li><code>PASSWORD</code> - the password for the Basic Auth</li>
</ul>
<p>When user visits the <code>/secret</code> route, they should be prompted for the username and password. If the username and password are correct, they should be able to see the secret message. If the username and password are incorrect, they should see an error message.</p>
<h3 id="part-2-dockerizing-the-nodejs-service">Part 2: Dockerizing the Node.js service</h3>
<p>Create a Dockerfile for the Node.js service that will build a Docker image. You should be able to run the Docker image locally. Make sure that the <code>.env</code> file is not included in the Docker image.</p>
<h3 id="part-3-setup-a-remote-linux-server">Part 3: Setup a remote Linux Server</h3>
<p>Setup a remote Linux server on either <a href="https://m.do.co/c/b29aa8845df8" rel="noopener noreferrer nofollow" target="_blank">DigitalOcean</a>, AWS, or any other provider. You can either set it up manually by using SSH or use a mix of Ansible or Terraform from previous projects.</p>
<h3 id="part-4-deploy-the-dockerized-nodejs-service">Part 4: Deploy the Dockerized Node.js service</h3>
<p>Create a workflow that will build a Docker image and push it to the container registry. The workflow should then deploy the Docker image to the remote server. Feel free to explore secrets management in GitHub Actions. I will leave the implementation details to you.</p>
<hr>
<p>Once you are done with the project, you will have practiced dockerizing applications, setting up remote servers, implementing CI/CD workflows and secrets management.</p>`,He={title:"Dockerized Service",description:"Use GitHub Actions to Deploy a Dockerized Node.js Service",isNew:!1,sort:1400,difficulty:"intermediate",nature:"Docker",skills:["nodejs","docker","devops"],seo:{title:"Dockerized Service Deployment",description:"Use GitHub Actions to Deploy a Dockerized Node.js Service to a remote server",keywords:["Docker","DigitalOcean","Node.js","GitHub Actions"]},roadmapIds:["devops"]},Ue="C:/Users/HP/developer-roadmap-master/src/data/projects/dockerized-service-deployment.md",qe=void 0;o((t,a,n)=>{const{layout:s,...e}=He;return e.file=Ue,e.url=qe,l`${i()}${r(Le())}`});const Me=()=>`<p>The goal of this project is to get familiar with <code>systemd</code>; creating and enabling a service, checking the status, keeping an eye on the logs, starting and stopping the service, etc.</p>
<h2 id="requirements">Requirements</h2>
<p>Create a script called <code>dummy.sh</code> that keeps running forever and writes a message to the log file every 10 seconds simulating an application running in the background. Here is an example script:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#6272A4">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF79C6">while</span><span style="color:#8BE9FD"> true</span><span style="color:#F8F8F2">; </span><span style="color:#FF79C6">do</span></span>
<span class="line"><span style="color:#8BE9FD">  echo</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Dummy service is running...</span><span style="color:#E9F284">"</span><span style="color:#FF79C6"> >></span><span style="color:#F1FA8C"> /var/log/dummy-service.log</span></span>
<span class="line"><span style="color:#50FA7B">  sleep</span><span style="color:#BD93F9"> 10</span></span>
<span class="line"><span style="color:#FF79C6">done</span></span></code></pre>
<p>Create a systemd service <code>dummy.service</code> that should start the app automatically on boot and keep it running in the background. If the service fails for any reason, it should automatically restart.</p>
<p>You should be able to <code>start</code>, <code>stop</code>, <code>enable</code>, <code>disable</code>, check the <code>status</code> of the service, and check the logs i.e. following commands should be available for the service:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#6272A4"># Interacting with the service</span></span>
<span class="line"><span style="color:#50FA7B">sudo</span><span style="color:#F1FA8C"> systemctl</span><span style="color:#F1FA8C"> start</span><span style="color:#F1FA8C"> dummy</span></span>
<span class="line"><span style="color:#50FA7B">sudo</span><span style="color:#F1FA8C"> systemctl</span><span style="color:#F1FA8C"> stop</span><span style="color:#F1FA8C"> dummy</span></span>
<span class="line"><span style="color:#50FA7B">sudo</span><span style="color:#F1FA8C"> systemctl</span><span style="color:#F1FA8C"> enable</span><span style="color:#F1FA8C"> dummy</span></span>
<span class="line"><span style="color:#50FA7B">sudo</span><span style="color:#F1FA8C"> systemctl</span><span style="color:#F1FA8C"> disable</span><span style="color:#F1FA8C"> dummy</span></span>
<span class="line"><span style="color:#50FA7B">sudo</span><span style="color:#F1FA8C"> systemctl</span><span style="color:#F1FA8C"> status</span><span style="color:#F1FA8C"> dummy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6272A4"># Check the logs</span></span>
<span class="line"><span style="color:#50FA7B">sudo</span><span style="color:#F1FA8C"> journalctl</span><span style="color:#BD93F9"> -u</span><span style="color:#F1FA8C"> dummy</span><span style="color:#BD93F9"> -f</span></span></code></pre>
<hr>
<p>After completing this project, you will have a good understanding of systemd, creating custom services, managing existing services, debugging issues, and more.</p>`,Re={title:"Dummy Systemd Service",description:"Create a long-running systemd service that logs to a file.",isNew:!1,sort:900,difficulty:"beginner",nature:"Systemd",skills:["Linux","DevOps","Systemd"],seo:{title:"Dummy Systemd Service",description:"Create a long-running Systemd service that autorestarts and logs to a file.",keywords:["Dummy Systemd Service","Systemd Service","Systemd"]},roadmapIds:["devops"]},Ne="C:/Users/HP/developer-roadmap-master/src/data/projects/dummy-systemd-service.md",Ge=void 0;o((t,a,n)=>{const{layout:s,...e}=Re;return e.file=Ne,e.url=Ge,l`${i()}${r(Me())}`});const Ye=()=>`<p>The goal of this project is to create an AWS account, set up a Linux server on AWS EC2, and deploy a simple static website. This project will help you gain hands-on experience with cloud computing, specifically with Amazon Web Services (AWS).</p>
<h2 id="requirements">Requirements</h2>
<p>You are required to complete the following tasks:</p>
<ul>
<li>Create an AWS account if you don’t have one already.</li>
<li>Familiarize yourself with the AWS Management Console.</li>
<li>Launch an EC2 instance with the following specifications:
<ul>
<li>Use Ubuntu Server AMI.</li>
<li>Choose a <code>t2.micro</code> instance type (eligible for AWS Free Tier).</li>
<li>Use the default VPC and subnet for your region.</li>
<li>Configure the security group to allow inbound traffic on ports <code>22</code> (SSH) and <code>80</code> (HTTP).</li>
<li>Create a new key pair or use an existing one for SSH access.</li>
<li>Assign a public IP address to your instance.</li>
</ul>
</li>
<li>Connect to your EC2 instance using SSH and the private key.</li>
<li>Update the system packages and install a web server (e.g., Nginx).</li>
<li>Create a simple HTML file for your static website.</li>
<li>Deploy the static website to your EC2 instance.</li>
<li>Access your website using the public IP address of your EC2 instance.</li>
</ul>
<h2 id="stretch-goals">Stretch Goals</h2>
<p>If you want to challenge yourself further, try these additional tasks:</p>
<ul>
<li>Set up a custom domain name for your website using Amazon Route 53.</li>
<li>Implement HTTPS using a free SSL/TLS certificate from Let’s Encrypt.</li>
<li>Create a simple CI/CD pipeline using AWS CodePipeline to automatically deploy changes to your website.</li>
</ul>
<h2 id="learning-outcomes">Learning Outcomes</h2>
<p>After completing this project, you will have gained practical experience in:</p>
<ul>
<li>Creating basic AWS resources</li>
<li>Learn about <a href="https://kamranahmed.info/posts/up-and-running-with-aws-ec2" target="_blank">AWS instances, types and differences</a></li>
<li>Launching and configuring EC2 instances</li>
<li>Connecting to Linux servers using SSH</li>
<li>Basic server administration and web server setup</li>
<li>Deploying static websites to cloud infrastructure</li>
</ul>
<hr>
<p>After finishing this project you should have a good understanding of launching and connecting to EC2 instances, basic knowledge of security groups, and be able to deploy any of the projects from previous tasks using AWS EC2. Future project ideas will be based on these concepts.</p>`,_e={title:"EC2 Instance",description:"Create an EC2 instance on AWS and connect to it using SSH.",isNew:!1,sort:1001,difficulty:"beginner",nature:"AWS",skills:["aws","ec2","linux","devops"],seo:{title:"EC2 Instance",description:"Create an EC2 instance on AWS and connect to it using SSH.",keywords:["ec2","aws","linux"]},roadmapIds:["devops"]},Oe="C:/Users/HP/developer-roadmap-master/src/data/projects/ec2-instance.md",We=void 0;o((t,a,n)=>{const{layout:s,...e}=_e;return e.file=Oe,e.url=We,l`${i()}${r(Ye())}`});const Je=()=>`<p>You are required to build an API for an e-commerce platform. If you have developed the other projects in this roadmap, you will have to keep in mind everything you have learned so far:</p>
<ul>
<li>JWT authentication to ensure many users can interact with it.</li>
<li>Implementing simple CRUD operations.</li>
<li>Interaction with external services. Here you’ll be integrating with payment gateways such as Stripe.</li>
<li>A complex data model that can handle products, shopping carts, and more.</li>
</ul>
<p>The goal of this project is to help you understand how to build a logic-heavy application with complex data models. You will also learn how to interact with external services and handle user authentication.</p>
<p><img src="https://assets.roadmap.sh/guest/simple-ecommerce-api-thzqo.png" alt="E-Commerce API"></p>
<h2 id="requirements">Requirements</h2>
<p>Here is a rough list of requirements for this project:</p>
<ul>
<li>Ability for users to sign up and log in.</li>
<li>Ability to add products to a cart.</li>
<li>Ability to remove products from a cart.</li>
<li>Ability to view and search for products.</li>
<li>Ability for users to checkout and pay for products.</li>
</ul>
<p>You should also have some sort of admin panel where only you can add products, set the prices, manage inventory, and more.</p>
<p>Start with building the API first and then frontend; you can use tools like Postman to interact with your API. Alternatively, build a simple frontend with HTML, CSS and some templating engine like Jinja or EJS.</p>
<hr>
<p>This project is a great way to learn how to build a complex application with a lot of moving parts. I will highly recommend you to complete this project before moving on to more advanced projects.</p>`,ze={title:"E-Commerce API",description:"E-Commerce platform with cart and payment gateway integration.",isNew:!1,sort:1600,difficulty:"intermediate",nature:"API",skills:["Programming Language","Database","Payment Gateway","Inventory Management"],seo:{title:"E-Commerce API Project Idea",description:"E-Commerce platform with cart and payment gateway integration.",keywords:["backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot"]},Ve="C:/Users/HP/developer-roadmap-master/src/data/projects/ecommerce-api.md",Qe=void 0;o((t,a,n)=>{const{layout:s,...e}=ze;return e.file=Ve,e.url=Qe,l`${i()}${r(Je())}`});const Ze=()=>`<p>Build an API for an expense tracker application. This API should allow users to create, read, update, and delete expenses. Users should be able to sign up and log in to the application. Each user should have their own set of expenses.</p>
<p><img src="https://assets.roadmap.sh/guest/expense-tracker-api-m72p5.png" alt="Expense Tracker API"></p>
<h2 id="features">Features</h2>
<p>Here are the features that you should implement in your Expense Tracker API:</p>
<ul>
<li>Sign up as a new user.</li>
<li>Generate and validate JWTs for handling authentication and user session.</li>
<li>List and filter your past expenses. You can add the following filters:
<ul>
<li>Past week</li>
<li>Past month</li>
<li>Last 3 months</li>
<li>Custom (to specify a start and end date of your choosing).</li>
</ul>
</li>
<li>Add a new expense</li>
<li>Remove existing expenses</li>
<li>Update existing expenses</li>
</ul>
<h2 id="constraints">Constraints</h2>
<p>You can use any programming language and framework of your choice. You can use a database of your choice to store the data. You can use any ORM or database library to interact with the database.</p>
<p>Here are some constraints that you should follow:</p>
<ul>
<li>You’ll be using <a href="https://itnext.io/demystifying-jwt-a-guide-for-front-end-developers-ead6574531c3" rel="noopener noreferrer nofollow" target="_blank">JWT (JSON Web Token)</a> to protect the endpoints and to identify the requester.</li>
<li>For the different expense categories, you can use the following list (feel free to decide how to implement this as part of your data model):
<ul>
<li>Groceries</li>
<li>Leisure</li>
<li>Electronics</li>
<li>Utilities</li>
<li>Clothing</li>
<li>Health</li>
<li>Others</li>
</ul>
</li>
</ul>
<hr>
<p>This is the last “beginner” project in the backend roadmap. If you have completed all the projects in the backend roadmap, you should have a good understanding of how to build a backend application. You can now move on to the “intermediate” projects in the backend roadmap.</p>`,Ke={title:"Expense Tracker API",description:"Build an API for an expense tracker application.",isNew:!1,sort:1e3,difficulty:"beginner",nature:"API",skills:["Programming Language","Data modeling","User Authentication"],seo:{title:"Expense Tracker API Project Idea",description:"Build an API for an expense tracker application.",keywords:["backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot"]},Xe="C:/Users/HP/developer-roadmap-master/src/data/projects/expense-tracker-api.md",es=void 0;o((t,a,n)=>{const{layout:s,...e}=Ke;return e.file=Xe,e.url=es,l`${i()}${r(Ze())}`});const ss=()=>`<p>Build a simple expense tracker application to manage your finances. The application should allow users to add, delete, and view their expenses. The application should also provide a summary of the expenses.</p>
<h2 id="requirements">Requirements</h2>
<p>Application should run from the command line and should have the following features:</p>
<ul>
<li>Users can add an expense with a description and amount.</li>
<li>Users can update an expense.</li>
<li>Users can delete an expense.</li>
<li>Users can view all expenses.</li>
<li>Users can view a summary of all expenses.</li>
<li>Users can view a summary of expenses for a specific month (of current year).</li>
</ul>
<p>Here are some additional features that you can add to the application:</p>
<ul>
<li>Add expense categories and allow users to filter expenses by category.</li>
<li>Allow users to set a budget for each month and show a warning when the user exceeds the budget.</li>
<li>Allow users to export expenses to a CSV file.</li>
</ul>
<p>The list of commands and their expected output is shown below:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#50FA7B">$</span><span style="color:#F1FA8C"> expense-tracker</span><span style="color:#F1FA8C"> add</span><span style="color:#BD93F9"> --description</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Lunch</span><span style="color:#E9F284">"</span><span style="color:#BD93F9"> --amount</span><span style="color:#BD93F9"> 20</span></span>
<span class="line"><span style="color:#6272A4"># Expense added successfully (ID: 1)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50FA7B">$</span><span style="color:#F1FA8C"> expense-tracker</span><span style="color:#F1FA8C"> add</span><span style="color:#BD93F9"> --description</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Dinner</span><span style="color:#E9F284">"</span><span style="color:#BD93F9"> --amount</span><span style="color:#BD93F9"> 10</span></span>
<span class="line"><span style="color:#6272A4"># Expense added successfully (ID: 2)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50FA7B">$</span><span style="color:#F1FA8C"> expense-tracker</span><span style="color:#F1FA8C"> list</span></span>
<span class="line"><span style="color:#6272A4"># ID  Date       Description  Amount</span></span>
<span class="line"><span style="color:#6272A4"># 1   2024-08-06  Lunch        $20</span></span>
<span class="line"><span style="color:#6272A4"># 2   2024-08-06  Dinner       $10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50FA7B">$</span><span style="color:#F1FA8C"> expense-tracker</span><span style="color:#F1FA8C"> summary</span></span>
<span class="line"><span style="color:#6272A4"># Total expenses: $30</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50FA7B">$</span><span style="color:#F1FA8C"> expense-tracker</span><span style="color:#F1FA8C"> delete</span><span style="color:#BD93F9"> --id</span><span style="color:#BD93F9"> 2</span></span>
<span class="line"><span style="color:#6272A4"># Expense deleted successfully</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50FA7B">$</span><span style="color:#F1FA8C"> expense-tracker</span><span style="color:#F1FA8C"> summary</span></span>
<span class="line"><span style="color:#6272A4"># Total expenses: $20</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50FA7B">$</span><span style="color:#F1FA8C"> expense-tracker</span><span style="color:#F1FA8C"> summary</span><span style="color:#BD93F9"> --month</span><span style="color:#BD93F9"> 8</span></span>
<span class="line"><span style="color:#6272A4"># Total expenses for August: $20</span></span></code></pre>
<h2 id="implementation">Implementation</h2>
<p>You can implement the application using any programming language of your choice. Here are some suggestions:</p>
<ul>
<li>Use any programming language for any available module for parsing command arguments (e.g. python with the <code>argparse</code>, node.js with <code>commander</code> etc).</li>
<li>Use a simple text file to store the expenses data. You can use JSON, CSV, or any other format to store the data.</li>
<li>Add error handling to handle invalid inputs and edge cases (e.g. negative amounts, non-existent expense IDs, etc).</li>
<li>Use functions to modularize the code and make it easier to test and maintain.</li>
</ul>
<hr>
<p>This project idea is a great way to practice your logic building skills and learn how to interact with the filesystem using a CLI application. It will also help you understand how to manage data and provide useful information to users in a structured way.</p>`,ns={title:"Expense Tracker",description:"Build a simple expense tracker to manage your finances.",isNew:!1,sort:300,difficulty:"beginner",nature:"CLI",skills:["Programming Language","CLI","Filesystem","Logic Building"],seo:{title:"Expense Tracker",description:"Build a simple expense tracker application to manage your finances.",keywords:["expense tracker cli","backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot","cpp"]},ts="C:/Users/HP/developer-roadmap-master/src/data/projects/expense-tracker.md",as=void 0;o((t,a,n)=>{const{layout:s,...e}=ns;return e.file=ts,e.url=as,l`${i()}${r(ss())}`});const os=()=>`<p>You are required to develop a tool that verifies the integrity of log files to detect tampering. This tool can be used to enhance security measures by using techniques such as file integrity monitoring and hashing to ensure that no unauthorized changes have been made to the log files.</p>
<h2 id="requirements">Requirements</h2>
<p>The tool should be capable of the following:</p>
<ul>
<li>Accept a directory or a single log file as input.</li>
<li>Utilize a cryptographic hashing algorithm, such as SHA-256, to compute hashes for each log file provided.</li>
<li>On first use, store the computed hashes in a secure location.</li>
<li>For subsequent uses, compare the newly computed hashes against the previously stored ones.</li>
<li>Clearly report any discrepancies found as a result of the hash comparison, indicating possible file tampering.</li>
<li>Allow for manual re-initialization of log file integrity.</li>
</ul>
<p>Here is the example of how it might look like</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#FF79C6">></span><span style="color:#F8F8F2"> ./integrity-check init /var/log  </span><span style="color:#6272A4"># Initializes and stores hashes of all log files in the directory</span></span>
<span class="line"><span style="color:#FF79C6">></span><span style="color:#F8F8F2"> Hashes stored successfully.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF79C6">></span><span style="color:#F8F8F2"> ./integrity-check check /var/log/syslog</span></span>
<span class="line"><span style="color:#FF79C6">></span><span style="color:#F8F8F2"> Status: Modified (</span><span style="color:#50FA7B">Hash</span><span style="color:#F1FA8C"> mismatch</span><span style="color:#F8F8F2">)</span></span>
<span class="line"><span style="color:#6272A4"># Optionally report the files where hashes mismatched</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF79C6">></span><span style="color:#F8F8F2"> ./integrity-check -check /var/log/auth.log</span></span>
<span class="line"><span style="color:#FF79C6">></span><span style="color:#F8F8F2"> Status: Unmodified</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF79C6">></span><span style="color:#F8F8F2"> ./integrity-check update /var/log/syslog</span></span>
<span class="line"><span style="color:#FF79C6">></span><span style="color:#F8F8F2"> Hash updated successfully.</span></span></code></pre>
<p>After completing this project you will get the idea of hashing algorithms, security and writing scripts.</p>`,rs={title:"File Integrity Checker",description:"Verify the integrity of application log files to detect tampering.",isNew:!1,sort:1602,difficulty:"intermediate",nature:"Security",skills:["Bash","Python","Linux","Cyber Security"],seo:{title:"Build A File Integrity Checking Tool",description:"Learn how to build a CLI tool that validates the integrity of a file using hashes.",keywords:["integrity","hashing","security","devops","cyber security"]},roadmapIds:["devops"]},ls="C:/Users/HP/developer-roadmap-master/src/data/projects/file-integrity-checker.md",is=void 0;o((t,a,n)=>{const{layout:s,...e}=rs;return e.file=ls,e.url=is,l`${i()}${r(os())}`});const ps=()=>`<p>This project involves creating a backend system for a workout tracker application where users can sign up, log in, create workout plans, and track their progress. The system will feature JWT authentication, CRUD operations for workouts, and generate reports on past workouts.</p>
<h2 id="requirements">Requirements</h2>
<p>You are required to develop an API for a workout tracker application that allows users to manage their workouts and track their progress. Your first task is to think about the database schema and the API endpoints that will be needed to support the application’s functionality. Here are some of the key features you should consider:</p>
<h3 id="exercise-data">Exercise Data</h3>
<p>You should write a data seeder to populate the database with a list of exercises. Each exercise should have a name, description, and category (e.g., cardio, strength, flexibility) or muscle group (e.g., chest, back, legs). Exercises will be used to create workout plans.</p>
<h3 id="user-authentication-and-authorization">User Authentication and Authorization</h3>
<p>Users will be able to sign up, log in, and log out of the application. You should use JWTs for authentication and authorization. Only authenticated users should be able to create, update, and delete workout plans. Needless to say, users should only be able to access their own workout plans.</p>
<ul>
<li><strong>Sign-Up</strong>: Allow users to create an account.</li>
<li><strong>Login</strong>: Allow users to log in to their account.</li>
<li><strong>JWT</strong>: Use JSON Web Tokens for authentication.</li>
</ul>
<h3 id="workout-management">Workout Management</h3>
<p>Users will be able to create their workout plans. Workout plans should consist of multiple exercises, each with a set number of repetitions, sets, and weights. Users should be able to update and delete their workout plans. Additionally, users should be able to schedule workouts for specific dates and times.</p>
<ul>
<li>Create Workout: Allow users to create workouts composed of multiple exercises.</li>
<li>Update Workout: Allow users to update workouts and add comments.</li>
<li>Delete Workout: Allow users to delete workouts.</li>
<li>Schedule Workouts: Allow users to schedule workouts for specific dates and times.</li>
<li>List Workouts: List active or pending workouts sorted by date and time.</li>
<li>Generate Reports: Generate reports on past workouts and progress.</li>
</ul>
<h2 id="constraints">Constraints</h2>
<p>You are free to choose the programming language and database of your choice. Actual decisions for the database schema, API endpoints, and other implementation details are up to you. However, you should consider the following constraints:</p>
<ul>
<li><strong>Database</strong>: Use a relational database to store user data, workout plans, and exercise data.</li>
<li><strong>API</strong>: Develop a RESTful API to interact with the database.</li>
<li><strong>Security</strong>: Implement JWT authentication to secure the API endpoints.</li>
<li><strong>Testing</strong>: Write unit tests to ensure the correctness of your code.</li>
<li><strong>Documentation</strong>: Learn about OpenAPI Specs. Document your API endpoints and provide examples of how to use them.</li>
</ul>
<hr>
<p>This project is a great way to practice building a backend system for a real-world application. You will learn how to design a database schema, implement user authentication, and create RESTful API endpoints. Additionally, you will gain experience in writing unit tests and documenting your code.</p>`,cs={title:"Workout Tracker",description:"App to let users track their workouts and progress.",isNew:!1,sort:1700,difficulty:"intermediate",nature:"API",skills:["Programming Language","Date and Time","Database","Seeder","OpenAPI"],seo:{title:"Workout Tracker Project Idea",description:"App to let users track their workouts and progress.",keywords:["backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot"]},ds="C:/Users/HP/developer-roadmap-master/src/data/projects/fitness-workout-tracker.md",us=void 0;o((t,a,n)=>{const{layout:s,...e}=cs;return e.file=ds,e.url=us,l`${i()}${r(ps())}`});const hs=()=>`<p>The goal of this project is to help you learn about how to use state management and component-based architecture using JavaScript frameworks. You will build a flash card app with pre-defined JavaScript questions and answers that users can flip through to test their knowledge.</p>
<p><img src="https://assets.roadmap.sh/guest/flash-cards-crzw6.png" alt="Flash Cards"></p>
<h2 id="requirements">Requirements</h2>
<p>You are required to develop a flash cards app with the following features:</p>
<ul>
<li>Pre-defined flashcards with questions and answers</li>
<li>Progress bar to show the user’s progress</li>
<li>Ability to view flashcards one at a time and flip to reveal the answer</li>
<li>Simple navigation to cycle through the flashcards</li>
</ul>
<hr>
<p>This project will help you understand how to manage state and create reusable components. You can use any framework of your choice, such as React, Angular, or Vue.js, to build this project.</p>`,ms={title:"Flash Cards",description:"Create a flash card app using JavaScript frameworks.",isNew:!0,sort:20,difficulty:"beginner",nature:"Frontend",skills:["HTML","CSS","JavaScript","JavaScript Frameworks"],seo:{title:"Build a Flash Cards App",description:"Create a flash card app using JavaScript frameworks",keywords:["flash cards","frontend project idea","javascript frameworks"]},roadmapIds:["frontend"]},gs="C:/Users/HP/developer-roadmap-master/src/data/projects/flash-cards.md",ys=void 0;o((t,a,n)=>{const{layout:s,...e}=ms;return e.file=gs,e.url=ys,l`${i()}${r(hs())}`});const fs=()=>`<p>The goal of this project is to help you learn the notion of continuous integration and continuous deployment. You will write a simple GitHub Actions workflow to deploy a static website to GitHub Pages.</p>
<h2 id="requirements">Requirements</h2>
<p>You are required to write a GitHub action that deploys any changes made to the <code>index.html</code> file to GitHub Pages. It should only deploy the file when the <code>index.html</code> file is changed.</p>
<p>Here are the steps to get you started:</p>
<ul>
<li>Create a GitHub repository for the project called <code>gh-deployment-workflow</code> for example.</li>
<li>Repository should contain a simple <code>index.html</code> file saying “Hello, GitHub Actions!”</li>
<li>It should also have a <code>README.md</code> file explaining the project.</li>
<li>There should also be a <code>deploy.yml</code> file in the <code>.github/workflows</code> directory which contains the GitHub Actions workflow to deploy the website to GitHub Pages.</li>
<li>Every push to the <code>main</code> branch that changes the <code>index.html</code> file should trigger the workflow to run and deploy the website to <a href="https://docs.github.com/en/pages" rel="noopener noreferrer nofollow" target="_blank">GitHub Pages</a>.</li>
<li>Website and any changes you make should be accessible at the GitHub pages URL for the repository e.g. <code>https://&#x3C;username>.github.io/gh-deployment-workflow/</code>.</li>
</ul>
<p>Stretch goal: You can also make this project more practical e.g. use some sort of a static site generator such as <a href="https://gohugo.io/" rel="noopener noreferrer nofollow" target="_blank">Hugo</a>, <a href="https://jekyllrb.com/" rel="noopener noreferrer nofollow" target="_blank">Jekyll</a>, <a href="https://astro.build/" rel="noopener noreferrer nofollow" target="_blank">Astro</a> or similar generator to create a more complex website e.g. your own personal portfolio.</p>
<hr>
<p>After finishing this project, you will have a good understanding of the following concepts:</p>
<ul>
<li>GitHub Actions</li>
<li>GitHub Pages</li>
<li>Continuous Integration and Continuous Deployment</li>
<li>Writing GitHub Actions workflows</li>
</ul>
<p>Continue solving more projects for advanced CI/CD concepts.</p>`,bs={title:"GitHub Pages Deployment",description:"Write a simple GitHub Actions workflow to deploy a static website to GitHub Pages.",isNew:!0,sort:400,difficulty:"beginner",nature:"CI / CD",skills:["github actions","ci/cd"],seo:{title:"GitHub Actions Deployment Workflow",description:"Write a simple GitHub Actions workflow to deploy a static website to GitHub Pages.",keywords:["GitHub Actions Deployment Workflow","devops project idea"]},roadmapIds:["devops"]},Fs="C:/Users/HP/developer-roadmap-master/src/data/projects/github-actions-deployment-workflow.md",ws=void 0;o((t,a,n)=>{const{layout:s,...e}=bs;return e.file=Fs,e.url=ws,l`${i()}${r(fs())}`});const vs=()=>`<p>This project is designed to introduce you to working with external APIs, handling asynchronous requests, and managing different UI states with JavaScript.</p>
<p>You will create a GitHub repository finder that allows users to select a programming language from a dropdown menu. The app will then use the GitHub Repository Search API to fetch and display a random repository that matches the selected language. The displayed information should include the repository name, description, number of stars, forks, and open issues. Users can fetch another random repository with a button click.</p>
<p><a href="https://assets.roadmap.sh/guest/github-repo-finder-n2qz4.png" rel="noopener noreferrer nofollow" target="_blank"><img src="https://assets.roadmap.sh/guest/github-repo-finder-n2qz4.png" alt="GitHub Random Repository"></a></p>
<p>The application should handle loading, empty, and error states effectively. After successfully fetching a repository, a “Refresh” button should appear to allow users to get another random repository.</p>
<p>Here are the links to the resources you will need for this project:</p>
<ul>
<li><a href="https://docs.github.com/en/rest/reference/search#search-repositories" rel="noopener noreferrer nofollow" target="_blank">GitHub Repository Search API</a></li>
<li><a href="https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json" rel="noopener noreferrer nofollow" target="_blank">Programming Language Data</a></li>
</ul>
<p>This project will help you practice API integration, managing asynchronous data, and enhancing user experience with responsive UI states.</p>`,ks={title:"GitHub Random Repository",description:"Create a GitHub random repository finder using GitHub API.",isNew:!1,sort:25,difficulty:"intermediate",nature:"API Integration",skills:["HTML","CSS","JavaScript","API Integration","DOM Manipulation"],seo:{title:"Build a GitHub Repository Finder with JavaScript and GitHub API",description:"Learn how to create a dynamic application that fetches random GitHub repositories based on a chosen language and displays key information like stars, forks, and issues.",keywords:["github api","repository finder","javascript project"]},roadmapIds:["frontend"]},Cs="C:/Users/HP/developer-roadmap-master/src/data/projects/github-random-repo.md",As=void 0;o((t,a,n)=>{const{layout:s,...e}=ks;return e.file=Cs,e.url=As,l`${i()}${r(vs())}`});const Es=()=>`<p>In this project, you will build a simple command line interface (CLI) to fetch the recent activity of a GitHub user and display it in the terminal. This project will help you practice your programming skills, including working with APIs, handling JSON data, and building a simple CLI application.</p>
<h2 id="requirements">Requirements</h2>
<p>The application should run from the command line, accept the GitHub username as an argument, fetch the user’s recent activity using the GitHub API, and display it in the terminal. The user should be able to:</p>
<ul>
<li>Provide the GitHub username as an argument when running the CLI.
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#50FA7B">github-activity</span><span style="color:#FF79C6"> &#x3C;</span><span style="color:#F1FA8C">usernam</span><span style="color:#F8F8F2">e</span><span style="color:#FF79C6">></span></span></code></pre>
</li>
<li>Fetch the recent activity of the specified GitHub user using the GitHub API. You can use the following endpoint to fetch the user’s activity:
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span># https://api.github.com/users/&#x3C;username>/events</span></span>
<span class="line"><span># Example: https://api.github.com/users/kamranahmedse/events</span></span></code></pre>
</li>
<li>Display the fetched activity in the terminal.
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>Output:</span></span>
<span class="line"><span>- Pushed 3 commits to kamranahmedse/developer-roadmap</span></span>
<span class="line"><span>- Opened a new issue in kamranahmedse/developer-roadmap</span></span>
<span class="line"><span>- Starred kamranahmedse/developer-roadmap</span></span>
<span class="line"><span>- ...</span></span></code></pre>
You can <a href="https://docs.github.com/en/rest/activity/events?apiVersion=2022-11-28" rel="noopener noreferrer nofollow" target="_blank">learn more about the GitHub API here</a>.</li>
<li>Handle errors gracefully, such as invalid usernames or API failures.</li>
<li>Use a programming language of your choice to build this project.</li>
<li>Do not use any external libraries or frameworks to fetch the GitHub activity.</li>
</ul>
<hr>
<p>If you are looking to build a more advanced version of this project, you can consider adding features like filtering the activity by event type, displaying the activity in a more structured format, or caching the fetched data to improve performance. You can also explore other endpoints of the GitHub API to fetch additional information about the user or their repositories.</p>`,Ss={title:"GitHub User Activity",description:"Use GitHub API to fetch user activity and display it in the terminal.",isNew:!1,sort:200,difficulty:"beginner",nature:"CLI",skills:["Programming Language","CLI","API Consumption"],seo:{title:"GitHub User Activity CLI",description:"Build a command line interface (CLI) to fetch and display GitHub user activity.",keywords:["github user activity cli","backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot","cpp"]},Ts="C:/Users/HP/developer-roadmap-master/src/data/projects/github-user-activity.md",xs=void 0;o((t,a,n)=>{const{layout:s,...e}=Ss;return e.file=Ts,e.url=xs,l`${i()}${r(Es())}`});const js=()=>`<p>The goal of this project is to introduce you to the basics of IaC using Terraform. You will create a DigitalOcean Droplet and configure it using Terraform.</p>
<h2 id="requirements">Requirements</h2>
<p>If you have been doing the previous projects, you should already have a Linux server running. If not, setup a Linux server on <a href="https://m.do.co/c/b29aa8845df8" rel="noopener noreferrer nofollow" target="_blank">DigitalOcean</a>, AWS or another cloud provider.</p>
<p>You are required to write a Terraform script that will create a Droplet on DigitalOcean. The Droplet should have a public IP address, and SSH access. You should also be able to SSH into the Droplet using the private key.</p>
<p>You can use <a href="https://www.digitalocean.com/community/tutorials/how-to-use-terraform-with-digitalocean" rel="noopener noreferrer nofollow" target="_blank">this guide from Digital Ocean</a> and <a href="https://registry.terraform.io/providers/digitalocean/digitalocean/latest/docs" rel="noopener noreferrer nofollow" target="_blank">Digital Ocean provider documentation</a> to get started.</p>
<h2 id="stretch-goal">Stretch goal</h2>
<p>Write Ansible playbook that will configure the server. You can use the same playbook from <a href="/projects/configuration-management">the previous project</a>.</p>
<hr>
<p>Once you are done with the project, you should have a good understanding of setting up a basic infrastructure on DigitalOcean using Terraform and configuring it using Ansible.</p>`,Is={title:"IaC on DigitalOcean",description:"Write Terraform code to create a Droplet on DigitalOcean",isNew:!1,sort:1200,difficulty:"intermediate",nature:"Terraform",skills:["terraform","linux","devops"],seo:{title:"IaC on DigitalOcean",description:"Write Terraform code to create a Droplet on DigitalOcean",keywords:["IaC","Terraform","DigitalOcean"]},roadmapIds:["devops"]},Bs="C:/Users/HP/developer-roadmap-master/src/data/projects/iac-digitalocean.md",Ps=void 0;o((t,a,n)=>{const{layout:s,...e}=Is;return e.file=Bs,e.url=Ps,l`${i()}${r(js())}`});const Ds=()=>`<p>In this project, you are required to create a grid layout using HTML and CSS. You will be provided with six images that need to be arranged in a grid pattern based on the provided mockup. The primary focus of this project is to help you learn and practice the CSS Grid layout technique, which is essential for creating responsive and flexible web layouts.</p>
<p>The goal of this project is to give you hands-on experience with CSS Grid, allowing you to create complex layouts with ease. Below is a rough mockup showing the grid layout you need to create along with the six images that you should use.</p>
<p><a href="https://assets.roadmap.sh/guest/image-grid.jpg" rel="noopener noreferrer nofollow" target="_blank"><img src="https://assets.roadmap.sh/guest/image-grid.jpg" alt="Grid Layout Mockup"></a></p>
<p>You can use the same images provided in the mockup or replace them with your own images. The grid layout should be responsive, meaning it should adapt to different screen sizes and maintain a visually appealing design.</p>
<ul>
<li><a href="https://unsplash.com/photos/a-foggy-beach-with-a-large-rock-formation-in-the-foreground-TTExgxV06KA" rel="noopener noreferrer nofollow" target="_blank">A foggy beach with a large rock formation in the foreground</a></li>
<li><a href="https://unsplash.com/photos/a-living-room-with-a-white-couch-and-a-round-window-Wuu6H3mI7UA" rel="noopener noreferrer nofollow" target="_blank">A living room with a white couch and a round window</a></li>
<li><a href="https://unsplash.com/photos/a-table-topped-with-plates-and-bowls-of-food-zx8_8jwZ5m8" rel="noopener noreferrer nofollow" target="_blank">A table topped with plates and bowls of food</a></li>
<li><a href="https://unsplash.com/photos/a-building-with-a-red-door-and-a-tree-in-front-of-it-uTd-kylh7bE" rel="noopener noreferrer nofollow" target="_blank">A building with a red door and a tree in front of it</a></li>
<li><a href="https://unsplash.com/photos/a-row-of-white-apartment-buildings-next-to-a-street-f1PzRPbqt0M" rel="noopener noreferrer nofollow" target="_blank">A row of white apartment buildings next to a street</a></li>
<li><a href="https://unsplash.com/photos/a-view-of-a-beach-from-the-top-of-a-hill-SAyIShcE5rs" rel="noopener noreferrer nofollow" target="_blank">A view of a beach from the top of a hill</a></li>
</ul>
<p>Key learning objectives of this project include:</p>
<ul>
<li>
<p><strong>Grid Structure</strong>: Understand the fundamentals of CSS Grid, including defining grid containers, rows, columns, and how to place items within the grid.</p>
</li>
<li>
<p><strong>Responsive Design</strong>: Learn how to make the grid layout responsive so that it adapts to different screen sizes. This might involve changing the number of columns or the layout of the images based on the viewport width.</p>
</li>
<li>
<p><strong>Alignment and Spacing</strong>: Explore how to align grid items and manage spacing between them to achieve a clean and visually appealing layout.</p>
</li>
</ul>
<hr>
<p>By completing this project, you will gain confidence in using CSS Grid to create flexible and responsive layouts. You can further apply these skills to more complex projects as you continue learning web design and development.</p>`,$s={title:"Image Grid Layout",description:"Create a grid layout of images using HTML and CSS.",isNew:!1,sort:8,difficulty:"beginner",nature:"CSS",skills:["HTML","CSS","Grid Layout","Responsive Design"],seo:{title:"Create an Image Grid Layout for a Website Using HTML and CSS",description:"Learn how to create a responsive grid layout of images using HTML and CSS.",keywords:["css grid","image layout","responsive design","html and css"]},roadmapIds:["frontend"]},Ls="C:/Users/HP/developer-roadmap-master/src/data/projects/image-grid.md",Hs=void 0;o((t,a,n)=>{const{layout:s,...e}=$s;return e.file=Ls,e.url=Hs,l`${i()}${r(Ds())}`});const Us=()=>`<p>This project involves creating a backend system for an image processing service similar to Cloudinary. The service will allow users to upload images, perform various transformations, and retrieve images in different formats. The system will feature user authentication, image upload, transformation operations, and efficient retrieval mechanisms.</p>
<h2 id="requirements">Requirements</h2>
<p>Here is the list of features that you should implement in this project:</p>
<h3 id="user-authentication">User Authentication</h3>
<ul>
<li><strong>Sign-Up</strong>: Allow users to create an account.</li>
<li><strong>Log-In</strong>: Allow users to log into their account.</li>
<li><strong>JWT Authentication</strong>: Secure endpoints using JWTs for authenticated access.</li>
</ul>
<h3 id="image-management">Image Management</h3>
<ul>
<li><strong>Upload Image</strong>: Allow users to upload images.</li>
<li><strong>Transform Image</strong>: Allow users to perform various transformations (resize, crop, rotate, watermark etc.).</li>
<li><strong>Retrieve Image</strong>: Allow users to retrieve a saved image in different formats.</li>
<li><strong>List Images</strong>: List all uploaded images by the user with metadata.</li>
</ul>
<h3 id="image-transformation">Image Transformation</h3>
<p>Here is the list of transformations that you can implement:</p>
<ul>
<li>Resize</li>
<li>Crop</li>
<li>Rotate</li>
<li>Watermark</li>
<li>Flip</li>
<li>Mirror</li>
<li>Compress</li>
<li>Change format (JPEG, PNG, etc.)</li>
<li>Apply filters (grayscale, sepia, etc.)</li>
</ul>
<p>Feel free to add more transformations based on your interest and expertise.</p>
<h2 id="how-to-implement">How to Implement</h2>
<p>Here is the list of endpoints that you can implement for this project:</p>
<h3 id="authentication-endpoints">Authentication Endpoints</h3>
<p>Register a new user:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>POST /register</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  "username": "user1",</span></span>
<span class="line"><span>  "password": "password123"</span></span>
<span class="line"><span>}</span></span></code></pre>
<p>Response should be the user object with a JWT.</p>
<p>Log in an existing user:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>POST /login</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  "username": "user1",</span></span>
<span class="line"><span>  "password": "password123"</span></span>
<span class="line"><span>}</span></span></code></pre>
<p>Response should be the user object with a JWT.</p>
<h3 id="image-management-endpoints">Image Management Endpoints</h3>
<h4 id="upload-an-image">Upload an image:</h4>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>POST /images</span></span>
<span class="line"><span>Request Body: Multipart form-data with image file</span></span>
<span class="line"><span>Response: Uploaded image details (URL, metadata).</span></span></code></pre>
<h4 id="apply-transformations-to-an-image">Apply transformations to an image:</h4>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>POST /images/:id/transform</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  "transformations": {</span></span>
<span class="line"><span>    "resize": {</span></span>
<span class="line"><span>      "width": "number",</span></span>
<span class="line"><span>      "height": "number"</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    "crop": {</span></span>
<span class="line"><span>      "width": "number",</span></span>
<span class="line"><span>      "height": "number",</span></span>
<span class="line"><span>      "x": "number",</span></span>
<span class="line"><span>      "y": "number"</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    "rotate": "number",</span></span>
<span class="line"><span>    "format": "string",</span></span>
<span class="line"><span>    "filters": {</span></span>
<span class="line"><span>      "grayscale": "boolean",</span></span>
<span class="line"><span>      "sepia": "boolean"</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre>
<p>User can apply one or more transformations to the image. Response should be the transformed image details (URL, metadata).</p>
<h4 id="retrieve-an-image">Retrieve an image:</h4>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>GET /images/:id</span></span></code></pre>
<p>Response should be the image actual image detail.</p>
<h4 id="get-a-paginated-list-of-images">Get a paginated list of images:</h4>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>GET /images?page=1&#x26;limit=10</span></span></code></pre>
<h2 id="tips">Tips</h2>
<ul>
<li>Use a cloud storage service like AWS S3, Cloudflare R2, or Google Cloud Storage to store images.</li>
<li>Use some image processing libraries to apply transformations.</li>
<li>Put a rate limit on image transformations to prevent abuse.</li>
<li>Consider caching transformed images to improve performance.</li>
<li>Implement error handling and validation for all endpoints.</li>
<li>Optionally use a message queue like RabbitMQ or Kafka to process image transformations asynchronously.</li>
</ul>
<hr>
<p>This project will help you understand how to build a scalable image processing service with user authentication and image transformation capabilities. You can use this project to showcase your backend development skills and learn about image processing techniques.</p>`,qs={title:"Image Processing Service",description:"Build a service that allows users to upload and process images.",isNew:!1,sort:1800,difficulty:"intermediate",nature:"API",skills:["Programming Language","Image Processing","Database","Queues"],seo:{title:"Image Processing Service Project Idea",description:"Build a service that allows users to upload and process images.",keywords:["image processing service","backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot"]},Ms="C:/Users/HP/developer-roadmap-master/src/data/projects/image-processing-service.md",Rs=void 0;o((t,a,n)=>{const{layout:s,...e}=qs;return e.file=Ms,e.url=Rs,l`${i()}${r(Us())}`});const Ns=()=>`<p>In this project, you will build a tool to archive logs on a set schedule by compressing them and storing them in a new directory, this is especially useful for removing old logs and keeping the system clean while maintaining the logs in a compressed format for future reference. This project will help you practice your programming skills, including working with files and directories, and building a simple cli tool.</p>
<p>The most common location for logs on a unix based system is <code>/var/log</code>.</p>
<h2 id="requirements">Requirements</h2>
<p>The tool should run from the command line, accept the log directory as an argument, compress the logs, and store them in a new directory. The user should be able to:</p>
<ul>
<li>Provide the log directory as an argument when running the tool.
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#50FA7B">log-archive</span><span style="color:#FF79C6"> &#x3C;</span><span style="color:#F1FA8C">log-director</span><span style="color:#F8F8F2">y</span><span style="color:#FF79C6">></span></span></code></pre>
</li>
<li>The tool should compress the logs in a tar.gz file and store them in a new directory.</li>
<li>The tool should log the date and time of the archive to a file.
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#50FA7B">logs_archive_20240816_100648.tar.gz</span></span></code></pre>
</li>
</ul>
<p>You can learn more about the <code>tar</code> command <a href="https://www.gnu.org/software/tar/manual/tar.html" rel="noopener noreferrer nofollow" target="_blank">here</a>.</p>
<hr>
<p>If you are looking to build a more advanced version of this project, you can consider adding functionality to the tool like emailing the user updates on the archive, or sending the archive to a remote server or cloud storage.</p>`,Gs={title:"Log Archive Tool",description:"Build a tool to archive logs from the CLI with the date and time.",isNew:!1,sort:200,difficulty:"beginner",nature:"CLI",skills:["linux","bash","shell scripting"],seo:{title:"Log Archive Tool",description:"Build a tool to archive logs from the CLI with the date and time.",keywords:["log archive tool","devops project idea"]},roadmapIds:["devops","linux"]},Ys="C:/Users/HP/developer-roadmap-master/src/data/projects/log-archive-tool.md",_s=void 0;o((t,a,n)=>{const{layout:s,...e}=Gs;return e.file=Ys,e.url=_s,l`${i()}${r(Ns())}`});const Os=()=>`<p>You are required to build a simple note-taking app that lets users upload markdown files, check the grammar, save the note, and render it in HTML. The goal of this project is to help you learn how to handle file uploads in a RESTful API, parse and render markdown files using libraries, and check the grammar of the notes.</p>
<p><img src="https://assets.roadmap.sh/guest/markdown-note-taking-app-tymi3.png" alt="Markdown Note-taking App"></p>
<h2 id="features">Features</h2>
<p>You have to implement the following features:</p>
<ul>
<li>You’ll provide an endpoint to check the grammar of the note.</li>
<li>You’ll also provide an endpoint to save the note that can be passed in as Markdown text.</li>
<li>Provide an endpoint to list the saved notes (i.e. uploaded markdown files).</li>
<li>Return the HTML version of the Markdown note (rendered note) through another endpoint.</li>
</ul>
<h2 id="tips-to-get-started">Tips to Get Started</h2>
<p>Feel free to use any programming language and framework of your choice. Use the package manager of the chosen language to install the required libraries for parsing and rendering markdown files.</p>`,Ws={title:"Markdown Note-taking App",description:"Build a note-taking app that uses markdown for formatting.",isNew:!1,sort:1300,difficulty:"intermediate",nature:"API",skills:["Programming Language","Text Processing","Markdown libraries","File Uploads"],seo:{title:"Markdown Note-taking App Project Idea",description:"Build a note-taking app that uses markdown for formatting.",keywords:["backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot"]},Js="C:/Users/HP/developer-roadmap-master/src/data/projects/markdown-note-taking-app.md",zs=void 0;o((t,a,n)=>{const{layout:s,...e}=Ws;return e.file=Js,e.url=zs,l`${i()}${r(Os())}`});const Vs=()=>`<p>The goal of this project is to implement a comprehensive monitoring system for your server infrastructure using Prometheus for metric collection and Grafana for visualization. This setup will provide real-time insights into your server’s performance, resource utilization, and overall health.</p>
<h2 id="requirements">Requirements</h2>
<p>To begin this project, you’ll need:</p>
<ul>
<li>A running server to monitor. You can use an existing server from a previous project or setup a new server on <a href="https://m.do.co/c/b29aa8845df8" rel="noopener noreferrer nofollow" target="_blank">Digital Ocean</a> or another cloud provider</li>
<li>An application running on the server using some dependencies e.g., Nginx, Node.js, or others.</li>
</ul>
<p>Once your server is operational, you’ll proceed with setting up Prometheus and Grafana.</p>
<h3 id="prometheus-setup">Prometheus Setup</h3>
<p>Prometheus is a powerful, open-source monitoring and alerting toolkit. Follow these steps to set it up:</p>
<ul>
<li>Install Prometheus on your server</li>
<li>Configure prometheus for scarping intervals, endpoints and retention policies</li>
<li>Install and configure exporters for System metrics (CPU, memory, disk, network). Also setup additional exporters for services like Nginx, MySQL, MongoDB, etc.</li>
<li>Implement custom exporters or instrumentation for application-specific metrics</li>
</ul>
<p>Prometheus offers extensive data collection capabilities and a flexible query language (PromQL) for data analysis.</p>
<h3 id="grafana-configuration">Grafana Configuration</h3>
<p>Grafana provides customizable dashboards for your metrics. You can setup a dashboard for system metrics and another for application metrics. Follow these steps:</p>
<ul>
<li>Install Grafana on your server</li>
<li>Connect Grafana to Prometheus as a data source</li>
<li>Create dashboards for various metrics:
<ul>
<li>System overview (CPU, memory, disk, network)</li>
<li>Application-specific metrics</li>
<li>Custom panels using PromQL queries</li>
</ul>
</li>
<li>Set up user authentication and authorization for your Grafana instance</li>
</ul>
<h3 id="advanced-goals">Advanced Goals</h3>
<p>For those looking to expand their skills and create a more robust monitoring system, consider implementing these advanced features:</p>
<ul>
<li>Set up alerting rules in Prometheus and configure notification channels in Grafana (e.g., email, Slack)</li>
<li>Implement Prometheus recording rules to optimize query performance</li>
<li>Use Prometheus service discovery for automatic monitoring of dynamic environments</li>
<li>Integrate log aggregation using Loki and correlate logs with metrics in Grafana</li>
<li>Create a custom exporter for a specific application or service you’re running</li>
</ul>
<hr>
<p>This project will provide you with hands-on experience in setting up a production-grade monitoring system. You’ll gain valuable skills in metric collection, data visualization, and system observability, which are crucial for maintaining reliable and performant infrastructure.</p>`,Qs={title:"Prometheus and Grafana",description:"Setup monitoring using Prometheus and visualize metrics in Grafana.",isNew:!1,sort:1800,difficulty:"advanced",nature:"Monitoring",skills:["bash","devops","monitoring"],seo:{title:"Monitoring with Prometheus and Grafana",description:"Setup monitoring using Prometheus and visualize metrics in Grafana.",keywords:["Prometheus","Grafana","Monitoring","Server Metrics"]},roadmapIds:["devops"]},Zs="C:/Users/HP/developer-roadmap-master/src/data/projects/monitoring.md",Ks=void 0;o((t,a,n)=>{const{layout:s,...e}=Qs;return e.file=Zs,e.url=Ks,l`${i()}${r(Vs())}`});const Xs=()=>`<p>You are required to build backend system for a movie reservation service. The service will allow users to sign up, log in, browse movies, reserve seats for specific showtimes, and manage their reservations. The system will feature user authentication, movie and showtime management, seat reservation functionality, and reporting on reservations.</p>
<h2 id="goal">Goal</h2>
<p>The goal of this project is to help you understand how to implement complex business logic i.e. seat reservation and scheduling, thinking about the data model and relationships, and complex queries.</p>
<h2 id="requirements">Requirements</h2>
<p>We have intentionally left out the implementation details to encourage you to think about the design and implementation of the system. However here are some requirements that you can consider:</p>
<h3 id="user-authentication-and-authorization">User Authentication and Authorization</h3>
<ul>
<li>Users should be able to sign up and log in.</li>
<li>You also need roles for users, such as admin and regular user. Admins should be able to manage movies and showtimes.</li>
<li>Regular users should be able to reserve seats for a showtime.</li>
</ul>
<blockquote>
<p>You can create the initial admin using seed data. Only admins should be able to promote other users to admin and be able to do things related to movie management, reporting, etc.</p>
</blockquote>
<h3 id="movie-management">Movie Management</h3>
<ul>
<li>Admins should be able to add, update, and delete movies.</li>
<li>Each movie should have a title, description, and poster image.</li>
<li>Movies should be categorized by genre.</li>
<li>Movies should have showtimes.</li>
</ul>
<h3 id="reservation-management">Reservation Management</h3>
<ul>
<li>Users should be able to get the movies and their show times for a specific date.</li>
<li>Users should be able to reserve seats for a showtime, see the available seats, and select the seats they want.</li>
<li>Users should be able to see their reservations and cancel them (only upcoming ones).</li>
<li>Admins should be able to see all reservations, capacity, and revenue.</li>
</ul>
<h2 id="implementation-considerations">Implementation Considerations</h2>
<ul>
<li>Think about the data model and relationships between entities.</li>
<li>Think about how you will avoid overbooking, and how you will handle seat reservations.</li>
<li>Think about how you will handle the scheduling of showtimes.</li>
<li>Think about how you will handle the reporting of reservations.</li>
<li>Think about how you will handle the authentication and authorization of users.</li>
</ul>
<hr>
<p>This project is quite complex and will require you to think about the design and implementation of the system. You can use any programming language and database of your choice. I would recommend using a relational database such as MySQL or PostgreSQL. Once you have finished this project, you will have a good understanding of how to implement complex business logic, think about the data model and relationships, and complex queries. You can also extend this project by adding more features such as payment processing, email notifications, etc.</p>`,en={title:"Movie Reservation System",description:"Build a system that allows users to reserve movie tickets.",isNew:!1,sort:1900,difficulty:"advanced",nature:"API",skills:["Programming Language","Database","Scheduling","Authentication"],seo:{title:"Movie Reservation System Project Idea",description:"Build a system that allows users to reserve movie tickets.",keywords:["movie reservation system","backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot"]},sn="C:/Users/HP/developer-roadmap-master/src/data/projects/movie-reservation-system.md",nn=void 0;o((t,a,n)=>{const{layout:s,...e}=en;return e.file=sn,e.url=nn,l`${i()}${r(Xs())}`});const tn=()=>`<p>The goal of this project is to practice using Docker Compose to run a multi-container application in production. You will use Docker Compose to run a Node.js application and a MongoDB database.</p>
<h2 id="requirements">Requirements</h2>
<p>Create a simple unauthenticated Node.js API service for creating a simple todo list. The API should have the following endpoints:</p>
<ul>
<li><code>GET /todos</code> — get all todos</li>
<li><code>POST /todos</code> — create a new todo</li>
<li><code>GET /todos/:id</code> — get a single todo by id</li>
<li><code>PUT /todos/:id</code> — update a single todo by id</li>
<li><code>DELETE /todos/:id</code> — delete a single todo by id</li>
</ul>
<p>The API should connect to MongoDB to store the todo items. You can use <a href="https://expressjs.com/" rel="noopener noreferrer nofollow" target="_blank">Express</a> for the API and <a href="https://mongoosejs.com/" rel="noopener noreferrer nofollow" target="_blank">Mongoose</a> to connect to MongoDB. You can use <code>nodemon</code> to automatically restart the server when the source code changes.</p>
<h3 id="requirement-1---dockerize-the-api">Requirement #1 - Dockerize the API</h3>
<p>You are required to dockerize the API and have a <code>docker-compose.yml</code> file which will spin up a <a href="https://hub.docker.com/_/mongo" rel="noopener noreferrer nofollow" target="_blank">MongoDB container</a> and the API container. If everything works, you should be able to access the API via <code>http://localhost:3000</code> and the todos should be saved to the MongoDB container. Data should be persisted when the containers are stopped and started.</p>
<h3 id="requirement-2---setup-a-remote-server">Requirement #2 - Setup a remote server</h3>
<p>Setup a remote server on <a href="https://m.do.co/c/b29aa8845df8" rel="noopener noreferrer nofollow" target="_blank">Digital Ocean</a>, AWS or any other cloud provider. You should use terraform to create the server and Ansible to configure it properly i.e. setup docker, docker-compose, pulling the image from Docker Hub and running the containers.</p>
<h3 id="requirement-3---setup-a-cicd-pipeline">Requirement #3 - Setup a CI/CD pipeline</h3>
<p>Once you have everything working locally, push your code to GitHub and setup a CI/CD pipeline to deploy the application to the remote server. You can use <a href="https://github.com/features/actions" rel="noopener noreferrer nofollow" target="_blank">GitHub Actions</a> to setup the pipeline. Make sure to use <code>docker-compose</code> to run the application in the production environment.</p>
<h3 id="bonus---setup-a-reverse-proxy">Bonus - Setup a reverse proxy</h3>
<p>Setup a reverse proxy using Nginx to allow you to access the application via <code>http://your_domain.com</code>. You should use <code>docker-compose</code> to setup the reverse proxy.</p>
<hr>
<p>After completing this project, you will have a good understanding of Docker Compose, multi-container applications, CI/CD pipelines, and more.</p>`,an={title:"Multi-Container Application",description:"Use Docker Compose to run a multi-container application",isNew:!1,sort:1500,difficulty:"intermediate",nature:"Docker Compose",skills:["nodejs","docker","devops"],seo:{title:"Multi-Container Application",description:"Use Docker Compose to run a multi-container application",keywords:["Docker","Docker Compose","Node.js","MongoDB"]},roadmapIds:["devops"]},on="C:/Users/HP/developer-roadmap-master/src/data/projects/multi-container-service.md",rn=void 0;o((t,a,n)=>{const{layout:s,...e}=an;return e.file=on,e.url=rn,l`${i()}${r(tn())}`});const ln=()=>`<p>The goal of this project is to help you practice a more advanced docker setup involving multiple services, volumes, networks, custom base images, multi-stage builds, secrets and more. The project will simulate a real-world scenario with multiple interconnected services, each with its own build requirements and optimizations.</p>
<h2 id="requirements">Requirements</h2>
<p>Create a multi-service application using Docker that consists of the following components:</p>
<ul>
<li><strong>Web Application</strong>: A basic react-based frontend application.</li>
<li><strong>API Service</strong>: A Node.js Express backend API.</li>
<li><strong>Database</strong>: A MongoDB instance for storing application data.</li>
<li><strong>Cache</strong>: A Redis cache for improving performance.</li>
<li><strong>Reverse Proxy</strong>: An Nginx reverse proxy to handle incoming requests.</li>
</ul>
<p>Implement the following Docker features and best practices:</p>
<ul>
<li>Use Docker Compose to define and run the multi-container application.</li>
<li>Create custom base images for the web application and API service.</li>
<li>Implement multi-stage builds for the web application to optimize the final image size.</li>
<li>Set up a Docker network to allow communication between services.</li>
<li>Use Docker volumes for persistent data storage (database and cache).</li>
<li>Implement Docker secrets for sensitive information (e.g., database passwords).</li>
<li>Configure health checks for each service.</li>
<li>Optimize Dockerfiles for each service to reduce image sizes and improve build times.</li>
<li>Implement logging and log rotation for all services.</li>
</ul>
<hr>
<p>By completing this project, you’ll gain hands-on experience with advanced Docker concepts and best practices in a realistic, multi-service environment. This will prepare you for working with complex containerized applications in production scenarios.</p>`,pn={title:"Multi-Service Application",description:"Setup a multi-service optimized docker implementation",isNew:!1,sort:1900,difficulty:"advanced",nature:"Docker",skills:["docker","docker-compose"],seo:{title:"Multi-Service Docker",description:"Setup a multi-service optimized docker implementation",keywords:["Multi-Service Docker","Docker"]},roadmapIds:["devops"]},cn="C:/Users/HP/developer-roadmap-master/src/data/projects/multiservice-docker.md",dn=void 0;o((t,a,n)=>{const{layout:s,...e}=pn;return e.file=cn,e.url=dn,l`${i()}${r(ln())}`});const un=()=>`<p>The goal of this project is to help you practice some basic shell scripting skills. You will write a simple tool to analyze logs from the command line.</p>
<h2 id="requirements">Requirements</h2>
<p>Download the sample nginx access log file from <a href="https://gist.githubusercontent.com/kamranahmedse/e66c3b9ea89a1a030d3b739eeeef22d0/raw/77fb3ac837a73c4f0206e78a236d885590b7ae35/nginx-access.log" rel="noopener noreferrer nofollow" target="_blank">here</a>. The log file contains the following fields:</p>
<ul>
<li>IP address</li>
<li>Date and time</li>
<li>Request method and path</li>
<li>Response status code</li>
<li>Response size</li>
<li>Referrer</li>
<li>User agent</li>
</ul>
<p>You are required to create a shell script that reads the log file and provides the following information:</p>
<ol>
<li>Top 5 IP addresses with the most requests</li>
<li>Top 5 most requested paths</li>
<li>Top 5 response status codes</li>
<li>Top 5 user agents</li>
</ol>
<p>Here is an example of what the output should look like:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="text"><code><span class="line"><span>Top 5 IP addresses with the most requests:</span></span>
<span class="line"><span>45.76.135.253 - 1000 requests</span></span>
<span class="line"><span>142.93.143.8 - 600 requests</span></span>
<span class="line"><span>178.128.94.113 - 50 requests</span></span>
<span class="line"><span>43.224.43.187 - 30 requests</span></span>
<span class="line"><span>178.128.94.113 - 20 requests</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Top 5 most requested paths:</span></span>
<span class="line"><span>/api/v1/users - 1000 requests</span></span>
<span class="line"><span>/api/v1/products - 600 requests</span></span>
<span class="line"><span>/api/v1/orders - 50 requests</span></span>
<span class="line"><span>/api/v1/payments - 30 requests</span></span>
<span class="line"><span>/api/v1/reviews - 20 requests</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Top 5 response status codes:</span></span>
<span class="line"><span>200 - 1000 requests</span></span>
<span class="line"><span>404 - 600 requests</span></span>
<span class="line"><span>500 - 50 requests</span></span>
<span class="line"><span>401 - 30 requests</span></span>
<span class="line"><span>304 - 20 requests</span></span></code></pre>
<p>There are multiple ways to solve this challenge. Do some research on <code>awk</code>, <code>sort</code>, <code>uniq</code>, <code>head</code>, <code>grep</code>, and <code>sed</code> commands. Stretch goal is to come up with multiple solutions for the above problem. For example, instead of using <code>awk</code>, you can use <code>grep</code> and <code>sed</code> to filter and count the requests.</p>`,hn={title:"Nginx Log Analyser",description:"Write a simple tool to analyze logs from the command line.",isNew:!0,sort:300,difficulty:"beginner",nature:"CLI",skills:["linux","bash","shell scripting"],seo:{title:"Nginx Log Analyser",description:"Build a simple CLI tool to analyze logs from the command line.",keywords:["Nginx Log Analyser","devops project idea"]},roadmapIds:["devops"]},mn="C:/Users/HP/developer-roadmap-master/src/data/projects/nginx-log-analyser.md",gn=void 0;o((t,a,n)=>{const{layout:s,...e}=hn;return e.file=mn,e.url=gn,l`${i()}${r(un())}`});const yn=()=>`<p>The goal of this project is to practice setting up a CI/CD pipeline for a Node.js service using GitHub Actions. You will practice using GitHub Actions for deployment (including Secrets and environment variables), Terraform to provision a server, Ansible to configure the server, and SSH to deploy the application.</p>
<h2 id="requirements">Requirements</h2>
<p>If you haven’t completed the previous projects for <a href="/projects/configuration-management">Configuration Management</a> and <a href="/projects/iac-digitalocean">IaC</a>, you should do that first. You will be able to reuse the Ansible and Terraform code from those projects.</p>
<p>You are required to have the following setup:</p>
<ul>
<li>Setup a <a href="/projects/iac-digitalocean">DigitalOcean droplet using Terraform</a></li>
<li>Setup the server using <a href="/projects/configuration-management">Ansible</a> including installing Node.js and <code>npm</code></li>
<li>Create a simple Node.js service that just has a <code>/</code> route which returns <code>Hello, world!</code></li>
<li>Push the codebase to GitHub repository</li>
</ul>
<p>Once you have the above setup, you are required to implement the following:</p>
<h3 id="task-1-manual-ansible-deployment">Task #1: Manual Ansible Deployment</h3>
<ul>
<li>
<p>Setup a role in ansible called <code>app</code> that will connect to the server, clone the repository, install the dependencies, build the application, and start the application.</p>
</li>
<li>
<p>You should be able to run the playbook using the following command and the application should be up and running on port <code>80</code>:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#50FA7B">ansible-playbook</span><span style="color:#F1FA8C"> node_service.yml</span><span style="color:#BD93F9"> --tags</span><span style="color:#F1FA8C"> app</span></span></code></pre>
</li>
<li>
<p>You should be able to access the application using the public IP address of the server.</p>
</li>
</ul>
<h3 id="task-2-automate-deployment-using-github-actions">Task #2: Automate Deployment using GitHub Actions</h3>
<p>Write a GitHub Action workflow that will deploy the application to the server using one of the following methods. You are welcome to try both options, but you are not required to do that. You are also welcome to use any other method to accomplish the same result.</p>
<h4 id="option-1-run-the-playbook-in-github-actions">Option #1: Run the playbook in GitHub Actions</h4>
<p>Use the <code>ansible-playbook</code> command to run the playbook and deploy the application</p>
<h4 id="option-2-use-ssh-to-connect-and-deploy-the-application">Option #2: Use SSH to connect and deploy the application</h4>
<p>Use SSH to connect and deploy the application. Look into <a href="https://linux.die.net/man/1/rsync" rel="noopener noreferrer nofollow" target="_blank">rsync</a> and these GitHub Actions to accomplish this: <a href="https://github.com/webfactory/ssh-agent" rel="noopener noreferrer nofollow" target="_blank">web-factory/ssh-agent</a>, <a href="https://github.com/appleboy/ssh-action" rel="noopener noreferrer nofollow" target="_blank">appleboy/ssh-action</a>.</p>
<hr>
<p>Once you have the application deployed, you should have a good understanding of automating the process of setting up a server and deploying an application to it.</p>`,fn={title:"Node.js Service Deployment",description:"Use GitHub Actions to Deploy a Node.js Service to a remote server",isNew:!1,sort:1300,difficulty:"intermediate",nature:"CI/CD",skills:["nodejs","docker","devops"],seo:{title:"Node.js Service Deployment",description:"Use GitHub Actions to Deploy a Node.js Service to a remote server",keywords:["Node.js","DigitalOcean","Docker"]},roadmapIds:["devops"]},bn="C:/Users/HP/developer-roadmap-master/src/data/projects/nodejs-service-deployment.md",Fn=void 0;o((t,a,n)=>{const{layout:s,...e}=fn;return e.file=bn,e.url=Fn,l`${i()}${r(yn())}`});const wn=()=>`<p>You are required to build a simple number guessing game where the computer randomly selects a number and the user has to guess it. The user will be given a limited number of chances to guess the number. If the user guesses the number correctly, the game will end, and the user will win. Otherwise, the game will continue until the user runs out of chances.</p>
<h2 id="requirements">Requirements</h2>
<p>It is a CLI-based game, so you need to use the command line to interact with the game. The game should work as follows:</p>
<ul>
<li>When the game starts, it should display a welcome message along with the rules of the game.</li>
<li>The computer should randomly select a number between 1 and 100.</li>
<li>User should select the difficulty level (easy, medium, hard) which will determine the number of chances they get to guess the number.</li>
<li>The user should be able to enter their guess.</li>
<li>If the user’s guess is correct, the game should display a congratulatory message along with the number of attempts it took to guess the number.</li>
<li>If the user’s guess is incorrect, the game should display a message indicating whether the number is greater or less than the user’s guess.</li>
<li>The game should end when the user guesses the correct number or runs out of chances.</li>
</ul>
<p>Here is a sample output of the game:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>Welcome to the Number Guessing Game!</span></span>
<span class="line"><span>I'm thinking of a number between 1 and 100.</span></span>
<span class="line"><span>You have 5 chances to guess the correct number.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Please select the difficulty level:</span></span>
<span class="line"><span>1. Easy (10 chances)</span></span>
<span class="line"><span>2. Medium (5 chances)</span></span>
<span class="line"><span>3. Hard (3 chances)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Enter your choice: 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Great! You have selected the Medium difficulty level.</span></span>
<span class="line"><span>Let's start the game!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Enter your guess: 50</span></span>
<span class="line"><span>Incorrect! The number is less than 50.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Enter your guess: 25</span></span>
<span class="line"><span>Incorrect! The number is greater than 25.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Enter your guess: 35</span></span>
<span class="line"><span>Incorrect! The number is less than 35.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Enter your guess: 30</span></span>
<span class="line"><span>Congratulations! You guessed the correct number in 4 attempts.</span></span></code></pre>
<p>To make the game more interesting, you can add the following features:</p>
<ul>
<li>Allow the user to play multiple rounds of the game (i.e., keep playing until the user decides to quit). You can do this by asking the user if they want to play again after each round.</li>
<li>Add a timer to see how long it takes the user to guess the number.</li>
<li>Implement a hint system that provides clues to the user if they are stuck.</li>
<li>Keep track of the user’s high score (i.e., the fewest number of attempts it took to guess the number under a specific difficulty level).</li>
</ul>`,vn={title:"Number Guessing Game",description:"Build a simple number guessing game to test your luck.",isNew:!1,sort:400,difficulty:"beginner",nature:"CLI",skills:["Programming Language","CLI","Logic Building"],seo:{title:"Number Guessing Game Project Idea",description:"Build a simple number guessing game to test your luck.",keywords:["number guessing game","backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot","cpp"]},kn="C:/Users/HP/developer-roadmap-master/src/data/projects/number-guessing-game.md",Cn=void 0;o((t,a,n)=>{const{layout:s,...e}=vn;return e.file=kn,e.url=Cn,l`${i()}${r(wn())}`});const An=()=>`<p>You are required to build a personal blog where you can write and publish articles. The blog will have two sections: a guest section and an admin section.</p>
<p><strong>Guest Section</strong> — A list of pages that can be accessed by anyone:</p>
<ul>
<li><strong>Home Page:</strong> This page will display the list of articles published on the blog.</li>
<li><strong>Article Page:</strong> This page will display the content of the article along with the date of publication.</li>
</ul>
<p><strong>Admin Section</strong> — are the pages that only you can access to publish, edit, or delete articles.</p>
<ul>
<li><strong>Dashboard:</strong> This page will display the list of articles published on the blog along with the option to add a new article, edit an existing article, or delete an article.</li>
<li><strong>Add Article Page:</strong> This page will contain a form to add a new article. The form will have fields like title, content, and date of publication.</li>
<li><strong>Edit Article Page:</strong> This page will contain a form to edit an existing article. The form will have fields like title, content, and date of publication.</li>
</ul>
<p>Here are the mockups to give you an idea of the different pages of the blog.</p>
<p>Pages that anyone can access</p>
<p><img src="https://assets.roadmap.sh/guest/blog-guest-pages.png" alt="Personal Blog"></p>
<p>Pages that only the admin can access</p>
<p><img src="https://assets.roadmap.sh/guest/blog-admin-pages.png" alt="Personal Blog"></p>
<h2 id="how-to-implement">How to Implement</h2>
<p>Here are some guidelines to help you implement the personal blog:</p>
<h3 id="storage">Storage</h3>
<p>To keep things simple for now, you can use the filesystem to store the articles. Each article will be stored as a separate file in a directory. The file will contain the title, content, and date of publication of the article. You can use JSON or Markdown format to store the articles.</p>
<h3 id="backend">Backend</h3>
<p>You can use any programming language to build the backend of the blog. You don’t have to make it as an API for this project, we have other projects for that. You can have pages that render the HTML directly from the server and forms that submit data to the server.</p>
<h3 id="frontend">Frontend</h3>
<p>For the frontend, you can use HTML and CSS (no need for JavaScript for now). You can use any templating engine to render the articles on the frontend.</p>
<h3 id="authentication">Authentication</h3>
<p>You can implement basic authentication for the admin section. You can either use the <a href="https://youtu.be/mwccHwUn7Gc?t=20" rel="noopener noreferrer nofollow" target="_blank">standard HTTP basic authentication</a> or simply hardcode the username and password in the code for now and create a simple login page that will create a session for the admin.</p>
<hr>
<p>After completing this project, you will have practised templating, filesystem operations, basic authentication, form handling, and rendering HTML pages from the server. You can extend this project further by adding features like comments, categories, tags, search functionality, etc. Make sure to check the other backend projects that go into more advanced topics like databases, APIs, security best practices etc.</p>`,En={title:"Personal Blog",description:"Build a personal blog to write and publish articles on various topics.",isNew:!1,sort:600,difficulty:"beginner",nature:"Web App",skills:["Programming Language","Basic Authentication","Markdown","Filesystem","Libraries"],seo:{title:"Personal Blog Project Idea",description:"Build a personal blog to write and publish articles on various topics. Learn how to create a blog using a programming language and frontend technologies.",keywords:["personal blog project","backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot"]},Sn="C:/Users/HP/developer-roadmap-master/src/data/projects/personal-blog.md",Tn=void 0;o((t,a,n)=>{const{layout:s,...e}=En;return e.file=Sn,e.url=Tn,l`${i()}${r(An())}`});const xn=()=>`<p>The goal of this project is to learn and practice frontend development skills by building a <strong>Pomodoro Timer</strong>, a productivity tool based on the Pomodoro Technique. The Pomodoro Technique is a time management method that uses a timer to break work into intervals (typically 25 minutes) separated by short breaks.</p>
<h2 id="requirements">Requirements</h2>
<p>You will create a Pomodoro Timer web application using the frontend framework of your choice e.g. React, Vue or Angular. Here is the list of requirements for the application:</p>
<ul>
<li>User should be able to start stop and resume a pomodoro timer.</li>
<li>User should be able to configure the default interval configuration; default work session should be 25 minutes, short break should be 5 minutes and longer break after 4 work sessions should be 15 minutes.</li>
<li>Application should display the current session type (e.g., Work, Short Break, Long Break).</li>
<li>It should also track the number of tracked work sessions</li>
<li>Play a sound when a session ends to notify the user.</li>
<li>Ensure the app is accessible and visually appealing on both desktop and mobile devices.</li>
</ul>
<p>You can use any existing pomodoro apps for the UI inspiration e.g.</p>
<ul>
<li><a href="https://time.fyi/pomodoro" rel="noopener noreferrer nofollow" target="_blank">time.fyi - Pomodoro Timer</a></li>
<li><a href="https://pomofocus.io/" rel="noopener noreferrer nofollow" target="_blank">Pomofocus - Pomodoro Tracker</a></li>
</ul>
<h2 id="technical-requirements">Technical Requirements</h2>
<ul>
<li>Use <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> (or a frontend framework/library such as React, Vue, or Angular).</li>
<li>Implement state management for the timer and session tracking.</li>
<li>Use a modular and reusable code structure.</li>
<li>Maintain proper accessibility standards (e.g., keyboard navigation, ARIA labels).</li>
</ul>
<h2 id="feel-free-to-deploy-the-application-on-github-pages-vercel-or-cloudflare-pages">Feel free to deploy the application on <a href="https://pages.github.com/" rel="noopener noreferrer nofollow" target="_blank">GitHub Pages</a>, <a href="https://vercel.com/" rel="noopener noreferrer nofollow" target="_blank">Vercel</a> or <a href="https://pages.cloudflare.com/" rel="noopener noreferrer nofollow" target="_blank">Cloudflare pages</a></h2>
<p>By completing this project, you will enhance your frontend development skills while building a functional and customizable Pomodoro Timer application. This knowledge will prepare you for more advanced projects and improve your ability to create interactive and user-friendly web applications.</p>`,jn={title:"Pomodoro Timer",description:"Create a pomodoro tracker application for productivity",isNew:!0,sort:28,difficulty:"intermediate",nature:"Frameworks",skills:["HTML","CSS","JavaScript","Frameworks"],seo:{title:"Pomodoro Tracker",description:"Create a pomodoro time tracker application for productivity tracking.",keywords:["frontend project","frontend frameworks","javascript","frontend project idea"]},roadmapIds:["frontend"]},In="C:/Users/HP/developer-roadmap-master/src/data/projects/pomodoro-timer.md",Bn=void 0;o((t,a,n)=>{const{layout:s,...e}=jn;return e.file=In,e.url=Bn,l`${i()}${r(xn())}`});const Pn=()=>`<blockquote>
<p>The goal of this project is to teach you how to style a website using CSS. You will take the structure from the <a href="/projects/basic-html-website">previous HTML-only project</a> and apply various CSS techniques to enhance its appearance and responsiveness.</p>
</blockquote>
<p>In this project, you will style the HTML website structure you created previously <a href="/projects/basic-html-website">in a different project</a>. The focus will be on learning how to use CSS to create responsive layouts, apply color and typography, and enhance the overall design of your website.</p>
<p>Rough mockups of the website structure for mobile and desktop devices are given below. Do not worry about the design details i.e. colors backgrounds etc at this stage; we are not looking for a beautiful design, but a well-structured and responsive website. Just focus on making the layout same as the mockup and ensuring it looks good on different screen sizes.</p>
<p><a href="https://assets.roadmap.sh/guest/portfolio-template-xdhki.png" rel="noopener noreferrer nofollow" target="_blank"><img src="https://assets.roadmap.sh/guest/portfolio-template-xdhki.png" alt="Styled HTML Website"></a></p>
<h2 id="submission-requirements">Submission Requirements</h2>
<p>Your submission should include:</p>
<ul>
<li>A fully styled, responsive website with the same structure as the previous project.</li>
<li>Consistent use of a chosen color scheme and typography.</li>
<li>Proper use of CSS techniques like Flexbox, media queries, and the box model.</li>
<li>A responsive navigation bar and well-styled contact form.</li>
</ul>
<h2 id="bonus-points">Bonus Points</h2>
<p>For bonus points, you can:</p>
<ul>
<li>Use <a href="https://fonts.google.com/" rel="noopener noreferrer nofollow" target="_blank">Google Fonts</a> to enhance the typography of your website.</li>
<li>Look into <a href="https://pages.github.com/" rel="noopener noreferrer nofollow" target="_blank">GitHub Pages</a> or <a href="https://pages.cloudflare.com/" rel="noopener noreferrer nofollow" target="_blank">Cloudflare Pages</a> to host your website for free.</li>
<li>Add support for dark mode using CSS variables.</li>
</ul>
<hr>
<p>After completing this project, you will have a solid understanding of how to style a basic HTML website using CSS. You can move on to more advanced topics, such as CSS animations, transitions, and grid layouts, in future projects.</p>`,Dn={title:"Personal Portfolio",description:"Convert the previous simple HTML website into a personal portfolio.",isNew:!1,sort:3,difficulty:"beginner",nature:"CSS",skills:["CSS","Responsive Design","Box Model","Typography","Flexbox"],seo:{title:"Create a Personal Portfolio Website Using HTML and CSS",description:"Learn how to style a website using CSS by converting a simple HTML website into a personal portfolio.",keywords:["basic css","css project idea","responsive design","html and css"]},roadmapIds:["frontend"]},$n="C:/Users/HP/developer-roadmap-master/src/data/projects/portfolio-website.md",Ln=void 0;o((t,a,n)=>{const{layout:s,...e}=Dn;return e.file=$n,e.url=Ln,l`${i()}${r(Pn())}`});const Hn=()=>`<p>In this project, we will be making a browser based quiz. The app will present users with a series of multiple-choice questions and after each question, the app will provide immediate feedback on whether the selected answer is correct or incorrect.</p>
<h2 id="requirements">Requirements</h2>
<p>As a developer, feel free to come up with a JSON based quiz the questions as you see fit.</p>
<ul>
<li>The user will be initially presented with a “start” button and some detail about the quiz</li>
<li>When the user presses start they’re presented with the first multiple choice question.</li>
<li>The questions are to be presented as <code>cards</code> with the answers being buttons on the card.</li>
<li>When the user selects an answer, the answer buttons are to turn red or green depending on the result. It should also show what the correct answer was.</li>
<li>If the user answers correctly, a score is to be incremented.</li>
<li>At the end of the quiz, the user is presented with a final score and all of the results.</li>
<li>Optionally add a timer of 1 minute to each question, if user doesn’t attempt the question in that time, it should skip to next question and score should be decremented by 1.</li>
</ul>
<p>You can use any frontend framework such as React, Vue or Angular and some state management library to handle the state.</p>
<hr>
<p>After finishing this project, you will have a good understanding of managing complex states and building an app of moderate complexity using any frontend framework.</p>`,Un={title:"Quiz App",description:"Build a browser-based quiz application to test any knowledge",isNew:!0,sort:29,difficulty:"intermediate",nature:"Frameworks",skills:["HTML","CSS","JavaScript","Frameworks"],seo:{title:"Quiz App",description:"Build a browser-based quiz application to test any knowledge",keywords:["frontend project","frontend frameworks","javascript","frontend project idea"]},roadmapIds:["frontend"]},qn="C:/Users/HP/developer-roadmap-master/src/data/projects/quiz-app.md",Mn=void 0;o((t,a,n)=>{const{layout:s,...e}=Un;return e.file=qn,e.url=Mn,l`${i()}${r(Hn())}`});const Rn=()=>`<p>This project involves creating a backend system for a real-time leaderboard service. The service will allow users to compete in various games or activities, track their scores, and view their rankings on a leaderboard. The system will feature user authentication, score submission, real-time leaderboard updates, and score history tracking. Redis sorted sets will be used to manage and query the leaderboards efficiently.</p>
<h2 id="project-requirements">Project Requirements</h2>
<p>You are to build an imaginary real-time leaderboard system that ranks users based on their scores in various games or activities. The system should meet the following requirements:</p>
<ol>
<li><strong>User Authentication</strong>: Users should be able to register and log in to the system.</li>
<li><strong>Score Submission</strong>: Users should be able to submit their scores for different games or activities.</li>
<li><strong>Leaderboard Updates</strong>: Display a global leaderboard showing the top users across all games.</li>
<li><strong>User Rankings</strong>: Users should be able to view their rankings on the leaderboard.</li>
<li><strong>Top Players Report:</strong> Generate reports on the top players for a specific period.</li>
</ol>
<h2 id="tip---use-redis-sorted-sets">Tip - Use Redis Sorted Sets</h2>
<ul>
<li><strong>Leaderboard Storage:</strong> Use Redis sorted sets to store and manage leaderboards.</li>
<li><strong>Real-Time Updates:</strong> Utilize Redis sorted sets for efficient real-time updates and queries.</li>
<li><strong>Rank Queries:</strong> Use Redis commands to query user ranks and leaderboard positions.</li>
</ul>
<hr>
<p>After finishing this project, you will have a good understanding of how to create a real-time leaderboard system that updates scores in real-time. You will also gain experience working with Redis sorted sets and implementing user authentication and score submission features.</p>`,Nn={title:"Real-time Leaderboard",description:"Create a real-time leaderboard system for ranking and scoring.",isNew:!1,sort:2e3,difficulty:"advanced",nature:"API",skills:["Programming Language","Database","Scheduling","Authentication"],seo:{title:"Real-time Leaderboard System Idea",description:"Create a real-time leaderboard system that updates scores in real-time.",keywords:["movie reservation system","backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot"]},Gn="C:/Users/HP/developer-roadmap-master/src/data/projects/realtime-leaderboard-system.md",Yn=void 0;o((t,a,n)=>{const{layout:s,...e}=Nn;return e.file=Gn,e.url=Yn,l`${i()}${r(Rn())}`});const _n=()=>`<p>You are required to create a browser-based Reddit client that displays multiple subreddits in separate, customizable lanes. You’ll work with the Reddit JSON feed to fetch posts from different subreddits and display them in a dynamic, responsive layout.</p>
<p>The application will allow users to add new subreddit lanes by entering a subreddit name. It will verify the existence of the subreddit, fetch its posts, and display them in a new lane. Each lane will show the subreddit’s posts, including titles, authors, and vote counts.</p>
<p><a href="https://assets.roadmap.sh/guest/reddit-client-o876k.png" rel="noopener noreferrer nofollow" target="_blank"><img src="https://assets.roadmap.sh/guest/reddit-client-o876k.png" alt="Multi-Lane Reddit Client"></a></p>
<p>To fetch data from reddit, you can use the JSON feed available at the following URL. You can also use the Reddit API to fetch more details about the posts, such as comments, upvotes, and more.</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>https://www.reddit.com/r/{subreddit}.json</span></span></code></pre>
<p>The application should handle loading states while fetching data, display error messages for invalid subreddits or API issues, and provide a smooth user experience when adding or removing lanes. You can use local storage to save the user’s custom lanes and restore them when the application is reloaded.</p>
<p>This project will help you practice API integration, state management, asynchronous programming, and creating a responsive, dynamic user interface. It’s an excellent opportunity to enhance your skills in frontend development and working with real-time data.</p>`,On={title:"Reddit Client",description:"Create a Reddit client with customizable subreddit lanes.",isNew:!1,sort:26,difficulty:"intermediate",nature:"API Integration",skills:["HTML","CSS","JavaScript","API Integration","DOM Manipulation","Asynchronous Programming"],seo:{title:"Build a Multi-Lane Reddit Client with JavaScript and Reddit API",description:"Learn how to create a dynamic browser-based Reddit client that allows users to add and view multiple subreddits in customizable lanes.",keywords:["reddit api","subreddit viewer","javascript project","multi-lane client"]},roadmapIds:["frontend"]},Wn="C:/Users/HP/developer-roadmap-master/src/data/projects/reddit-client.md",Jn=void 0;o((t,a,n)=>{const{layout:s,...e}=On;return e.file=Wn,e.url=Jn,l`${i()}${r(_n())}`});const zn=()=>`<p>You are required to create a textarea that tracks and displays the number of characters typed by the user, along with a maximum character limit. As the user types, the character count will update dynamically. Once the limit is reached, the textarea will prevent further input and the border will turn red to visually indicate the limit has been hit.</p>
<p><a href="https://assets.roadmap.sh/guest/textarea-input-vdclr.png" rel="noopener noreferrer nofollow" target="_blank"><img src="https://assets.roadmap.sh/guest/textarea-input-vdclr.png" alt="Restricted Textarea"></a></p>
<p>This project will help you practice manipulating input elements with JavaScript, handling user input events, and providing real-time feedback to enhance user experience.</p>`,Vn={title:"Restricted Textarea",description:"Create a textarea with live character count and a max character limit.",isNew:!1,sort:15,difficulty:"beginner",nature:"JavaScript",skills:["HTML","CSS","JavaScript","DOM Manipulation"],seo:{title:"Build a Restricted Textarea with JavaScript",description:"Learn how to create a textarea with live character count and a maximum limit, with visual feedback as the limit is reached.",keywords:["character count","textarea limit","javascript input","html and css"]},roadmapIds:["frontend"]},Qn="C:/Users/HP/developer-roadmap-master/src/data/projects/restricted-textarea.md",Zn=void 0;o((t,a,n)=>{const{layout:s,...e}=Vn;return e.file=Qn,e.url=Zn,l`${i()}${r(zn())}`});const Kn=()=>`<p>Build a scalable e-commerce platform using microservices architecture and Docker. The platform will handle various aspects of an online store, such as product catalog management, user authentication, shopping cart, payment processing, and order management. Each of these features will be implemented as separate microservices, allowing for independent development, deployment, and scaling.</p>
<h2 id="core-microservices">Core Microservices:</h2>
<p>Here are the sample core microservices that you can implement for your e-commerce platform:</p>
<ul>
<li><strong>User Service:</strong> Handles user registration, authentication, and profile management.</li>
<li><strong>Product Catalog Service:</strong> Manages product listings, categories, and inventory.</li>
<li><strong>Shopping Cart Service:</strong> Manages users’ shopping carts, including adding/removing items and updating quantities.</li>
<li><strong>Order Service:</strong> Processes orders, including placing orders, tracking order status, and managing order history.</li>
<li><strong>Payment Service:</strong>  Handles payment processing, integrating with external payment gateways (e.g., Stripe, PayPal).</li>
<li><strong>Notification Service:</strong> Sends email and SMS notifications for various events (e.g., order confirmation, shipping updates). You can use third-party services like Twilio or SendGrid for this purpose.</li>
</ul>
<h2 id="additional-components"><strong>Additional Components:</strong></h2>
<p>In addition to the core microservices, you can include the following components to enhance the scalability, reliability, and manageability of your e-commerce platform:</p>
<ul>
<li><strong>API Gateway:</strong> Serves as the entry point for all client requests, routing them to the appropriate microservice. It might be worth looking into Kong, Traefik, or NGINX for this purpose.</li>
<li><strong>Service Discovery:</strong> Automatically detects and manages service instances. You can use Consul or Eureka for service discovery.</li>
<li><strong>Centralized Logging:</strong> Aggregates logs from all microservices for easy monitoring and debugging. You can use the ELK stack (Elasticsearch, Logstash, Kibana) for this purpose.</li>
<li><strong>Docker &#x26; Docker Compose:</strong> Containerize each microservice and manages their orchestration, networking, and scaling. Docker Compose can be used to define and manage multi-container applications.</li>
<li><strong>CI/CD Pipeline:</strong> Automates the build, test, and deployment process of each microservice. You can use Jenkins, GitLab CI, or GitHub Actions for this purpose.</li>
</ul>
<h2 id="steps-to-get-started">Steps to Get Started:</h2>
<p>Here’s a high-level roadmap to guide you through the development of your scalable e-commerce platform:</p>
<ul>
<li><strong>Set up Docker and Docker Compose:</strong> Create Dockerfiles for each microservice. Use Docker Compose to define and manage multi-container applications.</li>
<li><strong>Develop Microservices:</strong> Start with a simple MVP (Minimum Viable Product) for each service, then iterate by adding more features.</li>
<li><strong>Integrate Services:</strong> Use REST APIs or gRPC for communication between microservices. Implement an API Gateway to handle external requests and route them to the appropriate services.</li>
<li><strong>Implement Service Discovery:</strong> Use Consul or Eureka to enable dynamic service discovery.</li>
<li><strong>Set up Monitoring and Logging:</strong> Use tools like Prometheus and Grafana for monitoring. Set up the ELK stack for centralized logging.</li>
<li><strong>Deploy the Platform:</strong> Use Docker Swarm or Kubernetes for production deployment. Implement auto-scaling and load balancing.</li>
<li><strong>CI/CD Integration:</strong> Automate testing and deployment using Jenkins or GitLab CI.</li>
</ul>
<hr>
<p>This project offers a comprehensive approach to building a modern, scalable e-commerce platform and will give you hands-on experience with Docker, microservices, and related technologies. After completing this project, you’ll have a solid understanding of how to design, develop, and deploy complex distributed systems.</p>`,Xn={title:"Scalable E-Commerce Platform",description:"Build an e-commerce platform using microservices architecture.",isNew:!1,sort:2200,difficulty:"advanced",nature:"API",skills:["Microservices","Database","Docker","Authentication"],seo:{title:"Scalable E-Commerce Platform Project Idea",description:"Build a scalable e-commerce platform using microservices architecture and Docker.",keywords:["e-commerce platform","backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot"]},et="C:/Users/HP/developer-roadmap-master/src/data/projects/scalable-ecommerce-platform.md",st=void 0;o((t,a,n)=>{const{layout:s,...e}=Xn;return e.file=et,e.url=st,l`${i()}${r(Kn())}`});const nt=()=>`<p>Goal of this project is to write a script to analyse server performance stats.</p>
<h2 id="requirements">Requirements</h2>
<p>You are required to write a script <code>server-stats.sh</code> that can analyse basic server performance stats. You should be able to run the script on any Linux server and it should give you the following stats:</p>
<ul>
<li>Total CPU usage</li>
<li>Total memory usage (Free vs Used including percentage)</li>
<li>Total disk usage (Free vs Used including percentage)</li>
<li>Top 5 processes by CPU usage</li>
<li>Top 5 processes by memory usage</li>
</ul>
<p>Stretch goal: Feel free to optionally add more stats such as os version, uptime, load average, logged in users, failed login attempts etc.</p>
<hr>
<p>Once you have completed this project, you will have some basic knowledge on how to analyse server performance stats in order to debug and get a better understanding of the server’s performance.</p>`,tt={title:"Server Performance Stats",description:"Write a script to analyse basic server performance stats.",isNew:!0,sort:100,difficulty:"beginner",nature:"CLI",skills:["linux","bash","shell scripting"],seo:{title:"Server Performance Stats",description:"Write a script to analyse server performance stats.",keywords:["Server Stats","Server Performance Stats"]},roadmapIds:["devops"]},at="C:/Users/HP/developer-roadmap-master/src/data/projects/server-stats.md",ot=void 0;o((t,a,n)=>{const{layout:s,...e}=tt;return e.file=at,e.url=ot,l`${i()}${r(nt())}`});const rt=()=>`<p>The goal of this project is to help you understand how service discovery works and how to setup Consul to manage your services. The learning objectives are:</p>
<ul>
<li>Understand how services register with Consul</li>
<li>Learn how to query Consul for service information</li>
<li>Implement a basic service discovery mechanism</li>
<li>Understand service-to-service communication in a microservices architecture</li>
</ul>
<h2 id="requirements">Requirements</h2>
<p>The project has multiple parts:</p>
<h3 id="dummy-services">Dummy Services</h3>
<p>You are required to create 3 dummy services, each service will just have a dummy endpoint (e.g. <code>/info</code>) that returns the current timestamp and the service name (e.g. Service A, Service B and Service C). Services should register themselves with Consul on startup.</p>
<h3 id="api-gateway">API Gateway</h3>
<p>API gateway acts as a single point of entry for the application. It will be responsible for discovering the services using Consul’s DNS interface or the API. The API gateway should be able to route requests to the appropriate service.</p>
<h3 id="consul">Consul</h3>
<p>Consul will be used to store the service information and to provide a single point of contact for the API gateway to discover the services.</p>
<hr>
<p>Once you have completed the project, you should have a basic understanding of how service discovery works and how to setup Consul to manage your services.</p>`,lt={title:"Service Discovery",description:"Setup service discovery with dummy services and Consul",isNew:!1,sort:2e3,difficulty:"advanced",nature:"DevOps",skills:["devops","consul","api-gateway","monitoring"],seo:{title:"Service Discovery",description:"Setup service discovery with dummy services and Consul",keywords:["Service Discovery","DevOps","Consul"]},roadmapIds:["devops"]},it="C:/Users/HP/developer-roadmap-master/src/data/projects/service-discovery.md",pt=void 0;o((t,a,n)=>{const{layout:s,...e}=lt;return e.file=it,e.url=pt,l`${i()}${r(rt())}`});const ct=()=>`<p>The goal of this project is to learn the basics of monitoring. It is to help you understand how to monitor the health of a system and how to set up a basic monitoring dashboard.</p>
<h2 id="requirements">Requirements</h2>
<p>In this project, you will set up a basic monitoring dashboard using <a href="https://github.com/netdata/netdata" rel="noopener noreferrer nofollow" target="_blank">Netdata</a>. Netdata is a powerful, real-time performance and health monitoring tool for systems and applications.</p>
<ul>
<li>Install Netdata on a Linux system.</li>
<li>Configure Netdata to monitor basic system metrics such as CPU, memory usage, and disk I/O.</li>
<li>Access the Netdata dashboard through a web browser.</li>
<li>Customize at least one aspect of the dashboard (e.g., add a new chart or modify an existing one).</li>
<li>Set up an alert for a specific metric (e.g., CPU usage above 80%).</li>
</ul>
<p>You can learn more about installing and configuring Netdata <a href="https://learn.netdata.cloud/docs/agent/packaging/installer" rel="noopener noreferrer nofollow" target="_blank">here</a>.</p>
<p>You can follow the above steps manually to get the understanding of the project. Once you have a working setup, create a few shell scripts to automate the setup and test the monitoring dashboard.</p>
<ul>
<li><code>setup.sh</code>: A shell script to install Netdata on a new system.</li>
<li><code>test_dashboard.sh</code>: Script to put some load on the system and test the monitoring dashboard.</li>
<li><code>cleanup.sh</code>: Script to clean up the system and remove the Netdata agent.</li>
</ul>
<p>The goal with this automation is to slowly get accustomed to DevOps practices and CI/CD pipelines.</p>
<hr>
<p>Once you have finished this project, you will have a basic understanding of how to set up a monitoring dashboard and how to automate the setup and testing processes. We will revisit the topic of monitoring and look at more advanced tools and techniques in later projects.</p>`,dt={title:"Simple Monitoring",description:"Set up a basic monitoring dashboard using Netdata.",isNew:!1,sort:800,difficulty:"beginner",nature:"Monitoring",skills:["monitoring","netdata","linux","devops"],seo:{title:"Simple Monitoring",description:"Learn how to set up a basic monitoring dashboard using Netdata.",keywords:["monitoring dashboard","netdata","system monitoring","devops"]},roadmapIds:["devops"]},ut="C:/Users/HP/developer-roadmap-master/src/data/projects/simple-monitoring-dashboard.md",ht=void 0;o((t,a,n)=>{const{layout:s,...e}=dt;return e.file=ut,e.url=ht,l`${i()}${r(ct())}`});const mt=()=>`<p>This project is designed to introduce you to basic DOM manipulation and event handling in JavaScript.</p>
<p>You are required to create a simple tabs functionality using HTML, CSS, and basic JavaScript. The page will have four tabs, with the first tab being active by default. When the user clicks on another tab, the content of the current tab will be hidden, and the content of the selected tab will be displayed.</p>
<p><a href="https://assets.roadmap.sh/guest/simple-tabs-8e6gy.png" rel="noopener noreferrer nofollow" target="_blank"><img src="https://assets.roadmap.sh/guest/simple-tabs-8e6gy.png" alt="Tabs Component Mockup"></a></p>
<p>This project will help you practice selecting elements with JavaScript, listen for click events, and manipulate the dom to show or hide relevant tab content.</p>`,gt={title:"Tabs",description:"Create a simple tabs component using HTML, CSS, and JavaScript.",isNew:!1,sort:10,difficulty:"beginner",nature:"JavaScript",skills:["HTML","CSS","JavaScript","DOM Manipulation"],seo:{title:"Create a Tabs Functionality Using HTML, CSS, and JavaScript",description:"Learn how to build a tabs component with basic JavaScript for switching between content sections.",keywords:["javascript tabs","dynamic content","html and css","javascript project"]},roadmapIds:["frontend"]},yt="C:/Users/HP/developer-roadmap-master/src/data/projects/simple-tabs.md",ft=void 0;o((t,a,n)=>{const{layout:s,...e}=gt;return e.file=yt,e.url=ft,l`${i()}${r(mt())}`});const bt=()=>`<blockquote>
<p>The goal of this project is to teach you how to create a structured, single-page CV using only HTML. You will focus on laying out your education, skills, and career history in a clean, semantic manner. Styling will be addressed in a later project.</p>
</blockquote>
<p>In this project, you are required to create a single-page CV (Curriculum Vitae) using only HTML. Your webpage should look like the following image:</p>
<p><img src="https://assets.roadmap.sh/guest/resume-template-zyl70.png" alt="Single-Page HTML CV"></p>
<p>Key requirements for this project:</p>
<ul>
<li><strong>Semantic HTML</strong>: Use appropriate HTML tags to structure your CV.</li>
<li><strong>SEO Meta Tags</strong>: Include essential meta tags for SEO.</li>
<li><strong>Open Graph (OG) Tags</strong>: Add OG tags for better social media sharing.</li>
<li><strong>Favicon</strong>: Add a favicon for your CV page.</li>
</ul>
<p>The structure of your CV should be easily understandable and ready for styling in a future project.</p>
<h3 id="submission-checklist">Submission Checklist:</h3>
<ul>
<li>Semantically correct HTML structure.</li>
<li>Single-page layout with sections for education, skills, and career history.</li>
<li>SEO meta tags in the head section.</li>
<li>OG tags for better social media sharing.</li>
<li>A favicon linked in the head section.</li>
</ul>
<hr>
<p>By completing this project, you’ll gain a solid understanding of how to create a single-page CV using HTML, apply basic SEO principles, and prepare your webpage for future styling. This foundation will enable you to move on to styling the CV using CSS in subsequent projects.</p>`,Ft={title:"Single-Page CV",description:"Create a single-page HTML CV to showcase your career history",isNew:!1,sort:1,difficulty:"beginner",nature:"HTML",skills:["HTML","Semantic HTML","Layout","SEO"],seo:{title:"Single-Page HTML CV Project",description:"Create a simple single-page HTML CV that displays your education, skills, and career history.",keywords:["html cv","single-page cv","html resume"]},roadmapIds:["frontend"]},wt="C:/Users/HP/developer-roadmap-master/src/data/projects/single-page-cv.md",vt=void 0;o((t,a,n)=>{const{layout:s,...e}=Ft;return e.file=wt,e.url=vt,l`${i()}${r(bt())}`});const kt=()=>`<p>The goal of this project is to learn and practice the basics of Linux. You are required to setup a remote linux server and configure it to allow SSH connections.</p>
<h2 id="requirements">Requirements</h2>
<p>You are required to setup a remote linux server and configure it to allow SSH connections.</p>
<ul>
<li>Register and setup a remote linux server on any provider e.g. a simple droplet on <a href="https://m.do.co/c/b29aa8845df8" rel="noopener noreferrer nofollow" target="_blank">DigitalOcean</a> which gives you $200 in free credits with the link. Alternatively, use AWS or any other provider.</li>
<li>Create <strong>two new SSH key pairs</strong> and add them to your server.</li>
<li>You should be able to connect to your server using both SSH keys.</li>
</ul>
<p>You should be able to use the following command to connect to your server using both SSH keys.</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#50FA7B">ssh</span><span style="color:#BD93F9"> -i</span><span style="color:#FF79C6"> &#x3C;</span><span style="color:#F1FA8C">path-to-private-ke</span><span style="color:#F8F8F2">y</span><span style="color:#FF79C6">></span><span style="color:#F1FA8C"> user@server-ip</span></span></code></pre>
<p>Also, look into setting up the configuration in <code>~/.ssh/config</code> to allow you to connect to your server using the following command.</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#50FA7B">ssh</span><span style="color:#FF79C6"> &#x3C;</span><span style="color:#F1FA8C">alia</span><span style="color:#F8F8F2">s</span><span style="color:#FF79C6">></span></span></code></pre>
<p>The only outcome of this project is that you should be able to SSH into your server using both SSH keys. Future projects will cover other aspects of server setup and configuration.</p>
<p>Stretch goal: install and configure <code>fail2ban</code> to prevent brute force attacks.</p>
<hr>
<h2 id="important-note-for-solution-submission">Important Note for Solution Submission</h2>
<p><strong>Do not push your private key to any public repository.</strong> The solution to this project should just contain one <code>README.md</code> file with the steps you took to complete the project.</p>
<hr>
<p>After completing this project, you will have a basic understanding of how to setup a remote linux server and configure it to allow SSH connections. Future projects will cover other aspects of server setup.</p>`,Ct={title:"SSH Remote Server Setup",description:"Setup a basic remote linux server and configure it to allow SSH.",isNew:!1,sort:500,difficulty:"beginner",nature:"SSH",skills:["devops","linux"],seo:{title:"SSH Remote Server Setup",description:"Setup a remote linux server and configure it to allow SSH.",keywords:["ssh","linux","server"]},roadmapIds:["devops"]},At="C:/Users/HP/developer-roadmap-master/src/data/projects/ssh-remote-server-setup.md",Et=void 0;o((t,a,n)=>{const{layout:s,...e}=Ct;return e.file=At,e.url=Et,l`${i()}${r(kt())}`});const St=()=>`<p>The goal of this project is to help you understand the basics of setting up a web server using a basic static site served using Nginx. You will also learn how to use <code>rsync</code> to deploy your changes to the server.</p>
<h2 id="requirements">Requirements</h2>
<p>Here are the requirements for this project:</p>
<ul>
<li>Register and setup a remote linux server on any provider e.g. a simple droplet on <a href="https://m.do.co/c/b29aa8845df8" rel="noopener noreferrer nofollow" target="_blank">DigitalOcean</a> which gives you $200 in free credits with the link. Alternatively, use AWS or any other provider.</li>
<li>Make sure that you can connect to your server using SSH.</li>
<li>Install and configure <code>nginx</code> to serve a static site.</li>
<li>Create a simple webpage with basic HTML, CSS and image files.</li>
<li>Use <code>rsync</code> to update a remote server with a local static site.</li>
<li>If you have a domain name, point it to your server and serve your static site from there. Alternatively, set up your nginx server to serve the static site from the server’s IP address.</li>
</ul>
<p>You can write a script <code>deploy.sh</code> which when you run will use <code>rsync</code> to sync your static site to the server.</p>
<hr>
<p>Once you have completed the project, you should have a basic understanding of how to setup a web server using a basic static site served using Nginx. You should also have a basic understanding of how to use <code>rsync</code> to deploy your changes to the server.</p>`,Tt={title:"Static Site Server",description:"Setup a basic linux server and configure it to serve a static site.",isNew:!1,sort:600,difficulty:"beginner",nature:"Nginx",skills:["nginx","SSH","linux","devops","rsync"],seo:{title:"Static Site Server",description:"Setup a basic linux server and configure it to serve a static site.",keywords:["static site server","nginx","SSH","linux","devops","rsync"]},roadmapIds:["devops"]},xt="C:/Users/HP/developer-roadmap-master/src/data/projects/static-site-server.md",jt=void 0;o((t,a,n)=>{const{layout:s,...e}=Tt;return e.file=xt,e.url=jt,l`${i()}${r(St())}`});const It=()=>`<p>You are required to build a “Story” feature similar to those found in popular social media platforms like Instagram and WhatsApp. The goal is to allow a user to post short, ephemeral content that disappears after 24 hours. As this is a Frontend project this is going to be client-side only.</p>
<h2 id="requirements">Requirements</h2>
<p>There will be a list of stories at the top and a plus button. Clicking the plus button will allow user to upload an image which will be converted to base64 and stored in local storage. The image will be displayed in the list of stories. The image will be removed after 24 hours. User should optionally be able to swipe through the stories.</p>
<p><img src="https://assets.roadmap.sh/guest/stories-project.png" alt="Stories project clone"></p>
<h2 id="constraints">Constraints</h2>
<ul>
<li>You can use any frontend framework to build this</li>
<li>Feel free to use any libraries or tools you are comfortable with</li>
<li>The project should be client-side only</li>
<li>The project should be responsive</li>
<li>Image dimensions should be constrained to a maximum of 1080px x 1920px</li>
</ul>
<hr>
<p>After building this project, you will have a better understanding of how to work with client-side storage, timeouts, and how to create a responsive design.</p>`,Bt={title:"24hr Story Feature",description:"Create a client-side instagram stories feature clone.",isNew:!1,sort:32,difficulty:"advanced",nature:"Frameworks",skills:["JavaScript","Storage","Timeouts"],seo:{title:"Build an Instagram Story Clone",description:"Create a client-side instagram stories feature clone.",keywords:["html","css","javascript","instagram story"]},roadmapIds:["frontend"]},Pt="C:/Users/HP/developer-roadmap-master/src/data/projects/stories-feature.md",Dt=void 0;o((t,a,n)=>{const{layout:s,...e}=Bt;return e.file=Pt,e.url=Dt,l`${i()}${r(It())}`});const $t=()=>`<p>You are required to create a task tracker that lets users add new tasks, mark them as complete, or delete them. Completed tasks will be moved to the end of the list and will have strikethrough, and users can unmark tasks to return them to the pending list.</p>
<p>Here is the mockup of the task tracker:</p>
<p><a href="https://assets.roadmap.sh/guest/task-tracker-2diba.png" rel="noopener noreferrer nofollow" target="_blank"><img src="https://assets.roadmap.sh/guest/task-tracker-2diba.png" alt="Task Tracker"></a></p>
<h2 id="hint">Hint</h2>
<p>Store your tasks in an array of objects, where each object represents a task with properties like description and status (completed or not). Whenever a new task is added, updated, deleted, or marked as complete/uncomplete, update the tasks array. Write a function <code>renderTasks</code> which will remove all tasks from the DOM and re-render them based on the updated tasks array.</p>
<p>This project will help you practice array manipulation, event handling, and dynamic DOM updates using JavaScript.</p>`,Lt={title:"Task Tracker",description:"Create a task tracker with a to-do list using JavaScript.",isNew:!1,sort:22,difficulty:"intermediate",nature:"JavaScript",skills:["HTML","CSS","JavaScript","DOM Manipulation"],seo:{title:"Build a Task Tracker with JavaScript",description:"Learn how to create a dynamic task tracker that allows users to add, complete, and delete tasks with real-time updates.",keywords:["task tracker","to-do list","javascript project"]},roadmapIds:["frontend"]},Ht="C:/Users/HP/developer-roadmap-master/src/data/projects/task-tracker-js.md",Ut=void 0;o((t,a,n)=>{const{layout:s,...e}=Lt;return e.file=Ht,e.url=Ut,l`${i()}${r($t())}`});const qt=()=>`<p>Task tracker is a project used to track and manage your tasks. In this task, you will build a simple command line interface (CLI) to track what you need to do, what you have done, and what you are currently working on. This project will help you practice your programming skills, including working with the filesystem, handling user inputs, and building a simple CLI application.</p>
<h2 id="requirements">Requirements</h2>
<p>The application should run from the command line, accept user actions and inputs as arguments, and store the tasks in a JSON file. The user should be able to:</p>
<ul>
<li>Add, Update, and Delete tasks</li>
<li>Mark a task as in progress or done</li>
<li>List all tasks</li>
<li>List all tasks that are done</li>
<li>List all tasks that are not done</li>
<li>List all tasks that are in progress</li>
</ul>
<p>Here are some constraints to guide the implementation:</p>
<ul>
<li>You can use any programming language to build this project.</li>
<li>Use positional arguments in command line to accept user inputs.</li>
<li>Use a JSON file to store the tasks in the current directory.</li>
<li>The JSON file should be created if it does not exist.</li>
<li>Use the native file system module of your programming language to interact with the JSON file.</li>
<li>Do not use any external libraries or frameworks to build this project.</li>
<li>Ensure to handle errors and edge cases gracefully.</li>
</ul>
<h3 id="example">Example</h3>
<p>The list of commands and their usage is given below:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#6272A4"># Adding a new task</span></span>
<span class="line"><span style="color:#50FA7B">task-cli</span><span style="color:#F1FA8C"> add</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Buy groceries</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#6272A4"># Output: Task added successfully (ID: 1)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6272A4"># Updating and deleting tasks</span></span>
<span class="line"><span style="color:#50FA7B">task-cli</span><span style="color:#F1FA8C"> update</span><span style="color:#BD93F9"> 1</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Buy groceries and cook dinner</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#50FA7B">task-cli</span><span style="color:#F1FA8C"> delete</span><span style="color:#BD93F9"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6272A4"># Marking a task as in progress or done</span></span>
<span class="line"><span style="color:#50FA7B">task-cli</span><span style="color:#F1FA8C"> mark-in-progress</span><span style="color:#BD93F9"> 1</span></span>
<span class="line"><span style="color:#50FA7B">task-cli</span><span style="color:#F1FA8C"> mark-done</span><span style="color:#BD93F9"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6272A4"># Listing all tasks</span></span>
<span class="line"><span style="color:#50FA7B">task-cli</span><span style="color:#F1FA8C"> list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6272A4"># Listing tasks by status</span></span>
<span class="line"><span style="color:#50FA7B">task-cli</span><span style="color:#F1FA8C"> list</span><span style="color:#F1FA8C"> done</span></span>
<span class="line"><span style="color:#50FA7B">task-cli</span><span style="color:#F1FA8C"> list</span><span style="color:#F1FA8C"> todo</span></span>
<span class="line"><span style="color:#50FA7B">task-cli</span><span style="color:#F1FA8C"> list</span><span style="color:#F1FA8C"> in-progress</span></span></code></pre>
<h3 id="task-properties">Task Properties</h3>
<p>Each task should have the following properties:</p>
<ul>
<li><code>id</code>: A unique identifier for the task</li>
<li><code>description</code>: A short description of the task</li>
<li><code>status</code>: The status of the task (<code>todo</code>, <code>in-progress</code>, <code>done</code>)</li>
<li><code>createdAt</code>: The date and time when the task was created</li>
<li><code>updatedAt</code>: The date and time when the task was last updated</li>
</ul>
<p>Make sure to add these properties to the JSON file when adding a new task and update them when updating a task.</p>
<hr>
<h2 id="getting-started">Getting Started</h2>
<p>Here are a few steps to help you get started with the Task Tracker CLI project:</p>
<h3 id="set-up-your-development-environment">Set Up Your Development Environment</h3>
<ul>
<li>Choose a programming language you are comfortable with (e.g., Python, JavaScript, etc.).</li>
<li>Ensure you have a code editor or IDE installed (e.g., VSCode, PyCharm).</li>
</ul>
<h3 id="project-initialization">Project Initialization</h3>
<ul>
<li>Create a new project directory for your Task Tracker CLI.</li>
<li>Initialize a version control system (e.g., Git) to manage your project.</li>
</ul>
<h3 id="implementing-features">Implementing Features</h3>
<ul>
<li>Start by creating a basic CLI structure to handle user inputs.</li>
<li>Implement each feature one by one, ensuring to test thoroughly before moving to the next e.g. implement adding task functionality first, listing next, then updating, marking as in progress, etc.</li>
</ul>
<h3 id="testing-and-debugging">Testing and Debugging</h3>
<ul>
<li>Test each feature individually to ensure they work as expected. Look at the JSON file to verify that the tasks are being stored correctly.</li>
<li>Debug any issues that arise during development.</li>
</ul>
<h3 id="finalizing-the-project">Finalizing the Project</h3>
<ul>
<li>Ensure all features are implemented and tested.</li>
<li>Clean up your code and add comments where necessary.</li>
<li>Write a good readme file on how to use your Task Tracker CLI.</li>
</ul>
<hr>
<p>By the end of this project, you will have developed a practical tool that can help you or others manage tasks efficiently. This project lays a solid foundation for more advanced programming projects and real-world applications.</p>
<p>Happy coding!</p>`,Mt={title:"Task Tracker",description:"Build a CLI app to track your tasks and manage your to-do list.",isNew:!1,sort:100,difficulty:"beginner",nature:"CLI",skills:["Programming Language","CLI","Filesystem"],seo:{title:"Task Tracker CLI",description:"Build a command line interface (CLI) to track your tasks and manage your to-do list.",keywords:["task tracker cli","backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot","cpp"]},Rt="C:/Users/HP/developer-roadmap-master/src/data/projects/task-tracker.md",Nt=void 0;o((t,a,n)=>{const{layout:s,...e}=Mt;return e.file=Rt,e.url=Nt,l`${i()}${r(qt())}`});const Gt=()=>`<p>This project is designed to help you practice DOM manipulation, form handling, and basic calculations in JavaScript.</p>
<p>You will create a temperature converter that allows users to enter a temperature value, select the unit they want to convert from, and select the unit they want to convert to. The “Convert” button should only be enabled when all three fields are filled in. Once the user clicks “Convert,” the tool will display the converted temperature below the form.</p>
<p>Here is a mockup of what the temperature converter might look like:</p>
<p><a href="https://assets.roadmap.sh/guest/temperature-converter-8omel.png" rel="noopener noreferrer nofollow" target="_blank"><img src="https://assets.roadmap.sh/guest/temperature-converter-8omel.png" alt="Temperature Converter"></a></p>
<p>This project will help you gain experience with handling user input, conditionally enabling form elements, and performing simple calculations using JavaScript.</p>`,Yt={title:"Temperature Converter",description:"Build a temperature converter that converts between different units.",isNew:!1,sort:27,difficulty:"intermediate",nature:"JavaScript",skills:["HTML","CSS","JavaScript","DOM Manipulation"],seo:[{title:"Build a Temperature Converter with JavaScript"},{description:"Learn how to create an interactive temperature converter that converts between Celsius, Fahrenheit, and Kelvin using JavaScript."},{keywords:["temperature converter","javascript project","unit conversion","html and css"]}],roadmapIds:["frontend"]},_t="C:/Users/HP/developer-roadmap-master/src/data/projects/temperature-converter.md",Ot=void 0;o((t,a,n)=>{const{layout:s,...e}=Yt;return e.file=_t,e.url=Ot,l`${i()}${r(Gt())}`});const Wt=()=>`<p>In this project, you are required to create a bunch of testimonial cards. Testimonials are quotes or statements from satisfied customers or users, often used on websites to build credibility and trust.</p>
<p>The goal of this project is to teach you about positioning and layout in CSS. Below is a rough mockup showing some testimonial cards. Each card is designed to help you understand different layout and positioning techniques.</p>
<p><a href="https://assets.roadmap.sh/guest/testimonials-min-3j2j4.png" rel="noopener noreferrer nofollow" target="_blank"><img src="https://assets.roadmap.sh/guest/testimonials-min-3j2j4.png" alt="Testimonials Component"></a></p>
<p>Feel free to use any content and images you like for the testimonials.</p>
<hr>
<p>After completing this project, you will have a good understanding of how to create layouts using HTML and CSS. You can further enhance your skills by exploring more complex projects as you progress.</p>`,Jt={title:"Testimonial Cards",description:"Create testimonial cards for a website using HTML and CSS.",isNew:!1,sort:5,difficulty:"beginner",nature:"CSS",skills:["HTML","CSS","Layouts","Flexbox","Positioning"],seo:{title:"Create Testimonial Cards for a Website Using HTML and CSS",description:"Learn how to create testimonial components using HTML and CSS.",keywords:["basic css","css project idea","responsive design","html and css"]},roadmapIds:["frontend"]},zt="C:/Users/HP/developer-roadmap-master/src/data/projects/testimonial-cards.md",Vt=void 0;o((t,a,n)=>{const{layout:s,...e}=Jt;return e.file=zt,e.url=Vt,l`${i()}${r(Wt())}`});const Qt=()=>`<p>In this project, you will build a simple command line interface (CLI) to fetch data from The Movie Database (TMDB) and display it in the terminal. This project will help you practice your programming skills, including working with APIs, handling JSON data, and building a simple CLI application.</p>
<h2 id="requirements">Requirements</h2>
<p>The application should run from the command line, and be able to pull and show the popular, top-rated, upcoming and now playing movies from the TMDB API. The user should be able to specify the type of movies they want to see by passing a command line argument to the CLI tool.</p>
<p>Here is how the CLI tool usage should look like:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#50FA7B">tmdb-app</span><span style="color:#BD93F9"> --type</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">playing</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#50FA7B">tmdb-app</span><span style="color:#BD93F9"> --type</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">popular</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#50FA7B">tmdb-app</span><span style="color:#BD93F9"> --type</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">top</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#50FA7B">tmdb-app</span><span style="color:#BD93F9"> --type</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">upcoming</span><span style="color:#E9F284">"</span></span></code></pre>
<p>You can look at the API documentation to understand how to fetch the data for each type of movie.</p>
<ul>
<li><a href="https://developer.themoviedb.org/reference/movie-now-playing-list" rel="noopener noreferrer nofollow" target="_blank">Now Playing Movies</a></li>
<li><a href="https://developer.themoviedb.org/reference/movie-popular-list" rel="noopener noreferrer nofollow" target="_blank">Popular Movies</a></li>
<li><a href="https://developer.themoviedb.org/reference/movie-top-rated-list" rel="noopener noreferrer nofollow" target="_blank">Top Rated Movies</a></li>
<li><a href="https://developer.themoviedb.org/reference/movie-upcoming-list" rel="noopener noreferrer nofollow" target="_blank">Upcoming Movies</a></li>
</ul>
<p>There are some considerations to keep in mind:</p>
<ul>
<li>Handle errors gracefully, such as API failures or network issues.</li>
<li>Use a programming language of your choice to build this project.</li>
<li>Make sure to include a README file with instructions on how to run the application and any other relevant information.</li>
</ul>`,Zt={title:"TMDB CLI Tool",description:"Use TMDB API to fetch movie information and display it in the terminal.",isNew:!1,sort:1100,difficulty:"beginner",nature:"CLI",skills:["Programming Language","CLI","API Consumption"],seo:{title:"TMDB CLI Tool",description:"Build a command line interface (CLI) to fetch and display common TMDB requests.",keywords:["tmdb user activity cli","backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot","cpp"]},Kt="C:/Users/HP/developer-roadmap-master/src/data/projects/tmdb-cli.md",Xt=void 0;o((t,a,n)=>{const{layout:s,...e}=Zt;return e.file=Kt,e.url=Xt,l`${i()}${r(Qt())}`});const ea=()=>`<p>In this project you are required to develop a RESTful API to allow users to manage their to-do list. The previous backend projects have only focused on the CRUD operations, but this project will require you to implement user authentication as well.</p>
<p><img src="https://assets.roadmap.sh/guest/todo-list-api-bsrdd.png" alt="Todo List API"></p>
<h2 id="goals">Goals</h2>
<p>The skills you will learn from this project include:</p>
<ul>
<li>User authentication</li>
<li>Schema design and Databases</li>
<li>RESTful API design</li>
<li>CRUD operations</li>
<li>Error handling</li>
<li>Security</li>
</ul>
<h2 id="requirements">Requirements</h2>
<p>You are required to develop a RESTful API with following endpoints</p>
<ul>
<li>User registration to create a new user</li>
<li>Login endpoint to authenticate the user and generate a token</li>
<li>CRUD operations for managing the to-do list</li>
<li>Implement user authentication to allow only authorized users to access the to-do list</li>
<li>Implement error handling and security measures</li>
<li>Use a database to store the user and to-do list data (you can use any database of your choice)</li>
<li>Implement proper data validation</li>
<li>Implement pagination and filtering for the to-do list</li>
</ul>
<p>Given below is a list of the endpoints and the details of the request and response:</p>
<h3 id="user-registration">User Registration</h3>
<p>Register a new user using the following request:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>POST /register</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  "name": "John Doe",</span></span>
<span class="line"><span>  "email": "john@doe.com",</span></span>
<span class="line"><span>  "password": "password"</span></span>
<span class="line"><span>}</span></span></code></pre>
<p>This will validate the given details, make sure the email is unique and store the user details in the database. Make sure to hash the password before storing it in the database. Respond with a token that can be used for authentication if the registration is successful.</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="json"><code><span class="line"><span style="color:#F8F8F2">{</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">token</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span></code></pre>
<p>The token can either be a JWT or a random string that can be used for authentication. We leave it up to you to decide the implementation details.</p>
<h3 id="user-login">User Login</h3>
<p>Authenticate the user using the following request:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>POST /login</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  "email": "john@doe.com",</span></span>
<span class="line"><span>  "password": "password"</span></span>
<span class="line"><span>}</span></span></code></pre>
<p>This will validate the given email and password, and respond with a token if the authentication is successful.</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="json"><code><span class="line"><span style="color:#F8F8F2">{</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">token</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span></code></pre>
<h3 id="create-a-to-do-item">Create a To-Do Item</h3>
<p>Create a new to-do item using the following request:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>POST /todos</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  "title": "Buy groceries",</span></span>
<span class="line"><span>  "description": "Buy milk, eggs, and bread"</span></span>
<span class="line"><span>}</span></span></code></pre>
<p>User must send the token received from the login endpoint in the header to authenticate the request. You can use the <code>Authorization</code> header with the token as the value. In case the token is missing or invalid, respond with an error and status code 401.</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="json"><code><span class="line"><span style="color:#F8F8F2">{</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">message</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Unauthorized</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span></code></pre>
<p>Upon successful creation of the to-do item, respond with the details of the created item.</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="json"><code><span class="line"><span style="color:#F8F8F2">{</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">id</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#BD93F9"> 1</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">title</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Buy groceries</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">description</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Buy milk, eggs, and bread</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span></code></pre>
<h3 id="update-a-to-do-item">Update a To-Do Item</h3>
<p>Update an existing to-do item using the following request:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>PUT /todos/1</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  "title": "Buy groceries",</span></span>
<span class="line"><span>  "description": "Buy milk, eggs, bread, and cheese"</span></span>
<span class="line"><span>}</span></span></code></pre>
<p>Just like the create todo endpoint, user must send the token received. Also make sure to validate the user has the permission to update the to-do item i.e. the user is the creator of todo item that they are updating. Respond with an error and status code <code>403</code> if the user is not authorized to update the item.</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="json"><code><span class="line"><span style="color:#F8F8F2">{</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">message</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Forbidden</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span></code></pre>
<p>Upon successful update of the to-do item, respond with the updated details of the item.</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="json"><code><span class="line"><span style="color:#F8F8F2">{</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">id</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#BD93F9"> 1</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">title</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Buy groceries</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">description</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Buy milk, eggs, bread, and cheese</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span></code></pre>
<h3 id="delete-a-to-do-item">Delete a To-Do Item</h3>
<p>Delete an existing to-do item using the following request:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>DELETE /todos/1</span></span></code></pre>
<p>User must be authenticated and authorized to delete the to-do item. Upon successful deletion, respond with the status code <code>204</code>.</p>
<h3 id="get-to-do-items">Get To-Do Items</h3>
<p>Get the list of to-do items using the following request:</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>GET /todos?page=1&#x26;limit=10</span></span></code></pre>
<p>User must be authenticated to access the tasks and the response should be paginated. Respond with the list of to-do items along with the pagination details.</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="json"><code><span class="line"><span style="color:#F8F8F2">{</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">data</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#F8F8F2"> [</span></span>
<span class="line"><span style="color:#F8F8F2">    {</span></span>
<span class="line"><span style="color:#8BE9FE">      "</span><span style="color:#8BE9FD">id</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#BD93F9"> 1</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">      "</span><span style="color:#8BE9FD">title</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Buy groceries</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">      "</span><span style="color:#8BE9FD">description</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Buy milk, eggs, bread</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#F8F8F2">    },</span></span>
<span class="line"><span style="color:#F8F8F2">    {</span></span>
<span class="line"><span style="color:#8BE9FE">      "</span><span style="color:#8BE9FD">id</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#BD93F9"> 2</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">      "</span><span style="color:#8BE9FD">title</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Pay bills</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">      "</span><span style="color:#8BE9FD">description</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">Pay electricity and water bills</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#F8F8F2">    }</span></span>
<span class="line"><span style="color:#F8F8F2">  ],</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">page</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#BD93F9"> 1</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">limit</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#BD93F9"> 10</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">total</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#BD93F9"> 2</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span></code></pre>
<h2 id="bonus">Bonus</h2>
<ul>
<li>Implement filtering and sorting for the to-do list</li>
<li>Implement unit tests for the API</li>
<li>Implement rate limiting and throttling for the API</li>
<li>Implement refresh token mechanism for the authentication</li>
</ul>
<hr>
<p>This project will help you understand how to design and implement a RESTful API with user authentication. You will also learn how to work with databases, handle errors, and implement security measures.</p>`,sa={title:"Todo List API",description:"Build a RESTful API to allow users to manage their to-do list.",isNew:!1,sort:900,difficulty:"beginner",nature:"API",skills:["RESTful API","Database","CRUD Operations","Data Modeling","Authentication"],seo:{title:"Todo List API Project Idea",description:"Build a RESTful API to allow users to manage their to-do list.",keywords:["todo list api","backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot"]},na="C:/Users/HP/developer-roadmap-master/src/data/projects/todo-list-api.md",ta=void 0;o((t,a,n)=>{const{layout:s,...e}=sa;return e.file=na,e.url=ta,l`${i()}${r(ea())}`});const aa=()=>`<p>In this project, you are required to create a tooltip that appears above navigation items when hovered, using only HTML and CSS. A tooltip is a small pop-up box that provides additional information about a navigation item when a user hovers over it. This project will focus on mastering CSS positioning, hover effects, and creating visually appealing tooltips without relying on JavaScript.</p>
<p>The goal of this project is to help you understand how to use CSS for dynamic UI effects. You will learn how to position elements relative to each other, create smooth transitions, and make your navigation more interactive and user-friendly. Below is a rough mockup showing the tooltip appearing above a navigation item.</p>
<p><a href="https://assets.roadmap.sh/guest/tooltip-zh8gm.png" rel="noopener noreferrer nofollow" target="_blank"><img src="https://assets.roadmap.sh/guest/tooltip-zh8gm.png" alt="Tooltip Mockup"></a></p>
<p>Bonus points for different animations for the tooltip, such as fade-in, slide-in, or scale-in effects.</p>
<p>After completing this project, you will have a better understanding of CSS positioning, hover effects, and creating interactive UI elements without JavaScript.</p>`,oa={title:"Tooltip UI",description:"Create a tooltip for navigation items using only HTML and CSS.",isNew:!1,sort:9,difficulty:"beginner",nature:"CSS",skills:["HTML","CSS","Positioning","Hover Effects"],seo:{title:"Create a CSS Tooltip for Navigation Items",description:"Learn how to create a tooltip that appears above navigation items on hover using only HTML and CSS.",keywords:["css tooltip","hover effects","navigation menu","html and css"]},roadmapIds:["frontend"]},ra="C:/Users/HP/developer-roadmap-master/src/data/projects/tooltip-ui.md",la=void 0;o((t,a,n)=>{const{layout:s,...e}=oa;return e.file=ra,e.url=la,l`${i()}${r(aa())}`});const ia=()=>`<p>You are required to build a simple web app that can convert between different units of measurement. It can convert units of length, weight, volume, area, temperature, and more. The user can input a value and select the units to convert from and to. The application will then display the converted value.</p>
<h2 id="requirements">Requirements</h2>
<p>Build a simple web page that will have different sections for different units of measurement. The user can input a value to convert, select the units to convert from and to, and view the converted value.</p>
<ul>
<li>The user can input a value to convert.</li>
<li>The user can select the units to convert from and to.</li>
<li>The user can view the converted value.</li>
<li>The user can convert between different units of measurement like length, weight, temperature, etc (more given below).</li>
</ul>
<p>You can include the following units of measurement to convert between:</p>
<ul>
<li>Length: millimeter, centimeter, meter, kilometer, inch, foot, yard, mile.</li>
<li>Weight: milligram, gram, kilogram, ounce, pound.</li>
<li>Temperature: Celsius, Fahrenheit, Kelvin.</li>
</ul>
<h2 id="how-it-works">How it works</h2>
<p>You don’t need to use any database for this project. There will be a simple webpage that will submit the form to the server and get the converted value back and display it on the webpage.</p>
<p><img src="https://assets.roadmap.sh/guest/unit-converter-be-project.png" alt="Unit Converter"></p>
<p>You can have 3 webpages for each type of unit conversion (length, weight, temperature) with forms to input the value and select the units to convert from and to. Submitting a form will submit the data to the current page (i.e. <code>target="_self"</code>) and display the converted value. You can do this using the backend programming language of your choice i.e. check if the form is submitted and then calculate the converted value and display it on the webpage, if not submitted then display the form.</p>`,pa={title:"Unit Converter",description:"Unit converter to convert between different units of measurement.",isNew:!1,sort:500,difficulty:"beginner",nature:"Web App",skills:["Programming Language","HTML","Server","Logic Building"],seo:{title:"Unit Converter",description:"Build a Unit Converter to convert between different units of measurement.",keywords:["unit converter","backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot"]},ca="C:/Users/HP/developer-roadmap-master/src/data/projects/unit-converter.md",da=void 0;o((t,a,n)=>{const{layout:s,...e}=pa;return e.file=ca,e.url=da,l`${i()}${r(ia())}`});const ua=()=>`<p>You are required to create a simple RESTful API that allows users to shorten long URLs. The API should provide endpoints to create, retrieve, update, and delete short URLs. It should also provide statistics on the number of times a short URL has been accessed.</p>
<p><img src="https://assets.roadmap.sh/guest/url-shortener-architecture-u72mu.png" alt="URL Shortening Service"></p>
<h2 id="requirements">Requirements</h2>
<p>You should create a RESTful API for a URL shortening service. The API should allow users to perform the following operations:</p>
<ul>
<li>Create a new short URL</li>
<li>Retrieve an original URL from a short URL</li>
<li>Update an existing short URL</li>
<li>Delete an existing short URL</li>
<li>Get statistics on the short URL (e.g., number of times accessed)</li>
</ul>
<p>You can optionally setup a minimal frontend to interact with the API and setup redirects for the short URLs to the original URLs.</p>
<h2 id="api-endpoints">API Endpoints</h2>
<p>Given below are the details for each API operation.</p>
<h3 id="create-short-url">Create Short URL</h3>
<p>Create a new short URL using the <code>POST</code> method</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>POST /shorten</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  "url": "https://www.example.com/some/long/url"</span></span>
<span class="line"><span>}</span></span></code></pre>
<p>The endpoint should validate the request body and return a <code>201 Created</code> status code with the newly created short URL i.e.</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="json"><code><span class="line"><span style="color:#F8F8F2">{</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">id</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">1</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">url</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">https://www.example.com/some/long/url</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">shortCode</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">abc123</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">createdAt</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">2021-09-01T12:00:00Z</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">updatedAt</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">2021-09-01T12:00:00Z</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span></code></pre>
<p>or a <code>400 Bad Request</code> status code with error messages in case of validation errors. Short codes must be unique and should be generated randomly.</p>
<h2 id="retrieve-original-url">Retrieve Original URL</h2>
<p>Retrieve the original URL from a short URL using the <code>GET</code> method</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>GET /shorten/abc123</span></span></code></pre>
<p>The endpoint should return a <code>200 OK</code> status code with the original URL i.e.</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="json"><code><span class="line"><span style="color:#F8F8F2">{</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">id</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">1</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">url</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">https://www.example.com/some/long/url</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">shortCode</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">abc123</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">createdAt</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">2021-09-01T12:00:00Z</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">updatedAt</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">2021-09-01T12:00:00Z</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span></code></pre>
<p>or a <code>404 Not Found</code> status code if the short URL was not found. Your frontend should be responsible for retrieving the original URL using the short URL and redirecting the user to the original URL.</p>
<h2 id="update-short-url">Update Short URL</h2>
<p>Update an existing short URL using the <code>PUT</code> method</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>PUT /shorten/abc123</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  "url": "https://www.example.com/some/updated/url"</span></span>
<span class="line"><span>}</span></span></code></pre>
<p>The endpoint should validate the request body and return a <code>200 OK</code> status code with the updated short URL i.e.</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="json"><code><span class="line"><span style="color:#F8F8F2">{</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">id</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">1</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">url</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">https://www.example.com/some/updated/url</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">shortCode</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">abc123</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">createdAt</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">2021-09-01T12:00:00Z</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">updatedAt</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">2021-09-01T12:30:00Z</span><span style="color:#E9F284">"</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span></code></pre>
<p>or a <code>400 Bad Request</code> status code with error messages in case of validation errors. It should return a <code>404 Not Found</code> status code if the short URL was not found.</p>
<h3 id="delete-short-url">Delete Short URL</h3>
<p>Delete an existing short URL using the <code>DELETE</code> method</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>DELETE /shorten/abc123</span></span></code></pre>
<p>The endpoint should return a <code>204 No Content</code> status code if the short URL was successfully deleted or a <code>404 Not Found</code> status code if the short URL was not found.</p>
<h3 id="get-url-statistics">Get URL Statistics</h3>
<p>Get statistics for a short URL using the <code>GET</code> method</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>GET /shorten/abc123/stats</span></span></code></pre>
<p>The endpoint should return a <code>200 OK</code> status code with the statistics i.e.</p>
<pre class="astro-code dracula" style="background-color:#282A36;color:#F8F8F2; overflow-x: auto;" tabindex="0" data-language="json"><code><span class="line"><span style="color:#F8F8F2">{</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">id</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">1</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">url</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">https://www.example.com/some/long/url</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">shortCode</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">abc123</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">createdAt</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">2021-09-01T12:00:00Z</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">updatedAt</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> "</span><span style="color:#F1FA8C">2021-09-01T12:00:00Z</span><span style="color:#E9F284">"</span><span style="color:#F8F8F2">,</span></span>
<span class="line"><span style="color:#8BE9FE">  "</span><span style="color:#8BE9FD">accessCount</span><span style="color:#8BE9FE">"</span><span style="color:#FF79C6">:</span><span style="color:#BD93F9"> 10</span></span>
<span class="line"><span style="color:#F8F8F2">}</span></span></code></pre>
<p>or a <code>404 Not Found</code> status code if the short URL was not found.</p>
<hr>
<h2 id="tech-stack">Tech Stack</h2>
<p>Feel free to use any programming language, framework, and database of your choice for this project. Here are some suggestions:</p>
<ul>
<li>If you are using JavaScript, you can use Node.js with Express.js</li>
<li>If you are using Python, you can use Flask or Django</li>
<li>If you are using Java, you can use Spring Boot</li>
<li>If you are using Ruby, you can use Ruby on Rails</li>
</ul>
<p>For databases, you can use:</p>
<ul>
<li>MySQL if you are using SQL</li>
<li>MongoDB if you are using NoSQL</li>
</ul>
<p>Your job is to implement the core functionality of the API, focusing on creating, retrieving, updating, and deleting short URLs, as well as tracking and retrieving access statistics. You don’t have to implement authentication or authorization for this project.</p>`,ha={title:"URL Shortening Service",description:"Build a URL Shortener API that helps shorten long URLs.",isNew:!1,sort:1400,difficulty:"intermediate",nature:"API",skills:["Programming Language","Database Indexing","HTTP Redirects"],seo:{title:"URL Shortening Service Project Idea",description:"Build a URL Shortener API that helps shorten long URLs.",keywords:["url shortening service","backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot"]},ma="C:/Users/HP/developer-roadmap-master/src/data/projects/url-shortening-service.md",ga=void 0;o((t,a,n)=>{const{layout:s,...e}=ha;return e.file=ma,e.url=ga,l`${i()}${r(ua())}`});const ya=()=>`<p>In this project, instead of relying on our own weather data, we will build a weather API that fetches and returns weather data from a 3rd party API. This project will help you understand how to work with 3rd party APIs, caching, and environment variables.</p>
<p><img src="https://assets.roadmap.sh/guest/weather-api-f8i1q.png" alt="Weather API"></p>
<p>As for the actual weather API to use, you can use your favorite one, as a suggestion, here is a link to <a href="https://www.visualcrossing.com/weather-api" rel="noopener noreferrer nofollow" target="_blank">Visual Crossing’s API</a>, it’s completely FREE and easy to use.</p>
<p>Regarding the in-memory cache, a pretty common recommendation is to use <a href="https://redis.io/" rel="noopener noreferrer nofollow" target="_blank">Redis</a>, you can read more about it <a href="https://redis.io/docs/latest/develop/clients/client-side-caching/" rel="noopener noreferrer nofollow" target="_blank">here</a>, and as a recommendation, you could use the city code entered by the user as the key, and save there the result from calling the API.</p>
<p>At the same time, when you “set” the value in the cache, you can also give it an expiration time in seconds (using the <code>EX</code> flag on the <code>SET</code> command). That way the cache (the keys) will automatically clean itself when the data is old enough (for example, giving it a 12-hours expiration time).</p>
<hr>
<h2 id="some-tips">Some Tips</h2>
<p>Here are some tips to help you get started:</p>
<ul>
<li>Start by creating a simple API that returns a hardcoded weather response. This will help you understand how to structure your API and how to handle requests.</li>
<li>Use environment variables to store the API key and the Redis connection string. This way, you can easily change them without having to modify your code.</li>
<li>Make sure to handle errors properly. If the 3rd party API is down, or if the city code is invalid, make sure to return the appropriate error message.</li>
<li>Use some package or module to make HTTP requests e.g. if you are using Node.js, you can use the <code>axios</code> package, if you are using Python, you can use the <code>requests</code> module.</li>
<li>Implement rate limiting to prevent abuse of your API. You can use a package like <code>express-rate-limit</code> if you are using Node.js or <code>flask-limiter</code> if you are using Python.</li>
</ul>
<p>This project will help you understand how to work with 3rd party APIs, caching, and environment variables. It will also help you understand how to structure your API and how to handle requests.</p>`,fa={title:"Weather API",description:"Build a weather API that fetches and returns weather data.",isNew:!1,sort:700,difficulty:"beginner",nature:"API",skills:["Programming Language","3rd Party APIs","Caching","Environment Variables"],seo:{title:"Weather API Project Idea",description:"Build a weather API that fetches and returns weather data from a 3rd party API.",keywords:["weather api","backend project idea"]},roadmapIds:["backend","php","nodejs","python","java","golang","spring-boot"]},ba="C:/Users/HP/developer-roadmap-master/src/data/projects/weather-api-wrapper-service.md",Fa=void 0;o((t,a,n)=>{const{layout:s,...e}=fa;return e.file=ba,e.url=Fa,l`${i()}${r(ya())}`});const wa=()=>`<p>In this project you are required to build a weather app that displays the current weather details based on the location entered by the user. We will be leveraging a common weather API to achieve this.</p>
<p>You can use the <a href="https://www.visualcrossing.com/weather-api" rel="noopener noreferrer nofollow" target="_blank">Visual Crossing Weather API</a> to fetch the weather data.</p>
<h2 id="requirements">Requirements</h2>
<ul>
<li>The User should be able to enter a location into an input field</li>
<li>The User will be presented with temperature, wind speed, likelihood of rain, and general weather i.e. Sunny, Raining, Cloudy etc.</li>
<li>The User will be shown the previous and future 24 hour periods.</li>
<li>The weather outlook can be refreshed by the user.</li>
</ul>
<h2 id="stretch-goals">Stretch Goals</h2>
<ul>
<li>Animation libraries such as framer can used to make the loading of weather more visually appealing</li>
<li>The default weather view is the Users current location.</li>
</ul>`,va={title:"Weather Web App",description:"Build a weather app that fetches and displays weather for a given location.",isNew:!1,sort:31,difficulty:"intermediate",nature:"API",skills:["Programming Language","3rd Party APIs","JavaScript","HMTL","CSS"],seo:{title:"Weather App Project Idea",description:"Build a web-based weather app that fetches and displays weather data.",keywords:["weather api","frontend project idea"]},roadmapIds:["frontend"]},ka="C:/Users/HP/developer-roadmap-master/src/data/projects/weather-app.md",Ca=void 0;o((t,a,n)=>{const{layout:s,...e}=va;return e.file=ka,e.url=Ca,l`${i()}${r(wa())}`});const Pa=["beginner","intermediate","advanced"];function u(t){const{variant:a,text:n}=t,s={blue:"bg-blue-100 text-blue-700 border-blue-200",green:"bg-green-100 text-green-700 border-green-200",red:"bg-red-100 text-red-700 border-red-200",yellow:"bg-yellow-100 text-yellow-700 border-yellow-200",grey:"bg-gray-100 text-gray-700 border-gray-200",white:"bg-white text-black border-gray-200",teal:"bg-teal-100 text-teal-700 border-teal-200",black:"bg-gray-500 text-white border-gray-500"};return p.jsx("span",{className:`rounded-md border capitalize ${s[a]} px-1 py-0.5 text-xs tracking-wide`,children:n})}const Aa={beginner:"yellow",intermediate:"green",advanced:"blue"};function Da(t){const{project:a,userCount:n=0,status:s}=t,{frontmatter:e,id:h}=a,m=s===void 0,c=s!=="none"&&n===0?n+1:n;return p.jsxs("a",{href:`/projects/${h}`,className:"flex flex-col rounded-md border bg-white p-3 transition-colors hover:border-gray-300 hover:bg-gray-50",children:[p.jsxs("span",{className:"flex justify-between gap-1.5",children:[p.jsx(u,{variant:Aa[e.difficulty],text:e.difficulty}),p.jsx(u,{variant:"grey",text:e.nature})]}),p.jsxs("span",{className:"my-3 flex min-h-[100px] flex-col",children:[p.jsx("span",{className:"mb-1 font-medium",children:e.title}),p.jsx("span",{className:"text-sm text-gray-500",children:e.description})]}),p.jsx("span",{className:"flex min-h-[22px] items-center justify-between gap-2 text-xs text-gray-400",children:m?p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"h-5 w-24 animate-pulse rounded-sm bg-gray-200"})," ",p.jsx("span",{className:"h-5 w-20 animate-pulse rounded-sm bg-gray-200"})," "]}):p.jsxs(p.Fragment,{children:[p.jsxs("span",{className:"flex items-center gap-1.5",children:[p.jsx(y,{className:"size-3.5"}),c>0?p.jsxs(p.Fragment,{children:[g(c)," Started"]}):p.jsx(p.Fragment,{children:"Be the first to solve!"})]}),s!=="none"&&p.jsxs("span",{className:d("flex items-center gap-1.5 rounded-full border border-current px-2 py-0.5 capitalize",s==="completed"&&"text-green-500",s==="started"&&"text-yellow-500"),children:[p.jsx("span",{className:d("inline-block h-2 w-2 rounded-full",{"bg-green-500":s==="completed","bg-yellow-500":s==="started"})}),s]})]})})]})}export{Da as P,Pa as p};
