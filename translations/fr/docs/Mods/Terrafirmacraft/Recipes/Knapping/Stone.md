# Coup de pierre

## Paquet
```zenscript
Importer mods.terrafirmacraft.Coup de pierre ;
```

## Ajouter

```zenscript
StoneKnapping.addRecipe(String registryName, IItemStack[] output, String[] rocks, String... pattern)
```

## Retirer

```zenscript
StoneKnapping.removeRecipe(IItemStack sortie);
StoneKnapping.removeRecipe(String registryName);
```

## Exemples

```zenscript
// Donne une houe en pierre dans tous les rochers.
StoneKnapping.addRecipe("testrecipe", [<minecraft:stone_hoe>], ["all"], " ", "XXXX ");
// Donne une houe en pierre seulement dans les schistes, les pierres de pierre, le sel de roche, le calcaire.
StoneKnapping.addRecipe("testrecipe2", [<minecraft:stone_hoe>], ["shale", "claystone", "rocksel", "calcaire"], " ", "XXXX ");
// donne une houe en pierre en pierre et une pioche en calcaire.
StoneKnapping.addRecipe("testrecipe3", [<minecraft:stone_hoe>, <minecraft:stone_pickaxe>], ["claystone", "calcaire"], " ", "XXXX ");
// Donne une houe en pierre seulement dans le basalte et le cerisier.
StoneKnapping.addRecipe("testrecipe4", [<minecraft:stone_hoe>, <minecraft:stone_hoe>], ["basalt", "chert"], " ", "XXXX ");
```