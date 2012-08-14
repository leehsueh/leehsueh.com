var courses = [
	{
		quarter: "Fall 2011",
		id: "fall",
		courses: [
			{
				courseNum: "CS 193A",
				courseName: "Android Programming",
				courseDesc: "Overview and introduction to developing android applications.",
				units: 1
			},
			{
				courseNum: "CS 193P",
				courseName: "iPhone and iPad Application Programming",
				courseDesc: "A very solid and rewarding introduction to iOS development.",
				units: 3
			},
			{
				courseNum: "EDUC 200B",
				courseName: "Qualitative Methods",
				courseDesc: "An awesome and rigorous introduction to qualitative research and analysis.",
				units: 4
			},
			{
				courseNum: "EDUC 281X",
				courseName: "Technology for Learners",
				courseDesc: "An overview of different kinds of technologies that have potential use in the classroom.",
				units: 2
			},
			{
				courseNum: "ME 377",
				courseName: "Design Thinking Bootcamp",
				courseDesc: "A nice, albeit overhyped, introduction to a user-centered design process and framework.",
				units: 4
			},
			{
				courseNum: "EDUC 380",
				courseName: "Supervised Internship",
				courseDesc: "Developed a prototype android app for data collection using an android smartphone's onboard sensors.",
				units: 1
			}
		]
	},
	{
		quarter: "Winter 2012",
		id: "winter",
		courses: [
			{
				courseNum: "CS 377I",
				courseName: "Prototyping Interactive Systems",
				courseDesc: "Techniques for developing and prototyping concepts in participatory design, with an emphasis on video prototyping.",
				units: 4
			},
			{
				courseNum: "EDUC 328X",
				courseName: "Core Mechanics of Learning",
				courseDesc: "An extremely educational, critical, and practical course on some mechanics of how people learn, supported by research.",
				units: 3
			},
			{
				courseNum: "EDUC 333A",
				courseName: "Understanding Learning Environments",
				courseDesc: "I'm not sure I learned much about learning environments at all, unfortunately.",
				units: 3
			},
			{
				courseNum: "EE 92A",
				courseName: "Making and Breaking Things",
				courseDesc: "A fun little workshop course where we took stuff apart. Just for fun.",
				units: 1
			},
			{
				courseNum: "ENGR 210",
				courseName: "Perspectives in Assistive Technology",
				courseDesc: "A seminar + project course consisting mostly of guest lecturers. Definitely gained a cognizance and better sense of the lives of people with disabilities.",
				units: 1
			},
			{
				courseNum: "EDUC 380",
				courseName: "Supervised Internship",
				courseDesc: "Worked for mobile games start-up <a href=\"http://motionmathgames.com\">Motion Math</a> and helped develop their multiplication game Motion Math: Wings.",
				units: 3
			}
		]
	},
	{
		quarter: "Spring 2012",
		id: "spring",
		courses: [
			{
				courseNum: "CS 142",
				courseName: "Web Applications",
				courseDesc: "I took this course mostly to learn Ruby on Rails.",
				units: 3
			},
			{
				courseNum: "EDUC 180",
				courseName: "Directed Reading with Dan Schwartz",
				courseDesc: "Continuing on his core mechanics of learning. Once again, an extremely educational experience.",
				units: 1
			},
			{
				courseNum: "EDUC 380",
				courseName: "Supervised Internship",
				courseDesc: "Worked for <a href=\"http://junyo.com\">Junyo</a> designing and prototyping interfaces for their data-integrated LMS.",
				units: 4
			}
		]
	},
	{
		quarter: "Summer 2012",
		id: "summer",
		courses: [
			{
				courseNum: "EDUC 229D",
				courseName: "Learning, Design, and Technology Seminar",
				courseDesc: "This was taken every quarter, but I only include it here because I was working on my master's project basically full time.",
				units: 5
			},
			{
				courseNum: "EDUC 380",
				courseName: "Supervised Internship",
				courseDesc: "Did some work for Dan Schwartz's research lab and visited museums to talk about designing fun assessments (called \"choicelets\") for informal learning environments.",
				units: 1
			}
		]
	}
];

