# Chapter 3: Agile Software Development

## What You Must Learn and Know

### 1. Rapid Software Development
* In modern business, rapid development and delivery are often the most critical system requirements.
* Requirements change rapidly, making it practically impossible to produce a stable set of requirements.
* In rapid software development:
  * Specification, design, and implementation are interleaved.
  * The system is developed as a series of versions with stakeholders involved in evaluation.

### 2. The Agile Manifesto and Principles
Agile methods emerged in response to the heavy, document-dominated process overheads of the 1980s and 1990s.
* **The Agile Manifesto Core Values**:
  1. **Individuals and interactions** over processes and tools.
  2. **Working software** over comprehensive documentation.
  3. **Customer collaboration** over contract negotiation.
  4. **Responding to change** over following a plan.
* **Five Key Agile Principles**:
  1. **Customer Involvement**: Customers must be closely involved in the development process to provide and prioritize new requirements.
  2. **Incremental Delivery**: Software is developed in increments, with the customer specifying the decisions in each.
  3. **People Not Process**: The skills of the development team should be recognized and leveraged. Teams should be left to develop their own ways of working.
  4. **Embrace Change**: Expect system requirements to change and design the system to accommodate this.
  5. **Maintain Simplicity**: Focus on active simplicity in both the software being developed and in the development process.

### 3. Plan-Driven vs. Agile Selection Factors
Deciding on the balance between plan-driven and agile processes depends on:
* **System Size**: Agile is best for small, co-located teams. Large systems require more planning and structure.
* **System Type**: Real-time or safety-critical systems with complex timing/safety requirements need more up-front analysis and design documentation.
* **Lifetime**: Long-lifetime systems require documentation to communicate design intent to future maintainers.
* **Team Organization**: Distributed or outsourced teams need documents to coordinate across boundaries.
* **Culture**: Bureaucratic organizations have a natural cultural alignment with plan-driven approaches.
* **Skill Levels**: Agile methods require highly skilled developers who can manage design and refactoring on the fly.
* **Regulation**: Systems subject to external safety approvals (e.g., medical devices, avionics) require detailed documentation for their safety cases.

### 4. Extreme Programming (XP)
Extreme Programming is a well-known agile method that takes an "extreme" approach to iterative development.
* **XP Practices**:
  * *Small, frequent releases* (e.g., every 2 weeks).
  * *Continuous integration* (system built multiple times a day).
  * *All tests must run* before code is checked in.
  * *Collective ownership* of code.
  * *Sustainable pace* (no overtime).
* **Requirements (User Stories)**:
  * Requirements are written on cards as **User Stories** (scenarios).
  * Developers break them down into **Implementation Tasks** to estimate cost and schedule.
  * The customer chooses which stories are prioritized for the next release.
* **Refactoring**:
  * XP replaces "design for change" with **constant refactoring**.
  * Programmers constantly clean up, simplify, and restructure the code to make future changes easy, removing duplicate code and tidying hierarchies.

### 5. Testing in XP
Testing is central to XP. It features:
1. **Test-First Development**: Writing tests as executable programs *before* writing the actual application code. This clarifies the requirements before implementation.
2. **Incremental Test Development**: Test cases are derived from user stories.
3. **Customer Involvement**: The customer helps write and validate acceptance tests for the stories.
4. **Test Automation**: Tests are executed automatically via frameworks (e.g., JUnit). Running the full test suite acts as regression testing to ensure new changes do not break existing functionality.
* **XP Testing Difficulties**: Programmers may take shortcuts (incomplete tests), complex UI workflows are hard to write unit tests for, and it is difficult to measure test coverage completeness.

### 6. Pair Programming
In XP, programmers work in pairs, sitting together at a single workstation to write code.
* **Advantages**:
  * Supports collective ownership and responsibility.
  * Spreads system knowledge across the team, reducing risk if a member leaves.
  * Serves as an informal, continuous peer review process.
  * Encourages refactoring (since the entire team benefits from clean code).
  * Pair programming productivity is comparable to two developers working independently, but it yields higher-quality code.

### 7. Agile Project Management: Scrum
Scrum is an agile project management framework focused on managing iterative development rather than engineering practices.
* **Scrum Phases**:
  1. **Outline Planning**: Establish general project objectives and design the software architecture.
  2. **Sprint Cycles**: A series of iterations (sprints) where each develops a system increment.
  3. **Project Closure**: Complete documentation (help systems, manuals) and review lessons learned.
