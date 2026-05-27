# Chapter 4: Requirements Engineering

## What You Must Learn and Know

### 1. What is Requirements Engineering (RE)?
* **Requirements Engineering** is the process of establishing the services that the customer requires from a software system and the constraints under which it operates and is developed.
* **Requirements Abstraction**: Requirements serve a dual function:
  * They can be written abstractly to form the basis of a contract bid (allowing several contractors to propose solutions).
  * Once the contract is awarded, they must be defined in detail to form the basis of the contract itself, describing precisely what will be built.

### 2. User vs. System Requirements
* **User Requirements**: High-level abstract statements in natural language, supplemented by diagrams, describing the services the system will provide and its operational constraints. Written primarily for the customer.
* **System Requirements**: Detailed descriptions of the system's functions, services, and operational constraints. It defines exactly what is to be implemented and often forms part of the contract between the developer and client.

### 3. Functional and Non-Functional Requirements
* **Functional Requirements**: Statements of the services the system must provide, how it should react to specific inputs, and how it should behave in specific situations. They can also state what the system *should not* do.
  * *Example (MHC-PMS)*: "A user shall be able to search the appointments lists for all clinics."
* **Non-Functional Requirements**: Constraints on the services or functions offered by the system, such as performance, reliability, security, response times, or compliance with standards.
  * These usually apply to the **system as a whole** rather than individual functions. Failing a non-functional requirement can make the entire system useless.
* **Requirements Imprecision**: Ambiguous requirements cause bugs. For instance, "search" can be interpreted as "search all clinics" by the user, but implemented as "choose clinic, then search" by the developer.
* **Completeness and Consistency**: In theory, requirements must be:
  * **Complete**: Describe all required facilities.
  * **Consistent**: Free of conflicts or contradictions.
  * *Note*: In practice, producing a completely complete and consistent requirements document is impossible.

### 4. Classification of Non-Functional Requirements (NFR)
1. **Product Requirements**: Specify how the delivered product must behave (e.g., speed, memory usage, reliability).
   * *Example*: "The MHC-PMS database shall be available 99.9% of the time during clinic working hours."
2. **Organizational Requirements**: Derived from organizational policies and procedures (e.g., process standards, programming languages, IDE constraints).
   * *Example*: "All code must be written in Java and comply with the hospital's coding style guidelines."
3. **External Requirements**: Derived from factors external to the system and development process (e.g., legislative requirements, data protection laws, safety certifications).
   * *Example*: "The system must fully comply with local medical data privacy laws (POPIA / GDPR)."

#### Goals vs. Verifiable Non-Functional Requirements
* A **Goal** is a general, non-verifiable intention of the user (e.g., "The system should be easy to use").
* A **Verifiable Non-Functional Requirement** is a statement using an objective measure that can be tested.
  * *Goal*: "The system should be easy to use by medical staff."
  * *Verifiable Requirement*: "Medical staff shall be able to use all system functions after four hours of training, making an average of no more than two errors per hour of use."

### 5. Domain Requirements
* Requirements derived directly from the system's operational domain (e.g., a train control system must calculate deceleration based on track gradients).
* If domain requirements are not met, the system may be completely unworkable.
* **Problems**:
  * *Understandability*: Written in domain-specific terminology that software engineers may not understand.
  * *Implicitness*: Domain experts understand the rules so well they often forget to make them explicit.

### 6. The Software Requirements Document
* The official statement of what developers must implement. It is **not** a design document. It must focus on **WHAT** the system must do, not **HOW** it does it.
* Agile systems typically have less detailed requirements documents (using user stories), whereas critical systems or systems developed by distributed teams require formal, detailed documents.
* **Writing Guidelines**:
  * Use a standard format.
  * Use **shall** for mandatory requirements; use **should** for desirable requirements.
  * Avoid technical jargon.
  * Include a rationale for each requirement.

### 7. Ways of Specifying Requirements
* **Natural Language**: Universal and expressive, but prone to ambiguity, confusion (mixing functional/non-functional), and amalgamation (combining multiple requirements into one).
* **Structured Specifications**: Writing requirements in a limited, standardized template (e.g., form-based specifications).
* **Form-Based Specifications**: Include: Function name, Inputs/Sources, Outputs/Destinations, Required Info, Action description, Pre/Post-conditions, and Side effects.
* **Tabular Specifications**: Using tables to clarify alternative courses of action (e.g., calculating insulin dosing based on rate of change of blood sugar).

### 8. Requirements Elicitation and Analysis
The process of discovering requirements by working with stakeholders.
* **Elicitation Stages**: Discovery → Classification and Organization → Prioritization and Negotiation → Specification.
* **Stakeholder**: Any person or organization affected by the system (e.g., patients, doctors, nurses, receptionists, IT staff, ethics managers).
* **Elicitation Techniques**:
  1. **Interviews**: Closed (pre-set questions) or Open (exploring issues). Good for overall understanding, but bad for uncovering domain requirements.
  2. **Scenarios**: Real-life examples of system use. Must include: start state, normal event flow, what can go wrong, concurrent activities, and end state.
  3. **Use Cases**: Scenario-based UML technique modeling actors and interactions (visual diagrams + detailed tables).
  4. **Ethnography**: Observation of actual work practices by a social scientist. Excellent for finding requirements from actual cooperative work, but cannot identify new features.

