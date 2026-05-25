# Software Engineering I — SPU Main Exam June 2025

**Module Code**: NSOE62120  
**Programme**: ICT Diploma: Applications Development  
**Duration**: 3 Hours (180 Minutes)  
**Total Marks**: 100 Marks  
**Examiner**: Ms Fezile Matsebula  
**Internal Moderator**: Ms. N. Modiba  
**Instructions**:
1. Answer ALL questions.
2. Show all your calculations.
3. The use of non-programmable calculator is permitted.
4. The use of laptops is not permitted.
5. The use of cellphones is not permitted.
6. Stationery may not be shared.

---

## Section A: Software Testing, Processes & SDLC [24 Marks]

### Question 1: Software Testing & Development Processes [24 Marks]

1.1 A software company is developing an e-commerce application. During development testing, a tester finds that a discount calculation function does not apply the correct discount percentage.

(a) Identify the type of defect in this scenario. (2)
(b) Suggest a suitable approach for fixing the defect using development testing techniques. (4)
(c) Explain how test-driven development (TDD) could have prevented this issue. (4)

1.2 A company is developing a new e-commerce website. Identify the most suitable SDLC model for this project (2) and justify your choice (2). Then, describe how each phase of the chosen model would apply to the project. (10)

---

## Section B: Architecture & Design [18 Marks]

### Question 2: Architectural Design & Patterns [18 Marks]

2.1 A university is developing a new student management system. The system needs to track student registration, grades, and course enrollments.

(a) Identify and briefly describe the four views in the 4+1 architectural model that should be considered in this system. (4)
(b) How would the use-case view (+1) contribute to the architectural design? (2)
(c) Which view is most useful for ensuring system scalability and why? (2)

2.2 A software company is developing an integrated development environment (IDE) that must store project files, track changes, and provide real-time collaboration.

(a) What are the key differences between a repository architecture and a client-server architecture? (4)
(b) Which architecture would be better suited for the IDE and why? (3)
(c) What potential issues might arise when using a repository architecture for large-scale software projects? (3)

---

## Section C: System Modeling & Agile [21 Marks]

### Question 3: System Modeling & Agile Development [21 Marks]

3.1 A university is developing an online student registration system that interacts with its existing student database and the financial office system.

(a) Draw a context model for this system, showing external interactions. (5)
(b) Identify at least three use cases that would be relevant for this system and justify their inclusion. (3)

3.2 A company is developing a web-based e-commerce system using an incremental development approach. However, after multiple iterations, the system structure has started to degrade, making it difficult to integrate new features. What steps can the company take to address this issue and improve the maintainability of the system? (4)

3.3 Your team is using Extreme Programming (XP) to develop an online banking system. A senior developer insists on skipping the "test-first development" approach to speed up progress. As the team lead, how do you respond? (4)

3.4 What are the four core values of the Agile Manifesto? (4)

3.5 Define "Continuous Integration" in Agile development. (1)

---

## Section D: Requirements Engineering [37 Marks]

### Question 4: Requirements Engineering (Scenario-Based) [37 Marks]

**Scenario: Online University Enrollment System**

The Ministry of Higher Education has mandated all universities to implement an **Online University Enrollment System (OUES)** that allows students to register for courses, pay fees, and receive academic notifications. The system must handle both **functional** and **non-functional** requirements. It should allow students to submit applications, administrators to verify documents, and financial offices to process tuition payments. Additionally, the system must meet security, performance, and usability constraints.

The **requirements engineering team** at a leading university is responsible for defining system requirements and ensuring that stakeholders' needs are met. They must gather requirements, specify functionalities, validate system constraints, and manage changes over time. However, challenges arise when some departments demand additional features, and students report usability issues. The team must ensure the system remains **scalable, secure, and easy to use** while aligning with institutional policies.

4.1 Identifying and Classifying Requirements (8 Marks)

(a) Based on the scenario, list three functional and two non-functional requirements for OUES. (5)
(b) Explain why non-functional requirements are critical in system success. Provide an example related to OUES. (3)

4.2 Requirements Elicitation and Analysis (8 Marks)

(a) Identify two stakeholders involved in gathering requirements for OUES and describe their roles. (4)
(b) What two elicitation techniques would you use to gather requirements for OUES? Justify your choices. (4)

4.3 Requirements Specification and Validation (6 Marks)

(a) Write a well-structured requirement statement for "Student Course Registration." (3)
(b) Name and explain one requirement validation technique applicable to OUES. (3)

4.4 Managing Requirements Changes (7 Marks)

(a) Describe a possible requirement change request for OUES and explain how it could impact system design. (3)
(b) How should the requirements engineering team handle change management effectively? Provide two key steps. (4)

4.5 Software Requirements Document (SRD) (8 Marks)

