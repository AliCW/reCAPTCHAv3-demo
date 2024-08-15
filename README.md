# reCAPTCHAv3-demo
Google reCAPTCHA v3 demonstration (https://www.google.com/recaptcha/about/) utilising a backend in Django & frontend in React JS & webpack (https://webpack.js.org/). Success & failure messages are passed to the user with a passing score, datestamp and failure message (if applicable).

# Setup

Clone the repository:

    git clone https://github.com/AliCW/reCAPTCHAv3-demo.git

Register a new site with reCAPTCHA & select version 3 (https://www.google.com/recaptcha/admin/create) - for the purposes of this demonstration, the only domain added is `localhost`. Make sure you make note of the `Site Key` & `Secret Key`.

## Backend

Instal sqlite3:

    sudo apt-get install sqlite3 libsqlite3-dev

Django utilises its own `SECRET_KEY` that needs to be generated & obscured; The repo uses dotenv to obscure the key. Install by navigating to `\be\reCAPTCHAv3\` and type:

    python3 pip install python-dotenv

Create a file called `.env` in ` \reCAPTCHAv3\ ` (not ` \reCAPTCHAv3\reCAPTCHAv3\ `) and add the below:

    SECRET_KEY = ''

To generate a new key, type the below the enter the admin shell:

    django-admin shell

Followed by the below to get a new key; Import the ` get_random_secret_key ` function with the below:

    from django.core.management.utils import get_random_secret_key

Then run the function to get the ket itself:

    get_random_secret_key()

Copy the key into your dotenv file as your `SECRET_KEY` string:

    SECRET_KEY = 'this_is_my_key'

### Insert your google api secret key into the database with the below commands:

Sync the database to add a table for your api key:

    python3 manage.py migrate --run-syncdb

Start the server shell:

    python3 manage.py shell

Import insertion function:

    from test_demo.models import SendKey

Envoke the insertion function with your api key:

    key = SendKey(key='api_secret_key_here')

Save the api key to the database:

    key.save()

Check if it has saved successfully, assign the key to a variable:

    instance = SendKey.objects.get(id=1)

Print it:

    print(instance)

## Frontend

You need to add your google api site key to ` ./src./component/Main.jsx `: 

    <GoogleReCaptchaProvider reCaptchaKey="<api_site_key_here>">
        {load && <Result />}
    </GoogleReCaptchaProvider>

Install the required packages by navigating to `/fe` and running:

    npm install

To start the frontend, run:

    npm start

The default address is set to `localhost:3000`, this should now work in your browser.

