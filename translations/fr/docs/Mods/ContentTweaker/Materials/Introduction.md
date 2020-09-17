# Système de matériaux du Contenttweaker

Contenttweaker vous permet non seulement d'ajouter des objets au jeu mais aussi des matériaux entiers ! Vous pouvez par exemple utiliser ces matériaux pour générer automatiquement un nouveau minerai avec les engrenages, les lingots et les autres !

Il y a 5 conditions qui sont importantes:

- [Matériel](/Mods/ContentTweaker/Materials/Materials/Material/): Le Matériel que vous allez ajouter/utiliser (par exemple Platinum) → Quels sont les éléments faits de
- [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/): Fondamentalement un groupe (par exemple, Block, itemm, Entity, etc.) → Le type des parties
- [Partie](/Mods/ContentTweaker/Materials/Parts/Part/): La forme de l'élément (ex: Gear, Rod, Lingot,etc)
- [MatérialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/): Combinaison de pièce et de matériel (par ex. Tige de fer, Équipement de platine, etc) → Peut être utilisé pour retourner l'objet comme [IItemStack](/Vanilla/Items/IItemStack/) plus tard.
- [MaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/): Quelques configurations → Varie par type de pièce, consultez la page wiki pour plus d'informations.

## Exemple de script

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