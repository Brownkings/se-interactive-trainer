# Chapter 2: Software Processes

## What You Must Learn and Know

### 1. The Software Process
* A **software process** is a structured set of activities required to develop a software system.
* All software processes involve four core activities:
  1. **Specification**: Defining what the system should do.
  2. **Design and Implementation**: Defining the organization of the system and coding it.
  3. **Validation**: Checking that the system does what the customer wants.
  4. **Evolution**: Changing the system in response to changing customer needs.
* A **process model** is an abstract representation of a software process from a specific perspective.
* Process descriptions include:
  * **Products**: Outcomes of a process activity (e.g., design document, code).
  * **Roles**: Responsibilities of the people involved.
  * **Pre- and Post-conditions**: Conditions that must be true before and after an activity.

### 2. Plan-Driven vs. Agile Processes
* **Plan-Driven Processes**: All activities are planned in advance, and progress is measured against this detailed plan.
* **Agile Processes**: Planning is incremental, and it is designed to easily reflect changing customer requirements.
* *Note*: Most practical software processes incorporate elements of both approaches. There is no universally right or wrong process.

### 3. General Software Process Models

#### A. The Waterfall Model
* A plan-driven model where the project is divided into separate, sequential phases:
  1. *Requirements Analysis and Definition*
  2. *System and Software Design*
  3. *Implementation and Unit Testing*
  4. *Integration and System Testing*
  5. *Operation and Maintenance*
* **Drawback**: Inflexibility. It is difficult to accommodate change once the process is underway. A phase must be completed before the next can begin.
* **When to use**: Only when requirements are well-understood, stable, and changes will be limited (e.g., large systems engineering projects developed across multiple sites where planning coordinates the teams).

#### B. Incremental Development
* Interleaves the activities of specification, development, and validation. Can be plan-driven or agile.
* **Benefits**:
  * Cost of accommodating changing customer requirements is reduced (less rework).
  * Easier to get customer feedback (using demonstrations of active increments).
  * Rapid delivery and deployment of useful software to the customer.
* **Problems**:
  * The process is not visible (managers lack regular deliverables to measure progress without documentation overhead).
  * System structure degrades as increments are added, unless time and money are spent on **refactoring**.

#### C. Integration and Configuration (Reuse-Oriented)
* Based on systematic reuse where systems are assembled from existing components or Commercial-off-the-shelf (COTS) systems.
* **Process Stages**: Component analysis → Requirements modification → System design with reuse → Development and integration.
* **Component Types**: Web services (remote invocation), Object packages (.NET/J2EE frameworks), and Stand-alone COTS systems.

### 4. Details of Process Activities

#### A. Requirements Engineering (Specification)
1. **Feasibility Study**: Assessment of technical and financial viability.
2. **Requirements Elicitation and Analysis**: Gathering stakeholder expectations.
3. **Requirements Specification**: Detailing requirements in a formal document.
4. **Requirements Validation**: Checking that requirements are realistic and consistent.

#### B. Software Design and Implementation
* Converts the specification into an executable system.
* **Design Activities**:
  1. *Architectural Design*: Identifying system structure, main components, and distribution.
  2. *Interface Design*: Defining boundaries between components.
  3. *Component Design*: Specifying how each component operates.
  4. *Database Design*: Designing data structures and representation.

#### C. Software Validation (Verification & Validation - V&V)
* Shows that a system conforms to its specification and meets customer needs. Includes reviews and testing.
* **Stages of Testing**:
  1. *Development/Component Testing*: Testing individual functions, objects, or modules.
  2. *System Testing*: Testing the system as a whole (verifying emergent properties).
  3. *Acceptance Testing*: Testing with real customer data to verify business fitness.

#### D. Software Evolution
* Modifying existing software to meet new requirements. Development and evolution are increasingly merged since few systems are written entirely from scratch.

### 5. Coping with Change
Change is inevitable due to business changes, new technology, and changing platforms. Rework is costly. We reduce rework costs via:
* **Change Avoidance**: Activities that anticipate changes before rework occurs.
  * *Prototyping*: Creating an initial, throw-away version of the system to demonstrate concepts and elicit requirements.
* **Change Tolerance**: Designing the process so changes are cheap.
  * *Incremental Development & Delivery*: Implementing changes in increments not yet built.

#### Software Prototyping
* A prototype is used for: Elicitation and validation of requirements, exploring design options/UI, and back-to-back testing.
* **Throw-away Prototypes**: Must be discarded because they lack non-functional quality (reliability/security), are undocumented, their structure is degraded by rapid changes, and they do not meet organizational standards.

#### Incremental Delivery
* Deploying system increments for real end-user operation.
* *Advantages*: Early business value, early feedback, lower failure risk, most-used services get most testing.
* *Problems*: Hard to identify common, basic facilities needed by all increments early on; conflicts with traditional fixed-price procurement contracts.

