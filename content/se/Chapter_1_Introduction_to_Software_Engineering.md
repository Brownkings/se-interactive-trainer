# Chapter 1: Introduction to Software Engineering

## What You Must Learn and Know

### 1. Definition of Software Engineering
* **Software Engineering** is an engineering discipline concerned with all aspects of software production, from the early stages of system specification through to maintaining the system after it has gone into use.
* **Engineering Discipline**: Using appropriate theories and methods to solve problems, bearing in mind organizational and financial constraints.
* **All Aspects of Software Production**: It is not just the technical process of coding. It also encompasses project management, development of tools, methods, and theories to support software production.
* **Differentiating from Computer Science**: Computer science focuses on theory and fundamentals (e.g., algorithms, complexity, data structures), whereas software engineering is focused on the practicalities of developing and delivering useful software systems economically.

### 2. Software Products
Software products are split into two major categories:
1. **Generic Products**: Stand-alone systems developed by a developer and sold on the open market to any customer who wishes to buy them.
   * *Examples*: PC software (graphics programs, project management tools), CAD software, or dentist appointments systems.
   * *Specification Ownership*: The software developer owns the specification. Decisions on changes are made solely by the developer.
2. **Customized Products**: Systems commissioned by a specific customer to meet their own unique business requirements.
   * *Examples*: Embedded control systems, air traffic control software, or traffic monitoring systems.
   * *Specification Ownership*: The customer owns the specification and decides which changes are required and when they should be implemented.

### 3. Essential Attributes of Good Software
To be considered professional and high-quality, software must possess the following four essential attributes:
1. **Maintainability**: Software must be written in such a way that it can evolve to meet the changing needs of customers. Since software change is an inevitable business requirement, maintenance costs often dominate.
2. **Dependability and Security**: Software dependability includes a range of characteristics including reliability, security, and safety. Dependable software should not cause physical or economic damage in the event of system failure. Unauthorised users should not be able to access or damage the system.
3. **Efficiency**: Software should not make wasteful use of system resources such as memory and processor cycles. Efficiency therefore includes responsiveness, processing time, and memory utilization.
4. **Acceptability**: Software must be acceptable to the type of users for whom it is designed. This means it must be understandable, usable, and compatible with other systems they use.

### 4. Software Process Activities
A software process is a sequence of activities that leads to the production of a software product. There are four fundamental activities common to all processes:
1. **Software Specification**: Customers and engineers define what software is to be produced and the constraints on its operation.
2. **Software Development**: The software is designed and programmed (implementation).
3. **Software Validation**: The software is checked (tested) to ensure that it meets the customer's requirements.
4. **Software Evolution**: The software is modified to reflect changing customer and market requirements.

### 5. General Issues Affecting Software
Modern software engineering faces three main global challenges:
* **Heterogeneity**: The requirement for systems to operate as distributed systems across networks that include different types of hardware, operating systems, and mobile devices.
* **Business and Social Change**: Business and society are changing incredibly quickly. Software must be able to change rapidly to keep up with new technologies and emerging markets.
* **Security and Trust**: Since software is integrated into all aspects of our lives, we must be able to trust that systems are secure against attacks and keep sensitive data private.

### 6. Software Engineering Diversity and Application Types
There is no "universal" software engineering method. The techniques and tools used depend heavily on the type of application:
* **Stand-alone applications**: Run locally on a PC, no network connection required.
* **Interactive transaction-based applications**: Run on remote servers and are accessed by users (e.g., web-based e-commerce).
* **Embedded control systems**: Software that controls hardware devices (e.g., numerically the most common type).
* **Batch processing systems**: Process data in large batches (e.g., payroll systems).
* **Entertainment systems**: Systems for personal use and entertainment.
* **Systems for modeling and simulation**: Developed to model physical processes (e.g., weather models).
* **Data collection systems**: Collect data from environments using sensors and transmit it to other systems.
* **Systems of systems**: Composed of multiple separate software systems.

### 7. Web Software Engineering Fundamentals
* The Web has transitioned from a document delivery platform to a full application execution platform (Cloud Computing).
* **Software Reuse** is the dominant approach for web systems (assembling applications from pre-existing components).
* Web systems are developed and delivered **incrementally** because it is impractical to specify all requirements in advance.
* Rich UIs are often constrained by browser capabilities, requiring AJAX or local scripting.

### 8. Professional Responsibility and Ethical Responsibility
Software engineers must behave in an honest and ethically responsible way. They have a professional responsibility to uphold code standards. The **ACM/IEEE Code of Ethics** defines Eight Principles:
1. **Public**: Act consistently with the public interest.
2. **Client and Employer**: Act in a manner that is in the best interests of the client and employer, consistent with the public interest.
3. **Product**: Ensure products and related modifications meet the highest professional standards.
4. **Judgment**: Maintain integrity and independence in professional judgment.
5. **Management**: Leaders shall subscribe to and promote an ethical approach to management.
6. **Profession**: Advance the integrity and reputation of the profession consistent with the public interest.
7. **Colleagues**: Be fair to and supportive of colleagues.
8. **Self**: Participate in lifelong learning and promote an ethical approach to the practice.

