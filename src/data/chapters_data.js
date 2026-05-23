// Auto-generated data file. Do not edit directly.
export const chaptersData = [
  {
    "id": "chapter_1",
    "chapterNumber": 1,
    "title": "Chapter 1: Introduction to Software Engineering",
    "sections": [
      {
        "title": "2. Software Products",
        "content": "Software products are split into two major categories:\n1. **Generic Products**: Stand-alone systems developed by a developer and sold on the open market to any customer who wishes to buy them.\n   * *Examples*: PC software (graphics programs, project management tools), CAD software, or dentist appointments systems.\n   * *Specification Ownership*: The software developer owns the specification. Decisions on changes are made solely by the developer.\n2. **Customized Products**: Systems commissioned by a specific customer to meet their own unique business requirements.\n   * *Examples*: Embedded control systems, air traffic control software, or traffic monitoring systems.\n   * *Specification Ownership*: The customer owns the specification and decides which changes are required and when they should be implemented."
      },
      {
        "title": "3. Essential Attributes of Good Software",
        "content": "To be considered professional and high-quality, software must possess the following four essential attributes:\n1. **Maintainability**: Software must be written in such a way that it can evolve to meet the changing needs of customers. Since software change is an inevitable business requirement, maintenance costs often dominate.\n2. **Dependability and Security**: Software dependability includes a range of characteristics including reliability, security, and safety. Dependable software should not cause physical or economic damage in the event of system failure. Unauthorised users should not be able to access or damage the system.\n3. **Efficiency**: Software should not make wasteful use of system resources such as memory and processor cycles. Efficiency therefore includes responsiveness, processing time, and memory utilization.\n4. **Acceptability**: Software must be acceptable to the type of users for whom it is designed. This means it must be understandable, usable, and compatible with other systems they use."
      },
      {
        "title": "4. Software Process Activities",
        "content": "A software process is a sequence of activities that leads to the production of a software product. There are four fundamental activities common to all processes:\n1. **Software Specification**: Customers and engineers define what software is to be produced and the constraints on its operation.\n2. **Software Development**: The software is designed and programmed (implementation).\n3. **Software Validation**: The software is checked (tested) to ensure that it meets the customer's requirements.\n4. **Software Evolution**: The software is modified to reflect changing customer and market requirements."
      },
      {
        "title": "5. General Issues Affecting Software",
        "content": "Modern software engineering faces three main global challenges:\n* **Heterogeneity**: The requirement for systems to operate as distributed systems across networks that include different types of hardware, operating systems, and mobile devices.\n* **Business and Social Change**: Business and society are changing incredibly quickly. Software must be able to change rapidly to keep up with new technologies and emerging markets.\n* **Security and Trust**: Since software is integrated into all aspects of our lives, we must be able to trust that systems are secure against attacks and keep sensitive data private."
      },
      {
        "title": "6. Software Engineering Diversity and Application Types",
        "content": "There is no \"universal\" software engineering method. The techniques and tools used depend heavily on the type of application:\n* **Stand-alone applications**: Run locally on a PC, no network connection required.\n* **Interactive transaction-based applications**: Run on remote servers and are accessed by users (e.g., web-based e-commerce).\n* **Embedded control systems**: Software that controls hardware devices (e.g., numerically the most common type).\n* **Batch processing systems**: Process data in large batches (e.g., payroll systems).\n* **Entertainment systems**: Systems for personal use and entertainment.\n* **Systems for modeling and simulation**: Developed to model physical processes (e.g., weather models).\n* **Data collection systems**: Collect data from environments using sensors and transmit it to other systems.\n* **Systems of systems**: Composed of multiple separate software systems."
      },
      {
        "title": "7. Web Software Engineering Fundamentals",
        "content": "* The Web has transitioned from a document delivery platform to a full application execution platform (Cloud Computing).\n* **Software Reuse** is the dominant approach for web systems (assembling applications from pre-existing components).\n* Web systems are developed and delivered **incrementally** because it is impractical to specify all requirements in advance.\n* Rich UIs are often constrained by browser capabilities, requiring AJAX or local scripting."
      },
      {
        "title": "8. Professional Responsibility and Ethical Responsibility",
        "content": "Software engineers must behave in an honest and ethically responsible way. They have a professional responsibility to uphold code standards. The **ACM/IEEE Code of Ethics** defines Eight Principles:\n1. **Public**: Act consistently with the public interest.\n2. **Client and Employer**: Act in a manner that is in the best interests of the client and employer, consistent with the public interest.\n3. **Product**: Ensure products and related modifications meet the highest professional standards.\n4. **Judgment**: Maintain integrity and independence in professional judgment.\n5. **Management**: Leaders shall subscribe to and promote an ethical approach to management.\n6. **Profession**: Advance the integrity and reputation of the profession consistent with the public interest.\n7. **Colleagues**: Be fair to and supportive of colleagues.\n8. **Self**: Participate in lifelong learning and promote an ethical approach to the practice.\n\n#### Ethical Issues / Dilemmas:\n* **Confidentiality**: Respect confidentiality even without formal non-disclosure agreements.\n* **Competence**: Do not misrepresent competency or accept work outside your expertise.\n* **Intellectual Property Rights (IPR)**: Be aware of local copyright and patent laws.\n* **Computer Misuse**: Do not use technical skills to compromise other systems (viruses, unauthorised access).\n* **Ethical Dilemmas**: E.g., being ordered to release safety-critical software before testing is completed, or writing code for military weapons."
      },
      {
        "title": "9. Core Case Studies",
        "content": "The course uses three case studies to illustrate concepts:\n1. **Insulin Pump Control System**: An embedded, safety-critical system that collects blood sugar data and delivers precise insulin doses. High blood sugar causes long-term damage; low blood sugar is immediately life-threatening.\n2. **MHC-PMS (Mental Health Care Patient Management System)**: A clinic-based database system that stores patient records and treatment history. It must support disconnected use on laptops, maintain strict privacy, and issue safety alerts if patients pose a danger to themselves or others.\n3. **Wilderness Weather Station**: A remote, unattended data collection system powered by batteries/solar that periodically reads weather parameters and transmits them via satellite. Must support dynamic reconfiguration in case of instrument failures.\n\n---"
      }
    ],
    "keyTerms": [
      {
        "term": "Software Engineering",
        "definition": "An engineering discipline concerned with all aspects of software production from specification to maintenance."
      },
      {
        "term": "Generic Software",
        "definition": "Stand-alone software developed for sale on the open market."
      },
      {
        "term": "Customized Software",
        "definition": "Software commissioned by a specific customer for their unique needs."
      },
      {
        "term": "Maintainability",
        "definition": "The ease with which software can be modified to correct faults, improve performance, or adapt to a changed environment."
      },
      {
        "term": "Dependability",
        "definition": "A system's ability to deliver services that can be trusted, incorporating reliability, safety, and security."
      },
      {
        "term": "Software Specification",
        "definition": "The process of establishing what services are required and the constraints on the system's operation and development."
      },
      {
        "term": "Ethical Dilemma",
        "definition": "A complex situation that involves a mental conflict between moral imperatives."
      }
    ],
    "mcqs": [
      {
        "num": 1,
        "question": "Which of the following is NOT an essential attribute of good software?",
        "options": [
          "Maintainability",
          "Efficiency",
          "Low Cost",
          "Acceptability"
        ],
        "answer": "c",
        "explanation": "The four essential attributes defined by Sommerville are Maintainability, Dependability & Security, Efficiency, and Acceptability. Low cost is a business constraint, not a software product attribute."
      },
      {
        "num": 2,
        "question": "If a software system is commissioned by a specific company to handle its internal logistics, who owns the software specification?",
        "options": [
          "The software developer",
          "The customer",
          "Both equally",
          "The public"
        ],
        "answer": "b",
        "explanation": "For customized products, the customer owns the specification. Decisons on changes are made by the customer."
      },
      {
        "num": 3,
        "question": "A system that collects temperature data in the Sahara Desert and uploads it via satellite is best classified as which type of application?",
        "options": [
          "Stand-alone application",
          "Batch processing system",
          "Data collection system",
          "Entertainment system"
        ],
        "answer": "c",
        "explanation": "It collects environmental data using sensors and transmits it to another system for processing."
      },
      {
        "num": 4,
        "question": "Under which ACM/IEEE Code of Ethics principle is a software engineer expected to participate in lifelong learning?",
        "options": [
          "Public",
          "Product",
          "Colleagues",
          "Self"
        ],
        "answer": "d",
        "explanation": "The \"Self\" principle states that software engineers shall participate in lifelong learning regarding the practice of their profession."
      }
    ],
    "shortAnswers": [
      {
        "num": 5,
        "question": "Explain the difference between Computer Science and Software Engineering.",
        "solution": "**Computer Science** is concerned with the theories and methods that underlie computers and software systems (e.g., algorithms, computational theory). **Software Engineering** is concerned with the practicalities of producing and delivering reliable, cost-effective software systems to solve real-world problems under constraints."
      },
      {
        "num": 6,
        "question": "What are the four fundamental software process activities?",
        "solution": "The four fundamental activities are:\n   * **Software Specification**: Defining what the system should do.\n   * **Software Development**: Designing and writing the code.\n   * **Software Validation**: Testing the system to ensure it meets requirements.\n   * **Software Evolution**: Modifying the system over time."
      },
      {
        "num": 7,
        "question": "Scenario: Your manager asks you to bypass final security testing for a banking app because the release deadline is in two hours. Identify which ACM/IEEE ethical principles are in conflict here and explain how you should respond.\n\n---",
        "solution": "**Ethical Conflict**:\n   * Principle 1 (Public) and Principle 3 (Product) are in conflict with Principle 2 (Client and Employer - meeting deadlines).\n   * Bypassing security testing violates the public interest (safety/security of user financial data) and compromises product quality.\n   * **Response**: You should refuse to bypass the testing, explain the severe risks (safety, privacy, and economic damage), and document your concerns. The public interest must always take precedence over meeting a tight deadline."
      }
    ]
  },
  {
    "id": "chapter_2",
    "chapterNumber": 2,
    "title": "Chapter 2: Software Processes",
    "sections": [
      {
        "title": "2. Plan-Driven vs. Agile Processes",
        "content": "* **Plan-Driven Processes**: All activities are planned in advance, and progress is measured against this detailed plan.\n* **Agile Processes**: Planning is incremental, and it is designed to easily reflect changing customer requirements.\n* *Note*: Most practical software processes incorporate elements of both approaches. There is no universally right or wrong process."
      },
      {
        "title": "3. General Software Process Models",
        "content": "#### A. The Waterfall Model\n* A plan-driven model where the project is divided into separate, sequential phases:\n  1. *Requirements Analysis and Definition*\n  2. *System and Software Design*\n  3. *Implementation and Unit Testing*\n  4. *Integration and System Testing*\n  5. *Operation and Maintenance*\n* **Drawback**: Inflexibility. It is difficult to accommodate change once the process is underway. A phase must be completed before the next can begin.\n* **When to use**: Only when requirements are well-understood, stable, and changes will be limited (e.g., large systems engineering projects developed across multiple sites where planning coordinates the teams).\n\n#### B. Incremental Development\n* Interleaves the activities of specification, development, and validation. Can be plan-driven or agile.\n* **Benefits**:\n  * Cost of accommodating changing customer requirements is reduced (less rework).\n  * Easier to get customer feedback (using demonstrations of active increments).\n  * Rapid delivery and deployment of useful software to the customer.\n* **Problems**:\n  * The process is not visible (managers lack regular deliverables to measure progress without documentation overhead).\n  * System structure degrades as increments are added, unless time and money are spent on **refactoring**.\n\n#### C. Integration and Configuration (Reuse-Oriented)\n* Based on systematic reuse where systems are assembled from existing components or Commercial-off-the-shelf (COTS) systems.\n* **Process Stages**: Component analysis $\\rightarrow$ Requirements modification $\\rightarrow$ System design with reuse $\\rightarrow$ Development and integration.\n* **Component Types**: Web services (remote invocation), Object packages (.NET/J2EE frameworks), and Stand-alone COTS systems."
      },
      {
        "title": "4. Details of Process Activities",
        "content": "#### A. Requirements Engineering (Specification)\n1. **Feasibility Study**: Assessment of technical and financial viability.\n2. **Requirements Elicitation and Analysis**: Gathering stakeholder expectations.\n3. **Requirements Specification**: Detailing requirements in a formal document.\n4. **Requirements Validation**: Checking that requirements are realistic and consistent.\n\n#### B. Software Design and Implementation\n* Converts the specification into an executable system.\n* **Design Activities**:\n  1. *Architectural Design*: Identifying system structure, main components, and distribution.\n  2. *Interface Design*: Defining boundaries between components.\n  3. *Component Design*: Specifying how each component operates.\n  4. *Database Design*: Designing data structures and representation.\n\n#### C. Software Validation (Verification & Validation - V&V)\n* Shows that a system conforms to its specification and meets customer needs. Includes reviews and testing.\n* **Stages of Testing**:\n  1. *Development/Component Testing*: Testing individual functions, objects, or modules.\n  2. *System Testing*: Testing the system as a whole (verifying emergent properties).\n  3. *Acceptance Testing*: Testing with real customer data to verify business fitness.\n\n#### D. Software Evolution\n* Modifying existing software to meet new requirements. Development and evolution are increasingly merged since few systems are written entirely from scratch."
      },
      {
        "title": "5. Coping with Change",
        "content": "Change is inevitable due to business changes, new technology, and changing platforms. Rework is costly. We reduce rework costs via:\n* **Change Avoidance**: Activities that anticipate changes before rework occurs.\n  * *Prototyping*: Creating an initial, throw-away version of the system to demonstrate concepts and elicit requirements.\n* **Change Tolerance**: Designing the process so changes are cheap.\n  * *Incremental Development & Delivery*: Implementing changes in increments not yet built.\n\n#### Software Prototyping\n* A prototype is used for: Elicitation and validation of requirements, exploring design options/UI, and back-to-back testing.\n* **Throw-away Prototypes**: Must be discarded because they lack non-functional quality (reliability/security), are undocumented, their structure is degraded by rapid changes, and they do not meet organizational standards.\n\n#### Incremental Delivery\n* Deploying system increments for real end-user operation.\n* *Advantages*: Early business value, early feedback, lower failure risk, most-used services get most testing.\n* *Problems*: Hard to identify common, basic facilities needed by all increments early on; conflicts with traditional fixed-price procurement contracts."
      },
      {
        "title": "6. Iterative Process Models",
        "content": "#### A. Boehm's Spiral Model\n* A risk-driven process represented as a spiral rather than a linear sequence. Loops in the spiral represent phases, and risks are explicitly assessed and resolved.\n* **Four sectors in each loop**:\n  1. *Objective Setting*: Identify phase goals.\n  2. *Risk Assessment and Reduction*: Analyze and resolve risks (e.g., build a prototype).\n  3. *Development and Validation*: Choose an appropriate development model.\n  4. *Planning*: Review progress and plan the next spiral cycle.\n\n#### B. Rational Unified Process (RUP)\n* A modern generic process model derived from UML. It has three perspectives:\n  * *Dynamic*: Phases over time.\n  * *Static*: Workflows and activities.\n  * *Practice*: Good software engineering practices.\n* **RUP Dynamic Phases**:\n  1. **Inception**: Establish the business case.\n  2. **Elaboration**: Understand the problem domain and design the system architecture.\n  3. **Construction**: Design, write code, and test the software.\n  4. **Transition**: Deploy the system to the operating environment.\n* **RUP Six Good Practices**:\n  1. *Develop software iteratively*\n  2. *Manage requirements*\n  3. *Use component-based architectures*\n  4. *Visually model software (UML)*\n  5. *Verify software quality*\n  6. *Control changes (configuration management)*\n\n---"
      }
    ],
    "keyTerms": [
      {
        "term": "Software Process Model",
        "definition": "An abstract representation of a software process from a specific perspective."
      },
      {
        "term": "COTS",
        "definition": "Commercial-off-the-shelf software systems that can be purchased and configured."
      },
      {
        "term": "Refactoring",
        "definition": "Reorganizing and simplifying software code without changing its external behavior to improve structure."
      },
      {
        "term": "V & V",
        "definition": "Verification (\"Are we building the product right?\") and Validation (\"Are we building the right product?\")."
      },
      {
        "term": "Throw-away Prototype",
        "definition": "A prototype built quickly to resolve requirements uncertainty and discarded afterwards."
      },
      {
        "term": "Risk-driven Development",
        "definition": "An approach where software processes are guided by identifying, analyzing, and mitigating project risks."
      }
    ],
    "mcqs": [
      {
        "num": 1,
        "question": "Which software process model is most appropriate when requirements are completely stable and the project is split among multiple sites?",
        "options": [
          "Incremental development",
          "Agile Scrum",
          "The Waterfall model",
          "Boehm's spiral model"
        ],
        "answer": "c",
        "explanation": "Its plan-driven, structured nature makes it suitable for coordinate-intensive multi-site projects with stable requirements."
      },
      {
        "num": 2,
        "question": "In which RUP phase is the primary goal to establish the business case and define the scope of the project?",
        "options": [
          "Inception",
          "Elaboration",
          "Construction",
          "Transition"
        ],
        "answer": "a",
        "explanation": "The inception phase focuses on establishing the business case and system scope."
      },
      {
        "num": 3,
        "question": "What is the main reason for discarding a throw-away prototype?",
        "options": [
          "It costs too much to deploy.",
          "It does not meet organizational quality standards, is undocumented, and lacks non-functional robustness.",
          "The customer is not allowed to see it.",
          "It can only run on local host machines."
        ],
        "answer": "b",
        "explanation": "Prototypes are optimized for quick feedback, not for long-term production quality."
      },
      {
        "num": 4,
        "question": "Which sector of Boehm's Spiral Model involves analyzing alternatives and identifying/resolving project risks?",
        "options": [
          "Objective setting",
          "Risk assessment and reduction",
          "Development and validation",
          "Planning"
        ],
        "answer": "b",
        "explanation": "This sector assesses risks and puts activities (like prototyping or simulation) in place to reduce them."
      }
    ],
    "shortAnswers": [
      {
        "num": 5,
        "question": "What are the four stages of the RUP dynamic lifecycle?",
        "solution": "The four stages are:\n   * **Inception**: Establish the business case and scope.\n   * **Elaboration**: Understand problem domain, establish system architecture, and identify critical risks.\n   * **Construction**: System design, coding, and testing.\n   * **Transition**: Deploy the system in its operating environment for end-user operation."
      },
      {
        "num": 6,
        "question": "Contrast \"Change Avoidance\" and \"Change Tolerance\", providing an example of each.",
        "solution": "**Change Avoidance**: Anticipating changes before significant rework is done. *Example*: Developing a throw-away user interface prototype to validate user needs before writing back-end code.\n   * **Change Tolerance**: Designing the process so changes can be accommodated at low cost. *Example*: Using an incremental process where new requirements are simply scheduled into future, unbuilt increments without disrupting finished code."
      },
      {
        "num": 7,
        "question": "Scenario: A hospital wants to develop a Mental Health Care Patient Management System (MHC-PMS). Explain why a pure Agile incremental delivery process might conflict with the hospital's procurement contract, and outline how they could combine plan-driven and incremental techniques.\n\n---",
        "solution": "**Conflict**: Most hospital procurement contracts require a fixed-price contract based on a complete system specification upfront. A pure agile incremental delivery process, where requirements evolve dynamically, does not provide this complete specification.\n   * **Hybrid Approach**: The hospital can use a plan-driven approach for the Inception and Elaboration phases to establish a solid system architecture and a comprehensive requirements document (specification). Once the contract is signed based on this specification, the construction phase can be executed using an iterative, incremental delivery process to build and test components in prioritised increments."
      }
    ]
  },
  {
    "id": "chapter_3",
    "chapterNumber": 3,
    "title": "Chapter 3: Agile Software Development",
    "sections": [
      {
        "title": "2. The Agile Manifesto and Principles",
        "content": "Agile methods emerged in response to the heavy, document-dominated process overheads of the 1980s and 1990s.\n* **The Agile Manifesto Core Values**:\n  1. **Individuals and interactions** over processes and tools.\n  2. **Working software** over comprehensive documentation.\n  3. **Customer collaboration** over contract negotiation.\n  4. **Responding to change** over following a plan.\n* **Five Key Agile Principles**:\n  1. **Customer Involvement**: Customers must be closely involved in the development process to provide and prioritize new requirements.\n  2. **Incremental Delivery**: Software is developed in increments, with the customer specifying the decisions in each.\n  3. **People Not Process**: The skills of the development team should be recognized and leveraged. Teams should be left to develop their own ways of working.\n  4. **Embrace Change**: Expect system requirements to change and design the system to accommodate this.\n  5. **Maintain Simplicity**: Focus on active simplicity in both the software being developed and in the development process."
      },
      {
        "title": "3. Plan-Driven vs. Agile Selection Factors",
        "content": "Deciding on the balance between plan-driven and agile processes depends on:\n* **System Size**: Agile is best for small, co-located teams. Large systems require more planning and structure.\n* **System Type**: Real-time or safety-critical systems with complex timing/safety requirements need more up-front analysis and design documentation.\n* **Lifetime**: Long-lifetime systems require documentation to communicate design intent to future maintainers.\n* **Team Organization**: Distributed or outsourced teams need documents to coordinate across boundaries.\n* **Culture**: Bureaucratic organizations have a natural cultural alignment with plan-driven approaches.\n* **Skill Levels**: Agile methods require highly skilled developers who can manage design and refactoring on the fly.\n* **Regulation**: Systems subject to external safety approvals (e.g., medical devices, avionics) require detailed documentation for their safety cases."
      },
      {
        "title": "4. Extreme Programming (XP)",
        "content": "Extreme Programming is a well-known agile method that takes an \"extreme\" approach to iterative development.\n* **XP Practices**:\n  * *Small, frequent releases* (e.g., every 2 weeks).\n  * *Continuous integration* (system built multiple times a day).\n  * *All tests must run* before code is checked in.\n  * *Collective ownership* of code.\n  * *Sustainable pace* (no overtime).\n* **Requirements (User Stories)**:\n  * Requirements are written on cards as **User Stories** (scenarios).\n  * Developers break them down into **Implementation Tasks** to estimate cost and schedule.\n  * The customer chooses which stories are prioritized for the next release.\n* **Refactoring**:\n  * XP replaces \"design for change\" with **constant refactoring**.\n  * Programmers constantly clean up, simplify, and restructure the code to make future changes easy, removing duplicate code and tidying hierarchies."
      },
      {
        "title": "5. Testing in XP",
        "content": "Testing is central to XP. It features:\n1. **Test-First Development**: Writing tests as executable programs *before* writing the actual application code. This clarifies the requirements before implementation.\n2. **Incremental Test Development**: Test cases are derived from user stories.\n3. **Customer Involvement**: The customer helps write and validate acceptance tests for the stories.\n4. **Test Automation**: Tests are executed automatically via frameworks (e.g., JUnit). Running the full test suite acts as regression testing to ensure new changes do not break existing functionality.\n* **XP Testing Difficulties**: Programmers may take shortcuts (incomplete tests), complex UI workflows are hard to write unit tests for, and it is difficult to measure test coverage completeness."
      },
      {
        "title": "6. Pair Programming",
        "content": "In XP, programmers work in pairs, sitting together at a single workstation to write code.\n* **Advantages**:\n  * Supports collective ownership and responsibility.\n  * Spreads system knowledge across the team, reducing risk if a member leaves.\n  * Serves as an informal, continuous peer review process.\n  * Encourages refactoring (since the entire team benefits from clean code).\n  * Pair programming productivity is comparable to two developers working independently, but it yields higher-quality code."
      },
      {
        "title": "7. Agile Project Management: Scrum",
        "content": "Scrum is an agile project management framework focused on managing iterative development rather than engineering practices.\n* **Scrum Phases**:\n  1. **Outline Planning**: Establish general project objectives and design the software architecture.\n  2. **Sprint Cycles**: A series of iterations (sprints) where each develops a system increment.\n  3. **Project Closure**: Complete documentation (help systems, manuals) and review lessons learned.\n* **The Sprint Cycle**:\n  * Sprints are fixed-length (usually 2–4 weeks).\n  * Features are selected from the **Product Backlog** (master list of work).\n  * Once the sprint starts, requirements are frozen.\n  * The development team is isolated from external distractions.\n  * **Scrum Master**: A facilitator who organizes daily meetings, tracks the backlog, removes blockers, and protects the team from external interference.\n  * **Daily Scrum**: Short meetings where team members report what they did yesterday, what they will do today, and any blocking problems.\n* **Scrum Benefits**: Breakdown into manageable chunks, visibility, on-time delivery of increments, and establishing customer trust."
      },
      {
        "title": "8. Scaling Agile Methods",
        "content": "* **Scaling Up**: Using agile for large systems that cannot be built by a single small team. Requires:\n  * More up-front architectural design and documentation.\n  * Mechanisms for cross-team communication (phone/video conferences, scrum of scrums).\n  * Frequent (but not necessarily daily) system builds.\n* **Scaling Out**: Introducing agile across a large, traditional organization.\n  * *Challenges*: Project manager reluctance, rigid quality standards, variance in team skills, and cultural resistance to change.\n\n---"
      }
    ],
    "keyTerms": [
      {
        "term": "Agile Manifesto",
        "definition": "A declaration of core values and principles for agile software development."
      },
      {
        "term": "User Story",
        "definition": "A high-level description of a system requirement written from the perspective of an end-user."
      },
      {
        "term": "Regression Testing",
        "definition": "Re-running testing suites to verify that new code changes have not broken existing functionality."
      },
      {
        "term": "Product Backlog",
        "definition": "A prioritized list of features, bug fixes, and tasks representing the work to be done in a project."
      },
      {
        "term": "Scrum Master",
        "definition": "A facilitator in Scrum responsible for removing blockers and ensuring the team follows Scrum practices."
      },
      {
        "term": "Brownfield System",
        "definition": "A software system that must integrate and interact with pre-existing (legacy) systems."
      }
    ],
    "mcqs": [
      {
        "num": 1,
        "question": "Which of the following values is prioritized on the LEFT in the Agile Manifesto?",
        "options": [
          "Following a plan",
          "Customer collaboration",
          "Comprehensive documentation",
          "Processes and tools"
        ],
        "answer": "b",
        "explanation": "The Agile Manifesto values customer collaboration over contract negotiation."
      },
      {
        "num": 2,
        "question": "In Scrum, what is the role of the Scrum Master?",
        "options": [
          "To assign tasks to programmers and manage the project budget.",
          "To write the customer user stories and evaluate testing.",
          "To act as a facilitator, remove obstacles, and protect the team from external distractions.",
          "To define the software architecture and system interfaces."
        ],
        "answer": "c",
        "explanation": "The Scrum Master is a facilitator, not a traditional manager."
      },
      {
        "num": 3,
        "question": "Which XP practice involves programmers sitting together at the same workstation to write code?",
        "options": [
          "Incremental delivery",
          "Pair programming",
          "Refactoring",
          "Test-first development"
        ],
        "answer": "b",
        "explanation": "In pair programming, two developers sit at one workstation to write and review code."
      },
      {
        "num": 4,
        "question": "When scaling agile to \"brownfield systems\", what is a major challenge?",
        "options": [
          "Programmers are not allowed to use Git.",
          "User interfaces are constrained by legacy screens.",
          "The new software must interact with multiple pre-existing legacy systems with rigid interfaces.",
          "Scrum is not compatible with database systems."
        ],
        "answer": "c",
        "explanation": "Brownfield systems must interface with existing legacy software, limiting requirement flexibility."
      }
    ],
    "shortAnswers": [
      {
        "num": 5,
        "question": "Explain the concept of \"Test-First Development\" and its main benefits.",
        "solution": "**Test-First Development** involves writing automated test cases (using JUnit or a similar framework) before writing the actual code to implement the feature.\n   * **Benefits**:\n     * Clarifies the requirements and interface of the code before writing it.\n     * Prevents code regression because the tests can be run automatically after every modification.\n     * Simplifies debugging because errors are detected immediately when code fails a test."
      },
      {
        "num": 6,
        "question": "What are the three phases of Scrum project management?",
        "solution": "The three phases are:\n   * **Outline Planning**: Establish general objectives and design the system architecture.\n   * **Sprint Cycles**: A series of iterations (sprints) that build functional system increments.\n   * **Project Closure**: Wrap up the project, complete manuals/documentation, and assess lessons learned."
      },
      {
        "num": 7,
        "question": "Scenario: A software company is developing a customized real-time flight control system for a new drone. Detail three project characteristics that would favor a plan-driven process over an agile process for this project.\n\n---",
        "solution": "**Drone Flight Control System Plan-Driven Factors**:\n   * **System Type**: It is a safety-critical and real-time control system. It requires detailed up-front design and timing analysis to ensure the drone does not crash, which is a major risk.\n   * **External Regulation**: The software will likely require approval from an aviation authority (like the FAA or local CAA), which mandates extensive, detailed safety cases and specifications.\n   * **Detailed Up-Front Architecture**: Real-time hardware control needs precise, predictable interfaces and architectures, which are difficult to change incrementally."
      }
    ]
  },
  {
    "id": "chapter_4",
    "chapterNumber": 4,
    "title": "Chapter 4: Requirements Engineering",
    "sections": [
      {
        "title": "2. User vs. System Requirements",
        "content": "* **User Requirements**: High-level abstract statements in natural language, supplemented by diagrams, describing the services the system will provide and its operational constraints. Written primarily for the customer.\n* **System Requirements**: Detailed descriptions of the system's functions, services, and operational constraints. It defines exactly what is to be implemented and often forms part of the contract between the developer and client."
      },
      {
        "title": "3. Functional and Non-Functional Requirements",
        "content": "* **Functional Requirements**: Statements of the services the system must provide, how it should react to specific inputs, and how it should behave in specific situations. They can also state what the system *should not* do.\n  * *Example (MHC-PMS)*: \"A user shall be able to search the appointments lists for all clinics.\"\n* **Non-Functional Requirements**: Constraints on the services or functions offered by the system, such as performance, reliability, security, response times, or compliance with standards.\n  * These usually apply to the **system as a whole** rather than individual functions. Failing a non-functional requirement can make the entire system useless.\n* **Requirements Imprecision**: Ambiguous requirements cause bugs. For instance, \"search\" can be interpreted as \"search all clinics\" by the user, but implemented as \"choose clinic, then search\" by the developer.\n* **Completeness and Consistency**: In theory, requirements must be:\n  * **Complete**: Describe all required facilities.\n  * **Consistent**: Free of conflicts or contradictions.\n  * *Note*: In practice, producing a completely complete and consistent requirements document is impossible."
      },
      {
        "title": "4. Classification of Non-Functional Requirements (NFR)",
        "content": "1. **Product Requirements**: Specify how the delivered product must behave (e.g., speed, memory usage, reliability).\n   * *Example*: \"The MHC-PMS database shall be available 99.9% of the time during clinic working hours.\"\n2. **Organizational Requirements**: Derived from organizational policies and procedures (e.g., process standards, programming languages, IDE constraints).\n   * *Example*: \"All code must be written in Java and comply with the hospital's coding style guidelines.\"\n3. **External Requirements**: Derived from factors external to the system and development process (e.g., legislative requirements, data protection laws, safety certifications).\n   * *Example*: \"The system must fully comply with local medical data privacy laws (POPIA / GDPR).\"\n\n#### Goals vs. Verifiable Non-Functional Requirements\n* A **Goal** is a general, non-verifiable intention of the user (e.g., \"The system should be easy to use\").\n* A **Verifiable Non-Functional Requirement** is a statement using an objective measure that can be tested.\n  * *Goal*: \"The system should be easy to use by medical staff.\"\n  * *Verifiable Requirement*: \"Medical staff shall be able to use all system functions after four hours of training, making an average of no more than two errors per hour of use.\""
      },
      {
        "title": "5. Domain Requirements",
        "content": "* Requirements derived directly from the system's operational domain (e.g., a train control system must calculate deceleration based on track gradients).\n* If domain requirements are not met, the system may be completely unworkable.\n* **Problems**:\n  * *Understandability*: Written in domain-specific terminology that software engineers may not understand.\n  * *Implicitness*: Domain experts understand the rules so well they often forget to make them explicit."
      },
      {
        "title": "6. The Software Requirements Document",
        "content": "* The official statement of what developers must implement. It is **not** a design document. It must focus on **WHAT** the system must do, not **HOW** it does it.\n* Agile systems typically have less detailed requirements documents (using user stories), whereas critical systems or systems developed by distributed teams require formal, detailed documents.\n* **Writing Guidelines**:\n  * Use a standard format.\n  * Use **shall** for mandatory requirements; use **should** for desirable requirements.\n  * Avoid technical jargon.\n  * Include a rationale for each requirement."
      },
      {
        "title": "7. Ways of Specifying Requirements",
        "content": "* **Natural Language**: Universal and expressive, but prone to ambiguity, confusion (mixing functional/non-functional), and amalgamation (combining multiple requirements into one).\n* **Structured Specifications**: Writing requirements in a limited, standardized template (e.g., form-based specifications).\n* **Form-Based Specifications**: Include: Function name, Inputs/Sources, Outputs/Destinations, Required Info, Action description, Pre/Post-conditions, and Side effects.\n* **Tabular Specifications**: Using tables to clarify alternative courses of action (e.g., calculating insulin dosing based on rate of change of blood sugar)."
      },
      {
        "title": "8. Requirements Elicitation and Analysis",
        "content": "The process of discovering requirements by working with stakeholders.\n* **Elicitation Stages**: Discovery $\\rightarrow$ Classification and Organization $\\rightarrow$ Prioritization and Negotiation $\\rightarrow$ Specification.\n* **Stakeholder**: Any person or organization affected by the system (e.g., patients, doctors, nurses, receptionists, IT staff, ethics managers).\n* **Elicitation Techniques**:\n  1. **Interviews**: Closed (pre-set questions) or Open (exploring issues). Good for overall understanding, but bad for uncovering domain requirements.\n  2. **Scenarios**: Real-life examples of system use. Must include: start state, normal event flow, what can go wrong, concurrent activities, and end state.\n  3. **Use Cases**: Scenario-based UML technique modeling actors and interactions (visual diagrams + detailed tables).\n  4. **Ethnography**: Observation of actual work practices by a social scientist. Excellent for finding requirements from actual cooperative work, but cannot identify new features."
      },
      {
        "title": "9. Requirements Validation",
        "content": "Checking that the requirements define the system the customer actually wants.\n* *Error Cost*: Fixing a requirements error after delivery can cost up to **100 times** more than fixing a coding bug.\n* **Validation Checks**: Validity, Consistency, Completeness, Realism, and Verifiability.\n* **Validation Techniques**: Requirements reviews (manual reviews by client and contractor), Prototyping, and Test-case generation.\n* **Review Checks**: Verifiability, Comprehensibility, Traceability (origin of requirement), and Adaptability."
      },
      {
        "title": "10. Requirements Management",
        "content": "The process of managing and controlling changing requirements during development and use.\n* **Why Requirements Change**: Shifting business/technical environments, differences between customer priorities and user needs, and diverse stakeholders with conflicting needs.\n* **Management Decisions**: Requirements identification (unique IDs), Change management process, Traceability policies, and Tool support.\n* **Change Management Process**:\n  1. *Problem analysis and change specification*: Verify that the proposed change is valid.\n  2. *Change analysis and costing*: Assess impact using traceability data and decide whether to proceed.\n  3. *Change implementation*: Update the requirements document, design, and code.\n\n---"
      }
    ],
    "keyTerms": [
      {
        "term": "System Requirement",
        "definition": "A structured document defining detailed descriptions of system functions, services, and operational constraints."
      },
      {
        "term": "Shall vs. Should",
        "definition": "\"Shall\" denotes a mandatory system requirement; \"should\" denotes a desirable but non-mandatory requirement."
      },
      {
        "term": "Stakeholder",
        "definition": "Anyone who has a direct or indirect interest in the system, its development, or its operational outcomes."
      },
      {
        "term": "Ethnography",
        "definition": "An observational technique used to understand social and organizational requirements by watching how users actually work."
      },
      {
        "term": "Traceability",
        "definition": "The ability to trace a requirement from its origin, through design and implementation, to testing."
      }
    ],
    "mcqs": [
      {
        "num": 1,
        "question": "\"The medical database must respond to search queries within 1.5 seconds under peak loads.\" This is an example of what type of requirement?",
        "options": [
          "Functional requirement",
          "Product non-functional requirement",
          "External non-functional requirement",
          "Domain requirement"
        ],
        "answer": "b",
        "explanation": "It constrains a product's runtime performance (response time)."
      },
      {
        "num": 2,
        "question": "Why is natural language commonly used for writing user requirements?",
        "options": [
          "It allows developers to generate code automatically.",
          "It is expressive, intuitive, and can be understood by non-technical customers and users.",
          "It is completely free of ambiguity.",
          "It prevents requirements from changing during development."
        ],
        "answer": "b",
        "explanation": "Natural language provides a universal communication channel between clients and developers."
      },
      {
        "num": 3,
        "question": "Which requirements discovery technique is best suited for understanding how workers cooperate and handle actual work practices in a real environment?",
        "options": [
          "Closed interviews",
          "Use case modeling",
          "Ethnography",
          "Rapid prototyping"
        ],
        "answer": "c",
        "explanation": "Ethnography relies on direct observation of work practices, making it ideal for cooperative work analysis."
      },
      {
        "num": 4,
        "question": "What is the correct order of the stages in the Requirements Change Management process?",
        "options": [
          "Change implementation $\\rightarrow$ Change analysis and costing $\\rightarrow$ Problem analysis and change specification.",
          "Problem analysis and change specification $\\rightarrow$ Change analysis and costing $\\rightarrow$ Change implementation.",
          "Change costing $\\rightarrow$ Change implementation $\\rightarrow$ Verification.",
          "Requirements elicitation $\\rightarrow$ Validation $\\rightarrow$ Change coding."
        ],
        "answer": "b",
        "explanation": "This is the standard structured process for control of changes."
      }
    ],
    "shortAnswers": [
      {
        "num": 5,
        "question": "What is the difference between a user requirement and a system requirement?",
        "solution": "**User Requirements** are high-level statements in natural language and diagrams of what services the system should provide and its constraints. They are written for customers. **System Requirements** are detailed descriptions of system functions, services, and operational constraints, serving as a contract-level technical document for developers."
      },
      {
        "num": 6,
        "question": "Identify the five requirements checks that must be performed during requirements validation.",
        "solution": "The five checks are:\n   * **Validity**: Checking if the function matches the customer's actual business need.\n   * **Consistency**: Checking for conflicts or contradictions between requirements.\n   * **Completeness**: Checking if all requested functions are included.\n   * **Realism**: Checking if the system can be built within budget, technology, and schedule constraints.\n   * **Verifiability**: Checking if the requirement can be objectively tested."
      },
      {
        "num": 7,
        "question": "Scenario: Write one functional requirement and one verifiable non-functional requirement for the Insulin Pump Control System. Explain how the non-functional requirement can be verified.\n\n---",
        "solution": "**Insulin Pump Control System Requirements**:\n   * **Functional**: \"The system shall calculate the insulin dose based on the rate of change of blood sugar and command the micro-pump to deliver the dose.\"\n   * **Verifiable Non-Functional**: \"The micro-pump hardware signal to inject insulin must be executed within 500 milliseconds of the completion of the dose calculation.\"\n   * **Verification**: This can be verified by connecting an oscilloscope to the micro-pump's control signal pin, simulating a blood sugar change, and measuring the time delta between the calculations completing in the software and the physical control signal changing state."
      }
    ]
  },
  {
    "id": "chapter_5",
    "chapterNumber": 5,
    "title": "Chapter 5: System Modeling",
    "sections": [
      {
        "title": "2. Four System Perspectives",
        "content": "1. **External Perspective**: Modeling the context or environment in which the system operates.\n2. **Interaction Perspective**: Modeling the interactions between the system and its environment, or between internal system components.\n3. **Structural Perspective**: Modeling the organization of the system or the static structure of the data processed by the system.\n4. **Behavioral Perspective**: Modeling the dynamic behavior of the system and how it responds to events or data stimuli."
      },
      {
        "title": "3. Key UML Diagram Types",
        "content": "* **Activity Diagrams**: Show the sequential activities involved in a process or data flow.\n* **Use Case Diagrams**: Show the interactions between a system and external actors (people or other systems).\n* **Sequence Diagrams**: Show time-ordered interactions between actors and system objects, or between internal system objects.\n* **Class Diagrams**: Show the object classes in the system and the associations (relationships) between them.\n* **State Diagrams**: Show how the system reacts to internal and external events using states and transitions."
      },
      {
        "title": "4. Context and Boundary Models",
        "content": "* **Context Models**: Show what lies outside the system boundary. Defining system boundaries is often a political and organizational judgment rather than a purely technical one.\n* **System Boundary**: Establishes what is inside and what is outside the system.\n* **Process Models**: While context models show neighboring systems, UML activity diagrams are used as process models to show how the system fits into broader business workflows (e.g., the process of involuntary patient detention in the MHC-PMS)."
      },
      {
        "title": "5. Interaction Modeling",
        "content": "* **Use Case Modeling**:\n  * Originally developed for requirements elicitation.\n  * Represents a discrete task involving external interaction.\n  * *Actors* can be people or other systems.\n  * Diagrammatic use cases must be supported by detailed **tabular descriptions** (defining Actors, Description, Inputs, Outputs, Normal Flow, and What can go wrong).\n* **Sequence Diagrams**:\n  * Model interactions during a use case.\n  * Objects/Actors are at the top; vertical dotted lines are **lifelines**; narrow rectangles represent **activation boxes** (indicating when an object is active).\n  * Messages are represented by solid arrows with filled arrowheads; return messages are dashed arrows.\n  * **Combined fragments** represent logic, such as `alt` (conditionals/branches) or `loop` (iterations)."
      },
      {
        "title": "6. Structural Modeling",
        "content": "* Shows the organization of system components and their relationships.\n* **Class Diagrams**: Show static classes and associations.\n  * In early stages, object classes represent real-world entities (e.g., `Patient`, `Doctor`, `Consultation`, `Prescription` in MHC-PMS).\n* **Generalization**:\n  * An inheritance relationship where subclasses inherit attributes and operations from a superclass and add their own specific details.\n  * Shown in UML using an **open triangle pointing to the superclass**.\n* **Aggregation**:\n  * A \"part-of\" relationship showing how a composite class is composed of other classes.\n  * Shown in UML using a **hollow diamond at the composite class end**.\n  * *Example*: A `PatientRecord` class aggregates the `Patient` class and multiple `Consultation` instances."
      },
      {
        "title": "7. Behavioral Modeling",
        "content": "Models the dynamic runtime behavior of a system. Controlled by two types of stimuli:\n1. **Data-Driven Modeling**: Primarily for business data systems. Controlled by input data, showing the sequence of actions to process inputs and generate outputs.\n   * *Example*: UML activity diagrams showing data processing steps (e.g., weather data collection).\n2. **Event-Driven Modeling**: Primarily for real-time systems. Controlled by events, based on the assumption that the system has a finite number of states.\n   * *Example*: UML state diagrams (Statecharts) showing system states as nodes and events as arcs.\n   * *Microwave Oven Example*: States include `Waiting`, `Full Power`, `Cooking`, `Disabled`. Stimuli include `timer`, `start`, `stop`, `door open`."
      },
      {
        "title": "8. Model-Driven Engineering (MDE)",
        "content": "An approach where models, rather than source code programs, are the principal outputs of the development process. Executable programs are generated automatically.\n* **Model-Driven Architecture (MDA)**: An MDE precursor using three abstraction levels:\n  1. **Computation Independent Model (CIM)**: Domain model mapping real-world business abstractions.\n  2. **Platform Independent Model (PIM)**: Models system operation without reference to implementation technologies (uses UML class and state diagrams).\n  3. **Platform Specific Model (PSM)**: PIM transformed with platform-specific details (separate PSM for Java, .NET, SQL, etc.).\n* **Executable UML (xUML)**: A subset of UML 2 allowing automated transformation. Restricts models to:\n  * *Domain models* (system boundary and entities).\n  * *Class models* (attributes and operations).\n  * *State models* (lifecycles for each class).\n  * Uses Object Constraint Language (OCL) or action languages to specify behaviors.\n* **Agile vs. MDE**: Agile prioritizes working code over models. Extensive up-front design in MDE contradicts the Agile Manifesto, unless code generation is 100% automated.\n\n---"
      }
    ],
    "keyTerms": [
      {
        "term": "System Boundary",
        "definition": "The boundary between a system and its environment, defining what is inside the system and what is external."
      },
      {
        "term": "Combined Fragment",
        "definition": "A construct in sequence diagrams used to group messages together to show loops (`loop`) or conditionals (`alt`)."
      },
      {
        "term": "Association",
        "definition": "A static relationship between two classes in a class diagram, representing a link."
      },
      {
        "term": "Generalization",
        "definition": "A relationship where a subclass inherits attributes and behaviors from a superclass."
      },
      {
        "term": "Aggregation",
        "definition": "A relationship where one class is a collection or container of other classes."
      },
      {
        "term": "State Machine",
        "definition": "A behavioral model representing a system in terms of its states and the event transitions between them."
      },
      {
        "term": "PIM",
        "definition": "Platform Independent Model, representing system logic without technology-specific details."
      }
    ],
    "mcqs": [
      {
        "num": 1,
        "question": "In a UML sequence diagram, what does a dashed arrow represent?",
        "options": [
          "A synchronous method call",
          "An asynchronous event trigger",
          "A return message from a receiver back to a sender",
          "A new object instantiation"
        ],
        "answer": "c",
        "explanation": "Solid arrows represent calls; dashed arrows represent returns."
      },
      {
        "num": 2,
        "question": "Which UML relationship is represented by a line with an open triangle pointing to a higher-level class?",
        "options": [
          "Aggregation",
          "Association",
          "Generalization (Inheritance)",
          "Dependency"
        ],
        "answer": "c",
        "explanation": "The open triangle denotes subclass-to-superclass inheritance."
      },
      {
        "num": 3,
        "question": "Which MDA model type is a platform-independent model that represents system operation without technology-specific details?",
        "options": [
          "CIM",
          "PIM",
          "PSM",
          "xUML"
        ],
        "answer": "b",
        "explanation": "The PIM is the Platform Independent Model."
      },
      {
        "num": 4,
        "question": "Event-driven modeling is based on the assumption that a system has:",
        "options": [
          "A series of databases.",
          "A finite number of states, and events cause transitions between these states.",
          "Multiple classes that inherit from a superclass.",
          "Interleaved specifications and designs."
        ],
        "answer": "b",
        "explanation": "Event-driven systems change state in response to stimuli."
      }
    ],
    "shortAnswers": [
      {
        "num": 5,
        "question": "Name and briefly describe the four perspectives used to model a software system.",
        "solution": "The four perspectives are:\n   * **External Perspective**: Models the system's operational context or environment.\n   * **Interaction Perspective**: Models how the system interacts with its users, other systems, or how internal components interact.\n   * **Structural Perspective**: Models the organization of the system's components or data structures.\n   * **Behavioral Perspective**: Models the dynamic behavior of the system and its response to stimuli."
      },
      {
        "num": 6,
        "question": "What is the difference between an aggregation and a generalization relationship in UML class diagrams? Include the visual notations used for each.",
        "solution": "**Aggregation**: Shows a \"part-of\" relationship where one class is composed of other classes. *Notation*: A line with a hollow diamond on the container class end.\n   * **Generalization**: Shows an inheritance hierarchy where subclasses inherit features of a superclass. *Notation*: A line with an open triangle pointing to the superclass."
      },
      {
        "num": 7,
        "question": "Scenario: Draw a textual representation or describe the structural relationships for a e-learning platform (BrightLearn). The platform has `Course`, `Lecturer`, `Student`, and `Assignment`. Explain how Aggregation and Generalization apply to these classes.\n\n---",
        "solution": "**BrightLearn Structural Relationships**:\n   * **Aggregation**: A `Course` is composed of multiple `Assignments`. Therefore, there is an aggregation relationship between `Course` and `Assignment` (hollow diamond on `Course` class). A `Course` also aggregates multiple `Students`.\n   * **Generalization**: Both `Lecturer` and `Student` share common properties like `Name`, `Email`, and `UserID`. We can generalize them into a superclass called `User`. Subclasses `Lecturer` and `Student` inherit from `User` (open triangles pointing to `User`)."
      }
    ]
  },
  {
    "id": "chapter_6",
    "chapterNumber": 6,
    "title": "Chapter 6: Architectural Design",
    "sections": [
      {
        "title": "2. Advantages of Explicit Architecture",
        "content": "1. **Stakeholder Communication**: A high-level architectural block diagram is simple and uncluttered, serving as a focus for discussion among both technical and non-technical stakeholders.\n2. **System Analysis**: Allows early analysis of whether the system can meet critical non-functional requirements (e.g., performance, security, availability).\n3. **Large-Scale Reuse**: System architectures can be reused across product lines.\n\n* **Box-and-Line Diagrams**: These simple, informal diagrams show components (boxes) and relationships (lines). They are criticized for lacking formal semantics, but are highly effective for stakeholder discussion and planning."
      },
      {
        "title": "3. Architecture and Non-Functional Characteristics",
        "content": "Architectural decisions directly impact system quality attributes:\n* **Performance**: Localize critical operations within a few components and minimize network communications.\n* **Security**: Use a layered architecture with assets stored in the innermost layers (onion-skin model).\n* **Availability**: Implement redundant components and mechanisms for fault tolerance to prevent single points of failure.\n* **Maintainability**: Use fine-grained, self-contained, and easily replaceable components."
      },
      {
        "title": "4. Architectural Views: The 4+1 View Model",
        "content": "A single architectural model shows only one perspective. We need multiple views to describe a system:\n1. **Logical View**: Shows the key abstractions in the system as objects or object classes (UML class diagrams).\n2. **Process View**: Shows how, at runtime, the system is composed of interacting processes, demonstrating concurrency and synchronization.\n3. **Development View**: Shows how the software is decomposed into modules, packages, and libraries for development.\n4. **Physical View**: Shows the system hardware and how software components are distributed across physical processors.\n5. **Scenarios (+1)**: Connects and validates the other four views using use cases or scenarios."
      },
      {
        "title": "5. Architectural Patterns",
        "content": "An architectural pattern is a stylized, tested description of good design practice.\n\n#### A. Model-View-Controller (MVC)\n* **Description**: Separates system data and logic (Model) from the user interface (View) and user input/interaction (Controller).\n* **When to use**: Multiple ways to view and interact with data are required; when the UI changes frequently.\n* **Advantages**: Independent modification of views and logic; multiple views can reflect the same data simultaneously.\n* **Disadvantages**: Can introduce complexity and processing overhead for simple user interfaces.\n\n#### B. Layered Architecture\n* **Description**: Organizes the system into layers, where each layer provides services to the layer above and consumes services from the layer below.\n* **When to use**: Building new facilities on top of existing systems; systems requiring distinct security layers.\n* **Advantages**: Easy to replace a layer (only adjacent layers are affected); supports incremental development and reuse.\n* **Disadvantages**: Clean separation is often difficult; performance can degrade due to calls passing through multiple layers.\n* *Example*: The LIBSYS library search system.\n\n#### C. Repository Architecture\n* **Description**: Subsystems exchange data through a central, shared database (repository) that all subsystems access.\n* **When to use**: Systems handling large volumes of shared data (e.g., IDEs where compiler, editor, debugger share an abstract syntax tree).\n* **Advantages**: Efficient data sharing; easy to add new subsystems without modifying other components.\n* **Disadvantages**: Repository is a bottleneck and single point of failure; evolving the shared data schema is difficult.\n\n#### D. Client-Server Architecture\n* **Description**: Distributed system model where servers provide services (printing, data storage, etc.) and clients request them over a network.\n* **When to use**: Data in a central database needs to be accessed by many distributed users.\n* **Advantages**: Distributed processing; servers can be optimized for specific roles.\n* **Disadvantages**: Network dependency; security and performance depend on network/server loads.\n\n#### E. Pipe and Filter Architecture (Pipe-and-Filter)\n* **Description**: Organizes the system as a sequence of components (filters) that perform transformations on data streams, passing them via pipes (e.g., UNIX shell commands).\n* **When to use**: Batch data-processing systems where inputs are processed sequentially.\n* **Advantages**: Simple, highly reusable filters; easy to understand and reorder.\n* **Disadvantages**: Not suitable for interactive systems; overhead in parsing data formats between filters."
      },
      {
        "title": "6. Application Architectures",
        "content": "Businesses have common needs, meaning application systems tend to have common architectures.\n* **Transaction Processing Systems**: Interactive systems that process user database queries or updates (e.g., E-commerce, ATMs, Reservations).\n  * *Request Flow*: User request $\\rightarrow$ Transaction Manager $\\rightarrow$ Database.\n* **Information Systems**: Layered systems that manage and retrieve database information (e.g., MHC-PMS).\n  * *MHC-PMS Layers*: User Interface $\\rightarrow$ User Communications $\\rightarrow$ Information Retrieval/Modification $\\rightarrow$ Database.\n  * *Web implementation*: Multi-tier client-server (Web Server handles UI $\\rightarrow$ Application Server handles logic $\\rightarrow$ Database Server handles transactions).\n* **Language Processing Systems**: Accept a formal language as input and translate/interpret it (e.g., Compilers).\n  * *Compiler Components*: Lexical analyzer $\\rightarrow$ Symbol table $\\rightarrow$ Syntax analyzer $\\rightarrow$ Syntax tree $\\rightarrow$ Semantic analyzer $\\rightarrow$ Code generator.\n  * Compilers can be structured using a **Pipe and Filter** (sequential translation steps) or **Repository** pattern (sharing a central symbol table and syntax tree).\n\n---"
      }
    ],
    "keyTerms": [
      {
        "term": "Software Architecture",
        "definition": "An abstract representation of a system's organization, including its components, interfaces, and relationships."
      },
      {
        "term": "Product-Line Architecture",
        "definition": "A core, reusable architecture shared across a family of related software systems."
      },
      {
        "term": "Model-View-Controller",
        "definition": "A pattern separating system data (Model) from presentation (View) and interaction (Controller)."
      },
      {
        "term": "Transaction",
        "definition": "A coherent sequence of database operations that either succeeds completely or fails completely (atomicity)."
      },
      {
        "term": "Platform Specific Model (PSM)",
        "definition": "A detailed model showing how a system is implemented on a specific hardware/software platform."
      }
    ],
    "mcqs": [
      {
        "num": 1,
        "question": "If your primary architectural goal is to make the system secure by placing critical data assets in an inner enclave, which pattern should you select?",
        "options": [
          "Pipe and Filter",
          "Repository",
          "Layered Architecture",
          "Client-Server"
        ],
        "answer": "c",
        "explanation": "The layered model restricts access to inner layers, making it ideal for securing core assets."
      },
      {
        "num": 2,
        "question": "In the 4+1 view model of software architecture, which view describes how runtime processes interact, focusing on concurrency and system performance?",
        "options": [
          "Logical view",
          "Process view",
          "Development view",
          "Physical view"
        ],
        "answer": "b",
        "explanation": "The process view models the concurrent runtime processes."
      },
      {
        "num": 3,
        "question": "Which of the following is a major disadvantage of the Repository architectural pattern?",
        "options": [
          "Subsystems must be distributed across different networks.",
          "It is not suitable for sharing large amounts of data.",
          "Changing the shared database schema is difficult and affects all subsystems.",
          "It cannot be used in compilers or IDEs."
        ],
        "answer": "c",
        "explanation": "Because all subsystems depend on the repository schema, database evolution is high-risk."
      },
      {
        "num": 4,
        "question": "Which component of a language processing system (compiler) converts the input text characters into internal tokens?",
        "options": [
          "Syntax analyzer",
          "Lexical analyzer",
          "Semantic analyzer",
          "Code generator"
        ],
        "answer": "b",
        "explanation": "The lexical analyzer translates raw source characters into discrete tokens."
      }
    ],
    "shortAnswers": [
      {
        "num": 5,
        "question": "Explain how a Compiler application can be designed using:\n   * A Pipe and Filter pattern.\n   * A Repository pattern.",
        "solution": "**Pipe and Filter Compiler**: The compiler is structured as a sequence of filters (Lexical analysis $\\rightarrow$ Syntax analysis $\\rightarrow$ Semantic analysis $\\rightarrow$ Code generation). The output stream of one filter serves as the input stream to the next, passing through pipes.\n   * **Repository Compiler**: The compiler components (lexical analyzer, parser, code generator) are subsystems that interact via a central, shared repository containing the Symbol Table and the Abstract Syntax Tree (AST). Subsystems read and write data to this database."
      },
      {
        "num": 6,
        "question": "What is the \"+1\" view in the 4+1 View Model of software architecture, and what is its purpose?",
        "solution": "The **+1 View** represents the **Scenarios** or **Use Cases**. Its purpose is to relate the other four views (logical, process, development, physical) to actual user requirements, verifying that the architectural design is complete and coherent."
      },
      {
        "num": 7,
        "question": "Scenario: You are designing the architecture for a new mobile banking application. The application must show real-time account balances, handle money transfers, and work across iOS and Android. Explain how you would address **Performance**, **Security**, and **Availability** in your architectural design.\n\n---",
        "solution": "**Mobile Banking Architectural Design**:\n   * **Performance**: Minimize network traffic by processing account calculations on the backend application server and returning small JSON packets. Cache static assets locally on the mobile devices.\n   * **Security**: Use a **Layered Architecture**. Place the database server in the innermost layer behind a firewall, accessible only by the application server. Implement end-to-end encryption between the client app and the servers.\n   * **Availability**: Use a **Client-Server** model with load balancing across redundant backend servers. Deploy database replication so that if one server fails, a secondary database server takes over instantly."
      }
    ]
  },
  {
    "id": "chapter_7",
    "chapterNumber": 7,
    "title": "Chapter 7: Design and Implementation",
    "sections": [
      {
        "title": "2. Structured Object-Oriented Design (OOD) Process",
        "content": "Common activities in an object-oriented design process include:\n1. **Define the Context and Modes of Use**: Understand how the system interacts with its environment and set system boundaries.\n2. **Design the System Architecture**: Define major components and their interactions (e.g., client-server, layered, or broadcasting).\n3. **Identify the Principal System Objects**: Identify the classes in the system.\n4. **Develop Design Models**: Create static and dynamic diagrams of the system.\n5. **Specify Object Interfaces**: Define the interfaces of components so they can be built in parallel."
      },
      {
        "title": "3. Object Identification Approaches",
        "content": "Since there is no \"magic formula\" for identifying objects, designers use these common approaches:\n* **Grammatical Approach**: Analyze natural language descriptions of the system. Nouns represent classes or attributes, and verbs represent operations/methods (the Hood OOD method).\n* **Tangible Things Approach**: Identify objects based on physical hardware, data inputs, or entities in the application domain (e.g., `Anemometer`, `Barometer`, `WeatherData` in a Weather Station system).\n* **Behavioral Approach**: Identify objects based on what components participate in specific system behaviors.\n* **Scenario-Based Approach**: Identify objects, attributes, and methods by walking through individual system use cases."
      },
      {
        "title": "4. Design Models (Static vs. Dynamic)",
        "content": "* **Static Models**: Describe the structure of the system design (e.g., class diagrams, generalization diagrams, and association diagrams).\n* **Dynamic Models**: Describe the runtime interactions of system components.\n  * *Subsystem Models*: Logically group objects together (represented in UML using **Packages**).\n  * *Sequence Models*: Show the time-ordered sequence of object interactions during a use case.\n  * *State Diagrams*: Show how objects change state in response to service requests (only needed for complex objects, not simple ones)."
      },
      {
        "title": "5. Object Interface Specification",
        "content": "* Object interfaces must be defined precisely so that different developers can work on components in parallel.\n* Implementation details (representation/data structures) must be hidden inside the objects, exposing only method signatures.\n* UML class diagrams with `<<interface>>` stereotypes or languages like Java are used to specify interfaces."
      },
      {
        "title": "6. Design Patterns",
        "content": "A design pattern is a reusable template for solving a common software design problem.\n\n| Pattern | Problem It Solves | Solution Description |\n|---|---|---|\n| **Observer** | Informing multiple objects that the state of another object has changed. | Separates the display of object state from the object itself (Subject and Observers). |\n| **Façade (Facade)** | Tidying up interfaces to a complex, incrementally built subsystem. | Provides a single, simplified interface to a group of related classes. |\n| **Iterator** | Providing a standard way to loop through a collection without exposing its structure. | Defines an interface that can traverse a collection sequentially. |\n| **Decorator** | Extending the behavior of an existing class dynamically at runtime. | Wraps the original class inside a decorator class that implements the same interface. |"
      },
      {
        "title": "7. Implementation Issues",
        "content": "* **Software Reuse**: Reusing existing components or systems reduces development time and costs.\n  * *Levels of Reuse*: Abstraction (design patterns), Object (class libraries), Component (subsystems), and System (COTS).\n  * *Reuse Costs*: Searching/evaluating software, license costs, adaptation/configuration, and integration.\n* **Configuration Management (CM)**: Managing changing software components in a team.\n  * *Version Management*: Tracks different versions of code files and prevents conflict when multiple developers edit the same file.\n  * *System Integration*: Automates compiling and linking components to build the system.\n  * *Problem Tracking*: Registers and tracks bugs and their resolutions.\n* **Host-Target Development**: Developing software on a development platform (host system) and executing it on a separate execution platform (target system).\n  * *Deployment Factors*: Hardware dependencies, high availability requirements (replicating components across platforms), and network communication latency (placing high-traffic components close together)."
      },
      {
        "title": "8. Open Source Development and Licensing",
        "content": "Open source development involves publishing source code and inviting volunteer contributions.\n* **Open Source Business Model**: Companies distribute software for free and generate revenue by selling support, training, and custom integration.\n* **Licensing Models**:\n  1. **GNU General Public License (GPL)**: A **reciprocal (copyleft)** license. If you use GPL code in your system, you *must* release your entire system as open source under the GPL.\n  2. **GNU Lesser General Public License (LGPL)**: A variant of the GPL that allows you to link your proprietary code to open source libraries without being forced to open-source your own code.\n  3. **Berkeley Standard Distribution (BSD) License**: A **non-reciprocal** license. You can modify BSD-licensed code and include it in proprietary, closed-source commercial software without republishing your changes.\n\n---"
      }
    ],
    "keyTerms": [
      {
        "term": "COTS",
        "definition": "Commercial-off-the-shelf software packages purchased and configured to meet business requirements."
      },
      {
        "term": "Reciprocal License",
        "definition": "A copyleft license (like GPL) that requires any derivative work to be released under the same license terms."
      },
      {
        "term": "Host System",
        "definition": "The computer and environment used by engineers to write and compile software."
      },
      {
        "term": "Target System",
        "definition": "The execution platform (hardware and operating system) on which the software runs in production."
      },
      {
        "term": "UML Package",
        "definition": "A UML construct used to group related classes together, representing a logical subsystem."
      }
    ],
    "mcqs": [
      {
        "num": 1,
        "question": "In a weather station project, identifying class objects like `Thermometer` and `Barometer` is an example of which identification approach?",
        "options": [
          "Grammatical approach",
          "Tangible things approach",
          "Behavioral approach",
          "Scenario-based analysis"
        ],
        "answer": "b",
        "explanation": "This approach identifies classes based on physical hardware objects in the application domain."
      },
      {
        "num": 2,
        "question": "Which design pattern provides a simplified, unified interface to a set of interfaces in a complex subsystem?",
        "options": [
          "Observer",
          "Decorator",
          "Façade",
          "Iterator"
        ],
        "answer": "c",
        "explanation": "The Façade pattern simplifies a complex subsystem interface."
      },
      {
        "num": 3,
        "question": "If you integrate an open-source library licensed under the BSD License into a commercial software application, what are your legal obligations?",
        "options": [
          "You must release your entire application's source code for free.",
          "You cannot sell the application for a profit.",
          "You can keep your application closed-source and sell it, as the BSD license is non-reciprocal.",
          "You must rewrite the entire library in Java."
        ],
        "answer": "c",
        "explanation": "Non-reciprocal licenses do not force developers to open-source derivative works."
      },
      {
        "num": 4,
        "question": "Which configuration management activity is responsible for registering bugs, tracking who is fixing them, and recording when they are resolved?",
        "options": [
          "Version management",
          "Problem tracking",
          "System integration",
          "Release management"
        ],
        "answer": "b",
        "explanation": "Problem tracking systems manage bug reports and trace progress to resolution."
      }
    ],
    "shortAnswers": [
      {
        "num": 5,
        "question": "Explain the differences between the GPL, LGPL, and BSD open-source licenses.",
        "solution": "**GPL**: A reciprocal/copyleft license that requires any software incorporating GPL code to be released under the GPL as open source.\n   * **LGPL**: A compromise license that allows developers to link to open-source libraries without having to open-source their own proprietary calling code.\n   * **BSD**: A non-reciprocal license that permits code to be modified and included in proprietary, closed-source commercial software without any obligation to republish changes."
      },
      {
        "num": 6,
        "question": "What is Host-Target Development? Why do we use it in software engineering?",
        "solution": "**Host-Target Development** is when software is designed and compiled on one machine (the host development platform) but executes on a different machine (the target execution platform).\n   * **Reason**: Target execution systems (like embedded systems in cars, medical devices, or smart TVs) often lack the CPU, memory, and screen capabilities required to run compilers, IDEs, and debugging tools."
      },
      {
        "num": 7,
        "question": "Scenario: You are developing a system that processes payments. When a payment is processed, several components must update: the receipt printing system, the email notifier, and the transaction ledger. Describe how you would apply the **Observer Pattern** to design this interaction.\n\n---",
        "solution": "**Observer Pattern Payment Design**:\n   * **Subject**: The `PaymentProcessor` class, which holds the payment state (Pending, Succeeded, Failed).\n   * **Observers**: The `ReceiptPrinter`, `EmailNotifier`, and `TransactionLedger` classes, which all implement a common `PaymentObserver` interface containing an `update()` method.\n   * **Interaction**: The `PaymentProcessor` maintains a list of registered observers. Once a payment succeeds, the `PaymentProcessor` iterates through its list and calls `update(paymentDetails)` on each observer, triggering printing, emailing, and ledger recording."
      }
    ]
  },
  {
    "id": "chapter_8",
    "chapterNumber": 8,
    "title": "Chapter 8: Software Testing",
    "sections": [
      {
        "title": "2. Static Inspections vs. Dynamic Testing",
        "content": "* **Software Inspections (Static)**: Static analysis of system representations (requirements, design, source code, config files) without executing the code.\n  * *Advantages*: Errors do not mask (hide) other errors; incomplete systems can be inspected without specialized test harnesses; checks broader quality attributes (standards compliance, portability, maintainability).\n  * *Limitations*: Cannot check dynamic non-functional characteristics (e.g., actual performance, usability) or conformance with the customer's real requirements.\n* **Software Testing (Dynamic)**: Executing the program with test data and observing its runtime behavior.\n* *Note*: Inspections and testing are complementary verification techniques. Both should be used."
      },
      {
        "title": "3. Three Stages of Testing",
        "content": "1. **Development Testing**: The development team tests the system during construction to find bugs (defect testing).\n2. **Release Testing**: A separate testing team tests a complete version of the system before release to validate that it meets requirements (validation testing).\n3. **User Testing**: Users or customers test the system in their own operational environment."
      },
      {
        "title": "4. Development Testing Activities",
        "content": "* **Unit Testing**: Testing individual components (functions, methods, classes) in isolation.\n  * *Class testing* involves: testing all operations, setting/retrieving all attributes, and exercising all possible states. Inheritance makes class testing harder because the features to be tested are not localized.\n  * *Automated Unit Testing*: Uses frameworks (e.g., JUnit) and contains three parts:\n    1. **Setup**: Initialize the system, inputs, and expected outputs.\n    2. **Call**: Invoke the method or object being tested.\n    3. **Assertion**: Compare the actual result with the expected output (returns true/false).\n* **Component Testing**: Integrating individual units to test composite components. Focuses on **component interfaces**.\n* **System Testing**: Integrating components to test the system as a whole. Focuses on **component interactions** and emergent system behaviors."
      },
      {
        "title": "5. Test Case Design Strategies",
        "content": "* **Partition Testing (Equivalence Partitioning)**: Input and output spaces are divided into partitions where the system is expected to behave in an equivalent way. Test cases are selected from each partition, including values in the middle and at the boundaries.\n* **Guideline-Based Testing**: Test cases are derived from experience of common programming mistakes:\n  * *Sequence Guidelines*: Test with single-value sequences; sequences of varying sizes; test the first, middle, and last elements; test with zero-length sequences.\n  * *General Guidelines*: Force all error messages; cause buffer overflows; repeat the same input multiple times; force invalid outputs; force numbers to be too large/small."
      },
      {
        "title": "6. Component Interface Testing",
        "content": "Detects faults due to interface errors or invalid assumptions about interfaces.\n* **Interface Types**: Parameter interfaces, Shared memory interfaces, Procedural interfaces, and Message passing interfaces.\n* **Interface Errors**:\n  * *Interface Misuse*: Caller passes parameters incorrectly (e.g., wrong order).\n  * *Interface Misunderstanding*: Caller makes wrong assumptions about the called component's behavior.\n  * *Timing Errors*: Caller and callee run at different speeds, accessing out-of-date data.\n* **Guidelines**: Parameters at extreme range ends; null pointers; cause the component to fail; stress-test message passing; vary activation order in shared memory."
      },
      {
        "title": "7. Test-Driven Development (TDD)",
        "content": "An incremental development approach where you write tests *before* writing the code.\n* **TDD Process**:\n  $$\\text{Identify required increment} \\rightarrow \\text{Write automated test} \\rightarrow \\text{Run test (fails)} \\rightarrow \\text{Implement code} \\rightarrow \\text{Run test (passes)} \\rightarrow \\text{Refactor} \\rightarrow \\text{Repeat}$$\n* **Benefits**:\n  * *Code Coverage*: Every line of code written has an associated test.\n  * *Regression Testing*: An automated test suite is built incrementally.\n  * *Simplified Debugging*: When a test fails, it is clear which new lines of code contain the bug.\n  * *System Documentation*: The tests serve as executable documentation showing how the code should behave.\n* **Regression Testing**: Testing the system to check that new modifications have not broken previously working functionality."
      },
      {
        "title": "8. Release Testing (Black-Box Testing)",
        "content": "* Testing a specific system release intended for customers. Focuses on **validation testing** (proving the system meets specifications and is fit for release).\n* Done by a **separate testing team** using a black-box approach (derived only from the specification, not code structure).\n* **Requirements-Based Testing**: Writing tests specifically to verify each requirement.\n* **Scenario Testing**: Creating a realistic usage scenario to test multiple components together (e.g., Nurse Kate's home visit scenario in MHC-PMS).\n* **Performance and Stress Testing**:\n  * *Performance Testing*: Steadily increasing the system load to measure response times and reliability.\n  * *Stress Testing*: Overloading the system to test its failure behavior and ensure it fails gracefully without data corruption."
      },
      {
        "title": "9. User Testing",
        "content": "Essential because the user's real working environment (with interruptions, unique configurations, and workflows) cannot be replicated in a development testing lab.\n* **Alpha Testing**: Users work with developers to test the software at the developer's site.\n* **Beta Testing**: A pre-release version of the software is given to users to test in their own environments.\n* **Acceptance Testing**: Customers test the system in their own environment to decide if it is ready to be accepted and deployed.\n  * *Acceptance Stages*: Define criteria $\\rightarrow$ Plan tests $\\rightarrow$ Derive tests $\\rightarrow$ Run tests $\\rightarrow$ Negotiate results $\\rightarrow$ Accept/Reject.\n  * *Agile Acceptance*: Customers are embedded in the team and continuously evaluate increments, meaning there is no separate acceptance phase. (Drawback: The embedded customer might not represent all stakeholders).\n\n---"
      }
    ],
    "keyTerms": [
      {
        "term": "Defect Testing",
        "definition": "Testing designed specifically to expose system faults, bugs, and incorrect behavior."
      },
      {
        "term": "Equivalence Partition",
        "definition": "A domain of input/output values where a system is expected to behave in an identical manner."
      },
      {
        "term": "Regression Test Suite",
        "definition": "A collection of automated tests run regularly to ensure modifications have not broken existing code."
      },
      {
        "term": "Black-Box Testing",
        "definition": "Test case design based solely on the functional specification of a component without knowledge of its source code."
      },
      {
        "term": "Stress Testing",
        "definition": "Testing that pushes a system beyond its design limits to evaluate its robustness and failure recovery."
      }
    ],
    "mcqs": [
      {
        "num": 1,
        "question": "\"Are we building the right product?\" is the classic definition of:",
        "options": [
          "Verification",
          "Validation",
          "Regression testing",
          "System integration"
        ],
        "answer": "b",
        "explanation": "Validation ensures the product meets the user's real needs."
      },
      {
        "num": 2,
        "question": "Which of the following is a major advantage of static inspections over dynamic testing?",
        "options": [
          "Inspections check the system's runtime performance.",
          "Inspections check conformance with the user's real requirements.",
          "Errors do not mask other errors during inspections, and incomplete systems can be easily checked.",
          "Inspections are automated by JUnit."
        ],
        "answer": "c",
        "explanation": "Inspections analyze static code, avoiding error masking."
      },
      {
        "num": 3,
        "question": "In test-driven development (TDD), when is the test written?",
        "options": [
          "Immediately after coding the class.",
          "During the user acceptance phase.",
          "Before writing the code that implements the functionality.",
          "During system integration testing."
        ],
        "answer": "c",
        "explanation": "TDD requires writing the test first."
      },
      {
        "num": 4,
        "question": "Which type of user testing involves releasing a version of the software to a group of external users to run in their own environments?",
        "options": [
          "Alpha testing",
          "Beta testing",
          "Acceptance testing",
          "Development testing"
        ],
        "answer": "b",
        "explanation": "Beta testing lets external users test pre-releases in their own environments."
      }
    ],
    "shortAnswers": [
      {
        "num": 5,
        "question": "Explain \"Equivalence Partitioning\" and identify the partitions and boundary test cases for a system that accepts an integer age input between 18 and 65 (inclusive).",
        "solution": "**Equivalence Partitioning** is a testing strategy where input values are grouped into domains expected to trigger the same behavior.\n   * **Age input (18 to 65 inclusive)**:\n     * *Invalid partition (too young)*: Values $< 18$.\n     * *Valid partition*: Values $18 \\leq \\text{age} \\leq 65$.\n     * *Invalid partition (too old)*: Values $> 65$.\n   * **Boundary Test Cases**: Values: $17$ (invalid boundary), $18$ (valid boundary), $65$ (valid boundary), $66$ (invalid boundary)."
      },
      {
        "num": 6,
        "question": "List three types of component interface errors and describe how timing errors occur.",
        "solution": "**Interface Errors**:\n   * *Interface Misuse*: Calling component passes parameters incorrectly (e.g., wrong type or order).\n   * *Interface Misunderstanding*: Caller makes wrong assumptions about the callee's behavior.\n   * *Timing Errors*: Occur in shared-memory or message-passing systems when components run at different speeds. For example, a reader component reads data from a shared memory buffer before the writer component has finished writing, resulting in the reader accessing obsolete or corrupted data."
      },
      {
        "num": 7,
        "question": "Scenario: A hospital is deploying the Wilderness Weather Station data collection subsystem. You are in charge of release testing. Describe how you would conduct **Requirements-Based Testing**, **Scenario Testing**, and **Stress Testing** for this subsystem.\n\n---",
        "solution": "**Wilderness Weather Station Release Testing**:\n   * **Requirements-Based**: Identify the requirement: \"The weather station shall collect temperature readings every 10 minutes.\" Create a test that verifies the system records a temperature reading at 10-minute intervals.\n   * **Scenario**: Create a scenario: \"A ranger requests a weather report from a station under heavy snow conditions.\" Test cases would verify logging in, transmitting data, and printing the report.\n   * **Stress**: Deliberately flood the weather station's communication line with simulated requests (e.g., 100 requests per second) to verify the station's buffering and queue management, ensuring it does not crash or lose temperature log records."
      }
    ]
  }
];

