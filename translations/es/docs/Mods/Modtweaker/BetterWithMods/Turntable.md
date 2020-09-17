# Voltear tabla

## Receta básica

* Añade una receta giratoria - entradas *DEBES* tener un bloque asociado con ellos. El estado del producto es el bloque que se colocará después de que la receta termine

```zenscript
mods.betterwithmods.Turntable.add(entrada IIngredient, producto ItemStack, ItemStack[] salida);

mods.betterwithmods.Turntable.add(entrada IIngredient, salida ItemStack[]);

//Ejemplos
mods. etterwithmods.Turntable.add(<minecraft:grass>, <minecraft:dirt>, [<minecraft:seed>]);

mods.betterwithmods.Turntable.add(<minecraft:gravel>, [<minecraft:flint>]);
```

## Eliminar por entrada

* Elimina una receta basada en el ingrediente de entrada

```zenscript
mods.betterwithmods.Turntable.remove(Ingredient input);
```

## Eliminar por salida

* Elimina una receta basada en la salida

```zenscript
mods.betterwithmods.Turntable.remove(IItemStack[] salidas);
```

## Eliminar todo

* Eliminar todas las recetas

```zenscript
mods.betterwithmods.Turntable.removeAll();
```

## Eliminar por producto

* Quitar una receta por el Estado del producto 

```zenscript
mods.betterwithmods.Turntable.removeRecipe(IItemStack productState);
```

## Constructor

The Turntable has a recipe builder that allows more precise control over the recipes. Todos los métodos anteriores son simplemente atajos al uso del constructor.

* Crear un nuevo constructor giratorio. `mods.betterwithmods.Turntable.builder()`

* Métodos de giro
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              Sets up the inputs and outputs of the recipe<br />
                    zenscript
                    buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * Establece las rotaciones necesarias para que la receta termine. This defaults to 8.  
          zenscript setRotations(int rotations)  
              zenscript
              setRotations(int rotations)
     
     * Set the block that is placed when the recipe is finished.  
          zenscript setProductState(IItemStack productState)  
              zenscript
              setProductState(IItemStack productState)
     
     * Finalize the recipe and add it to the game  
          zenscript build()  
              Finalize the recipe and add it to the game<br />
                    zenscript
                    build()

### Ejemplo de uso del constructor

```zenscript
mods.betterwithmods.Turntable.builder()
.buildRecipe([<minecraft:oak_fence>], [<minecraft:stick>*6])
.build();
```