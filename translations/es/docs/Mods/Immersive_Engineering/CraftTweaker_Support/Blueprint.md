# Plano

El paquete de fabricación de planos puede ser usado para añadir/remover recetas para/de la fabricación de planos de Inmersiva.

## PSA

La categoría [](/Mods/Immersive_Engineering/Variables/Categories/) es bastante especial. Para cualquier cadena introducida que no tenga una Categoría establecida, creará una nueva Categoría y por lo tanto un nuevo Plano. Esto significa que puedes añadir una categoría de planos llamada "Panqueques de plátano" que proporciona "Recetas de alimento". Después de la primera entrada encontrada, generará todas las recetas adicionales para esa cadena de categorías bajo la categoría generada.

## Llamar al paquete

Puedes llamar al paquete de Planos usando `mods.immersiveengineering.Blueprint`.

## Añadir Receta

| Requerido | Tipo      | Tipo de Datos                                                         |
| --------- | --------- | --------------------------------------------------------------------- |
| Requerido | Categoría | Cadena [Categoría](/Mods/Immersive_Engineering/Variables/Categories/) |
| Requerido | Salida    | [IItemstack](/Vanilla/Items/IItemStack/)                              |
| Requerido | Inputs    | [IIngredientes](/Vanilla/Variable_Types/IIngredient/)                 |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.Blueprint.addRecipe(String category, ItemStack output, IIngredient[] entradas);

//Utilizando una cadena de categoría existente
mods.immersiveengineering.Blueprint. ddRecipe("componentes", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);

//Usando una nueva cadena de categoría (Esto genera un nuevo elemento del plano)
mods. mmersiveengineering.Blueprint.addRecipe("Banana Pancakes", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);
```

## Eliminar receta

| Tipo   | Tipo de Datos                            |
| ------ | ---------------------------------------- |
| Salida | [IItemstack](/Vanilla/Items/IItemStack/) |

### Ejemplo:

```zenscript
//Ejemplo:
mods.immersiveengineering.Blueprint.removeRecipe(IItemStack output);
mods.immersiveengineering.Blueprint.removeRecipe(<minecraft:diamond>);
```