export const mockExamData = {
  "title": "Software Engineering I — Mock Examination",
  "questions": [
    {
      "num": 1,
      "title": "Software Engineering Foundations (Chapter 1)",
      "marks": 5,
      "description": "1.1 Explain the difference between \"Software Engineering\" and \"Computer Science\". (2)  \n1.2 List and briefly describe three professional ethics principles defined in the ACM/IEEE Code of Ethics. (2)  \n1.3 How does defining a system boundary (e.g., for the TechFix job management system) help manage project scope? (1)",
      "section": "A",
      "solution": "Software Engineering Foundations\n* **1.1 Difference**:\n  * **Computer Science** focuses on the theories, mathematical models, and underlying principles of computation, algorithms, and data structures.\n  * **Software Engineering** is an engineering discipline concerned with the practical, cost-effective development, delivery, and maintenance of high-quality software systems in real-world environments.\n* **1.2 ACM/IEEE Code of Ethics (Any three)**:\n  * *Public*: Software engineers shall act consistently with the public interest.\n  * *Client and Employer*: Software engineers shall act in a manner that is in the best interests of their client and employer, consistent with the public interest.\n  * *Product*: Software engineers shall ensure that their products and related modifications meet the highest professional standards possible.\n  * *Judgment*: Software engineers shall maintain integrity and independence in their professional judgment.\n  * *Management*: Software engineering managers and leaders shall subscribe to and promote an ethical approach to the management of software development and maintenance.\n  * *Profession*: Software engineers shall advance the integrity and reputation of the profession consistent with the public interest.\n  * *Colleagues*: Software engineers shall be fair to and supportive of their colleagues.\n  * *Self*: Software engineers shall participate in lifelong learning regarding the practice of their profession.\n* **1.3 TechFix System Boundary**:\n  * Defining the system boundary for the TechFix job management system determines what is inside the scope of development (e.g., technician assignment, progress updates, invoice generation) and what remains external (e.g., third-party supplier systems, client phones). This prevents scope creep by making explicit which interfaces need to be implemented."
    },
    {
      "num": 2,
      "title": "Software Processes & RUP (Chapter 2)",
      "marks": 6,
      "description": "2.1 Define the term \"Software Process Model\" and contrast plan-driven and agile processes. (2)  \n2.2 The Rational Unified Process (RUP) is a modern generic process model. List the four dynamic phases of RUP in order, and state the main objective of each phase. (4)",
      "section": "A",
      "solution": "Software Processes & RUP\n* **2.1 Process Models**:\n  * A **Software Process Model** is an abstract representation of a software process from a specific perspective (e.g., Waterfall, Incremental, Reuse-oriented).\n  * **Plan-Driven**: Activities are planned in advance, and progress is measured against a baseline plan.\n  * **Agile**: Planning is incremental, and changes can be easily made based on customer feedback.\n* **2.2 RUP Phases**:\n  1. **Inception**: Establish the business case and define the scope of the project.\n  2. **Elaboration**: Understand the problem domain, establish the architecture, and mitigate high-risk elements.\n  3. **Construction**: Design, write code, and test the software.\n  4. **Transition**: Deploy the system in its operating environment for end-user operation."
    },
    {
      "num": 3,
      "title": "Agile Methods & Scrum (Chapter 3)",
      "marks": 7,
      "description": "3.1 The Agile Manifesto values four pairs of items. List three of these pairs, clearly showing which side is preferred. (3)  \n3.2 In Scrum, explain the role of the \"Scrum Master\" and how they differ from a traditional project manager. (2)  \n3.3 Explain two technical or organizational characteristics of a project that would make Agile methods *unsuitable*. (2)",
      "section": "A",
      "solution": "Agile Methods & Scrum\n* **3.1 Agile Manifesto Values (Any three)**:\n  * Individuals and interactions **over** processes and tools.\n  * Working software **over** comprehensive documentation.\n  * Customer collaboration **over** contract negotiation.\n  * Responding to change **over** following a plan.\n* **3.2 Scrum Master**:\n  * The **Scrum Master** is a facilitator who protects the development team from external distractions, organizes daily scrum meetings, and tracks the backlog.\n  * Unlike a traditional project manager, they do not assign tasks or enforce deadlines; instead, the team is self-organizing.\n* **3.3 Unsuitable Characteristics (Any two)**:\n  * *Safety-critical systems*: Systems that require detailed, regulatory-approved design documentation (safety cases) before implementation.\n  * *Large, distributed teams*: Agile relies on informal, face-to-face communication, which degrades across multiple sites or timezones.\n  * *Long-lifetime systems*: Systems requiring extensive documentation to ensure maintenance teams can support the software after the original developers have left."
    },
    {
      "num": 4,
      "title": "Requirements Engineering (Chapter 4)",
      "marks": 7,
      "description": "4.1 Define \"Functional Requirements\" and \"Non-Functional Requirements\", providing one example of each for a hospital patient system. (2)  \n4.2 Explain what a \"domain requirement\" is and why they present unique challenges to software engineers. (2)  \n4.3 Outline the three stages of the Requirements Change Management process in order. (3)",
      "section": "A",
      "solution": "Requirements Engineering\n* **4.1 Definitions & Examples**:\n  * **Functional Requirement**: Describes what service or functionality the system must provide.  \n    * *Example*: \"A nurse shall be able to view a patient's medical history.\"\n  * **Non-Functional Requirement**: A constraint on the system's operations or qualities.  \n    * *Example*: \"The patient medical database shall be encrypted using AES-256.\"\n* **4.2 Domain Requirement**:\n  * A requirement derived from the system's operational domain (e.g., aviation, medicine, physics).\n  * *Challenges*: They are expressed in specialized domain terminology that software developers may not understand, and domain experts often take these rules for granted (implicitness), forgetting to document them.\n* **4.3 Requirements Change Management Stages**:\n  1. *Problem analysis and change specification*: Analyze the problem/change request for validity and feasibility.\n  2. *Change analysis and costing*: Assess the impact of the change using traceability data and estimate costs.\n  3. *Change implementation*: Modify the requirements document, design, and code."
    },
    {
      "num": 5,
      "title": "System Modeling (Chapter 5)",
      "marks": 5,
      "description": "5.1 Explain the difference between the \"External Perspective\", \"Interaction Perspective\", \"Structural Perspective\", and \"Behavioral Perspective\" in system modeling. (2)  \n5.2 Explain what \"Generalization\" and \"Aggregation\" represent in UML class diagrams, and state the visual notation used to represent each. (3)",
      "section": "A",
      "solution": "System Modeling\n* **5.1 System Modeling Perspectives**:\n  * **External**: Models the system's context or operational environment.\n  * **Interaction**: Models interactions between users and the system, or between system components.\n  * **Structural**: Models the static organization of components or databases.\n  * **Behavioral**: Models the dynamic runtime behavior of the system in response to events or data.\n* **5.2 Class Diagram Relationships**:\n  * **Generalization**: Represents inheritance (\"is-a\" relationship) where a subclass inherits from a superclass.  \n    * *Notation*: A line with an **open/hollow triangle** pointing to the superclass.\n  * **Aggregation**: Represents a collection/composition (\"part-of\" relationship) where one class is composed of other classes.  \n    * *Notation*: A line with a **hollow diamond** at the composite class end."
    },
    {
      "num": 6,
      "title": "Architectural Design (Chapter 6)",
      "marks": 5,
      "description": "6.1 Describe the **Repository** architectural pattern. List one major advantage and one major disadvantage of using it. (3)  \n6.2 Briefly describe the 4+1 View Model of software architecture, listing the four primary views. (2)",
      "section": "A",
      "solution": "Architectural Design\n* **6.1 Repository Pattern**:\n  * *Description*: All shared data is held in a central repository database accessed by all subsystems.\n  * *Advantage*: Efficient data sharing; subsystems do not need to know how others consume data; easy to add new subsystems.\n  * *Disadvantage*: Repository is a single point of failure and a performance bottleneck; changing the repository data schema affects all subsystems.\n* **6.2 4+1 View Model**:\n  * It represents software architecture from multiple perspectives.\n  * *Views*:\n    1. **Logical View** (structural abstractions/classes).\n    2. **Process View** (runtime concurrency/processes).\n    3. **Development View** (code decomposition/modules).\n    4. **Physical View** (hardware distribution).\n    5. *(+1)* **Scenarios/Use Cases** (verifies and connects the views)."
    },
    {
      "num": 7,
      "title": "Software Testing (Chapter 8)",
      "marks": 5,
      "description": "7.1 Explain the difference between **Verification** and **Validation** (V & V). (2)  \n7.2 Define **Test-Driven Development (TDD)** and explain how it simplifies the debugging process. (3)\n\n---",
      "section": "A",
      "solution": "Software Testing\n* **7.1 Verification vs. Validation**:\n  * **Verification**: \"Are we building the product right?\" (Conformance to the functional specification).\n  * **Validation**: \"Are we building the right product?\" (Ensuring the system meets the customer's actual business needs).\n* **7.2 Test-Driven Development (TDD) & Debugging**:\n  * **TDD**: A development approach where automated tests are written *before* writing the functional code.\n  * **Debugging Simplification**: Since code is written incrementally, when a test fails, the bug must reside in the newly added lines of code, making it quick to locate and fix.\n\n---"
    },
    {
      "num": 8,
      "title": "Use Case Modeling (BrightLearn Platform)",
      "marks": 10,
      "description": "Read the scenario below and answer the questions.\n\n> **SCENARIO: BrightLearn Platform**\n> BrightLearn is an online e-learning platform. Students can register for courses, watch video lectures, submit assignments, and take online quizzes. Lecturers can upload learning materials, set quiz questions, and grade submitted assignments. An Administrator manages user accounts, activates/deactivates courses, and generates usage reports. When a student submits an assignment, the system automatically runs it through a Plagiarism Detection Service. Students can optionally request an extension on an assignment deadline, which requires lecturer approval. All users must log in before performing any function.\n\n8.1 Identify the actors in this system. Are there any generalizations between actors? (2)  \n8.2 List the core use cases for the Student, Lecturer, and Administrator. (3)  \n8.3 Identify which use cases require an `<<include>>` relationship and which require an `<<extend>>` relationship based on the scenario. (2)  \n8.4 Describe the structure of a Use Case Diagram for this system, or draw it using ASCII representation, ensuring system boundaries and relationships are represented correctly. (3)",
      "section": "B",
      "solution": "Use Case Modeling (BrightLearn Platform)\n* **8.1 Actors & Generalization**:\n  * *Actors*: Student, Lecturer, Administrator, Plagiarism Detection Service (external system).\n  * *Generalization*: Both Student and Lecturer could inherit from a generalized `User` class (super-actor) since both must log in.\n* **8.2 Core Use Cases**:\n  * *Student*: Register for Course, Watch Video, Submit Assignment, Take Quiz, Request Extension.\n  * *Lecturer*: Upload Materials, Set Quiz Questions, Grade Assignment, Approve Extension.\n  * *Administrator*: Manage User Account, Activate/Deactivate Course, Generate Usage Report.\n* **8.3 Relationships**:\n  * `<<include>>`: All use cases (e.g., watch video, grade assignment) *include* the \"Log In\" use case. Also, \"Submit Assignment\" *includes* \"Run Plagiarism Check\".\n  * `<<extend>>`: \"Request Extension\" *extends* \"Submit Assignment\" (with an extension point \"before deadline\").\n* **8.4 ASCII Use Case Diagram**:\n```text\n  +-------------------------------------------------------------+\n  | BrightLearn Platform                                        |\n  |                                                             |\n  |   +---------------+                                         |\n  |   |    Log In     |<-----------------------------\\          |\n  |   +---------------+                              |          |\n  |                                                  |          |\n  |   +---------------+                              |          |\n  |   |Watch Lecture  |--<<include>>---------------->+          |\n  |   +---------------+                              |          |\n  |                                                  |          |\n  |   +---------------+                              |          |\n  |   |Submit Assign. |--<<include>>---------------->+          |\n  |   +---------------+                              |          |\n  |           ^                                      |          |\n  |           | (extension point)                    |          |\n  |      <<extend>>                                  |          |\n  |           |                                      |          |\n  |   +---------------+                              |          |\n  |   |Req. Extension |--<<include>>---------------->+          |\n  |   +---------------+                              |          |\n  |                                                  |          |\n  |   +---------------+                              |          |\n  |   |Grade Assign.  |--<<include>>---------------->+          |\n  |   +---------------+                              |          |\n  |                                                  |          |\n  |   +---------------+                              |          |\n  |   |Manage Account |--<<include>>---------------->+          |\n  |   +---------------+                                         |\n  +-------------------------------------------------------------+\n```"
    },
    {
      "num": 9,
      "title": "Interaction Modeling (SafePay Fund Transfer)",
      "marks": 10,
      "description": "Read the scenario below and answer the questions.\n\n> **SCENARIO: SafePay App**\n> SafePay is a mobile banking application. When a user initiates a fund transfer, the app sends the request to the Banking Server. The server first checks the user's session validity with the Authentication Service. If the session is valid, the server checks the account balance in the Account Database. If the balance is sufficient, the transaction is processed and a transaction record is saved in the Transaction Database. A confirmation SMS is sent to the user via the SMS Gateway. If the session is invalid, the server returns an error and prompts re-login. If the balance is insufficient, the transaction is rejected and a failure notification is sent.\n\n9.1 List the lifelines that must appear in a sequence diagram for this scenario. (2)  \n9.2 Explain the sequence of interactions that occur when a user successfully transfers funds. Distinguish between call (synchronous) messages and return messages. (4)  \n9.3 How would you represent the session validation check and balance check using UML sequence diagram control structures (combined fragments)? (4)",
      "section": "B",
      "solution": "Interaction Modeling (SafePay Fund Transfer)\n* **9.1 Lifelines**:\n  * `User` (Actor), `Mobile App (UI)`, `Banking Server`, `Authentication Service`, `Account Database`, `Transaction Database`, `SMS Gateway`.\n* **9.2 Sequence of Messages**:\n  1. `User` initiates transfer $\\rightarrow$ `Mobile App (UI)` (Call)\n  2. `Mobile App (UI)` sends transfer request $\\rightarrow$ `Banking Server` (Call)\n  3. `Banking Server` requests token check $\\rightarrow$ `Authentication Service` (Call)\n  4. `Authentication Service` returns token valid $\\rightarrow$ `Banking Server` (Return)\n  5. `Banking Server` queries balance $\\rightarrow$ `Account Database` (Call)\n  6. `Account Database` returns sufficient balance $\\rightarrow$ `Banking Server` (Return)\n  7. `Banking Server` processes transaction internally (Self-Call)\n  8. `Banking Server` saves record $\\rightarrow$ `Transaction Database` (Call)\n  9. `Transaction Database` returns success $\\rightarrow$ `Banking Server` (Return)\n  10. `Banking Server` requests SMS dispatch $\\rightarrow$ `SMS Gateway` (Call)\n  11. `Banking Server` returns success status $\\rightarrow$ `Mobile App (UI)` (Return)\n  12. `Mobile App (UI)` displays transfer confirmation $\\rightarrow$ `User` (Return)\n* **9.3 Combined Fragments**:\n  * An outer `alt` combined fragment with two branches:\n    * *Branch 1 (Session Valid)*: Contains the nested balance check logic.\n    * *Branch 2 (Session Invalid)*: Returns re-login prompt.\n  * A nested `alt` combined fragment inside Branch 1:\n    * *Branch 1.1 (Sufficient Balance)*: Processes transaction and saves to database.\n    * *Branch 1.2 (Insufficient Balance)*: Rejects transaction and returns failure notification."
    },
    {
      "num": 10,
      "title": "System Architecture Design (CityParks Booking)",
      "marks": 10,
      "description": "Read the scenario below and answer the questions.\n\n> **SCENARIO: CityParks System**\n> CityParks is a municipal booking system that allows residents to book sports fields and braai areas online or via mobile app. Staff at the Parks Office can view bookings, approve group bookings, and generate reports. Payments are processed through a third-party Payment Gateway. The system must notify users of booking confirmations via email. The municipality's existing HR System provides staff authentication. The system must be accessible from web browsers and smartphones.\n\n10.1 Propose a Layered (N-tier) architecture for the CityParks Booking System. List the layers and explain what components reside in each. (4)  \n10.2 Identify the external systems that must interface with CityParks. (2)  \n10.3 Detail the communication protocols/interfaces (e.g., HTTPS, REST APIs) used for data flow between:\n* The client applications and the backend. (2)\n* The backend and the third-party Payment Gateway. (2)\n\n---",
      "section": "B",
      "solution": "System Architecture Design (CityParks Booking)\n* **10.1 Layered Architecture**:\n  * **Presentation Layer**: Client applications (Web Browsers, Mobile Apps (iOS/Android)) that display interfaces and capture inputs.\n  * **Application / Business Logic Layer**: Controls the core reservation rules (field availability checking, reservation processing, billing workflows, reports generation).\n  * **Data Layer**: System database (e.g., PostgreSQL) containing tables for Users, Park Booking Slots, and Payments.\n* **10.2 External Systems**:\n  * *Payment Gateway* (receives payment details and charges credit cards).\n  * *HR System* (authenticates staff credentials).\n  * *Email Service / SMTP Server* (transmits reservation notification emails).\n* **10.3 Communication Protocols**:\n  * *Client to Backend*: HTTPS protocol using a REST API (JSON payloads).\n  * *Backend to Payment Gateway*: HTTPS REST API (or webhooks for payment processing).\n  * *Backend to HR System*: LDAP or OAuth2/SAML over HTTPS for staff login.\n  * *Backend to Email Service*: SMTP protocol (Port 587 or API-based HTTP client).\n\n---"
    },
    {
      "num": 11,
      "title": "Insulin Pump Control System (Safety-Critical)",
      "marks": 10,
      "description": "Read the case study description and answer the questions.\n\n> **CASE STUDY: The Insulin Pump**\n> The insulin pump is an embedded safety-critical system that monitors blood sugar levels in a diabetic patient and injects insulin automatically to maintain normal blood sugar. The system comprises a blood sugar sensor, a controller, and an electric micro-pump. The software must calculate the dose accurately and ensure the pump delivers it safely.\n\n11.1 Classify the following requirements as functional or non-functional:\n1. \"The software shall calculate the required insulin dose based on the blood glucose sensor reading.\" (1)\n2. \"The system shall not deliver more than 5 units of active insulin in a single hour.\" (1)\n3. \"The blood sensor electrical conductivity measurements shall have an accuracy of 99.5%.\" (1)  \n11.2 Explain the catastrophic impact of failure for both over-delivery and under-delivery of insulin in this system. (4)  \n11.3 Propose and justify a software engineering practice (e.g., formal specification, rigorous verification) to minimize coding errors in this embedded control system. (3)",
      "section": "C",
      "solution": "Insulin Pump Control System\n* **11.1 Requirement Classification**:\n  1. *Functional*: Dose calculation is a core computation/service.\n  2. *Non-Functional (Safety)*: This is a safety constraint restricting the maximum dose rate.\n  3. *Non-Functional (Performance/Safety)*: This is a hardware sensor accuracy constraint.\n* **11.2 Failure Impact**:\n  * *Over-delivery*: Delivering too much insulin causes **hypoglycemia** (very low blood sugar), leading to rapid brain cell starvation, unconsciousness, seizures, permanent brain damage, or immediate death.\n  * *Under-delivery*: Delivering too little insulin causes **hyperglycemia** (high blood sugar), leading to diabetic ketoacidosis in the short term, and long-term organ damage (blindness, kidney failure, cardiovascular disease).\n* **11.3 Software Practice**:\n  * **Formal Specification**: Using formal mathematical notation (e.g., Z notation or VDM) to specify the state variables (insulin level, battery level, sensor reading) and operations.  \n  * *Justification*: In safety-critical embedded systems, mathematical specifications eliminate ambiguities and allow developers to verify the logical correctness of the control algorithm before writing code, proving that hazardous states (like an overdose) are mathematically impossible."
    },
    {
      "num": 12,
      "title": "Mentcare (Information System Evolution)",
      "marks": 10,
      "description": "Read the case study description and answer the questions.\n\n> **CASE STUDY: Mentcare System**\n> Mentcare is a mental health care patient management system. It maintains records of patients, consultations, and treatments. It is used by doctors, nurses, receptionists, and clinical managers. Clinicians can copy records to local laptops for disconnected use during home visits.\n\n12.1 Explain the \"Distributed Data Consistency\" challenge that arises when clinicians take local copies of patient records on laptops and edit them offline. How should the system handle synchronization? (4)  \n12.2 The Mentcare system must comply with data protection (privacy) laws as well as mental health laws (which permit compulsory detention under strict conditions). Explain how these laws can impose conflicting requirements on the software. (3)  \n12.3 Contrast the suitability of a plan-driven process vs. an agile process for developing the Mentcare system. Which is preferred and why? (3)",
      "section": "C",
      "solution": "Mentcare (Information System Evolution)\n* **12.1 Distributed Data Consistency**:\n  * *Challenge*: When multiple clinicians download local patient records to laptops, modify them offline, and upload them back to the server, updates can overwrite one another. If Nurse A and Nurse B both edit Patient Jim's record offline, the last database upload will overwrite the first (lost update problem).\n  * *Synchronization Solution*: The system must implement a reconciliation protocol. Rather than overwriting files, it should perform field-level merges and flag conflicting fields (e.g., differing prescriptions) for manual review by a clinical administrator.\n* **12.2 Conflicting Laws**:\n  * Data privacy laws (like GDPR) mandate that patient records must be kept confidential, allowing access only to authorized clinical staff.\n  * Mental health laws, however, specify that under compulsory detention orders (involuntary admission), clinical details must be shared with judicial courts, police, and external hospital managers to ensure civil rights are protected.\n  * The software must balance these by restricting standard viewing but implementing a \"break-glass\" auditing feature that grants and logs access to judicial authorities during legal reviews.\n* **12.3 Plan-Driven vs. Agile Process**:\n  * **Plan-Driven** is preferred.\n  * *Justification*: Mentcare is a medical information system that manages patient safety (monitoring suicidal risks) and legal compliance (compulsory detention, privacy regulations). A plan-driven process enforces detailed upfront requirements analysis, system architecture design, and comprehensive documentation, which are essential to prove compliance during regulatory audits and prevent life-threatening medical errors. Agile's lack of documentation and rapid cycles increase compliance risk."
    },
    {
      "num": 13,
      "title": "Wilderness Weather Station (Coping with Change)",
      "marks": 10,
      "description": "Read the case study description and answer the questions.\n\n> **CASE STUDY: Wilderness Weather Station**\n> Weather stations are deployed in remote, uninhabited areas to collect meteorological data. They are battery-powered, solar-charged, and communicate via narrow-bandwidth satellite links. The system must run unattended indefinitely.\n\n13.1 Explain how the physical operational environment of the weather station influences the non-functional requirements and design of the station software. (4)  \n13.2 Define the term \"Dynamic Reconfiguration\" and explain why it is a critical reliability strategy for the weather station software. (3)  \n13.3 Compare the strategies of \"Change Avoidance\" (via throw-away prototyping) and \"Change Tolerance\" (via incremental delivery) in the context of configuring the weather station sensors. (3)\n\n---\n---",
      "section": "C",
      "solution": "Wilderness Weather Station (Coping with Change)\n* **13.1 Environmental Influence**:\n  * The stations are deployed in remote, harsh environments with no electrical grid access.\n  * *Design Impact*: The hardware must be low-power, relying on solar/wind chargers. The software must implement aggressive power-management features (e.g., deep-sleep cycles between readings). It must also save weather data locally in non-volatile flash memory because satellite links are narrow-bandwidth and prone to weather-related outages.\n* **13.2 Dynamic Reconfiguration**:\n  * *Definition*: The ability of a software system to replace components or modify its configuration at runtime without shutting down.\n  * *Criticality*: Since stations are unattended in wilderness areas, physical maintenance is expensive and slow. If a sensor fails or a software bug is detected, the station must dynamically switch to a redundant sensor or download and apply a software patch over a satellite link without interruption.\n* **13.3 Change Avoidance vs. Change Tolerance**:\n  * **Change Avoidance** (Prototyping): Creating a mock interface to validate requirements before deployment, reducing the need for sensor configuration changes later.\n  * **Change Tolerance** (Incremental Delivery): Designing the station's software architecture using a modular, plug-and-play pattern (e.g., microservices or dynamic loading). If a new type of sensor is added, the new driver component can be deployed in a separate increment without altering the core data logging software."
    }
  ]
};
