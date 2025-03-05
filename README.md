E-commerce WebApp
=================

Description
-----------

This project is a full-stack E-commerce WebApp built using Django Rest Framework for the backend and React for the frontend. It features user authentication with JWT tokens, product listing, and cart management. The application keeps track of user movements and cart items in the backend.

Technologies Used
-----------------

*   **Backend**: Django, Django Rest Framework
*   **Frontend**: React, Context API
*   **Authentication**: JWT (JSON Web Tokens)
*   **State Management**: Context API
*   **Database**: SQLite (default for Django, can be changed)
*   **Dependencies**: Listed in `requirements.txt` for backend

Getting Started
---------------

### Prerequisites

*   Python 3.x
*   Node.js
*   npm

### Installation

Backend (Django)
----------------

1.  **Navigate to the backend directory**:
    ```
    cd backend
    ```
2.  **Install dependencies**:

    ```
    pip install -r requirements.txt
    ```
    
3.  **Run migrations**:
    ```
    python manage.py migrate
    ```

4.  **Start the Django development server**:
    ```
    python manage.py runserver
    ```
    

Frontend (React)
----------------

1.  **Navigate to the frontend directory**:
    ```
    cd frontend
    ```
    
2.  **Install dependencies**:
    ```
    npm install
    ```
    
3.  **Start the React development server**:
    ```
    npm run dev
    ```
    

Usage
-----

1.  **Access the application**:
    *   Backend: `http://localhost:8000`
    *   Frontend: `http://localhost:5173`
2.  **Sign up or log in** to start using the application.
3.  **Browse products** and add them to your cart.
4.  **Manage your cart** by adding or removing items.

Project Structure
-----------------

*   **backend**: Contains the Django project and app files.
*   **frontend**: Contains the React project files.

Additional Notes
----------------

*   Ensure that the backend server is running before starting the frontend server to avoid any API call issues.
*   You can customize the database settings in the Django `settings.py` file if needed.
