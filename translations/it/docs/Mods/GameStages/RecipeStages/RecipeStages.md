# Fasi Di Ricetta

Questa mod è un addon per l'API [GameStages](https://minecraft.curseforge.com/projects/game-stages). Le Fasi di Ricetta permettono di limitare le Ricette da Tavolo di Creazione tramite un sistema di progressione personalizzato. Per maggiori informazioni, consulta la pagina delle mod [qui](https://minecraft.curseforge.com/projects/recipe-stages)

## Metodi

Aggiunge una ricetta sagomata che è bloccata dietro un palco.

```zenscript
//mods.recipestages.Recipes.addShaped(String stage, IItemStack output, IIngredient[][] ingredienti, @Optional IRecipeFunction function @Optional IRecipeAction action);
//mods. Ricette.Ricette.addShaped(Nome stringa, Fase stringa, Uscita IItemStack, IIngredient[][] ingredienti, @Opional IRecipeFunction function @Optional IRecipeAction action);

mods. Ricette.Ricette. ddShaped("two", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
mods. Ricette.Ricette.addShaped("test", "one", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
```

Aggiunge una ricetta a forma di specchio che è bloccata dietro un palco.

```zenscript
//mods.recipestages.Recipes.addShapedMirrored(String stage, IItemStack output, IIngredient[][] ingredienti, @Optional IRecipeFunction funzione, @Optional IRecipeAction action);
//mods. Ricette.Ricette.addShapedMirrored(Nome stringa, Fase stringa, Uscita IItemStack, IIngredient[][] ingredienti, @Opional IRecipeFunction funzione, @Opional IRecipeAction action);

mods. Ricette.Ricette. ddShapedMirrored("two", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
mods. Ricette.Ricette.addShapedMirrored("test_mirrored", "one", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);

```

Aggiunge una ricetta senza forma che è bloccata dietro un palco.

```zenscript
//mods.recipestages.Recipes.addShapeless(String stage, IItemStack output, IIngredient[] ingredienti, @Optional IRecipeFunction function @Optional IRecipeAction action);
//mods.recipestages.Recipes. ddShapeless(nome string, String stage, IItemStack output, IIngredient[] ingredienti, @Optional IRecipeFunction function, @Optional IRecipeAction action);

mods. Ricette.Ricette.addShapeless("one", <minecraft:diamond>, [<ore:sand>, <ore:sand>, <ore:ingotIron>, <minecraft:gold_ingot>]);
mods.recipestages.Ricette.addShapeless("shapeless_test". "one", <minecraft:diamond>, [<ore:sand>, <ore:sand>, <ore:ingotIron>, <minecraft:gold_ingot>]);
```

Imposta lo stadio di una ricetta non in stadio.

```zenscript
//mods.recipestages.Recipes.setRecipeStage(String name, IItemStack output);
//mods.recipestages.Recipes.setRecipeStage(String name, String recipeName);

mods.recipestages.Recipes.setRecipeStage("one", <minecraft:stone_hoe>);
mods.recipestages.Recipes.setRecipeStage("one", "minecraft:boat");
```

Imposta lo stadio di tutte le ricette che fanno gli oggetti da un certo mod.  
Più specificamente, stila tutte le ricette che hanno la modalità data come dominio di risorsa.  
NON funziona con le espressioni regex, quindi usando `.*` come argomento non farebbe nulla!

```zenscript
//mods.recipestages.Recipes.setRecipeStage(nome string, ricetta stringaName);
mods.recipestages.Recipes.setRecipeStageByMod("one", "minecraft");
```

Imposta lo stadio di tutte le ricette basate su un controllo regex contro il loro nome.

```zenscript
//mods.recipestages.Recipes.setRecipeStageByRegex(Nome string, String modid);
//Questo imposta la fase di tutte le ricette che il nome contiene solo i numeri alla fase "one"

mods.recipestages.Recipes.setRecipeStageByRegex("one", "^[0-9]*$");
```

Dice ai RecipeStages di stampare i nomi dei Contenitori in chat

```zenscript
//mods.recipestages.Recipes.setPrintContainers(boolean printContainers);
mods.recipestages.Recipes.setPrintContainers(true);
```

"Stage" un contenitore, che gli permette di realizzare ricette da certe fasi

```zenscript
//mods.recipestages.Recipes.setContainerStage(String containerPath, String[] stages);
mods.recipestages.Recipes.setContainerStage("primal_tech.inventario.ContainerWorkStump", "one");
```

"Stage" un pacchetto, che consente a tutti i contenitori della confezione di realizzare ricette da certe fasi

```zenscript
//mods.recipestages.Recipes.setPackageStage(String packageName, String[] stages);
mods.recipestages.Recipes.setPackageStage("appeng", allStages);
```