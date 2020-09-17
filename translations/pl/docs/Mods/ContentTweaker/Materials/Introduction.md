# System Material Contenttweaker

Twórca zawartości pozwala nie tylko dodawać pojedyncze przedmioty do gry, ale także całe materiały! Możesz na przykład użyć tych materiałów, aby automatycznie wygenerować nową rudę razem z narzędziami, sztabami i podobnymi!

Istnieje 5 terminów, które są ważne:

- [Materiał](/Mods/ContentTweaker/Materials/Materials/Material/): Materiał, z którego zamierzasz dodać/używać (np. Platyna) → Co są wykonane z
- [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/): Zasadniczo grupa (np. Block, Item, Entity, itp.) → Typ części
- [Część](/Mods/ContentTweaker/Materials/Parts/Part/): Formularz przedmiotu (np. Wyposażenie, Rod, Sztaby itp.)
- [MaterialCzęść](/Mods/ContentTweaker/Materials/Materials/MaterialPart/): Kombinacja części i materiału (np. Żelazny pręt, Platynowe Wyposażenie itp) → Może być użyty, aby zwrócić przedmiot jako [IItemStack](/Vanilla/Items/IItemStack/) później.
- [MaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/): Niektóre konfiguracje → Różnice według typu części, sprawdź stronę wiki, aby uzyskać dalsze informacje.

## Przykładowy skrypt

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