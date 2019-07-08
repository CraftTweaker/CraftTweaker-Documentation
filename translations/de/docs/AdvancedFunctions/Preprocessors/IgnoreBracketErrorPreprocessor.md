# Klammerfehler-ignorierender Präprozessor

Dieser Präprozessor sorgt dafür, dass Klammerfehler im Skript ignoriert werden.  
Das heißt NICHT, dass dein Skript danach fehlerfrei funktioniert, es werden nur keine Fehlermeldungen mehr ausgegeben.

## Einbinden

You can call the IgnoreBracketErrors Preprocessor by placing `#ignoreBracketErrors` inside your script file.  
This Preprocessor is file-specific, so calling it on one file doesn't affect the others (at least not for what the processor's concerned.

## What it does

When the preprocessor is called on a file, all error logging on bracket errors will be supressed.  
This doesn't change the affected lines in any way, instead the only change is that your log won't contain the regarding lines.