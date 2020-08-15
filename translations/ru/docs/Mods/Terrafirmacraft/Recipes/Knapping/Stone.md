# Stone Knapping

## Пакет
```zenscript
import mods.terrafirmacraft.StoneKnapping;
```

## Сложение

```zenscript
StoneKnapping.addRecipe(String registryName, IItemStack[] output, String[] rocks, String... pattern)
```

## Удаление

```zenscript
StoneKnapping.removeRecipe(IItemStack output);
StoneKnapping.removeRecipe(String registryName);
```

## Примеры

```zenscript
// Gives a stone hoe in all rocks.
StoneKnapping.addRecipe("testrecipe", [<minecraft:stone_hoe>], ["all"], "     ", "XXXX ");
// Gives a stone hoe only in shale, claystone, rocksalt, limestone.
StoneKnapping.addRecipe("testrecipe2", [<minecraft:stone_hoe>], ["shale", "claystone", "rocksalt", "limestone"], "     ", "XXXX ");
// Gives a stone hoe in claystone, and a pickaxe in limestone.
StoneKnapping.addRecipe("testrecipe3", [<minecraft:stone_hoe>, <minecraft:stone_pickaxe>], ["claystone", "limestone"], "     ", "XXXX ");
// Gives a stone hoe only in basalt and chert.
StoneKnapping.addRecipe("testrecipe4", [<minecraft:stone_hoe>, <minecraft:stone_hoe>], ["basalt", "chert"], "     ", "XXXX ");
```