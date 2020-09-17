# Robotisches Montagesystem

Das Robotic Assembly System ist ein Multiblock bestehend aus Montagekontrolleur, I/O-Einheiten, Montageplattform, Montagelaser und Montagebohr. Es wandelt Eingabeelemente in Ausgangselemente mit dem Laser und/oder Bohrer um.

Es gibt verschiedene Funktionen zum Hinzufügen und Entfernen von Rezepten, je nachdem, ob das Rezept den Laser, den Bohrer oder beides benötigt.

## Anruf

Sie können das Assembly Paket mit `mods.pneumaticcraft.assembly` anrufen.

## Entfernen

Diese Funktionen entfernen das erste Rezept, das sie mit dem angegebenen [IItemStack finden](/Vanilla/Items/IItemStack/) `Ausgabe`:

```zenscript
mods.pneumaticcraft.assembly.removeLaserRecipe(IItemStack output);
mods.pneumaticcraft.assembly.removeDrillRecipe(IItemStack output);
mods.pneumaticcraft.assembly.removeDrillLaserRecipe(IItemStack output);

// Examples
mods.pneumaticcraft.assembly.removeLaserRecipe(<pneumaticcraft:aphorism_tile>);
mods.pneumaticcraft.assembly.removeDrillRecipe(<pneumaticcraft:pressure_chamber_valve>);
```

Diese Funktionen entfernen *alle* Rezepte, die derzeit für das Assembly-System definiert sind:

```zenscript
mods.pneumaticcraft.assembly.removeAllLaserRecipes();
mods.pneumaticcraft.assembly.removeAllDrillRecipes();
mods.pneumaticcraft.assembly.removeAllDrillLaserRecipes();
```

## Hinzufügen

Diese Funktionen werden verwendet, um neue Rezepte für das Montagesystem hinzuzufügen:

```zenscript
mods.pneumaticcraft.assembly.addLaserRecipe(IItemStack input, IItemStack output)
mods.pneumaticcraft.assembly.addDrillRecipe(IItemStack input, IItemStack output)
mods.pneumaticcraft.assembly.addDrillLaserRecipe(IItemStack input, IItemStack output)

// Examples
mods.pneumaticcraft.assembly.addLaserRecipe(<pneumaticcraft:ingot_iron_compressed> * 2, <pneumaticcraft:compressed_iron_gear>);
```