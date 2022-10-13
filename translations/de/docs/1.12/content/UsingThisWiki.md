# Inhalt dieses Wikis

This wiki is meant to provide you an outline on which Types exist in crafttweaker and what their uses are.  
There also are some examples in certain entries to provide further clarity.

# Begriffe
Bevor wir beginnen, hier sind ein paar wichtige Begriffe, die man kennen sollte:

## ZenGetter
Mit einem "ZenGetter" kannst du von bestimmten Objekten verschiedene Informationen abrufen. For example [IItemStack](/Vanilla/Items/IItemStack/) has a ZenGetter called "displayName".  
We use the ZenGetter like this:
```zenscript
//objekt.zenGetter;
<minecraft:iron_ingot>.displayName;
```

Ein ZenGetter gibt immer etwas zurück, in diesem Fall eine Zeichenkette mit dem Namen des Gegenstands ("Iron Ingot").


## ZenSetter
A ZenSetter works almost the same way as a ZenGetter does, the only difference is that a ZenSetter sets, a ZenGetter gets.  
Let's stay with our [IItemStack](/Vanilla/Items/IItemStack/), since it also has a ZenSetter called "displayName". Dieser ZenSetter ist auch wieder eine Zeichenkette.

So verwendet man einen ZenSetter:
```zenscript
//objekt.zenSetter = neuerWert;
<minecraft:iron_ingot>.displayName = "Irgendein Barren";
```

Ein ZenSetter liefert nichts zurück, er verändert nur das gegebene Objekt.


## Zuweisungsoperatoren
Wenn ein Item sowohl einen ZenGetter als auch einen ZenSetter mit dem gleichen Namen hat (wie [IItemStack](/Vanilla/Items/IItemStack/) mit "displayName"), kann man auch andere Operatoren als `=` verwenden.

Depending on the type you can use these: `&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
Let's see what they do:

```zenscript
//Da wir einen ZenSetter und einen ZenGetter mit dem gleichen Namen haben, verhalten sich die beiden folgenden Zeilen identisch:
//objekt.zenSetter += wert;
//objekt.zenSetter = objekt.zenGetter + wert;

<minecraft:iron_ingot>.displayName += " des Todes";
<minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + " des Todes";
```