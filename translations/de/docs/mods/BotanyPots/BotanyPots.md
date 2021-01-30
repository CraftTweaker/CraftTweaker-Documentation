# [BotanyPots](https://www.curseforge.com/minecraft/mc-mods/botany-pots)

## Beschreibung
Dieser Mod fügt Töpfe hinzu, die verwendet werden können, um verschiedene Arten von Pflanzen anzubauen. Durch CraftTweaker kannst du Pflanzen und Bodentypen hinzufügen/entfernen. Sie können auch die Eigenschaften des vorhandenen Inhalts bearbeiten.

## Pflanzen
Die Zubereitung kann mit Hilfe des Crop Managers verändert werden. Um dies zu tun, müssen Sie folgendes in Ihr Skript importieren.

```zenscript
import mods.botanypots.ZenCrop;
val crops = <recipetype:botanypots:crop>;
```

### Füge eine Pflanze hinzu
Um eine Pflanze hinzuzufügen, verwende die Erstellungsmethode aus dem Manager. Diese Methode gibt einen ZenCrop-Wert zurück, den Sie verwenden können, um weitere Änderungen vorzunehmen.

```zenscript
// Einfacher Eintrag
// crops.create(id, seedInput, renderBlock, growthTicks, soilCategory);
val goldCrop = crops.create("examplepack:gold", <item:minecraft:gold_nugget>, <blockstate:minecraft:gold_block>, 3000, "dirt");

// Fortgeschrittener Eintrag, der mehrere Renderblöcke und Bodenkategorien hinzufügt
// crops.create(id, seedInput, renderBlockArray, growthTicks, soilCategoryArray);
val ironCrop = crops.create("examplepack:iron", <item:minecraft:iron_nugget>, [<blockstate:minecraft:iron_block>, <blockstate:minecraft:iron_ore>], 3000, ["dirt", "nether"]);
```

Diese Pflanze hat keine Drops. Sie müssen eine hinzufügen, damit es richtig funktioniert. Informationen dazu finden Sie im nächsten Abschnitt.

### Pflanzen ändern
Um eine Pflanze ändern zu können, benötigen wir den ZenCrop-Wert. Dies wird zur Verfügung gestellt, wenn Sie die Pflanze hinzufügen, kann aber auch mit `crops.getCrop("cropid");` abgerufen werden.

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
Die Böden können mit Hilfe des Bodenverwalters modifiziert werden. Um dies zu tun, müssen Sie folgendes in Ihr Skript importieren.

```zenscript
import mods.botanypots.ZenSoil;
val soils = <recipetype:botanypots:soil>;
```

### Füge einen Boden hinzu
Um einen Boden hinzuzufügen, verwende die Erstellungsmethode aus dem Manager. Diese Methode gibt einen ZenSoil-Wert zurück, den Sie verwenden können, um weitere Änderungen vorzunehmen.

```zenscript
// soils.create(id, input, renderBlock, growthModifier, category);
// Wachstum kann kleiner oder gleich 1 sein. Höher = schneller, 0 = keine Änderung.
// Kategorie kann auch ein String Array sein.
val stoneSoil = soils.create("examplepack:stone", <tag:forge:stone>, <blockstate:minecraft:stone>, 0.15, "stone");
```

### Boden ändern
Um einen Boden ändern zu können, benötigen wir den ZenSoil-Wert. Dies wird bei der Erstellung des Bodens zur Verfügung gestellt, kann aber auch mit `soils.getSoil("soilid") abgerufen werden.`.

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
Düngemittel können mit Hilfe des Düngemittelmanagers modifiziert werden. Um dies zu tun, müssen Sie folgendes in Ihr Skript importieren.

```zenscript
import mods.botanypots.ZenFertilizer;
val fertilizers = <recipetype:botanypots:fertilizer>;
```

### Erstelle Düngemittel
Um einen Dünger hinzuzufügen, verwende die Erstellungsmethode aus dem Manager. Diese Methode gibt einen ZenFertilizer-Wert zurück, mit dem Sie weitere Änderungen vornehmen können.

```zenscript
// fertilizers.create(id, input, ticks);
// fertilizers.create(id, input, minTicks, maxTicks);
val stickFertilizer = fertilizers.create("examplepack:test", <item:minecraft:stick>, 1000);
```

### Düngemittel ändern
Um einen Dünger zu modifizieren, benötigen wir den ZenFertilizer-Wert. Dies wird zur Verfügung gestellt, wenn du den Dünger erstellst, aber auch mit `fertilizers.getFertilizer("fertilizerId");`.

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
