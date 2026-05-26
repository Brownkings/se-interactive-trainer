// Auto-generated data file. Do not edit directly.
export const subjectsData = {
  "se": {
    "chapters": [
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
    ],
    "exams": [
      {
        "title": "Mock Exam 1 — Practice Examination",
        "questions": [
          {
            "num": "1",
            "title": "Software Engineering Foundations (Chapter 1)",
            "marks": 5,
            "description": "1.1 Explain the difference between \"Software Engineering\" and \"Computer Science\". (2)  \n1.2 List and briefly describe three professional ethics principles defined in the ACM/IEEE Code of Ethics. (2)  \n1.3 How does defining a system boundary (e.g., for the TechFix job management system) help manage project scope? (1)",
            "scenario": "",
            "section": "A",
            "solution": ""
          },
          {
            "num": "2",
            "title": "Software Processes & RUP (Chapter 2)",
            "marks": 6,
            "description": "2.1 Define the term \"Software Process Model\" and contrast plan-driven and agile processes. (2)  \n2.2 The Rational Unified Process (RUP) is a modern generic process model. List the four dynamic phases of RUP in order, and state the main objective of each phase. (4)",
            "scenario": "",
            "section": "A",
            "solution": ""
          },
          {
            "num": "3",
            "title": "Agile Methods & Scrum (Chapter 3)",
            "marks": 7,
            "description": "3.1 The Agile Manifesto values four pairs of items. List three of these pairs, clearly showing which side is preferred. (3)  \n3.2 In Scrum, explain the role of the \"Scrum Master\" and how they differ from a traditional project manager. (2)  \n3.3 Explain two technical or organizational characteristics of a project that would make Agile methods *unsuitable*. (2)",
            "scenario": "",
            "section": "A",
            "solution": ""
          },
          {
            "num": "4",
            "title": "Requirements Engineering (Chapter 4)",
            "marks": 7,
            "description": "4.1 Define \"Functional Requirements\" and \"Non-Functional Requirements\", providing one example of each for a hospital patient system. (2)  \n4.2 Explain what a \"domain requirement\" is and why they present unique challenges to software engineers. (2)  \n4.3 Outline the three stages of the Requirements Change Management process in order. (3)",
            "scenario": "",
            "section": "A",
            "solution": ""
          },
          {
            "num": "5",
            "title": "System Modeling (Chapter 5)",
            "marks": 5,
            "description": "5.1 Explain the difference between the \"External Perspective\", \"Interaction Perspective\", \"Structural Perspective\", and \"Behavioral Perspective\" in system modeling. (2)  \n5.2 Explain what \"Generalization\" and \"Aggregation\" represent in UML class diagrams, and state the visual notation used to represent each. (3)",
            "scenario": "",
            "section": "A",
            "solution": ""
          },
          {
            "num": "6",
            "title": "Architectural Design (Chapter 6)",
            "marks": 5,
            "description": "6.1 Describe the **Repository** architectural pattern. List one major advantage and one major disadvantage of using it. (3)  \n6.2 Briefly describe the 4+1 View Model of software architecture, listing the four primary views. (2)",
            "scenario": "",
            "section": "A",
            "solution": ""
          },
          {
            "num": "7",
            "title": "Software Testing (Chapter 8)",
            "marks": 5,
            "description": "7.1 Explain the difference between **Verification** and **Validation** (V & V). (2)  \n7.2 Define **Test-Driven Development (TDD)** and explain how it simplifies the debugging process. (3)\n\n---",
            "scenario": "",
            "section": "A",
            "solution": ""
          },
          {
            "num": "8",
            "title": "Use Case Modeling (BrightLearn Platform)",
            "marks": 10,
            "description": "Read the scenario below and answer the questions.\n\n> **SCENARIO: BrightLearn Platform**\n> BrightLearn is an online e-learning platform. Students can register for courses, watch video lectures, submit assignments, and take online quizzes. Lecturers can upload learning materials, set quiz questions, and grade submitted assignments. An Administrator manages user accounts, activates/deactivates courses, and generates usage reports. When a student submits an assignment, the system automatically runs it through a Plagiarism Detection Service. Students can optionally request an extension on an assignment deadline, which requires lecturer approval. All users must log in before performing any function.\n\n8.1 Identify the actors in this system. Are there any generalizations between actors? (2)  \n8.2 List the core use cases for the Student, Lecturer, and Administrator. (3)  \n8.3 Identify which use cases require an `<<include>>` relationship and which require an `<<extend>>` relationship based on the scenario. (2)  \n8.4 Describe the structure of a Use Case Diagram for this system, or draw it using ASCII representation, ensuring system boundaries and relationships are represented correctly. (3)",
            "scenario": "",
            "section": "B",
            "solution": ""
          },
          {
            "num": "9",
            "title": "Interaction Modeling (SafePay Fund Transfer)",
            "marks": 10,
            "description": "Read the scenario below and answer the questions.\n\n> **SCENARIO: SafePay App**\n> SafePay is a mobile banking application. When a user initiates a fund transfer, the app sends the request to the Banking Server. The server first checks the user's session validity with the Authentication Service. If the session is valid, the server checks the account balance in the Account Database. If the balance is sufficient, the transaction is processed and a transaction record is saved in the Transaction Database. A confirmation SMS is sent to the user via the SMS Gateway. If the session is invalid, the server returns an error and prompts re-login. If the balance is insufficient, the transaction is rejected and a failure notification is sent.\n\n9.1 List the lifelines that must appear in a sequence diagram for this scenario. (2)  \n9.2 Explain the sequence of interactions that occur when a user successfully transfers funds. Distinguish between call (synchronous) messages and return messages. (4)  \n9.3 How would you represent the session validation check and balance check using UML sequence diagram control structures (combined fragments)? (4)",
            "scenario": "",
            "section": "B",
            "solution": ""
          },
          {
            "num": "10",
            "title": "System Architecture Design (CityParks Booking)",
            "marks": 10,
            "description": "Read the scenario below and answer the questions.\n\n> **SCENARIO: CityParks System**\n> CityParks is a municipal booking system that allows residents to book sports fields and braai areas online or via mobile app. Staff at the Parks Office can view bookings, approve group bookings, and generate reports. Payments are processed through a third-party Payment Gateway. The system must notify users of booking confirmations via email. The municipality's existing HR System provides staff authentication. The system must be accessible from web browsers and smartphones.\n\n10.1 Propose a Layered (N-tier) architecture for the CityParks Booking System. List the layers and explain what components reside in each. (4)  \n10.2 Identify the external systems that must interface with CityParks. (2)  \n10.3 Detail the communication protocols/interfaces (e.g., HTTPS, REST APIs) used for data flow between:\n* The client applications and the backend. (2)\n* The backend and the third-party Payment Gateway. (2)\n\n---",
            "scenario": "",
            "section": "B",
            "solution": ""
          },
          {
            "num": "11",
            "title": "Insulin Pump Control System (Safety-Critical)",
            "marks": 10,
            "description": "Read the case study description and answer the questions.\n\n> **CASE STUDY: The Insulin Pump**\n> The insulin pump is an embedded safety-critical system that monitors blood sugar levels in a diabetic patient and injects insulin automatically to maintain normal blood sugar. The system comprises a blood sugar sensor, a controller, and an electric micro-pump. The software must calculate the dose accurately and ensure the pump delivers it safely.\n\n11.1 Classify the following requirements as functional or non-functional:\n1. \"The software shall calculate the required insulin dose based on the blood glucose sensor reading.\" (1)\n2. \"The system shall not deliver more than 5 units of active insulin in a single hour.\" (1)\n3. \"The blood sensor electrical conductivity measurements shall have an accuracy of 99.5%.\" (1)  \n11.2 Explain the catastrophic impact of failure for both over-delivery and under-delivery of insulin in this system. (4)  \n11.3 Propose and justify a software engineering practice (e.g., formal specification, rigorous verification) to minimize coding errors in this embedded control system. (3)",
            "scenario": "",
            "section": "C",
            "solution": ""
          },
          {
            "num": "12",
            "title": "Mentcare (Information System Evolution)",
            "marks": 10,
            "description": "Read the case study description and answer the questions.\n\n> **CASE STUDY: Mentcare System**\n> Mentcare is a mental health care patient management system. It maintains records of patients, consultations, and treatments. It is used by doctors, nurses, receptionists, and clinical managers. Clinicians can copy records to local laptops for disconnected use during home visits.\n\n12.1 Explain the \"Distributed Data Consistency\" challenge that arises when clinicians take local copies of patient records on laptops and edit them offline. How should the system handle synchronization? (4)  \n12.2 The Mentcare system must comply with data protection (privacy) laws as well as mental health laws (which permit compulsory detention under strict conditions). Explain how these laws can impose conflicting requirements on the software. (3)  \n12.3 Contrast the suitability of a plan-driven process vs. an agile process for developing the Mentcare system. Which is preferred and why? (3)",
            "scenario": "",
            "section": "C",
            "solution": ""
          },
          {
            "num": "13",
            "title": "Wilderness Weather Station (Coping with Change)",
            "marks": 10,
            "description": "Read the case study description and answer the questions.\n\n> **CASE STUDY: Wilderness Weather Station**\n> Weather stations are deployed in remote, uninhabited areas to collect meteorological data. They are battery-powered, solar-charged, and communicate via narrow-bandwidth satellite links. The system must run unattended indefinitely.\n\n13.1 Explain how the physical operational environment of the weather station influences the non-functional requirements and design of the station software. (4)  \n13.2 Define the term \"Dynamic Reconfiguration\" and explain why it is a critical reliability strategy for the weather station software. (3)  \n13.3 Compare the strategies of \"Change Avoidance\" (via throw-away prototyping) and \"Change Tolerance\" (via incremental delivery) in the context of configuring the weather station sensors. (3)\n\n---\n---",
            "scenario": "",
            "section": "C",
            "solution": ""
          }
        ],
        "id": "mock_exam_1"
      },
      {
        "title": "SPU Main Exam — June 2025",
        "questions": [
          {
            "num": "1",
            "title": "Software Testing & Development Processes",
            "marks": 24,
            "description": "1.1 A software company is developing an e-commerce application. During development testing, a tester finds that a discount calculation function does not apply the correct discount percentage.\n\n(a) Identify the type of defect in this scenario. (2)\n(b) Suggest a suitable approach for fixing the defect using development testing techniques. (4)\n(c) Explain how test-driven development (TDD) could have prevented this issue. (4)\n\n1.2 A company is developing a new e-commerce website. Identify the most suitable SDLC model for this project (2) and justify your choice (2). Then, describe how each phase of the chosen model would apply to the project. (10)\n\n---",
            "scenario": "",
            "section": "A",
            "solution": "Software Testing & Development Processes\n\n**1.1(a) Type of Defect (2 marks)**\nThis is a **logic defect** (also called a logical error or algorithmic defect). The discount calculation function exists and executes without crashing, but it produces incorrect output because the internal logic or formula is wrong — it does not apply the correct discount percentage.\n\n**1.1(b) Fixing using Development Testing Techniques (4 marks)**\nA suitable approach is **Unit Testing combined with Defect Testing**:\n1. **Write unit test cases** that cover boundary and equivalence classes for the discount function — e.g., test with 0% discount, 10% discount, 50% discount, and 100% discount inputs.\n2. **Run the failing tests** to confirm the defect and identify the exact input conditions that produce wrong output.\n3. **Debug the logic** — inspect the discount calculation formula, identify the incorrect operator or value (e.g., multiplying instead of dividing, or using a hardcoded percentage).\n4. **Fix the code** and re-run all unit tests to confirm the fix does not introduce regressions.\n\n**1.1(c) How TDD Could Have Prevented This (4 marks)**\nTest-Driven Development (TDD) follows a strict cycle: **Red → Green → Refactor**.\n1. **Write the test first**: Before writing the discount function, the developer writes automated tests specifying expected outputs for given inputs (e.g., a R100 item with 20% discount should cost R80).\n2. **Write minimal code to pass**: The developer then writes only enough code to make all tests pass correctly.\n3. **Refactor safely**: Any changes to the discount logic are immediately validated against the existing test suite.\n4. **Prevention**: Since the tests define the correct behavior upfront, the logic defect would have been caught immediately — the test would fail (Red) and the developer would fix the formula before moving on. TDD also simplifies debugging because when a test fails, the bug must be in the most recently written code.\n\n**1.2 Suitable SDLC Model (14 marks)**\n\n**Model**: The **Incremental Development Model** (also acceptable: Agile/Iterative) is the most suitable.\n\n**Justification (2 marks)**:\n- E-commerce requirements change rapidly based on market trends, user feedback, and competitive pressure.\n- Incremental development allows early delivery of a working product with core features (e.g., product catalogue, shopping cart), with additional features (e.g., recommendation engine, loyalty programs) added in subsequent increments.\n\n**Phases applied to the project (10 marks)**:\n1. **Requirements Phase**: Gather initial requirements from stakeholders — identify core features such as product browsing, user registration, shopping cart, checkout, and payment processing. Prioritize features for the first increment.\n2. **Design Phase**: Design the system architecture — choose a layered or microservices architecture. Design the database schema for products, users, orders. Design the user interface wireframes and API specifications.\n3. **Implementation/Coding Phase**: Develop the first increment with highest-priority features (e.g., product catalogue and user registration). Use modern web technologies (HTML/CSS/JavaScript frameworks, backend APIs).\n4. **Testing Phase**: Perform unit testing on individual components (e.g., discount calculator, cart total). Conduct integration testing between frontend and backend. Perform user acceptance testing (UAT) with sample customers.\n5. **Deployment/Delivery Phase**: Deploy the first increment to a production environment. Gather user feedback and usage analytics. Plan the next increment based on feedback and remaining requirements.\n\n---"
          },
          {
            "num": "2",
            "title": "Architectural Design & Patterns",
            "marks": 18,
            "description": "2.1 A university is developing a new student management system. The system needs to track student registration, grades, and course enrollments.\n\n(a) Identify and briefly describe the four views in the 4+1 architectural model that should be considered in this system. (4)\n(b) How would the use-case view (+1) contribute to the architectural design? (2)\n(c) Which view is most useful for ensuring system scalability and why? (2)\n\n2.2 A software company is developing an integrated development environment (IDE) that must store project files, track changes, and provide real-time collaboration.\n\n(a) What are the key differences between a repository architecture and a client-server architecture? (4)\n(b) Which architecture would be better suited for the IDE and why? (3)\n(c) What potential issues might arise when using a repository architecture for large-scale software projects? (3)\n\n---",
            "scenario": "",
            "section": "A",
            "solution": "Architectural Design & Patterns\n\n**2.1(a) Four Views of the 4+1 Model (4 marks)**:\n1. **Logical View**: Describes the system's functional structure — key abstractions as objects or classes. For the student management system, this would include classes like Student, Course, Grade, Enrollment.\n2. **Process View**: Describes the system's runtime behavior — concurrency, synchronization, and performance. Shows how processes handle concurrent student registrations and grade queries.\n3. **Development View**: Describes the system's decomposition into software modules, packages, and libraries. Shows how the codebase is organized (e.g., registration module, grading module, reporting module).\n4. **Physical View**: Describes the mapping of software components to hardware infrastructure — servers, databases, network topology. Shows deployment on web servers, database servers, and load balancers.\n\n**2.1(b) Use-Case View (+1) Contribution (2 marks)**:\nThe use-case view serves as the \"+1\" view that ties all four views together. It captures key scenarios (e.g., \"Student registers for a course,\" \"Lecturer submits grades\") that validate whether the architecture supports the required functionality. It ensures architectural decisions are driven by actual system behavior rather than abstract design preferences.\n\n**2.1(c) Most Useful View for Scalability (2 marks)**:\nThe **Physical View** (Deployment View) is most useful for ensuring scalability because it explicitly models the hardware infrastructure, server allocation, load balancing, and network configuration. It allows architects to plan for horizontal scaling (adding more servers), database replication, and caching strategies to handle increasing numbers of students.\n\n**2.2(a) Repository vs. Client-Server Architecture (4 marks)**:\n| Aspect | Repository Architecture | Client-Server Architecture |\n|--------|------------------------|--------------------------|\n| Data Storage | All data is stored in a single central repository accessed by all components | Data is distributed between server(s) and clients |\n| Communication | Components communicate indirectly through the shared data store | Components communicate directly via network requests (request/response) |\n| Coupling | Components are loosely coupled to each other but tightly coupled to the repository | Clients are coupled to the server's API, but independent of each other |\n| Control Flow | Typically passive — components are triggered by data changes or independently poll the repository | Active — clients send requests, server processes and responds |\n\n**2.2(b) Better Architecture for the IDE (3 marks)**:\nA **Repository Architecture** is better suited for the IDE because:\n- The IDE needs a central store for project files, version history, and metadata that multiple tools (editor, compiler, debugger, version control) must access simultaneously.\n- All IDE components (code editor, syntax checker, build system, search indexer) operate on the same shared data — the project's source files. A central repository allows them to share data efficiently without direct inter-component communication.\n- It simplifies adding new tools (plugins) that just need to read from and write to the shared repository.\n\n**2.2(c) Potential Issues with Repository Architecture at Scale (3 marks)**:\n1. **Single point of failure**: If the central repository becomes unavailable, all components stop functioning. For large-scale projects, this is a critical reliability risk.\n2. **Performance bottleneck**: As project size grows (millions of files, many concurrent users), the repository becomes a bottleneck — all read/write operations contend for access to the same data store.\n3. **Schema rigidity**: Changing the repository data format or schema requires updating all components that interact with it, making evolution difficult in large projects with many plugins.\n\n---"
          },
          {
            "num": "3",
            "title": "System Modeling & Agile Development",
            "marks": 21,
            "description": "3.1 A university is developing an online student registration system that interacts with its existing student database and the financial office system.\n\n(a) Draw a context model for this system, showing external interactions. (5)\n(b) Identify at least three use cases that would be relevant for this system and justify their inclusion. (3)\n\n3.2 A company is developing a web-based e-commerce system using an incremental development approach. However, after multiple iterations, the system structure has started to degrade, making it difficult to integrate new features. What steps can the company take to address this issue and improve the maintainability of the system? (4)\n\n3.3 Your team is using Extreme Programming (XP) to develop an online banking system. A senior developer insists on skipping the \"test-first development\" approach to speed up progress. As the team lead, how do you respond? (4)\n\n3.4 What are the four core values of the Agile Manifesto? (4)\n\n3.5 Define \"Continuous Integration\" in Agile development. (1)\n\n---",
            "scenario": "",
            "section": "A",
            "solution": "System Modeling & Agile Development\n\n**3.1(a) Context Model Description (5 marks)**:\nThe context model shows the Online Student Registration System (OSRS) as a central process with the following external entities and interactions:\n- **Students** → submit registration requests, receive confirmation/rejection notifications\n- **Student Database** → OSRS queries existing student records and writes new registration data\n- **Financial Office System** → OSRS sends fee calculations and payment requests; receives payment confirmations\n- **Academic Departments** → provide course availability and capacity information\n- **University Administration** → sets policies, enrollment deadlines, and receives enrollment reports\n\nThe system boundary encloses the OSRS, while all external entities sit outside the boundary with data flows (arrows) showing information exchange between them.\n\n**3.1(b) Three Use Cases with Justification (3 marks)**:\n1. **Register for Course**: Core functionality — students must be able to select and enroll in courses. Without this, the system has no primary purpose.\n2. **Process Payment**: Essential — the system interacts with the financial office to handle tuition fees, which is a mandatory step before enrollment is confirmed.\n3. **View Academic Record**: Important for students to check their current enrollments, grades, and outstanding fees, supporting the system's usability and transparency requirements.\n\n**3.2 Addressing System Structure Degradation (4 marks)**:\n1. **Refactoring**: Systematically restructure the existing code without changing its external behavior — clean up duplicated code, simplify complex modules, and improve naming conventions.\n2. **Re-architecting**: If degradation is severe, redesign the system architecture — move from a monolithic structure to a modular or microservices architecture to improve separation of concerns.\n3. **Introduce automated testing**: Add comprehensive unit and integration tests before refactoring to ensure changes don't break existing functionality.\n4. **Technical debt management**: Allocate dedicated time in each iteration for addressing technical debt rather than only focusing on new features.\n\n**3.3 Responding to Skipping Test-First Development in XP (4 marks)**:\nAs team lead, I would firmly but constructively push back:\n1. **Explain the XP principle**: Test-first development is a core XP practice, not optional. Skipping it violates the methodology the team agreed to follow.\n2. **Highlight the risks**: In an online banking system, untested code can lead to financial calculation errors, security vulnerabilities, and data corruption — all of which have severe legal and financial consequences.\n3. **Demonstrate the long-term cost**: While writing tests first may seem slower initially, it reduces debugging time, catches defects early (when they're cheapest to fix), and provides a safety net for future changes.\n4. **Propose a compromise**: If the developer is concerned about speed, pair-program with them to demonstrate the TDD workflow's efficiency, rather than abandoning the practice entirely.\n\n**3.4 Four Core Values of the Agile Manifesto (4 marks)**:\n1. **Individuals and interactions** over processes and tools\n2. **Working software** over comprehensive documentation\n3. **Customer collaboration** over contract negotiation\n4. **Responding to change** over following a plan\n\n**3.5 Continuous Integration Definition (1 mark)**:\nContinuous Integration (CI) is the practice of frequently merging all developers' working code into a shared mainline (multiple times per day), with each integration automatically built and tested to detect integration errors as quickly as possible.\n\n---"
          },
          {
            "num": "4",
            "title": "Requirements Engineering (Scenario-Based)",
            "marks": 37,
            "description": "**Scenario: Online University Enrollment System**\n\nThe Ministry of Higher Education has mandated all universities to implement an **Online University Enrollment System (OUES)** that allows students to register for courses, pay fees, and receive academic notifications. The system must handle both **functional** and **non-functional** requirements. It should allow students to submit applications, administrators to verify documents, and financial offices to process tuition payments. Additionally, the system must meet security, performance, and usability constraints.\n\nThe **requirements engineering team** at a leading university is responsible for defining system requirements and ensuring that stakeholders' needs are met. They must gather requirements, specify functionalities, validate system constraints, and manage changes over time. However, challenges arise when some departments demand additional features, and students report usability issues. The team must ensure the system remains **scalable, secure, and easy to use** while aligning with institutional policies.\n\n4.1 Identifying and Classifying Requirements (8 Marks)\n\n(a) Based on the scenario, list three functional and two non-functional requirements for OUES. (5)\n(b) Explain why non-functional requirements are critical in system success. Provide an example related to OUES. (3)\n\n4.2 Requirements Elicitation and Analysis (8 Marks)\n\n(a) Identify two stakeholders involved in gathering requirements for OUES and describe their roles. (4)\n(b) What two elicitation techniques would you use to gather requirements for OUES? Justify your choices. (4)\n\n4.3 Requirements Specification and Validation (6 Marks)\n\n(a) Write a well-structured requirement statement for \"Student Course Registration.\" (3)\n(b) Name and explain one requirement validation technique applicable to OUES. (3)\n\n4.4 Managing Requirements Changes (7 Marks)\n\n(a) Describe a possible requirement change request for OUES and explain how it could impact system design. (3)\n(b) How should the requirements engineering team handle change management effectively? Provide two key steps. (4)\n\n4.5 Software Requirements Document (SRD) (8 Marks)\n\n(a) Identify three key sections of the Software Requirements Document for OUES and explain their purpose. (6)\n(b) Why is the SRD essential in software development? (2)\n\n---\n---",
            "scenario": "",
            "section": "A",
            "solution": "Requirements Engineering (OUES)\n\n**4.1(a) Functional and Non-Functional Requirements (5 marks)**:\n\n*Functional Requirements*:\n1. The system shall allow students to register for courses online by selecting available courses and submitting enrollment forms.\n2. The system shall enable administrators to verify and approve student application documents.\n3. The system shall process tuition fee payments through integration with the university's financial office.\n\n*Non-Functional Requirements*:\n1. **Performance**: The system shall handle at least 5,000 concurrent user sessions during peak registration periods without response times exceeding 3 seconds.\n2. **Security**: All student personal data and financial transactions shall be encrypted using TLS 1.2 or higher.\n\n**4.1(b) Why Non-Functional Requirements Are Critical (3 marks)**:\nNon-functional requirements define system quality attributes that determine whether the system is usable, reliable, and secure in practice. A system can implement all functional requirements correctly but still fail if it's too slow, insecure, or unreliable.\n*Example*: If OUES does not meet performance requirements, thousands of students trying to register simultaneously during enrollment week would experience timeouts and crashes, making the system unusable despite having correct registration logic.\n\n**4.2(a) Two Stakeholders and Their Roles (4 marks)**:\n1. **University Students**: The primary end-users who will use the system to register for courses, pay fees, and receive notifications. Their input is critical for understanding usability requirements, workflow expectations, and common pain points with existing manual processes.\n2. **University Administration/Registrar**: Responsible for setting enrollment policies, managing course offerings, and overseeing the registration process. They provide requirements related to business rules, approval workflows, reporting needs, and compliance with institutional policies.\n\n**4.2(b) Two Elicitation Techniques with Justification (4 marks)**:\n1. **Interviews**: Conducting structured interviews with key stakeholders (registrar staff, financial office, student representatives) allows deep exploration of complex requirements and business rules. *Justification*: OUES involves multiple departments with different needs — interviews allow the team to understand each stakeholder's unique perspective and uncover implicit requirements.\n2. **Prototyping**: Building a simple interactive prototype of the enrollment interface for students to test. *Justification*: Students may struggle to articulate their needs in abstract terms — a prototype gives them something concrete to evaluate and provide feedback on, revealing usability issues and missing features early.\n\n**4.3(a) Well-Structured Requirement Statement (3 marks)**:\n\"The OUES system shall allow authenticated students to search for available courses by department, semester, and keyword, select one or more courses, and submit a registration request. Upon successful submission, the system shall display a confirmation message with a unique registration reference number and send a confirmation email to the student's registered email address within 30 seconds.\"\n\n**4.3(b) Requirement Validation Technique (3 marks)**:\n**Requirements Review (Inspection)**: A structured review process where a team of reviewers (developers, testers, stakeholders, domain experts) systematically examines each requirement for completeness, consistency, correctness, and ambiguity. Each reviewer checks requirements against a predefined checklist.\n*Application to OUES*: The requirements engineering team organizes a review meeting where administrators, student representatives, and developers walk through each requirement statement to verify that it accurately captures stakeholder needs, doesn't conflict with other requirements, and is technically feasible.\n\n**4.4(a) Possible Change Request and Impact (3 marks)**:\n*Change Request*: The Financial Office requests that OUES support installment payment plans, allowing students to pay tuition in 3 monthly installments rather than a single lump sum.\n*Impact on System Design*: This change requires modifications to the payment processing module (new payment scheduling logic), the database schema (new tables for installment tracking and due dates), the notification system (automated payment reminders), and the student dashboard (displaying payment plan status). It may also require integration with external payment gateways for recurring billing.\n\n**4.4(b) Handling Change Management Effectively (4 marks)**:\n1. **Change Impact Analysis**: Before approving any change, formally assess its impact on existing requirements, system architecture, development timeline, and budget. Use requirements traceability matrices to identify all affected components and estimate the cost of implementation.\n2. **Change Control Board (CCB) Review**: Establish a formal change control process where a designated board of stakeholders reviews each change request, evaluates its priority and feasibility, and makes an informed approve/reject/defer decision. This prevents uncontrolled scope creep and ensures changes align with project objectives and available resources.\n\n**4.5(a) Three Key Sections of the SRD (6 marks)**:\n1. **System Overview / Introduction**: Describes the purpose and scope of the OUES system, target users, and the problem it solves. *Purpose*: Provides context for all readers and establishes the boundaries of the system being specified.\n2. **Functional Requirements Specification**: Details each functional requirement — what the system must do, including input/output specifications, business rules, and use case descriptions. *Purpose*: Serves as the definitive reference for developers during implementation and testers during validation.\n3. **Non-Functional Requirements**: Specifies quality attributes including performance benchmarks, security standards, availability targets, and usability criteria. *Purpose*: Ensures the system meets operational quality standards beyond basic functionality.\n\n**4.5(b) Why the SRD Is Essential (2 marks)**:\nThe SRD serves as the **contractual agreement** between stakeholders and the development team — it establishes a shared, unambiguous understanding of what the system must do. It is essential because it provides a baseline for design, implementation, testing, and acceptance, and it enables traceability from requirements through to test cases, ensuring nothing is overlooked during development."
          }
        ],
        "id": "spu_main_2025"
      },
      {
        "title": "Practice Exam 3 — Comprehensive Review",
        "questions": [
          {
            "num": "1",
            "title": "Software Engineering Principles & Ethics",
            "marks": 12,
            "description": "1.1 A startup is developing a social media app that collects extensive personal data from users, including location tracking and private messages. During development, a developer discovers that the app's privacy policy does not fully disclose the extent of data collection to users.\n\n(a) Identify two ethical principles from the ACM/IEEE Code of Ethics that are being violated in this scenario. (4)\n(b) As the lead software engineer, explain what actions you would take to address this ethical concern. (4)\n(c) Explain the difference between software engineering and computer science in the context of building this social media application. (4)",
            "scenario": "",
            "section": "A",
            "solution": "Software Engineering Principles & Ethics\n\n**1.1(a) Two Ethical Principles Being Violated (4 marks)**:\n1. **Public Interest**: Software engineers shall act consistently with the public interest. Failing to disclose the full extent of data collection violates users' right to informed consent and potentially puts their privacy and safety at risk.\n2. **Honesty and Trustworthiness (Product)**: Software engineers shall ensure their products meet the highest professional standards. A misleading privacy policy is deceptive and undermines user trust, violating the principle that engineers should be honest about system capabilities and limitations.\n\n**1.1(b) Actions to Address the Ethical Concern (4 marks)**:\n1. **Raise the concern formally**: Document the discrepancy between actual data collection and the privacy policy, and escalate it to management and the legal team in writing.\n2. **Recommend immediate disclosure**: Advocate for updating the privacy policy to accurately reflect all data collection practices before the next app release.\n3. **Propose privacy-by-design changes**: Suggest implementing data minimization — only collect data that is strictly necessary for the app's functionality, and give users granular control over what they share.\n4. **Consider whistleblowing**: If management refuses to address the issue, the ACM/IEEE code supports reporting the concern to relevant data protection authorities, as public interest overrides employer loyalty.\n\n**1.1(c) Software Engineering vs. Computer Science (4 marks)**:\n- **Computer Science** in this context would focus on the theoretical foundations — designing efficient algorithms for the social media feed ranking, optimizing data structures for storing user posts, developing machine learning models for content recommendation, and analyzing computational complexity of search operations.\n- **Software Engineering** focuses on the practical, systematic development of the complete application — managing the development team, defining the software architecture, implementing reliable deployment pipelines, ensuring the system scales to millions of users, handling security and privacy requirements, conducting thorough testing, and maintaining the system after launch. Software engineering applies engineering discipline to ensure the product is delivered on time, within budget, and meets quality standards."
          },
          {
            "num": "2",
            "title": "Software Process Models",
            "marks": 12,
            "description": "2.1 A government agency needs to develop a tax filing system that must comply with strict regulatory requirements. The system must be fully documented, auditable, and pass government security certification before deployment. The requirements are well-understood and unlikely to change significantly.\n\n(a) Which software process model would you recommend for this project? Justify your choice with two reasons. (4)\n(b) Compare your recommended model with Agile development, explaining why Agile would be less suitable for this specific project. (4)\n\n2.2 Explain the four phases of the Rational Unified Process (RUP) and describe the key deliverable produced in each phase. (4)\n\n---",
            "scenario": "",
            "section": "A",
            "solution": "Software Process Models\n\n**2.1(a) Recommended Model with Justification (4 marks)**:\nThe **Waterfall Model** (plan-driven process) is recommended.\n*Justification*:\n1. **Stable, well-understood requirements**: Tax filing regulations are well-defined by law and unlikely to change during development, making upfront requirements analysis feasible and effective.\n2. **Regulatory compliance and documentation**: The Waterfall model mandates comprehensive documentation at each phase (requirements specification, design documents, test plans), which is essential for government security certification audits and regulatory compliance.\n\n**2.1(b) Comparison with Agile (4 marks)**:\nAgile would be less suitable because:\n- Agile prioritizes working software over comprehensive documentation, but this project requires extensive documentation for security certification and government audits.\n- Agile's iterative, evolving requirements approach introduces risk in a regulatory context where the system must meet fixed legal specifications before deployment.\n- Agile's informal communication style may not produce the audit trail required by government security assessments.\n- The tax filing system cannot be deployed incrementally — a partially complete tax system would be unusable and potentially illegal.\n\n**2.2 Four Phases of RUP (4 marks)**:\n1. **Inception**: Establish the business case, define the project scope, and identify key risks. *Deliverable*: Vision document and initial use case model.\n2. **Elaboration**: Develop the system architecture, refine requirements, and mitigate the highest-priority risks. *Deliverable*: Software Architecture Document and detailed use case specifications.\n3. **Construction**: Build the complete system through iterative development, implementing and testing all features. *Deliverable*: Working software (beta release) with test results.\n4. **Transition**: Deploy the system to end users, conduct user training, and perform final acceptance testing. *Deliverable*: Final release with user manuals and deployment documentation.\n\n---"
          },
          {
            "num": "3",
            "title": "Architectural Patterns & Design",
            "marks": 12,
            "description": "3.1 A hospital is developing a patient monitoring system that collects real-time data from bedside medical devices (heart rate monitors, blood pressure sensors, oxygen level sensors) and displays alerts on nursing station screens and doctors' mobile devices.\n\n(a) Propose a suitable architectural pattern for this system. Justify your choice. (4)\n(b) Explain how the chosen architecture handles the requirement that multiple displays must update simultaneously when a patient's vital signs change. (4)\n(c) Identify one key non-functional requirement for this system and explain how the architecture addresses it. (4)",
            "scenario": "",
            "section": "A",
            "solution": "Architectural Patterns & Design\n\n**3.1(a) Suitable Architecture with Justification (4 marks)**:\nThe **Publish-Subscribe (Event-Driven) Architecture** is most suitable.\n*Justification*: Medical devices (publishers) generate continuous streams of vital sign data. Multiple consumers (nursing station screens, doctor mobile devices, alarm systems) need to receive these updates simultaneously without tight coupling to the devices. The publish-subscribe pattern allows medical devices to publish events to topics (e.g., \"patient-101-heart-rate\"), and all subscribed displays automatically receive updates without the devices needing to know about each display.\n\n**3.1(b) Handling Simultaneous Updates (4 marks)**:\nIn the publish-subscribe architecture, when a patient's vital signs change:\n1. The bedside sensor publishes a new data event to the message broker/event bus.\n2. All subscribed clients (nursing station screen, doctor's mobile app, central monitoring dashboard) receive the event notification simultaneously through their subscriptions.\n3. Each subscriber independently processes the event and updates its display.\n4. New displays can be added simply by subscribing to the relevant patient's topic — no changes to the publishing devices are needed. This ensures all displays show consistent, real-time data without requiring point-to-point connections.\n\n**3.1(c) Key Non-Functional Requirement (4 marks)**:\n**Reliability/Availability**: The system must be operational 24/7 with no single point of failure, as patient lives depend on continuous monitoring.\n*How the architecture addresses it*: The event-driven architecture supports redundancy — multiple instances of the message broker can run in a cluster. If one broker fails, another takes over. Subscribers automatically reconnect. Additionally, events can be persisted in a queue, so if a display temporarily disconnects, it receives missed events upon reconnection, ensuring no critical alerts are lost."
          },
          {
            "num": "4",
            "title": "System Modeling & UML",
            "marks": 10,
            "description": "4.1 A library management system allows members to search for books, borrow books, return books, and pay fines. Librarians can add new books, remove damaged books, and generate overdue reports. The system interacts with an external SMS gateway to send overdue notifications.\n\n(a) Identify all actors in this system. (2)\n(b) List six use cases and assign each to the appropriate actor. (3)\n(c) Identify one <<include>> relationship and one <<extend>> relationship from the use cases. Justify each. (3)\n(d) Explain what a sequence diagram would show for the \"Borrow Book\" use case, listing the key messages exchanged between objects. (2)\n\n---",
            "scenario": "",
            "section": "A",
            "solution": "System Modeling & UML\n\n**4.1(a) Actors (2 marks)**:\n1. **Library Member** (primary actor)\n2. **Librarian** (primary actor)\n3. **SMS Gateway** (external system actor)\n\n**4.1(b) Six Use Cases (3 marks)**:\n1. Search for Books → Library Member\n2. Borrow Book → Library Member\n3. Return Book → Library Member\n4. Pay Fine → Library Member\n5. Add New Book → Librarian\n6. Generate Overdue Report → Librarian\n\n**4.1(c) Include and Extend Relationships (3 marks)**:\n- **<<include>>**: \"Borrow Book\" includes \"Check Membership Status\" — every time a member borrows a book, the system must verify their membership is valid and they haven't exceeded their borrowing limit. This is mandatory behavior.\n- **<<extend>>**: \"Return Book\" may be extended by \"Calculate Fine\" — when a book is returned late, the system calculates the overdue fine. This only occurs conditionally (when the book is overdue), making it an extension rather than an inclusion.\n\n**4.1(d) Sequence Diagram for Borrow Book (2 marks)**:\nKey messages exchanged:\n1. Member → System: requestBorrow(bookID, memberID)\n2. System → MemberDatabase: validateMembership(memberID)\n3. MemberDatabase → System: memberValid(true)\n4. System → BookCatalogue: checkAvailability(bookID)\n5. BookCatalogue → System: available(true)\n6. System → BookCatalogue: updateStatus(bookID, \"borrowed\")\n7. System → LoanRecord: createLoan(memberID, bookID, dueDate)\n8. System → Member: displayConfirmation(loanDetails)\n\n---"
          },
          {
            "num": "5",
            "title": "Requirements Engineering",
            "marks": 14,
            "description": "**Scenario: Smart Campus Parking System**\n\nA university wants to develop a **Smart Campus Parking System (SCPS)** that allows students and staff to find available parking spots in real-time, reserve spots in advance, and pay parking fees via a mobile app. The system uses IoT sensors in each parking bay to detect vehicle presence. Campus security can monitor the parking lots through a dashboard, issue virtual parking violations, and generate occupancy reports. The system must integrate with the university's existing student/staff database for user authentication.\n\n5.1 Identify and classify the following requirements as functional or non-functional:\n(a) \"The system shall display available parking spots on a real-time map.\" (1)\n(b) \"The system shall process parking reservations within 2 seconds.\" (1)\n(c) \"The system shall send a push notification when a reserved spot is occupied by an unauthorized vehicle.\" (1)\n(d) \"The system shall be available 99.9% of the time during business hours.\" (1)\n\n5.2 Identify three stakeholders for the SCPS and explain what requirements each would contribute. (6)\n\n5.3 Describe two challenges the requirements engineering team might face when gathering requirements for this system. (4)",
            "scenario": "",
            "section": "A",
            "solution": "Requirements Engineering (SCPS)\n\n**5.1 Requirement Classification (4 marks)**:\n(a) **Functional** — describes a specific service the system provides (displaying available spots).\n(b) **Non-Functional (Performance)** — specifies a timing constraint on system response.\n(c) **Functional** — describes a specific system behavior triggered by a condition.\n(d) **Non-Functional (Availability)** — specifies a system quality attribute.\n\n**5.2 Three Stakeholders and Their Requirements (6 marks)**:\n1. **Students/Staff (End Users)**: Would contribute requirements for the mobile app interface — real-time parking availability display, reservation functionality, mobile payment integration, navigation to reserved spots, and notification preferences. Their focus is on usability and convenience.\n2. **Campus Security**: Would contribute requirements for the monitoring dashboard — real-time occupancy visualization, ability to issue virtual parking violations, alert notifications for unauthorized parking, historical occupancy reports, and integration with existing campus security systems.\n3. **University IT Department**: Would contribute technical requirements — integration with the existing student/staff authentication database, data storage and backup specifications, network infrastructure requirements for IoT sensors, API specifications, system maintenance and update procedures, and cybersecurity requirements.\n\n**5.3 Two Challenges in Requirements Gathering (4 marks)**:\n1. **Conflicting stakeholder priorities**: Students may prioritize ease of use and low cost, while campus security prioritizes comprehensive monitoring and enforcement capabilities, and IT prioritizes security and maintainability. Balancing these competing interests requires careful negotiation and prioritization, which can delay requirements finalization.\n2. **IoT technology uncertainty**: Since the system relies on IoT sensors for parking bay detection, the requirements team may struggle to specify exact technical requirements without prototyping — questions about sensor accuracy, network latency, battery life, and environmental durability (rain, snow, heat) may not have clear answers upfront, requiring iterative requirements refinement."
          },
          {
            "num": "6",
            "title": "Software Testing Strategies",
            "marks": 10,
            "description": "6.1 A banking application has a function that calculates loan interest based on the principal amount, interest rate, and loan duration. The function uses the formula: Interest = Principal × Rate × Duration.\n\n(a) Design three test cases using equivalence partitioning for this function. Specify the input values and expected output for each test case. (3)\n(b) Design two boundary value test cases for the loan duration parameter, assuming valid duration is between 1 and 30 years. (2)\n\n6.2 Explain the difference between:\n(a) Unit testing and integration testing. (2)\n(b) Black-box testing and white-box testing. (2)\n\n6.3 In the context of the banking application, why is regression testing important after fixing a bug in the interest calculation function? (1)\n\n---",
            "scenario": "",
            "section": "A",
            "solution": "Software Testing Strategies\n\n**6.1(a) Three Test Cases Using Equivalence Partitioning (3 marks)**:\n| Test Case | Principal (R) | Rate (%) | Duration (years) | Expected Output (R) | Partition |\n|-----------|--------------|----------|-------------------|---------------------|-----------|\n| TC1 | 10,000 | 5 | 10 | 5,000 | Valid: normal positive values |\n| TC2 | 0 | 5 | 10 | 0 | Boundary: zero principal |\n| TC3 | -5,000 | 5 | 10 | Invalid/Error | Invalid: negative principal |\n\n**6.1(b) Two Boundary Value Test Cases for Duration (2 marks)**:\n| Test Case | Duration | Expected Result |\n|-----------|----------|-----------------|\n| BV1 | 0 years | Invalid — below minimum (boundary just outside valid range) |\n| BV2 | 1 year | Valid — minimum accepted duration (boundary at valid edge) |\n| BV3 | 30 years | Valid — maximum accepted duration (boundary at valid edge) |\n| BV4 | 31 years | Invalid — above maximum (boundary just outside valid range) |\n\n**6.2(a) Unit Testing vs. Integration Testing (2 marks)**:\n- **Unit Testing**: Tests individual components (functions, methods, classes) in isolation to verify each unit works correctly on its own. Example: testing the interest calculation function alone with mock inputs.\n- **Integration Testing**: Tests the interaction between two or more integrated components to verify they work correctly together. Example: testing that the interest calculation function correctly receives data from the loan application form and stores results in the database.\n\n**6.2(b) Black-Box vs. White-Box Testing (2 marks)**:\n- **Black-Box Testing**: Tests the system based only on its inputs and expected outputs without knowledge of the internal code structure. The tester treats the system as a \"black box.\" Focus is on functional behavior.\n- **White-Box Testing**: Tests the system with full knowledge of the internal code structure — the tester designs tests to exercise specific code paths, branches, and conditions. Focus is on code coverage and internal logic.\n\n**6.3 Importance of Regression Testing (1 mark)**:\nRegression testing ensures that the bug fix in the interest calculation function has not accidentally broken other parts of the system that depend on it (e.g., loan approval workflow, monthly statement generation, tax reporting). Without regression testing, a fix in one area could introduce new defects elsewhere.\n\n---"
          },
          {
            "num": "7",
            "title": "Agile Development Practices",
            "marks": 12,
            "description": "7.1 A software team is transitioning from a Waterfall approach to Scrum for developing a food delivery mobile application.\n\n(a) Explain the three key roles in a Scrum team and their responsibilities. (6)\n(b) Describe the purpose of the following Scrum ceremonies: Sprint Planning, Daily Standup, and Sprint Retrospective. (3)\n(c) What is a Product Backlog and how does it differ from a Sprint Backlog? (3)",
            "scenario": "",
            "section": "A",
            "solution": "Agile Development Practices\n\n**7.1(a) Three Scrum Roles (6 marks)**:\n1. **Product Owner**: Represents the stakeholders and customers. Responsible for defining and prioritizing the Product Backlog, ensuring the team builds the most valuable features first. For the food delivery app, they decide whether to prioritize the order tracking feature or the restaurant review feature.\n2. **Scrum Master**: A servant-leader who facilitates the Scrum process, removes impediments, and shields the team from external distractions. They are NOT a traditional project manager — they don't assign tasks. They ensure Scrum ceremonies are productive and the team follows Agile principles.\n3. **Development Team**: A self-organizing, cross-functional group (typically 5-9 members) responsible for delivering potentially shippable product increments at the end of each sprint. They collectively decide how to accomplish the work and hold each other accountable.\n\n**7.1(b) Scrum Ceremonies (3 marks)**:\n1. **Sprint Planning**: The team selects items from the Product Backlog to include in the upcoming Sprint and defines how they will be implemented. Produces the Sprint Backlog.\n2. **Daily Standup (Daily Scrum)**: A 15-minute daily meeting where each team member answers: What did I do yesterday? What will I do today? Are there any impediments? Promotes transparency and early problem detection.\n3. **Sprint Retrospective**: Held at the end of each sprint, the team reflects on what went well, what didn't, and what improvements to make in the next sprint. Drives continuous process improvement.\n\n**7.1(c) Product Backlog vs. Sprint Backlog (3 marks)**:\n- **Product Backlog**: A dynamic, prioritized list of ALL features, enhancements, and bug fixes for the entire product. Owned by the Product Owner. It evolves throughout the project's lifetime and represents everything that could potentially be built.\n- **Sprint Backlog**: A subset of the Product Backlog selected for the current sprint, plus the team's plan for delivering those items. Owned by the Development Team. It is fixed during the sprint (no new items added by the Product Owner) and represents the team's commitment for that iteration."
          },
          {
            "num": "8",
            "title": "Case Study — E-Health Records System",
            "marks": 18,
            "description": "**Scenario: MediTrack System**\n\nMediTrack is a national electronic health records system being developed for a country's public healthcare sector. The system will store patient medical histories, prescriptions, lab results, and appointment schedules across 250 public hospitals and 1,500 clinics. Doctors must access patient records from any facility. The system must comply with the Protection of Personal Information Act (POPIA) and the National Health Act.\n\nChallenges include: legacy systems at some hospitals still use paper records, rural clinics have unreliable internet connectivity, multiple stakeholders (doctors, nurses, administrators, pharmacists, government officials) have different access needs, and the system must remain operational 24/7 as it supports emergency care.\n\n8.1 Explain why a plan-driven software process model would be more appropriate than Agile for developing MediTrack. Provide three justifications. (6)\n\n8.2 Identify three non-functional requirements for MediTrack and explain why each is critical. (6)\n\n8.3 The rural clinics have unreliable internet connectivity. Propose and justify a design strategy that allows the system to function during network outages. (3)\n\n8.4 Explain the concept of requirements traceability and why it is important for MediTrack, given its regulatory compliance obligations. (3)\n\n---\n---",
            "scenario": "",
            "section": "B",
            "solution": "Case Study — MediTrack\n\n**8.1 Why Plan-Driven Over Agile — Three Justifications (6 marks)**:\n1. **Regulatory compliance**: MediTrack must comply with POPIA and the National Health Act. A plan-driven process produces comprehensive requirements specifications, design documents, and test documentation needed to demonstrate compliance during regulatory audits. Agile's minimal documentation approach creates compliance risk.\n2. **Safety-critical nature**: The system supports emergency care across 250 hospitals — errors could endanger patient lives. Plan-driven processes enforce rigorous upfront requirements analysis, formal design reviews, and systematic verification, reducing the risk of critical defects in production.\n3. **Large-scale, distributed development**: With 250 hospitals and 1,500 clinics, the project involves many teams, legacy system integrations, and complex deployment logistics. Plan-driven processes provide the detailed architectural planning, integration specifications, and coordination frameworks necessary for projects of this scale.\n\n**8.2 Three Non-Functional Requirements (6 marks)**:\n1. **Availability (99.99% uptime)**: The system supports emergency care where doctors need immediate access to patient records for life-saving treatment decisions. Even minutes of downtime could delay critical care and endanger patient lives.\n2. **Security/Privacy (POPIA compliance)**: Patient health records are extremely sensitive personal data. The system must implement role-based access control, data encryption at rest and in transit, comprehensive audit logging, and consent management to comply with POPIA and prevent data breaches.\n3. **Performance (sub-3-second response time)**: With 250 hospitals and 1,500 clinics accessing the system simultaneously, doctors need fast access to patient records during consultations. Slow response times would disrupt clinical workflows and reduce the quality of patient care.\n\n**8.3 Design Strategy for Unreliable Connectivity (3 marks)**:\n**Offline-First Architecture with Local Synchronization**: Deploy a local database at each rural clinic that stores a subset of frequently accessed patient records. The application works against the local database during normal operation and network outages.\n- When connectivity is available, the system synchronizes changes bidirectionally between the local database and the central server using a conflict resolution protocol (e.g., timestamp-based merge with flagging of conflicting edits for manual review).\n- *Justification*: This ensures clinicians can access and update patient records regardless of network status, while eventual consistency ensures the central system stays up to date when connectivity is restored.\n\n**8.4 Requirements Traceability for MediTrack (3 marks)**:\n**Requirements Traceability** is the ability to trace each requirement forward to its corresponding design elements, code modules, and test cases, and backward to its originating stakeholder need or regulatory mandate.\n*Importance for MediTrack*: Given POPIA and National Health Act compliance obligations, traceability provides:\n- **Audit proof**: Regulators can verify that every legal requirement has been implemented and tested.\n- **Impact analysis**: When regulations change, the team can trace which system components are affected and need modification.\n- **Completeness assurance**: Ensures no regulatory requirement is accidentally omitted during development, which could result in legal penalties or patient safety risks."
          }
        ],
        "id": "practice_exam_3"
      }
    ]
  },
  "nhci": {
    "chapters": [
      {
        "id": "chapter_1",
        "chapterNumber": 1,
        "title": "Chapter 1: What is Interaction Design?",
        "sections": [
          {
            "title": "2. Differentiating from HCI",
            "content": "* **Human-Computer Interaction (HCI)** is historically concerned with the design, evaluation, and implementation of interactive computing systems for human use.\n* **Interaction Design** is a broader term that encompasses all aspects, disciplines, and industries concerned with designing interactive products for users."
          },
          {
            "title": "3. User Experience (UX)",
            "content": "* **User Experience** refers to how a product behaves and is used by people in the real world.\n* **Subjective Experience**: It is about how people feel about a product, and their pleasure and satisfaction when using it, looking at it, holding it, and opening or closing it.\n* **Key Design Constraint**: Designers cannot directly design a user experience because experiences are subjective; instead, they can only design features that evoke or support a desired experience."
          },
          {
            "title": "4. Accessibility and Inclusiveness",
            "content": "* **Accessibility** refers to the extent to which an interactive product is accessible by as many people as possible.\n* **Inclusiveness** means designers strive to make their products and services accommodate the widest possible number of people regardless of their disability, education, age, or income."
          },
          {
            "title": "5. Usability Goals",
            "content": "Usability is about ensuring interactive products are easy to learn, effective to use, and enjoyable from the user's perspective:\n1. **Effectiveness**: How good a product is at doing what it is supposed to do. (Question: Is the product capable of allowing people to learn and carry out their work?)\n2. **Efficiency**: The way a product supports users in carrying out their tasks. (Question: Can users complete tasks with minimal effort and steps?)\n3. **Safety**: Protecting users from dangerous conditions and undesirable situations. (Question: How does the system prevent users from making serious errors and help them recover?)\n4. **Utility**: Extent to which the product provides the right kind of functionality so that users can do what they need. (Question: Does the system have all the functions required?)\n5. **Learnability**: How easy a system is to learn to use. (Question: Can a novice user figure out how to use it by exploring?)\n6. **Memorability**: How easy a product is to remember how to use, once learned. (Question: What visual or memory aids are built in to support users?)"
          },
          {
            "title": "6. Norman's Design Principles",
            "content": "Principles to guide designers towards thinking about how interfaces should be designed:\n* **Visibility**: The more visible functions are, the more likely users will know what to do next (e.g., placing important controls prominently).\n* **Feedback**: Involves sending back information about what action has been done and what has been accomplished (visual, audio, tactile).\n* **Constraints**: Determining ways of restricting the kinds of user interactions that can take place at a given moment (e.g., deactivating unavailable options).\n* **Consistency**: Designing interfaces to have similar operations or use similar elements for achieving similar tasks.\n* **Affordance**: An attribute of an object that allows people to know how to use it (e.g., a button invites pushing).\n* **Mapping**: The relationship between controls and their effects in the world (e.g., stove burner knobs mapped to burner layout)."
          }
        ],
        "keyTerms": [
          {
            "term": "Interaction Design",
            "definition": "Designing interactive products to support the way people communicate and interact in their everyday and working lives."
          },
          {
            "term": "User Experience",
            "definition": "How a product behaves and is used by people in the real world, including their feelings, satisfaction, and subjective impressions."
          },
          {
            "term": "Accessibility",
            "definition": "The extent to which an interactive product is accessible by as many people as possible."
          },
          {
            "term": "Inclusiveness",
            "definition": "Making products and services accommodate the widest possible number of people regardless of disability, education, age, or income."
          },
          {
            "term": "Affordance",
            "definition": "An attribute of an object that allows people to know how to use it (to give a clue)."
          }
        ],
        "mcqs": [
          {
            "num": 1,
            "question": "Which usability goal is concerned with protecting users from making critical errors and providing undo facilities?",
            "options": [
              "Effectiveness",
              "Efficiency",
              "Safety",
              "Learnability"
            ],
            "answer": "c",
            "explanation": "Safety protects users from dangerous conditions, prevents serious errors, and includes features like confirmation dialogs and Undo."
          },
          {
            "num": 2,
            "question": "The concept of making products accommodate the widest possible number of people regardless of their disability, education, age, or income is known as:",
            "options": [
              "Accessibility",
              "Inclusiveness",
              "Utility",
              "Usability"
            ],
            "answer": "b",
            "explanation": "Inclusiveness strives to accommodate the widest range of human diversity including disability, income, education, and age."
          },
          {
            "num": 3,
            "question": "Which design principle refers to sending back information about what action has been done and what has been accomplished?",
            "options": [
              "Consistency",
              "Visibility",
              "Feedback",
              "Affordance"
            ],
            "answer": "c",
            "explanation": "Feedback is the principle of returning information to the user about what action was executed and what was achieved."
          },
          {
            "num": 4,
            "question": "Why can designers not directly design the user experience itself?",
            "options": [
              "Because user experience is too expensive to design",
              "Because user experience is subjective and depends on individual emotions and perceptions",
              "Because browsers do not support user experience designs",
              "Because it is owned by the system administrators"
            ],
            "answer": "b",
            "explanation": "Designers can only design features that evoke or support a user experience."
          }
        ],
        "shortAnswers": [
          {
            "num": 5,
            "question": "Explain the difference between Accessibility and Inclusiveness.",
            "solution": "**Accessibility** refers to the extent to which an interactive product is accessible by as many people as possible, focusing heavily on enabling disabled users to interact with it. **Inclusiveness** is a broader design philosophy where designers strive to make their products accommodate the widest possible range of people, regardless of age, education, income, or disability."
          },
          {
            "num": 6,
            "question": "List and briefly explain the six usability goals in interaction design.",
            "solution": "The six usability goals are:\n   * **Effectiveness**: How well a system does what it is supposed to do.\n   * **Efficiency**: How well the system supports users in carrying out tasks quickly.\n   * **Safety**: Protecting users from dangerous situations or serious errors.\n   * **Utility**: Providing the right range of features for the user's tasks.\n   * **Learnability**: How easy it is for users to learn to use the system.\n   * **Memorability**: How easy it is to remember how to use the system over time."
          },
          {
            "num": 7,
            "question": "Explain what is meant by \"Feedback\" in design and provide two examples.",
            "solution": "**Feedback** involves sending back information to the user about what action has been done and what has been accomplished. Examples:\n   * A button changing color or expanding when hovered over or clicked.\n   * A success dialog popping up and showing a green checkmark after submitting a booking form."
          }
        ]
      },
      {
        "id": "chapter_2",
        "chapterNumber": 2,
        "title": "Chapter 2: User-Centered Approach",
        "sections": [
          {
            "title": "2. Gould and Lewis' Three Principles",
            "content": "John Gould and Clayton Lewis (1985) laid down three principles that lead to a \"useful and easy to use computer system\":\n1. **Early Focus on Users and Tasks**: Observing users doing their normal tasks, studying the nature of those tasks, and involving users directly in the design process.\n2. **Empirical Measurement**: Early in development, observing and measuring user reactions and performance to scenarios, manuals, and low-fidelity prototypes.\n3. **Iterative Design**: When problems are found in user testing, they are fixed, and then more tests and observations are carried out to see the effects of the fixes."
          },
          {
            "title": "3. Four Basic Activities of Interaction Design",
            "content": "1. **Establishing Requirements**: Identifying users and stakeholders, and determining what features and qualities the system must possess.\n2. **Designing Alternatives**: Proposing conceptual models and interface layouts. Alternatives come from seeking ideas, cross-disciplinary flair, and researching existing designs.\n3. **Prototyping**: Developing interactive representations of the design, ranging from paper wireframes to digital mockups.\n4. **Evaluating**: Assessing the usability and user experience of the system. Evaluation does not replace quality assurance, but focuses on human performance."
          },
          {
            "title": "4. Who are Users and Stakeholders?",
            "content": "* **Users**: People who interact directly with the product (e.g., students booking tutors).\n* **Stakeholders**: Anyone affected by the system, including direct users, indirect users (e.g., parents paying for sessions), managers, administrators, and developers."
          },
          {
            "title": "5. Lifecycle Models",
            "content": "* Interaction design is inherently **iterative**. Lifecycle models show how the four basic activities are linked and repeat over time. Feedback from evaluation leads to re-evaluating requirements or redesigning alternatives."
          }
        ],
        "keyTerms": [
          {
            "term": "User-Centered Design",
            "definition": "An approach to design that grounds the process in information about the people who will use the product."
          },
          {
            "term": "Empirical Measurement",
            "definition": "Observing and measuring user performance and reactions during design testing."
          },
          {
            "term": "Iterative Design",
            "definition": "A design methodology based on a cyclic process of prototyping, testing, analyzing, and refining a product."
          },
          {
            "term": "Stakeholder",
            "definition": "Any individual or group who has an interest in or is affected by the outcome of a software system."
          }
        ],
        "mcqs": [
          {
            "num": 1,
            "question": "Which of the following is NOT one of the three principles of design laid down by Gould and Lewis?",
            "options": [
              "Early focus on users and tasks",
              "Empirical measurement",
              "Iterative design",
              "Cost-benefit analysis"
            ],
            "answer": "d",
            "explanation": "Gould and Lewis's three principles are early focus on users/tasks, empirical measurement, and iterative design."
          },
          {
            "num": 2,
            "question": "Which interaction design activity involves generating potential conceptual models and interface layouts?",
            "options": [
              "Establishing Requirements",
              "Designing Alternatives",
              "Prototyping",
              "Evaluating"
            ],
            "answer": "b",
            "explanation": "Proposing different concepts, navigation flows, and mockups is the core of designing alternatives."
          },
          {
            "num": 3,
            "question": "An indirect stakeholder in an online student tutoring system would most likely be:",
            "options": [
              "The student booking the session",
              "The tutor conducting the session",
              "The parent paying for the student's tuition",
              "The system administrator"
            ],
            "answer": "c",
            "explanation": "They do not use the system directly but are affected by it and have an interest in its success, making them a stakeholder."
          },
          {
            "num": 4,
            "question": "What is the primary purpose of Iterative Design?",
            "options": [
              "To reduce the number of developers needed",
              "To fix usability problems found in user testing and test the fixes",
              "To document the software architecture in detail",
              "To replace the need for database backups"
            ],
            "answer": "b",
            "explanation": "Iteration allows design refinement based on real user feedback."
          }
        ],
        "shortAnswers": [
          {
            "num": 5,
            "question": "Explain Gould and Lewis's three principles of user-centered design.",
            "solution": "Gould and Lewis's three principles:\n   * **Early focus on users and tasks**: Understanding who the users will be by observing them in their normal work environments and involving them in design.\n   * **Empirical measurement**: Testing early versions (simulations, manuals, paper mockups) with users to measure performance and capture reactions.\n   * **Iterative design**: Cyclic process where test findings are used to refine designs, followed by further testing to verify fixes."
          },
          {
            "num": 6,
            "question": "What are the four basic activities of interaction design?",
            "solution": "The four basic activities are:\n   * **Establishing Requirements**: Identifying target users, tasks, and system constraints.\n   * **Designing Alternatives**: Creating conceptual models and user interface designs.\n   * **Prototyping**: Creating interactive mockups to explore and test design ideas.\n   * **Evaluating**: Assessing the design's usability and user satisfaction."
          },
          {
            "num": 7,
            "question": "Differentiate between a direct user and a stakeholder.",
            "solution": "A **direct user** is someone who directly interacts with the software interface to achieve a task (e.g., student using booking app). A **stakeholder** is a broader term encompassing anyone who has an interest in the product or is impacted by it, including direct users, indirect users, managers, and sponsors."
          }
        ]
      },
      {
        "id": "chapter_3",
        "chapterNumber": 3,
        "title": "Chapter 3: Conceptualizing Interaction",
        "sections": [
          {
            "title": "2. Conceptual Models",
            "content": "* A **Conceptual Model** is a working strategy and framework of general concepts and their interrelations.\n* **Core Components**:\n  * **Metaphors and analogies**: Help users understand what a product is for and how to use it (e.g., a digital calendar representing a physical paper calendar).\n  * **Concepts**: The objects, attributes, and operations users are exposed to (e.g., booking slots, cancelling sessions).\n  * **Relationships**: How concepts are organized (e.g., a student can book multiple sessions; a session belongs to a tutor).\n  * **Mappings**: Associations between system operations and the user's tasks."
          },
          {
            "title": "3. Interface Metaphors",
            "content": "* **Interface Metaphors** are central components of conceptual models. They provide structure similar to familiar entities, but have their own properties.\n* **Purpose**: Provide familiar reference points that enable people to quickly grasp the underlying conceptual model (e.g., the desktop metaphor, the shopping cart)."
          },
          {
            "title": "4. Interaction Types",
            "content": "Interaction types describe how users interact with a product (distinguished from interface types like command line or graphical):\n1. **Instructing**: Users issue instructions to the system (e.g., clicking a button, typing commands). Quick and efficient.\n2. **Conversing**: Two-way dialogue with the system acting like a partner (e.g., search engines, Siri). Familiar for novices.\n3. **Manipulating**: Interacting with virtual objects in a physical/virtual space (e.g., dragging files to a folder, pinch-to-zoom). Uses physical world familiarity.\n4. **Exploring**: Moving through a virtual environment (e.g., 3D environments, virtual museum tours). Uses navigation familiarity."
          }
        ],
        "keyTerms": [
          {
            "term": "Conceptual Model",
            "definition": "A high-level description of how a system is organized and operates."
          },
          {
            "term": "Interface Metaphor",
            "definition": "A set of user interface visuals, actions, and procedures that exploit specific knowledge that users already have of other domains."
          },
          {
            "term": "Interaction Type",
            "definition": "The method by which a user communicates with a system (Instructing, Conversing, Manipulating, Exploring)."
          },
          {
            "term": "Instructing",
            "definition": "Interaction where the user issues commands to the system to execute tasks."
          }
        ],
        "mcqs": [
          {
            "num": 1,
            "question": "Which interaction type is characterized by a two-way dialogue where the system behaves more like a partner than a machine obeying orders?",
            "options": [
              "Instructing",
              "Conversing",
              "Manipulating",
              "Exploring"
            ],
            "answer": "b",
            "explanation": "Conversing involves a two-way dialogue (like chat or speech interaction) where the system acts as a conversational partner."
          },
          {
            "num": 2,
            "question": "Interface metaphors are designed to:",
            "options": [
              "Increase the complexity of the code",
              "Exploit users' familiarity with real-world objects to make the system easier to understand",
              "Remove the need for database storage",
              "Prevent unauthorized access"
            ],
            "answer": "b",
            "explanation": "Metaphors bridge the gap between user knowledge and system logic."
          },
          {
            "num": 3,
            "question": "The desktop screen representing a physical desk with folders and a trash bin is an example of an:",
            "options": [
              "Affordance",
              "Interface Metaphor",
              "Interaction Type",
              "Heuristic"
            ],
            "answer": "b",
            "explanation": "The desktop is the classic interface metaphor."
          },
          {
            "num": 4,
            "question": "Which of the following is a core component of a conceptual model?",
            "options": [
              "SQL database schemas",
              "CSS styling classes",
              "Metaphors and analogies",
              "Django view functions"
            ],
            "answer": "c",
            "explanation": "The core components of a conceptual model are metaphors/analogies, concepts, relationships, and mappings."
          }
        ],
        "shortAnswers": [
          {
            "num": 5,
            "question": "Why is it critical to conceptualize interaction before building a system?",
            "solution": "Conceptualizing interaction beforehand prevents developers from building systems that confuse users, contain features nobody needs, or are difficult to explain to clients and team members. It defines what the system should do and how it should behave."
          },
          {
            "num": 6,
            "question": "Describe the four primary interaction types.",
            "solution": "The four interaction types are:\n   * **Instructing**: Users issue direct commands (e.g., pressing buttons, typing commands) which are executed quickly.\n   * **Conversing**: Two-way dialog between user and system (e.g., search queries, virtual assistants).\n   * **Manipulating**: Moving, resizing, or interacting with virtual objects (e.g., dragging files).\n   * **Exploring**: Moving through a virtual or physical space (e.g., 3D maps, VR)."
          },
          {
            "num": 7,
            "question": "Explain what a conceptual model is and list its four core components.",
            "solution": "A **conceptual model** is a working strategy and framework of general concepts and their interrelations. Its four core components are:\n   * Metaphors and analogies that convey how to understand the product.\n   * Concepts that people are exposed to (objects, attributes, operations).\n   * Relationships between those concepts (e.g., containment, hierarchy).\n   * Mappings between concepts and the user experience."
          }
        ]
      },
      {
        "id": "chapter_4",
        "chapterNumber": 4,
        "title": "Chapter 4: Cognitive Aspects",
        "sections": [
          {
            "title": "2. Experiential vs. Reflective Cognition",
            "content": "* **Experiential Cognition**: Fast, automatic, intuitive thinking where users react based on experience (e.g., using a calculator, playing a familiar game).\n* **Reflective Cognition**: Slow, deliberate, analytical thinking requiring mental effort (e.g., planning a project, writing code, learning a complex tool).\n* **Design Implication**: Interfaces must support both. Experiential tasks should be automated and standardized; reflective tasks should provide clear information and support."
          },
          {
            "title": "3. Attention",
            "content": "* **Attention** is the process of selecting some stimuli to focus on while ignoring others. Users have limited attention and are easily distracted.\n* **Design Implications**:\n  * Use salient visual cues (color, size, placement, contrast) to guide focus.\n  * Avoid information overload (unnecessary widgets/text).\n  * Provide progressive disclosure of information."
          },
          {
            "title": "4. Perception",
            "content": "* **Perception** is how users interpret sensory information (visual, auditory, tactile) from interfaces.\n* **Design Implications**:\n  * Ensure high contrast and readability.\n  * Use clear spatial grouping (Gestalt principles) and alignment to show relationships.\n  * Apply clear affordances and signifiers (e.g., buttons should look clickable)."
          },
          {
            "title": "5. Memory",
            "content": "* **Memory** is limited. Humans are much better at **recognition** (identifying something they have seen before) than **recall** (retrieving information from memory without cues).\n* **Design Implications**:\n  * Design interfaces that minimize memory load (recognition rather than recall).\n  * Keep menus and options short (the \"7 +/- 2\" rule).\n  * Categorize and group related items."
          }
        ],
        "keyTerms": [
          {
            "term": "Cognition",
            "definition": "The mental processes involved in acquiring, storing, retrieving, and using knowledge."
          },
          {
            "term": "Experiential Cognition",
            "definition": "Fast, automatic, intuitive cognitive responses based on prior experience."
          },
          {
            "term": "Reflective Cognition",
            "definition": "Slow, deliberate, analytical thinking that requires active mental effort."
          },
          {
            "term": "Perception",
            "definition": "The process of receiving, selecting, organizing, and interpreting sensory information."
          }
        ],
        "mcqs": [
          {
            "num": 1,
            "question": "Which type of cognition is fast, automatic, and intuitive (like driving a car on a clear road or using a basic calculator)?",
            "options": [
              "Experiential Cognition",
              "Reflective Cognition",
              "Cognitive Walkthrough",
              "Evaluative Cognition"
            ],
            "answer": "a",
            "explanation": "Experiential cognition is fast, automatic, and intuitive."
          },
          {
            "num": 2,
            "question": "The design recommendation \"Recognition rather than Recall\" is primarily based on constraints in human:",
            "options": [
              "Attention",
              "Perception",
              "Memory",
              "Reasoning"
            ],
            "answer": "c",
            "explanation": "Human short-term memory is limited; recognition is far easier than recalling info from scratch."
          },
          {
            "num": 3,
            "question": "Google Maps highlights the active route while dimming the surrounding areas to support which cognitive aspect?",
            "options": [
              "Long-term Memory",
              "Attention",
              "Experiential reasoning",
              "Inclusiveness"
            ],
            "answer": "b",
            "explanation": "Highlighting the route guides the user's limited attention and filters out distractions."
          },
          {
            "num": 4,
            "question": "Which design implication supports human perception?",
            "options": [
              "Requiring users to memorize keyboard shortcuts",
              "Using spatial grouping and high contrast to indicate relationships",
              "Hiding all navigation controls in deep menus",
              "Displaying maximum text on the dashboard"
            ],
            "answer": "b",
            "explanation": "Clear visual layout supports natural perceptual grouping."
          }
        ],
        "shortAnswers": [
          {
            "num": 5,
            "question": "Differentiate between Experiential and Reflective Cognition, giving one example of each.",
            "solution": "**Experiential Cognition** is fast, automatic, and intuitive (e.g., using a basic calculator or swiping to dismiss a notification). **Reflective Cognition** is slow, deliberate, and analytical (e.g., planning a schedule or learning how to write code in Django)."
          },
          {
            "num": 6,
            "question": "What is the difference between recognition and recall, and why does this difference matter in UI design?",
            "solution": "**Recognition** is identifying an item or action that is visible on the screen. **Recall** is remembering information from memory without visual aids. In UI design, recognition is preferred because it reduces cognitive load (e.g., showing a list of past bookings to select from rather than requiring users to type the exact booking ID)."
          },
          {
            "num": 7,
            "question": "Explain three design implications for supporting user attention.",
            "solution": "Three design implications for supporting attention:\n   * **Salient visual cues**: Use distinct colors, borders, or sizes to draw attention to critical elements (e.g., highlight overdue items).\n   * **Avoid information overload**: Hide non-essential information and declutter the interface.\n   * **Progressive disclosure**: Present information in digestible chunks, revealing details only when requested."
          }
        ]
      },
      {
        "id": "chapter_5",
        "chapterNumber": 5,
        "title": "Chapter 5: Evaluation and Inspections",
        "sections": [
          {
            "title": "2. Evaluation Settings",
            "content": "Evaluations are conducted in three categories of settings:\n1. **Controlled Settings involving Users**: (e.g., Usability Laboratories, Living Labs) to test hypotheses and measure user behavior with minimized distractions.\n2. **Natural Settings involving Users**: (e.g., Field Studies) to see how products are used in real-world contexts with little or no control.\n3. **Any Settings not involving Users**: (e.g., Expert Inspections) where experts critique, predict, and model interfaces."
          },
          {
            "title": "3. Usability Testing",
            "content": "* **Definition**: Evaluating a product by testing it on representative users performing predefined tasks in a controlled setting.\n* **Quantitative Measures**:\n  * Time to complete a task.\n  * Number and type of errors per task.\n  * Number of navigations to help/manuals.\n  * Success rate (percentage of users completing task).\n* **Participant Count**: **5 to 12 users** is generally acceptable to find the majority of usability problems."
          },
          {
            "title": "4. Usability Inspection: Heuristic Evaluation",
            "content": "* **Heuristic Evaluation** (developed by Jakob Nielsen) is an inspection method where usability experts independently evaluate whether user interface elements conform to established usability principles (heuristics).\n* **Nielsen's 10 Usability Heuristics**:\n  1. *Visibility of system status*: Keep users informed with timely feedback.\n  2. *Match between system and real world*: Speak the user's language, use familiar words/phrases.\n  3. *User control and freedom*: Support Undo, Redo, and provide clear emergency exits.\n  4. *Consistency and standards*: Avoid confusing users with different words meaning the same thing.\n  5. *Error prevention*: Design interfaces that prevent errors before they occur.\n  6. *Recognition rather than recall*: Minimize memory load; make options and instructions visible.\n  7. *Flexibility and efficiency of use*: Provide accelerators for expert users.\n  8. *Aesthetic and minimalist design*: Dialogues should not contain irrelevant info.\n  9. *Help users recognize, diagnose, and recover from errors*: Plain-language error messages suggesting solutions.\n  10. *Help and documentation*: Easily searchable and task-focused documentation.\n* **Three Stages of Heuristic Evaluation**:\n  1. *Briefing session*: Experts are told the goals and tasks.\n  2. *Evaluation period*: Each expert spends 1-2 hours independently inspecting the interface (at least two passes).\n  3. *Debriefing session*: Experts aggregate findings, prioritize problems, and discuss solutions."
          },
          {
            "title": "5. Walkthroughs",
            "content": "* **Cognitive Walkthrough**: Simulating a user's problem-solving process at each step of an action sequence. It focuses on evaluating designs for **ease of learning** (especially for novice users).\n* **Cognitive Walkthrough Questions**:\n  * Will the correct action be sufficiently evident to the user?\n  * Will the user notice that the correct action is available?\n  * Will the user associate and interpret the response from the action correctly?"
          }
        ],
        "keyTerms": [
          {
            "term": "Formative Evaluation",
            "definition": "Usability evaluation conducted during design to guide improvements."
          },
          {
            "term": "Summative Evaluation",
            "definition": "Usability evaluation conducted at the end of development to measure success."
          },
          {
            "term": "Heuristic Evaluation",
            "definition": "An inspection method where experts check an interface against 10 usability rules."
          },
          {
            "term": "Cognitive Walkthrough",
            "definition": "A walkthrough method simulating user problem-solving to evaluate ease of learning."
          },
          {
            "term": "Usability Testing",
            "definition": "Testing a prototype on representative users in a controlled environment."
          }
        ],
        "mcqs": [
          {
            "num": 1,
            "question": "Usability evaluation conducted during the design and prototyping phases to shape the final design is known as:",
            "options": [
              "Summative Evaluation",
              "Formative Evaluation",
              "Heuristic Evaluation",
              "Cognitive Walkthrough"
            ],
            "answer": "b",
            "explanation": "Formative evaluation is done during design to form and improve the product."
          },
          {
            "num": 2,
            "question": "What is the recommended number of users to involve in a usability testing study to identify most usability problems?",
            "options": [
              "1 to 2",
              "5 to 12",
              "50 to 100",
              "At least 1000"
            ],
            "answer": "b",
            "explanation": "Jakob Nielsen showed that testing 5 to 12 users is the most cost-effective size for identifying major usability flaws."
          },
          {
            "num": 3,
            "question": "Which usability heuristic is violated if a system deletes a student's booking without asking for confirmation or offering an undo option?",
            "options": [
              "User control and freedom",
              "Consistency and standards",
              "Flexibility and efficiency",
              "Aesthetic and minimalist design"
            ],
            "answer": "a",
            "explanation": "Supporting undo/redo and emergency exits satisfies user control and freedom."
          },
          {
            "num": 4,
            "question": "What is the primary focus of a Cognitive Walkthrough?",
            "options": [
              "Measuring page load performance",
              "Evaluating a design for ease of learning",
              "Database query optimization",
              "Establishing project budgets"
            ],
            "answer": "b",
            "explanation": "Cognitive walkthroughs focus on whether novice users can easily figure out how to perform tasks."
          }
        ],
        "shortAnswers": [
          {
            "num": 5,
            "question": "Differentiate between Formative and Summative Evaluation.",
            "solution": "**Formative Evaluation** is conducted during design and prototyping (formative stages) to detect usability flaws and improve the interface. **Summative Evaluation** is conducted after the product is completed (summative stage) to measure overall usability, speed, error rates, and user satisfaction against benchmarks."
          },
          {
            "num": 6,
            "question": "List and briefly explain five of Nielsen's usability heuristics.",
            "solution": "Nielsen's usability heuristics (any five):\n   * **Visibility of system status**: Keep users informed with timely feedback (e.g., loading spinner).\n   * **Match between system and real world**: Use terms and concepts familiar to the user rather than system-oriented terms.\n   * **User control and freedom**: Support undo/redo and easy exit from unwanted states.\n   * **Consistency and standards**: Use consistent labels and interactions throughout the system.\n   * **Error prevention**: Design screens to prevent mistakes (e.g., date pickers instead of typing dates).\n   * **Recognition rather than recall**: Make options visible to reduce memory load.\n   * **Flexibility and efficiency**: Accelerators for advanced users.\n   * **Aesthetic and minimalist design**: Keep clutter to a minimum.\n   * **Help users recover from errors**: Clear error messages with constructive suggestions.\n   * **Help and documentation**: Provide easy-to-use search help."
          },
          {
            "num": 7,
            "question": "Outline the three stages of conducting a Heuristic Evaluation.",
            "solution": "The three stages of Heuristic Evaluation:\n   * **Briefing session**: Experts are briefed on the system, target user profiles, and tasks to evaluate.\n   * **Evaluation period**: Experts independently evaluate the system (taking at least two passes) using the heuristics.\n   * **Debriefing session**: Experts meet to discuss, merge, prioritize usability issues, and brainstorm solutions."
          }
        ]
      }
    ],
    "exams": [
      {
        "title": "Mock Exam 1 — Practice Examination",
        "questions": [
          {
            "num": "1",
            "title": "Student Tutoring Interaction Storyboarding",
            "marks": 11,
            "description": "**CASE STUDY: Student Support Tutoring System (iTBS)**  \nThe department of Computer Science and Information Technology (CSIT) has been experiencing poor student performance in programming modules. CSIT resolved to appoint third-year students as tutors to facilitate face-to-face sessions. A web-based tutor booking system (called iTBS) is envisaged to allow students to book tutors for such sessions. The system is expected to be available 24 hours a day.  \nTo access the system, a student logs on to the website with their student number and password. Upon successful authentication, the system provides options such as \"Self-study lessons\", \"Attempt a test\", \"Book a Tutorial\". If the student chooses \"Book a Tutorial\", they input the subject name, date, time, etc. The system searches the TutorList to identify a tutor for the subject and sends an SMS to the tutor. The tutor responds by sending an SMS with the text:  \n* YES: agree to meet the student as per the specifications of the request  \n* NO: the tutor will not make it to the requested tutorial  \n* ALT: the CSIT Administrator should follow up by calling both to identify a suitable time.  \nThe tutor's response is forwarded to the student by SMS. On completion of the tutorial, the student completes an evaluation form on the system. The tutor then completes a claim form for the service. The system checks if the student has submitted the evaluation, and then evaluates the tutor's claim to process payment. The HOD, Mr. Tumo Baitshenyetsi, periodically requests reports about student progress/performance and monitors the budget by checking payments made.\n\nDescribe the student's interaction with the web-based tutor booking system (iTBS) to book a tutorial using storyboarding (text-based step-by-step description of the user interface flow). (11 Marks)",
            "scenario": "",
            "section": "A",
            "solution": "Student Tutoring Interaction Storyboarding\n* **Suggested Storyboard Steps (11 Marks)**:\n  * **Step 1 (Landing Page)**: The student arrives at the iTBS home page and sees a login portal. (2)\n  * **Step 2 (Login)**: The student enters their student number and password, then clicks \"Logon\". (2)\n  * **Step 3 (Dashboard)**: Upon verification, the student sees a landing menu with options: \"Self-study lessons\", \"Attempt a test\", and \"Book a Tutorial\". (2)\n  * **Step 4 (Booking Form)**: The student clicks \"Book a Tutorial\" and is shown a form where they type the subject name, select a date and preferred time, and click \"Submit\". (2)\n  * **Step 5 (Confirmation Screen)**: The system confirms that the request has been received, searches the tutor database, and triggers an SMS request to the tutor. (2)\n  * **Step 6 (SMS Notification)**: Once the tutor replies (YES/NO/ALT), the student receives an SMS with the status of the booking request. (1)"
          },
          {
            "num": "2",
            "title": "Benefits of Low-Fidelity Prototyping",
            "marks": 4,
            "description": "The web-based tutor system storyboard that you modeled in Question 1 is an example of a low-fidelity (lo-fi) prototype. Explain how low-fidelity prototyping will benefit the CSIT/CTLPD team during the conceptual model phase of the web-based tutor system. (4 Marks)",
            "scenario": "",
            "section": "A",
            "solution": "Benefits of Low-Fidelity Prototyping\n* **Lo-Fi Prototyping Benefits (4 Marks)**:\n  * Enables translation of high-level design concepts into tangible and testable artifacts quickly and cheaply. (2)\n  * Focuses on testing functionality, flow, and conceptual clarity rather than the visual appearance of the product, preventing attachment to polished designs too early. (2)"
          },
          {
            "num": "3",
            "title": "Requirements Classification Table",
            "marks": 13,
            "description": "Getting requirements right is crucial to the success of an interactive product. Study the iTBS case study and classify the following requirements of the system as **Input**, **Output**, or **Process**:\n1. The student logs on to the website with supplied credentials.\n2. The system provides the student with options: Self-study lessons, Attempt a test, Book a Tutorial.\n3. The student inputs the subject name, date, time, etc. after choosing 'Book a Tutorial'.\n4. The system searches the TutorList to identify a tutor for the specified subject.\n5. The system sends an SMS to the tutor indicating that a student requests a tutorial.\n6. The tutor responds by sending an SMS (YES, NO, or ALT).\n7. The system sends the response of the tutor to the student by SMS to notify them of their request's status.\n8. The system allows the student to complete an evaluation form providing feedback about the session.\n9. The system allows the tutor to complete a claim form for the tutorial service rendered.\n10. The system checks if the student has submitted the feedback, and then evaluates the tutor's claim to process a payment.\n11. The system allows the HOD to request progress/performance reports.\n12. The system allows the HOD to monitor the budget by checking payments. (13 Marks)",
            "scenario": "",
            "section": "A",
            "solution": "Requirements Classification Table\n* **Requirements & Classifications (13 Marks total)**:\n  1. *Logon credentials entry*: **Input**\n  2. *Displaying options menu (Self-study, Test, Book)*: **Output**\n  3. *Subject name, date, time form entry*: **Input**\n  4. *Searching TutorList for subject tutor*: **Process**\n  5. *Sending tutor request SMS*: **Output**\n  6. *Tutor responding by SMS (YES/NO/ALT)*: **Process**\n  7. *Sending tutor response to student*: **Output**\n  8. *Student completing evaluation feedback form*: **Input**\n  9. *Tutor completing claim form*: **Input**\n  10. *Checking feedback submission and evaluating claim for payment*: **Process**\n  11. *HOD requesting progress/performance reports*: **Process**\n  12. *HOD checking payments to monitor budget*: **Process**"
          },
          {
            "num": "4",
            "title": "Conceptual Model via Use Case Diagram",
            "marks": 12,
            "description": "Johnson and Henderson (2002) define a conceptual model as \"a high-level description of how a system is organized and operates\". Describe the conceptual model of the online iTBS system using a use case diagram representation. In your description, list the actors, use cases, and relationships. Additionally, briefly explain how Donald Norman's design principles (specifically feedback and visibility) would apply to the interface for these use cases. (12 Marks)",
            "scenario": "",
            "section": "A",
            "solution": "Conceptual Model via Use Case Diagram\n* **iTBS Use Case Structure (12 Marks)**:\n  * **System Boundary**: iTBS System. (1)\n  * **Actors**: Student, Tutor, HOD (Head of CSIT). (3)\n  * **Student Use Cases**: Log On, Book a Tutorial, Complete Evaluation Form. (3)\n  * **Tutor Use Cases**: Respond to Tutorial Request, Complete Claim Form, Receive Payment. (3)\n  * **HOD Use Cases**: Request Progress Report, Monitor Budget/Payments. (2)\n  * *Norman's design principles application*:\n    * **Feedback**: The system must provide immediate visual confirmation when the student clicks \"Book a Tutorial\" and send an SMS notification when the tutor responds, confirming the action's status.\n    * **Visibility**: Essential options (like \"Book a Tutorial\") must be prominently placed on the student dashboard, and the status of requests should be clearly displayed."
          },
          {
            "num": "5",
            "title": "Context Data Flow Diagram (DFD)",
            "marks": 9,
            "description": "Create a text-based representation or description of the Context DFD for the iTBS booking system, detailing the external entities and the data flows entering or leaving the system. (9 Marks)",
            "scenario": "",
            "section": "A",
            "solution": "Context Data Flow Diagram (DFD)\n* **iTBS Context DFD (9 Marks)**:\n  * **Central Process**: Process 0 (iTBS System). (1)\n  * **External Entities**: STUDENT, TUTOR, HOD. (3)\n  * **Student Data Flows**:\n    * *Logon details / Menu options / TutorialSpecs / ClaimForm* $\\rightarrow$ iTBS (Input flows). (1.5)\n    * *ResponseSMS* $\\leftarrow$ iTBS (Output flow). (0.5)\n  * **Tutor Data Flows**:\n    * *TutorialRequestSMS / Payment* $\\leftarrow$ iTBS (Output flows). (1)\n    * *ResponseSMS / ClaimForm* $\\rightarrow$ iTBS (Input flows). (1)\n  * **HOD Data Flows**:\n    * *ReportRequest* $\\rightarrow$ iTBS (Input flow). (0.5)\n    * *Report* $\\leftarrow$ iTBS (Output flow). (0.5)"
          },
          {
            "num": "6",
            "title": "Key Focuses of Evaluation",
            "marks": 4,
            "description": "Evaluation is integral to the design process. Describe the two core concepts (usability goals and user experience) that the CSIT design team should focus on when evaluating the web-based tutor system (iTBS). (4 Marks)",
            "scenario": "",
            "section": "A",
            "solution": "Key Focuses of Evaluation\n* **Evaluation Core Concepts (4 Marks)**:\n  * **Usability of the system**: Evaluating how easy the web-based tutor system is to learn and to use. (2)\n  * **User experience (UX)**: Evaluating the students', tutors', and HOD's experience when interacting with the system (how satisfying, enjoyable, or motivating the interaction is). (2)"
          },
          {
            "num": "7",
            "title": "Formative vs. Summative Evaluation",
            "marks": 6,
            "description": "Differentiate between the two types of evaluation (formative and summative) that the design team will carry out during the design process of the web-based tutor system. (6 Marks)",
            "scenario": "",
            "section": "A",
            "solution": "Formative vs. Summative Evaluation\n* **Evaluation Types (6 Marks)**:\n  * **Formative Evaluation**: Conducted *during* design and prototyping. The team evaluates the design to check that the web-based tutor system continues to meet stakeholders' (HOD, students, tutors) needs. (3)\n  * **Summative Evaluation**: Conducted *at the end* of development to assess the success, performance, and overall utility of the finished web-based tutor system. (3)"
          },
          {
            "num": "8",
            "title": "The Four Evaluation Questions",
            "marks": 8,
            "description": "Describe the four key questions (Why, What, Where, When) that the design team should address when evaluating the web-based tutor system (iTBS). (8 Marks)",
            "scenario": "",
            "section": "A",
            "solution": "The Four Evaluation Questions\n* **The Four Questions (8 Marks, 2 Marks each)**:\n  * **Why evaluate?**: Understand if stakeholders get a pleasing and engaging experience, not just a usable system.\n  * **What to evaluate?**: Ranges from low-fidelity paper prototypes to the final working system (basically all aspects of the design).\n  * **Where to evaluate?**: The setting depends on what is evaluated (e.g. controlled lab vs. natural context).\n  * **When to evaluate?**: The lifecycle stage depends on product type (e.g., brand-new system like iTBS vs. upgrade)."
          },
          {
            "num": "9.1",
            "title": "Django Implementation & Usability Test Case - Part 9.1",
            "marks": 2,
            "description": "Explain how a Django prototype would help in evaluating usability goals compared to low-fidelity storyboarding.",
            "scenario": "Suppose the development team decides to implement the iTBS web application using a framework like Django.",
            "section": "A",
            "solution": "* **9.1 Django prototype**: A Django prototype provides high-fidelity interactivity, allowing users to experience actual system response times, navigation flows, and database interactions, which is more effective for testing usability goals like efficiency and safety than static storyboards. (2 Marks)"
          }
        ],
        "id": "mock_exam_1"
      },
      {
        "title": "SPU Main Exam — June 2025",
        "questions": [
          {
            "num": "1.1",
            "title": "SASSA Cashless ATM System Case Study & Questions - Part 1.1",
            "marks": 4,
            "description": "Explaining SASSA’s assumptions and claims about why they think something might be a good idea (or not) enables the design team to view multiple perspectives on the problem space. Outline a set of core questions to aid design teams in this process.",
            "scenario": "**CASE STUDY: cashless ATMs to pay SASSA social grants**  \nThe South African Social Security Agency (SASSA) has been seriously impacted during the coronavirus pandemic in administering social grants. To safeguard vulnerable citizens from the month-end rush, the Agency implemented an alternating process of grant payments. Two payment files were created: one covering elderly and disability grants, and another covering child support, foster child, and care dependency grants. However, an anomaly left several recipients unable to obtain payment.  \nThe Agency resolved to invent other means to assist beneficiaries more effectively and efficiently. One solution was the ability to obtain grant payments at preferred retail outlets. Beneficiaries could change payment collection from the Post Office to their chosen bank account or vice versa.  \nAnother initiative was **cashless ATMs** rolled out to spaza shops, township and rural traders to make financial services available locally, tackle boundaries, and promote local economies.  \nWhen a grant beneficiary reaches a dealer with a cashless ATM, they:  \n1. Insert the SASSA card in the card slot and initiate a transaction using their PIN.  \n2. Choose an amount to be deducted.  \n3. If successful, the cashless ATM prints a merchant and customer slip approving the debit.  \n4. The customer presents the merchant slip to the dealer, who hands out cash or goods equal to the withdrawal.  \nUsing the cashless ATM, users can also purchase pre-paid electricity/airtime, pay municipal bills, activate insurance, transfer money, and make balance enquiries.\n\nAnswer the following questions based on the case study above:",
            "section": "A",
            "solution": "* **1.1 Core questions for assumptions/claims (4 Marks)**:\n  * Are there problems with an existing product or user experience? If so, what are they? (1)\n  * Why do you think there are problems? (1)\n  * What evidence do you have to support the existence of these problems? (1)\n  * How do you think your proposed design ideas might overcome these problems? (1)"
          },
          {
            "num": "1.2",
            "title": "SASSA Cashless ATM System Case Study & Questions - Part 1.2",
            "marks": 2,
            "description": "Describe the user experience of the SASSA grant process before the introduction of the cashless ATMs.",
            "scenario": "**CASE STUDY: cashless ATMs to pay SASSA social grants**  \nThe South African Social Security Agency (SASSA) has been seriously impacted during the coronavirus pandemic in administering social grants. To safeguard vulnerable citizens from the month-end rush, the Agency implemented an alternating process of grant payments. Two payment files were created: one covering elderly and disability grants, and another covering child support, foster child, and care dependency grants. However, an anomaly left several recipients unable to obtain payment.  \nThe Agency resolved to invent other means to assist beneficiaries more effectively and efficiently. One solution was the ability to obtain grant payments at preferred retail outlets. Beneficiaries could change payment collection from the Post Office to their chosen bank account or vice versa.  \nAnother initiative was **cashless ATMs** rolled out to spaza shops, township and rural traders to make financial services available locally, tackle boundaries, and promote local economies.  \nWhen a grant beneficiary reaches a dealer with a cashless ATM, they:  \n1. Insert the SASSA card in the card slot and initiate a transaction using their PIN.  \n2. Choose an amount to be deducted.  \n3. If successful, the cashless ATM prints a merchant and customer slip approving the debit.  \n4. The customer presents the merchant slip to the dealer, who hands out cash or goods equal to the withdrawal.  \nUsing the cashless ATM, users can also purchase pre-paid electricity/airtime, pay municipal bills, activate insurance, transfer money, and make balance enquiries.\n\nAnswer the following questions based on the case study above:",
            "section": "A",
            "solution": "* **1.2 Previous UX (2 Marks)**:\n  * Recipient experience was characterized by long queues and the risk of funds running out, resulting in beneficiaries being sent home without their allowance. (2)"
          },
          {
            "num": "1.3",
            "title": "SASSA Cashless ATM System Case Study & Questions - Part 1.3",
            "marks": 4,
            "description": "What initiatives did SASSA introduce to support, change, or extend the current ways of facilitating grants to its beneficiaries?",
            "scenario": "**CASE STUDY: cashless ATMs to pay SASSA social grants**  \nThe South African Social Security Agency (SASSA) has been seriously impacted during the coronavirus pandemic in administering social grants. To safeguard vulnerable citizens from the month-end rush, the Agency implemented an alternating process of grant payments. Two payment files were created: one covering elderly and disability grants, and another covering child support, foster child, and care dependency grants. However, an anomaly left several recipients unable to obtain payment.  \nThe Agency resolved to invent other means to assist beneficiaries more effectively and efficiently. One solution was the ability to obtain grant payments at preferred retail outlets. Beneficiaries could change payment collection from the Post Office to their chosen bank account or vice versa.  \nAnother initiative was **cashless ATMs** rolled out to spaza shops, township and rural traders to make financial services available locally, tackle boundaries, and promote local economies.  \nWhen a grant beneficiary reaches a dealer with a cashless ATM, they:  \n1. Insert the SASSA card in the card slot and initiate a transaction using their PIN.  \n2. Choose an amount to be deducted.  \n3. If successful, the cashless ATM prints a merchant and customer slip approving the debit.  \n4. The customer presents the merchant slip to the dealer, who hands out cash or goods equal to the withdrawal.  \nUsing the cashless ATM, users can also purchase pre-paid electricity/airtime, pay municipal bills, activate insurance, transfer money, and make balance enquiries.\n\nAnswer the following questions based on the case study above:",
            "section": "A",
            "solution": "* **1.3 SASSA Initiatives (4 Marks)**:\n  * Alternating payment process using two distinct payment files (one for elderly/disabled, one for child support/foster care). (1)\n  * Ability to collect grant payments at preferred retail outlets. (1)\n  * Flexibility to switch collection mode between Post Office and bank account. (1)\n  * Introduction of cashless ATMs at local spaza shops and traders. (1)"
          },
          {
            "num": "1.4",
            "title": "SASSA Cashless ATM System Case Study & Questions - Part 1.4",
            "marks": 2,
            "description": "What is the most crucial step that the project team should consider when deliberating on the proposed Cashless ATM during the design process?",
            "scenario": "**CASE STUDY: cashless ATMs to pay SASSA social grants**  \nThe South African Social Security Agency (SASSA) has been seriously impacted during the coronavirus pandemic in administering social grants. To safeguard vulnerable citizens from the month-end rush, the Agency implemented an alternating process of grant payments. Two payment files were created: one covering elderly and disability grants, and another covering child support, foster child, and care dependency grants. However, an anomaly left several recipients unable to obtain payment.  \nThe Agency resolved to invent other means to assist beneficiaries more effectively and efficiently. One solution was the ability to obtain grant payments at preferred retail outlets. Beneficiaries could change payment collection from the Post Office to their chosen bank account or vice versa.  \nAnother initiative was **cashless ATMs** rolled out to spaza shops, township and rural traders to make financial services available locally, tackle boundaries, and promote local economies.  \nWhen a grant beneficiary reaches a dealer with a cashless ATM, they:  \n1. Insert the SASSA card in the card slot and initiate a transaction using their PIN.  \n2. Choose an amount to be deducted.  \n3. If successful, the cashless ATM prints a merchant and customer slip approving the debit.  \n4. The customer presents the merchant slip to the dealer, who hands out cash or goods equal to the withdrawal.  \nUsing the cashless ATM, users can also purchase pre-paid electricity/airtime, pay municipal bills, activate insurance, transfer money, and make balance enquiries.\n\nAnswer the following questions based on the case study above:",
            "section": "A",
            "solution": "* **1.4 Crucial Step in Deliberating (2 Marks)**:\n  * The project team should explicitly consider alternative solutions rather than immediately fixing on one idea. (2)"
          },
          {
            "num": "1.5",
            "title": "SASSA Cashless ATM System Case Study & Questions - Part 1.5",
            "marks": 4,
            "description": "Coming up with alternative solutions to assist the beneficiaries requires the project team to be innovative in their thinking. What advice can you give to the project team in generating alternative designs to the proposed solution?",
            "scenario": "**CASE STUDY: cashless ATMs to pay SASSA social grants**  \nThe South African Social Security Agency (SASSA) has been seriously impacted during the coronavirus pandemic in administering social grants. To safeguard vulnerable citizens from the month-end rush, the Agency implemented an alternating process of grant payments. Two payment files were created: one covering elderly and disability grants, and another covering child support, foster child, and care dependency grants. However, an anomaly left several recipients unable to obtain payment.  \nThe Agency resolved to invent other means to assist beneficiaries more effectively and efficiently. One solution was the ability to obtain grant payments at preferred retail outlets. Beneficiaries could change payment collection from the Post Office to their chosen bank account or vice versa.  \nAnother initiative was **cashless ATMs** rolled out to spaza shops, township and rural traders to make financial services available locally, tackle boundaries, and promote local economies.  \nWhen a grant beneficiary reaches a dealer with a cashless ATM, they:  \n1. Insert the SASSA card in the card slot and initiate a transaction using their PIN.  \n2. Choose an amount to be deducted.  \n3. If successful, the cashless ATM prints a merchant and customer slip approving the debit.  \n4. The customer presents the merchant slip to the dealer, who hands out cash or goods equal to the withdrawal.  \nUsing the cashless ATM, users can also purchase pre-paid electricity/airtime, pay municipal bills, activate insurance, transfer money, and make balance enquiries.\n\nAnswer the following questions based on the case study above:",
            "section": "A",
            "solution": "* **1.5 Advice on Generating Alternatives (4 Marks)**:\n  * Seek cross-fertilization of ideas from different perspectives, individuals, and contexts. (2)\n  * Observe the evolution of similar existing systems or websites through use. (1)\n  * Straightforward copying or adapting of similar, existing solutions. (1)"
          },
          {
            "num": "1.6",
            "title": "SASSA Cashless ATM System Case Study & Questions - Part 1.6",
            "marks": 4,
            "description": "What would assist the project team in deciding which alternative solution to choose for the proposed online system?",
            "scenario": "**CASE STUDY: cashless ATMs to pay SASSA social grants**  \nThe South African Social Security Agency (SASSA) has been seriously impacted during the coronavirus pandemic in administering social grants. To safeguard vulnerable citizens from the month-end rush, the Agency implemented an alternating process of grant payments. Two payment files were created: one covering elderly and disability grants, and another covering child support, foster child, and care dependency grants. However, an anomaly left several recipients unable to obtain payment.  \nThe Agency resolved to invent other means to assist beneficiaries more effectively and efficiently. One solution was the ability to obtain grant payments at preferred retail outlets. Beneficiaries could change payment collection from the Post Office to their chosen bank account or vice versa.  \nAnother initiative was **cashless ATMs** rolled out to spaza shops, township and rural traders to make financial services available locally, tackle boundaries, and promote local economies.  \nWhen a grant beneficiary reaches a dealer with a cashless ATM, they:  \n1. Insert the SASSA card in the card slot and initiate a transaction using their PIN.  \n2. Choose an amount to be deducted.  \n3. If successful, the cashless ATM prints a merchant and customer slip approving the debit.  \n4. The customer presents the merchant slip to the dealer, who hands out cash or goods equal to the withdrawal.  \nUsing the cashless ATM, users can also purchase pre-paid electricity/airtime, pay municipal bills, activate insurance, transfer money, and make balance enquiries.\n\nAnswer the following questions based on the case study above:",
            "section": "A",
            "solution": "* **1.6 Deciding Between Alternatives (4 Marks)**:\n  * Letting users and stakeholders interact with prototype alternatives and discussing their experiences, preferences, and suggestions for improvement. (4)"
          },
          {
            "num": "1.7",
            "title": "SASSA Cashless ATM System Case Study & Questions - Part 1.7",
            "marks": 2,
            "description": "Alternatives come from seeking different perspectives and looking at other designs. Explain how the project team can achieve this.",
            "scenario": "**CASE STUDY: cashless ATMs to pay SASSA social grants**  \nThe South African Social Security Agency (SASSA) has been seriously impacted during the coronavirus pandemic in administering social grants. To safeguard vulnerable citizens from the month-end rush, the Agency implemented an alternating process of grant payments. Two payment files were created: one covering elderly and disability grants, and another covering child support, foster child, and care dependency grants. However, an anomaly left several recipients unable to obtain payment.  \nThe Agency resolved to invent other means to assist beneficiaries more effectively and efficiently. One solution was the ability to obtain grant payments at preferred retail outlets. Beneficiaries could change payment collection from the Post Office to their chosen bank account or vice versa.  \nAnother initiative was **cashless ATMs** rolled out to spaza shops, township and rural traders to make financial services available locally, tackle boundaries, and promote local economies.  \nWhen a grant beneficiary reaches a dealer with a cashless ATM, they:  \n1. Insert the SASSA card in the card slot and initiate a transaction using their PIN.  \n2. Choose an amount to be deducted.  \n3. If successful, the cashless ATM prints a merchant and customer slip approving the debit.  \n4. The customer presents the merchant slip to the dealer, who hands out cash or goods equal to the withdrawal.  \nUsing the cashless ATM, users can also purchase pre-paid electricity/airtime, pay municipal bills, activate insurance, transfer money, and make balance enquiries.\n\nAnswer the following questions based on the case study above:",
            "section": "A",
            "solution": "* **1.7 Seeking Perspectives (2 Marks)**:\n  * Prompt the designers' own experience, study others' ideas and suggestions, and deliberately seek out suitable sources of inspiration. (2)"
          },
          {
            "num": "1.8",
            "title": "SASSA Cashless ATM System Case Study & Questions - Part 1.8",
            "marks": 12,
            "description": "Usability ensures that the product users interact with is easy to learn, effective to use, and enjoyable. What usability goals should the Cashless ATM satisfy to foster its usability?",
            "scenario": "**CASE STUDY: cashless ATMs to pay SASSA social grants**  \nThe South African Social Security Agency (SASSA) has been seriously impacted during the coronavirus pandemic in administering social grants. To safeguard vulnerable citizens from the month-end rush, the Agency implemented an alternating process of grant payments. Two payment files were created: one covering elderly and disability grants, and another covering child support, foster child, and care dependency grants. However, an anomaly left several recipients unable to obtain payment.  \nThe Agency resolved to invent other means to assist beneficiaries more effectively and efficiently. One solution was the ability to obtain grant payments at preferred retail outlets. Beneficiaries could change payment collection from the Post Office to their chosen bank account or vice versa.  \nAnother initiative was **cashless ATMs** rolled out to spaza shops, township and rural traders to make financial services available locally, tackle boundaries, and promote local economies.  \nWhen a grant beneficiary reaches a dealer with a cashless ATM, they:  \n1. Insert the SASSA card in the card slot and initiate a transaction using their PIN.  \n2. Choose an amount to be deducted.  \n3. If successful, the cashless ATM prints a merchant and customer slip approving the debit.  \n4. The customer presents the merchant slip to the dealer, who hands out cash or goods equal to the withdrawal.  \nUsing the cashless ATM, users can also purchase pre-paid electricity/airtime, pay municipal bills, activate insurance, transfer money, and make balance enquiries.\n\nAnswer the following questions based on the case study above:",
            "section": "A",
            "solution": "* **1.8 Usability Goals (12 Marks, 2 Marks each)**:\n  * *Effectiveness*: Beneficiaries successfully access their allowance without fail.\n  * *Efficiency*: Beneficiaries can carry out non-cash transactions (e.g. buying airtime/electricity, balance checks) quickly.\n  * *Safety*: Protect users from errors (e.g. no Delete/Quit buttons next to OK/Save, confirmation dialogs).\n  * *Utility*: Provide the right functions (grant collection, bill payments, airtime, balance inquiries).\n  * *Learnability*: Easy for diverse (including elderly) beneficiaries to learn to use without formal training.\n  * *Memorability*: Easy to remember how to operate the ATM upon returning next month."
          },
          {
            "num": "1.9",
            "title": "SASSA Cashless ATM System Case Study & Questions - Part 1.9",
            "marks": 3,
            "description": "State whether SASSA and its design team have considered accessibility and inclusiveness when addressing issues of grant payment during the coronavirus pandemic. Explain.",
            "scenario": "**CASE STUDY: cashless ATMs to pay SASSA social grants**  \nThe South African Social Security Agency (SASSA) has been seriously impacted during the coronavirus pandemic in administering social grants. To safeguard vulnerable citizens from the month-end rush, the Agency implemented an alternating process of grant payments. Two payment files were created: one covering elderly and disability grants, and another covering child support, foster child, and care dependency grants. However, an anomaly left several recipients unable to obtain payment.  \nThe Agency resolved to invent other means to assist beneficiaries more effectively and efficiently. One solution was the ability to obtain grant payments at preferred retail outlets. Beneficiaries could change payment collection from the Post Office to their chosen bank account or vice versa.  \nAnother initiative was **cashless ATMs** rolled out to spaza shops, township and rural traders to make financial services available locally, tackle boundaries, and promote local economies.  \nWhen a grant beneficiary reaches a dealer with a cashless ATM, they:  \n1. Insert the SASSA card in the card slot and initiate a transaction using their PIN.  \n2. Choose an amount to be deducted.  \n3. If successful, the cashless ATM prints a merchant and customer slip approving the debit.  \n4. The customer presents the merchant slip to the dealer, who hands out cash or goods equal to the withdrawal.  \nUsing the cashless ATM, users can also purchase pre-paid electricity/airtime, pay municipal bills, activate insurance, transfer money, and make balance enquiries.\n\nAnswer the following questions based on the case study above:",
            "section": "A",
            "solution": "* **1.9 Accessibility & Inclusiveness (3 Marks)**:\n  * Yes, they considered accessibility and inclusiveness by separating the elderly and disabled payments into a dedicated file. Catering to these vulnerable groups addresses accessibility, which inherently supports inclusiveness. (3)"
          },
          {
            "num": "1.10",
            "title": "SASSA Cashless ATM System Case Study & Questions - Part 1.10",
            "marks": 6,
            "description": "Examine the Cashless ATM description and describe how the product satisfies Norman's Design principles of **Visibility** and **Affordance**.",
            "scenario": "**CASE STUDY: cashless ATMs to pay SASSA social grants**  \nThe South African Social Security Agency (SASSA) has been seriously impacted during the coronavirus pandemic in administering social grants. To safeguard vulnerable citizens from the month-end rush, the Agency implemented an alternating process of grant payments. Two payment files were created: one covering elderly and disability grants, and another covering child support, foster child, and care dependency grants. However, an anomaly left several recipients unable to obtain payment.  \nThe Agency resolved to invent other means to assist beneficiaries more effectively and efficiently. One solution was the ability to obtain grant payments at preferred retail outlets. Beneficiaries could change payment collection from the Post Office to their chosen bank account or vice versa.  \nAnother initiative was **cashless ATMs** rolled out to spaza shops, township and rural traders to make financial services available locally, tackle boundaries, and promote local economies.  \nWhen a grant beneficiary reaches a dealer with a cashless ATM, they:  \n1. Insert the SASSA card in the card slot and initiate a transaction using their PIN.  \n2. Choose an amount to be deducted.  \n3. If successful, the cashless ATM prints a merchant and customer slip approving the debit.  \n4. The customer presents the merchant slip to the dealer, who hands out cash or goods equal to the withdrawal.  \nUsing the cashless ATM, users can also purchase pre-paid electricity/airtime, pay municipal bills, activate insurance, transfer money, and make balance enquiries.\n\nAnswer the following questions based on the case study above:",
            "section": "A",
            "solution": "* **1.10 Visibility & Affordance (6 Marks)**:\n  * *Visibility*: Has visible physical controls (number keypad, backspace, OK) and screen prompts that guide the user on what to do next. Position of controls makes it easy to find them. (3)\n  * *Affordance*: Interface buttons give physical cues for how to use them (e.g. keypad buttons invite pressing, backspace invites undoing errors, OK invites confirmation). (3)"
          },
          {
            "num": "1.11",
            "title": "SASSA Cashless ATM System Case Study & Questions - Part 1.11",
            "marks": 3,
            "description": "What kind of interaction mode is the Cashless ATM using? Support your answer by defining the mode chosen and giving an example from the application.",
            "scenario": "**CASE STUDY: cashless ATMs to pay SASSA social grants**  \nThe South African Social Security Agency (SASSA) has been seriously impacted during the coronavirus pandemic in administering social grants. To safeguard vulnerable citizens from the month-end rush, the Agency implemented an alternating process of grant payments. Two payment files were created: one covering elderly and disability grants, and another covering child support, foster child, and care dependency grants. However, an anomaly left several recipients unable to obtain payment.  \nThe Agency resolved to invent other means to assist beneficiaries more effectively and efficiently. One solution was the ability to obtain grant payments at preferred retail outlets. Beneficiaries could change payment collection from the Post Office to their chosen bank account or vice versa.  \nAnother initiative was **cashless ATMs** rolled out to spaza shops, township and rural traders to make financial services available locally, tackle boundaries, and promote local economies.  \nWhen a grant beneficiary reaches a dealer with a cashless ATM, they:  \n1. Insert the SASSA card in the card slot and initiate a transaction using their PIN.  \n2. Choose an amount to be deducted.  \n3. If successful, the cashless ATM prints a merchant and customer slip approving the debit.  \n4. The customer presents the merchant slip to the dealer, who hands out cash or goods equal to the withdrawal.  \nUsing the cashless ATM, users can also purchase pre-paid electricity/airtime, pay municipal bills, activate insurance, transfer money, and make balance enquiries.\n\nAnswer the following questions based on the case study above:",
            "section": "A",
            "solution": "* **1.11 Interaction Mode (3 Marks)**:\n  * Mode: **Instructing** (1)\n  * Definition/Example: Users carry out tasks by telling the system what to do. The ATM uses simple instruction buttons where the beneficiary presses buttons to execute actions. (2)"
          }
        ],
        "id": "spu_main_2025"
      },
      {
        "title": "Practice Exam 3 — Comprehensive Review",
        "questions": [
          {
            "num": "1.1",
            "title": "Interaction Design Foundations & Usability - Part 1.1",
            "marks": 2,
            "description": "A fundamental concern of interaction design is developing interactive products that are usable. Describe the meaning of this aspect.",
            "scenario": "",
            "section": "A",
            "solution": "* **1.1 Usable meaning**: Developing products that are in general easy to learn, effective, and offer a pleasant user experience. (2 Marks)"
          },
          {
            "num": "1.2",
            "title": "Interaction Design Foundations & Usability - Part 1.2",
            "marks": 3,
            "description": "In order to develop interactive products as a designer, what are the key factors that you need to consider?",
            "scenario": "",
            "section": "A",
            "solution": "* **1.2 Key factors to consider**:\n  * Who is going to be using the products. (1 Mark)\n  * How the products are going to be used. (1 Mark)\n  * Where the products are going to be used. (1 Mark)"
          },
          {
            "num": "1.3",
            "title": "Interaction Design Foundations & Usability - Part 1.3",
            "marks": 4,
            "description": "Besides the key factors in question 1.2 above, understanding the kind of activities people are doing when interacting with the products is of great concern as well. What impact will this have when the designer does not understand the daily activities of the user?",
            "scenario": "",
            "section": "A",
            "solution": "* **1.3 Impact of not understanding daily activities**: This will affect the design of the interface because the precision of various styles of interfaces and the arrangement of input and output devices is determined by the kind of activities that are to be supported. (4 Marks)"
          },
          {
            "num": "1.4",
            "title": "Interaction Design Foundations & Usability - Part 1.4",
            "marks": 2,
            "description": "Define interaction design in terms of the user’s daily activities.",
            "scenario": "",
            "section": "A",
            "solution": "* **1.4 Definition of interaction design**: Designing interactive products to assist in ways that people communicate and relate in their daily and working lives. (2 Marks)"
          },
          {
            "num": "1.5",
            "title": "Interaction Design Foundations & Usability - Part 1.5",
            "marks": 2,
            "description": "User experience (UX) has been the buzz phrase in interaction design and designers at times refer to it as UXD. Describe the reason for them referring to it as UXD.",
            "scenario": "",
            "section": "A",
            "solution": "* **1.5 UX as UXD**: This is to inspire design thinking that concentrates on user experience quality rather than on the design methods that are set to be used. (2 Marks)"
          },
          {
            "num": "1.6",
            "title": "Interaction Design Foundations & Usability - Part 1.6",
            "marks": 4,
            "description": "Through identifying the specific weaknesses and strengths of different interactive products, we can begin to understand what it means for something to be usable or not. Given the scenario where a virtual keyboard shows up and covers the focused text field (Image A), versus moving the focused content up so it remains visible (Image B), identify which one is usable and give a reason.",
            "scenario": "",
            "section": "A",
            "solution": "* **1.6 Keyboard behavior comparison**:\n  * Keyboard covering text field (Image A) is not usable because the keyboard covers the focused text field causing the user to type without seeing the text. (2 Marks)\n  * Content moving up (Image B) is usable because the focused content moves up when the keyboard is visible so the user can see their input. (2 Marks)"
          },
          {
            "num": "1.7",
            "title": "Interaction Design Foundations & Usability - Part 1.7",
            "marks": 2,
            "description": "Differentiate between **Accessibility** and **Inclusiveness** when designing interactive products.",
            "scenario": "",
            "section": "A",
            "solution": "* **1.7 Accessibility vs Inclusiveness**:\n  * Accessibility denotes the degree to which an interactive product is accessible by as many users as possible. (1 Mark)\n  * Inclusive design is where designers strive to make their products and services support the broadest potential number of users. (1 Mark)"
          },
          {
            "num": "1.8",
            "title": "Interaction Design Foundations & Usability - Part 1.8",
            "marks": 5,
            "description": "Usability goals afford the interaction designer a definite means of evaluating traits of a product. Evaluate a user interface design where the \"Delete\" button (in bright red and large text) is placed directly next to the \"Save\" button with no confirmation dialog or undo option. Identify the usability goal that was not considered and state three weaknesses of this design.",
            "scenario": "",
            "section": "A",
            "solution": "* **1.8 Safety Evaluation**:\n  * Usability goal not considered: **Safety** (not protecting the user from performing an undesirable action). (2 Marks)\n  * Three weaknesses:\n    1. The delete button and the save button are placed next to each other. (1 Mark)\n    2. The delete button is given the most visual importance/prominence using larger text and a bright red color. (1 Mark)\n    3. The interface does not provide the user with a means to recover should they make errors (such as an undo button or confirmation dialog). (1 Mark)"
          },
          {
            "num": "2.1",
            "title": "SPU Website Improvement Case Study - Part 2.1",
            "marks": 4,
            "description": "How is the approach of the intern incorrect in terms of the interaction design process?",
            "scenario": "**CASE STUDY: SPU Website Improvement**  \nThe Sol Plaatje University (SPU) IT department wants to improve the university's website to make it interactive. You have been given this task to execute with a new intern that has just joined the department. In the first meeting that you scheduled to discuss the project, you asked the intern to give input on how to go about improving the website. The intern starts first by describing how certain APIs can be incorporated into the design to enhance the look and feel of the website.\n\nAnswer the following questions based on the case study above:",
            "section": "A",
            "solution": "* **2.1 Intern's incorrect approach**: In creating an interactive product, it can be tempting to start working out how to design the physical interface and what technologies and interaction styles to use. Starting here is incorrect because the university's potential users and their context can be misunderstood, and the website's usability and user experience goals can be overlooked. (4 Marks)"
          },
          {
            "num": "2.2",
            "title": "SPU Website Improvement Case Study - Part 2.2",
            "marks": 3,
            "description": "Elaborate further with the intern why it is important to make decisions of the physical design after articulating the nature of the website's problem space.",
            "scenario": "**CASE STUDY: SPU Website Improvement**  \nThe Sol Plaatje University (SPU) IT department wants to improve the university's website to make it interactive. You have been given this task to execute with a new intern that has just joined the department. In the first meeting that you scheduled to discuss the project, you asked the intern to give input on how to go about improving the website. The intern starts first by describing how certain APIs can be incorporated into the design to enhance the look and feel of the website.\n\nAnswer the following questions based on the case study above:",
            "section": "A",
            "solution": "* **2.2 Importance of articulating problem space first**: In articulating the nature of the website's problem space, the team will better understand what the current user experience is, why a change is needed, and how this change will improve the user experience. (3 Marks)"
          },
          {
            "num": "2.3",
            "title": "SPU Website Improvement Case Study - Part 2.3",
            "marks": 2,
            "description": "Due to limited resources, the team has decided to rely on the expertise of its design team to enhance the website. What type of design approach is the team using, and give a reason for your answer?",
            "scenario": "**CASE STUDY: SPU Website Improvement**  \nThe Sol Plaatje University (SPU) IT department wants to improve the university's website to make it interactive. You have been given this task to execute with a new intern that has just joined the department. In the first meeting that you scheduled to discuss the project, you asked the intern to give input on how to go about improving the website. The intern starts first by describing how certain APIs can be incorporated into the design to enhance the look and feel of the website.\n\nAnswer the following questions based on the case study above:",
            "section": "A",
            "solution": "* **2.3 Design Approach**: The **Genius approach** because it relies mainly on the experience and creative flair of its design team. (2 Marks)"
          },
          {
            "num": "2.4",
            "title": "SPU Website Improvement Case Study - Part 2.4",
            "marks": 2,
            "description": "Will the users of the website be involved in the design process? What will be their role?",
            "scenario": "**CASE STUDY: SPU Website Improvement**  \nThe Sol Plaatje University (SPU) IT department wants to improve the university's website to make it interactive. You have been given this task to execute with a new intern that has just joined the department. In the first meeting that you scheduled to discuss the project, you asked the intern to give input on how to go about improving the website. The intern starts first by describing how certain APIs can be incorporated into the design to enhance the look and feel of the website.\n\nAnswer the following questions based on the case study above:",
            "section": "A",
            "solution": "* **2.4 User involvement & role**: Yes, they will be involved. Their role is to validate ideas generated by the design team, however, they are not involved during the design process itself. (2 Marks)"
          },
          {
            "num": "2.5",
            "title": "SPU Website Improvement Case Study - Part 2.5",
            "marks": 2,
            "description": "Why is it important that the university design team involve website users?",
            "scenario": "**CASE STUDY: SPU Website Improvement**  \nThe Sol Plaatje University (SPU) IT department wants to improve the university's website to make it interactive. You have been given this task to execute with a new intern that has just joined the department. In the first meeting that you scheduled to discuss the project, you asked the intern to give input on how to go about improving the website. The intern starts first by describing how certain APIs can be incorporated into the design to enhance the look and feel of the website.\n\nAnswer the following questions based on the case study above:",
            "section": "A",
            "solution": "* **2.5 Importance of user involvement**: It is the best way that the design team can ensure that the university website is usable and that it indeed will be used after deployment. (2 Marks)"
          },
          {
            "num": "2.6",
            "title": "SPU Website Improvement Case Study - Part 2.6",
            "marks": 2,
            "description": "Identify two target users that the university's design team should involve in validating the website.",
            "scenario": "**CASE STUDY: SPU Website Improvement**  \nThe Sol Plaatje University (SPU) IT department wants to improve the university's website to make it interactive. You have been given this task to execute with a new intern that has just joined the department. In the first meeting that you scheduled to discuss the project, you asked the intern to give input on how to go about improving the website. The intern starts first by describing how certain APIs can be incorporated into the design to enhance the look and feel of the website.\n\nAnswer the following questions based on the case study above:",
            "section": "A",
            "solution": "* **2.6 Target users**: Students, lecturers, marketing team, or external stakeholders. (Any two, 1 Mark each) (2 Marks)"
          },
          {
            "num": "2.7",
            "title": "SPU Website Improvement Case Study - Part 2.7",
            "marks": 2,
            "description": "Why do you regard the above-mentioned users in question 2.6 as target users?",
            "scenario": "**CASE STUDY: SPU Website Improvement**  \nThe Sol Plaatje University (SPU) IT department wants to improve the university's website to make it interactive. You have been given this task to execute with a new intern that has just joined the department. In the first meeting that you scheduled to discuss the project, you asked the intern to give input on how to go about improving the website. The intern starts first by describing how certain APIs can be incorporated into the design to enhance the look and feel of the website.\n\nAnswer the following questions based on the case study above:",
            "section": "A",
            "solution": "* **2.7 Why target users**: Target users are users who perform the activity every day or who will use the intended product on a regular basis. (2 Marks)"
          }
        ],
        "id": "practice_exam_3"
      }
    ]
  }
};

export const chaptersData = subjectsData.se.chapters;
export const allExams = subjectsData.se.exams;
export const mockExamData = allExams.length > 0 ? allExams[0] : null;
