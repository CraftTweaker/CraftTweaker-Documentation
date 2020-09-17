# Mezcla

Un `MixRecipeManager` se utiliza para modificar la receta de mezcla de horno alto existente, incluyendo las añadidas por ModTweaker.

## Importando el paquete

Más vale estar seguro que lo sentimos e importar el paquete

```zenscript
importar mods.tcomplement.highoven.MixRecipeManager;
```

## Obtener un `MixRecipeManager`

El manejador de `HighOven` puede darte una `MixRecipeManager`:

```zenscript
// HighOven.manageMixRecipe(salida ILiquidStack, entrada ILiquidStack);
var manager = HighOven.manageMixRecipe(<liquid:steel>);
```

+ `salida` es la salida de la receta de mezcla a modificar
+ `entrada` (Opcional) es la entrada de la receta de mezcla para modificar. Si `nula` o no especificada, cualquier receta de mezcla que produzca la salida se verá afectada

## Eliminando aditivos

Puede utilizar una `MixRecipeManager` para eliminar ciertos aditivos de la receta de mezcla afectada. Tenga cuidado, ya que las expulsiones siempre se aplican. Esto significa que se evitará cualquier forma de añadir un aditivo que añada un aditivo que se elimine.

Esto puede tener resultados sorprendentes con entradas oredicto. Ya que las entradas de oredicto se añaden como es a la receta de mezcla (no se expande a una lista de `ItemStack` pero se busca cuando se comprueban las recetas), eliminar un elemento bloqueará todas las entradas de oredicto a las que pertenece.

En general, si eliminas algo específico (digamos, un `ItemStack` con transformadores) pero una (única) adición aditiva permitiría lo que eliminaste más otras cosas (digamos, un ItemStack `más genérico`), toda la adición será cancelada, evitando que otras cosas sean aceptadas por el Alto Horno.

| Método                                        | Info                                            |
| --------------------------------------------- | ----------------------------------------------- |
| `removeOxidizador (IIngredient oxidizer)`     | Retire el oxidador de la MixRecipe afectada     |
| `remover Reductor (reductor de IIngrediente)` | Elimina el reductor de la MixRecipe afectada    |
| `remover Purifier(reductor de IIngrediente)`  | Remueve el purificador de la MixRecipe afectada |


Todos esos métodos retornan la misma instancia que fueron llamados uno, permitiendo encadenar métodos.

## Agregando aditivos a MixRecipe existente

Puedes añadir aditivos a toda la receta de mezcla que coincida con la `MixRecipeManager`. Tenga cuidado, ya que las eliminaciones tienen prioridad (ver arriba).

| Método                                                           | Info                                                                              |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `addOxidizer(@NotNull IIngredient oxidizer, int consumeChance)`  | Agrega el oxidador con la probabilidad de consumo especificada (en porcentaje)    |
| `addReducer(@NotNull IIngredient reducer, int consumeChancelle)` | Agrega el reductor con la probabilidad de consumo especificada (en porcentaje)    |
| `addPurifier(@NotNull IIngredient purifier, int consumo)`        | Agrega el purificador con la probabilidad de consumo especificada (en porcentaje) |


Todos esos métodos retornan la misma instancia que fueron llamados uno, permitiendo encadenar métodos.

## Advertencia

Crear un `MixRecipeManager` que no coincida con ninguna receta de mezcla no activará ninguna advertencia, porque no hay forma de decir qué recetas de mezcla se añadirán (análisis de guiones sucede antes del registro de recetas de mezcla). Si eres `MixRecipeManager` no tiene efecto, primero comprueba que realmente coincide con una receta de mezcla