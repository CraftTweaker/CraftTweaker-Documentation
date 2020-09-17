# Encantador

## Paquete

`importar mods.enderio.Eneguter;`

## Métodos

**- [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) salida** El encantamiento de salida.

**- [IIngrediente](/Vanilla/Variable_Types/IIngredient/) entrada** El elemento que utilizó para hacer este encantamiento.

**- int amountPerLevel** El número de elementos de entrada por nivel de encantamiento.

**- multiplicador doble** Se utiliza para modificar el coste de la receta.

## Adicional

```zenscript
mods.enderio.Eneguter.addRecipe(salida IEnchantmentDefinition , entrada IIngredient, int amountPerLevel, doble costMultiplier);

mods.enderio.Enforwter.addRecipe(<enchantment:minecraft:sharpness>, <minecraft:prismarine_shard>, 32, 60);
```

## Eliminar

```zenscript
mods.enderio.Eneguter.removeRecipe(salida IEnchantmentDefinition );

mods.enderio.EnЂ ter.removeRecipe(<enchantment:minecraft:sharpness>);
```