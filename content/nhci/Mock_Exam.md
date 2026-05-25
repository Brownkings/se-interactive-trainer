# Human-Computer Interaction — Mock Examination and Suggested Solutions

**Module Code**: NHCI63110  
**Duration**: 3 Hours (180 Minutes)  
**Total Marks**: 100 Marks  
**Instructions**:
1. Answer all questions.
2. Read the case studies and questions carefully.
3. For Section B (Django wireframing/modeling), write clean code snippets or configurations as requested.
4. The Suggested Solutions and Answer Key are at the end of this document.

---

## Section A: Theory & Core Concepts [60 Marks]

### Question 1: Case Study & Usability Goals [20 Marks]
Read the scenario below and answer the questions.

> **SCENARIO: SPU Online Tutor Booking System**
> The Higher Education Sector has shifted significantly from face-to-face teaching to online learning due to the coronavirus pandemic. This transition created challenges in tutoring and consultation times. The student body has expressed concerns about the lack of access to tutors. Previously, students could consult with lecturers outside of schedule times and attend tutorial classes where senior students provided help.
> In response, SPU CTLPD requested a prototype of an Online Tutor Booking System. The system requirements include:
> * **User Registration**: Students, Tutors, and Lecturers register with credentials.
> * **Schedule Management**: Tutors can input/modify their monthly schedule, notifying students of changes. Tutors can accept/reject student session requests. The system maintains monthly session logs.
> * **Student Features**: Students can view the monthly tutoring schedule and request additional sessions (specifying date, time, topic, question). Other students can see and join these requested sessions.
> * **Lecturer Features**: Lecturers can view schedules, student requests, and access monthly reports detailing sessions and topics covered.

1.1 Outline the assumption and claim presented in the scenario concerning the students' challenge. (4 Marks)  
1.2 Describe the current user experience as implied by the scenario before the new system is built. (2 Marks)  
1.3 What solution is proposed to address the claims and assumptions raised by the student body? (2 Marks)  
1.4 Identify and explain six usability goals that the Online Tutor Booking System must meet to ensure a positive and effective user experience. (12 Marks)

### Question 2: Applying Norman's Design Principles [20 Marks]
Consider a user interface mockup for the Online Tutor Booking System that has:
* A navigation bar at the top containing links: "Home", "Tutors", "My Bookings", "Login".
* A prominent main section with two primary buttons: "Get an online tutor" and "Become an online tutor".
* An active booking schedule panel showing a calendar of available slots.

2.1 Analyze how the design principles of **Visibility**, **Feedback**, **Constraints**, **Consistency**, and **Affordance** should be applied to this Online Tutor Booking System interface, providing two concrete examples for each principle based on the mockup. (20 Marks)

### Question 3: User Testing & Evaluation Methods [20 Marks]
An IT software developer is observing an ICT student navigating a test scenario where they are scheduling a tutoring session within a specified timeframe.

3.1 What type of evaluation is the IT software developer conducting? Specify the exact testing method. (3 Marks)  
3.2 What is the primary purpose of the usability testing being conducted in this scenario? (3 Marks)  
3.3 Describe three methods the IT software developer can use to collect data from the student during this evaluation. (6 Marks)  
3.4 Contrast usability testing (conducted in controlled settings) with heuristic evaluation (conducted in settings not involving users) in terms of cost, participants, and outcomes. (8 Marks)

---

## Section B: Practical Part [40 Marks]

### Question 8: Test Case Writing [10 Marks]
8.1 Compile a test case table for the booking feature containing: Test Scenario, Input, Action, and Expected Response. You must include one positive test case and one negative test case for booking a session. (10 Marks)

### Question 9: Django Prototype Design [30 Marks]
Design the backend wireframe prototype using Django for the tutor booking system:
9.1 Create the Django `Tutor` and `TutoringSession` Models (linked via ForeignKey, with fields for date, time, topic, and max students). (10 Marks)  
9.2 Develop the Django Views `session_list` (retrieve all sessions) and `book_session` (manage booking action and confirm). (10 Marks)  
9.3 Set up URL routing configurations to map views. (5 Marks)  
9.4 Create a HTML template structure for presenting available sessions and booking confirmation. (5 Marks)

---
---

# Mock Exam — Answer Key and Suggested Solutions

## Section A Solutions

### Question 1: Case Study & Usability Goals
* **1.1 Assumptions and Claims**:
  * *Assumption*: The shift to online learning due to the pandemic has created consultation challenges for students compared to face-to-face settings. (2)
  * *Claim*: The lack of face-to-face interaction results in students not having adequate access to tutors/lecturers, which requires a booking system to resolve. (2)
* **1.2 Current UX**:
  * Students experience difficulty arranging consultations, leading to academic anxiety, scheduling conflicts, and feelings of inadequate support. (2)
* **1.3 Proposed Solution**:
  * The development of a web-based Online Tutor Booking System where students can view schedules, book sessions, request extra sessions, and join peers' sessions. (2)
