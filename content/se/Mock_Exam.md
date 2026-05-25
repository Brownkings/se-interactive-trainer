# Software Engineering I — Mock Examination and Suggested Solutions

**Module Code**: SE-101  
**Duration**: 3 Hours (180 Minutes)  
**Total Marks**: 100 Marks  
**Instructions**:
1. Answer all questions.
2. Read the scenarios and questions carefully before answering.
3. For Section B (Modeling), provide clear textual descriptions or ASCII representations of UML diagrams.
4. The Suggested Solutions and Answer Key are located at the very end of this document. Do not view the solutions until you have completed the exam under timed conditions.

---

## Section A: Theory & Core Concepts [40 Marks]

### Question 1: Software Engineering Foundations (Chapter 1) [5 Marks]
1.1 Explain the difference between "Software Engineering" and "Computer Science". (2)  
1.2 List and briefly describe three professional ethics principles defined in the ACM/IEEE Code of Ethics. (2)  
1.3 How does defining a system boundary (e.g., for the TechFix job management system) help manage project scope? (1)

### Question 2: Software Processes & RUP (Chapter 2) [6 Marks]
2.1 Define the term "Software Process Model" and contrast plan-driven and agile processes. (2)  
2.2 The Rational Unified Process (RUP) is a modern generic process model. List the four dynamic phases of RUP in order, and state the main objective of each phase. (4)

### Question 3: Agile Methods & Scrum (Chapter 3) [7 Marks]
3.1 The Agile Manifesto values four pairs of items. List three of these pairs, clearly showing which side is preferred. (3)  
3.2 In Scrum, explain the role of the "Scrum Master" and how they differ from a traditional project manager. (2)  
3.3 Explain two technical or organizational characteristics of a project that would make Agile methods *unsuitable*. (2)

### Question 4: Requirements Engineering (Chapter 4) [7 Marks]
4.1 Define "Functional Requirements" and "Non-Functional Requirements", providing one example of each for a hospital patient system. (2)  
4.2 Explain what a "domain requirement" is and why they present unique challenges to software engineers. (2)  
4.3 Outline the three stages of the Requirements Change Management process in order. (3)

### Question 5: System Modeling (Chapter 5) [5 Marks]
5.1 Explain the difference between the "External Perspective", "Interaction Perspective", "Structural Perspective", and "Behavioral Perspective" in system modeling. (2)  
5.2 Explain what "Generalization" and "Aggregation" represent in UML class diagrams, and state the visual notation used to represent each. (3)

### Question 6: Architectural Design (Chapter 6) [5 Marks]
6.1 Describe the **Repository** architectural pattern. List one major advantage and one major disadvantage of using it. (3)  
6.2 Briefly describe the 4+1 View Model of software architecture, listing the four primary views. (2)

### Question 7: Software Testing (Chapter 8) [5 Marks]
7.1 Explain the difference between **Verification** and **Validation** (V & V). (2)  
7.2 Define **Test-Driven Development (TDD)** and explain how it simplifies the debugging process. (3)

---

## Section B: UML Modeling & Diagram Design [30 Marks]

### Question 8: Use Case Modeling (BrightLearn Platform) [10 Marks]
Read the scenario below and answer the questions.

> **SCENARIO: BrightLearn Platform**
> BrightLearn is an online e-learning platform. Students can register for courses, watch video lectures, submit assignments, and take online quizzes. Lecturers can upload learning materials, set quiz questions, and grade submitted assignments. An Administrator manages user accounts, activates/deactivates courses, and generates usage reports. When a student submits an assignment, the system automatically runs it through a Plagiarism Detection Service. Students can optionally request an extension on an assignment deadline, which requires lecturer approval. All users must log in before performing any function.

8.1 Identify the actors in this system. Are there any generalizations between actors? (2)  
8.2 List the core use cases for the Student, Lecturer, and Administrator. (3)  
8.3 Identify which use cases require an `<<include>>` relationship and which require an `<<extend>>` relationship based on the scenario. (2)  
8.4 Describe the structure of a Use Case Diagram for this system, or draw it using ASCII representation, ensuring system boundaries and relationships are represented correctly. (3)

