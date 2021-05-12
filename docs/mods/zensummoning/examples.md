# ZenSummoning Examples


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
            .setMob("minecraft:cow")
            .setCount(4)
            .setOffset(0,4,0)
            .setSpread(3,3,3)
            .setData({"Health": 200, "Attributes":[{"Name":"generic.maxHealth","Base":200}]})
        )
        .addMob(MobInfo.create()
            .setMob("minecraft:blaze")
            .setCount(10)
            .setOffset(0,8,0)
            .setSpread(3,3,3)
            .setData({"Health": 2, "Attributes":[{"Name":"generic.maxHealth","Base":2}]})
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

SummoningDirector.addSummonInfo(
    SummoningInfo.create()
        .setCatalyst(<tag:items:minecraft:saplings>)
        .setReagents([<item:minecraft:stone>])
        .addMob(MobInfo.create()
            .setMob("minecraft:cow")
        )
);
```

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
            .setMob("minecraft:zombie_villager")
            .setOffset(1,2,1)
            .setSpread(1,1,1)
            .setData({
                "Health":200,
                "Attributes":[
                    {"Name":"generic.maxHealth", "Base":200},
                    {"Name":"generic.movementSpeed", "Base":0.3},
                    {"Name":"generic.attackDamage", "Base":6}
                ],
                "CustomName":"A Lost Soul",
                "PersistenceRequired":1,
                "CustomNameVisible":1
            })
        )
);
```

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
            .setMob("minecraft:blaze")
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
            .setMob("minecraft:cow")
        )
        .setWeight(2)
    .setMutator((attempt as SummoningAttempt) => {
        if (attempt.world.raining) {
            attempt.success = false;
            attempt.message = "test!";
        }
    })
);

SummoningDirector.addSummonInfo(
    SummoningInfo.create()
        .setCatalyst(<item:minecraft:pumpkin>)
        .setReagents([<item:minecraft:gold_block>*2])
        .addMob(MobInfo.create()
            .setMob("minecraft:chicken")
        )
    .setMutator((attempt as SummoningAttempt) => {
        if (attempt.world.raining) {
            attempt.success = false;
            attempt.message = "test!";
        }
    })
);
```

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
            .setMob("minecraft:zombie")
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
