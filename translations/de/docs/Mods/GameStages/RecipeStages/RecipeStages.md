# Rezeptstadien

Dieser Mod ist ein Addon für die [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Rezeptstadien erlauben es, die Rezepte für das Herstellen von Tischrezepten durch ein benutzerdefiniertes Progressionssystem zu beschränken. Für weitere Informationen, schaue dir die Mod-Seite [hier an](https://minecraft.curseforge.com/projects/recipe-stages)

## Methoden

Fügt ein geformtes Rezept hinzu, das hinter einer Bühne verschlossen ist.

```zenscript
//mods.recipestages.Recipes.addShaped(String stage, IItemStack output, IIngredient[][] ingredients @Optional IRecipeFunction function, @Optional IRecipeAction action);
//Mods. ecipestages.Recipes.addShaped(String name, String stay, IItemStack output, IIngredient[][] Zutaten, @Optionale IRecipeFunction Funktion, @Optional IRecipeAction action);

Mods. ecipestages.Rezepte. ddShaped("zwei", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
Mods. ecipestages.Recipes.addShaped("test", "one", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
```

Fügt ein gespiegeltes Rezept hinzu, das hinter einer Bühne verschlossen ist.

```zenscript
//mods.recipestages.Recipes.addShapedMirrored(String stage, IItemStack output, IIngredient[][] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);
//mods. ecipestages.Recipes.addShapedMirrored(Stringname, String-Bühne, IItemStack Ausgabe, IIngredient[][] Zutaten, @Optionale IRecipeFunction Funktion, @Optional IRecipeAction Aktion);

Mods. ecipestages.Rezepte. ddShapedMirrored("zwei", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
Mods. ecipestages.Recipes.addShapedMirrored("test_mirrored", "one", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);

```

Fügt ein formloses Rezept hinzu, das hinter einer Bühne verschlossen ist.

```zenscript
//mods.recipestages.Recipes.addShapeless(String stage, IItemStack output, IIngredient[] ingredients @Optional IRecipeFunction function, @Optional IRecipeAction action);
//mods.recipestages.Rezepte. ddShapeless(String-Name, String-Bühne, IItemStack Ausgabe, IIngredient[] Zutaten, @Optionale IRecipeFunction Funktion, @Optionale IRecipeAction Aktion);

Mods. ecipestages.Recipes.addShapeless("one", <minecraft:diamond>, [<ore:sand>, <ore:sand>, <ore:ingotIron>, <minecraft:gold_ingot>]);
mods.recipestages.Recipes.addShapeless("shapeless_test". "ein", <minecraft:diamond>, [<ore:sand>, <ore:sand>, <ore:ingotIron>, <minecraft:gold_ingot>]);
```

Setzt die Stufe eines nicht inszenierten Rezeptes.

```zenscript
//mods.recipestages.Recipes.Recipes.setRecipeStage(String name, IItemStack output);
//mods.recipestages.Recipes.RecipeStage(String name, String recipeName);

mods.recipestages.Recipes.RecipeStage("one", <minecraft:stone_hoe>);
mods.recipestages.Recipes.RecipeStage("one", "minecraft:boat");
```

Legt die Stufe aller Rezepte fest, die Gegenstände eines bestimmten Mods herstellen.  
Genauer gesagt, stuft alle Rezepte mit dem Modid als Ressourcen-Domain auf.  
Funktioniert NICHT mit regex-Ausdrücken, also würde die Verwendung von `.*` als Argument nichts tun!

```zenscript
//mods.recipestages.Recipes.setRecipeStage(String name, String recipeName);
mods.recipestages.Recipes.setRecipeStageByMod("one", "minecraft");
```

Legt die Stufe aller Rezepte fest, die auf einer Regex-Prüfung gegen ihren Namen basieren.

```zenscript
//mods.recipestages.Recipes.Recipes.setRecipeStageByRegex(String name, String modid);
//Hier wird die Stufe aller Rezepte festgelegt, deren Name nur Zahlen auf die Bühne "eins"

mods.recipestages.Recipes.setRecipeStageByRegex("one", "^[0-9]*$");
```

Zeigt RecipeStages an, Container-Namen zum chatten zu drucken

```zenscript
//mods.recipestages.Recipes.setPrintContainers(boolean printContainers);
mods.recipestages.Recipes.setPrintContainers(true);
```

"Stagiert" einen Container, so dass er Rezepte von bestimmten Stufen her herstellen kann

```zenscript
//mods.recipestages.Recipes.setContainerStage(String containerPath, String[] Etappen);
mods.recipestages.Recipes.setContainerStage("primal_tech.inventory.ContainerWorkStump", "one");
```

"Stagiert" ein Paket, das es allen Containern im Paket erlaubt, Rezepte von bestimmten Stufen her herzustellen

```zenscript
//mods.recipestages.Recipes.setPackageStage(String packageName, String[] Etappen);
mods.recipestages.Recipes.setPackageStage("appeng", allStages);
```