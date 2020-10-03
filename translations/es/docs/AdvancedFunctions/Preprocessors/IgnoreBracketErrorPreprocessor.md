# Ignore Bracket Errors Preprocessor

This Preprocessor sets your script to ignore backet errors.  
This DOES NOT in any way, shape or form magically correct your script, it supresses the error log.

## Call

You can call the IgnoreBracketErrors Preprocessor by placing `#ignoreBracketErrors` inside your script file.  
This Preprocessor is file-specific, so calling it on one file doesn't affect the others (at least not for what the processor's concerned.

## What it does

When the preprocessor is called on a file, all error logging on bracket errors will be supressed.  
This doesn't change the affected lines in any way, instead the only change is that your log won't contain the regarding lines.