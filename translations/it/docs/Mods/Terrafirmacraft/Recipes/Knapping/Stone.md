# Maglia Di Pietra

## Pacchetto
```zenscript
import mods.terrafirmacraft.StoneKnapping;
```

## Addizione

```zenscript
StoneKnapping.addRecipe(String registryName, IItemStack[] output, String[] rocks, String... pattern)
```

## Rimozione

```zenscript
StoneKnapping.removeRecipe(IItemStack output);
StoneKnapping.removeRecipe(String registryName);
```

## Esempi

```zenscript
// Fornisce una zappa di pietra in tutte le rocce.
StoneKnapping.addRecipe("testrecipe", [<minecraft:stone_hoe>], ["all"], " ", "XXXX ");
// Fornisce una zappa di pietra solo in scisto, argilla, sale di roccia, calcare.
StoneKnapping.addRecipe("testrecipe2", [<minecraft:stone_hoe>], ["shale", "claystone", "rocksalt", "calcareo"], " ", "XXXX ");
// Fornisce una zappa di pietra in argilla e un piccone in pietra calcarea.
StoneKnapping.addRecipe("testrecipe3", [<minecraft:stone_hoe>, <minecraft:stone_pickaxe>], ["claystone", "calcareo"], " ", "XXXX ");
// Fornisce una zappa di pietra solo in basalto e chert.
StoneKnapping.addRecipe("testrecipe4", [<minecraft:stone_hoe>, <minecraft:stone_hoe>], ["basalt", "chert"], " ", "XXXX ");
```