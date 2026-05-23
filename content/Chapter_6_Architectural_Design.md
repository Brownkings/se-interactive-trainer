# Chapter 6: Architectural Design

## What You Must Learn and Know

### 1. What is Software Architecture?
* **Architectural Design** is the design process for identifying the sub-systems making up a system and establishing the framework for sub-system control and communication.
* It represents the link between the requirements specification and the design processes, often carried out in parallel with specification activities.
* **Architecture in the Small**: Concerned with how an individual program is decomposed into components.
* **Architecture in the Large**: Concerned with the architecture of complex, distributed enterprise systems that include other systems, databases, and program components.

### 2. Advantages of Explicit Architecture
1. **Stakeholder Communication**: A high-level architectural block diagram is simple and uncluttered, serving as a focus for discussion among both technical and non-technical stakeholders.
2. **System Analysis**: Allows early analysis of whether the system can meet critical non-functional requirements (e.g., performance, security, availability).
3. **Large-Scale Reuse**: System architectures can be reused across product lines.

* **Box-and-Line Diagrams**: These simple, informal diagrams show components (boxes) and relationships (lines). They are criticized for lacking formal semantics, but are highly effective for stakeholder discussion and planning.

### 3. Architecture and Non-Functional Characteristics
Architectural decisions directly impact system quality attributes:
* **Performance**: Localize critical operations within a few components and minimize network communications.
* **Security**: Use a layered architecture with assets stored in the innermost layers (onion-skin model).
* **Availability**: Implement redundant components and mechanisms for fault tolerance to prevent single points of failure.
* **Maintainability**: Use fine-grained, self-contained, and easily replaceable components.

### 4. Architectural Views: The 4+1 View Model
A single architectural model shows only one perspective. We need multiple views to describe a system:
1. **Logical View**: Shows the key abstractions in the system as objects or object classes (UML class diagrams).
2. **Process View**: Shows how, at runtime, the system is composed of interacting processes, demonstrating concurrency and synchronization.
3. **Development View**: Shows how the software is decomposed into modules, packages, and libraries for development.
4. **Physical View**: Shows the system hardware and how software components are distributed across physical processors.
5. **Scenarios (+1)**: Connects and validates the other four views using use cases or scenarios.

### 5. Architectural Patterns
An architectural pattern is a stylized, tested description of good design practice.

#### A. Model-View-Controller (MVC)
* **Description**: Separates system data and logic (Model) from the user interface (View) and user input/interaction (Controller).
* **When to use**: Multiple ways to view and interact with data are required; when the UI changes frequently.
* **Advantages**: Independent modification of views and logic; multiple views can reflect the same data simultaneously.
* **Disadvantages**: Can introduce complexity and processing overhead for simple user interfaces.

#### B. Layered Architecture
* **Description**: Organizes the system into layers, where each layer provides services to the layer above and consumes services from the layer below.
* **When to use**: Building new facilities on top of existing systems; systems requiring distinct security layers.
* **Advantages**: Easy to replace a layer (only adjacent layers are affected); supports incremental development and reuse.
* **Disadvantages**: Clean separation is often difficult; performance can degrade due to calls passing through multiple layers.
* *Example*: The LIBSYS library search system.

#### C. Repository Architecture
* **Description**: Subsystems exchange data through a central, shared database (repository) that all subsystems access.
* **When to use**: Systems handling large volumes of shared data (e.g., IDEs where compiler, editor, debugger share an abstract syntax tree).
* **Advantages**: Efficient data sharing; easy to add new subsystems without modifying other components.
* **Disadvantages**: Repository is a bottleneck and single point of failure; evolving the shared data schema is difficult.

#### D. Client-Server Architecture
* **Description**: Distributed system model where servers provide services (printing, data storage, etc.) and clients request them over a network.
* **When to use**: Data in a central database needs to be accessed by many distributed users.
* **Advantages**: Distributed processing; servers can be optimized for specific roles.
* **Disadvantages**: Network dependency; security and performance depend on network/server loads.

#### E. Pipe and Filter Architecture (Pipe-and-Filter)
* **Description**: Organizes the system as a sequence of components (filters) that perform transformations on data streams, passing them via pipes (e.g., UNIX shell commands).
* **When to use**: Batch data-processing systems where inputs are processed sequentially.
* **Advantages**: Simple, highly reusable filters; easy to understand and reorder.
* **Disadvantages**: Not suitable for interactive systems; overhead in parsing data formats between filters.

### 6. Application Architectures
Businesses have common needs, meaning application systems tend to have common architectures.
* **Transaction Processing Systems**: Interactive systems that process user database queries or updates (e.g., E-commerce, ATMs, Reservations).
  * *Request Flow*: User request $\rightarrow$ Transaction Manager $\rightarrow$ Database.
