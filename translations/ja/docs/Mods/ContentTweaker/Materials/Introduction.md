# ContentTweaker Material System

Contenttweakerは、ゲームに単一のアイテムを追加するだけでなく、全体の素材を追加することができます! 例えば、これらの材料を使用して、ギア、インゴットなどと一緒に新しい鉱石を自動的に生成することができます!

重要な5つの規約があります:

- [マテリアル](/Mods/ContentTweaker/Materials/Materials/Material/): 追加/使用するマテリアル(プラチナなど)→ アイテムの素材について
- [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/): 基本的にはグループ (ブロック、アイテム、エンティティなど) → 部品の種類
- [パート](/Mods/ContentTweaker/Materials/Parts/Part/): 項目の形 (例: Gear, Rod, Ingot, etc)
- [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/): Combination of Part and Material (e.g. Iron rod, Platinum Gear, etc) → Can be used to return the item as [IItemStack](/Vanilla/Items/IItemStack/) later on.
- [MaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/): いくつかの設定 → 部品タイプごとに変動します。詳細については、wiki ページを確認してください。

## スクリプト例

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