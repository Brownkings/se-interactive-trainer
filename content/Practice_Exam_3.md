# Software Engineering I — Practice Exam 3: Comprehensive Review

**Module Code**: NSOE62120  
**Duration**: 3 Hours (180 Minutes)  
**Total Marks**: 100 Marks  
**Instructions**:
1. Answer ALL questions.
2. Read the scenarios and questions carefully before answering.
3. For modeling questions, provide clear textual descriptions or ASCII representations.
4. Suggested Solutions are at the end of this document.

---

## Section A: Software Fundamentals & Processes [24 Marks]

### Question 1: Software Engineering Principles & Ethics [12 Marks]

1.1 A startup is developing a social media app that collects extensive personal data from users, including location tracking and private messages. During development, a developer discovers that the app's privacy policy does not fully disclose the extent of data collection to users.

(a) Identify two ethical principles from the ACM/IEEE Code of Ethics that are being violated in this scenario. (4)
(b) As the lead software engineer, explain what actions you would take to address this ethical concern. (4)
(c) Explain the difference between software engineering and computer science in the context of building this social media application. (4)

### Question 2: Software Process Models [12 Marks]

2.1 A government agency needs to develop a tax filing system that must comply with strict regulatory requirements. The system must be fully documented, auditable, and pass government security certification before deployment. The requirements are well-understood and unlikely to change significantly.

(a) Which software process model would you recommend for this project? Justify your choice with two reasons. (4)
(b) Compare your recommended model with Agile development, explaining why Agile would be less suitable for this specific project. (4)

2.2 Explain the four phases of the Rational Unified Process (RUP) and describe the key deliverable produced in each phase. (4)

---

## Section B: Design & Architecture [22 Marks]

### Question 3: Architectural Patterns & Design [12 Marks]

3.1 A hospital is developing a patient monitoring system that collects real-time data from bedside medical devices (heart rate monitors, blood pressure sensors, oxygen level sensors) and displays alerts on nursing station screens and doctors' mobile devices.

(a) Propose a suitable architectural pattern for this system. Justify your choice. (4)
(b) Explain how the chosen architecture handles the requirement that multiple displays must update simultaneously when a patient's vital signs change. (4)
(c) Identify one key non-functional requirement for this system and explain how the architecture addresses it. (4)

### Question 4: System Modeling & UML [10 Marks]

4.1 A library management system allows members to search for books, borrow books, return books, and pay fines. Librarians can add new books, remove damaged books, and generate overdue reports. The system interacts with an external SMS gateway to send overdue notifications.

(a) Identify all actors in this system. (2)
(b) List six use cases and assign each to the appropriate actor. (3)
(c) Identify one <<include>> relationship and one <<extend>> relationship from the use cases. Justify each. (3)
(d) Explain what a sequence diagram would show for the "Borrow Book" use case, listing the key messages exchanged between objects. (2)

---

## Section C: Requirements & Testing [24 Marks]

### Question 5: Requirements Engineering [14 Marks]

**Scenario: Smart Campus Parking System**

A university wants to develop a **Smart Campus Parking System (SCPS)** that allows students and staff to find available parking spots in real-time, reserve spots in advance, and pay parking fees via a mobile app. The system uses IoT sensors in each parking bay to detect vehicle presence. Campus security can monitor the parking lots through a dashboard, issue virtual parking violations, and generate occupancy reports. The system must integrate with the university's existing student/staff database for user authentication.

5.1 Identify and classify the following requirements as functional or non-functional:
(a) "The system shall display available parking spots on a real-time map." (1)
(b) "The system shall process parking reservations within 2 seconds." (1)
(c) "The system shall send a push notification when a reserved spot is occupied by an unauthorized vehicle." (1)
(d) "The system shall be available 99.9% of the time during business hours." (1)

5.2 Identify three stakeholders for the SCPS and explain what requirements each would contribute. (6)

5.3 Describe two challenges the requirements engineering team might face when gathering requirements for this system. (4)

### Question 6: Software Testing Strategies [10 Marks]

6.1 A banking application has a function that calculates loan interest based on the principal amount, interest rate, and loan duration. The function uses the formula: Interest = Principal × Rate × Duration.

(a) Design three test cases using equivalence partitioning for this function. Specify the input values and expected output for each test case. (3)
(b) Design two boundary value test cases for the loan duration parameter, assuming valid duration is between 1 and 30 years. (2)

