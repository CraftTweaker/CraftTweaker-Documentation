# Kessel

Das Kessel Paket wird zum Hinzufügen/Entfernen von Rezepten für den Kessel verwendet. Beachten Sie, dass, wenn der Kessel auf `einfach` in der Konfiguration gesetzt ist, nur Rezepte mit Wasser können hergestellt werden, aber alle Rezepte werden immer noch in JEI angezeigt.

## Anruf

Sie können das Cauldron Paket mit `mods.inspirations.Cauldron` aufrufen

## Flüssigkeit

Inspirationen beinhalten drei Arten von Rezepten mit Flüssigkeiten: Eine, um Gegenstände mit Flüssigkeiten zu verwandeln Eine, die eine Flüssigkeit mit einem Gegenstand transformieren und die, die mit einem Gegenstand mit einer Flüssigkeit füllen können. Während alle Handler einen Flüssigkeitsstapel annehmen, wirkt sich nur der Flüssigkeitstyp auf das Rezept aus. Inspirationen Kessel verwenden das Vanille-System von drei Flaschen in einem Kessel so dass die Mengen in einem anderen Parameter behandelt werden.

### Flüssiges Hinzufügen

Fügt ein Rezept hinzu, das den Eingangsgegenstand mit Hilfe der Flüssigkeit zum Ausgangsgegenstand konvertiert.

* Eingabegegenstände unterstützen Stapelgrößen, um eine bestimmte Größe des gehaltenen Stapels zu erfordern.
* Stufen bestimmen, wie viele Stufen vom Rezept verbraucht werden. Unterstützt 0-3, standardmäßig 1
* Das Kochen bestimmt, ob der Kessel für das Rezept über dem Feuer platziert werden muss. Kann wahr sein um es zu erfordern, falsch um kein Feuer zu haben, oder null (Standard) um es zu ignorieren.

```zenscript
//mods.inspirations.Cauldron.addFluidRecipe(IItemStack Output, IIngredient Input, ILiquidStack fluid, @Optional int levels, @Optional boolean boiling);
mods.inspirations. auldron.addFluidRecipe(<minecraft:blaze_rod>, <minecraft:blaze_powder> * 2, <liquid:lava>);
mods.inspirations.Cauldron.addFluidRecipe(<minecraft:water_bucket>, <minecraft:ice>, <liquid:lava>, 1, true);
```

### Flüssigkeitsentfernung

Entfernt ein vorhandenes flüssiges Rezept aus dem Kessel.

```zenscript
//mods.inspirations.Cauldron.removeFluidRecipe(IIngredient output, @Optional IIngredient input, @Optional ILiquidStack fluid)
mods.inspirations.Cauldron.removeFluidRecipe(<minecraft:beetroot_soup>);
```

### Flüssigkeits-Transformation hinzufügen

Fügt ein Rezept hinzu, das die Flüssigkeit mit Hilfe des Gegenstands zur Ausgangsflüssigkeit konvertiert.

* Eingabegegenstände unterstützen Stapelgrößen, um eine bestimmte Größe des gehaltenen Stapels zu erfordern.
* Max. Level bestimmt die maximale Menge an Flüssigkeit, die für diese Transformation erlaubt ist. Wird verwendet, um Rezepten eine billigere Version zu erlauben, wenn der Kessel weniger Flüssigkeit enthält.
* Das Kochen bestimmt, ob der Kessel für das Rezept über dem Feuer platziert werden muss. Kann wahr sein um es zu erfordern, falsch um kein Feuer zu haben, oder null (Standard) um es zu ignorieren.

```zenscript
//mods.inspirations.Cauldron.addFluidTransform(ILiquidStack output, IIngredient input, ILiquidStack fluid, @Optional int maxLevels, @Optional boolean boiling);
mods.inspirations.Cauldron.addFluidTransform(<liquid:lava>, <minecraft:blaze_powder>, <liquid:water>, 2, false);
```

### Fluid Transformationsentfernung

Entfernt ein vorhandenes flüssiges Rezept aus dem Kessel. Die Ausgabe ist `IIngredient` unterstützt aber nur einen Flüssigkeitsstapel oder Platzhalter.

```zenscript
//mods.inspirations.Cauldron.removeFluidTransform(IIngrediente Ausgabe, [IIngrediente Eingabe, [IFluidStack Fluid]]);
mods.inspirations.Cauldron.removeFluidTransform(<liquid:beetroot_soup>, <minecraft:beetroot>, <liquid:water>);
```

### Füllen Sie Rezept hinzufügen

Fügt ein Rezept hinzu, das den Kessel mit dem mitgelieferten Flüssigkeit füllt.

* Eingabegegenstände unterstützen Stapelgrößen, um eine bestimmte Größe des gehaltenen Stapels zu erfordern.
* Level bestimmen, wieviel das Rezept den Kessel füllt. Standardmäßig 1 wenn nicht angegeben.
* Der Container bestimmt den zurückgegebenen Gegenstand, nachdem er dieses Rezept ausgeführt hat. Wird keine geliefert, wird standardmäßig nichts zurückgegeben.

