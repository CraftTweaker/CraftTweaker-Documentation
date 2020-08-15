# IFoodStats

La interfaz de IPlayer te permite ver cierta información sobre las estadísticas de un jugador.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.player.IFoodStats;`

## ZenGetter/ZenSetters

| ZenGetter           | Ajuste              | Tipo     |
| ------------------- | ------------------- | -------- |
| nivel de comida     | nivel de comida     | int      |
| nivel de saturación | nivel de saturación | flotante |
| needFood            |                     | boolean  |

## Métodos

#### Añadiendo Estadísticas

Función de Vacío. Toma un int y un float como parámetros de intput (intput).

```zenscript
stats.addStats(int foodValue, float saturationLevel);
```

#### onUpdate

Función de Vacío. Toma un objeto [IPlayer](/Vanilla/Players/IPlayer/) como parámetro de entrada.

```zenscript
stats.onUpdate(jugador IPlay);
```

#### asNBT

Devuelve un Objeto IData que representa los foodStats.

```zenscript
stats.asNBT();
estadísticas como crafttweaker.data.IData;
```

#### Añadir Exhausción

Función de vacío. toma un flotante como parámetro de entrada.

```zenscript
stats.addExhaustion(agotamiento flotante);
```