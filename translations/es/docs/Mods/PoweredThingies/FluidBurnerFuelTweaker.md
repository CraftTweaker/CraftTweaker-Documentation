# Cosas de energía :: Cortador de fluidos :: Petróleo :: Petróleo

### Importando

```zenscript
importar mods.poweredthingies.Tweaker.fluidBurnerFuelTweaker como combustible;
```

### Lista de llaves, eliminación de recetas por llave, limpieza

```zenscript
fuel().logKeys()
fuel().removeRecipe('liquid:fluid_lava') // comprueba <logKeys> salida para claves válidas
fuel().clear()
```

### Añadiendo receta

##### Firma

```zenscript
addFuel(fluido: ILiquidStack, ticks: Int)
```

`ticks` representa el número de ticks para los que se quemará el combustible especificado.

##### Ejemplo

```zenscript
fuel().addFuel(<liquid:tf-sewage> * 50, 100);
```

### Notas

Todas estas acciones se almacenarán en caché y se ejecutarán después de que el registro por defecto de esta máquina haya terminado de registrar todas las recetas (incluyendo las de los json personalizados).