# Packmode Präprozessor

Der Packmode Preprocessor wird das Skript nur dann ausführen, wenn ein bestimmter Packmode in der packmode Konfigurationsdatei aktiviert ist

## Aufruf

Sie rufen den Packmode Präprozessor auf, indem Sie `#packmode mode(s)` zu Ihrer Skriptdatei hinzufügen mit `Modus(en)` ist der Paketmodus, in dem das Skript ausgeführt werden soll

## Beispiel

`#packmode normaler Experte` würde das Skript im normalen und Expertenmodus aktivieren

```zenscript
#packmode normal
importiere crafttweaker.items.IItemStack;

print("Wenn ich auf deinen CT-Logs erscheine, ist der Packmode normal aktiviert!");
```

## Was er tut

Der Prozessor lässt das Skript nur dann ausführen, wenn ein bestimmter Paketmodus aktiviert ist.