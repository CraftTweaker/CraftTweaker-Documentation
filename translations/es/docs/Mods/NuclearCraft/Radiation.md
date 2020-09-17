# Radiación
**Nota: ¡El doble conjunto de corchetes `([...])` no es necesario aquí!**

## Radiación
Este método obtiene la radiación de un `IIngrediente` en rads/tick.
```zenscript
mods.nuclearcraft.radiation.getRadiationLevel(itemInput);
```
## Mutaciones de bloques
Este método añade una mutación de bloques. El bloque no mutará cuando la radiación esté por debajo del umbral de radiación ``.
```zenscript
mods.nuclearcraft.radiation.addBlockMutation(blockInput, blockOututput, double radiationThreshold);
```

## Inmunidad por radiación
Este método da la capacidad de controlar la inmunidad de los jugadores dependiendo del escenario. `defaultInmunity` es un booleano que especifica la inmunidad de los jugadores sin las etapas especificadas. `stageNames` es un array de los nombres de todas las etapas que pueden cambiar la inmunidad de los jugadores.
```zenscript
mods.nuclearcraft.radiation.setRadiationImmunityGameStages(booleano defaultImmunity, string[] stageNames);
```

## Radiation Getters/Setters

### Añadiendo Radiation
`cantidad` es la cantidad de radiación añadida a la `IEntityLivingBase`. `useInmunity` controla si la función ocurre incluso la `IEntityLivingBase` es inmune.
```zenscript
IEntityLivingBase.addRadiation(doble monto, @Optional boolean useImmunity);
```

### Ajustes de radiación
`cantidad` es el nivel de radiación que se aplica a la `IEntityLivingBase`. `useInmunity` controla si la función ocurre incluso la `IEntityLivingBase` es inmune.
```zenscript
IEntityLivingBase.setRadiation(doble monto, @Optional boolean useImmunity);
```

### Obteniendo Radiación
Este método devuelve el nivel de radiación de la `IEntityLivingBase`.
```zenscript
IEntityLivingBase.getRadiation();
```

## Búfer Radaway Getters/Setters

### Añadiendo Búfer Radaway
`cantidad` es la cantidad de Radaway Buffer añadido a la `IEntityLivingBase`. `lento Buffer` decide si el Radaway Buffer añadido es un búfer lento.
```zenscript
ItityLivingBase.addRadiationResistance(doble cantidad, @Optional boolean slowBuffer);
```
### Ajuste de Búfer Radaway
`cantidad` es la cantidad de Buffer Radaway que se aplica a la `IEntityLivingBase`. `lento Buffer` decide si el Radaway Buffer añadido es un búfer lento.
```zenscript
ItityLivingBase.setRadiationResistance(doble cantidad, @Optional boolean slowBuffer);
```

### Obteniendo Búfer Radaway
Este método devuelve el Buffer Radaway de la `IEntityLivingBase`. `slowBuffer` determina si el búfer lento está incluido en el valor devuelto.
```zenscript
ItityLivingBase.getRadiationResistance(@Optional boolean slowBuffer);
```

## Getters/Setters del Búfer Veneno

### Añadiendo Búfer de Veneno
`cantidad` es la cantidad de Búfer de Veneno añadido a la `IEntityLivingBase`.
```zenscript
ItityLivingBase.addPoisonBuffer(doble cantidad);
```
### Configurar Búfer de Veneno
`cantidad` es la cantidad de Búfer de Veneno que se aplica a la `IEntityLivingBase`.
```zenscript
ItityLivingBase.setPoisonBuffer(doble cantidad);
```

### Obteniendo Búfer de Veneno
Este método devuelve el Búfer de Veneno de la `IEntityLivingBase`.
```zenscript
IEntityLivingBase.getPoisonBuffer();
```

## Getters/Setters de Resistencia a Radiación
### Añadiendo Resistencia a Radiación
`cantidad` es la cantidad de Resistencia a Radiación añadida a la `IEntityLivingBase`.
```zenscript
ItityLivingBase.addRadawayBuffer(doble cantidad);
```
## Establecer Resistencia a Radiación
`cantidad` es la cantidad de Resistencia a Radiación que se aplica a la `IEntityLivingBase`.
```zenscript
ItityLivingBase.setRadawayBuffer(doble cantidad);
```

## Obteniendo Resistencia a Radiación
Este método devuelve la Resistencia a Radiación de la `IEntityLivingBase`.
```zenscript
IEntityLivingBase.getRadawayBuffer();
```
## Obtención de Nivel de Radiación

### Nivel de radiación rauda
Este método devuelve la radiación de la `IEntityLivingBase` en rads.
```zenscript
IEntityLivingBase.getRawRadiationLevel();
```

### Nivel de radiación
Este método devuelve el cambio en el nivel de radiación de la `IEntityLivingBase` en rads/tick.
```zenscript
IEntityLivingBase.getRadiationLevel();
```