# Avisado

## Receta básica

* Añade una receta de Saw - las entradas *DEBEN* tener un bloque asociado con ellas.

```zenscript
mods.betterwithmods.Saw.add(entrada IIngredient, salida ItemStack[]);
//Ejemplos
mods.betterwithmods.Saw.add(<minecraft:fence>,[<minecraft:stick>,<minecraft:stick>]);
```

## Eliminar por entrada

* Elimina una receta basada en el ingrediente de entrada

```zenscript
mods.betterwithmods.Saw.remove(IIngredient input);
```

## Eliminar por salida

* Elimina una receta basada en la salida

```zenscript
mods.betterwithmods.Saw.remove(ItemStack[] salidas);
```

## Eliminar todo

* Eliminar todas las recetas

```zenscript
mods.betterwithmods.Saw.removeAll();
```

## Constructor

La Saw tiene un constructor de recetas. Debido a la naturaleza de la sierra que actualmente no tiene métodos especiales de construcción, voy a documentarlo de ninguna manera.

* Crear un nuevo constructor de Saw. `mods.betterwithmods.Saw.builder()`

* Métodos de borrado
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              Sets up the inputs and outputs of the recipe<br />
                    zenscript
                    buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * Finalize the recipe and add it to the game  
          zenscript build()  
              Finalize the recipe and add it to the game<br />
                    zenscript
                    build()

### Ejemplo de uso del constructor

    mods.betterwithmods.Saw.builder()
    .buildRecipe([<minecraft:oak_fence>], [<minecraft:stick>*6])
    .build();