# Klammerfehler-ignorierender Präprozessor

Dieser Präprozessor sorgt dafür, dass Klammerfehler im Skript ignoriert werden.  
Das heißt NICHT, dass dein Skript danach fehlerfrei funktioniert, es werden nur keine Fehlermeldungen mehr ausgegeben.

## Einbinden

Du bindest diesen Präprozessor ein, indem du `#ignoreBracketErrors` in dein Skript schreibst.  
Dieser Präprozessor betrifft nur die Dateien, in welchem dieser eingebunden wurde. Er wirkt sich somit nicht auf andere Dateien aus.

## Was er tut

Wenn dieser Präprozessor in eine Datei eingebunden ist, werden keine Klammerfehler mehr ausgegeben.  
Das wirkt sich nicht auf eventuell vorhandene Klammerfehler aus, die müssen schon selbst ausgebessert werden.