# Chapter 7: Design and Implementation

## What You Must Learn and Know

### 1. Introduction to OO Design and Implementation
* **Design** is a creative activity where you identify software components and their relationships based on requirements.
* **Implementation** is the process of realizing the design as a running program. These activities are inter-leaved.
* **Build vs. Buy (COTS)**: Often it is cheaper and faster to purchase Commercial-off-the-shelf (COTS) software and configure it rather than developing a custom system from scratch.

### 2. Structured Object-Oriented Design (OOD) Process
Common activities in an object-oriented design process include:
1. **Define the Context and Modes of Use**: Understand how the system interacts with its environment and set system boundaries.
2. **Design the System Architecture**: Define major components and their interactions (e.g., client-server, layered, or broadcasting).
3. **Identify the Principal System Objects**: Identify the classes in the system.
4. **Develop Design Models**: Create static and dynamic diagrams of the system.
5. **Specify Object Interfaces**: Define the interfaces of components so they can be built in parallel.

### 3. Object Identification Approaches
Since there is no "magic formula" for identifying objects, designers use these common approaches:
* **Grammatical Approach**: Analyze natural language descriptions of the system. Nouns represent classes or attributes, and verbs represent operations/methods (the Hood OOD method).
* **Tangible Things Approach**: Identify objects based on physical hardware, data inputs, or entities in the application domain (e.g., `Anemometer`, `Barometer`, `WeatherData` in a Weather Station system).
* **Behavioral Approach**: Identify objects based on what components participate in specific system behaviors.
* **Scenario-Based Approach**: Identify objects, attributes, and methods by walking through individual system use cases.

### 4. Design Models (Static vs. Dynamic)
* **Static Models**: Describe the structure of the system design (e.g., class diagrams, generalization diagrams, and association diagrams).
* **Dynamic Models**: Describe the runtime interactions of system components.
  * *Subsystem Models*: Logically group objects together (represented in UML using **Packages**).
  * *Sequence Models*: Show the time-ordered sequence of object interactions during a use case.
  * *State Diagrams*: Show how objects change state in response to service requests (only needed for complex objects, not simple ones).

### 5. Object Interface Specification
* Object interfaces must be defined precisely so that different developers can work on components in parallel.
* Implementation details (representation/data structures) must be hidden inside the objects, exposing only method signatures.
* UML class diagrams with `<<interface>>` stereotypes or languages like Java are used to specify interfaces.

### 6. Design Patterns
A design pattern is a reusable template for solving a common software design problem.

| Pattern | Problem It Solves | Solution Description |
|---|---|---|
| **Observer** | Informing multiple objects that the state of another object has changed. | Separates the display of object state from the object itself (Subject and Observers). |
| **Façade (Facade)** | Tidying up interfaces to a complex, incrementally built subsystem. | Provides a single, simplified interface to a group of related classes. |
| **Iterator** | Providing a standard way to loop through a collection without exposing its structure. | Defines an interface that can traverse a collection sequentially. |
| **Decorator** | Extending the behavior of an existing class dynamically at runtime. | Wraps the original class inside a decorator class that implements the same interface. |

### 7. Implementation Issues
* **Software Reuse**: Reusing existing components or systems reduces development time and costs.
  * *Levels of Reuse*: Abstraction (design patterns), Object (class libraries), Component (subsystems), and System (COTS).
  * *Reuse Costs*: Searching/evaluating software, license costs, adaptation/configuration, and integration.
* **Configuration Management (CM)**: Managing changing software components in a team.
  * *Version Management*: Tracks different versions of code files and prevents conflict when multiple developers edit the same file.
  * *System Integration*: Automates compiling and linking components to build the system.
  * *Problem Tracking*: Registers and tracks bugs and their resolutions.
* **Host-Target Development**: Developing software on a development platform (host system) and executing it on a separate execution platform (target system).
  * *Deployment Factors*: Hardware dependencies, high availability requirements (replicating components across platforms), and network communication latency (placing high-traffic components close together).

