# Bono de fundición

Este paquete le permite añadir y quitar artículos de la lista de bonificación de Fundición.  
La lista de Bonos de Fundición se consulta cada vez que un horno infernal cocina un artículo.

## Importando el paquete

Puede [importar](/AdvancedFunctions/Import/) el paquete y sus métodos para facilitar la recuperación de los métodos.

```zenscript
importar mods.thaumcraft.SmeltingBonus;
```

## Agregando elementos

Aviso: La entrada debe ser una pila de ítems o una entrada de IOreDictEntry

```zenscript
//mods.thaumcraft.SmeltingBonus.addSmeltingBonus(entrada IIngrediente, pila WeightedItemStack)
mods.thaumcraft.EmpleltingBonus.addFuntingBonus(<minecraft:cobblestone>, <minecraft:button> % 20);
```

## Eliminando elementos

Aviso: La entrada debe ser una pila de ítems o una entrada de IOreDictEntry

```zenscript
//mods.thaumcraft.SmeltingBonus.removeSmeltingBonus(entrada IIngredient, pila ItemStack);
mods.thaumcraft.Phone eltingBonus.removePhone eltingBonus(<minecraft:gold_ore>, <minecraft:gold_nugget>);
```