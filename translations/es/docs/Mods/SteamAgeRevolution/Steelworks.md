# Acero

The Steelworks es una máquina que convierte un objeto de entrada y fluido en un objeto de salida usando vapor.

## Llamando

Puedes llamar al paquete Steelworks usando `mods.steamagerevolution.Steelworks`.

## Eliminando

Esta función elimina la primera receta que encuentran con la salida de [ItemStack](/Vanilla/Items/IItemStack/) `dada`:

```java
mods.steamagerevolution.Steelworks.removeRecipe(IItemStack output);

// Ejemplos
mods.steamagerevolution.Steelworks.removeRecipe(<ore:ingotSteel>.firstItem);
```

Esta función elimina *todas las* recetas actualmente definidas para las Steelworks:

```java
mods.steamagerevolution.Steelworks.removeAll();
```

## Agregando

Esta función se utiliza para añadir nuevas recetas para las aceras:

```java
mods.steamagerevolution.Steelworks.addRecipe(entrada ILiquidStack, entrada IIngredient2, salida ItemStack, int craftTime, int steamCost);

// Ejemplos
mods.steamagerevolution.Steelworks.addRecipe(<liquid:iron>, <ore:coal>, <ore:ingotSteel>.firstItem, 200, 200, 200);
```
