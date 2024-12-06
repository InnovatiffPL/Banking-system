# Learning and creating a simple banking/payment system from scratch
## Project overview and documentation of stages

If you are reading this, chances are that you found me through my website and came across different projects that I am working on. One of them is my GitHub repository where I will attempt to learn and develop a simple payment system with some characteristics of a banking account. Although I am not really technical yet, I want to show people that if you put enough effort and mind into something, you can learn new skills regardless of your professional background or if you feel awkward with words or technology. In my professional experience, I familiarised myself with data protection concepts in conjunction with its frameworks in context of various payment systems. Back then I picked up on coding. Today, as an IT guy with limited programming skills, I am more comfortable with programming as a whole and this idea came to my mind when I worked in auditing firms in scope of Payment Card Industry Data Security Standards (PCI DSS). Today, I put thoughts into action. I will be creating a system from scratch, where I will include developing user interface, database, the logic of it, and an API to make it all functional. Below you will find a list of stages for this project in a hierarchical order.

### Stage one (Planning):

1. Choosing technology stack:
    - Interface
    - Core logic
    - DBMS
    - API

2. Defining key elements:
    - Creating, storing, and managing users
    - Recording and processing transactions
    - Security
    - Two main panels; one for transactions a la paypal, one for user account (transfer history, password change, making payments, checking and updating balance)

3. Backend:
    - User management
        * Registration - secure user sign-in with validations (e.g. email, phone number)
        * Authentication - implement login functionality with hashed passwords (e.g. bcrypt, Argon2)
        * User roles - separate users into roles (customers, admin)
        * Profile management - allow users to update their details securely

    - Account management
        * Account creation - users can create one or more accounts with unique IDs
        * Balance tracking - maintain accurate balances for each account
        * Transaction history - log all account activity (deposits, withdrawals, transfers)

    - Transaction management
        * Deposits - all funds to accounts with clear audit trails
        * Withdrawals - deduct funds while validating sufficient balance
        * Transfers - allow users between accounts with atomicity to prevent partial failures

    - Security and compliance
        * Data encryption - encrypt sensitive data both in transit (HTTPS) and at rest
        * Validation - validate all user inputs to prevent SQL injection, XSS, etc.
        * Audit logs - track all significant actions (logins, failed attempts, transactions)
        * Compliance considerations - implement basic compliance measures for data privacy and fraud detection

    - Error handling and notifications
        * Error messages - provide clear, secure error responses without revealing sensitive details
        * Notifications - optional email or SMS alerts for significant account activities

4. Frontend:
    - User interface
        * Dashboard - displays accounts balances, recent transactions, and quick actions
        * Forms - for login, registration, account creation, and transaction initiation
        * Navigation - intuitive navigation bar for easy access to key sections (e.g. dashboard, transactions, settings)
        * Responsive design - ensure the UI adapts to different devices (mobile, desktop)

    - User authentication
        * Login page - securely collect username/email and password
        * Registration page - form to capture user details with validations
        * Token handling - store authentication tokens (e.g. JWT) securely in memory or cookies

    - Account and transaction management
        * Account overview - show a summary of all user accounts
        * Transaction initiation - provide forms for deposits, withdrawals, and transfers
        * Transaction history - table or list view to display past transactions with filters (e.g. date, type)

    - Error handling and feedback
        * Error messages - display clear and user-friendly messages for input errors, failed logins, etc.
        * Success notifications - confirm actions like successfil transactions or profile updates
        * Loading indicators - show spinners or loaders during API calls

    - Security measures
        * Input validation - prevent injection attacks by sanitizing and validating inputs
        * Secure storage - use secure cookies or in-memory storage for sensitive data
        * Logout mechanism - allow users to log out and clear sensitive data from the client side

    - Optional features
        * Dark mode - toggle between light and dark themes
        * Multi-language support - basic localization for wider accessibility

5. Database:
    - User management
        * ***User table***
            * stores user details such as name, email, and hashed password
            * includes timestamps for account creation and updates
        * Fields
            * id (primary key) - unique identifier for each user
            * email (unique) - user's email address
            * password_hash - securely hashed password
            * created_at and updated_at - timestamps

    - Account management
        * ***Account table***
            * Stores details about user accounts
            * Links accounts to users via foreign keys
        * Fields
            * id (primary key) - unique identifier for each account
            * user_id (foreign key) - links to the ***User table***
            * account_number (unique) - account number
            * balance - current accounts balance
            * created_at and updated_at - timestamps

    - Transaction management
        * ***Transaction table***
            * tracks all deposits, withdrawals, and transfers
            * links to accounts via foreign keys
        * Fields
            * id (primary key) - unique identifier for each transaction
            * account_id (foreign key) - links to the ***Account table***
            * transaction_type - specifies the type (deposit, withdrawal, transfer)
            * amount - amount involved in the transaction
            * created_at - timestamp for the transaction

    - Audit logging
        * Audit log table
            * tracks significant system activities (e.g. logins, errors)
        * Fields
            * id (primary key) - unique identifier for each log entry
            * user_id (foreign key) - links to the ***User table*** (optional)
            * action - describes the activity (e.g. "login", "failed transaction")
            * details - additional context for the action
            * timestamp - when the action occured
    
    - Optional tables
        * Payment gateways
            * if simulating payment gateway integrations, store gateway-specific transaction metadata
        * Settings
            * store user or system-wide preferences

6. API:
    - Authentication and authorization
        * Endpoints
            * POST /auth/register - user registration
            * POST /auth/login - user login and token issuance
            * POST /auth/logout - logout and token revocation
        * Features
            * use JSON Web Tokens (JWT) or session-based authentication
            * implement role-based access control if needed
    
    - User management
        * Endpoints
            * GET /users/{id} - fetch user details
            * PUT /users/{id} - update user information

    - Account management
        * Endpoints
            * GET /accounts - list all accounts for the authenticated user
            * POST /accounts - create a new account
            * GET /accounts/{id} - fetch details of a specific accounts

    - Transaction management
        * Endpoints
            * POST /transactions - initiate a transaction (deposit, withdrawal, transfer)
            * GET /transactions - list all transactions for an authenticated user
            * GET /transactions/{id} - fetch details of a specific transactions

    - Error handling
        * Standardise error responses with status codes
            * 400 - bad request (e.g. validation errors)
            * 401 - unauthorized (e.g. invalid or missing token)
            * 403 - forbidden (e.g. insufficient permissions)
            * 404 - resource not found
            * 500 - internal server error

    - Security measures
        * use HTTPS  for secure communication
        * validate and sanitise all incoming data
        * use API rae limiting to prevent abuse

### Stage two (Setting up):

### Stage three (Writing core code):

### Stage four (Implementing API):

### Stage five (Testing):

### Stage six (Correcting):

### Stage seven (Adding features):

### Stage eight (Adding bonus features):

### Stage nine (Final tests):

### Stage ten (Conclusions):

This is to test if I can do commits properly.

What was your motivation? - to create my first github project in which I will learn to create and join together frontend and backend, including creating a database, user interface, and the logic of a banking system with very limited resources and in its basic form.
Why did you build this project? - to add it to my website for my github projects. This project is not intended for collaboration, just a display of my skills.
What problem does it solve? - it created a real project which I can show to people.
What did you learn? - nothing yet
What makes your project stand out? If your project has a lot of features, consider adding a "Features" section and listing them here. - yet to be described.