#### Ethical Issues / Dilemmas:
* **Confidentiality**: Respect confidentiality even without formal non-disclosure agreements.
* **Competence**: Do not misrepresent competency or accept work outside your expertise.
* **Intellectual Property Rights (IPR)**: Be aware of local copyright and patent laws.
* **Computer Misuse**: Do not use technical skills to compromise other systems (viruses, unauthorised access).
* **Ethical Dilemmas**: E.g., being ordered to release safety-critical software before testing is completed, or writing code for military weapons.

### 9. Core Case Studies
The course uses three case studies to illustrate concepts:
1. **Insulin Pump Control System**: An embedded, safety-critical system that collects blood sugar data and delivers precise insulin doses. High blood sugar causes long-term damage; low blood sugar is immediately life-threatening.
2. **MHC-PMS (Mental Health Care Patient Management System)**: A clinic-based database system that stores patient records and treatment history. It must support disconnected use on laptops, maintain strict privacy, and issue safety alerts if patients pose a danger to themselves or others.
3. **Wilderness Weather Station**: A remote, unattended data collection system powered by batteries/solar that periodically reads weather parameters and transmits them via satellite. Must support dynamic reconfiguration in case of instrument failures.

---

## Key Terms and Definitions

| Term | Definition |
|---|---|
| **Software Engineering** | An engineering discipline concerned with all aspects of software production from specification to maintenance. |
| **Generic Software** | Stand-alone software developed for sale on the open market. |
| **Customized Software** | Software commissioned by a specific customer for their unique needs. |
| **Maintainability** | The ease with which software can be modified to correct faults, improve performance, or adapt to a changed environment. |
| **Dependability** | A system's ability to deliver services that can be trusted, incorporating reliability, safety, and security. |
| **Software Specification** | The process of establishing what services are required and the constraints on the system's operation and development. |
| **Ethical Dilemma** | A complex situation that involves a mental conflict between moral imperatives. |

---

## Practice Test

### Section A: Multiple-Choice Questions
1. Which of the following is NOT an essential attribute of good software?
   a) Maintainability
   b) Efficiency
   c) Low Cost
   d) Acceptability

2. If a software system is commissioned by a specific company to handle its internal logistics, who owns the software specification?
   a) The software developer
   b) The customer
   c) Both equally
   d) The public

3. A system that collects temperature data in the Sahara Desert and uploads it via satellite is best classified as which type of application?
   a) Stand-alone application
   b) Batch processing system
   c) Data collection system
   d) Entertainment system

4. Under which ACM/IEEE Code of Ethics principle is a software engineer expected to participate in lifelong learning?
   a) Public
   b) Product
   c) Colleagues
   d) Self

### Section B: Short-Answer & Scenario Questions
5. Explain the difference between Computer Science and Software Engineering.
6. What are the four fundamental software process activities?
7. Scenario: Your manager asks you to bypass final security testing for a banking app because the release deadline is in two hours. Identify which ACM/IEEE ethical principles are in conflict here and explain how you should respond.

---

## Answer Key

### Section A Solutions
1. **c) Low Cost**. The four essential attributes defined by Sommerville are Maintainability, Dependability & Security, Efficiency, and Acceptability. Low cost is a business constraint, not a software product attribute.
2. **b) The customer**. For customized products, the customer owns the specification. Decisons on changes are made by the customer.
3. **c) Data collection system**. It collects environmental data using sensors and transmits it to another system for processing.
4. **d) Self**. The "Self" principle states that software engineers shall participate in lifelong learning regarding the practice of their profession.

### Section B Solutions
5. **Computer Science** is concerned with the theories and methods that underlie computers and software systems (e.g., algorithms, computational theory). **Software Engineering** is concerned with the practicalities of producing and delivering reliable, cost-effective software systems to solve real-world problems under constraints.
6. The four fundamental activities are:
   * **Software Specification**: Defining what the system should do.
   * **Software Development**: Designing and writing the code.
   * **Software Validation**: Testing the system to ensure it meets requirements.
   * **Software Evolution**: Modifying the system over time.
7. **Ethical Conflict**:
   * Principle 1 (Public) and Principle 3 (Product) are in conflict with Principle 2 (Client and Employer - meeting deadlines).
   * Bypassing security testing violates the public interest (safety/security of user financial data) and compromises product quality.
   * **Response**: You should refuse to bypass the testing, explain the severe risks (safety, privacy, and economic damage), and document your concerns. The public interest must always take precedence over meeting a tight deadline.
