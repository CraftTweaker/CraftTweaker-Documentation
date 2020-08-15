# IEntityLiving

A living Entity is one that has health and that can die.  
Unlike [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) however, players don't are IEnitiyLiving objects!

## Importando el paquete

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityLiving;`

## Extending [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)

IEntityLiving extends [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/). That means all functions available to [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) objects also are available to IEntityLiving objects.

## Métodos

### ZenGetters/ZenSetters

| ZenGetter           | Ajuste        | Tipo                                                      |
| ------------------- | ------------- | --------------------------------------------------------- |
| attackInterval      |               | int                                                       |
| attackTarget        | attackTarget  | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| canBeSteered        |               | pluma                                                     |
| canPickUpLoot       | canPickUpLoot | pluma                                                     |
| canSpawnHere        |               | pluma                                                     |
| getLeashedToEntity  |               | [IEntity](/Vanilla/Entities/IEntity/)                     |
| isAIDisabled        | isAIDisabled  | pluma                                                     |
| isAIDisabled        | isAIDisabled  | pluma                                                     |
| isColliding         |               | pluma                                                     |
| isLeashed           |               | pluma                                                     |
| isLeftHanded        | isLeftHanded  | pluma                                                     |
| isNoDespawnRequired |               | pluma                                                     |
| maxSpawnedInChunk   |               | int                                                       |
|                     | moveForward   | flotante                                                  |
|                     | moveStrafing  | flotante                                                  |
|                     | moveVertival  | flotante                                                  |
| renderSizeModifier  |               | flotante                                                  |

### Métodos

#### Play living sound

Requires no parameters.  
Returns nothing.

```zenscript
ebtLiv.playLivingSound();
```

#### Spawn explosion particles

Requires no parameters.  
Returns nothing.

```zenscript
ebtLiv.spawnExplosionParticle();
```

#### Set the drop chance for an Equipment Slot

Requires an [IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) object and a float.  
Returns nothing.

```zenscript
ebtLiv.setDropChance(IEntityEquipmentSlot slot, float chance);
```

#### Enable Persistence

Requires no parameters.  
Returns nothing.

```zenscript
ebtLiv.enablePersistence();
```

#### Lashes

First method requires an [IEntity](/Vanilla/Entities/IEntity/) object, a boolean and returns nothing. Second method requires two booleans and returns nothing.  
Third method requires an [IPlayer](/Vanilla/Players/IPlayer/) object and returns a bool.

```zenscript
ebtLiv.setLeashedToEntity(IEntity enttiy, boolean sendAttachNotification);
ebtLiv.clearLeashed(boolean sendPacket, boolean dropLead);
ebtLiv.canBeLeashedTo(IPlayer player);
```