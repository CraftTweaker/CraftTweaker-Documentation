# Ropa de Piedra

## Paquete
```zenscript
import mods.terrafirmacraft.StoneKnapping;PiedraKnapping;
```

## Adicional

```zenscript
StoneKnapping.addRecipe(String registryName, IItemStack[] salida, String[] rocks, String... patrón)
```

## Eliminar

```zenscript
StoneKnapping.removeRecipe(ItemStack output);
StoneKnapping.removeRecipe(String registryName);
```

## Ejemplos

```zenscript
// Da una azadada de piedra en todas las rocas".
StoneKnapping.addRecipe("testrecipe", [<minecraft:stone_hoe>], ["all"], " ", "XXXX ");
// Otorga una azada de piedra sólo en esquisto, arcilla, sal, caliza.
StoneKnapping.addRecipe("testrecipe2", [<minecraft:stone_hoe>], ["shale", "claystone", "rocksalt", "caliza"], " ", "XXXX ");
// Otorga una azada de piedra en piedra arcillada, y un pico en piedra caliza.
StoneKnapping.addRecipe("testrecipe3", [<minecraft:stone_hoe>, <minecraft:stone_pickaxe>], ["claystone", "limestone"], " ", "XXXX ");
// Otorga una azada de piedra sólo en basalto y cerveza.
StoneKnapping.addRecipe("testrecipe4", [<minecraft:stone_hoe>, <minecraft:stone_hoe>], ["basalt", "chert"], " ", "XXX ");
```