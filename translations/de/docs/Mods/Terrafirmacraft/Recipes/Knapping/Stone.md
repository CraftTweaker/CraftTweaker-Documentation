# Steinknappern

## Paket
```zenscript
importieren Sie mods.terrafirmacraft.Steinknappung;
```

## Addition

```zenscript
SteoneKnapping.addRecipe(String RegistryName, IItemStack[] Ausgabe, String[] Felsen, String... Muster)
```

## Entfernen

```zenscript
SteoneKnapping.removeRecipe(IItemStack Ausgabe);
StoneKnapping.removeRecipe(String RegistryName);
```

## Beispiele

```zenscript
// Gibt eine Steinhacke in allen Felsen.
SteoneKnapping.addRecipe("testrecipe", [<minecraft:stone_hoe>], ["all"], " ", "XXXX");
// Gibt eine Steinhacke nur in Schiefer, Lehmstein, Steinsalz, Kalkgestein.
StoneKnapping.addRecipe("testrecipe2", [<minecraft:stone_hoe>], ["shale", "Claystone", "Rocksalt", "Kalkstein"], " ", "XXXX ");
// Gibt eine Steinhacke in Tonstein und eine Spitzhacke in Kalkstein.
StoneKnapping.addRecipe("testrecipe3", [<minecraft:stone_hoe>, <minecraft:stone_pickaxe>], ["claystone", "limestone"], " ", "XXXX ");
// Gibt eine Steinhacke nur in Basalt und Kirche.
StoneKnapping.addRecipe("testrecipe4", [<minecraft:stone_hoe>, <minecraft:stone_hoe>], ["basalt", "chert"], " ", "XXXX ");
```