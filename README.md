# reCAPTCHAv3-demo
reCAPTCHA v3 demonstration

# fe




# be

Cover django secret key as the first thing with dotenv

    python3 pip install python-dotenv

Create a `.env` file in ` \reCAPTCHAv3\ ` and add the below:

    SITE_KEY = '<google_api_key_here>'



### Insert your api key into the datbase with the below commands:

Start the server

    python3 manage.py runserver

Import insertion function

    from <project_name>.models import SendKey

Envoke the insertion function with your api key

    key = SendKey(key='api_key_here')

Save the api key to the database

    key.save()

Check if it has saved successfully

    instance = SendKey.objects.get(id=1)

    print(instance)

Install `cors`  

    python -m pip install django-cors-headers

Add cors to INSTALLED_APPS

`INSTALLED_APPS = [`
    `...`
    `'corsheaders',`
    `...`
`]`

Add cors to middle ware

`MIDDLEWARE = [`
    `...`
    `'corsheaders.middleware.CorsMiddleware',`
    `...`
`]`

Add front-end address to cors allowed origins

`CORS_ALLOWED_ORIGINS = [`
    `...`
    `'http://localhost:3000',`
    `...`
`]`








# Without Clone

    python3 pip install Django==5.1



install sql

    sudo apt-get install sqlite3 libsqlite3-dev

django migrations after setup - then input the data

    python3 manage.py makemigrations

followed by

    python3 manage.py migrate

perform migrations (https://stackoverflow.com/questions/41567619/how-to-create-a-new-table-using-model)