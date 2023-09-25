# ZenSummoning Examples

Once a [Summoning Info](/mods/zensummoning/SummoningInfo) is registered with the [Summoning Director](/mods/zensummoning/SummoningDirector), it will be available for players to use.

To perform a summoning, the player must insert the reagents into the altar and activate it with the catalyst in their hand.  
Alternatively, the catalyst can be dropped above the altar and a redstone signal applied.

Players can look at the usage of the altar in JEI to see available summonings.  
Looking at the recipes for spawn eggs will show summonings that include the mob the egg is for.

## Example summoning 1

- Summons 4 cows and 10 blazes
    - Spawns the blazes 8 blocks above the altar, +/- 3 blocks in each direction
    - Spawns the cows 4 blocks above the altar, +/- 3 blocks in each direction
- Consumes 1 stone, 12 eggs and 1 stick as catalyst
- Doesn't work in the rain
    - If it's raining, displays a custom message
    - If it's successful, displays "Woohoo!"
- Gives the mobs custom NBT
    - 1.16 renamed generic.maxHealth to generic.max_health.
    - [https://minecraft.wiki/w/Attribute](https://minecraft.wiki/w/Attribute)

```zenscript
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import mods.zensummoning.SummoningDirector;
import mods.zensummoning.SummoningAttempt;
import mods.zensummoning.SummoningInfo;
import mods.zensummoning.MobInfo;

SummoningDirector.addSummonInfo(
    SummoningInfo.create()
        .setCatalyst(<item:minecraft:stick>)
        .setReagents([<item:minecraft:stone>, <item:minecraft:egg>*12])
        .addMob(MobInfo.create()
            .setMob(<entityType:minecraft:cow>)
            .setCount(4)
            .setOffset(0,4,0)
            .setSpread(3,3,3)
            .setData({"Health": 200, "Attributes":[{"Name":"generic.max_health","Base":200}]})
        )
        .addMob(MobInfo.create()
            .setMob(<entityType:minecraft:blaze>)
            .setCount(10)
            .setOffset(0,8,0)
            .setSpread(3,3,3)
            .setData({"Health": 2, "Attributes":[{"Name":"generic.max_health","Base":2}]})
        )
        .setMutator((attempt as SummoningAttempt) => {
            if (attempt.world.raining) {
                attempt.success = false;
                attempt.message = "Can't summon this in the rain!";
            } else {
                attempt.message = "Woohoo!";
            }
        })
);
```

## Example summoning 2

- Spawns one cow
- Consumes one sapling (with oredict support) and consumes one stone as catalyst

```zenscript
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import mods.zensummoning.SummoningDirector;
import mods.zensummoning.SummoningAttempt;
import mods.zensummoning.SummoningInfo;
import mods.zensummoning.MobInfo;

SummoningDirector.addSummonInfo(
    SummoningInfo.create()
        .setCatalyst(<tag:items:minecraft:saplings>)
        .setReagents([<item:minecraft:stone>])
        .addMob(MobInfo.create()
            .setMob(<entityType:minecraft:cow>)
        )
);
```

## Example summoning 3

- Spawns a zombie villager
    - Offset x+1, y+2, z+1
    - Additional random offset +/- 1 in each direction
    - Custom mob NBT
        - Increased health, lowered movement speed, more attack damage
        - Custom name displayed
        - Doesn't despawn
- Consumes 2 leather, one beef, and one bone as catalyst

```zenscript
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import mods.zensummoning.SummoningDirector;
import mods.zensummoning.SummoningAttempt;
import mods.zensummoning.SummoningInfo;
import mods.zensummoning.MobInfo;


SummoningDirector.addSummonInfo(
    SummoningInfo.create()
        .setCatalyst(<item:minecraft:bone>)
        .setReagents([<item:minecraft:leather>*2,<item:minecraft:beef>])
        .addMob(MobInfo.create()
            .setMob(<entityType:minecraft:zombie_villager>)
            .setOffset(1,2,1)
            .setSpread(1,1,1)
            .setData({
                "Health":200,
                "Attributes":[
                    {"Name":"generic.max_health", "Base":200},
                    {"Name":"generic.movement_speed", "Base":0.3},
                    {"Name":"generic.attack_damage", "Base":6}
                ],
                "CustomName":"A Lost Soul",
                "PersistenceRequired":1,
                "CustomNameVisible":1
            })
        )
);
```

## Example summoning 4 and 5

- Adds two summoning with the same reagents an catalyst
    - One spawns a blaze, the other spawns a cow. Both don't work in the rain.
- When attempted, there is a 4 in 5 chance that you will summon the cow. 1 in 5 times you will summon the blaze.
    - Determined by the weights of the summoning

```zenscript
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import mods.zensummoning.SummoningDirector;
import mods.zensummoning.SummoningAttempt;
import mods.zensummoning.SummoningInfo;
import mods.zensummoning.MobInfo;

SummoningDirector.addSummonInfo(
    SummoningInfo.create()
        .setCatalyst(<item:minecraft:pumpkin>*3)
        .setReagents([<item:minecraft:iron_ingot>*2, <item:minecraft:snow>*2, <item:minecraft:iron_bars>*2])
        .addMob(MobInfo.create()
            .setMob(<entityType:minecraft:blaze>)
        )
        .setWeight(0.5)
    .setMutator((attempt as SummoningAttempt) => {
        if (attempt.world.raining) {
            attempt.success = false;
            attempt.message = "test!";
        }
    })
);

SummoningDirector.addSummonInfo(
    SummoningInfo.create()
        .setCatalyst(<item:minecraft:pumpkin>*3)
        .setReagents([<item:minecraft:iron_ingot>*2, <item:minecraft:snow>*2, <item:minecraft:iron_bars>*2])
        .addMob(MobInfo.create()
            .setMob(<entityType:minecraft:cow>)
        )
        .setWeight(2)
    .setMutator((attempt as SummoningAttempt) => {
        if (attempt.world.raining) {
            attempt.success = false;
            attempt.message = "test!";
        }
    })
);
```

## Example summoning 6

- Consumes 1 stone and 12 eggs
- Doesn't consume the catalyst, 1 stick
- Spawns 1 zombie
    - Offset, spread, custom NBT
- Doesn't work in the rain

```zenscript
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import mods.zensummoning.SummoningDirector;
import mods.zensummoning.SummoningAttempt;
import mods.zensummoning.SummoningInfo;
import mods.zensummoning.MobInfo;

SummoningDirector.addSummonInfo(
    SummoningInfo.create()
        .setCatalyst(<item:minecraft:stick>)
        .setConsumeCatalyst(false)
        .setReagents([<item:minecraft:stone>, <item:minecraft:egg>*12])
        .addMob(MobInfo.create()
            .setMob(<entityType:minecraft:zombie>)
            .setCount(1)
            .setOffset(0,4,0)
            .setSpread(1,1,1)
            .setData(
                {
                    "PersistenceRequired":false,
                    "LeftHanded":0,
                    "CanPickUpLoot":false,
                    "Health":100,
                    "Attributes":[
                        {
                            "Name":"generic.maxHealth",
                            "Base":100
                           }
                    ],
                    "IsBaby":0,
                    "HandItems":[
                        {
                        "id":"minecraft:obsidian",
                        "Count":1
                        },
                        {}
                    ],
                    "HandDropChances":[2,0]
                }
            )
        )
        .setMutator((attempt as SummoningAttempt) => {
            if (attempt.world.raining) {
                attempt.success = false;
                attempt.message = "Can't summon this in the rain!";
            } else {
                attempt.message = "Good Luck!";
            }
        })
);
```

## Example summoning 7

- Requires the player to have their hunger bar below 15
- Sets the player's hunger bar to 2 upon successful summoning

```zenscript
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import mods.zensummoning.SummoningDirector;
import mods.zensummoning.SummoningAttempt;
import mods.zensummoning.SummoningInfo;
import mods.zensummoning.MobInfo;
import crafttweaker.api.player.MCPlayerEntity;


SummoningDirector.addSummonInfo(
    SummoningInfo.create()
        .setCatalyst(<item:minecraft:stick>)
        .setConsumeCatalyst(false)
        .setReagents([<item:minecraft:diamond>, <item:minecraft:redstone>*12])
        .addMob(MobInfo.create().setMob(<entityType:minecraft:cow>))
        .addCondition((attempt as SummoningAttempt) => {
            if (attempt.summoner == null)
                return false;
            if ((attempt.summoner as MCPlayerEntity).foodLevel > 15)
                return false;
            return true;
        }, "You aren't hungry enough", "Must be under 15 hunger!")
        .setMutator((attempt as SummoningAttempt) => {
            (attempt.summoner as MCPlayerEntity).foodLevel = 2;
        })

);
```
