# IEntityLiving

A living Entity is one that has health and that can die.  
Unlike [IEntityLivingBase](IEntityLivingBase) however, players don't are IEnitiyLiving objects!


## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityLiving;`

## Extending [IEntityLivingBase](IEntityLivingBase)
IEntityLiving extends [IEntityLivingBase](IEntityLivingBase). That means all functions available to [IEntityLivingBase](IEntityLivingBase) objects also are available to IEntityLiving objects.

## Methods
### ZenGetters/ZenSetters

| ZenGetter               | ZenSetter                   | Type                                    |
|-------------------------|-----------------------------|-----------------------------------------|
| attackInterval          |                             | int                                     |
| attackTarget            | attackTarget                | [IEntityLivingBase](IEntityLivingBase)  |
| canBeSteered            |                             | bool                                    |
| canPickUpLoot           | canPickUpLoot               | bool                                    |
| canSpawnHere            |                             | bool                                    |
| getLeashedToEntity      |                             | [IEntity](IEntity)                      |
| isAIDisabled            | isAIDisabled                | bool                                    |
| isAIDisabled            | isAIDisabled                | bool                                    |
| isColliding             |                             | bool                                    |
| isLeashed               |                             | bool                                    |
| isLeftHanded            | isLeftHanded                | bool                                    |
| isNoDespawnRequired     |                             | bool                                    |
| maxSpawnedInChunk       |                             | int                                     |
|                         | moveForward                 | float                                   |
|                         | moveStrafing                | float                                   |
|                         | moveVertival                | float                                   |
| renderSizeModifier      |                             | float                                   |



### ZenMethods
#### Play living sound
Requires no parameters.  
Returns nothing.
```
ebtLiv.playLivingSound();
```

#### Spawn explosion particles
Requires no parameters.  
Returns nothing.
```
ebtLiv.spawnExplosionParticle();
```

#### Set the drop chance for an Equipment Slot
Requires an [IEntityEquipmentSlot](IEntityEquipmentSlot) object and a float.  
Returns nothing.
```
ebtLiv.setDropChance(IEntityEquipmentSlot slot, float chance);
```

#### Enable Persistence
Requires no parameters.  
Returns nothing.
```
ebtLiv.enablePersistence();
```

#### Lashes
First method requires an [IEntity](IEntity) object, a boolean and returns nothing.
Second method requires two booleans and returns nothing.  
Third method requires an [IPlayer](/Vanilla/Players/IPlayer) object and returns a bool.

```
ebtLiv.setLeashedToEntity(IEntity enttiy, boolean sendAttachNotification);
ebtLiv.clearLeashed(boolean sendPacket, boolean dropLead);
ebtLiv.canBeLeashedTo(IPlayer player);
```