var projects = [
	{
		id: "prj-memu",
		name: "Me.Mu and Emotionary",
		desc: "A pair of Kinect activities and an emotion diary iPad app called Emotionary to help facilitate understanding of emotions in children and adolescents with autism.",
		images: [
			"memu_logo.png",
			"emotionary-landscape.png"
		],
		files: [
			{
				title: "Master's Project Report",
				src: "ldtmp_report.pdf"
			},
			{
				title: "LDT Expo Presentation",
				src: "ldtmp_presentation.pptx"
			}
		],
		link: "http://memu.org"
	},
	{
		id: "prj-put-it-away",
		name: "Put It Away",
		desc: "An iPad app I developed for my final project in the iOS programming course. It aims to help children with developmental disabilities learn how to clean different rooms, which is an essential skill for independent living. Available on the <a href=\"http://itunes.apple.com/us/app/put-it-away/id494750234?mt=8\">app store for free</a>!",
		images: ["put-it-away-promotion.png"],
		files: [
			{
				title: "Put It Away Presentation",
				src: "put_it_away_presentation.key"
			}
		],
		link: "http://put-it-away.leehsueh.com"
	},
	{
		id: "prj-200b",
		name: "Qualitative Mini-Research Project",
		desc: "Worked with <a href=\"http://otterdotter.tumblr.com/\">Anna Ly</a> and <a href=\"http://katiemcfeely.com\">Katie McFeely</a> in interviewing a special-ed teacher and observing classes at a school for students with emotional disturbances and similar developmental disabilities. Transcribed interviews and field notes from each member were digitized, coded, analyzed, and synthesized in a mini-research paper.",
		images: [],
		files: [
			{
				title: "Deficit Perspectives in a Classroom for Emotional Disabilities",
				src: "educ200b_mini-product.pdf"
			}
		],
	},
	{
		id: "prj-cs377i",
		name: "KinExpressions",
		desc: "Worked with <a href=\"http://otterdotter.tumblr.com/\">Anna Ly</a> and Andrea Miller in CS 377I (Prototyping Interactive Systems) to develop a Kinect-based interactive system to help children with autism learn about emotions and facial expressions. This helped us bootstrap our master's project. The final product was a video prototype that was presented to a panel of industry experts.",
		images: [],
		files: [
			{
				title: "Final Presentation",
				src: "cs377i_presentation.pptx"
			},
			{
				title: "Executive Summary Report",
				src: "cs377i_executive_summary.pdf"
			}
		],
		link: "http://www.youtube.com/watch?v=SdbgAEY3zh0"
	},
	{
		id: "prj-assistive-tech",
		name: "Emotionary Prototype",
		desc: "Worked with <a href=\"http://otterdotter.tumblr.com/\">Anna Ly</a> in ENGR 210 (Perspectives in Assistive Technology) in developing a prototype iPad app to help children with autism learn about emotions and practice facial expressions. This was essentially a tablet version of the KinExpressions concept (see previous project). It's worth nothinig that the \"final\" version of Emotionary, which was developed as part of my master's project, turned out to be quite different.",
		images: [],
		files: [
			{
				title: "Final Presentation",
				src: "engr210_presentation.pptx"
			},
			{
				title: "Final Report",
				src: "engr210_report.pdf"
			}
		]
	},
	{
		id: "prj-educ328x",
		name: "EDUC 328X Final: Conceptual Understanding of the Internet",
		desc: "A 15 minute lesson I developed which incorporated the following core mechanics: analogy, elaboration, and just-in-time telling. More details on the interplay of these mechanics in the report.",
		images: ["educ328x_final.png"],
		files: [
			{
				title: "Lesson Content",
				src: "educ328x_final.pptx"
			},
			{
				title: "Report and Findings",
				src: "educ328x_final.docx"
			}
		]
	},
	{
		id: "prj-educ328x-concepts",
		name: "EDUC 328X Learning Activity/Game Concepts",
		desc: "Various assignments/ideas I did for Dan Schwartz's class to demonstrate different core mechanics. For contrasting cases I designed instruction for a tennis noob to develop more precise knowledge about tennis racquets. For elaboration I worked with <a href=\"http://michaelduong.com\">Mike Duong</a> and came up with a game for practicing the creation of memorable and secure passwords. For the teachable agent assignment, I came up with a game for becoming familiar with the exposure triangle in photography.",
		images: [],
		files: [
			{
				title: "Contrasting Cases - Tennis Racquets",
				src: "educ328x_tennis.pptx"
			},
			{
				title: "Elaboration - Star Wars: Securing the New Hope ",
				src: "educ328x_passwords.pptx"
			},
			{
				title: "Teachable Agent - Mastering the Tri-force (Exposure Triangle)",
				src: "TA-exposure-triangle.pptx"
			}
		]
	},
];