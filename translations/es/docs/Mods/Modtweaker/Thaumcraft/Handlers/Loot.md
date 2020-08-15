# Bolsas de Loot

Este paquete le permite añadir y quitar elementos para/de las bolsas de bote.

## Importando el paquete

Puede [importar](/AdvancedFunctions/Import/) el paquete y sus métodos para facilitar la recuperación de los métodos.

```zenscript
importar mods.thaumcraft.LootBag;
```

## Tipos de botes

Necesitas proporcionar una matriz de uno o varios números de 0 a 2 (inclusive) a las funciones.  
Estos determinan el tipo de bolsa a ser afectada.

- 0: Común
- 1: Poco común
- 2: Raro

## Agregando elementos

Aviso: Las monedas de oro tienen un valor de 2000, los diamantes son 50.

```zenscript
//mods.thaumcraft.LootBag.addLoot(WeightedItemStack stack, int[] bagTypes)
mods.thaumcraft.LootBag.addLoot(<minecraft:dirt>%20000, [0,1,2]);
```

## Eliminando elementos

```zenscript
//mods.thaumcraft.LootBag.removeLoot(ItemStack stack, int[] bagTypes);
mods.thaumcraft.LootBag.removeLoot(<minecraft:gold_nugget>, [1,2]);
```