# Chapter 8: Software Testing

## What You Must Learn and Know

### 1. Program Testing Overview
* **Testing** is intended to show that a program does what it is designed to do and to discover program defects before it is put into use.
* Testing runs a program using artificial test data. It can only reveal the **presence of errors, not their absence**.
* **Verification vs. Validation (V & V)**:
  * **Verification**: "Are we building the product right?" (Does the software conform to its technical specification?)
  * **Validation**: "Are we building the right product?" (Does the software do what the user actually requires?)
* **V & V Confidence**: The goal is to establish that the system is "fit for purpose." The required confidence level depends on:
  * *Software criticality*: How vital is the software to the organization's operations?
  * *User expectations*: The standard of quality that users expect.
  * *Marketing environment*: Sometimes getting a product to market early is more important than eliminating all defects.

### 2. Static Inspections vs. Dynamic Testing
* **Software Inspections (Static)**: Static analysis of system representations (requirements, design, source code, config files) without executing the code.
  * *Advantages*: Errors do not mask (hide) other errors; incomplete systems can be inspected without specialized test harnesses; checks broader quality attributes (standards compliance, portability, maintainability).
  * *Limitations*: Cannot check dynamic non-functional characteristics (e.g., actual performance, usability) or conformance with the customer's real requirements.
* **Software Testing (Dynamic)**: Executing the program with test data and observing its runtime behavior.
* *Note*: Inspections and testing are complementary verification techniques. Both should be used.

### 3. Three Stages of Testing
1. **Development Testing**: The development team tests the system during construction to find bugs (defect testing).
2. **Release Testing**: A separate testing team tests a complete version of the system before release to validate that it meets requirements (validation testing).
3. **User Testing**: Users or customers test the system in their own operational environment.

### 4. Development Testing Activities
* **Unit Testing**: Testing individual components (functions, methods, classes) in isolation.
  * *Class testing* involves: testing all operations, setting/retrieving all attributes, and exercising all possible states. Inheritance makes class testing harder because the features to be tested are not localized.
  * *Automated Unit Testing*: Uses frameworks (e.g., JUnit) and contains three parts:
    1. **Setup**: Initialize the system, inputs, and expected outputs.
    2. **Call**: Invoke the method or object being tested.
    3. **Assertion**: Compare the actual result with the expected output (returns true/false).
* **Component Testing**: Integrating individual units to test composite components. Focuses on **component interfaces**.
* **System Testing**: Integrating components to test the system as a whole. Focuses on **component interactions** and emergent system behaviors.

### 5. Test Case Design Strategies
* **Partition Testing (Equivalence Partitioning)**: Input and output spaces are divided into partitions where the system is expected to behave in an equivalent way. Test cases are selected from each partition, including values in the middle and at the boundaries.
* **Guideline-Based Testing**: Test cases are derived from experience of common programming mistakes:
  * *Sequence Guidelines*: Test with single-value sequences; sequences of varying sizes; test the first, middle, and last elements; test with zero-length sequences.
  * *General Guidelines*: Force all error messages; cause buffer overflows; repeat the same input multiple times; force invalid outputs; force numbers to be too large/small.

### 6. Component Interface Testing
Detects faults due to interface errors or invalid assumptions about interfaces.
* **Interface Types**: Parameter interfaces, Shared memory interfaces, Procedural interfaces, and Message passing interfaces.
* **Interface Errors**:
  * *Interface Misuse*: Caller passes parameters incorrectly (e.g., wrong order).
  * *Interface Misunderstanding*: Caller makes wrong assumptions about the called component's behavior.
  * *Timing Errors*: Caller and callee run at different speeds, accessing out-of-date data.
* **Guidelines**: Parameters at extreme range ends; null pointers; cause the component to fail; stress-test message passing; vary activation order in shared memory.

### 7. Test-Driven Development (TDD)
An incremental development approach where you write tests *before* writing the code.
* **TDD Process**:
  $$\text{Identify required increment} \rightarrow \text{Write automated test} \rightarrow \text{Run test (fails)} \rightarrow \text{Implement code} \rightarrow \text{Run test (passes)} \rightarrow \text{Refactor} \rightarrow \text{Repeat}$$
* **Benefits**:
  * *Code Coverage*: Every line of code written has an associated test.
  * *Regression Testing*: An automated test suite is built incrementally.
  * *Simplified Debugging*: When a test fails, it is clear which new lines of code contain the bug.
  * *System Documentation*: The tests serve as executable documentation showing how the code should behave.
* **Regression Testing**: Testing the system to check that new modifications have not broken previously working functionality.

