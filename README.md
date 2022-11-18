# Team Project - Automated Medical System

This project was a part of the Team Project course during the Winter semester 2022/23 at the Faculty of Mathematics and Computer Science.

## E-Medicare

E-Medicare is an online platform focused on providing an easily accessible and automated way of arranging doctor meetings, where patients can interact with their medical experts and discuss a variety of topics

In a world that has just exited from a global pandemic, medical services have become overwhelmed by the number of people needing medical attention. Not only does this pose a challenge for the health system, but also for patients, who may struggle to find the medical help they need, aggravating their condition.

Taking this into account, E-medicare emerges as a solution to all of these problems, by offering its users a platform where they can book appointments, discuss any sort of problems with doctors, amongst others, without the need to make phone calls or phisically booking appointments at hospital.

Upon registration, the platform's users can view and search for doctors and hospitals. They have the option to check their schedule if they want to book an appointment or simply send them a message. Furthermore, a User can search for a doctor based on their expertise, which might be more convenient for their issue.

Every Users' groups, except Visitors, require authentication which can be completed by providing an email and password or using an external API, such as Google.


---


## Actors and User Stories

This section contains the specification of the actors and their users stories, serving as agile documentation of project requirements.

### 1. Actors

For the **E-Medicare** system, the actors are represented in Figure 1 and described in Table 1.

<p align="center">   <img src="https://cdn.discordapp.com/attachments/589446197807284253/1035184971125624832/Untitled.png"> 
</p>




*Figure 1 - Actors*



| Identifier    | Description                                                  | Examples |
| ------------- | ------------------------------------------------------------ | -------- |
| Visitor       | Unauthenticated user that can register itself (sign-up) or sign-in in the system | n/a      |
| Member       | Authenticated user | Alice      |
| Patient        | Authenticated user that can send appointments requests and send messages to doctors | Alice     |
| Doctor         | Authenticated user that can accept appointments requests and reply to patients  | Bob     |
| OAuth API     | External OAuth API that can be used to register or authenticate into the system | Google   |

*Table 1 - Actors' description*

### 2. User Stories

For the **E-Medicare** system, consider the user stories that are presented in the following sections.

#### 2.1. Visitor

| Identifier | **Name**                   | Priority | Description                                                  |
| ---------- | -------------------------- | -------- | ------------------------------------------------------------ |
| US101      | Sign-in                    | high     | As a *Visitor*, I want to be able to authenticate into the system, so that I can access privileged information |
| US102      | Sign-up                    | high     | As a *Visitor*, I want to be able to register into the system, so that I can authenticate myself into the system |
| US103      | Sign-in using external API | low      | As a *Visitor*, I want to be able to authenticate into the system using my Google account, so that I can access privileged information |
| US104      | Sign-up using external API | low      | As a *Visitor*, I want to be able to register into the system using my Google account, so that I can authenticate myself into the system |

*Table 2 - Visitor's user stories*

#### 2.2. Member

| Identifier | **Name**              | Priority | Description                                                  |
| ---------- | --------------------- | -------- | ------------------------------------------------------------ |
| US201      | Logout                | high     | As a *Member*, I want to be able to logout from the system, so that my account remains safe and others user can authenticate |
| US202      | Edit Profile          | high     | As a *Member*, I want to be able to edit my profile, so that I can keep it updated |
| US203      | Edit Account Settings | high     | As a *Member*, I want to be able to edit my account settings (eg. changing password), so that I can keep my account secure |

*Table 3 - Member's user stories*

#### 2.3. Patient

