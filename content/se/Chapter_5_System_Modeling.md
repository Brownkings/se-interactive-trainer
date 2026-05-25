# Chapter 5: System Modeling

## What You Must Learn and Know

### 1. Introduction to System Modeling
* **System Modeling** is the process of developing abstract models of a system, with each model presenting a different view or perspective of that system.
* Today, system modeling relies on graphical notations from the **Unified Modeling Language (UML)**.
* **Why model?** To help analysts understand system functionality, communicate with customers, and document systems for implementation.
* **Usage levels**:
  * *Facilitating discussion*: Incomplete or informal models are acceptable.
  * *System documentation*: Models must be accurate but do not need to be complete.
  * *Code generation*: Models must be completely correct and complete.

### 2. Four System Perspectives
1. **External Perspective**: Modeling the context or environment in which the system operates.
2. **Interaction Perspective**: Modeling the interactions between the system and its environment, or between internal system components.
3. **Structural Perspective**: Modeling the organization of the system or the static structure of the data processed by the system.
4. **Behavioral Perspective**: Modeling the dynamic behavior of the system and how it responds to events or data stimuli.

### 3. Key UML Diagram Types
* **Activity Diagrams**: Show the sequential activities involved in a process or data flow.
* **Use Case Diagrams**: Show the interactions between a system and external actors (people or other systems).
* **Sequence Diagrams**: Show time-ordered interactions between actors and system objects, or between internal system objects.
* **Class Diagrams**: Show the object classes in the system and the associations (relationships) between them.
* **State Diagrams**: Show how the system reacts to internal and external events using states and transitions.

### 4. Context and Boundary Models
* **Context Models**: Show what lies outside the system boundary. Defining system boundaries is often a political and organizational judgment rather than a purely technical one.
* **System Boundary**: Establishes what is inside and what is outside the system.
* **Process Models**: While context models show neighboring systems, UML activity diagrams are used as process models to show how the system fits into broader business workflows (e.g., the process of involuntary patient detention in the MHC-PMS).

### 5. Interaction Modeling
* **Use Case Modeling**:
  * Originally developed for requirements elicitation.
  * Represents a discrete task involving external interaction.
  * *Actors* can be people or other systems.
  * Diagrammatic use cases must be supported by detailed **tabular descriptions** (defining Actors, Description, Inputs, Outputs, Normal Flow, and What can go wrong).
* **Sequence Diagrams**:
  * Model interactions during a use case.
  * Objects/Actors are at the top; vertical dotted lines are **lifelines**; narrow rectangles represent **activation boxes** (indicating when an object is active).
  * Messages are represented by solid arrows with filled arrowheads; return messages are dashed arrows.
  * **Combined fragments** represent logic, such as `alt` (conditionals/branches) or `loop` (iterations).

### 6. Structural Modeling
* Shows the organization of system components and their relationships.
* **Class Diagrams**: Show static classes and associations.
  * In early stages, object classes represent real-world entities (e.g., `Patient`, `Doctor`, `Consultation`, `Prescription` in MHC-PMS).
* **Generalization**:
  * An inheritance relationship where subclasses inherit attributes and operations from a superclass and add their own specific details.
  * Shown in UML using an **open triangle pointing to the superclass**.
* **Aggregation**:
  * A "part-of" relationship showing how a composite class is composed of other classes.
  * Shown in UML using a **hollow diamond at the composite class end**.
  * *Example*: A `PatientRecord` class aggregates the `Patient` class and multiple `Consultation` instances.

### 7. Behavioral Modeling
Models the dynamic runtime behavior of a system. Controlled by two types of stimuli:
1. **Data-Driven Modeling**: Primarily for business data systems. Controlled by input data, showing the sequence of actions to process inputs and generate outputs.
   * *Example*: UML activity diagrams showing data processing steps (e.g., weather data collection).
2. **Event-Driven Modeling**: Primarily for real-time systems. Controlled by events, based on the assumption that the system has a finite number of states.
   * *Example*: UML state diagrams (Statecharts) showing system states as nodes and events as arcs.
   * *Microwave Oven Example*: States include `Waiting`, `Full Power`, `Cooking`, `Disabled`. Stimuli include `timer`, `start`, `stop`, `door open`.

