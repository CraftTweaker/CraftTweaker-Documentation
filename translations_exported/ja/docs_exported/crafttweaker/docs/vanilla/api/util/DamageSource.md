# DamageSource

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.DamageSource;
```


## Methods

### canBypassCreative

Checks if the damage can bypass creative mode.

Return Type: boolean

```zenscript
DamageSource.canBypassCreative() as boolean
myDamageSource.canBypassCreative();
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

| 名称              | Type                                     | Has Getter | Has Setter |
| --------------- | ---------------------------------------- | ---------- | ---------- |
| absolute        | boolean型                                 | true       | false      |
| bypassCreative  | boolean型                                 | true       | false      |
| explosion       | boolean型                                 | true       | false      |
| fire            | boolean型                                 | true       | false      |
| hungerDamage    | float                                    | true       | false      |
| immediateSource | [MCEntity](/vanilla/api/entity/MCEntity) | true       | false      |
| magic           | boolean型                                 | true       | false      |
| projectile      | boolean型                                 | true       | false      |
| trueSource      | [MCEntity](/vanilla/api/entity/MCEntity) | true       | false      |
| type            | string                                   | true       | false      |
| unblockable     | boolean型                                 | true       | false      |

