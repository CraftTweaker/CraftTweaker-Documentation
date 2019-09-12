# Über Präprozessoren

## Was sind Präprozessoren?

Wie der Name es ungefähr sagt, ein Präprozessor wird aufgerufen, bevor ein Skript ausgeführt wird.  
Damit kann man das Skript beispielsweise in den Debug-Modus versetzen.

## Einen Präprozessor einbinden

Ein Präprozessor wird wie ein #Kommentar eingebunden.  
Achte darauf, dass du deine Kommentare ansonsten nicht aus Versehen mit einem Präprozessor-Schlüsselwort startest.

```zenscript
#debug ist mein Lieblingswort und ich würde es am allerliebsten überall als Kommentar einfügen
```

↑ Würde den Debug-Modus aktivieren, da das `#debug`-Schlüsselwort gefunden wurde. Wenn du dies möglichst verhindern möchtest, empfehlen wir dir, deine Kommentare mit `//` zu starten.