* **1.4 Usability Goals (6 goals, 2 Marks each)**:
  * *Effectiveness*: Students must successfully book sessions and access tutor calendars without fail.
  * *Efficiency*: The process of booking or requesting a session should take few clicks and load quickly.
  * *Safety*: Prevent double-booking or accidental cancellations (e.g., confirmation dialogs).
  * *Utility*: Provide all essential features (scheduling, reports, notification triggers, session joining).
  * *Learnability*: Easy for first-time students/tutors to navigate the booking workflow without a manual.
  * *Memorability*: Easy to remember how to book a session when returning after a few weeks.

### Question 2: Applying Norman's Design Principles
* **Visibility**:
  * *Example 1*: Place the login button and active tabs clearly in the top navbar.
  * *Example 2*: Display the "Book Now" buttons prominently next to each available time slot.
* **Feedback**:
  * *Example 1*: Change button color and show a spinner when a user clicks "Book".
  * *Example 2*: Display a success alert message: "Session booked successfully! Confirmation email sent."
* **Constraints**:
  * *Example 1*: Deactivate/gray out past dates on the calendar.
  * *Example 2*: Disable the "Book" button if a session has reached its maximum student capacity.
* **Consistency**:
  * *Example 1*: Use the same style, color, and padding for "Get an online tutor" and "Become an online tutor" buttons.
  * *Example 2*: Navigation bar links must use the same font and hover indicators.
* **Affordance**:
  * *Example 1*: Give buttons a 3D shadow or rounded corners to make them look clickable.
  * *Example 2*: Use an envelope icon next to notifications, implying email delivery.

### Question 3: User Testing & Evaluation Methods
* **3.1 Evaluation Type**:
  * Usability evaluation in a controlled setting. The exact method is **Usability Testing**. (3)
* **3.2 Primary Purpose**:
  * To observe real users completing tasks to identify usability issues, measure completion times, and improve the user experience before deployment. (3)
* **3.3 Data Collection Methods (Any three, 2 Marks each)**:
  * *Observation and Think-Aloud*: Observer watches while the user verbalizes their thoughts.
  * *Video Recording & Keystroke Logging*: Screen recording, mouse movements, and click logs.
  * *Questionnaires/Interviews*: Post-test surveys (e.g., SUS) and interviews to gather qualitative feedback.
* **3.4 Testing vs. Heuristic Evaluation**:
  * *Cost*: Usability testing is expensive (requires users, lab, and time). Heuristic evaluation is inexpensive ("discount evaluation").
  * *Participants*: Usability testing requires 5-12 real users. Heuristic evaluation requires 3-5 usability experts.
  * *Outcomes*: Usability testing yields empirical user data, error rates, and qualitative satisfaction. Heuristic evaluation yields a list of violations based on usability heuristics.

---

## Section B Solutions

### Question 8: Test Case Writing
* **Positive Test Case**:
  * *Scenario*: Book session with valid date and time.
  * *Input*: Tutor ID: 1, Date: 2026-06-01, Time: 10:00.
  * *Action*: Click "Book Session".
  * *Expected Response*: System displays "Booking Confirmed" and decrements remaining slots.
* **Negative Test Case**:
  * *Scenario*: Book session on a past date.
  * *Input*: Tutor ID: 1, Date: 2020-01-01, Time: 10:00.
  * *Action*: Click "Book Session".
  * *Expected Response*: System prevents booking and displays error message: "Cannot book a session in the past."

### Question 9: Django Prototype Design
* **9.1 Models (`booking/models.py`)**:
```python
from django.db import models

class Tutor(models.Model):
    name = models.CharField(max_length=100)

class TutoringSession(models.Model):
    tutor = models.ForeignKey(Tutor, on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()
    topic = models.CharField(max_length=100)
    max_students = models.IntegerField(default=5)
```
* **9.2 Views (`booking/views.py`)**:
```python
from django.shortcuts import render, get_object_or_ok
from .models import TutoringSession

def session_list(request):
    sessions = TutoringSession.objects.all()
    return render(request, 'booking/session_list.html', {'sessions': sessions})

def book_session(request, session_id):
    session = get_object_or_404(TutoringSession, id=session_id)
    # Booking logic here (e.g. adding user to session)
    return render(request, 'booking/session_booked.html', {'session': session})
```
* **9.3 URLs (`booking/urls.py`)**:
```python
from django.urls import path
from . import views

urlpatterns = [
    path('sessions/', views.session_list, name='session_list'),
    path('sessions/book/<int:session_id>/', views.book_session, name='book_session'),
]
```
* **9.4 Templates (`session_list.html`)**:
```html
<h1>Available Tutoring Sessions</h1>
<ul>
  {% for session in sessions %}
    <li>{{ session.topic }} with {{ session.tutor.name }} on {{ session.date }} at {{ session.time }}
      <a href="{% url 'book_session' session.id %}"><button>Book</button></a>
    </li>
  {% endfor %}
</ul>
```