```zenscript
//mods.inspirations.Cauldron.addFillRecipe(IIngredient input, ILiquidStack fluid, @Optional IItemStack container);
mods.inspirations.Cauldron.addFillRecipe(<ore:gemDiamond>, <liquid:water>, 2, <minecraft:emerald>);
mods.inspirations.Cauldron.addFillRecipe(<minecraft:emerald>, <liquid:lava>);
```

### Rezeptentfernung füllen

Entfernt ein vorhandenes Füllrezept aus dem Kessel.

```zenscript
//mods.inspirations.Cauldron.removeFillRecipe(IIngredient input, @Optional ILiquidStack fluid);
mods.inspirations.Cauldron.removeFillRecipe(<minecraft:beetroot_soup>);
mods.inspirations.Cauldron.removeFillRecipe(<*>, <liquid:mushroom_stew>);
```

## Brauen und Tränke

Inspirationen bieten zwei Arten von Trank Rezepten mit Tränken an: Braue Rezepte, die einen Trank von einem Typ in einen anderen verwandeln und Trankrezepte, die einen Gegenstand mit einem Trank ändern.

Da die Rezepte `Trank Typ`statt `Trank`direkt übernehmen, sind Trank Parameter Zeichen. Eine Liste aller Trank Typen kann mit dem Befehl `/ct Inspirations Tränke` abgerufen werden.

### Brauen hinzufügen

Fügt mit Hilfe des Reagenten ein Rezept hinzu, das den Eingangstrank zum Ausgangstrank konvertiert.

```zenscript
//mods.inspirations.Cauldron.addBrewingRecipe(String Output, String Input, IIngredient Reagent);
mods.inspirations.Cauldron.addBrewingRecipe("minecraft:invisibility", "minecraft:thick", <minecraft:diamond>);
mods.inspirations.Cauldron.addBrewingRecipe("minecraft:healing", "minecraft:thick", <ore:gemEmerald>);
```

### Brauentfernung

Entfernt ein bestehendes Braurezept aus dem Kessel. Sowohl Eingabe als auch Ausgabe können auf Null gesetzt werden, um als Platzhalter zu fungieren.

```zenscript
//mods.inspirations.Cauldron.removeBrewingRecipe(String output, @Optional String input, @Optional IIngredient Reagent);
mods.inspirations.Cauldron.removeBrewingRecipe("inspirations:haste");
mods.inspirations.Cauldron.removeBrewingRecipe("minecraft:awkward", "minecraft:water", <minecraft:nether_wart>);
```

### Trankrezept hinzufügen

Fügt mithilfe des Tranks ein Rezept hinzu, das den Eingangsgegenstand zum Ausgabegegenstand konvertiert.

* Stufen bestimmen, wie viele Stufen vom Rezept verbraucht werden. Unterstützt 0-3, standardmäßig 1
* Das Kochen bestimmt, ob der Kessel für das Rezept über dem Feuer platziert werden muss. Kann wahr sein um es zu erfordern, falsch um kein Feuer zu haben, oder null (Standard) um es zu ignorieren.

```zenscript
//mods.inspirations.Cauldron.addPotionRecipe(IItemStack Output, IIngredient Input, String Potion, @Optional int levels, @Optional boolean boiling);
mods.inspirations.Cauldron.addPotionRecipe(<minecraft:golden_apple>, <minecraft:apple>, "minecraft:regeneration", 2); 
```

### Trank Rezept entfernen

Entfernt ein existierendes Trankrezept aus dem Kessel. Standardmäßig gibt es keine Trankrezepte, aber Addons können ein Rezept hinzufügen.

```zenscript
//mods.inspirations.Cauldron.removePotionRecipe(IIngredient Output, @Optional IIngredient Input, @Optional String Tranction);
```

## Farbstoffe

Inspirationen bieten nur ein Farbrezept an, um einen Gegenstand mit einem Farbton zu verwandeln. Farbstoffe nehmen eine Stringfarbe an, die einen Wert von `EnumDyeColor` repräsentiert. Um eine Liste aller Werte zu erhalten, wird der Befehl `/ct Inspirations Farbstoffe` angegeben.

### Hinzufügen

Fügt ein Rezept hinzu, bei dem der Eingriff mit dem Farbstoff verbraucht wird, der nur gefärbtes Wasser verbraucht.

```zenscript
//mods.inspirations.Cauldron.addDyeRecipe(IItemStack Output, IIngredient Input, String dye);
mods.inspirations.Cauldron.addDyeRecipe(<minecraft:diamond>, <minecraft:emerald>, "blue");
mods.inspirations.Cauldron.addDyeRecipe(<minecraft:emerald>, <minecraft:diamond>, "lime");
```

### Entfernen

Entfernt ein vorhandenes Farbrezept aus dem Kessel.

```zenscript
//mods.inspirations.Cauldron.removeDyeRecipe(IIngredient output, @Optional IIngredient input, @Optional String dye)
mods.inspirations.Cauldron.removeDyeRecipe(<*>, <*>, "blue");
mods.inspirations.Cauldron.removeDyeRecipe(<inspirations:carpeted_trapdoor_white>);
```