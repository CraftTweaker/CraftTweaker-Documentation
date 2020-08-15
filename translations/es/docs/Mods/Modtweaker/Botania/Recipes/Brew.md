# Preparación de Botania

El paquete de la cerveza se utiliza para añadir o quitar recetas hacia/desde el Soporte de Cacería de Botania.

## Llamando

Puedes llamar al paquete Brew usando `mods.botania.Brew`

## Nombres de fábrica

Para usar este paquete, necesitas conocer los nombres de cerveza registrados por botania.  
Puedes encontrarlos usando [`/ct botbrews`](/Mods/Modtweaker/Botania/Commands/).

## Añadir receta

```zenscript
//mods.botania.Brew.addRecipe(IIngredient[] entrada, Nombre de la cerveza String);
mods.botania.Brew.addRecipe([<minecraft:nether_wart>, <minecraft:reeds>, <minecraft:redstone>], "speed");
```

## Eliminación de receta

```zenscript
//mods.botania.Brew.removeRecipe(String brewName);
mods.botania.Brew.removeRecipe("absorption");
```