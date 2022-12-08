# Personal Website

See: [johnange.com](https://johnange.com).

## Dependencies

Tested with: [node](https://nodejs.org/) >= v12 and optional [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for managing node versions.

## Set up

To download the repository and install dependencies, run the following commands:

```bash
git clone git://github.com/jakernodle/resume-site.git 
cd resume-site
nvm install # this is optional - make sure you're running >= node 12 with `node --version`
npm install
```

## Running

Run the following command to build the react application and serve it with fast refresh:

```bash
npm start
```

Your web browser should automatically open to `<ip>:<port>:<path>` default: [http://localhost:3000/](http://localhost:3000/).

## Deploying

### Deploying to Github Pages

1. Modify the environmental variables and git remote url in [`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml).
2. Modify `homepage` in `package.json` to point to where you plan to host your site. If you do not plan on using a custom domain name, it should look like `https://[your-gh-username].github.io/[repository-name - default:resume-site]/`
3. If you plan on using a custom domain, modify `public/CNAME`. If you don't, delete `public/CNAME`.
4. Use a popular favicon generator like [Real Favicon Generator](https://realfavicongenerator.net/) to make your own favicon and update the files in `resume-site/public/images/favicon`
5. If you plan to use a reCAPTCHA for your contact page as well, generate your own keys [here](https://www.google.com/recaptcha/admin/create) and add the site key to the ReCAPTCHA element in `resume-site/src/pages/Contact.js`. To test your reCAPTCHA locally, add 'localhost' as one of your site domains.

Make a commit to `main` and push your changes. That's it.

### Static Export

To statically export the site without deploying to github pages, delete or disable `.github/workflows/github-pages.yml` and run `npm run predeploy`. This generates a static export of the website as `resume-site/build/`. Copy this and self-host or deploy to a CDN.

## Acknowledgements

* Template adapted from mldangelo's [personal-site](https://github.com/mldangelo/personal-site)
