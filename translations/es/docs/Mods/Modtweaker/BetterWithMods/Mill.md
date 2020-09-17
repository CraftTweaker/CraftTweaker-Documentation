# Molino

## Receta básica

* Añade una receta de aserradero 

```zenscript
mods.betterwithmods.Mill.addRecipe(entradas IIngredient[], salidas ItemStack[]);
//Ejemplos
mods.betterwithmods.Mill.addRecipe([<minecraft:dirt>],[<minecraft:stone>]);
```

## Eliminar

* Elimina una receta de molino basada en la salida

```zenscript
mods.betterwithmods.Mill.remove(ItemStack[] salidas);
```

* Quitar todas las recetas del molino

```zenscript
mods.betterwithmods.Mill.removeAll();
```

## Constructor

El molino tiene un constructor de recetas que permite un control más preciso de las recetas. Todos los métodos anteriores son simplemente atajos al uso del constructor.

* Crear un nuevo constructor de molino. `mods.betterwithmods.Mill.builder()`

* Métodos constructores de molino
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              Sets up the inputs and outputs of the recipe<br />
                    zenscript
                    buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * Establece la prioridad de la receta, cuanto más baja sea la prioridad, más pronto será fabricada. Default=0.  
          zenscript setPriority(int priority)  
              zenscript
              setPriority(int priority)
     
     * Set the sound of a Mill Recipe.  
          zenscript setSound(String soundLocation)  
              zenscript
              setSound(String soundLocation)
     
     * Finalize the recipe and add it to the game  
          zenscript build()  
              Finalize the recipe and add it to the game<br />
                    zenscript
                    build()

### Ejemplo de uso del constructor

```zenscript
mods.betterwithmods.Mill.builder()
.buildRecipe([<minecraft:stone>], [<minecraft:stone>])
.setGrindType("minecraft:entity.ghast.scream")
.build();
```