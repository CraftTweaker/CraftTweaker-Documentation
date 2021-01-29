# MCLivingEntity

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.MCLivingEntity;
```


## Extending MCEntity

MCLivingEntity extends [MCEntity](/vanilla/api/entity/MCEntity). That means all methods available in [MCEntity](/vanilla/api/entity/MCEntity) are also available in MCLivingEntity

## Methods

### addPotionEffect

Return Type: boolean

```zenscript
MCLivingEntity.addPotionEffect(effectInstanceIn as MCPotionEffectInstance) as boolean
```
| Параметр         | Тип                                                                   | Description             |
| ---------------- | --------------------------------------------------------------------- | ----------------------- |
| effectInstanceIn | [MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No Description Provided |

### attackEntityAsMob

Return Type: boolean

```zenscript
MCLivingEntity.attackEntityAsMob(entityIn as MCEntity) as boolean
```
| Параметр | Тип                                      | Description             |
| -------- | ---------------------------------------- | ----------------------- |
| entityIn | [MCEntity](/vanilla/api/entity/MCEntity) | No Description Provided |

### canAttack

Return Type: boolean

```zenscript
MCLivingEntity.canAttack(target as MCLivingEntity) as boolean
```
| Параметр | Тип                                                  | Description             |
| -------- | ---------------------------------------------------- | ----------------------- |
| target   | [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) | No Description Provided |

Return Type: boolean

```zenscript
MCLivingEntity.canAttack(typeIn as MCEntityType) as boolean
```
| Параметр | Тип                                                | Description             |
| -------- | -------------------------------------------------- | ----------------------- |
| typeIn   | [MCEntityType](/vanilla/api/entities/MCEntityType) | No Description Provided |

### canBeRiddenInWater

Return Type: boolean

```zenscript
MCLivingEntity.canBeRiddenInWater() as boolean
myMCLivingEntity.canBeRiddenInWater();
```
### canBreatheUnderwater

Return Type: boolean

```zenscript
MCLivingEntity.canBreatheUnderwater() as boolean
myMCLivingEntity.canBreatheUnderwater();
```
### canEquip

Return Type: boolean

```zenscript
MCLivingEntity.canEquip(item as MCItemDefinition) as boolean
```
| Параметр | Тип                                                    | Description             |
| -------- | ------------------------------------------------------ | ----------------------- |
| item     | [MCItemDefinition](/vanilla/api/item/MCItemDefinition) | No Description Provided |

### clearActivePotions

Return Type: boolean

```zenscript
MCLivingEntity.clearActivePotions() as boolean
myMCLivingEntity.clearActivePotions();
```
### getAIMoveSpeed

Return Type: float

```zenscript
MCLivingEntity.getAIMoveSpeed() as float
myMCLivingEntity.getAIMoveSpeed();
```
### getActivePotionEffect

Return Type: [MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
MCLivingEntity.getActivePotionEffect(potionIn as MCPotionEffect) as MCPotionEffectInstance
```
| Параметр | Тип                                                   | Description             |
| -------- | ----------------------------------------------------- | ----------------------- |
| potionIn | [MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | No Description Provided |

### getActivePotionEffects

Return Type: Collection&lt;[MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)&gt;

```zenscript
MCLivingEntity.getActivePotionEffects() as Collection<MCPotionEffectInstance>
myMCLivingEntity.getActivePotionEffects();
```
### getActivePotionMap

Return Type: [MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)[[MCPotionEffect](/vanilla/api/potions/MCPotionEffect)]

```zenscript
MCLivingEntity.getActivePotionMap() as MCPotionEffectInstance[MCPotionEffect]
myMCLivingEntity.getActivePotionMap();
```
### getArmorCoverPercentage

Return Type: float

```zenscript
MCLivingEntity.getArmorCoverPercentage() as float
myMCLivingEntity.getArmorCoverPercentage();
```
### getArmorInventoryList

Return Type: stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;

```zenscript
MCLivingEntity.getArmorInventoryList() as stdlib.Iterable<ItemStack>
myMCLivingEntity.getArmorInventoryList();
```
### getArrowCountInEntity

Return Type: int

```zenscript
MCLivingEntity.getArrowCountInEntity() as int
myMCLivingEntity.getArrowCountInEntity();
```
### getAttackingEntity

Return Type: [MCLivingEntity](/vanilla/api/entity/MCLivingEntity)

```zenscript
MCLivingEntity.getAttackingEntity() as MCLivingEntity
myMCLivingEntity.getAttackingEntity();
```
### getBeeStingCount

Return Type: int

```zenscript
MCLivingEntity.getBeeStingCount() as int
myMCLivingEntity.getBeeStingCount();
```
### getHealth

Return Type: float

```zenscript
MCLivingEntity.getHealth() as float
myMCLivingEntity.getHealth();
```
### getHeldItemMainhand

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
MCLivingEntity.getHeldItemMainhand() as ItemStack
myMCLivingEntity.getHeldItemMainhand();
```
### getHeldItemOffhand

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
MCLivingEntity.getHeldItemOffhand() as ItemStack
myMCLivingEntity.getHeldItemOffhand();
```
### getIdleTime

Return Type: int

```zenscript
MCLivingEntity.getIdleTime() as int
myMCLivingEntity.getIdleTime();
```
### getLastAttackedEntity

Return Type: [MCLivingEntity](/vanilla/api/entity/MCLivingEntity)

```zenscript
MCLivingEntity.getLastAttackedEntity() as MCLivingEntity
myMCLivingEntity.getLastAttackedEntity();
```
### getLastAttackedEntityTime

Return Type: int

```zenscript
MCLivingEntity.getLastAttackedEntityTime() as int
myMCLivingEntity.getLastAttackedEntityTime();
```
### getMaxHealth

Return Type: float

```zenscript
MCLivingEntity.getMaxHealth() as float
myMCLivingEntity.getMaxHealth();
```
### getRevengeTarget

Return Type: [MCLivingEntity](/vanilla/api/entity/MCLivingEntity)

```zenscript
MCLivingEntity.getRevengeTarget() as MCLivingEntity
myMCLivingEntity.getRevengeTarget();
```
### getRevengeTimer

Return Type: int

```zenscript
MCLivingEntity.getRevengeTimer() as int
myMCLivingEntity.getRevengeTimer();
```
### getShouldBeDead

Return Type: boolean

```zenscript
MCLivingEntity.getShouldBeDead() as boolean
myMCLivingEntity.getShouldBeDead();
```
### getTotalArmorValue

Return Type: int

```zenscript
MCLivingEntity.getTotalArmorValue() as int
myMCLivingEntity.getTotalArmorValue();
```
### heal

Return Type: void

```zenscript
MCLivingEntity.heal(healAmount as float) as void
```
| Параметр   | Тип   | Description             |
| ---------- | ----- | ----------------------- |
| healAmount | float | No Description Provided |

### isAlive

Return Type: boolean

```zenscript
MCLivingEntity.isAlive() as boolean
myMCLivingEntity.isAlive();
```
### isChild

Return Type: boolean

```zenscript
MCLivingEntity.isChild() as boolean
myMCLivingEntity.isChild();
```
### isEntityUndead

Return Type: boolean

```zenscript
MCLivingEntity.isEntityUndead() as boolean
myMCLivingEntity.isEntityUndead();
```
### isOnLadder

Return Type: boolean

```zenscript
MCLivingEntity.isOnLadder() as boolean
myMCLivingEntity.isOnLadder();
```
### isPotionActive

Return Type: boolean

```zenscript
MCLivingEntity.isPotionActive(potionIn as MCPotionEffect) as boolean
```
| Параметр | Тип                                                   | Description             |
| -------- | ----------------------------------------------------- | ----------------------- |
| potionIn | [MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | No Description Provided |

### isPotionApplicable

Return Type: boolean

```zenscript
MCLivingEntity.isPotionApplicable(potioneffectIn as MCPotionEffectInstance) as boolean
```
| Параметр       | Тип                                                                   | Description             |
| -------------- | --------------------------------------------------------------------- | ----------------------- |
| potioneffectIn | [MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No Description Provided |

### isWaterSensitive

Return Type: boolean

```zenscript
MCLivingEntity.isWaterSensitive() as boolean
myMCLivingEntity.isWaterSensitive();
```
### removeActivePotionEffect

Return Type: [MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
MCLivingEntity.removeActivePotionEffect(potioneffectin as MCPotionEffect) as MCPotionEffectInstance
```
| Параметр       | Тип                                                   | Description             |
| -------------- | ----------------------------------------------------- | ----------------------- |
| potioneffectin | [MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | No Description Provided |

### removePotionEffect

Return Type: boolean

```zenscript
MCLivingEntity.removePotionEffect(effectIn as MCPotionEffect) as boolean
```
| Параметр | Тип                                                   | Description             |
| -------- | ----------------------------------------------------- | ----------------------- |
| effectIn | [MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | No Description Provided |

### setAIMoveSpeed

Return Type: void

```zenscript
MCLivingEntity.setAIMoveSpeed(speedIn as float) as void
```
| Параметр | Тип   | Description             |
| -------- | ----- | ----------------------- |
| speedIn  | float | No Description Provided |

### setArrowCountInEntity

Return Type: void

```zenscript
MCLivingEntity.setArrowCountInEntity(count as int) as void
```
| Параметр | Тип | Description             |
| -------- | --- | ----------------------- |
| count    | int | No Description Provided |

### setBeeStingCount

Return Type: void

```zenscript
MCLivingEntity.setBeeStingCount(p_226300_1_ as int) as void
```
| Параметр      | Тип | Description             |
| ------------- | --- | ----------------------- |
| p_226300_1_ | int | No Description Provided |

### setHealth

Return Type: void

```zenscript
MCLivingEntity.setHealth(health as float) as void
```
| Параметр | Тип   | Description             |
| -------- | ----- | ----------------------- |
| health   | float | No Description Provided |

### setIdleTime

Return Type: void

```zenscript
MCLivingEntity.setIdleTime(idleTimeIn as int) as void
```
| Параметр   | Тип | Description             |
| ---------- | --- | ----------------------- |
| idleTimeIn | int | No Description Provided |

### setLastAttackedEntity

Return Type: void

```zenscript
MCLivingEntity.setLastAttackedEntity(entityIn as MCEntity) as void
```
| Параметр | Тип                                      | Description             |
| -------- | ---------------------------------------- | ----------------------- |
| entityIn | [MCEntity](/vanilla/api/entity/MCEntity) | No Description Provided |

### setRevengeTarget

Return Type: void

```zenscript
MCLivingEntity.setRevengeTarget(livingBase as MCLivingEntity) as void
```
| Параметр   | Тип                                                  | Description             |
| ---------- | ---------------------------------------------------- | ----------------------- |
| livingBase | [MCLivingEntity](/vanilla/api/entity/MCLivingEntity) | No Description Provided |