### Question 9: Interaction Modeling (SafePay Fund Transfer) [10 Marks]
Read the scenario below and answer the questions.

> **SCENARIO: SafePay App**
> SafePay is a mobile banking application. When a user initiates a fund transfer, the app sends the request to the Banking Server. The server first checks the user's session validity with the Authentication Service. If the session is valid, the server checks the account balance in the Account Database. If the balance is sufficient, the transaction is processed and a transaction record is saved in the Transaction Database. A confirmation SMS is sent to the user via the SMS Gateway. If the session is invalid, the server returns an error and prompts re-login. If the balance is insufficient, the transaction is rejected and a failure notification is sent.

9.1 List the lifelines that must appear in a sequence diagram for this scenario. (2)  
9.2 Explain the sequence of interactions that occur when a user successfully transfers funds. Distinguish between call (synchronous) messages and return messages. (4)  
9.3 How would you represent the session validation check and balance check using UML sequence diagram control structures (combined fragments)? (4)

### Question 10: System Architecture Design (CityParks Booking) [10 Marks]
Read the scenario below and answer the questions.

> **SCENARIO: CityParks System**
> CityParks is a municipal booking system that allows residents to book sports fields and braai areas online or via mobile app. Staff at the Parks Office can view bookings, approve group bookings, and generate reports. Payments are processed through a third-party Payment Gateway. The system must notify users of booking confirmations via email. The municipality's existing HR System provides staff authentication. The system must be accessible from web browsers and smartphones.

10.1 Propose a Layered (N-tier) architecture for the CityParks Booking System. List the layers and explain what components reside in each. (4)  
10.2 Identify the external systems that must interface with CityParks. (2)  
10.3 Detail the communication protocols/interfaces (e.g., HTTPS, REST APIs) used for data flow between:
* The client applications and the backend. (2)
* The backend and the third-party Payment Gateway. (2)

---

## Section C: Case Studies & Scenario Analysis [30 Marks]

### Question 11: Insulin Pump Control System (Safety-Critical) [10 Marks]
Read the case study description and answer the questions.

> **CASE STUDY: The Insulin Pump**
> The insulin pump is an embedded safety-critical system that monitors blood sugar levels in a diabetic patient and injects insulin automatically to maintain normal blood sugar. The system comprises a blood sugar sensor, a controller, and an electric micro-pump. The software must calculate the dose accurately and ensure the pump delivers it safely.

11.1 Classify the following requirements as functional or non-functional:
1. "The software shall calculate the required insulin dose based on the blood glucose sensor reading." (1)
2. "The system shall not deliver more than 5 units of active insulin in a single hour." (1)
3. "The blood sensor electrical conductivity measurements shall have an accuracy of 99.5%." (1)  
11.2 Explain the catastrophic impact of failure for both over-delivery and under-delivery of insulin in this system. (4)  
11.3 Propose and justify a software engineering practice (e.g., formal specification, rigorous verification) to minimize coding errors in this embedded control system. (3)

### Question 12: Mentcare (Information System Evolution) [10 Marks]
Read the case study description and answer the questions.

> **CASE STUDY: Mentcare System**
> Mentcare is a mental health care patient management system. It maintains records of patients, consultations, and treatments. It is used by doctors, nurses, receptionists, and clinical managers. Clinicians can copy records to local laptops for disconnected use during home visits.

12.1 Explain the "Distributed Data Consistency" challenge that arises when clinicians take local copies of patient records on laptops and edit them offline. How should the system handle synchronization? (4)  
12.2 The Mentcare system must comply with data protection (privacy) laws as well as mental health laws (which permit compulsory detention under strict conditions). Explain how these laws can impose conflicting requirements on the software. (3)  
12.3 Contrast the suitability of a plan-driven process vs. an agile process for developing the Mentcare system. Which is preferred and why? (3)

### Question 13: Wilderness Weather Station (Coping with Change) [10 Marks]
Read the case study description and answer the questions.

