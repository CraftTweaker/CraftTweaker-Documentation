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

Wenn ein Item sowohl einen ZenGetter als auch einen ZenSetter mit dem gleichen Namen hat (wie [IItemStack](/Vanilla/Items/IItemStack/) mit "displayName"), kann man auch andere Operatoren als `=` verwenden.

Je nach Fall, kann man einen dieser Operatoren nutzen: `&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
Schauen wir, was die jeweiligen Operatoren bedeuten:

    //Da wir einen ZenSetter und einen ZenGetter mit dem gleichen Namen haben, verhalten sich die beiden folgenden Zeilen identisch:
    //objekt.zenSetter += wert;
    //objekt.zenSetter = objekt.zenGetter + wert;
    
    <minecraft:iron_ingot>.displayName += " des Todes";
    <minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + " des Todes";