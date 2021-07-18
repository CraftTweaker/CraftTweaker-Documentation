# DamageSource

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.DamageSource;
```


## Methoden

### canBypassCreative

Checks if the damage can bypass creative mode.

Return Type: boolean

```zenscript
DamageSource.canBypassCreative() as boolean
myDamageSource.canBypassCreative();
```

### getDamageLocation

Gets the location where the damage occurred.

Return Type: [MCVector3d](/vanilla/api/util/MCVector3d)?

```zenscript
DamageSource.getDamageLocation() as MCVector3d?
myDamageSource.getDamageLocation();
```

### getDamageType

Gets the type of damage.

Return Type: string

```zenscript
DamageSource.getDamageType() as string
myDamageSource.getDamageType();
```

### getHungerDamage

Gets the amount of exhaustion to add to the player's hunger bar if they get hit by this damage.

Return Type: float

```zenscript
DamageSource.getHungerDamage() as float
myDamageSource.getHungerDamage();
```

### getImmediateSource

Gets the immediate source of the damage, like an arrow.

Return Type: [MCEntity](/vanilla/api/entity/MCEntity)

```zenscript
DamageSource.getImmediateSource() as MCEntity
myDamageSource.getImmediateSource();
```

### getTrueSource

Gets the true source of the damage, like the player who shot the arrow.

Return Type: [MCEntity](/vanilla/api/entity/MCEntity)

```zenscript
DamageSource.getTrueSource() as MCEntity
myDamageSource.getTrueSource();
```

### isAbsoluteDamage

Checks if the damage is absolute.

Return Type: boolean

```zenscript
DamageSource.isAbsoluteDamage() as boolean
myDamageSource.isAbsoluteDamage();
```

### isCreativePlayer

Gets whether the damage was inflicted by a creative player.

Return Type: boolean

```zenscript
DamageSource.isCreativePlayer() as boolean
myDamageSource.isCreativePlayer();
```

### isDifficultyScaled

Gets whether the damage changes strength based on the current difficulty.

Return Type: boolean

```zenscript
DamageSource.isDifficultyScaled() as boolean
myDamageSource.isDifficultyScaled();
```

### isExplosionDamage

Checks if the damage is caused by an explosion.

Return Type: boolean

```zenscript
DamageSource.isExplosionDamage() as boolean
myDamageSource.isExplosionDamage();
```

### isFireDamage

Checks if the damage is caused by fire or burning.

Return Type: boolean

```zenscript
DamageSource.isFireDamage() as boolean
myDamageSource.isFireDamage();
```

### isMagicDamage

Checks if the damage is caused by magic.

Return Type: boolean

```zenscript
DamageSource.isMagicDamage() as boolean
myDamageSource.isMagicDamage();
```

### isProjectileDamage

Checks if the damage is caused by a projectile.

Return Type: boolean

```zenscript
DamageSource.isProjectileDamage() as boolean
myDamageSource.isProjectileDamage();
```

### isUnblockableDamage

Checks if the damage can be blocked.

Return Type: boolean

```zenscript
DamageSource.isUnblockableDamage() as boolean
myDamageSource.isUnblockableDamage();
```


## Properties

| Name             | Type                                        | Has Getter | Has Setter |
| ---------------- | ------------------------------------------- | ---------- | ---------- |
| absolute         | boolean                                     | true       | false      |
| bypassCreative   | boolean                                     | true       | false      |
| creativePlayer   | boolean                                     | true       | false      |
| difficultyScaled | boolean                                     | true       | false      |
| explosion        | boolean                                     | true       | false      |
| fire             | boolean                                     | true       | false      |
| hungerDamage     | float                                       | true       | false      |
| immediateSource  | [MCEntity](/vanilla/api/entity/MCEntity)    | true       | false      |
| standort         | [MCVector3d](/vanilla/api/util/MCVector3d)? | true       | false      |
| magic            | boolean                                     | true       | false      |
| projectile       | boolean                                     | true       | false      |
| trueSource       | [MCEntity](/vanilla/api/entity/MCEntity)    | true       | false      |
| type             | string                                      | true       | false      |
| unblockable      | boolean                                     | true       | false      |