### 6. Iterative Process Models

#### A. Boehm's Spiral Model
* A risk-driven process represented as a spiral rather than a linear sequence. Loops in the spiral represent phases, and risks are explicitly assessed and resolved.
* **Four sectors in each loop**:
  1. *Objective Setting*: Identify phase goals.
  2. *Risk Assessment and Reduction*: Analyze and resolve risks (e.g., build a prototype).
  3. *Development and Validation*: Choose an appropriate development model.
  4. *Planning*: Review progress and plan the next spiral cycle.

#### B. Rational Unified Process (RUP)
* A modern generic process model derived from UML. It has three perspectives:
  * *Dynamic*: Phases over time.
  * *Static*: Workflows and activities.
  * *Practice*: Good software engineering practices.
* **RUP Dynamic Phases**:
  1. **Inception**: Establish the business case.
  2. **Elaboration**: Understand the problem domain and design the system architecture.
  3. **Construction**: Design, write code, and test the software.
  4. **Transition**: Deploy the system to the operating environment.
* **RUP Six Good Practices**:
  1. *Develop software iteratively*
  2. *Manage requirements*
  3. *Use component-based architectures*
  4. *Visually model software (UML)*
  5. *Verify software quality*
  6. *Control changes (configuration management)*

---

## Key Terms and Definitions

| Term | Definition |
|---|---|
| **Software Process Model** | An abstract representation of a software process from a specific perspective. |
| **COTS** | Commercial-off-the-shelf software systems that can be purchased and configured. |
| **Refactoring** | Reorganizing and simplifying software code without changing its external behavior to improve structure. |
| **V & V** | Verification ("Are we building the product right?") and Validation ("Are we building the right product?"). |
| **Throw-away Prototype** | A prototype built quickly to resolve requirements uncertainty and discarded afterwards. |
| **Risk-driven Development** | An approach where software processes are guided by identifying, analyzing, and mitigating project risks. |

---

## Practice Test

### Section A: Multiple-Choice Questions
1. Which software process model is most appropriate when requirements are completely stable and the project is split among multiple sites?
   a) Incremental development
   b) Agile Scrum
   c) The Waterfall model
   d) Boehm's spiral model

2. In which RUP phase is the primary goal to establish the business case and define the scope of the project?
   a) Inception
   b) Elaboration
   c) Construction
   d) Transition

3. What is the main reason for discarding a throw-away prototype?
   a) It costs too much to deploy.
   b) It does not meet organizational quality standards, is undocumented, and lacks non-functional robustness.
   c) The customer is not allowed to see it.
   d) It can only run on local host machines.

4. Which sector of Boehm's Spiral Model involves analyzing alternatives and identifying/resolving project risks?
   a) Objective setting
   b) Risk assessment and reduction
   c) Development and validation
   d) Planning

### Section B: Short-Answer & Scenario Questions
5. What are the four stages of the RUP dynamic lifecycle?
6. Contrast "Change Avoidance" and "Change Tolerance", providing an example of each.
7. Scenario: A hospital wants to develop a Mental Health Care Patient Management System (MHC-PMS). Explain why a pure Agile incremental delivery process might conflict with the hospital's procurement contract, and outline how they could combine plan-driven and incremental techniques.

---

## Answer Key

### Section A Solutions
1. **c) The Waterfall model**. Its plan-driven, structured nature makes it suitable for coordinate-intensive multi-site projects with stable requirements.
2. **a) Inception**. The inception phase focuses on establishing the business case and system scope.
3. **b) It does not meet organizational quality standards, is undocumented, and lacks non-functional robustness**. Prototypes are optimized for quick feedback, not for long-term production quality.
4. **b) Risk assessment and reduction**. This sector assesses risks and puts activities (like prototyping or simulation) in place to reduce them.

### Section B Solutions
5. The four stages are:
   * **Inception**: Establish the business case and scope.
   * **Elaboration**: Understand problem domain, establish system architecture, and identify critical risks.
   * **Construction**: System design, coding, and testing.
   * **Transition**: Deploy the system in its operating environment for end-user operation.
6. **Change Avoidance**: Anticipating changes before significant rework is done. *Example*: Developing a throw-away user interface prototype to validate user needs before writing back-end code.
   * **Change Tolerance**: Designing the process so changes can be accommodated at low cost. *Example*: Using an incremental process where new requirements are simply scheduled into future, unbuilt increments without disrupting finished code.
7. **Conflict**: Most hospital procurement contracts require a fixed-price contract based on a complete system specification upfront. A pure agile incremental delivery process, where requirements evolve dynamically, does not provide this complete specification.
   * **Hybrid Approach**: The hospital can use a plan-driven approach for the Inception and Elaboration phases to establish a solid system architecture and a comprehensive requirements document (specification). Once the contract is signed based on this specification, the construction phase can be executed using an iterative, incremental delivery process to build and test components in prioritised increments.
