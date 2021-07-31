::requiredMod[Botany Pots]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/botany-pots}

# [BotanyPots](https://www.curseforge.com/minecraft/mc-mods/botany-pots)

## Beschreibung
This mod adds pots that can be used to grow various types of plants. Through CraftTweaker you can add/remove crops and soil types. You can also edit the properties of the existing content.

## Pflanzen
Crops can be modified using the crop manager. To do this you will need to import the following into your script.

```zenscript
import mods.botanypots.ZenCrop;
val crops = <recipetype:botanypots:crop>;
```

### Füge eine Pflanze hinzu
To create a crop you use the create method from the manager. This method will return a ZenCrop value which you can use to do further changes.

```zenscript
// Einfacher Eintrag
// crops.create(id, seedInput, renderBlock, growthTicks, soilCategory);
val goldCrop = crops.create("examplepack:gold", <item:minecraft:gold_nugget>, <blockstate:minecraft:gold_block>, 3000, "dirt");

// Fortgeschrittener Eintrag, der mehrere Renderblöcke und Bodenkategorien hinzufügt
// crops.create(id, seedInput, renderBlockArray, growthTicks, soilCategoryArray);
val ironCrop = crops.create("examplepack:iron", <item:minecraft:iron_nugget>, [<blockstate:minecraft:iron_block>, <blockstate:minecraft:iron_ore>], 3000, ["dirt", "nether"]);
```

This crop will have no drops. You need to add some for the crop to work properly. Information about this is in the next section.

### Pflanzen ändern
To modify a crop you will need to get a ZenCrop value. This is provided when you create the crop but can also be retrieved using `crops.getCrop("cropid");`.

```zenscript
val wheat = crops.getCrop("botanypots:crops/wheat");

// Fügt eine Bodenkategorie hinzu.
wheat.addCategory("soil_category_name");

// Bodenkategorie entfernen.
wheat.removeCategory("dirt");

// Entfernt alle Bodenkategorien.
wheat.clearCategories();

// Hinzufügen neuer Drop-Einträge.
// addDrop(item, chance);
wheat.addDrop(<item:minecraft:gold_nugget>, 1); // 100% Drop-Rate
wheat.addDrop(<item:minecraft:gold_ingot>, 0.75); // 75% Drop-Rate

// addDrop(item, chance, rolls);
wheat.addDrop(<item:minecraft:iron_nugget>, 1, 4); // 100% Drop-Rate UND 4 Versuche.

// addDrop(item, chance minRolls, maxRolls);
wheat.addDrop(<item:minecraft:iron_ingot>, 0.75, 1, 5); // 75% Drop-Rate UND 1 bis 5 Versuche.

// Entfernt alle Drops.
wheat.clearDrops();

// Einen Drop entfernen.
// removeDrop(ingredientToRemove);
wheat.removeDrop(<tag:forge:seeds>);

// Lege die Wachstumsticks der Pflanze fest.
wheat.setGrowthTicks(10000);

// Setzt das Samen-Item.
wheat.setSeed(<tag:forge:seeds/wheat>);

// Legt den Anzeigeblock fest.
wheat.setDisplay(<blockstate:minecraft:gold_block>);

// Setzt die Anzeige auf mehrere Blöcke gestapelt.
wheat.setDisplay([<blockstate:minecraft:iron_block>, <blockstate:minecraft:iron_ore>]);
```

## Erden
Soils can be modified using the soil manager. To do this you will need to import the following into your script.

```zenscript
import mods.botanypots.ZenSoil;
val soils = <recipetype:botanypots:soil>;
```

### Füge einen Boden hinzu
To create a soil you use the create method from the manager. This method will return a ZenSoil value which you can use to do further changes.

```zenscript
// soils.create(id, input, renderBlock, growthModifier, category);
// Wachstum kann kleiner oder gleich 1 sein. Höher = schneller, 0 = keine Änderung.
// Kategorie kann auch ein String Array sein.
val stoneSoil = soils.create("examplepack:stone", <tag:forge:stone>, <blockstate:minecraft:stone>, 0.15, "stone");
```

### Boden ändern
To modify a crop you will need to get a ZenSoil value. This is provided when you create the soil but can also be retrieved using `soils.getSoil("soilid");`.

```zenscript
val dirt = soils.getSoil("botanypots:soils/dirt");

// Fügt eine Kategorie hinzu.
// addCategory(category);
dirt.addCategory("test");

// Entferne eine Kategorie.
// removeCategory(category);
dirt.removeCategory("dirt");

// Entfernt alle Kategorien.
// clearCategories();
dirt.clearCategories();

// Setzt den Input.
// setInput(input);
dirt.setInput(<tag:forge:stone>);

// Anzeigeblock setzen.
// setDisplay(state);
dirt.setDisplay(<blockstate:minecraft:stone>);

// Wachstumsmodifikator setzen.
// setGrowthModifier(modifier);
dirt.setGrowthModifier(0.20);
```

## Dünger
Fertilizers can be modified using the fertilizer manager. To do this you will need to import the following into your script.

```zenscript
import mods.botanypots.ZenFertilizer;
val fertilizers = <recipetype:botanypots:fertilizer>;
```

### Erstelle Düngemittel
To create a fertilizer you use the create method from the manager. This method will return a ZenFertilizer value which you can use to do further changes.

```zenscript
// fertilizers.create(id, input, ticks);
// fertilizers.create(id, input, minTicks, maxTicks);
val stickFertilizer = fertilizers.create("examplepack:test", <item:minecraft:stick>, 1000);
```

### Düngemittel ändern
To modify a fertilizer you will need to get a ZenFertilizer value. This is provided when you create the fertilizer but can also be retrieved using `fertilizers.getFertilizer("fertilizerId");`.

```zenscript
val bonemeal = soils.getFertilizer("botanypots:Düngemittel/bone_meal");

// Eingabe des Düngemittels einstellen.
// setInput(input);
bonemeal.setInput(<item:minecraft:stick>);

// Setzt den Wachstumstick.
// setGrowthAmount(ticks);
// setGrowthAmount(min, max);

bonemal.setGrowthAmoun(1200, 1500);
```
