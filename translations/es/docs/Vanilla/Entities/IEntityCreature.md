# Criatura de la entidad

Una criatura.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.entity.IEntityCreature;`

## Extendiendo [ItityLiving](/Vanilla/Entities/IEntityLiving/)

IEntityCreature extiende [IEntityLiving](/Vanilla/Entities/IEntityLiving/). Eso significa que todas las funciones disponibles para los objetos [IEntityLiving](/Vanilla/Entities/IEntityLiving/) también están disponibles para IEntityCreature.

## Métodos

### ZenGetters/Setters

| ZenGetter           | Tipo                                   |
| ------------------- | -------------------------------------- |
| hasPath             | pluma                                  |
| es sin omitir       | pluma                                  |
| posición de inicio  | [IBlockPos](/Vanilla/World/IBlockPos/) |
| maximumHomeDistance | flotante                               |
| hasHome             | pluma                                  |

### Métodos

#### reproducir sonido vivo

El método no espera nada.  
Devuelve nada.

```zenscript
entCreObj.playLivingSound();
```

#### Establecer o separar casa

El primer método espera un objeto [IBlockPos](/Vanilla/World/IBlockPos/) y un int.  
El segundo método no espera nada.  
Ambos métodos no retornan nada.

```zenscript
entAnObj.setHomePositionAndDistance(IBlockPos pos, int distance);
entAnObj.detachHome();
```

#### Comprobar si una posición está dentro de la distancia de inicio

El método espera un objeto [IBlockPos](/Vanilla/World/IBlockPos/) .  
Devuelve un bool.

```zenscript
entera de un objetivo es una posición con una distancia mínima
```