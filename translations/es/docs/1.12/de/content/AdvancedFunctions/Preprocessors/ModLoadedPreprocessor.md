# Modbasierter Präprozessor

Dieser Präprozessor führt ein Skript nur aus, wenn eine bestimmte Mod geladen wurde.

## Einbinden

Du bindest diesen Präprozessor ein, indem du `#modloaded modID` in dein Skript schreibst, wobei `modID` für die jeweilige Mod-ID steht, auf welche du prüfen möchtest.  
Beispiel: `#modloaded minecraft`

Du kannst auch mehrere Mod-IDs gleichzeitig prüfen:  
`#modloaded minecraft tconstruct` wird nur ausgeführt, wenn Minecraft und Tinkers Construct geladen sind.

Das ganze geht auch anders herum, dass man auf eine Mod prüft, welche NICHT geladen ist: `#modloaded !tconstruct minecraft` wird nur ausgeführt, wenn Minecraft geladen und Tinkers Construct NICHT geladen ist.

## Was er tut

Wenn man diesen Präprozessor zu einem Skript hinzufügt, wird dieses Skript nur ausgeführt, wenn die spezifizierten Mods vorhanden und geladen sind.