(a) Identify three key sections of the Software Requirements Document for OUES and explain their purpose. (6)
(b) Why is the SRD essential in software development? (2)

---
---

# Suggested Solutions

## Section A Solutions

### Question 1: Software Testing & Development Processes

**1.1(a) Type of Defect (2 marks)**
This is a **logic defect** (also called a logical error or algorithmic defect). The discount calculation function exists and executes without crashing, but it produces incorrect output because the internal logic or formula is wrong — it does not apply the correct discount percentage.

**1.1(b) Fixing using Development Testing Techniques (4 marks)**
A suitable approach is **Unit Testing combined with Defect Testing**:
1. **Write unit test cases** that cover boundary and equivalence classes for the discount function — e.g., test with 0% discount, 10% discount, 50% discount, and 100% discount inputs.
2. **Run the failing tests** to confirm the defect and identify the exact input conditions that produce wrong output.
3. **Debug the logic** — inspect the discount calculation formula, identify the incorrect operator or value (e.g., multiplying instead of dividing, or using a hardcoded percentage).
4. **Fix the code** and re-run all unit tests to confirm the fix does not introduce regressions.

**1.1(c) How TDD Could Have Prevented This (4 marks)**
Test-Driven Development (TDD) follows a strict cycle: **Red → Green → Refactor**.
1. **Write the test first**: Before writing the discount function, the developer writes automated tests specifying expected outputs for given inputs (e.g., a R100 item with 20% discount should cost R80).
2. **Write minimal code to pass**: The developer then writes only enough code to make all tests pass correctly.
3. **Refactor safely**: Any changes to the discount logic are immediately validated against the existing test suite.
4. **Prevention**: Since the tests define the correct behavior upfront, the logic defect would have been caught immediately — the test would fail (Red) and the developer would fix the formula before moving on. TDD also simplifies debugging because when a test fails, the bug must be in the most recently written code.

**1.2 Suitable SDLC Model (14 marks)**

**Model**: The **Incremental Development Model** (also acceptable: Agile/Iterative) is the most suitable.

**Justification (2 marks)**:
- E-commerce requirements change rapidly based on market trends, user feedback, and competitive pressure.
- Incremental development allows early delivery of a working product with core features (e.g., product catalogue, shopping cart), with additional features (e.g., recommendation engine, loyalty programs) added in subsequent increments.

**Phases applied to the project (10 marks)**:
1. **Requirements Phase**: Gather initial requirements from stakeholders — identify core features such as product browsing, user registration, shopping cart, checkout, and payment processing. Prioritize features for the first increment.
2. **Design Phase**: Design the system architecture — choose a layered or microservices architecture. Design the database schema for products, users, orders. Design the user interface wireframes and API specifications.
3. **Implementation/Coding Phase**: Develop the first increment with highest-priority features (e.g., product catalogue and user registration). Use modern web technologies (HTML/CSS/JavaScript frameworks, backend APIs).
4. **Testing Phase**: Perform unit testing on individual components (e.g., discount calculator, cart total). Conduct integration testing between frontend and backend. Perform user acceptance testing (UAT) with sample customers.
5. **Deployment/Delivery Phase**: Deploy the first increment to a production environment. Gather user feedback and usage analytics. Plan the next increment based on feedback and remaining requirements.

---

## Section B Solutions

### Question 2: Architectural Design & Patterns

**2.1(a) Four Views of the 4+1 Model (4 marks)**:
1. **Logical View**: Describes the system's functional structure — key abstractions as objects or classes. For the student management system, this would include classes like Student, Course, Grade, Enrollment.
2. **Process View**: Describes the system's runtime behavior — concurrency, synchronization, and performance. Shows how processes handle concurrent student registrations and grade queries.
3. **Development View**: Describes the system's decomposition into software modules, packages, and libraries. Shows how the codebase is organized (e.g., registration module, grading module, reporting module).
4. **Physical View**: Describes the mapping of software components to hardware infrastructure — servers, databases, network topology. Shows deployment on web servers, database servers, and load balancers.

**2.1(b) Use-Case View (+1) Contribution (2 marks)**:
The use-case view serves as the "+1" view that ties all four views together. It captures key scenarios (e.g., "Student registers for a course," "Lecturer submits grades") that validate whether the architecture supports the required functionality. It ensures architectural decisions are driven by actual system behavior rather than abstract design preferences.

**2.1(c) Most Useful View for Scalability (2 marks)**:
The **Physical View** (Deployment View) is most useful for ensuring scalability because it explicitly models the hardware infrastructure, server allocation, load balancing, and network configuration. It allows architects to plan for horizontal scaling (adding more servers), database replication, and caching strategies to handle increasing numbers of students.

