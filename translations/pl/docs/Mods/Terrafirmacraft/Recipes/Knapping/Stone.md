# Kamienny Wykrywanie

## Pakiet
```zenscript
importuj mods.terrafirmacraft.Pieczenie kamienne;
```

## Dodanie

```zenscript
[PLACEHOLDER] StoneKnapping.addRecipe(String registryName, IItemStack[] output, String[] rocks, String... pattern)
```

## Usuwanie

```zenscript
[PLACEHOLDER] StoneKnapping.removeRecipe(IItemStack);
StoneKnapping.removeRecipe(String registryName);
```

## Przykłady

```zenscript
// Daje kamienną motykę we wszystkich skałach.
kamiennyKnapping.addRecipe("testrecipe", [<minecraft:stone_hoe>], ["wszystkie"], " ", "XXXX ");
// daje kamienną haczykę tylko w łupku, kałamarnicy, skałowej, wapiennej.
KamiennaKamienna.addRecipe("testrecipe2", [<minecraft:stone_hoe>], ["shale", "claystone", "rocksalt", "wapienie"], " ", "XXXX ");
// daje kamienną czepę w kałamarnicy, a kilof w wapieniu.
KamiennaKamienna.addRecipe("testrecipe3", [<minecraft:stone_hoe>, <minecraft:stone_pickaxe>], ["kałamarnica", "wapienie"], " ", "XXXX ");
// daje kamienną motykę tylko w bazylicie i wiśni.
StoneKnapping.addRecipe("testrecipe4", [<minecraft:stone_hoe>, <minecraft:stone_hoe>], ["basalt", "chert"], " ", "XXXX ");
```