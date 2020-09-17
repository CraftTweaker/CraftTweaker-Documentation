# Horno

## Receta básica

* Añade una receta de horno - entradas *DEBES* tener un bloque asociado con ellas.

```zenscript
mods.betterwithmods.Kiln.add(entrada IIngredient, salida ItemStack[]);
//Ejemplos
mods.betterwithmods.Kiln.add(<minecraft:fence>,[<minecraft:stick>,<minecraft:stick>]);
```

## Eliminar por entrada

* Elimina una receta basada en el ingrediente de entrada

```zenscript
mods.betterwithmods.Kiln.remove(entrada IIngredient);
```

## Eliminar por salida

* Elimina una receta basada en la salida

```zenscript
mods.betterwithmods.Kiln.remove(IItemStack[] outputs);
```

## Eliminar todo

* Eliminar todas las recetas

```zenscript
mods.betterwithmods.Kiln.removeAll();
```

## Constructor

El horno tiene un constructor de recetas que permite un control más preciso de las recetas. Todos los métodos anteriores son simplemente atajos al uso del constructor.

* Crear un nuevo constructor de Hornos. `mods.betterwithmods.Kiln.builder()`

* Métodos Kiln
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              Sets up the inputs and outputs of the recipe<br />
                    zenscript
                    buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * Establecer los requisitos de calor de la receta. El calor se utiliza para comprobar si la receta se puede hacer en un calderón horneado o sin horno. Calor no ahumado = 1, Calor almacenado = 2. You can add custom heat sources, and even custom heat levels using the [Heat Registry](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
          zenscript setHeat(int heat)  
              zenscript
              setHeat(int heat)
     
     * Set the recipe to ignore the heat value and craft anyways  
          zenscript setIgnoreHeat(boolean ignoreHeat)  
              Set the recipe to ignore the heat value and craft anyways<br />
                    zenscript
                    setIgnoreHeat(boolean ignoreHeat)
     
     * Finalize the recipe and add it to the game  
          zenscript build()  
              Finalize the recipe and add it to the game<br />
                    zenscript
                    build()

### Ejemplo de uso del constructor

```zenscript
mods.betterwithmods.Kiln.builder()
.buildRecipe([<ore:iron>], [<minecraft:iron_ingot>*2])
.setHeat(2)
.build();
```

## Bloque de estructura

El horno es un multibloque basado en el bloque que está hecho de; Esto permite registrar un bloque que puede ser usado para crear la estructura.

La entrada DEBE ser un bloque **

```zenscript
   mods.betterwithmods.Kiln.registerBlock(entrada IItemStack);

   mods.betterwithmods.Kiln.registerBlock(<minecraft:stonebrick>);
```