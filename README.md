# This branch is deprecated!
Please target https://github.com/CraftTweaker/CraftTweaker-Documentation/tree/main instead

# CraftTweaker-Documentation
Documentation for CraftTweaker

This is the source code for the documentation, you can find the actual site and documentation [here](http://docs.blamejared.com)


### Setup:

```
git submodule init 
git submodule update
npm install
cd Docs-Site/
npm install
```

### Serve:

```
npm run-script serve
```

### Build

Will move the files into `build/` in subfolders that the Docs-Site expects them in
```
npm run-script build
```

### Testing:

Will check all the links on the markdown making sure they link to valid locations
```
npm run-script test
```
