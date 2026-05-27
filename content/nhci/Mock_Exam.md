# Human-Computer Interaction — Mock Examination and Suggested Solutions

**Module Code**: NITE63410 / NHCI63110  
**Duration**: 3 Hours  
**Total Marks**: 72 Marks  
**Instructions**:
1. Answer all questions.
2. Read the scenarios and questions carefully before answering.
3. The Suggested Solutions and Answer Key are located at the very end of this document.

---

### Question 1: Student Tutoring Interaction Storyboarding [11 Marks]
**CASE STUDY: Student Support Tutoring System (iTBS)**  
The department of Computer Science and Information Technology (CSIT) has been experiencing poor student performance in programming modules. CSIT resolved to appoint third-year students as tutors to facilitate face-to-face sessions. A web-based tutor booking system (called iTBS) is envisaged to allow students to book tutors for such sessions. The system is expected to be available 24 hours a day.  
To access the system, a student logs on to the website with their student number and password. Upon successful authentication, the system provides options such as "Self-study lessons", "Attempt a test", "Book a Tutorial". If the student chooses "Book a Tutorial", they input the subject name, date, time, etc. The system searches the TutorList to identify a tutor for the subject and sends an SMS to the tutor. The tutor responds by sending an SMS with the text:  
* YES: agree to meet the student as per the specifications of the request  
* NO: the tutor will not make it to the requested tutorial  
* ALT: the CSIT Administrator should follow up by calling both to identify a suitable time.  
The tutor's response is forwarded to the student by SMS. On completion of the tutorial, the student completes an evaluation form on the system. The tutor then completes a claim form for the service. The system checks if the student has submitted the evaluation, and then evaluates the tutor's claim to process payment. The HOD, Mr. Tumo Baitshenyetsi, periodically requests reports about student progress/performance and monitors the budget by checking payments made.

Describe the student's interaction with the web-based tutor booking system (iTBS) to book a tutorial using storyboarding (text-based step-by-step description of the user interface flow). (11 Marks)

### Question 2: Benefits of Low-Fidelity Prototyping [4 Marks]
The web-based tutor system storyboard that you modeled in Question 1 is an example of a low-fidelity (lo-fi) prototype. Explain how low-fidelity prototyping will benefit the CSIT/CTLPD team during the conceptual model phase of the web-based tutor system. (4 Marks)

### Question 3: Requirements Classification Table [13 Marks]
Getting requirements right is crucial to the success of an interactive product. Study the iTBS case study and classify the following requirements of the system as **Input**, **Output**, or **Process**:
1. The student logs on to the website with supplied credentials.
2. The system provides the student with options: Self-study lessons, Attempt a test, Book a Tutorial.
3. The student inputs the subject name, date, time, etc. after choosing 'Book a Tutorial'.
4. The system searches the TutorList to identify a tutor for the specified subject.
5. The system sends an SMS to the tutor indicating that a student requests a tutorial.
6. The tutor responds by sending an SMS (YES, NO, or ALT).
7. The system sends the response of the tutor to the student by SMS to notify them of their request's status.
8. The system allows the student to complete an evaluation form providing feedback about the session.
9. The system allows the tutor to complete a claim form for the tutorial service rendered.
10. The system checks if the student has submitted the feedback, and then evaluates the tutor's claim to process a payment.
11. The system allows the HOD to request progress/performance reports.
12. The system allows the HOD to monitor the budget by checking payments. (13 Marks)

### Question 4: Conceptual Model via Use Case Diagram [12 Marks]
Johnson and Henderson (2002) define a conceptual model as "a high-level description of how a system is organized and operates". Describe the conceptual model of the online iTBS system using a use case diagram representation. In your description, list the actors, use cases, and relationships. Additionally, briefly explain how Donald Norman's design principles (specifically feedback and visibility) would apply to the interface for these use cases. (12 Marks)

### Question 5: Context Data Flow Diagram (DFD) [9 Marks]
Create a text-based representation or description of the Context DFD for the iTBS booking system, detailing the external entities and the data flows entering or leaving the system. (9 Marks)

### Question 6: Key Focuses of Evaluation [4 Marks]
Evaluation is integral to the design process. Describe the two core concepts (usability goals and user experience) that the CSIT design team should focus on when evaluating the web-based tutor system (iTBS). (4 Marks)

### Question 7: Formative vs. Summative Evaluation [6 Marks]
Differentiate between the two types of evaluation (formative and summative) that the design team will carry out during the design process of the web-based tutor system. (6 Marks)

### Question 8: The Four Evaluation Questions [8 Marks]
Describe the four key questions (Why, What, Where, When) that the design team should address when evaluating the web-based tutor system (iTBS). (8 Marks)

### Question 9: Django Implementation & Usability Test Case [5 Marks]
Suppose the development team decides to implement the iTBS web application using a framework like Django.
9.1 Explain how a Django prototype would help in evaluating usability goals compared to low-fidelity storyboarding. (2 Marks)
9.2 Describe a usability test case that ensures the user-centered design flow is maintained during the login process. (3 Marks)

---

# Suggested Solutions