> **CASE STUDY: Wilderness Weather Station**
> Weather stations are deployed in remote, uninhabited areas to collect meteorological data. They are battery-powered, solar-charged, and communicate via narrow-bandwidth satellite links. The system must run unattended indefinitely.

13.1 Explain how the physical operational environment of the weather station influences the non-functional requirements and design of the station software. (4)  
13.2 Define the term "Dynamic Reconfiguration" and explain why it is a critical reliability strategy for the weather station software. (3)  
13.3 Compare the strategies of "Change Avoidance" (via throw-away prototyping) and "Change Tolerance" (via incremental delivery) in the context of configuring the weather station sensors. (3)

---
---

# Mock Exam — Answer Key and Suggested Solutions

## Section A Solutions

### Question 1: Software Engineering Foundations
* **1.1 Difference**:
  * **Computer Science** focuses on the theories, mathematical models, and underlying principles of computation, algorithms, and data structures.
  * **Software Engineering** is an engineering discipline concerned with the practical, cost-effective development, delivery, and maintenance of high-quality software systems in real-world environments.
* **1.2 ACM/IEEE Code of Ethics (Any three)**:
  * *Public*: Software engineers shall act consistently with the public interest.
  * *Client and Employer*: Software engineers shall act in a manner that is in the best interests of their client and employer, consistent with the public interest.
  * *Product*: Software engineers shall ensure that their products and related modifications meet the highest professional standards possible.
  * *Judgment*: Software engineers shall maintain integrity and independence in their professional judgment.
  * *Management*: Software engineering managers and leaders shall subscribe to and promote an ethical approach to the management of software development and maintenance.
  * *Profession*: Software engineers shall advance the integrity and reputation of the profession consistent with the public interest.
  * *Colleagues*: Software engineers shall be fair to and supportive of their colleagues.
  * *Self*: Software engineers shall participate in lifelong learning regarding the practice of their profession.
* **1.3 TechFix System Boundary**:
  * Defining the system boundary for the TechFix job management system determines what is inside the scope of development (e.g., technician assignment, progress updates, invoice generation) and what remains external (e.g., third-party supplier systems, client phones). This prevents scope creep by making explicit which interfaces need to be implemented.

### Question 2: Software Processes & RUP
* **2.1 Process Models**:
  * A **Software Process Model** is an abstract representation of a software process from a specific perspective (e.g., Waterfall, Incremental, Reuse-oriented).
  * **Plan-Driven**: Activities are planned in advance, and progress is measured against a baseline plan.
  * **Agile**: Planning is incremental, and changes can be easily made based on customer feedback.
* **2.2 RUP Phases**:
  1. **Inception**: Establish the business case and define the scope of the project.
  2. **Elaboration**: Understand the problem domain, establish the architecture, and mitigate high-risk elements.
  3. **Construction**: Design, write code, and test the software.
  4. **Transition**: Deploy the system in its operating environment for end-user operation.

### Question 3: Agile Methods & Scrum
* **3.1 Agile Manifesto Values (Any three)**:
  * Individuals and interactions **over** processes and tools.
  * Working software **over** comprehensive documentation.
  * Customer collaboration **over** contract negotiation.
  * Responding to change **over** following a plan.
* **3.2 Scrum Master**:
  * The **Scrum Master** is a facilitator who protects the development team from external distractions, organizes daily scrum meetings, and tracks the backlog.
  * Unlike a traditional project manager, they do not assign tasks or enforce deadlines; instead, the team is self-organizing.
* **3.3 Unsuitable Characteristics (Any two)**:
  * *Safety-critical systems*: Systems that require detailed, regulatory-approved design documentation (safety cases) before implementation.
  * *Large, distributed teams*: Agile relies on informal, face-to-face communication, which degrades across multiple sites or timezones.
  * *Long-lifetime systems*: Systems requiring extensive documentation to ensure maintenance teams can support the software after the original developers have left.

