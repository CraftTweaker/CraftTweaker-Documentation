# Cosas Energizadas :: Corredor de fluidos :: Coolante

### Importando

```zenscript
importar mods.poweredthingies.Tweaker.fluidBurnerCoolantTweaker como refrigerante;
```

### Lista de llaves, eliminación de recetas por llave, limpieza

```zenscript
coolant().logKeys()
coolant().removeRecipe('teslathingies:fluid_tf-molten_tesla') // verifica <logKeys> la salida de claves válidas
coolant().clear()
```

### Añadiendo receta

##### Firma

```zenscript
addCoolant(fluido: ILiquidStack, timeMultiplier: Float)
```

`timeMultiplier` es el valor que se utilizará para aumentar (o disminuir) el número de ticks para los que se quemará un combustible.

##### Ejemplo

```zenscript
coolant().addCoolant(<liquid:tf-sewage> * 50, 1.1);
```

### Notas

Todas estas acciones se almacenarán en caché y se ejecutarán después de que el registro por defecto de esta máquina haya terminado de registrar todas las recetas (incluyendo las de los json personalizados).