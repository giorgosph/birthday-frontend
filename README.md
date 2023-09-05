# Birthday Web App Frontend

## Development Testing Instructions
#### Important Note
In the first stage follow the instructions to set up and running, the birthday-backend from https://github.com/giorgosph/birthday-backend.git

#### Steps
1. Navigate the root folder of the repository if not already there, click on the top right side at the "code" button, and copy the HTTPS url provided.
2. On your local PC navigate to the folder you want to add the repository and open the cmd.
3. Run:
    a. git init
    b. git clone <url>
    c. git pull
    d. npm start
4. Ensure that the backend is already up and running.

## Deployment Instructions 
#### Steps
1. Proceed with the hosting provider of your choice, in this case, Render.
2. Sign in (preferred with the GitHub account), and click on the right top side, "New" -> "Static Site".
3. Search for the frontend repository you want to deploy and give permissions to the hosting provider.
4. If the repository is private to give permission click on the right side on "configure account" to navigate to the GitHub account and give the corresponding permissions.
5. Select "only selected repositories", then "select repositories" select the desired repository, and click "save".
6. At this point you should be able to connect to the repository and fill in the configurations to set up the website.
   Note: "Build command" should be "npm run build" and "publish directory" should be "build". 
