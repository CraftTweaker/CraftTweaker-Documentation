# Crisol

## Receta básica

* Añade una Receta Crucible no estocada 

```zenscript
mods.betterwithmods.Crucible.addUnstoked(IIngredient[] entradas, ItemStack[] salidas);
//Ejemplos
mods.betterwithmods.Crucible.addUnstoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Crucible.addUnstoked([<minecraft:dirt>],[<minecraft:grass>]);
```

* Añade una receta de Crucible acechada 

```zenscript
mods.betterwithmods.Crucible.addStoked(IIngredient[] entradas, ItemStack[] salidas);
//Ejemplos
mods.betterwithmods.Crucible.addStoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Crucible.addStoked([<minecraft:dirt>],[<minecraft:grass>]);
```

## Eliminar

* Elimina una receta de Crisol basada en la salida

```zenscript
mods.betterwithmods.Crucible.remove(ItemStack[] salidas);
```

* Quitar todas las recetas de Crucible

```zenscript
mods.betterwithmods.Crucible.removeAll();
```

## Constructor

El Crisol tiene un constructor de recetas que permite un control más preciso de las recetas. Todos los métodos anteriores son simplemente atajos al uso del constructor.

* Crear un nuevo constructor Crucible. `mods.betterwithmods.Crucible.builder()`

* Métodos Crucibles
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              Sets up the inputs and outputs of the recipe<br />
                    zenscript
                    buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * Establece la prioridad de la receta, cuanto más baja sea la prioridad, más pronto será fabricada. Default=0.  
          zenscript setPriority(int priority)  
              zenscript
              setPriority(int priority)
     
     * Establecer los requisitos de calor de la receta. Set the Heat requirements of the recipe. Calor no ahumado = 1, Calor almacenado = 2. You can add custom heat sources, and even custom heat levels using the [Heat Registry](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
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
mods.betterwithmods.Crucible.builder()
.buildRecipe([<ore:stone>], [<minecraft:dirt>])
.setHeat(2)
.setPriority(-1)
.build();
```