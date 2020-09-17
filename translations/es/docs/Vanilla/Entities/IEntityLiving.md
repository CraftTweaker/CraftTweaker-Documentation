# IEntityLiving

Una Entidad viviente tiene salud y puede morir.  
A diferencia de [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) sin embargo, ¡los jugadores no son objetos IEnitiyLiving

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.entity.IEntityLiving;`

## Extendiendo [ItityLivingBase](/Vanilla/Entities/IEntityLivingBase/)

IEntityLiving extends [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/). Esto significa que todas las funciones disponibles para los objetos [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) también están disponibles para los objetos IEntityLiving .

## Métodos

### ZenGetters/ZenSetters

| ZenGetter             | Ajuste                | Tipo                                                      |
| --------------------- | --------------------- | --------------------------------------------------------- |
| intervalo de ataque   |                       | int                                                       |
| objetivo de ataque    | objetivo de ataque    | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| canguiado             |                       | pluma                                                     |
| canPickUpLoot         | canPickUpLoot         | pluma                                                     |
| puede aparecer aquí   |                       | pluma                                                     |
| getLeashed            |                       | [IEntity](/Vanilla/Entities/IEntity/)                     |
| isAIDeshabilitado     | isAIDeshabilitado     | pluma                                                     |
| isAIDeshabilitado     | isAIDeshabilitado     | pluma                                                     |
| isColliding           |                       | pluma                                                     |
| isLeashed             |                       | pluma                                                     |
| está a mano izquierda | está a mano izquierda | pluma                                                     |
| no es necesario       |                       | pluma                                                     |
| maxSpawnedInChunk     |                       | int                                                       |
|                       | mover hacia adelante  | flotante                                                  |
|                       | mover Strafing        | flotante                                                  |
|                       | mover Vertival        | flotante                                                  |
| renderizarModificador |                       | flotante                                                  |

### Métodos

#### Reproducir sonido vivo

No requiere parámetros.  
Devuelve nada.

```zenscript
ebtLiv.playLivingSound();
```

#### Generar partículas explosivas

No requiere parámetros.  
Devuelve nada.

```zenscript
ebtLiv.spawnExplosionParticle();
```

#### Establecer la oportunidad de soltar una ranura de equipamiento

Requiere un objeto [IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) y un float.  
Devuelve nada.

```zenscript
ebtLiv.setDropChance(ranura IEntityEquipmentSlot, oportunidad flotante);
```

#### Habilitar persistencia

No requiere parámetros.  
Devuelve nada.

```zenscript
ebtLiv.enablePersistence();
```

#### Lashes

El primer método requiere un objeto [Itity](/Vanilla/Entities/IEntity/) , un booleano y no devuelve nada. El segundo método requiere dos booleans y no devuelve nada.  
El tercer método requiere un objeto [IPlayer](/Vanilla/Players/IPlayer/) y devuelve un bool.

```zenscript
ebtLiv.setLeashedToEntity(Entidad Itity, boolean sendAttachNotification);
ebtLiv.clearLeashed(boolean sendPacket, boolean dropLead);
ebtLiv.canBeLeashedTo(IPlayer player);
```