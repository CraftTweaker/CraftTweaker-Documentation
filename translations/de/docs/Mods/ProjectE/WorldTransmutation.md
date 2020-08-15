# Welt-Übertragung

## hinzufügen

Fügt einen Philosophen Stein-Welt-Transmutation mit optionaler Sneak-Klick-Transmutation hinzu.

### [IItemStack](/Vanilla/Items/IItemStack/)

```zenscript
// Wenn der IItemStack keinen coresponding Block hat, wird stattdessen Luft verwendet.
mods.projecte.WorldTransmutation. dd(IItemStack Output, IItemStack Input, @Optional IItemStack sneakOutput);

// Verwandeln Sie Goldblöcke mit der rechten Maustaste in Diamantenblöcke oder durch Rechtsklick mit der rechten Maustaste 
Mods in Eisenblöcke. rojecte.WorldTransmutation.add(<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>);
```

### [IBlockState](/Vanilla/Blocks/IBlockState/)

```zenscript
mods.projecte.WorldTransmutation. dd(IBlockState Ausgabe, IBlockState Eingabe, @Optional IBlockState sneakOutput);

// Verwandeln Sie Goldblöcke mit der rechten Maustaste in Diamantenblöcke oder durch Rechtsklick mit der rechten Maustaste
Mods in Eisenblöcke. rojecte.WorldTransmutation.add(<blockstate:minecraft:diamond_block>, <blockstate:minecraft:gold_block>, <blockstate:minecraft:iron_block>);
```

## entfernen

Entfernt die Philosophen Steinwelt-Transmutationen, die den gleichen Eingang, Ausgang und SneakOutput haben.

### [IItemStack](/Vanilla/Items/IItemStack/)

```zenscript
// Wenn der IItemStack keinen coresponding Block hat, wird stattdessen Luft verwendet.
mods.projecte.WorldTransmutation.remove(IItemStack-Ausgabe, IItemStack-Eingabe, @Optional IItemStack sneakOutput);

// Entfernt das Rezept, das es erlaubt, Kopfsteinpflaster in Steine/Gras
zu wechseln. rojecte.WorldTransmutation.remove(<minecraft:stone>, <minecraft:cobblestone>, <minecraft:grass>);
```

### [IBlockState](/Vanilla/Blocks/IBlockState/)

```zenscript
mods.projecte.WorldTransmutation.remove(IBlockState Output, IBlockState Input, @Optionale IBlockState sneakOutput);

// Entfernt das Rezept, das es erlaubt, Kopfsteinpflaster in Steine/Gras
zu wechseln. rojecte.WorldTransmutation.remove(<blockstate:minecraft:stone>, <blockstate:minecraft:cobblestone>, <blockstate:minecraft:grass>); 
```

## alle entfernen

Entfernt alle Transmutationen des Philosophen Steinwelt, einschließlich aller vom Benutzer vor dem Aufruf dieser Methode.

```zenscript
mods.projecte.PhiloStone.removeAllWorldTransmutation();
```