### Question 1: Student Tutoring Interaction Storyboarding
* **Suggested Storyboard Steps (11 Marks)**:
  * **Step 1 (Landing Page)**: The student arrives at the iTBS home page and sees a login portal. (2)
  * **Step 2 (Login)**: The student enters their student number and password, then clicks "Logon". (2)
  * **Step 3 (Dashboard)**: Upon verification, the student sees a landing menu with options: "Self-study lessons", "Attempt a test", and "Book a Tutorial". (2)
  * **Step 4 (Booking Form)**: The student clicks "Book a Tutorial" and is shown a form where they type the subject name, select a date and preferred time, and click "Submit". (2)
  * **Step 5 (Confirmation Screen)**: The system confirms that the request has been received, searches the tutor database, and triggers an SMS request to the tutor. (2)
  * **Step 6 (SMS Notification)**: Once the tutor replies (YES/NO/ALT), the student receives an SMS with the status of the booking request. (1)

### Question 2: Benefits of Low-Fidelity Prototyping
* **Lo-Fi Prototyping Benefits (4 Marks)**:
  * Enables translation of high-level design concepts into tangible and testable artifacts quickly and cheaply. (2)
  * Focuses on testing functionality, flow, and conceptual clarity rather than the visual appearance of the product, preventing attachment to polished designs too early. (2)

### Question 3: Requirements Classification Table
* **Requirements & Classifications (13 Marks total)**:
  1. *Logon credentials entry*: **Input**
  2. *Displaying options menu (Self-study, Test, Book)*: **Output**
  3. *Subject name, date, time form entry*: **Input**
  4. *Searching TutorList for subject tutor*: **Process**
  5. *Sending tutor request SMS*: **Output**
  6. *Tutor responding by SMS (YES/NO/ALT)*: **Process**
  7. *Sending tutor response to student*: **Output**
  8. *Student completing evaluation feedback form*: **Input**
  9. *Tutor completing claim form*: **Input**
  10. *Checking feedback submission and evaluating claim for payment*: **Process**
  11. *HOD requesting progress/performance reports*: **Process**
  12. *HOD checking payments to monitor budget*: **Process**

### Question 4: Conceptual Model via Use Case Diagram
* **iTBS Use Case Structure (12 Marks)**:
  * **System Boundary**: iTBS System. (1)
  * **Actors**: Student, Tutor, HOD (Head of CSIT). (3)
  * **Student Use Cases**: Log On, Book a Tutorial, Complete Evaluation Form. (3)
  * **Tutor Use Cases**: Respond to Tutorial Request, Complete Claim Form, Receive Payment. (3)
  * **HOD Use Cases**: Request Progress Report, Monitor Budget/Payments. (2)
  * *Norman's design principles application*:
    * **Feedback**: The system must provide immediate visual confirmation when the student clicks "Book a Tutorial" and send an SMS notification when the tutor responds, confirming the action's status.
    * **Visibility**: Essential options (like "Book a Tutorial") must be prominently placed on the student dashboard, and the status of requests should be clearly displayed.

### Question 5: Context Data Flow Diagram (DFD)
* **iTBS Context DFD (9 Marks)**:
  * **Central Process**: Process 0 (iTBS System). (1)
  * **External Entities**: STUDENT, TUTOR, HOD. (3)
  * **Student Data Flows**:
    * *Logon details / Menu options / TutorialSpecs / ClaimForm* → iTBS (Input flows). (1.5)
    * *ResponseSMS* $\leftarrow$ iTBS (Output flow). (0.5)
  * **Tutor Data Flows**:
    * *TutorialRequestSMS / Payment* $\leftarrow$ iTBS (Output flows). (1)
    * *ResponseSMS / ClaimForm* → iTBS (Input flows). (1)
  * **HOD Data Flows**:
    * *ReportRequest* → iTBS (Input flow). (0.5)
    * *Report* $\leftarrow$ iTBS (Output flow). (0.5)

### Question 6: Key Focuses of Evaluation
* **Evaluation Core Concepts (4 Marks)**:
  * **Usability of the system**: Evaluating how easy the web-based tutor system is to learn and to use. (2)
  * **User experience (UX)**: Evaluating the students', tutors', and HOD's experience when interacting with the system (how satisfying, enjoyable, or motivating the interaction is). (2)

### Question 7: Formative vs. Summative Evaluation
* **Evaluation Types (6 Marks)**:
  * **Formative Evaluation**: Conducted *during* design and prototyping. The team evaluates the design to check that the web-based tutor system continues to meet stakeholders' (HOD, students, tutors) needs. (3)
  * **Summative Evaluation**: Conducted *at the end* of development to assess the success, performance, and overall utility of the finished web-based tutor system. (3)

### Question 8: The Four Evaluation Questions
* **The Four Questions (8 Marks, 2 Marks each)**:
  * **Why evaluate?**: Understand if stakeholders get a pleasing and engaging experience, not just a usable system.
  * **What to evaluate?**: Ranges from low-fidelity paper prototypes to the final working system (basically all aspects of the design).
  * **Where to evaluate?**: The setting depends on what is evaluated (e.g. controlled lab vs. natural context).
  * **When to evaluate?**: The lifecycle stage depends on product type (e.g., brand-new system like iTBS vs. upgrade).

### Question 9: Django Implementation & Usability Test Case
* **9.1 Django prototype**: A Django prototype provides high-fidelity interactivity, allowing users to experience actual system response times, navigation flows, and database interactions, which is more effective for testing usability goals like efficiency and safety than static storyboards. (2 Marks)
* **9.2 Usability test case**: A usability test case for login would specify: (1) Enter invalid credentials → expect helpful error message (good feedback). (2) Enter valid credentials → expect redirection to dashboard within 2 seconds (efficiency). (3) Help text is visible for password recovery (safety). (3 Marks)