### 8. Open Source Development and Licensing
Open source development involves publishing source code and inviting volunteer contributions.
* **Open Source Business Model**: Companies distribute software for free and generate revenue by selling support, training, and custom integration.
* **Licensing Models**:
  1. **GNU General Public License (GPL)**: A **reciprocal (copyleft)** license. If you use GPL code in your system, you *must* release your entire system as open source under the GPL.
  2. **GNU Lesser General Public License (LGPL)**: A variant of the GPL that allows you to link your proprietary code to open source libraries without being forced to open-source your own code.
  3. **Berkeley Standard Distribution (BSD) License**: A **non-reciprocal** license. You can modify BSD-licensed code and include it in proprietary, closed-source commercial software without republishing your changes.

---

## Key Terms and Definitions

| Term | Definition |
|---|---|
| **COTS** | Commercial-off-the-shelf software packages purchased and configured to meet business requirements. |
| **Reciprocal License** | A copyleft license (like GPL) that requires any derivative work to be released under the same license terms. |
| **Host System** | The computer and environment used by engineers to write and compile software. |
| **Target System** | The execution platform (hardware and operating system) on which the software runs in production. |
| **UML Package** | A UML construct used to group related classes together, representing a logical subsystem. |

---

## Practice Test

### Section A: Multiple-Choice Questions
1. In a weather station project, identifying class objects like `Thermometer` and `Barometer` is an example of which identification approach?
   a) Grammatical approach
   b) Tangible things approach
   c) Behavioral approach
   d) Scenario-based analysis

2. Which design pattern provides a simplified, unified interface to a set of interfaces in a complex subsystem?
   a) Observer
   b) Decorator
   c) Façade
   d) Iterator

3. If you integrate an open-source library licensed under the BSD License into a commercial software application, what are your legal obligations?
   a) You must release your entire application's source code for free.
   b) You cannot sell the application for a profit.
   c) You can keep your application closed-source and sell it, as the BSD license is non-reciprocal.
   d) You must rewrite the entire library in Java.

4. Which configuration management activity is responsible for registering bugs, tracking who is fixing them, and recording when they are resolved?
   a) Version management
   b) Problem tracking
   c) System integration
   d) Release management

### Section B: Short-Answer & Scenario Questions
5. Explain the differences between the GPL, LGPL, and BSD open-source licenses.
6. What is Host-Target Development? Why do we use it in software engineering?
7. Scenario: You are developing a system that processes payments. When a payment is processed, several components must update: the receipt printing system, the email notifier, and the transaction ledger. Describe how you would apply the **Observer Pattern** to design this interaction.

---

## Answer Key

### Section A Solutions
1. **b) Tangible things approach**. This approach identifies classes based on physical hardware objects in the application domain.
2. **c) Façade**. The Façade pattern simplifies a complex subsystem interface.
3. **c) You can keep your application closed-source and sell it, as the BSD license is non-reciprocal**. Non-reciprocal licenses do not force developers to open-source derivative works.
4. **b) Problem tracking**. Problem tracking systems manage bug reports and trace progress to resolution.

### Section B Solutions
5. **GPL**: A reciprocal/copyleft license that requires any software incorporating GPL code to be released under the GPL as open source.
   * **LGPL**: A compromise license that allows developers to link to open-source libraries without having to open-source their own proprietary calling code.
   * **BSD**: A non-reciprocal license that permits code to be modified and included in proprietary, closed-source commercial software without any obligation to republish changes.
6. **Host-Target Development** is when software is designed and compiled on one machine (the host development platform) but executes on a different machine (the target execution platform).
   * **Reason**: Target execution systems (like embedded systems in cars, medical devices, or smart TVs) often lack the CPU, memory, and screen capabilities required to run compilers, IDEs, and debugging tools.
7. **Observer Pattern Payment Design**:
   * **Subject**: The `PaymentProcessor` class, which holds the payment state (Pending, Succeeded, Failed).
   * **Observers**: The `ReceiptPrinter`, `EmailNotifier`, and `TransactionLedger` classes, which all implement a common `PaymentObserver` interface containing an `update()` method.
   * **Interaction**: The `PaymentProcessor` maintains a list of registered observers. Once a payment succeeds, the `PaymentProcessor` iterates through its list and calls `update(paymentDetails)` on each observer, triggering printing, emailing, and ledger recording.