6.2 Explain the difference between:
(a) Unit testing and integration testing. (2)
(b) Black-box testing and white-box testing. (2)

6.3 In the context of the banking application, why is regression testing important after fixing a bug in the interest calculation function? (1)

---

## Section D: Agile & Case Study [30 Marks]

### Question 7: Agile Development Practices [12 Marks]

7.1 A software team is transitioning from a Waterfall approach to Scrum for developing a food delivery mobile application.

(a) Explain the three key roles in a Scrum team and their responsibilities. (6)
(b) Describe the purpose of the following Scrum ceremonies: Sprint Planning, Daily Standup, and Sprint Retrospective. (3)
(c) What is a Product Backlog and how does it differ from a Sprint Backlog? (3)

### Question 8: Case Study — E-Health Records System [18 Marks]

**Scenario: MediTrack System**

MediTrack is a national electronic health records system being developed for a country's public healthcare sector. The system will store patient medical histories, prescriptions, lab results, and appointment schedules across 250 public hospitals and 1,500 clinics. Doctors must access patient records from any facility. The system must comply with the Protection of Personal Information Act (POPIA) and the National Health Act.

Challenges include: legacy systems at some hospitals still use paper records, rural clinics have unreliable internet connectivity, multiple stakeholders (doctors, nurses, administrators, pharmacists, government officials) have different access needs, and the system must remain operational 24/7 as it supports emergency care.

8.1 Explain why a plan-driven software process model would be more appropriate than Agile for developing MediTrack. Provide three justifications. (6)

8.2 Identify three non-functional requirements for MediTrack and explain why each is critical. (6)

8.3 The rural clinics have unreliable internet connectivity. Propose and justify a design strategy that allows the system to function during network outages. (3)

8.4 Explain the concept of requirements traceability and why it is important for MediTrack, given its regulatory compliance obligations. (3)

---
---

# Suggested Solutions

## Section A Solutions

### Question 1: Software Engineering Principles & Ethics

**1.1(a) Two Ethical Principles Being Violated (4 marks)**:
1. **Public Interest**: Software engineers shall act consistently with the public interest. Failing to disclose the full extent of data collection violates users' right to informed consent and potentially puts their privacy and safety at risk.
2. **Honesty and Trustworthiness (Product)**: Software engineers shall ensure their products meet the highest professional standards. A misleading privacy policy is deceptive and undermines user trust, violating the principle that engineers should be honest about system capabilities and limitations.

**1.1(b) Actions to Address the Ethical Concern (4 marks)**:
1. **Raise the concern formally**: Document the discrepancy between actual data collection and the privacy policy, and escalate it to management and the legal team in writing.
2. **Recommend immediate disclosure**: Advocate for updating the privacy policy to accurately reflect all data collection practices before the next app release.
3. **Propose privacy-by-design changes**: Suggest implementing data minimization — only collect data that is strictly necessary for the app's functionality, and give users granular control over what they share.
4. **Consider whistleblowing**: If management refuses to address the issue, the ACM/IEEE code supports reporting the concern to relevant data protection authorities, as public interest overrides employer loyalty.

**1.1(c) Software Engineering vs. Computer Science (4 marks)**:
- **Computer Science** in this context would focus on the theoretical foundations — designing efficient algorithms for the social media feed ranking, optimizing data structures for storing user posts, developing machine learning models for content recommendation, and analyzing computational complexity of search operations.
- **Software Engineering** focuses on the practical, systematic development of the complete application — managing the development team, defining the software architecture, implementing reliable deployment pipelines, ensuring the system scales to millions of users, handling security and privacy requirements, conducting thorough testing, and maintaining the system after launch. Software engineering applies engineering discipline to ensure the product is delivered on time, within budget, and meets quality standards.

### Question 2: Software Process Models

**2.1(a) Recommended Model with Justification (4 marks)**:
The **Waterfall Model** (plan-driven process) is recommended.
*Justification*:
1. **Stable, well-understood requirements**: Tax filing regulations are well-defined by law and unlikely to change during development, making upfront requirements analysis feasible and effective.
2. **Regulatory compliance and documentation**: The Waterfall model mandates comprehensive documentation at each phase (requirements specification, design documents, test plans), which is essential for government security certification audits and regulatory compliance.

