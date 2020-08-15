# Контентная материальная система

Contenttweaker позволяет не только добавлять отдельные предметы в игру, но и целые материалы! Вы можете использовать эти материалы для автоматического создания руды вместе с снаряжением, слитками и т.п.

Есть 5 Условий, которые важны:

- [Материал](/Mods/ContentTweaker/Materials/Materials/Material/): Материал, который вы собираетесь добавить/использовать (например, Платина) → Что делают из
- [Тип части](/Mods/ContentTweaker/Materials/Parts/PartType/): По сути группа (например, блок, предмет и т. д.) → Тип частей
- [Часть](/Mods/ContentTweaker/Materials/Parts/Part/): Предметы (например, Gear, Rod, Ingot, и т. д.)
- [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/): Комбинация части и материала (напр. Железный стержень, Платиновое снаряжение и т. д. → Может быть использован для возврата предмета как [IItemStack](/Vanilla/Items/IItemStack/) позже.
- [MaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/): Некоторые конфигурации → Varies по типу частей, проверьте wiki страницу для получения дополнительной информации.

## Пример скрипта

```zenscript
    #loader contenttweaker
    //////////
    // Calls
    //////////
    import mods.contenttweaker.MaterialSystem;
    import mods.contenttweaker.Material;

    //////////////
    // Variables
    //////////////
    var copper = MaterialSystem.getMaterialBuilder().setName("Copper").setColor(15766817).build();
    var tin = MaterialSystem.getMaterialBuilder().setName("Tin").setColor(10275286).build();
    var silver = MaterialSystem.getMaterialBuilder().setName("Silver").setColor(15592941).build();
    var lead = MaterialSystem.getMaterialBuilder().setName("Lead").setColor(5658219).build();
    var cobalt = MaterialSystem.getMaterialBuilder().setName("Cobalt").setColor(18347).build();

    var metal_list = [copper, tin, silver, lead, cobalt] as Material[];
    var part_names = ["dust", "gear", "plate", "nugget", "ingot", "beam", "bolt"] as string[];
    var ore_types = ["ore", "poor_ore", "dense_ore"] as string[];

    ///////////////////////////
    // Material registration
    ///////////////////////////

    for i, metal in metal_list {
        metal.registerParts(part_names);

        var ores = metal.registerParts(ore_types);
        for i, ore in ores {
            var oreData = ore.getData();
            oreData.addDataValue("variants", "minecraft:stone,minecraft:end_stone,minecraft:netherrack");
            oreData.addDataValue("hardness", "3,3,3");
            oreData.addDataValue("resistance", "15,15,15");
            oreData.addDataValue("harvestTool", "pickaxe,pickaxe,pickaxe");
            oreData.addDataValue("harvestLevel", "1,1,1");
        }

        var blockData = metal.registerPart("block").getData();
        blockData.addDataValue("hardness", "5");
        blockData.addDataValue("resistance", "30");
        blockData.addDataValue("harvestTool", "pickaxe");
        blockData.addDataValue("harvestLevel", "1");
    }
```