* **The Sprint Cycle**:
  * Sprints are fixed-length (usually 2–4 weeks).
  * Features are selected from the **Product Backlog** (master list of work).
  * Once the sprint starts, requirements are frozen.
  * The development team is isolated from external distractions.
  * **Scrum Master**: A facilitator who organizes daily meetings, tracks the backlog, removes blockers, and protects the team from external interference.
  * **Daily Scrum**: Short meetings where team members report what they did yesterday, what they will do today, and any blocking problems.
* **Scrum Benefits**: Breakdown into manageable chunks, visibility, on-time delivery of increments, and establishing customer trust.

### 8. Scaling Agile Methods
* **Scaling Up**: Using agile for large systems that cannot be built by a single small team. Requires:
  * More up-front architectural design and documentation.
  * Mechanisms for cross-team communication (phone/video conferences, scrum of scrums).
  * Frequent (but not necessarily daily) system builds.
* **Scaling Out**: Introducing agile across a large, traditional organization.
  * *Challenges*: Project manager reluctance, rigid quality standards, variance in team skills, and cultural resistance to change.

---

## Key Terms and Definitions

| Term | Definition |
|---|---|
| **Agile Manifesto** | A declaration of core values and principles for agile software development. |
| **User Story** | A high-level description of a system requirement written from the perspective of an end-user. |
| **Regression Testing** | Re-running testing suites to verify that new code changes have not broken existing functionality. |
| **Product Backlog** | A prioritized list of features, bug fixes, and tasks representing the work to be done in a project. |
| **Scrum Master** | A facilitator in Scrum responsible for removing blockers and ensuring the team follows Scrum practices. |
| **Brownfield System** | A software system that must integrate and interact with pre-existing (legacy) systems. |

---

## Practice Test

### Section A: Multiple-Choice Questions
1. Which of the following values is prioritized on the LEFT in the Agile Manifesto?
   a) Following a plan
   b) Customer collaboration
   c) Comprehensive documentation
   d) Processes and tools

2. In Scrum, what is the role of the Scrum Master?
   a) To assign tasks to programmers and manage the project budget.
   b) To write the customer user stories and evaluate testing.
   c) To act as a facilitator, remove obstacles, and protect the team from external distractions.
   d) To define the software architecture and system interfaces.

3. Which XP practice involves programmers sitting together at the same workstation to write code?
   a) Incremental delivery
   b) Pair programming
   c) Refactoring
   d) Test-first development

4. When scaling agile to "brownfield systems", what is a major challenge?
   a) Programmers are not allowed to use Git.
   b) User interfaces are constrained by legacy screens.
   c) The new software must interact with multiple pre-existing legacy systems with rigid interfaces.
   d) Scrum is not compatible with database systems.

### Section B: Short-Answer & Scenario Questions
5. Explain the concept of "Test-First Development" and its main benefits.
6. What are the three phases of Scrum project management?
7. Scenario: A software company is developing a customized real-time flight control system for a new drone. Detail three project characteristics that would favor a plan-driven process over an agile process for this project.

---

## Answer Key

### Section A Solutions
1. **b) Customer collaboration**. The Agile Manifesto values customer collaboration over contract negotiation.
2. **c) To act as a facilitator, remove obstacles, and protect the team from external distractions**. The Scrum Master is a facilitator, not a traditional manager.
3. **b) Pair programming**. In pair programming, two developers sit at one workstation to write and review code.
4. **c) The new software must interact with multiple pre-existing legacy systems with rigid interfaces**. Brownfield systems must interface with existing legacy software, limiting requirement flexibility.

### Section B Solutions
5. **Test-First Development** involves writing automated test cases (using JUnit or a similar framework) before writing the actual code to implement the feature.
   * **Benefits**:
     * Clarifies the requirements and interface of the code before writing it.
     * Prevents code regression because the tests can be run automatically after every modification.
     * Simplifies debugging because errors are detected immediately when code fails a test.
6. The three phases are:
   * **Outline Planning**: Establish general objectives and design the system architecture.
   * **Sprint Cycles**: A series of iterations (sprints) that build functional system increments.
   * **Project Closure**: Wrap up the project, complete manuals/documentation, and assess lessons learned.
7. **Drone Flight Control System Plan-Driven Factors**:
   * **System Type**: It is a safety-critical and real-time control system. It requires detailed up-front design and timing analysis to ensure the drone does not crash, which is a major risk.
   * **External Regulation**: The software will likely require approval from an aviation authority (like the FAA or local CAA), which mandates extensive, detailed safety cases and specifications.
   * **Detailed Up-Front Architecture**: Real-time hardware control needs precise, predictable interfaces and architectures, which are difficult to change incrementally.