### 8. Release Testing (Black-Box Testing)
* Testing a specific system release intended for customers. Focuses on **validation testing** (proving the system meets specifications and is fit for release).
* Done by a **separate testing team** using a black-box approach (derived only from the specification, not code structure).
* **Requirements-Based Testing**: Writing tests specifically to verify each requirement.
* **Scenario Testing**: Creating a realistic usage scenario to test multiple components together (e.g., Nurse Kate's home visit scenario in MHC-PMS).
* **Performance and Stress Testing**:
  * *Performance Testing*: Steadily increasing the system load to measure response times and reliability.
  * *Stress Testing*: Overloading the system to test its failure behavior and ensure it fails gracefully without data corruption.

### 9. User Testing
Essential because the user's real working environment (with interruptions, unique configurations, and workflows) cannot be replicated in a development testing lab.
* **Alpha Testing**: Users work with developers to test the software at the developer's site.
* **Beta Testing**: A pre-release version of the software is given to users to test in their own environments.
* **Acceptance Testing**: Customers test the system in their own environment to decide if it is ready to be accepted and deployed.
  * *Acceptance Stages*: Define criteria $\rightarrow$ Plan tests $\rightarrow$ Derive tests $\rightarrow$ Run tests $\rightarrow$ Negotiate results $\rightarrow$ Accept/Reject.
  * *Agile Acceptance*: Customers are embedded in the team and continuously evaluate increments, meaning there is no separate acceptance phase. (Drawback: The embedded customer might not represent all stakeholders).

---

## Key Terms and Definitions

| Term | Definition |
|---|---|
| **Defect Testing** | Testing designed specifically to expose system faults, bugs, and incorrect behavior. |
| **Equivalence Partition** | A domain of input/output values where a system is expected to behave in an identical manner. |
| **Regression Test Suite** | A collection of automated tests run regularly to ensure modifications have not broken existing code. |
| **Black-Box Testing** | Test case design based solely on the functional specification of a component without knowledge of its source code. |
| **Stress Testing** | Testing that pushes a system beyond its design limits to evaluate its robustness and failure recovery. |

---

## Practice Test

### Section A: Multiple-Choice Questions
1. "Are we building the right product?" is the classic definition of:
   a) Verification
   b) Validation
   c) Regression testing
   d) System integration

2. Which of the following is a major advantage of static inspections over dynamic testing?
   a) Inspections check the system's runtime performance.
   b) Inspections check conformance with the user's real requirements.
   c) Errors do not mask other errors during inspections, and incomplete systems can be easily checked.
   d) Inspections are automated by JUnit.

3. In test-driven development (TDD), when is the test written?
   a) Immediately after coding the class.
   b) During the user acceptance phase.
   c) Before writing the code that implements the functionality.
   d) During system integration testing.

4. Which type of user testing involves releasing a version of the software to a group of external users to run in their own environments?
   a) Alpha testing
   b) Beta testing
   c) Acceptance testing
   d) Development testing

### Section B: Short-Answer & Scenario Questions
5. Explain "Equivalence Partitioning" and identify the partitions and boundary test cases for a system that accepts an integer age input between 18 and 65 (inclusive).
6. List three types of component interface errors and describe how timing errors occur.
7. Scenario: A hospital is deploying the Wilderness Weather Station data collection subsystem. You are in charge of release testing. Describe how you would conduct **Requirements-Based Testing**, **Scenario Testing**, and **Stress Testing** for this subsystem.

---

## Answer Key

### Section A Solutions
1. **b) Validation**. Validation ensures the product meets the user's real needs.
2. **c) Errors do not mask other errors during inspections, and incomplete systems can be easily checked**. Inspections analyze static code, avoiding error masking.
3. **c) Before writing the code that implements the functionality**. TDD requires writing the test first.
4. **b) Beta testing**. Beta testing lets external users test pre-releases in their own environments.

### Section B Solutions
5. **Equivalence Partitioning** is a testing strategy where input values are grouped into domains expected to trigger the same behavior.
   * **Age input (18 to 65 inclusive)**:
     * *Invalid partition (too young)*: Values $< 18$.
     * *Valid partition*: Values $18 \leq \text{age} \leq 65$.
     * *Invalid partition (too old)*: Values $> 65$.
   * **Boundary Test Cases**: Values: $17$ (invalid boundary), $18$ (valid boundary), $65$ (valid boundary), $66$ (invalid boundary).
6. **Interface Errors**:
   * *Interface Misuse*: Calling component passes parameters incorrectly (e.g., wrong type or order).
   * *Interface Misunderstanding*: Caller makes wrong assumptions about the callee's behavior.
   * *Timing Errors*: Occur in shared-memory or message-passing systems when components run at different speeds. For example, a reader component reads data from a shared memory buffer before the writer component has finished writing, resulting in the reader accessing obsolete or corrupted data.
7. **Wilderness Weather Station Release Testing**:
   * **Requirements-Based**: Identify the requirement: "The weather station shall collect temperature readings every 10 minutes." Create a test that verifies the system records a temperature reading at 10-minute intervals.
   * **Scenario**: Create a scenario: "A ranger requests a weather report from a station under heavy snow conditions." Test cases would verify logging in, transmitting data, and printing the report.
   * **Stress**: Deliberately flood the weather station's communication line with simulated requests (e.g., 100 requests per second) to verify the station's buffering and queue management, ensuring it does not crash or lose temperature log records.
