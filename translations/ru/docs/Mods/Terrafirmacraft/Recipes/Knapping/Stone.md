# Каменная привязка

## Пакет
```zenscript
import mods.terrafirmacraft.Каменная привязка;
```

## Сложение

```zenscript
StoneKnapping.addRecipe(tring registryName, IItemStack[] output, String[] rocks, String... pattern)
```

## Удаление

```zenscript
StoneKnapping.removeRecipe(IItemStack output);
StoneKnapping.removeRecipe(String registryName);
```

## Примеры

```zenscript
// Даёт каменную руду во всех скалах.
StoneKnapping.addRecipe("testrecipe", [<minecraft:stone_hoe>], ["all"], " ", "XXXX ");
// Даёт каменную монетку только в шале, глине, камне, известняке.
StoneKnapping.addRecipe("testrecipe2", [<minecraft:stone_hoe>], ["shale", "claystone", "rocksalt", "limestone"], " ", "XXXX ");
// Даёт каменную муку в глине, а также кирку в известняке.
StoneKnapping.addRecipe("testrecipe3", [<minecraft:stone_hoe>, <minecraft:stone_pickaxe>], ["claystone", "limestone"], " ", "XXXX ");
// Даёт каменный мотыг только базальтом и зерном.
StoneKnapping.addRecipe("testrecipe4", [<minecraft:stone_hoe>, <minecraft:stone_hoe>], ["basalt", "chert"], "XXXX ");
```