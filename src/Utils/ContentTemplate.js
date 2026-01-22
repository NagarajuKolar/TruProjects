export const contentTemplate = {
    preview: `
“Focus your entire mind on the {{program}} {{branch}} {{type}} Projects.
The sun’s rays do not begin to burn until they are focused.”Even the tiniest activities 
should be done with your heart, mind, and soul.
This is the key to achieving success. You might spark your friend’s interest
by securing a Project with Tru Projects. Give us a call to learn more about the projects.
`,

    body: `

Maybe you’ve noticed anything odd regarding Tru Projects. Because we only work on Projects,
we stand out. Considering all aspects of a project’s issues. By simplifying complex activities,
your intern experience will be able to work at superhuman speed while maintaining human comprehension.

Don’t bite your nails now the services are available near to your home town
Sr Nagar, Ameerpet, JNTU, KPHB, Kukatpally, Dilsukhnagar, Madhapur, L.B.Nagar,
Secunderabad, Tarnaka, Uppal, Chaitanya Puri, ECIL, Ibrahimpatnam, Adilabad,
Uturu, Mancherial, Nirmal, Bhainsa, Asifabad, Karimnagar, Huzurabad, jagtial,
Mettupalli, Peddapalli, Mantini, Sircilla, Nizamabad, Armoor, Bodhan,
Kamareddy, Banswada, Yellareddy, Ellareddy, Warangal (Rural), Narsampet,
Bhupalpally, Mulugu, Jangaon, Station Ghanpur, Mahabubabad, Thorrur,
Khammam, kalluru, Kothagudem, Bhadrachalam, Medak, Toopran, Narsapur,
Sangareddy, Zahirabad, Narayankhed.

Are you pursuing B.Tech, M.Tech or MBA and looking for the Best Engineering Academic
Projects centre in Hyderabad? So, what are you waiting for……? Hurry up, because
Tru Projects in Hyderabad is offering you a fantastic opportunity on engineering
academic projects in Hyderabad to work on a variety of projects with a realistic
output on Current Emerging technologies.

A theory may be made to match any facts since it has so many descriptive options.
But, in order to gain practical knowledge, you must select the appropriate project
early in our careers. So, don’t be concerned; there is a wonderful opportunity for
all {{program}} academic projects centre in Hyderabad.

Tru Projects is one of the big players as a consultation firm for Best Engineering
Projects provider in Hyderabad. When planning a project, engineering students
consider a wide range of topics from numerous perspectives. To better understanding
our unique range of projects, let’s look at a few distinct fields and their applications.
So that you can choose the project that best meets your needs from our comprehensive
list of Final Year academic projects.

Tru Projects is the best opportunity for {{program}} {{branch}} {{type}} Projects
with Source Code and Document, providing best in class career oriented & real time
projects for engineering students in Hyderabad. We provide actual competency-based
projects for engineering students in Hyderabad with ensure quality, and lower your
expenditures.

Never be afraid to take bold action and live the life you’ve always imagined.
Be Bold and take the opportunity to join in Tru Projects for {{program}} {{branch}}
{{type}} Projects. By going, you will be a more desirable candidate than your peers
when it comes time to hunt for a full-time job after taking {{program}} academic
projects.

Employers value your work experience more than your academic credentials. The finest
projects allow you to put specific teaching approaches to the test before you start
working. A Project allows you to put what you’ve learned into practise in a safe
setting where mistakes are expected, rather than learning the hard way in your first
job after college. Projects allow you to transition from student to full-time work.
Graduating and immediately starting a new career might be difficult at times in
projects for engineering students.

Tru Projects is proud to be one of the best IEEE {{type}} Projects for {{program}}
{{branch}} Students, offering wide range of customized Easy mini-Projects in Hyderabad,
B TECH major and mini projects, Latest mini and major Projects, MBA major and mini
projects, and so on.Among the domains in which we specialize are Data Mining, Artificial Intelligence,
Big Data, Deep Learning, Data Science, Android, cloud computing, and Cyber security.

You’ve arrived at the right site if you’re seeking for Real Time {{type}} Projects
for {{program}} {{branch}} Students or Latest mini-Projects in Hyderabad. All you have
to do now is contact us for more information and to embark on your project in Tru Projects.

“The tasks we’ve finished show what we know; future projects will determine what we learn.”

Tru Projects is a renowned project creation company that offers top-of-the-line
career-oriented and real time projects for engineering students. Tru Projects is
India’s leading provider of research and development and projects for engineering
students. We provide actual competency-based training, ensure quality, and cut your
costs all at the same time. Tru Projects is one of best Final Year academic projects
in Hyderabad.

If you are looking for mini-Projects for 3rd Year or {{program}} Academic Projects
join Tru Projects immediately to earn valuable experience. If you don’t want to
deter anybody from looking Easy mini-Projects in the traditional manner, start by
tapping into Tru Projects website for Best Engineering Projects engineering academic
projects, depending on personal interest.

Finding a genuine project consultant is challenging in these pandemic times. You
don’t have to be concerned about it because Tru Projects is one of the top academic
certified experts, and we take pride in delivering some of the best {{program}}
major projects available.

Our team works tirelessly to ensure that any student can access our Latest mini-Projects
in Hyderabad at any time that is convenient for them. We also offer {{program}}
image processing major projects in Hyderabad.If we can be your assist, please do not hesitate to contact us.
We’re Tru Projects, and we’re here to help you.
`
};

export const formatContent = (text, data) => {
  return text.replace(/{{(.*?)}}/g, (_, key) => data[key] || "");
};

export const splitParagraphs = (text) => {
  return text
    .split(/\n\s*\n/)   
    .map(p => p.trim())
    .filter(Boolean);
};

