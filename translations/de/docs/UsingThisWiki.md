# Inhalt dieses Wikis

Dieses Wiki soll einen kleinen Überblick darüber geben, wie man die verschiedenen Funktionen von CraftTweaker nutzt.  
Um alles möglichst anschaulich darzustellen, sind oft kleinere Beispiele vorhanden.

# Begriffe

Bevor wir beginnen, hier sind ein paar wichtige Begriffe, die man kennen sollte:

## ZenGetter

Mit einem "ZenGetter" kannst du von bestimmten Objekten verschiedene Informationen abrufen. Beispiel: [IItemStack](/Vanilla/Items/IItemStack/) hat einen ZenGetter mit dem Namen "displayName".   
Ein ZenGetter wird so benutzt:

    //objekt.zenGetter;
    <minecraft:iron_ingot>.displayName;
    

Ein ZenGetter wird immer etwas zurückliefern, in diesem Fall eine Zeichenkette ("String"), welche den Namen des Items enthält ("Iron Ingot").

## ZenSetter

A ZenSetter works almost the same way as a ZenGetter does, the only difference is that a ZenSetter sets, a ZenGetter gets.  
Let's stay with our [IItemStack](/Vanilla/Items/IItemStack/), since it also has a ZenSetter called "displayName". We know from the entry that it is of type string.

We use the ZenSetter like this:

    //object.zenSetter = newValue;
    <minecraft:iron_ingot>.displayName = "Unsuspecting Ingot";
    

A ZenSetter will never return something, since it is meant to set, not to get.

## Assign operators

If an item has both, a ZenGetter and a ZenSetter with the same name (e.g. [IItemStack's](/Vanilla/Items/IItemStack/) "displayName"), you can use the assign operators other than `=`:

Depending on the type you can use these: `&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
Let's see what they do:

    //Since we have a ZenGetter and a ZenSetter with the same name, the first does the same as the second:
    //object.zenSetter += value;
    //object.zenSetter = object.zenGetter + value;
    
    <minecraft:iron_ingot>.displayName += " of Doom";
    <minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + " of Doom";