### 8. Model-Driven Engineering (MDE)
An approach where models, rather than source code programs, are the principal outputs of the development process. Executable programs are generated automatically.
* **Model-Driven Architecture (MDA)**: An MDE precursor using three abstraction levels:
  1. **Computation Independent Model (CIM)**: Domain model mapping real-world business abstractions.
  2. **Platform Independent Model (PIM)**: Models system operation without reference to implementation technologies (uses UML class and state diagrams).
  3. **Platform Specific Model (PSM)**: PIM transformed with platform-specific details (separate PSM for Java, .NET, SQL, etc.).
* **Executable UML (xUML)**: A subset of UML 2 allowing automated transformation. Restricts models to:
  * *Domain models* (system boundary and entities).
  * *Class models* (attributes and operations).
  * *State models* (lifecycles for each class).
  * Uses Object Constraint Language (OCL) or action languages to specify behaviors.
* **Agile vs. MDE**: Agile prioritizes working code over models. Extensive up-front design in MDE contradicts the Agile Manifesto, unless code generation is 100% automated.

---

## Key Terms and Definitions

| Term | Definition |
|---|---|
| **System Boundary** | The boundary between a system and its environment, defining what is inside the system and what is external. |
| **Combined Fragment** | A construct in sequence diagrams used to group messages together to show loops (`loop`) or conditionals (`alt`). |
| **Association** | A static relationship between two classes in a class diagram, representing a link. |
| **Generalization** | A relationship where a subclass inherits attributes and behaviors from a superclass. |
| **Aggregation** | A relationship where one class is a collection or container of other classes. |
| **State Machine** | A behavioral model representing a system in terms of its states and the event transitions between them. |
| **PIM** | Platform Independent Model, representing system logic without technology-specific details. |

---

## Practice Test

### Section A: Multiple-Choice Questions
1. In a UML sequence diagram, what does a dashed arrow represent?
   a) A synchronous method call
   b) An asynchronous event trigger
   c) A return message from a receiver back to a sender
   d) A new object instantiation

2. Which UML relationship is represented by a line with an open triangle pointing to a higher-level class?
   a) Aggregation
   b) Association
   c) Generalization (Inheritance)
   d) Dependency

3. Which MDA model type is a platform-independent model that represents system operation without technology-specific details?
   a) CIM
   b) PIM
   c) PSM
   d) xUML

4. Event-driven modeling is based on the assumption that a system has:
   a) A series of databases.
   b) A finite number of states, and events cause transitions between these states.
   c) Multiple classes that inherit from a superclass.
   d) Interleaved specifications and designs.

### Section B: Short-Answer & Scenario Questions
5. Name and briefly describe the four perspectives used to model a software system.
6. What is the difference between an aggregation and a generalization relationship in UML class diagrams? Include the visual notations used for each.
7. Scenario: Draw a textual representation or describe the structural relationships for a e-learning platform (BrightLearn). The platform has `Course`, `Lecturer`, `Student`, and `Assignment`. Explain how Aggregation and Generalization apply to these classes.

---

## Answer Key

### Section A Solutions
1. **c) A return message from a receiver back to a sender**. Solid arrows represent calls; dashed arrows represent returns.
2. **c) Generalization (Inheritance)**. The open triangle denotes subclass-to-superclass inheritance.
3. **b) PIM**. The PIM is the Platform Independent Model.
4. **b) A finite number of states, and events cause transitions between these states**. Event-driven systems change state in response to stimuli.

### Section B Solutions
5. The four perspectives are:
   * **External Perspective**: Models the system's operational context or environment.
   * **Interaction Perspective**: Models how the system interacts with its users, other systems, or how internal components interact.
   * **Structural Perspective**: Models the organization of the system's components or data structures.
   * **Behavioral Perspective**: Models the dynamic behavior of the system and its response to stimuli.
6. **Aggregation**: Shows a "part-of" relationship where one class is composed of other classes. *Notation*: A line with a hollow diamond on the container class end.
   * **Generalization**: Shows an inheritance hierarchy where subclasses inherit features of a superclass. *Notation*: A line with an open triangle pointing to the superclass.
7. **BrightLearn Structural Relationships**:
   * **Aggregation**: A `Course` is composed of multiple `Assignments`. Therefore, there is an aggregation relationship between `Course` and `Assignment` (hollow diamond on `Course` class). A `Course` also aggregates multiple `Students`.
   * **Generalization**: Both `Lecturer` and `Student` share common properties like `Name`, `Email`, and `UserID`. We can generalize them into a superclass called `User`. Subclasses `Lecturer` and `Student` inherit from `User` (open triangles pointing to `User`).
