# Lámpara

Puedes añadir y eliminar Lightwell Liquefications

## Llamando

Puedes llamar al paquete wellRecipe usando `mods.astralsorcery.Lightwell`.

## Eliminando

Esta función elimina la primera receta que encuentra que devuelve la salida [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `proporcionada` usando la [ItemStack](/Vanilla/Items/IItemStack/) `entrada` proporcionada. Si hay múltiples recetas que devuelven la salida proporcionada, ¡necesitas llamar a este método varias veces!

Puedes establecer la salida a `null` para buscar solo a través de la pila de entrada

```zenscript
//mods.astralsorcery.Lightwell.removeLiquefaction(entrada ItemStack, salida ILiquidStack);
mods.astralsorcery.Lightwell.removeLiquefaction(<astralsorcery:itemcraftingcomponent:0>, null);
```

## Adicional

```zenscript
//mods.astralsorcery.Lightwell.addLiquefaction(entrada ItemStack, salida ILiquidStack, multiplicador de producción flotante, multiplicador flotante de shatterMultiplier, int colorhex);
mods.astralsorcery.Lightwell.addLiquefaction(<minecraft:dirt>, <liquid:water>, 1, 0.2, 0);
```

| Parámetro         | Tipo de parámetro                              | Descripción                                                                                                                                                                                              |
| ----------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| input             | [IItemStack](/Vanilla/Items/IItemStack/)       | El elemento de entrada                                                                                                                                                                                   |
| salida            | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | El Liquid devuelto. Solo el tipo de fluido cuenta, la cantidad dependerá (como la luz por defecto) de cosas como el día/noche, y así sucesivamente…                                                      |
| outputMultiplier  | flotante                                       | Multiplicador que se aplica junto con la estrella recolectada para calcular la cantidad del fluido de salida. Normalmente 0.3 - 1.2 (aka: no escribas como 200 aquí, si quieres permanecer razonable :P) |
| shatterMultiplier | flotante                                       | Cuanto mayor sea este multiplicador, menor será la probabilidad de que el objeto catalizador destroze.                                                                                                   |
| color HEX         | int                                            | El código de color utilizado para las partículas alrededor del elemento flotante.                                                                                                                        |