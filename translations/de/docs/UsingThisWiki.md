# Inhalt dieses Wikis

Dieses Wiki soll einen kleinen Überblick darüber geben, wie man die verschiedenen Funktionen von CraftTweaker nutzt.  
Um alles möglichst anschaulich darzustellen, sind oft kleinere Beispiele vorhanden.

# Begriffe

Bevor wir beginnen, hier sind ein paar wichtige Begriffe, die man kennen sollte:

## ZenGetter

Mit einem "ZenGetter" kannst du von bestimmten Objekten verschiedene Informationen abrufen. Beispiel: [IItemStack](/Vanilla/Items/IItemStack/) hat einen ZenGetter mit dem Namen "displayName".   
So verwendet man einen ZenGetter:

    //objekt.zenGetter;
    <minecraft:iron_ingot>.displayName;
    

Ein ZenGetter wird immer etwas zurückliefern, in diesem Fall eine Zeichenkette ("String"), welche den Namen des Items enthält ("Iron Ingot").

## ZenSetter

Der "ZenSetter" ist sozusagen das Gegenstück des ZenGetters, mit dem ZenSetter kann man die Daten verschiedener Objekte verändern.  
Beispiel: [IItemStack](/Vanilla/Items/IItemStack/) hat auch einen ZenSetter namens "displayName". Dieser ZenSetter ist auch wieder eine Zeichenkette.

So verwendet man einen ZenSetter:

    //objekt.zenSetter = neuerWert;
    <minecraft:iron_ingot>.displayName = "Irgendein Barren";
    

Ein ZenSetter liefert nichts zurück, er verändert nur das gegebene Objekt.

## Zuweisungsoperatoren

If an item has both, a ZenGetter and a ZenSetter with the same name (e.g. [IItemStack's](/Vanilla/Items/IItemStack/) "displayName"), you can use the assign operators other than `=`:

Depending on the type you can use these: `&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
Let's see what they do:

    //Since we have a ZenGetter and a ZenSetter with the same name, the first does the same as the second:
    //object.zenSetter += value;
    //object.zenSetter = object.zenGetter + value;
    
    <minecraft:iron_ingot>.displayName += " of Doom";
    <minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + " of Doom";