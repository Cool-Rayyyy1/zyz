# Yunzhe Zhang — Personal Homepage

Website: https://cool-rayyyy1.github.io/zyz/

## Edit content
- Biography: index.md
- News: _includes/news.md
- Papers: _data/publications.yml
- Education, teaching, work: corresponding files in _includes/
- Contact and website settings: _config.yml
- Portrait and logos: assets/img/
- CV: assets/cv/cv_yunzhe.pdf

## Preview locally
With Ruby 3.3 and Bundler installed:

    bundle install
    bundle exec jekyll serve

Open http://localhost:4000/zyz/.

## Deployment
Changes pushed to main build with Jekyll and deploy through .github/workflows/pages.yml.
GitHub Settings → Pages → Source must be GitHub Actions.
The previous site remains in Git history; the new deployment replaces it at the same URL.

## Credits
Adapted from https://github.com/sethzhangjs/sethzhangjs.github.io and Minimal Light.
See LICENSE and THIRD_PARTY.md.
