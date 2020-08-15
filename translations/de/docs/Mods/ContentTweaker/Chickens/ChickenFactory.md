# ChickenFactory

Mit der ChickenFactory kannst du eigene [Hühner](/Mods/ContentTweaker/Chickens/ChickenRepresentation/) im Spiel erstellen.  
Beachten Sie, dass dieses Modul eine zusätzliche Funktion zum [Hühner Mod von setycz](https://minecraft.curseforge.com/projects/chickens)ist, so dass dieses Modul nur verfügbar ist, wenn dieser Mod geladen ist.

## Dieses Paket importieren

```zenscript
import mods.contenttweaker.ChickenFactory;
```

## Hühner erstellen

Zuerst musst du eine [Hühnervertretung](/Mods/ContentTweaker/Chickens/ChickenRepresentation/)erstellen.  
Dies ist im Wesentlichen eine leere Vorlage, was Ihr Huhn werden wird.  
Diese Methode gibt ein solches [Hühnerrepräsentation](/Mods/ContentTweaker/Chickens/ChickenRepresentation/) Objekt zurück, indem Sie die folgenden Parameter verwenden:

- String-Name: der Entitätsname des Hühners, der für Modelle und die Entitätsregister verwendet wird.
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) Farbe: Die Farbe, das Huhn wird haben.
- [IItemStack](/Vanilla/Items/IItemStack/) layedItem: Das Item das das Hühnchen später lagert.

```zenscript
ChickenFactory.createChicken(String Name, CTColor Farbe, IItemStack Item);
```

## Skript-Beispiel

```zenscript
#loader contenttweaker
#modloaded Hühner

import mods.contenttweaker.ChickenFactory;
import mods.contenttweaker.Color;


val chickenRepresentation = ChickenFactory.createChicken("bedrocked_chicken", Color.fromInt(0xffffffffffffffff), <item:minecraft:bedrock>);

chickenRepresentation.setForegroundColor(Color.fromInt(0xabcdef));

chickenRepresentation.register();
```