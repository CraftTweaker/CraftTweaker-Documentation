# Etapy przepisów

Ten mod jest dodatkiem dla [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Etapy przepisów pozwalają na ograniczenie przepisów tabeli tworzenia przez niestandardowy system progresji. Aby uzyskać więcej informacji, sprawdź stronę modów [tutaj](https://minecraft.curseforge.com/projects/recipe-stages)

## Metody

Dodaje kształt przepisu, który jest zablokowany za sceną.

```zenscript
//mods.recipestages.Recipes.addShaped(etap ciągu, wyjście IItemStac, IIngredient[][] składniki, @Optional IRecipeFunction, @Optional IRecipeAction action);
//mods. ecipestages.Recipes.addShaped(nazwa ciągu, etap ciągu, wyjście IItemStack, wyjście IIngredient[][] [] składniki, @Optional IRecipeFunction, @Optional IRecipeAction action);

mods. Receptury. ddShaped("dwa", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
modyfikacji. ecipestages.Recipes.addShaped("test", "one", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
```

Dodaje lustrzany przepis, który jest zablokowany za sceną.

```zenscript
//mods.recipestages.Recipes.addShapedMirrored(etap ciągu, wyjście IItemStack, IIngredient[][] składniki, @Optional IRecipeFunction function@Optional IRecipeAction);
//mods. ecipestages.Recipes.addShapedMirrored(nazwa ciągu, etap ciągu, wyjście IItemStack [][] składniki, @Optional IRecipeFunction function@Optional IRecipeAction action);

mods. 

. Receptury. ddShapedMirrored("dwó", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
modyfikacji. ecipestages.Recipes.addShapedMirrored("test_mirrored", "one", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);

```

Dodaje bezkształtny przepis, który jest zablokowany za sceną.

```zenscript
//mods.recipestages.Recipes.addShapeless(etap ciągu, wyjście IItemStac, IIngredient[] składniki, @Optional IRecipeFunction, @Optional IRecipeAction action);
//mods.recipestages.Recipes. ddShapeless(nazwa ciągu, etap ciągu, wyjście IItemStack, składnik IIngredient[] składniki, @Optional IRecipeFunction function@Optional IRecipeAction action);

mods. 

. ecipestages.Recipes.addShapeless("jedne", <minecraft:diamond>, [<ore:sand>, <ore:sand>, <ore:ingotIron>, <minecraft:gold_ingot>]);
mods.recipestages.Recipes.addShapeless("shapeless_test". "jedny", <minecraft:diamond>, [<ore:sand>, <ore:sand>, <ore:ingotIron>, <minecraft:gold_ingot>]);
```

Ustawia etap przepisu nieetapowego.

```zenscript
//mods.recipestages.Recipes.setRecipeStage(Nazwa ciągu, wyjście IItemStack);
//mods.recipestages.Recipes.setRecipeStage(Nazwa ciągu, formuła ciągu);

mods.recipestages.Recipes.setRecipeStage("one", <minecraft:stone_hoe>);
mods.recipestages.Recipes.setRecipeStage("one", "minecraft:boat");
```

Ustawia etap wszystkich przepisów, które tworzą przedmioty z określonego moda.  
Dokładniej rzecz ujmując, etapuje wszystkie przepisy, które mają podaną domenę zasobu.  
NIE pracuje z wyrażeniami regex, więc użycie `.*` jako argumentu nic nie robi!

```zenscript
//mods.recipestages.Recipes.setRecipeStage(Nazwa ciągu, formuła ciągowaNazwa);
mods.recipestages.Recipes.setRecipeStageByMod("jeden", "minecraft");
```

Ustawia etap wszystkich przepisów na podstawie kontroli regex w stosunku do ich nazwy.

```zenscript
//mods.recipestages.Recipes.setRecipeStageByRegex(nazwa ciągu, modid ciągu);
//To ustawia etap wszystkich przepisów, które zawierają tylko cyfry do etapu "one"

mods.recipestages.Recipes.setRecipeStageByRegex("one", "^[0-9]*$");
```

Tells ReceppeStages to druk Container names to chat

```zenscript
//mods.recipestages.Recipes.setPrintContainers(kontenery logiczne);
mods.recipestages.Recipes.setPrintContainers(true);
```

„Etapy” pojemnik, pozwalający mu na wytwarzanie receptur z niektórych etapów

```zenscript
//mods.recipestages.Recipes.setContainerStage(String containerŚcieżka kontenera, String[] etapy);
mods.recipestages.Recipes.setContainerStage("primal_tech.inventory.ContainerWorkStump", "one");
```

„Etapy pakietu” umożliwiające wszystkim pojemnikom w opakowaniu wytwarzanie receptur z niektórych etapów

```zenscript
//mods.recipestages.Recipes.setPackageStage(String packageName, String[] etapy);
mods.recipestages.Recipes.setPackageStage("appeng", allstages);
```