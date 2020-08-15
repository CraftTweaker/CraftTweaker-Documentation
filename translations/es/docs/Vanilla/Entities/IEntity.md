# IEntity

Interfaz de entidad. Utilizado para obtener y modificar los datos de las entidades informativas.  
Las entidades son todo lo que se puede mover libremente en el mundo, como jugadores, monstruos, objetos sobre el suelo muchos más.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.entity.Itity;`

## Extendiendo ICommandSender

Itity extends [ICommandSender](/Vanilla/Commands/ICommandSender/). Esto significa que todos los métodos disponibles para [ICommandSender](/Vanilla/Commands/ICommandSender/) Objetos también están disponibles para objetos de IEntity.

<details><summary>Métodos derivados</summary> 

- entidad.displayName
- entidad.posición
- entidad.mundo
- entidad.servidor
- entity.sendMessage(String text)</details>

## ZenGetters

| Obtener nombre               | Método            | Tipo de retorno (*puede ser nulo*)                                 |
| ---------------------------- | ----------------- | ------------------------------------------------------------------ |
| aire                         | getAir()          | int                                                                |
| alive                        | isAlive()         | boolean                                                            |
| alwaysRenderNameTag          |                   | boolean                                                            |
| armerInventario              |                   | Lista <[ItemStack](/Vanilla/Items/IItemStack/)                     |
| No se puede atacar el objeto |                   | boolean                                                            |
| puede colapsar con           |                   | boolean                                                            |
| canPassengerSteer            |                   | boolean                                                            |
| canRiderInteract             |                   | boolean                                                            |
| controllingPassenger         |                   | *IEntity*                                                          |
| nombre personalizado         | getCustomName()   | cadena                                                             |
| definición                   |                   | *[Definición de la entidad](/Vanilla/Entities/IEntityDefinition/)* |
| dimensión                    | getDimension()    | int                                                                |
| saciar Placa de Presión      |                   | boolean                                                            |
| equipo y armadura            |                   | Lista <[ItemStack](/Vanilla/Items/IItemStack/)                     |
| altura de ojos               |                   | flotante                                                           |
| hasCustomName                |                   | boolean                                                            |
| hasNoGravity                 |                   | boolean                                                            |
| equipo retenido              |                   | Lista <[ItemStack](/Vanilla/Items/IItemStack/)                     |
| id                           |                   | int                                                                |
| inmuneToFire                 | isImmuneToFire()  | boolean                                                            |
| isBeingRidden                |                   | boolean                                                            |
| isBoss                       |                   | boolean                                                            |
| es Ardiente                  |                   | boolean                                                            |
| es brillante                 |                   | boolean                                                            |
| isImmuneToExplosions         |                   | boolean                                                            |
| isInLava                     |                   | boolean                                                            |
| es dentro de un bloque       |                   | boolean                                                            |
| es invisible                 |                   | boolean                                                            |
| no es vulnerable             |                   | boolean                                                            |
| isInWater                    |                   | boolean                                                            |
| fuera de la frontera         |                   | boolean                                                            |
| es Agua                      |                   | boolean                                                            |
| es enviado por agua          |                   | boolean                                                            |
| se está preparando           |                   | boolean                                                            |
| isSilent                     |                   | boolean                                                            |
| isSneaking                   |                   | boolean                                                            |
| isSprinting                  |                   | boolean                                                            |
| lowestRidingEntity           |                   | *IEntity*                                                          |
| altura máxima                |                   | int                                                                |
| tiempo máximo en el portal   |                   | int                                                                |
| partes                       |                   | Ientidad[]                                                         |
| pasajeros                    | getPassengers()   | Lista<IEntity\>                                                   |
| passengersRecursive          |                   | Lista<IEntity\>                                                   |
| portalCooldowne              |                   | int                                                                |
| posición 3f                  | getPosition3f()   | [Posición 3f](/Vanilla/Utils/Position3f/)                          |
| Entidad de montaje           | getRidingEntity() | *IEntity*                                                          |
| debería RiderSit             |                   | boolean                                                            |
| etiquetas                    |                   | Lista<string\>                                                    |
| equipo                       |                   | *[ITeam](/Vanilla/Game/ITeam/)*                                    |
| húmedo                       | isWet()           | boolean                                                            |
| mundo                        |                   | [IWorld](/Vanilla/World/IWorld/)                                   |
| x                            | getX()            | doble                                                              |
| y                            | getY()            | doble                                                              |
| z                            | getZ()            | doble                                                              |
| mociónX                      |                   | doble                                                              |
| movimientoY                  |                   | doble                                                              |
| motionZ                      |                   | doble                                                              |
| posX                         |                   | doble                                                              |
| posY                         |                   | doble                                                              |
| posZ                         |                   | doble                                                              |
| rotationYaw                  |                   | flotante                                                           |
| tono de rotación             |                   | flotante                                                           |
| mirando dirección            |                   | [IVector3d](/Vanilla/World/IVector3d/)                             |

## ZenSetters

| Nombre del Setter    | Método de configuración | Tipo de parámetro                      |
| -------------------- | ----------------------- | -------------------------------------- |
| aire                 | setAir(segundos)        | int                                    |
| alwaysRenderNameTag  |                         | boolean                                |
| nombre personalizado | setCustomName(nombre)   | cadena                                 |
| dimensión            | setDimension(id)        | int                                    |
| fuego                | setFire(segundos)       | int                                    |
| hasNoGravity         |                         | boolean                                |
| id                   |                         | int                                    |
| es brillante         |                         | boolean                                |
| es invisible         |                         | boolean                                |
| fuera de la frontera |                         | boolean                                |
| isSilent             |                         | boolean                                |
| isSneaking           |                         | boolean                                |
| isSprinting          |                         | boolean                                |
| posición             | setPosition(pos)        | [IBlockPos](/Vanilla/World/IBlockPos/) |
| rotationYaw          |                         | flotante                               |
| tono de rotación     |                         | flotante                               |
| mociónX              |                         | doble                                  |
| movimientoY          |                         | doble                                  |
| motionZ              |                         | doble                                  |
| posX                 |                         | doble                                  |
| posY                 |                         | doble                                  |
| posZ                 |                         | doble                                  |

## Más ZenMethods

- boolean attackEntityFrom([IDamageSource fuente](/Vanilla/Damage/IDamageSource/) , cantidad decimal);
- booleano canTrample([IWorld](/Vanilla/World/IWorld/) mundo, [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) bloque, [IBlockPos](/Vanilla/World/IBlockPos/) pos, float fall);
- boolean isInsideOfMaterial([IMaterial](/Vanilla/Blocks/IMaterial/) material);
- doble getDistanceSqToEntity(entity); → Devuelve la distancia a la entidad dada
- [IData](/Vanilla/Data/IData/) getNBT();
- [ItemStack](/Vanilla/Items/IItemStack/) getPickedResult(); → Devuelve el elemento [](/Vanilla/Items/IItemStack/) que retornaría la entidad (e. . el identificador del artículo que la entidad es un elemento o el elemento de minecart)
- vacío addTag(String tag);
- vacía extinguish(); → Extingúa la entidad, si está en fuego
- anular onEntityUpdate();
- void onKillCommand();
- anular onUpdate();
- vaciar removeTag(String tag);
- void setDead(); → Mata la entidad
- anular spawnRunningParcles();
- anular pasajeros removidos ();
- anular desmontaje. Entidad();
- boolean isOnSameTeam(IEntity other);
- void setInWeb();
- boolean isEntityEqual(IEntity other);
- boolean isInvulnerableTo([fuente IDamageSource](/Vanilla/Damage/IDamageSource/));
- boolean shouldRiderDismountInWater(IEntity rider)
- boolean boolean isPassenger(IEntity entity);
- boolean isRidingSameEntity(IEntity other);
- [IRayTraceResult](/Vanilla/World/IRayTraceResult/) getRayTrace(double blockReachDistance, float partialTicks, @Optional boolean stopOnLiquid, @Optional boolean ignoreBlockWithoutBoundingBox, @Optional(valueBoolean = true) boolean returnLastUncollidableBlock);
- nuid update([IData](/Vanilla/Data/IData/) data);
- onGround(); → Devuelve verdadero si la entidad está en el suelo, y falso cuando está en el aire