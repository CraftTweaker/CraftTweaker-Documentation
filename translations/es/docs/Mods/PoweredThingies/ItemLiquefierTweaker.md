# Cosas desarrolladas :: Liqueador de Objetos

### Importando

```zenscript
importar mods.poweredthingies.Tweaker.itemLiquefierTweaker como ilt;
```

### Lista de llaves, eliminación de recetas por llave, limpieza

```zenscript
ilt().logKeys()
ilt().removeRecipe('liquid:fluid_lava') // verifica <logKeys> la salida para las claves válidas
ilt().clear()
```

### Añadiendo receta

##### Firma

```zenscript
addRecipe(input: IItemStack, output: ILiquidStack)
```

##### Ejemplo

```zenscript
ilt().addRecipe(<minecraft:bucket>, <liquid:lava> * 125);
```

### Notas

Todas estas acciones se almacenarán en caché y se ejecutarán después de que el registro por defecto de esta máquina haya terminado de registrar todas las recetas (incluyendo las de los json personalizados).