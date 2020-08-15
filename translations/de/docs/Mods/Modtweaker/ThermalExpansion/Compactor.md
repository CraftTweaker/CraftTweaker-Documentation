# Compactor

## Paket

`mods.thermalexpansion.Compactor`

Der Komaktor unterstützt 4 Typen von Modifikatoren:

    Mint
    drücke
    Speicher
    Ausrüstung
    

## Minze

Der Minzen-Modifikator ändert die Rezepte, die in der Rezeptkarte `COIN` registriert sind, in der Thermische Expansion.

Beachten Sie, dass für diese Rezepte die Numismatische Presserweiterung erforderlich ist.

### Addition

```zenscript
mods.thermalexpansion.Compactor.addMintRecipe(IItemStack-Ausgabe, IItemStack-Eingabe, Inten);

mods.thermalexpansion.Compactor.addMintRecipe(<minecraft:sand>, <minecraft:stick>, 1500);
```

### Entfernen

```zenscript
mods.thermalexpansion.Compactor.removeMintRecipe(IItemStack Eingang);

mods.thermalexpansion.Compactor.removeMintRecipe(<thermalfoundation:material:167>);
```

## Drücken

Der Press-Modifikator ändert die Rezepte, die nicht im `PLATE`registriert sind, `COIN`, oder `GEAR` Rezeptkarten in der Thermal Expansion.

Diese Rezepte erfordern keine spezielle Augment.

### Addition

```zenscript
mods.thermalexpansion.Compactor.addPressRecipe(IItemStack-Ausgabe, IItemStack-Eingabe, Inten);

mods.thermalexpansion.Compactor.addPressRecipe(<minecraft:sand>, <minecraft:apple>, 1500);
```

### Entfernen

```zenscript
mods.thermalexpansion.Compactor.removePressRecipe(IItemStack Eingang);

mods.thermalexpansion.Compactor.removePressRecipe(<thermalfoundation:material:167>);
```

## Speicher

Der Speicher-Modifikator ändert die Rezepte, die in der Rezeptkarte `PLATE` registriert sind, in der Thermische Erweiterung.

Diese Rezepte erfordern keine spezielle Augment, und scheinen nur für Platten verwendet werden.

### Addition

```zenscript
mods.thermalexpansion.Compactor.addStorageRecipe(IItemStack-Ausgabe, IItemStack-Eingabe, Inten);

mods.thermalexpansion.Compactor.addStorageRecipe(<minecraft:sand>, <minecraft:arrow>, 1500);
```

### Entfernen

```zenscript
mods.thermalexpansion.Compactor.removeStorageRecipe(IItemStack Eingang);

mods.thermalexpansion.Compactor.removeStorageRecipe(<thermalfoundation:material:167>);
```

## Ausrüstung

Der Ausrüstungsmodifikator ändert die Rezepte, die in der Rezeptkarte `GEAR` registriert sind, in der Thermische Erweiterung.

Beachten Sie, dass diese Rezepte die Gearworking Die Augment erfordern.

### Addition

```zenscript
mods.thermalexpansion.Compactor.addGearRecipe(IItemStack-Ausgabe, IItemStack-Eingabe, Inten);

mods.thermalexpansion.Compactor.addGearRecipe(<minecraft:sand>, <minecraft:arrow>, 1500);
```

### Entfernen

```zenscript
mods.thermalexpansion.Compactor.removeGearRecipe(IItemStack Eingang);

mods.thermalexpansion.Compactor.removeGearRecipe(<thermalfoundation:material:167>);
```