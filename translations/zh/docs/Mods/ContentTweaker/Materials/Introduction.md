# 内容较弱的材料系统

内容更弱不仅允许您添加单个物品到游戏中，而且还允许完整的材料！ 例如，您可以使用这些材料自动生成一块新矿石，并配备一些渔具、创作器等等！

有 5 个条款是重要的：

- [Material](/Mods/ContentTweaker/Materials/Materials/Material/): The Material you will to add/use (e.g. Platinum) → the what projects are made of
- [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/): 基本上一个组 (例如Block, Item, Entity等) -> 部件类型
- [部件](/Mods/ContentTweaker/Materials/Parts/Part/): 项目的窗体 (例如，Gear, Rod, Ingot等)
- [材料部分](/Mods/ContentTweaker/Materials/Materials/MaterialPart/): 部件和材料的组合 (例如) 铁棒、白金宝石等)→ 可以用来返还物品，就像 [IItemStack](/Vanilla/Items/IItemStack/) 稍后。
- [MaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/): 有些配置 → 按零件类型排列的Varies，请检查wiki页面以获取更多信息。

## 示例脚本

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