**2.1(b) Comparison with Agile (4 marks)**:
Agile would be less suitable because:
- Agile prioritizes working software over comprehensive documentation, but this project requires extensive documentation for security certification and government audits.
- Agile's iterative, evolving requirements approach introduces risk in a regulatory context where the system must meet fixed legal specifications before deployment.
- Agile's informal communication style may not produce the audit trail required by government security assessments.
- The tax filing system cannot be deployed incrementally — a partially complete tax system would be unusable and potentially illegal.

**2.2 Four Phases of RUP (4 marks)**:
1. **Inception**: Establish the business case, define the project scope, and identify key risks. *Deliverable*: Vision document and initial use case model.
2. **Elaboration**: Develop the system architecture, refine requirements, and mitigate the highest-priority risks. *Deliverable*: Software Architecture Document and detailed use case specifications.
3. **Construction**: Build the complete system through iterative development, implementing and testing all features. *Deliverable*: Working software (beta release) with test results.
4. **Transition**: Deploy the system to end users, conduct user training, and perform final acceptance testing. *Deliverable*: Final release with user manuals and deployment documentation.

---

## Section B Solutions

### Question 3: Architectural Patterns & Design

**3.1(a) Suitable Architecture with Justification (4 marks)**:
The **Publish-Subscribe (Event-Driven) Architecture** is most suitable.
*Justification*: Medical devices (publishers) generate continuous streams of vital sign data. Multiple consumers (nursing station screens, doctor mobile devices, alarm systems) need to receive these updates simultaneously without tight coupling to the devices. The publish-subscribe pattern allows medical devices to publish events to topics (e.g., "patient-101-heart-rate"), and all subscribed displays automatically receive updates without the devices needing to know about each display.

