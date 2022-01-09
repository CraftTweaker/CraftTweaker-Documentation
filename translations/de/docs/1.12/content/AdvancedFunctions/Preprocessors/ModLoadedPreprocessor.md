# Modbasierter Präprozessor

Dieser Präprozessor führt ein Skript nur aus, wenn eine bestimmte Mod geladen wurde.

## Einbinden
You call the modLoaded Preprocessor by adding `#modloaded modID` to your script file, with `modID` being the modId you want to check for:  
Example: `#modloaded minecraft`

You can also provide multiple modID's:  
`#modloaded minecraft tconstruct` will only be executed if minecraft AND tconstruct are loaded.

Das ganze geht auch anders herum, dass man auf eine Mod prüft, welche NICHT geladen ist: `#modloaded !tconstruct minecraft` wird nur ausgeführt, wenn Minecraft geladen und Tinkers Construct NICHT geladen ist.

## Was er tut
Wenn man diesen Präprozessor zu einem Skript hinzufügt, wird dieses Skript nur ausgeführt, wenn die spezifizierten Mods vorhanden und geladen sind.