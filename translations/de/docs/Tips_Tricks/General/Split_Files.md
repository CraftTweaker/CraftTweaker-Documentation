# Teile deine Skripte in mehrere Dateien

Es ist eine gute Idee, Ihr Skript in mehrere Dateien aufzuteilen

## Problem

- Wenn Sie Skripte für größere Mods schreiben, könnte Ihr Skript bald ziemlich lang und verwirrend werden.
- Das Debuggen eines langen Skripts kann sehr lange dauern, insbesondere wenn Sie einen Fehler haben, der nicht auf eine bestimmte Zeile in Ihrem Skript hinweist.

## Was wir wissen/wissen müssen

- CraftTweaker kann Dateien aus mehreren Skriptdateien laden.
- CraftTweaker kann sogar Dateien in Unterordnern laden.
- Außerdem kann CraftTweaker .zip-Dateien laden, die .zs-Skripte enthalten, solange die .zip-Datei nicht passwortgeschützt ist.

## Lösung

- Teile deine großen Skripte in mehrere kleinere Skripte.
- Sie könnten zum Beispiel ein Skript für jeden Mod oder jeden Mod-Handler erstellen.

## Beispiel

```zenscript
Skripte
    thermalExpansion
        Compactor.zs
        Crucible.zs
    Vanilla
        Rezepte
            Remove.zs
            Shaped.zs
            Shapeless.zs
        Seeds.zs
    oreDict.zs
```

## Vorteile

- Ihre Skriptdateien werden einfacher zu debuggen.
- Ein Fehler wird nicht das ganze Skript daran hindern, zu arbeiten, sondern nur einen kleinen Teil davon.
- Leute, die Ihre Skriptdateien überprüfen, können sich leichter orientieren

## Nachteile

- Sie müssen mit der Ladeordnung der Skripte vorsichtig sein (besonders wenn ein Skript ein Rezept entfernt und ein anderes es hinzufügt). Überprüfen Sie den [Prioritäts-Präprozessor](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) wenn Ihre Skript-Ladebestellung ein Problem ist
- Es gibt viele Möglichkeiten, Ihre Skripte zu kategorisieren und Ihre können für Außenstehende verwirrend sein.