* **Information Systems**: Layered systems that manage and retrieve database information (e.g., MHC-PMS).
  * *MHC-PMS Layers*: User Interface $\rightarrow$ User Communications $\rightarrow$ Information Retrieval/Modification $\rightarrow$ Database.
  * *Web implementation*: Multi-tier client-server (Web Server handles UI $\rightarrow$ Application Server handles logic $\rightarrow$ Database Server handles transactions).
* **Language Processing Systems**: Accept a formal language as input and translate/interpret it (e.g., Compilers).
  * *Compiler Components*: Lexical analyzer $\rightarrow$ Symbol table $\rightarrow$ Syntax analyzer $\rightarrow$ Syntax tree $\rightarrow$ Semantic analyzer $\rightarrow$ Code generator.
  * Compilers can be structured using a **Pipe and Filter** (sequential translation steps) or **Repository** pattern (sharing a central symbol table and syntax tree).

---

## Key Terms and Definitions

| Term | Definition |
|---|---|
| **Software Architecture** | An abstract representation of a system's organization, including its components, interfaces, and relationships. |
| **Product-Line Architecture** | A core, reusable architecture shared across a family of related software systems. |
| **Model-View-Controller** | A pattern separating system data (Model) from presentation (View) and interaction (Controller). |
| **Transaction** | A coherent sequence of database operations that either succeeds completely or fails completely (atomicity). |
| **Platform Specific Model (PSM)** | A detailed model showing how a system is implemented on a specific hardware/software platform. |

---

## Practice Test

### Section A: Multiple-Choice Questions
1. If your primary architectural goal is to make the system secure by placing critical data assets in an inner enclave, which pattern should you select?
   a) Pipe and Filter
   b) Repository
   c) Layered Architecture
   d) Client-Server

2. In the 4+1 view model of software architecture, which view describes how runtime processes interact, focusing on concurrency and system performance?
   a) Logical view
   b) Process view
   c) Development view
   d) Physical view

3. Which of the following is a major disadvantage of the Repository architectural pattern?
   a) Subsystems must be distributed across different networks.
   b) It is not suitable for sharing large amounts of data.
   c) Changing the shared database schema is difficult and affects all subsystems.
   d) It cannot be used in compilers or IDEs.

4. Which component of a language processing system (compiler) converts the input text characters into internal tokens?
   a) Syntax analyzer
   b) Lexical analyzer
   c) Semantic analyzer
   d) Code generator

### Section B: Short-Answer & Scenario Questions
5. Explain how a Compiler application can be designed using:
   * A Pipe and Filter pattern.
   * A Repository pattern.
6. What is the "+1" view in the 4+1 View Model of software architecture, and what is its purpose?
7. Scenario: You are designing the architecture for a new mobile banking application. The application must show real-time account balances, handle money transfers, and work across iOS and Android. Explain how you would address **Performance**, **Security**, and **Availability** in your architectural design.

---

## Answer Key

### Section A Solutions
1. **c) Layered Architecture**. The layered model restricts access to inner layers, making it ideal for securing core assets.
2. **b) Process view**. The process view models the concurrent runtime processes.
3. **c) Changing the shared database schema is difficult and affects all subsystems**. Because all subsystems depend on the repository schema, database evolution is high-risk.
4. **b) Lexical analyzer**. The lexical analyzer translates raw source characters into discrete tokens.

### Section B Solutions
5. **Pipe and Filter Compiler**: The compiler is structured as a sequence of filters (Lexical analysis $\rightarrow$ Syntax analysis $\rightarrow$ Semantic analysis $\rightarrow$ Code generation). The output stream of one filter serves as the input stream to the next, passing through pipes.
   * **Repository Compiler**: The compiler components (lexical analyzer, parser, code generator) are subsystems that interact via a central, shared repository containing the Symbol Table and the Abstract Syntax Tree (AST). Subsystems read and write data to this database.
6. The **+1 View** represents the **Scenarios** or **Use Cases**. Its purpose is to relate the other four views (logical, process, development, physical) to actual user requirements, verifying that the architectural design is complete and coherent.
7. **Mobile Banking Architectural Design**:
   * **Performance**: Minimize network traffic by processing account calculations on the backend application server and returning small JSON packets. Cache static assets locally on the mobile devices.
   * **Security**: Use a **Layered Architecture**. Place the database server in the innermost layer behind a firewall, accessible only by the application server. Implement end-to-end encryption between the client app and the servers.
   * **Availability**: Use a **Client-Server** model with load balancing across redundant backend servers. Deploy database replication so that if one server fails, a secondary database server takes over instantly.
