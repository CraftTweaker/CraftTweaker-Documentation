# Elaborador Compuesto de Objetos :: Productor

### Importando

```zenscript
importar mods.poweredthingies.Tweaker.itemCompoundProducerTweaker como icp;
```

### Lista de llaves, eliminación de recetas por llave, limpieza

```zenscript
icp().logKeys()
icp().removeRecipe('minecraft:mossy_cobblestone') // comprueba <logKeys> salida para claves válidas 
icp().clear()
```

### Añadiendo receta

##### Firma

```zenscript
addRecipe(inputStack: IItemStack, inputFluid: ILiquidStack, result: IItemStack)
```

##### Ejemplo

```zenscript
icp().addRecipe(<minecraft:cobblestone>, <liquid:water> * 125, <minecraft:mossy_cobblestone>);
```

### Notas

Todas estas acciones se almacenarán en caché y se ejecutarán después de que el registro por defecto de esta máquina haya terminado de registrar todas las recetas (incluyendo las de los json personalizados).