| Identifier | **Name**         | Priority | Description                                                  |
| ---------- | ---------------- | -------- | ------------------------------------------------------------ |
| US301      | View Home        | high     | As a *Patient*, I want to be able to access the Home Page, so that I can view a brief presentation of the website with popular doctors and hospitals |
| US302      | See About        | high     | As a *Patient*, I want to be able to access the About Page, so that I can view the website's detailed description |
| US303      | Search           | high     | As a *Patient*, I want to be able to search for doctors and hospitals, so that I can find what I'm looking for faster |
| US304      | View Doctor's Profile     | high     | As a *Patient*, I want to be able to view any Doctor's Profile, so that I can be more informed about them |
| US305      | View Hospital's Details     | high     | As a *Patient*, I want to be able to view any Hospital's Details, so that I can be more informed about them |
| US306      | Change Patient Details     | high     | As a *Patient*, I want to be able to update my medical details, so Doctors can know what my medical condition is |
| US307      | Send Messages to Doctors     | high     | As a *Patient*, I want to be able to send a message to a Doctor concerning a specific matter |
| US308      | Consult FAQ      | medium   | As a *Patient*, I want to be able to access the FAQ Page, so that I can see the Frequently Asked Questions |

*Table 4 - Patient's user stories*

#### 2.4. Doctor

| Identifier | **Name**         | Priority | Description                                                  |
| ---------- | ---------------- | -------- | ------------------------------------------------------------ |
| US401      | View Dashboard        | high     | As a *Doctor*, I want to be able to view the Dashboard Page, so I can be updated on possible new appointments and messages |
| US404      | View Booked Patient's Profile     | high     | As a *Doctor*, I want to be able to view any Doctor's Profile, so that I can be more informed about them |
| US405      | Send Messages to Patients     | high     | As a *Doctor*,  I want to be able to send a message to a Patient concerning a specific matter |
| US405      | Consult FAQ      | medium   | As a *User*, I want to be able to access the FAQ Page, so

*Table 5 - User's user stories*


### 3. Supplementary Requirements

This annex contains business rules, technical requirements and other non-functional requirements on the project.

#### 3.1. Business rules

A business rule defines or constrains one aspect of the business, with the intention of asserting business structure or influencing business behavior.

| Identifier | **Name**                | Description                                                  |
| ---------- | ----------------------- | ------------------------------------------------------------ |               |
| BR01       | User Deleted            | Whenever a User is deleted all its respective appointments and Personal Information must be deleted as well |
| BR02       | Delete Appointment          | Whenever an appointment is deleted, the Doctor's schedule should be changed |
| BR03       | Appointment Date            | An appointment's date must always be equal or greater than the current date |

#### 3.2. Technical requirements

Technical requirements are concerned with the technical aspects that the system must meet, such as performance-related issues, reliability issues and availability issues. The three most critical Technical requirements are the first three to be identified (TR01, TR02, TR03).

| Identifier |      Name       |                         Description                          |
| :--------: | :-------------: | :----------------------------------------------------------: |
|    TR01    |  Availability   | The system must be available 99 percent of the time in each 24-hour period. |
|    TR02    |  Accessibility  | The system must ensure that everyone can access the pages, regardless of whether they have any handicap or not, or the Web browser they use. |
|    TR03    |    Usability    |         The system should be simple and easy to use.         |
|    TR04    |   Performance   | The system should have response times shorter than 2s to ensure the user's attention. |
|    TR05    | Web application | The system should be implemented as a Web application with dynamic pages. |
|    TR06    |   Portability   | The server-side system should work across multiple platforms (Linux, Mac OS, etc.). |
|    TR07    |    Database     | The Firebase database management system must be used. |
|    TR08    |    Security     | The system shall protect information from unauthorized access through the use of an authentication and privilege verification system. |
|    TR09    |   Robustness    | The system must be prepared to handle and continue operating when runtime errors occur. |
|    TR10    |   Scalability   | The system must be prepared to deal with the growth in the number of users and corresponding operations. |
|    TR11    |     Ethics      | The system must respect the ethical principles in software development (for example, the password must be stored encrypted to ensure that only the owner knows it). |

#### 3.3. Restrictions

A restriction on the design limits the degree of freedom in the search for a solution.

| Identifier |   Name   |                         Description                          |
| :--------: | :------: | :----------------------------------------------------------: |
|    C01     | Deadline | The system should be ready to be used by the end of the Winter Semester 2022/23, in order to be properly assessed for delivery. |




---


## Revision history

No changes made so far

***

27/08/2022