**2.2(a) Repository vs. Client-Server Architecture (4 marks)**:
| Aspect | Repository Architecture | Client-Server Architecture |
|--------|------------------------|--------------------------|
| Data Storage | All data is stored in a single central repository accessed by all components | Data is distributed between server(s) and clients |
| Communication | Components communicate indirectly through the shared data store | Components communicate directly via network requests (request/response) |
| Coupling | Components are loosely coupled to each other but tightly coupled to the repository | Clients are coupled to the server's API, but independent of each other |
| Control Flow | Typically passive — components are triggered by data changes or independently poll the repository | Active — clients send requests, server processes and responds |

**2.2(b) Better Architecture for the IDE (3 marks)**:
A **Repository Architecture** is better suited for the IDE because:
- The IDE needs a central store for project files, version history, and metadata that multiple tools (editor, compiler, debugger, version control) must access simultaneously.
- All IDE components (code editor, syntax checker, build system, search indexer) operate on the same shared data — the project's source files. A central repository allows them to share data efficiently without direct inter-component communication.
- It simplifies adding new tools (plugins) that just need to read from and write to the shared repository.

**2.2(c) Potential Issues with Repository Architecture at Scale (3 marks)**:
1. **Single point of failure**: If the central repository becomes unavailable, all components stop functioning. For large-scale projects, this is a critical reliability risk.
2. **Performance bottleneck**: As project size grows (millions of files, many concurrent users), the repository becomes a bottleneck — all read/write operations contend for access to the same data store.
3. **Schema rigidity**: Changing the repository data format or schema requires updating all components that interact with it, making evolution difficult in large projects with many plugins.

---

## Section C Solutions

### Question 3: System Modeling & Agile Development

**3.1(a) Context Model Description (5 marks)**:
The context model shows the Online Student Registration System (OSRS) as a central process with the following external entities and interactions:
- **Students** → submit registration requests, receive confirmation/rejection notifications
- **Student Database** → OSRS queries existing student records and writes new registration data
- **Financial Office System** → OSRS sends fee calculations and payment requests; receives payment confirmations
- **Academic Departments** → provide course availability and capacity information
- **University Administration** → sets policies, enrollment deadlines, and receives enrollment reports

The system boundary encloses the OSRS, while all external entities sit outside the boundary with data flows (arrows) showing information exchange between them.

**3.1(b) Three Use Cases with Justification (3 marks)**:
1. **Register for Course**: Core functionality — students must be able to select and enroll in courses. Without this, the system has no primary purpose.
2. **Process Payment**: Essential — the system interacts with the financial office to handle tuition fees, which is a mandatory step before enrollment is confirmed.
3. **View Academic Record**: Important for students to check their current enrollments, grades, and outstanding fees, supporting the system's usability and transparency requirements.

**3.2 Addressing System Structure Degradation (4 marks)**:
1. **Refactoring**: Systematically restructure the existing code without changing its external behavior — clean up duplicated code, simplify complex modules, and improve naming conventions.
2. **Re-architecting**: If degradation is severe, redesign the system architecture — move from a monolithic structure to a modular or microservices architecture to improve separation of concerns.
3. **Introduce automated testing**: Add comprehensive unit and integration tests before refactoring to ensure changes don't break existing functionality.
4. **Technical debt management**: Allocate dedicated time in each iteration for addressing technical debt rather than only focusing on new features.