### 9. Requirements Validation
Checking that the requirements define the system the customer actually wants.
* *Error Cost*: Fixing a requirements error after delivery can cost up to **100 times** more than fixing a coding bug.
* **Validation Checks**: Validity, Consistency, Completeness, Realism, and Verifiability.
* **Validation Techniques**: Requirements reviews (manual reviews by client and contractor), Prototyping, and Test-case generation.
* **Review Checks**: Verifiability, Comprehensibility, Traceability (origin of requirement), and Adaptability.

### 10. Requirements Management
The process of managing and controlling changing requirements during development and use.
* **Why Requirements Change**: Shifting business/technical environments, differences between customer priorities and user needs, and diverse stakeholders with conflicting needs.
* **Management Decisions**: Requirements identification (unique IDs), Change management process, Traceability policies, and Tool support.
* **Change Management Process**:
  1. *Problem analysis and change specification*: Verify that the proposed change is valid.
  2. *Change analysis and costing*: Assess impact using traceability data and decide whether to proceed.
  3. *Change implementation*: Update the requirements document, design, and code.

---

## Key Terms and Definitions

| Term | Definition |
|---|---|
| **System Requirement** | A structured document defining detailed descriptions of system functions, services, and operational constraints. |
| **Shall vs. Should** | "Shall" denotes a mandatory system requirement; "should" denotes a desirable but non-mandatory requirement. |
| **Stakeholder** | Anyone who has a direct or indirect interest in the system, its development, or its operational outcomes. |
| **Ethnography** | An observational technique used to understand social and organizational requirements by watching how users actually work. |
| **Traceability** | The ability to trace a requirement from its origin, through design and implementation, to testing. |

---

## Practice Test

### Section A: Multiple-Choice Questions
1. "The medical database must respond to search queries within 1.5 seconds under peak loads." This is an example of what type of requirement?
   a) Functional requirement
   b) Product non-functional requirement
   c) External non-functional requirement
   d) Domain requirement

2. Why is natural language commonly used for writing user requirements?
   a) It allows developers to generate code automatically.
   b) It is expressive, intuitive, and can be understood by non-technical customers and users.
   c) It is completely free of ambiguity.
   d) It prevents requirements from changing during development.

3. Which requirements discovery technique is best suited for understanding how workers cooperate and handle actual work practices in a real environment?
   a) Closed interviews
   b) Use case modeling
   c) Ethnography
   d) Rapid prototyping

4. What is the correct order of the stages in the Requirements Change Management process?
   a) Change implementation → Change analysis and costing → Problem analysis and change specification.
   b) Problem analysis and change specification → Change analysis and costing → Change implementation.
   c) Change costing → Change implementation → Verification.
   d) Requirements elicitation → Validation → Change coding.

### Section B: Short-Answer & Scenario Questions
5. What is the difference between a user requirement and a system requirement?
6. Identify the five requirements checks that must be performed during requirements validation.
7. Scenario: Write one functional requirement and one verifiable non-functional requirement for the Insulin Pump Control System. Explain how the non-functional requirement can be verified.

---

## Answer Key

### Section A Solutions
1. **b) Product non-functional requirement**. It constrains a product's runtime performance (response time).
2. **b) It is expressive, intuitive, and can be understood by non-technical customers and users**. Natural language provides a universal communication channel between clients and developers.
3. **c) Ethnography**. Ethnography relies on direct observation of work practices, making it ideal for cooperative work analysis.
4. **b) Problem analysis and change specification → Change analysis and costing → Change implementation**. This is the standard structured process for control of changes.

### Section B Solutions
5. **User Requirements** are high-level statements in natural language and diagrams of what services the system should provide and its constraints. They are written for customers. **System Requirements** are detailed descriptions of system functions, services, and operational constraints, serving as a contract-level technical document for developers.
6. The five checks are:
   * **Validity**: Checking if the function matches the customer's actual business need.
   * **Consistency**: Checking for conflicts or contradictions between requirements.
   * **Completeness**: Checking if all requested functions are included.
   * **Realism**: Checking if the system can be built within budget, technology, and schedule constraints.
   * **Verifiability**: Checking if the requirement can be objectively tested.
7. **Insulin Pump Control System Requirements**:
   * **Functional**: "The system shall calculate the insulin dose based on the rate of change of blood sugar and command the micro-pump to deliver the dose."
   * **Verifiable Non-Functional**: "The micro-pump hardware signal to inject insulin must be executed within 500 milliseconds of the completion of the dose calculation."
   * **Verification**: This can be verified by connecting an oscilloscope to the micro-pump's control signal pin, simulating a blood sugar change, and measuring the time delta between the calculations completing in the software and the physical control signal changing state.
