# Cosas Energizadas :: Incinerador

### Importando

```zenscript
importar mods.poweredthingies.Tweaker.incineratorTweaker como ese;
```

### Lista de llaves, eliminación de recetas por llave, limpieza

```zenscript
it().logKeys()
it().removeRecipe('minecraft:log') // verifica <logKeys> la salida para las claves válidas
it().clear()
```

### Añadiendo receta

##### Firma

```zenscript
addRecipe(entrada: IItemStack, potencia: Long, salidas: Array<WeightedItemStack>)
```

`power` representa el número total de unidades de energía (RF, T o FE) que generará el elemento de entrada.

##### Ejemplo

```zenscript
it().addRecipe(<minecraft:bucket>, 3600, [<minecraft:iron_ingot> % 15]);
```

### Notas

Todas estas acciones se almacenarán en caché y se ejecutarán después de que el registro por defecto de esta máquina haya terminado de registrar todas las recetas (incluyendo las de los json personalizados).