# Events and Traits

## Credits:
Credits goes out to Kindlich for writing most of the Event implementation!


## Events
### onBlockDrops
|Setter/Getter/Method|Method Names                      |Names                          |Input/Output                                             |
|:-------------------|:---------------------------------|:------------------------------|---------------------------------------------------------|
|Getter              |getDropChance();                  |dropChance();                  |Returns an Float                                         | 
|Setter              |setDropChance(float dropChance);  |dropChance(float dropChance);  |Takes an Float                                           |
|Getter              |getFortuneLevel();                |fortuneLevel();                |Returns an Integer                                       |
|Getter              |getDrops();                       |drops();                       |Returns a List of [IItemStack](/Vanilla/Items/IItemStack)|
|Setter              |setDrops(List<IItemStack> drops); |drops(List<IItemStack> drops); |Takes an List of [IItemStack](/Vanilla/Items/IItemStack) |
|Method              |addItem(IItemStack itemStack);    |addItem(IItemStack itemStack); |Takes an [IItemStack](/Vanilla/Items/IItemStack)         |
|Getter              |isSilkTouch();                    |silkTouch();                   |Returns a Boolean                                        |
|Getter              |isPlayer();                       |isPlayer();                    |Returns a Boolean                                        |
|Getter              |getPlayer();                      |player();                      |Returns a [IPlayer](/Vanilla/Players/IPlayer)            |

```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onBlockDrops = function(event as onBlockDrops) {
    ...
};
```

### onEnderTeleport
|Setter/Getter/Method|Method Names                        |Names                            |Input/Output                 |
|:-------------------|:-----------------------------------|:--------------------------------|-----------------------------|
|Getter              |getTargetX();                       |targetX();                       |Returns an Double            |
|Setter              |setTargetX(double targetX);         |targetX(double targetX);         |Takes an Double              |
|Getter              |getTargetY();                       |targetY();                       |Returns an Double            | 
|Setter              |setTargetY(double targetY);         |targetY(double targetY);         |Takes an Double              |
|Getter              |getTargetZ();                       |targetZ();                       |Returns an Double            | 
|Setter              |setTargetZ(double targetZ));        |targetZ(double targetZ);         |Takes an Double              |
|Getter              |getAttackDamage();                  |attackDamage();                  |Returns an Float             |
|Setter              |setAttackDamage(float attackDamage);|attackDamage(float attackDamage);|Takes an Float               |

```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onEnderTeleport = function(event as crafttweaker.api.event.EnderTeleportEvent) {
    ...
};
```

### onPlayerTick

```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onBlockDrops = function(event as PlayerTickEvent) {
    ...
};
```

### onBreakSpeed
|Setter/Getter/Method|Method Names                      |Names                          |Input/Output                                         |
|:-------------------|:---------------------------------|:------------------------------|-----------------------------------------------------|
|Getter              |getBlockState();                  |blockState();                  |Returns an [IBlockState](/Vanilla/Blocks/IBlockState)|
|Getter              |getBlock();                       |block();                       |Returns an [IBlock](/Vanilla/Blocks/IBlock)          |
|Getter              |getOriginalSpeed();               |originalSpeed();               |Returns an Float                                     |
|Getter              |getNewSpeed();                    |newSpeed();                    |Returns an Float                                     |
|Setter              |setNewSpeed(float newSpeed);      |newSpeed(float newSpeed);      |Takes an Float                                       |

```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onBlockDrops = function(event as PlayerBreakSpeedEvent) {
    ...
};
```

### onMobDrops
|Setter/Getter/Method|Method Names                      |Names                           |Input/Output                                                     |
|:-------------------|:---------------------------------|:-------------------------------|-----------------------------------------------------------------|
|Getter              |getDamageSource();                |damageSource                    |Returns an [IDamageSource](/Vanilla/Damage/IDamageSource)        |
|Method              |addItem(IItemStack item);         |addItem(IItemStack item);       |Takes an [IItemStack](/Vanilla/Items/IItemStack)                 |
|Method              |addItem(IEntityItem entityItem);  |addItem(IEntityItem entityItem);|Takes an [IEntityItem](/Vanilla/Entities/IEntityItem)            |
|Getter              |getLootingLevel();                |lootingLevel                    |Returns an Integer                                               |
|Getter              |getIsRecentlyHit();               |isRecentlyHit                   |Returns an Boolean                                               |
|Getter              |getDrops();                       |drops();                        |Returns an List of [IEntityItem's](/Vanilla/Entities/IEntityItem)|
|Setter              |setDrops();                       |drops(List<IEntityItem> drops); |Takes an List of [IEntityItem's](/Vanilla/Entities/IEntityItem)  |

```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onBlockDrops = function(event as EntityLivingDeathDropsEvent) {
    ...
};
```

### onAttackMob
|Setter/Getter/Method|Method Names                      |Names                          |Input/Output                                             |
|:-------------------|:---------------------------------|:------------------------------|---------------------------------------------------------|
|Getter              |getDamageSource();                |damageSource();                |Returns an [IDamageSource](/Vanilla/Damage/IDamageSource)|
|Getter              |getAmount();                      |amount();                      |Returns an Float                                         |


```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onBlockDrops = function(event as EntityLivingHurtEvent) {
    ...
};
```

### onHurt
|Setter/Getter/Method|Method Names                      |Names                          |Input/Output                                             |
|:-------------------|:---------------------------------|:------------------------------|---------------------------------------------------------|
|Getter              |getDamageSource();                |damageSource();                |Returns an [IDamageSource](/Vanilla/Damage/IDamageSource)|
|Getter              |getAmount();                      |amount();                      |Returns an Float                                         |


```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onBlockDrops = function(event as EntityLivingHurtEvent) {
    ...
};
```

### onRightClickBlock
|Setter/Getter/Method|Method Names                      |Names                          |Input/Output                                   |
|:-------------------|:---------------------------------|:------------------------------|-----------------------------------------------|
|Getter              |getHitVector();                   |hitVector();                   |Returns a [IVector3d](/Vanilla/World/IVector3d)|
|Getter              |getUseBlock();                    |useBlock();                    |Returns a String                               |
|Setter              |setUseBlock(String useBlock);     |useBlock(String useBlock);     |Takes a String                                 |
|Getter              |getUseItem();                     |useItem();                     |Returns a String                               |
|Setter              |setUseItem(String useItem);       |useItem(String useItem);       |Takes a String                                 |

```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onBlockDrops = function(event as PlayerRightClickBlockEvent) {
    ...
};
```

### onKillMob
|Setter/Getter/Method|Method Names                      |Names                          |Input/Output                                            |
|:-------------------|:---------------------------------|:------------------------------|--------------------------------------------------------|
|Getter              |getDamageSource();                |damageSource();                |Returns a [IDamageSource](/Vanilla/Damage/IDamageSource)|


```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onBlockDrops = function(event as EntityLivingDeathEvent) {
    ...
};
```
