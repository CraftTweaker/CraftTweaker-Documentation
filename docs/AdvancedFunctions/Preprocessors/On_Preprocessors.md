# On Preprocessors

## What are preprocessors
As the name suggests, preprocessors are executed before the script is executed.  
They can perform various actions like enabling Debug Mode or Supress Bracket Errors.

## Calling a preprocessor
A preprocessor can be called using the #comment function.  
Be careful with the comments though as you might start one with a preprocessor keyword.  

```JAVA
#debug is my favorite word I like to add it everywhere as a comment
```

↑ Would enable debug mode as `#debug` is found. If you really want to ensure such a rare case doesn't happen, use `//` for comments.