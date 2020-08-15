# Triturador

El paquete Triturador se puede utilizar para añadir/quitar recetas de/al Triturador de Ingeniería Inmersiva.

## Llamar al paquete

Puedes llamar al paquete triturador usando `mods.immersiveengineering.Crusher`.

## Añadir Receta

| Requerido | Tipo                   | Tipo de Datos                                         |
| --------- | ---------------------- | ----------------------------------------------------- |
| Requerido | Salida                 | [IItemStack](/Vanilla/Items/IItemStack/)              |
| Requerido | Input                  | [IIngredientes](/Vanilla/Variable_Types/IIngredient/) |
| Requerido | Energía                | int                                                   |
| Opcional  | Salida secundaria      | [IItemStack](/Vanilla/Items/IItemStack/)              |
| Opcional  | Oportunidad Secundaria | doble                                                 |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.Crusher.addRecipe(salida ItemStack, entrada IIngredient, energía int, @Optional ItemStack secondaryOutput, @Optional double secondaryChance);

mods.immersiveengineering.Crusher. ddRecipe(<minecraft:diamond>, <ore:logWood>, 2048);
mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>);
mods. mmersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>, 0.5);
```

## Quitar receta por Salida

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.Crusher.removeRecipe(IItemstack output);

mods.immersiveengineering.Crusher.removeRecipe(<minecraft:diamond>);
```

## Quitar receta por entrada

| Tipo  | Tipo de Datos                            |
| ----- | ---------------------------------------- |
| Input | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.Crusher.removeRecipesForInput(Itemstack input);

mods.immersiveengineering.Crusher.removeRecipesForInput(<minecraft:diamond>);
```