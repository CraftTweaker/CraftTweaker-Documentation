# Constructor de recetas

Un `MixRecipeBuilder` se utiliza para construir y añadir la receta de la mezcla de alto horno al juego.

## Importando el paquete

Más vale estar seguro que lo sentimos e importar el paquete

```zenscript
importar mods.tcomplement.highoven.MixRecipeBuilder;
```

## Obtener un `MixRecipeBuilder`

El manejador `mods.tcomplement.highoven.HighOven` puede darte un `MixRecipeBuilder`

```zenscript
// HighOven.newMixRecipe(salida ILiquidStack, entrada ILiquidStack, tiempo int);
var builder = HighOven.newMixRecipe(<liquid:steel> * 72, <liquid:iron> * 144, 1350);
```

+ `la salida` es el fluido y la cantidad a producir
+ `entrada` es el fluido y la cantidad a consumir
+ `la temperatura` es la temperatura mínima del horno alto para que la receta funcione, en Kelvin

## Atributos

| Atributo      | ZenGetter       | Ajuste               | Tipo                       | Info                                                                                |
| ------------- | --------------- | -------------------- | -------------------------- | ----------------------------------------------------------------------------------- |
| salida        | `salida`        | :heavy_check_mark: | `ILiquidStack`             | la salida producida por la MixRecipe                                                |
| input         | `input`         | :heavy_check_mark: | `ILiquidStack`             | la entrada de la MixRecipe                                                          |
| temperatura   | `temp`          | :heavy_check_mark: | `int`                      | la temperatura mínima, en Kelvin                                                    |
| oxidizadores  | `oxidizadores`  | :x:                  | `Lista<IIngredient>` | los oxidadores válidos para la receta en el momento en que se accede al atributo    |
| reductores    | `reductores`    | :x:                  | `Lista<IIngredient>` | los reductores válidos para la receta en el momento en que se accede al atributo    |
| purificadores | `purificadores` | :x:                  | `Lista<IIngredient>` | los purificadores válidos para la receta en el momento en que se accede al atributo |


Methods

| Método                                                             | Tipo de devolución       | Info                                                                                                 |
| ------------------------------------------------------------------ | ------------------------ | ---------------------------------------------------------------------------------------------------- |
| `getOxidizerChance(IIngredient oxidizer)`                          | `int`                    | La probabilidad en porcentaje de que el oxidizador se consuma, o `-1` si el oxidizador no es válido  |
| `getReducerChance(reductor de IIngrediente)`                       | `int`                    | La probabilidad en porcentaje de que el reductor se consuma, o `-1` si el reductor no es válido      |
| `getOxidizerChance(Purificador IIngrediente)`                      | `int`                    | La probabilidad en porcentaje de que el purificador se consuma, o `-1` si el oxidizador no es válido |
| `addOxidizer(oxidizador IIngrediente, oportunidad de consumo)`     | `Constructor de recetas` | Agrega el oxidador con la probabilidad de consumo dada (en porcentaje)                               |
| `addReducer(reductor de IIngrediente, oportunidad de consumo)`     | `Constructor de recetas` | Agrega el reductor con la probabilidad de consumo dada (en porcentaje)                               |
| `addPurifier(purificador de IIngrediente, oportunidad de consumo)` | `Constructor de recetas` | Agrega el purificador con la probabilidad de consumo dada (en porcentaje)                            |
| `removeOxidizador (IIngredient oxidizer)`                          | `Constructor de recetas` | Remueve el oxidizador si se ha añadido                                                               |
| `remover Reductor (reductor de IIngrediente)`                      | `Constructor de recetas` | Remueve el reductor si se ha añadido                                                                 |
| `remover Purifier(purificador IIngrediente)`                       | `Constructor de recetas` | Remueve el purificador si se ha añadido                                                              |
| `removeAllOxidizer()`                                              | `Constructor de recetas` | Remueve todos los oxidadores                                                                         |
| `eliminar todos los Reducer()`                                     | `Constructor de recetas` | Eliminar todos los reductores                                                                        |
| `removeAllPurifier()`                                              | `Constructor de recetas` | Eliminar todos los purificadores                                                                     |
| `registrar()`                                                      |                          | Añadir una nueva receta MixRecipe con los datos actualmente añadidos en el MixRecipeBuilder          |


Todos los métodos que retornan un `MixRecipeBuilder` retornan la misma instancia en la que fueron llamados, permitiendo el encadenamiento de métodos.

How to use Once you have a `MixRecipeBuilder`, add the oxidizers, reducers and purifiers for your new recipe to the builder, then `register()` a recipe. Un `MixRecipeBuilder` puede utilizarse para registrar tantas recetas como quieras: cada vez que llame a `register()`, añade una nueva receta con la información que tiene en el momento de llamar a la función. Esto hace que sea fácil añadir variantes o recetas de nivel incrementalmente añadiendo aditivos nuevos y/o aumentando el rendimiento, etc.

Los aditivos soportan todo tipo de `IIngrediente`: `IOreDictEntry`, `ItemStack` y sus transformaciones, contenedores líquidos, etc.

Warning Don't forget to **register** your recipe, the `MixRecipeBuilder` is just a builder to specify all the parts of the recipe !