# Über Präprozessoren

## Was sind Präprozessoren?
As the name suggests, preprocessors are executed before the script is executed.  
They can perform various actions like enabling Debug Mode or Supress Bracket Errors.

## Einen Präprozessor einbinden
A preprocessor can be called using the #comment function.  
Be careful with the comments though as you might start one with a preprocessor keyword.

```zenscript
#debug ist mein Lieblingswort und ich würde es am allerliebsten überall als Kommentar einfügen
```

↑ Würde den Debug-Modus aktivieren, da das `#debug`-Schlüsselwort gefunden wurde. Wenn du dies möglichst verhindern möchtest, empfehlen wir dir, deine Kommentare mit `//` zu starten.