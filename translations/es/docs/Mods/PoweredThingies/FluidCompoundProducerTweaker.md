# Cosas Energizadas :: Productor Compuesto Fluido

### Importando

```zenscript
importar mods.poweredthingies.Tweaker.fluidCompoundTweaker como fct;
```

### Lista de llaves, eliminación de recetas por llave, limpieza

```zenscript
fct().logKeys()
fct().removeRecipe('liquid:fluid_tf-molten_tesla') // comprueba <logKeys> salida para claves válidas
fct().clear()
```

### Añadiendo receta

##### Firma

```zenscript
addRecipe(output: ILiquidStack, inputA: ILiquidStack, inputB: ILiquidStack)
```

##### Ejemplo

```zenscript
fct().addRecipe(<liquid:tf-sewage> * 150, <liquid:water> * 300, <liquid:lava> * 100);
```

### Notas

Todas estas acciones se almacenarán en caché y se ejecutarán después de que el registro por defecto de esta máquina haya terminado de registrar todas las recetas (incluyendo las de los json personalizados).