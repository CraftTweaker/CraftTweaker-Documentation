# Arrow

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.projectile.arrow.Arrow;
```


## Extending Projectile

Arrow extends [Projectile](/vanilla/api/entity/type/projectile/Projectile). That means all methods available in [Projectile](/vanilla/api/entity/type/projectile/Projectile) are also available in Arrow

## Methods

:::group{name=getBaseDamage}

Gets the base damage that this arrow does.

Returns: The base damage of this arrow.  
Return Type: double

```zenscript
// Arrow.getBaseDamage() as double

myArrow.getBaseDamage();
```

:::

:::group{name=getKnockback}

Gets the knockback of this arrow.

Returns: The knockback of this arrow.  
Return Type: int

```zenscript
// Arrow.getKnockback() as int

myArrow.getKnockback();
```

:::

:::group{name=getPierceLevel}

Gets the pierce level of this arrow.

Returns: the pierce level of this arrow.  
Return Type: byte

```zenscript
// Arrow.getPierceLevel() as byte

myArrow.getPierceLevel();
```

:::

:::group{name=isCritArrow}

Checks whether this arrow is a crit arrow.

Returns: true if this is a crit arrow, false otherwise.  
Return Type: boolean

```zenscript
// Arrow.isCritArrow() as boolean

myArrow.isCritArrow();
```

:::

:::group{name=isNoPhysics}

Checks if this arrow has physics or not.

Returns: true if this arrow doesn't have physics, false otherwise.  
Return Type: boolean

```zenscript
// Arrow.isNoPhysics() as boolean

myArrow.isNoPhysics();
```

:::

:::group{name=setBaseDamage}

Sets the base damage that this arrow does.

```zenscript
// Arrow.setBaseDamage(damage as double)

myArrow.setBaseDamage(0.5);
```

| Parameter |  Type  |   Description    |
|-----------|--------|------------------|
| damage    | double | The base damage. |


:::

:::group{name=setCritArrow}

Sets this the crit value of this arrow.

```zenscript
// Arrow.setCritArrow(crit as boolean)

myArrow.setCritArrow(true);
```

| Parameter |  Type   |      Description       |
|-----------|---------|------------------------|
| crit      | boolean | The crit value to set. |


:::

:::group{name=setEnchantmentEffectsFromEntity}

Sets the values of this arrow based on the enchantments the given entity has. This handles setting the knockback if the bow has a knockback enchantment.

```zenscript
// Arrow.setEnchantmentEffectsFromEntity(entity as LivingEntity, distanceFactor as float)

myArrow.setEnchantmentEffectsFromEntity(entity, 1);
```

|   Parameter    |                       Type                       |           Description           |
|----------------|--------------------------------------------------|---------------------------------|
| entity         | [LivingEntity](/vanilla/api/entity/LivingEntity) | The entity that fired the arrow |
| distanceFactor | float                                            | How charged is the bow.         |


:::

:::group{name=setKnockback}

Sets the knockback of this arrow.

```zenscript
// Arrow.setKnockback(knockback as int)

myArrow.setKnockback(5);
```

| Parameter | Type |     Description      |
|-----------|------|----------------------|
| knockback | int  | The knockback value. |


:::

:::group{name=setNoPhysics}

Sets if this arrow has physics or not.

```zenscript
// Arrow.setNoPhysics(noPhysics as boolean)

myArrow.setNoPhysics(true);
```

| Parameter |  Type   |            Description            |
|-----------|---------|-----------------------------------|
| noPhysics | boolean | If this arrow has physics or not. |


:::

:::group{name=setPierceLevel}

Sets the pierce level of this arrow.

```zenscript
Arrow.setPierceLevel(pieceLevel as byte)
```

| Parameter  | Type |           Description           |
|------------|------|---------------------------------|
| pieceLevel | byte | The pierce level of this arrow. |


:::

:::group{name=setShotFromCrossbow}

Sets if this arrow was shot from a crossbow or not.

```zenscript
// Arrow.setShotFromCrossbow(shotFromCrossbow as boolean)

myArrow.setShotFromCrossbow(true);
```

|    Parameter     |  Type   |                  Description                   |
|------------------|---------|------------------------------------------------|
| shotFromCrossbow | boolean | If this arrow was shot from a crossbow or not. |


:::

:::group{name=setSoundEvent}

Sets the sound event that this arrow plays when it hits an entity or block.

```zenscript
Arrow.setSoundEvent(event as SoundEvent)
```

| Parameter |                    Type                     |         Description          |
|-----------|---------------------------------------------|------------------------------|
| event     | [SoundEvent](/vanilla/api/sound/SoundEvent) | The sound event to play when |


:::

:::group{name=shotFromCrossbow}

Checks if this arrow was shot from a crossbow.

Returns: true if it was shot from a crossbow, false otherwise.  
Return Type: boolean

```zenscript
// Arrow.shotFromCrossbow() as boolean

myArrow.shotFromCrossbow();
```

:::


## Properties

|       Name       |                           Type                           | Has Getter | Has Setter |                                 Description                                 |
|------------------|----------------------------------------------------------|------------|------------|-----------------------------------------------------------------------------|
| baseDamage       | [Arrow](/vanilla/api/entity/type/projectile/arrow/Arrow) | true       | true       | Sets the base damage that this arrow does.                                  |
| isCritArrow      | [Arrow](/vanilla/api/entity/type/projectile/arrow/Arrow) | true       | true       | Sets this the crit value of this arrow.                                     |
| isNoPhysics      | [Arrow](/vanilla/api/entity/type/projectile/arrow/Arrow) | true       | true       | Sets if this arrow has physics or not.                                      |
| knockback        | [Arrow](/vanilla/api/entity/type/projectile/arrow/Arrow) | true       | true       | Sets the knockback of this arrow.                                           |
| pierceLevel      | [Arrow](/vanilla/api/entity/type/projectile/arrow/Arrow) | true       | true       | Sets the pierce level of this arrow.                                        |
| shotFromCrossbow | [Arrow](/vanilla/api/entity/type/projectile/arrow/Arrow) | false      | true       | Sets if this arrow was shot from a crossbow or not.                         |
| soundEvent       | [Arrow](/vanilla/api/entity/type/projectile/arrow/Arrow) | false      | true       | Sets the sound event that this arrow plays when it hits an entity or block. |