**3.3 Responding to Skipping Test-First Development in XP (4 marks)**:
As team lead, I would firmly but constructively push back:
1. **Explain the XP principle**: Test-first development is a core XP practice, not optional. Skipping it violates the methodology the team agreed to follow.
2. **Highlight the risks**: In an online banking system, untested code can lead to financial calculation errors, security vulnerabilities, and data corruption — all of which have severe legal and financial consequences.
3. **Demonstrate the long-term cost**: While writing tests first may seem slower initially, it reduces debugging time, catches defects early (when they're cheapest to fix), and provides a safety net for future changes.
4. **Propose a compromise**: If the developer is concerned about speed, pair-program with them to demonstrate the TDD workflow's efficiency, rather than abandoning the practice entirely.

**3.4 Four Core Values of the Agile Manifesto (4 marks)**:
1. **Individuals and interactions** over processes and tools
2. **Working software** over comprehensive documentation
3. **Customer collaboration** over contract negotiation
4. **Responding to change** over following a plan

**3.5 Continuous Integration Definition (1 mark)**:
Continuous Integration (CI) is the practice of frequently merging all developers' working code into a shared mainline (multiple times per day), with each integration automatically built and tested to detect integration errors as quickly as possible.

---

## Section D Solutions

### Question 4: Requirements Engineering (OUES)

**4.1(a) Functional and Non-Functional Requirements (5 marks)**:

*Functional Requirements*:
1. The system shall allow students to register for courses online by selecting available courses and submitting enrollment forms.
2. The system shall enable administrators to verify and approve student application documents.
3. The system shall process tuition fee payments through integration with the university's financial office.

*Non-Functional Requirements*:
1. **Performance**: The system shall handle at least 5,000 concurrent user sessions during peak registration periods without response times exceeding 3 seconds.
2. **Security**: All student personal data and financial transactions shall be encrypted using TLS 1.2 or higher.

**4.1(b) Why Non-Functional Requirements Are Critical (3 marks)**:
Non-functional requirements define system quality attributes that determine whether the system is usable, reliable, and secure in practice. A system can implement all functional requirements correctly but still fail if it's too slow, insecure, or unreliable.
*Example*: If OUES does not meet performance requirements, thousands of students trying to register simultaneously during enrollment week would experience timeouts and crashes, making the system unusable despite having correct registration logic.

**4.2(a) Two Stakeholders and Their Roles (4 marks)**:
1. **University Students**: The primary end-users who will use the system to register for courses, pay fees, and receive notifications. Their input is critical for understanding usability requirements, workflow expectations, and common pain points with existing manual processes.
2. **University Administration/Registrar**: Responsible for setting enrollment policies, managing course offerings, and overseeing the registration process. They provide requirements related to business rules, approval workflows, reporting needs, and compliance with institutional policies.

**4.2(b) Two Elicitation Techniques with Justification (4 marks)**:
1. **Interviews**: Conducting structured interviews with key stakeholders (registrar staff, financial office, student representatives) allows deep exploration of complex requirements and business rules. *Justification*: OUES involves multiple departments with different needs — interviews allow the team to understand each stakeholder's unique perspective and uncover implicit requirements.
2. **Prototyping**: Building a simple interactive prototype of the enrollment interface for students to test. *Justification*: Students may struggle to articulate their needs in abstract terms — a prototype gives them something concrete to evaluate and provide feedback on, revealing usability issues and missing features early.

**4.3(a) Well-Structured Requirement Statement (3 marks)**:
"The OUES system shall allow authenticated students to search for available courses by department, semester, and keyword, select one or more courses, and submit a registration request. Upon successful submission, the system shall display a confirmation message with a unique registration reference number and send a confirmation email to the student's registered email address within 30 seconds."

**4.3(b) Requirement Validation Technique (3 marks)**:
**Requirements Review (Inspection)**: A structured review process where a team of reviewers (developers, testers, stakeholders, domain experts) systematically examines each requirement for completeness, consistency, correctness, and ambiguity. Each reviewer checks requirements against a predefined checklist.
*Application to OUES*: The requirements engineering team organizes a review meeting where administrators, student representatives, and developers walk through each requirement statement to verify that it accurately captures stakeholder needs, doesn't conflict with other requirements, and is technically feasible.

**4.4(a) Possible Change Request and Impact (3 marks)**:
*Change Request*: The Financial Office requests that OUES support installment payment plans, allowing students to pay tuition in 3 monthly installments rather than a single lump sum.
*Impact on System Design*: This change requires modifications to the payment processing module (new payment scheduling logic), the database schema (new tables for installment tracking and due dates), the notification system (automated payment reminders), and the student dashboard (displaying payment plan status). It may also require integration with external payment gateways for recurring billing.

**4.4(b) Handling Change Management Effectively (4 marks)**:
1. **Change Impact Analysis**: Before approving any change, formally assess its impact on existing requirements, system architecture, development timeline, and budget. Use requirements traceability matrices to identify all affected components and estimate the cost of implementation.
2. **Change Control Board (CCB) Review**: Establish a formal change control process where a designated board of stakeholders reviews each change request, evaluates its priority and feasibility, and makes an informed approve/reject/defer decision. This prevents uncontrolled scope creep and ensures changes align with project objectives and available resources.

**4.5(a) Three Key Sections of the SRD (6 marks)**:
1. **System Overview / Introduction**: Describes the purpose and scope of the OUES system, target users, and the problem it solves. *Purpose*: Provides context for all readers and establishes the boundaries of the system being specified.
2. **Functional Requirements Specification**: Details each functional requirement — what the system must do, including input/output specifications, business rules, and use case descriptions. *Purpose*: Serves as the definitive reference for developers during implementation and testers during validation.
3. **Non-Functional Requirements**: Specifies quality attributes including performance benchmarks, security standards, availability targets, and usability criteria. *Purpose*: Ensures the system meets operational quality standards beyond basic functionality.

**4.5(b) Why the SRD Is Essential (2 marks)**:
The SRD serves as the **contractual agreement** between stakeholders and the development team — it establishes a shared, unambiguous understanding of what the system must do. It is essential because it provides a baseline for design, implementation, testing, and acceptance, and it enables traceability from requirements through to test cases, ensuring nothing is overlooked during development.
