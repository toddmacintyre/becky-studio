# Becky Stout's Dance Studio

## Deploy to GHPages
1. Remove the dist directory from the project’s .gitignore file (it’s ignored by default by Yeoman).
2. Make sure git knows about your subtree (the subfolder with your site).
`git add dist && git commit -m "Initial dist subtree commit"`
3. Use subtree push to send it to the gh-pages branch on GitHub.
`git subtree push --prefix dist origin gh-pages`
or if not the first time:
```git push origin `git subtree split --prefix dist master`:gh-pages --force```

## View Live
View the live site [here](https://toddmacintyre.github.io/becky-studio/index.html#/)

## Notes
&copy; 2018 Todd MacIntyre
