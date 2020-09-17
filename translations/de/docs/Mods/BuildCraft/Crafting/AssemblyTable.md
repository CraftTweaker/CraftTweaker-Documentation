# Baugruppentisch

*Erfordert BuildCraft Silizium*

Klassenpfad: `mods.buildcraft.AssemblyTable`

## Benutzen

Importieren Sie die Klasse mit `importieren Sie mods.buildcraft.AssemblyTable;` am Anfang Ihres Skripts.

## Rezept hinzufügen

`AssemblyTable.addRecipe(recipeName, Ausgabe, Leistung, Eingabe);`

- `recipeName` (optional) &lt;string> Der Name des Rezeptes. *Muss einzigartig sein!*
- `output` <[IItemStack](/vanilla/api/items/IItemStack)>
- `Leistung` &lt;int> Gesamtstromkosten in MJ
- `inputs` <[IIngredient](/vanilla/api/items/IIngredient)[]>

```zenscript
importieren mods.buildcraft.AssemblyTable;

AssemblyTable.addRecipe("example_recipe_for_diamonds", <minecraft:diamond>, 1000, [<minecraft:coal_block>, <minecraft:redstone>]);
```

## Rezept entfernen

`AssemblyTable.removeByName(name);`

- `recipeName` &lt;string> Der Name des Rezeptes.

```zenscript
importieren mods.buildcraft.AssemblyTable;

AssemblyTable.removeByName("buildcraftsilicon:redstone_chipset");
```

## Bestehende Rezepte

### Chipsätze:

- `buildcraftsilicon:redstone_Chipsatz`
- `buildcraftsilicon:iron_chipset`
- `buildcraftsilicon:gold_chipset`
- `buildcraftsilicon:quartz_Chipsatz`
- `buildcraftsilicon:diamond_Chipsatz`

### Pluggables:

- `buildcraftsilicon:plug_pulsar`
- `buildcraftsilicon:light-sensor`
- `buildcrafttransport:facaderecipes`

### Linsen:

- `buildcraftsilicon:lens-regulär`
- `buildcraftsilicon:lens-filter`
- `buildcraftsilicon:lens-normal-<color>`
- `buildcraftsilicon:lens-filter-<color>`

*Ersetzen Sie `<color>` durch eines der folgenden: `weiß`, `orange`, `magenta`, `hellblau`, `gelb`, `Kalk`, `rosa`, `grau`, `silber`, `cyan`, `lila`, `Blau`, `braun`, `Grün`, `Rot`, `Schwarz`*

### Wires:

- `buildcrafttransport:wire-<color>`

*Ersetzen Sie `<color>` durch eines der folgenden: `weiß`, `orange`, `magenta`, `hellblau`, `gelb`, `Kalk`, `rosa`, `grau`, `silber`, `cyan`, `lila`, `Blau`, `braun`, `Grün`, `Rot`, `Schwarz`*

### Tore:

- `buildcraftsilicon:gate-<operation>-<material>-no_modifier`
- `buildcraftsilicon:gate-modifier-<operation>-<material>-<modifier>`

Parameter:

- `<operation>`: `und` oder `oder`
- `<material>`: `Eisen`, `nether_brick`, oder `Gold`
- `<modifier>`: `Lapis`, `Quarz`, oder `Diamant`
