# Simple Guestbook Application
A guestbook application where visitors can leave messages

**Topics**: PHP, MySQL, AJAX, CSS, Guestbook, Web Development

### Installation Process

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/yourusername/simple-guestbook-application.git
   cd simple-guestbook-application
   ```

2. **Database Setup**:
    - Create a new MySQL database.
    - Import the provided `guestbook.sql` file to set up the necessary table.
    - Update the database configuration in `config.php`.
    - Import the provided SQL file to set up the necessary tables.
     ```sh
     mysql -u yourusername -p todo_list < guestbook.sql
     ```

4. **Configure the Database Connection:**
   - Open the `config.php` file and update the database credentials.
     ```php
     <?php
     // config.php
     $servername = "localhost";
     $username = "yourusername";
     $password = "yourpassword";
     $dbname = "guestbook_db";
     ```

5. **Start a Local PHP Server:**
   - Start the PHP built-in server.
     ```sh
     php -S localhost:8000
     ```

6. **Access the Application:**
   - Open your web browser and navigate to `http://localhost:8000`.

### File Structure

Here’s a basic file structure for your to-do list application:

```
simple-guestbook-application/
├── config.php
├── index.php
├── submit.php
├── fetch.php
├── css/
    └── style.css
├── guestbook.sql
└── js/
    └── main.js
```
