# Caldero

## Receta básica

* Añade una receta de caldero no estocada 

```zenscript
mods.betterwithmods.Cauldron.addUnstoked(entradas IIngredient[], ItemStack[] salidas);
//Ejemplos
mods.betterwithmods.Cauldron.addUnstoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Cauldron.addUnstoked([<minecraft:dirt>],[<minecraft:grass>]);
```

* Añade una receta de caldero almacenado 

```zenscript
mods.betterwithmods.Cauldron.addStoked(IIngredient[] entradas, ItemStack[] salidas);
//Ejemplos
mods.betterwithmods.Cauldron.addStoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Cauldron.addStoked([<minecraft:dirt>],[<minecraft:grass>]);
```

## Eliminar

* Remueve una receta de caldero basada en la salida ```mods.betterwithmods.Cauldron.remove(IItemStack[] salidas);```

* Quitar todas las recetas de caldero ```mods.betterwithmods.Cauldron.removeAll();```

## Constructor

El caldero tiene un constructor de recetas que permite un control más preciso de las recetas. Todos los métodos anteriores son simplemente atajos al uso del constructor.

* Crear un nuevo constructor de caldero. `mods.betterwithmods.Cauldron.builder()`

* Métodos de caldero
    
    * Sets up the inputs and outputs of the recipe  
        buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
            receta de compilación (IIngredient[] entradas, ItemStack[] salidas)
    
    * Establece la prioridad de la receta, cuanto más baja sea la prioridad, más pronto será fabricada. Default=0.  
        setPriority(int priority)  
            setPriority(prioridad int)
    
    * Establecer los requisitos de calor de la receta. El calor se utiliza para comprobar si la receta se puede hacer en un calderón horneado o sin horno. Calor no ahumado = 1, Calor almacenado = 2. You can add custom heat sources, and even custom heat levels using the [Heat Registry](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
        setHeat(int heat)  
            setHeat(int heat)
    
    * Set the recipe to ignore the heat value and craft anyways  
        setIgnoreHeat(boolean ignoreHeat)  
            setIgnoreHeat(boolean ignoreHeat)
    
    * Finalize the recipe and add it to the game  
        build()  
            construcción()

### Ejemplo de uso del constructor

```zenscript
mods.betterwithmods.Cauldron.builder()
.buildRecipe([<ore:stone>], [<minecraft:dirt>])
.setHeat(2)
.setPriority(-1)
.build();
```