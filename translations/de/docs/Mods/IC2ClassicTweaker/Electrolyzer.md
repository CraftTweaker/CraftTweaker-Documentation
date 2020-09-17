# Elektrolyzer

## Paket

```zenscript
importieren mods.ic2.ClassicElectrolyzer;
```

## Methoden

### Beides Rezept hinzufügen

```zenscripts
mods.ic2.ClassicElectrolyzer.addBothRecipe(IItemStack-Ausgabe, IItemStack-Eingabe, Inten);

mods.ic2.ClassicElectrolyzer.addBothRecipe(<minecraft:diamond>, <minecraft:dirt> * 64, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) Eingabe** Hat ein Artikel-Stack, keine Ordikt oder andere Sachen.
- **int Energie** Gesamte eu vom Ausleitungsteil und der Gesamtenergie, die für die Ladung eines Teils des Rezeptes benötigt wird.

### Ladungsrezept hinzufügen

```zenscripts
mods.ic2.ClassicElectrolyzer.addChargeRecipe(IItemStack Ausgabe, IItemStack Eingabe, Integrierung);

mods.ic2.ClassicElectrolyzer.addChargeRecipe(<minecraft:emerald>, <minecraft:stone> * 64, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) Eingabe** Hat ein Artikel-Stack, keine Ordikt oder andere Sachen.
- **int Energie** Gesamte eu im Rezept verwendet.

### Entladerezept hinzufügen

```zenscripts
mods.ic2.ClassicElectrolyzer.addDischargeRecipe(IItemStack-Ausgabe, IItemStack-Eingabe, Inten);

mods.ic2.ClassicElectrolyzer.addDischargeRecipe(<minecraft:cobblestone> * 64, <minecraft:bedrock>, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) Eingabe** Hat ein Artikel-Stack, keine Ordikt oder andere Sachen.
- **int Energie** Total eu vom Rezept erhalten.

### Entfernen

Deaktivieren Sie einfach das entsprechende Rezept in `config/ic2/ic2machineRecipes.json`.