**3.1(b) Handling Simultaneous Updates (4 marks)**:
In the publish-subscribe architecture, when a patient's vital signs change:
1. The bedside sensor publishes a new data event to the message broker/event bus.
2. All subscribed clients (nursing station screen, doctor's mobile app, central monitoring dashboard) receive the event notification simultaneously through their subscriptions.
3. Each subscriber independently processes the event and updates its display.
4. New displays can be added simply by subscribing to the relevant patient's topic — no changes to the publishing devices are needed. This ensures all displays show consistent, real-time data without requiring point-to-point connections.

**3.1(c) Key Non-Functional Requirement (4 marks)**:
**Reliability/Availability**: The system must be operational 24/7 with no single point of failure, as patient lives depend on continuous monitoring.
*How the architecture addresses it*: The event-driven architecture supports redundancy — multiple instances of the message broker can run in a cluster. If one broker fails, another takes over. Subscribers automatically reconnect. Additionally, events can be persisted in a queue, so if a display temporarily disconnects, it receives missed events upon reconnection, ensuring no critical alerts are lost.

### Question 4: System Modeling & UML

**4.1(a) Actors (2 marks)**:
1. **Library Member** (primary actor)
2. **Librarian** (primary actor)
3. **SMS Gateway** (external system actor)

**4.1(b) Six Use Cases (3 marks)**:
1. Search for Books → Library Member
2. Borrow Book → Library Member
3. Return Book → Library Member
4. Pay Fine → Library Member
5. Add New Book → Librarian
6. Generate Overdue Report → Librarian

**4.1(c) Include and Extend Relationships (3 marks)**:
- **<<include>>**: "Borrow Book" includes "Check Membership Status" — every time a member borrows a book, the system must verify their membership is valid and they haven't exceeded their borrowing limit. This is mandatory behavior.
- **<<extend>>**: "Return Book" may be extended by "Calculate Fine" — when a book is returned late, the system calculates the overdue fine. This only occurs conditionally (when the book is overdue), making it an extension rather than an inclusion.

**4.1(d) Sequence Diagram for Borrow Book (2 marks)**:
Key messages exchanged:
1. Member → System: requestBorrow(bookID, memberID)
2. System → MemberDatabase: validateMembership(memberID)
3. MemberDatabase → System: memberValid(true)
4. System → BookCatalogue: checkAvailability(bookID)
5. BookCatalogue → System: available(true)
6. System → BookCatalogue: updateStatus(bookID, "borrowed")
7. System → LoanRecord: createLoan(memberID, bookID, dueDate)
8. System → Member: displayConfirmation(loanDetails)

---

## Section C Solutions

### Question 5: Requirements Engineering (SCPS)

**5.1 Requirement Classification (4 marks)**:
(a) **Functional** — describes a specific service the system provides (displaying available spots).
(b) **Non-Functional (Performance)** — specifies a timing constraint on system response.
(c) **Functional** — describes a specific system behavior triggered by a condition.
(d) **Non-Functional (Availability)** — specifies a system quality attribute.

**5.2 Three Stakeholders and Their Requirements (6 marks)**:
1. **Students/Staff (End Users)**: Would contribute requirements for the mobile app interface — real-time parking availability display, reservation functionality, mobile payment integration, navigation to reserved spots, and notification preferences. Their focus is on usability and convenience.
2. **Campus Security**: Would contribute requirements for the monitoring dashboard — real-time occupancy visualization, ability to issue virtual parking violations, alert notifications for unauthorized parking, historical occupancy reports, and integration with existing campus security systems.
3. **University IT Department**: Would contribute technical requirements — integration with the existing student/staff authentication database, data storage and backup specifications, network infrastructure requirements for IoT sensors, API specifications, system maintenance and update procedures, and cybersecurity requirements.

**5.3 Two Challenges in Requirements Gathering (4 marks)**:
1. **Conflicting stakeholder priorities**: Students may prioritize ease of use and low cost, while campus security prioritizes comprehensive monitoring and enforcement capabilities, and IT prioritizes security and maintainability. Balancing these competing interests requires careful negotiation and prioritization, which can delay requirements finalization.
2. **IoT technology uncertainty**: Since the system relies on IoT sensors for parking bay detection, the requirements team may struggle to specify exact technical requirements without prototyping — questions about sensor accuracy, network latency, battery life, and environmental durability (rain, snow, heat) may not have clear answers upfront, requiring iterative requirements refinement.

### Question 6: Software Testing Strategies

**6.1(a) Three Test Cases Using Equivalence Partitioning (3 marks)**:
| Test Case | Principal (R) | Rate (%) | Duration (years) | Expected Output (R) | Partition |
|-----------|--------------|----------|-------------------|---------------------|-----------|
| TC1 | 10,000 | 5 | 10 | 5,000 | Valid: normal positive values |
| TC2 | 0 | 5 | 10 | 0 | Boundary: zero principal |
| TC3 | -5,000 | 5 | 10 | Invalid/Error | Invalid: negative principal |

**6.1(b) Two Boundary Value Test Cases for Duration (2 marks)**:
| Test Case | Duration | Expected Result |
|-----------|----------|-----------------|
| BV1 | 0 years | Invalid — below minimum (boundary just outside valid range) |
| BV2 | 1 year | Valid — minimum accepted duration (boundary at valid edge) |
| BV3 | 30 years | Valid — maximum accepted duration (boundary at valid edge) |
| BV4 | 31 years | Invalid — above maximum (boundary just outside valid range) |

**6.2(a) Unit Testing vs. Integration Testing (2 marks)**:
- **Unit Testing**: Tests individual components (functions, methods, classes) in isolation to verify each unit works correctly on its own. Example: testing the interest calculation function alone with mock inputs.
- **Integration Testing**: Tests the interaction between two or more integrated components to verify they work correctly together. Example: testing that the interest calculation function correctly receives data from the loan application form and stores results in the database.

**6.2(b) Black-Box vs. White-Box Testing (2 marks)**:
- **Black-Box Testing**: Tests the system based only on its inputs and expected outputs without knowledge of the internal code structure. The tester treats the system as a "black box." Focus is on functional behavior.
- **White-Box Testing**: Tests the system with full knowledge of the internal code structure — the tester designs tests to exercise specific code paths, branches, and conditions. Focus is on code coverage and internal logic.

**6.3 Importance of Regression Testing (1 mark)**:
Regression testing ensures that the bug fix in the interest calculation function has not accidentally broken other parts of the system that depend on it (e.g., loan approval workflow, monthly statement generation, tax reporting). Without regression testing, a fix in one area could introduce new defects elsewhere.

---

## Section D Solutions

### Question 7: Agile Development Practices

**7.1(a) Three Scrum Roles (6 marks)**:
1. **Product Owner**: Represents the stakeholders and customers. Responsible for defining and prioritizing the Product Backlog, ensuring the team builds the most valuable features first. For the food delivery app, they decide whether to prioritize the order tracking feature or the restaurant review feature.
2. **Scrum Master**: A servant-leader who facilitates the Scrum process, removes impediments, and shields the team from external distractions. They are NOT a traditional project manager — they don't assign tasks. They ensure Scrum ceremonies are productive and the team follows Agile principles.
3. **Development Team**: A self-organizing, cross-functional group (typically 5-9 members) responsible for delivering potentially shippable product increments at the end of each sprint. They collectively decide how to accomplish the work and hold each other accountable.

**7.1(b) Scrum Ceremonies (3 marks)**:
1. **Sprint Planning**: The team selects items from the Product Backlog to include in the upcoming Sprint and defines how they will be implemented. Produces the Sprint Backlog.
2. **Daily Standup (Daily Scrum)**: A 15-minute daily meeting where each team member answers: What did I do yesterday? What will I do today? Are there any impediments? Promotes transparency and early problem detection.
3. **Sprint Retrospective**: Held at the end of each sprint, the team reflects on what went well, what didn't, and what improvements to make in the next sprint. Drives continuous process improvement.

**7.1(c) Product Backlog vs. Sprint Backlog (3 marks)**:
- **Product Backlog**: A dynamic, prioritized list of ALL features, enhancements, and bug fixes for the entire product. Owned by the Product Owner. It evolves throughout the project's lifetime and represents everything that could potentially be built.
- **Sprint Backlog**: A subset of the Product Backlog selected for the current sprint, plus the team's plan for delivering those items. Owned by the Development Team. It is fixed during the sprint (no new items added by the Product Owner) and represents the team's commitment for that iteration.

### Question 8: Case Study — MediTrack

**8.1 Why Plan-Driven Over Agile — Three Justifications (6 marks)**:
1. **Regulatory compliance**: MediTrack must comply with POPIA and the National Health Act. A plan-driven process produces comprehensive requirements specifications, design documents, and test documentation needed to demonstrate compliance during regulatory audits. Agile's minimal documentation approach creates compliance risk.
2. **Safety-critical nature**: The system supports emergency care across 250 hospitals — errors could endanger patient lives. Plan-driven processes enforce rigorous upfront requirements analysis, formal design reviews, and systematic verification, reducing the risk of critical defects in production.
3. **Large-scale, distributed development**: With 250 hospitals and 1,500 clinics, the project involves many teams, legacy system integrations, and complex deployment logistics. Plan-driven processes provide the detailed architectural planning, integration specifications, and coordination frameworks necessary for projects of this scale.

**8.2 Three Non-Functional Requirements (6 marks)**:
1. **Availability (99.99% uptime)**: The system supports emergency care where doctors need immediate access to patient records for life-saving treatment decisions. Even minutes of downtime could delay critical care and endanger patient lives.
2. **Security/Privacy (POPIA compliance)**: Patient health records are extremely sensitive personal data. The system must implement role-based access control, data encryption at rest and in transit, comprehensive audit logging, and consent management to comply with POPIA and prevent data breaches.
3. **Performance (sub-3-second response time)**: With 250 hospitals and 1,500 clinics accessing the system simultaneously, doctors need fast access to patient records during consultations. Slow response times would disrupt clinical workflows and reduce the quality of patient care.

**8.3 Design Strategy for Unreliable Connectivity (3 marks)**:
**Offline-First Architecture with Local Synchronization**: Deploy a local database at each rural clinic that stores a subset of frequently accessed patient records. The application works against the local database during normal operation and network outages.
- When connectivity is available, the system synchronizes changes bidirectionally between the local database and the central server using a conflict resolution protocol (e.g., timestamp-based merge with flagging of conflicting edits for manual review).
- *Justification*: This ensures clinicians can access and update patient records regardless of network status, while eventual consistency ensures the central system stays up to date when connectivity is restored.

**8.4 Requirements Traceability for MediTrack (3 marks)**:
**Requirements Traceability** is the ability to trace each requirement forward to its corresponding design elements, code modules, and test cases, and backward to its originating stakeholder need or regulatory mandate.
*Importance for MediTrack*: Given POPIA and National Health Act compliance obligations, traceability provides:
- **Audit proof**: Regulators can verify that every legal requirement has been implemented and tested.
- **Impact analysis**: When regulations change, the team can trace which system components are affected and need modification.
- **Completeness assurance**: Ensures no regulatory requirement is accidentally omitted during development, which could result in legal penalties or patient safety risks.