### Question 4: Requirements Engineering
* **4.1 Definitions & Examples**:
  * **Functional Requirement**: Describes what service or functionality the system must provide.  
    * *Example*: "A nurse shall be able to view a patient's medical history."
  * **Non-Functional Requirement**: A constraint on the system's operations or qualities.  
    * *Example*: "The patient medical database shall be encrypted using AES-256."
* **4.2 Domain Requirement**:
  * A requirement derived from the system's operational domain (e.g., aviation, medicine, physics).
  * *Challenges*: They are expressed in specialized domain terminology that software developers may not understand, and domain experts often take these rules for granted (implicitness), forgetting to document them.
* **4.3 Requirements Change Management Stages**:
  1. *Problem analysis and change specification*: Analyze the problem/change request for validity and feasibility.
  2. *Change analysis and costing*: Assess the impact of the change using traceability data and estimate costs.
  3. *Change implementation*: Modify the requirements document, design, and code.

### Question 5: System Modeling
* **5.1 System Modeling Perspectives**:
  * **External**: Models the system's context or operational environment.
  * **Interaction**: Models interactions between users and the system, or between system components.
  * **Structural**: Models the static organization of components or databases.
  * **Behavioral**: Models the dynamic runtime behavior of the system in response to events or data.
* **5.2 Class Diagram Relationships**:
  * **Generalization**: Represents inheritance ("is-a" relationship) where a subclass inherits from a superclass.  
    * *Notation*: A line with an **open/hollow triangle** pointing to the superclass.
  * **Aggregation**: Represents a collection/composition ("part-of" relationship) where one class is composed of other classes.  
    * *Notation*: A line with a **hollow diamond** at the composite class end.

### Question 6: Architectural Design
* **6.1 Repository Pattern**:
  * *Description*: All shared data is held in a central repository database accessed by all subsystems.
  * *Advantage*: Efficient data sharing; subsystems do not need to know how others consume data; easy to add new subsystems.
  * *Disadvantage*: Repository is a single point of failure and a performance bottleneck; changing the repository data schema affects all subsystems.
* **6.2 4+1 View Model**:
  * It represents software architecture from multiple perspectives.
  * *Views*:
    1. **Logical View** (structural abstractions/classes).
    2. **Process View** (runtime concurrency/processes).
    3. **Development View** (code decomposition/modules).
    4. **Physical View** (hardware distribution).
    5. *(+1)* **Scenarios/Use Cases** (verifies and connects the views).

