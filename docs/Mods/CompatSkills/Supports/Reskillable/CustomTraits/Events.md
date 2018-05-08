# Events and Traits

## Credits:
Credits goes out to Kindlich for writing most of the Event implementation!


## Events
### onBlockDrops
|Setter/Getter/Method|Method Names                      |Names                          |Input/Output                 |
|:-------------------|:---------------------------------|:------------------------------|-----------------------------|
|Getter              |getDropChance();                  |dropChance();                  |Returns an Float             | 
|Setter              |setDropChance(float dropChance);  |dropChance(float dropChance);  |Takes an Float               |
|Getter              |getFortuneLevel();                |fortuneLevel();                |Returns an Integer           |
|Getter              |getDrops();                       |drops();                       |Returns a List of IItemstacks|
|Setter              |setDrops(List<IItemStack> drops); |drops(List<IItemStack> drops); |Takes an List of IItemstacks |
|Method              |addItem(IItemStack itemStack);    |addItem(IItemStack itemStack); |Takes an IItemstack          |
|Getter              |isSilkTouch();                    |silkTouch();                   |Returns a Boolean            |
|Getter              |isPlayer();                       |isPlayer();                    |Returns a Boolean            |
|Getter              |getPlayer();                      |player();                      |Returns a IPlayer            |

```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onBlockDrops = function(event as onBlockDrops) {
    ...
};
```

### onEnderTeleport
|Setter/Getter/Method|Method Names                      |Names                          |Input/Output                 |
|:-------------------|:---------------------------------|:------------------------------|-----------------------------|
|Getter              |getTargetX();                     |                               |Returns an Double            |
|Setter              |setTargetX();                     |                               |Takes an Double              |
|Getter              |getTargetY();                     |                               |Returns an Double            | 
|Setter              |setTargetY();                     |                               |Takes an Double              |
|Getter              |getTargetZ();                     |                               |Returns an Double            | 
|Setter              |setTargetZ();                     |                               |Takes an Double              |
|Getter              |getAttackDamage();                |                               |Returns an Float             |
|Setter              |setAttackDamage();                |                               |Takes an Float               |

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
|Setter/Getter/Method|Method Names                      |Names                          |Input/Output                 |
|:-------------------|:---------------------------------|:------------------------------|-----------------------------|
|Getter              |getBlockState();                  |                               |Returns an IBlockState       |
|Getter              |getBlock();                       |                               |Returns an IBlock            |
|Getter              |getOriginalSpeed();               |                               |Returns an Float             |
|Getter              |getNewSpeed();                    |                               |Returns an Float             |
|Setter              |setNewSpeed();                    |                               |Takes an Float               |

```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onBlockDrops = function(event as PlayerBreakSpeedEvent) {
    ...
};
```

### onMobDrops
|Setter/Getter/Method|Method Names                      |Names                          |Input/Output                 |
|:-------------------|:---------------------------------|:------------------------------|-----------------------------|
|Getter              |getDamageSource();                |                               |Returns an IDamageSource        |
|Method              |addItem();                        |                               |Takes an IItemstack             |
|Method              |addItem();                        |                               |Takes an IEntityItem            |
|Getter              |getLootingLevel();                |                               |Returns an Integer              |
|Getter              |getIsRecentlyHit();               |                               |Returns an Boolean              |
|Getter              |getDrops();                       |                               |Returns an List of IEntityItem's|
|Setter              |setDrops();                       |                               |Takes an List of IEntityItem's  |

```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onBlockDrops = function(event as EntityLivingDeathDropsEvent) {
    ...
};
```

### onAttackMob
|Setter/Getter/Method|Method Names                      |Names                          |Input/Output                 |
|:-------------------|:---------------------------------|:------------------------------|-----------------------------|
|Getter              |getDamageSource();                |                               |Returns an IDamageSource     |
|Getter              |getAmount();                      |                               |Returns an Float             |


```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onBlockDrops = function(event as EntityLivingHurtEvent) {
    ...
};
```

### onHurt
|Setter/Getter/Method|Method Names                      |Names                          |Input/Output                 |
|:-------------------|:---------------------------------|:------------------------------|-----------------------------|
|Getter              |getDamageSource();                |                               |Returns an IDamageSource     |
|Getter              |getAmount();                      |                               |Returns an Float             |


```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onBlockDrops = function(event as EntityLivingHurtEvent) {
    ...
};
```

### onRightClickBlock
|Setter/Getter/Method|Method Names                      |Names                          |Input/Output                 |
|:-------------------|:---------------------------------|:------------------------------|-----------------------------|
|Getter              |getHitVector();                   |                               |                             |
|Getter              |getUseBlock();                    |                               |                             |
|Setter              |setUseBlock(String useBlock);     |                               |                             |
|Getter              |
|Setter              |

```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onBlockDrops = function(event as PlayerRightClickBlockEvent) {
    ...
};
```

### onKillMob
|Setter/Getter/Method|Method Names                      |Names                          |Input/Output                 |
|:-------------------|:---------------------------------|:------------------------------|-----------------------------|
|
|
|
|
|
|
|
|
|

```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onBlockDrops = function(event as EntityLivingDeathEvent) {
    ...
};
```
