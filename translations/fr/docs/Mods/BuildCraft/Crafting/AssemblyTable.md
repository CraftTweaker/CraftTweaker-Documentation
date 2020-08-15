# Table d'assemblage

*Nécessite la fabrication de silicium de construction*

Chemin de classe : `mods.buildcraft.AssemblyTable`

## Utiliser

Pour l'utiliser, importez la classe avec `import mods.buildcraft.AssemblyTable ;` au début de votre script.

## Ajout d'une recette

`AssemblyTable.addRecipe(recetteNom, sortie, puissance, entrées) ;`

- `recetteName` (facultatif) &lt;chaîne> Le nom de la recette. *Doit être unique !*
- `output` <[IItemStack](/vanilla/api/items/IItemStack)>
- `puissance` &lt;int> coût d'énergie totale en MJ
- `inputs` <[IIngredient](/vanilla/api/items/IIngredient)[]>

```zenscript
Importer mods.buildcraft.Table d'assemblage ;

AssemblyTable.addRecipe("example_recipe_for_diamants", <minecraft:diamond>, 1000, [<minecraft:coal_block>, <minecraft:redstone>]);
```

## Suppression d'une recette

`AssemblyTable.removeByName(name);`

- `recipeName` &lt;chaîne> Le nom de la recette.

```zenscript
Importer mods.buildcraft.AssemblyTable;

AssemblyTable.removeByName("buildcraftsilicon:redstone_chipset");
```

## Recettes existantes

### Chipsets :

- `buildcraftsilicon:redstone_chipset`
- `buildcraftsilicon:iron_chipset`
- `buildcraftsilicon:gold_chipset`
- `buildcraftsilicon:quartz_chipset`
- `format@@0 buildcraftsilicon:diamond_chipset`

### Plug-in :

- `format@@0 buildcraftsilicon:plug_pulsar`
- `buildcraftsilicon:capteur de lumière`
- `buildcrafttransport:facaderecipes`

### Lentilles:

- `buildcraftsilicon: lentilles normales`
- `buildcraftsilicon:lentilles-filtre`
- `buildcraftsilicon:lentilles-réguliers-<color>`
- `buildcraftsilicon:lentilles-filter-<color>`

*Remplacez `<color>` par l'un des suivants : `blanc`, `orange`, `magenta`, `bleu clair`, `jaune`, `chaux`, `rose`, `gris`, `argent`, `cyan`, `violet`, `bleu`, `marron`, `vert`, `rouge`, `noir`*

### Fil :

- `buildcrafttransport:wire-<color>`

*Remplacez `<color>` par l'un des suivants : `blanc`, `orange`, `magenta`, `bleu clair`, `jaune`, `chaux`, `rose`, `gris`, `argent`, `cyan`, `violet`, `bleu`, `marron`, `vert`, `rouge`, `noir`*

### Portes :

- `buildcraftsilicon:gate-<operation>-<material>-no_modifier`
- `buildcraftsilicon:modificateur de gate-<operation>-<material>-<modifier>`

Paramètres:

- `<operation>`: `et` ou `ou`
- `<material>`: `fer`, `nether_brick`, ou `or`
- `<modifier>`: `lapis`, `quartz`, ou `diamant`