### Question 7: Software Testing
* **7.1 Verification vs. Validation**:
  * **Verification**: "Are we building the product right?" (Conformance to the functional specification).
  * **Validation**: "Are we building the right product?" (Ensuring the system meets the customer's actual business needs).
* **7.2 Test-Driven Development (TDD) & Debugging**:
  * **TDD**: A development approach where automated tests are written *before* writing the functional code.
  * **Debugging Simplification**: Since code is written incrementally, when a test fails, the bug must reside in the newly added lines of code, making it quick to locate and fix.

---

## Section B Solutions

### Question 8: Use Case Modeling (BrightLearn Platform)
* **8.1 Actors & Generalization**:
  * *Actors*: Student, Lecturer, Administrator, Plagiarism Detection Service (external system).
  * *Generalization*: Both Student and Lecturer could inherit from a generalized `User` class (super-actor) since both must log in.
* **8.2 Core Use Cases**:
  * *Student*: Register for Course, Watch Video, Submit Assignment, Take Quiz, Request Extension.
  * *Lecturer*: Upload Materials, Set Quiz Questions, Grade Assignment, Approve Extension.
  * *Administrator*: Manage User Account, Activate/Deactivate Course, Generate Usage Report.
* **8.3 Relationships**:
  * `<<include>>`: All use cases (e.g., watch video, grade assignment) *include* the "Log In" use case. Also, "Submit Assignment" *includes* "Run Plagiarism Check".
  * `<<extend>>`: "Request Extension" *extends* "Submit Assignment" (with an extension point "before deadline").
* **8.4 ASCII Use Case Diagram**:
```text
  +-------------------------------------------------------------+
  | BrightLearn Platform                                        |
  |                                                             |
  |   +---------------+                                         |
  |   |    Log In     |<-----------------------------\          |
  |   +---------------+                              |          |
  |                                                  |          |
  |   +---------------+                              |          |
  |   |Watch Lecture  |--<<include>>---------------->+          |
  |   +---------------+                              |          |
  |                                                  |          |
  |   +---------------+                              |          |
  |   |Submit Assign. |--<<include>>---------------->+          |
  |   +---------------+                              |          |
  |           ^                                      |          |
  |           | (extension point)                    |          |
  |      <<extend>>                                  |          |
  |           |                                      |          |
  |   +---------------+                              |          |
  |   |Req. Extension |--<<include>>---------------->+          |
  |   +---------------+                              |          |
  |                                                  |          |
  |   +---------------+                              |          |
  |   |Grade Assign.  |--<<include>>---------------->+          |
  |   +---------------+                              |          |
  |                                                  |          |
  |   +---------------+                              |          |
  |   |Manage Account |--<<include>>---------------->+          |
  |   +---------------+                                         |
  +-------------------------------------------------------------+
```

### Question 9: Interaction Modeling (SafePay Fund Transfer)
* **9.1 Lifelines**:
  * `User` (Actor), `Mobile App (UI)`, `Banking Server`, `Authentication Service`, `Account Database`, `Transaction Database`, `SMS Gateway`.
* **9.2 Sequence of Messages**:
  1. `User` initiates transfer $\rightarrow$ `Mobile App (UI)` (Call)
  2. `Mobile App (UI)` sends transfer request $\rightarrow$ `Banking Server` (Call)
  3. `Banking Server` requests token check $\rightarrow$ `Authentication Service` (Call)
  4. `Authentication Service` returns token valid $\rightarrow$ `Banking Server` (Return)
  5. `Banking Server` queries balance $\rightarrow$ `Account Database` (Call)
  6. `Account Database` returns sufficient balance $\rightarrow$ `Banking Server` (Return)
  7. `Banking Server` processes transaction internally (Self-Call)
  8. `Banking Server` saves record $\rightarrow$ `Transaction Database` (Call)
  9. `Transaction Database` returns success $\rightarrow$ `Banking Server` (Return)
  10. `Banking Server` requests SMS dispatch $\rightarrow$ `SMS Gateway` (Call)
  11. `Banking Server` returns success status $\rightarrow$ `Mobile App (UI)` (Return)
  12. `Mobile App (UI)` displays transfer confirmation $\rightarrow$ `User` (Return)
* **9.3 Combined Fragments**:
  * An outer `alt` combined fragment with two branches:
    * *Branch 1 (Session Valid)*: Contains the nested balance check logic.
    * *Branch 2 (Session Invalid)*: Returns re-login prompt.
  * A nested `alt` combined fragment inside Branch 1:
    * *Branch 1.1 (Sufficient Balance)*: Processes transaction and saves to database.
    * *Branch 1.2 (Insufficient Balance)*: Rejects transaction and returns failure notification.

### Question 10: System Architecture Design (CityParks Booking)
* **10.1 Layered Architecture**:
  * **Presentation Layer**: Client applications (Web Browsers, Mobile Apps (iOS/Android)) that display interfaces and capture inputs.
  * **Application / Business Logic Layer**: Controls the core reservation rules (field availability checking, reservation processing, billing workflows, reports generation).
  * **Data Layer**: System database (e.g., PostgreSQL) containing tables for Users, Park Booking Slots, and Payments.
* **10.2 External Systems**:
  * *Payment Gateway* (receives payment details and charges credit cards).
  * *HR System* (authenticates staff credentials).
  * *Email Service / SMTP Server* (transmits reservation notification emails).
* **10.3 Communication Protocols**:
  * *Client to Backend*: HTTPS protocol using a REST API (JSON payloads).
  * *Backend to Payment Gateway*: HTTPS REST API (or webhooks for payment processing).
  * *Backend to HR System*: LDAP or OAuth2/SAML over HTTPS for staff login.
  * *Backend to Email Service*: SMTP protocol (Port 587 or API-based HTTP client).

---

## Section C Solutions

### Question 11: Insulin Pump Control System
* **11.1 Requirement Classification**:
  1. *Functional*: Dose calculation is a core computation/service.
  2. *Non-Functional (Safety)*: This is a safety constraint restricting the maximum dose rate.
  3. *Non-Functional (Performance/Safety)*: This is a hardware sensor accuracy constraint.
* **11.2 Failure Impact**:
  * *Over-delivery*: Delivering too much insulin causes **hypoglycemia** (very low blood sugar), leading to rapid brain cell starvation, unconsciousness, seizures, permanent brain damage, or immediate death.
  * *Under-delivery*: Delivering too little insulin causes **hyperglycemia** (high blood sugar), leading to diabetic ketoacidosis in the short term, and long-term organ damage (blindness, kidney failure, cardiovascular disease).
* **11.3 Software Practice**:
  * **Formal Specification**: Using formal mathematical notation (e.g., Z notation or VDM) to specify the state variables (insulin level, battery level, sensor reading) and operations.  
  * *Justification*: In safety-critical embedded systems, mathematical specifications eliminate ambiguities and allow developers to verify the logical correctness of the control algorithm before writing code, proving that hazardous states (like an overdose) are mathematically impossible.

### Question 12: Mentcare (Information System Evolution)
* **12.1 Distributed Data Consistency**:
  * *Challenge*: When multiple clinicians download local patient records to laptops, modify them offline, and upload them back to the server, updates can overwrite one another. If Nurse A and Nurse B both edit Patient Jim's record offline, the last database upload will overwrite the first (lost update problem).
  * *Synchronization Solution*: The system must implement a reconciliation protocol. Rather than overwriting files, it should perform field-level merges and flag conflicting fields (e.g., differing prescriptions) for manual review by a clinical administrator.
* **12.2 Conflicting Laws**:
  * Data privacy laws (like GDPR) mandate that patient records must be kept confidential, allowing access only to authorized clinical staff.
  * Mental health laws, however, specify that under compulsory detention orders (involuntary admission), clinical details must be shared with judicial courts, police, and external hospital managers to ensure civil rights are protected.
  * The software must balance these by restricting standard viewing but implementing a "break-glass" auditing feature that grants and logs access to judicial authorities during legal reviews.
* **12.3 Plan-Driven vs. Agile Process**:
  * **Plan-Driven** is preferred.
  * *Justification*: Mentcare is a medical information system that manages patient safety (monitoring suicidal risks) and legal compliance (compulsory detention, privacy regulations). A plan-driven process enforces detailed upfront requirements analysis, system architecture design, and comprehensive documentation, which are essential to prove compliance during regulatory audits and prevent life-threatening medical errors. Agile's lack of documentation and rapid cycles increase compliance risk.

### Question 13: Wilderness Weather Station (Coping with Change)
* **13.1 Environmental Influence**:
  * The stations are deployed in remote, harsh environments with no electrical grid access.
  * *Design Impact*: The hardware must be low-power, relying on solar/wind chargers. The software must implement aggressive power-management features (e.g., deep-sleep cycles between readings). It must also save weather data locally in non-volatile flash memory because satellite links are narrow-bandwidth and prone to weather-related outages.
* **13.2 Dynamic Reconfiguration**:
  * *Definition*: The ability of a software system to replace components or modify its configuration at runtime without shutting down.
  * *Criticality*: Since stations are unattended in wilderness areas, physical maintenance is expensive and slow. If a sensor fails or a software bug is detected, the station must dynamically switch to a redundant sensor or download and apply a software patch over a satellite link without interruption.
* **13.3 Change Avoidance vs. Change Tolerance**:
  * **Change Avoidance** (Prototyping): Creating a mock interface to validate requirements before deployment, reducing the need for sensor configuration changes later.
  * **Change Tolerance** (Incremental Delivery): Designing the station's software architecture using a modular, plug-and-play pattern (e.g., microservices or dynamic loading). If a new type of sensor is added, the new driver component can be deployed in a separate increment without altering the core data logging software.
