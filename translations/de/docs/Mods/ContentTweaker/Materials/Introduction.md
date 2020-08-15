# Contenttweaker Material-System

Contenttweaker erlaubt es Ihnen nicht nur einzelne Gegenstände dem Spiel hinzuzufügen, sondern auch ganze Materialien! Mit diesen Materialien können Sie beispielsweise automatisch ein neues Erz generieren, zusammen mit Getriebe, Barren und ähnlichem!

Es gibt 5 Bestimmungen, die wichtig sind:

- [Material](/Mods/ContentTweaker/Materials/Materials/Material/): Das Material, das du hinzufügen möchtest → Aus dem die Gegenstände hergestellt werden sollen
- [Bauteiltyp](/Mods/ContentTweaker/Materials/Parts/PartType/): Grundsätzlich eine Gruppe (z.B. Block, Gegenstand, Entität, etc.) → Der Typ der Bauteile
- [Teil](/Mods/ContentTweaker/Materials/Parts/Part/): Das Artikelformular (z.B. Getriebe, Rod, Ingot, etc.)
- [Materialteil](/Mods/ContentTweaker/Materials/Materials/MaterialPart/): Kombination von Bauteil und Material (z. Eisenstange, Platinausrüstung, usw.) → Kann verwendet werden, um das Item später als [IItemStack](/Vanilla/Items/IItemStack/) zurückzugeben.
- [MaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/): Einige Konfigurationen → Variiert nach Bauteiltyp, überprüfen Sie die Wiki-Seite für weitere Informationen.

## Skript-Beispiel

```zenscript
    #loader contenttweaker
    ////////
    // Aufrufe
    //////////
    Mods importieren. ontenttweaker.MaterialSystem;
    Mods importieren. ontenttweaker. aterial;

    ////////////
    // Variablen
    //////////////
    var copper = Materialsystem. etMaterialBuilder().setName("Copper").setColor(15766817).build();
    var tin = MaterialSystem.getMaterialBuilder().setName("Tin").setColor(10275286). uild();
    var silver = MaterialSystem.getMaterialBuilder().setName("Silver").setColor(15592941).build();
    var lead = MaterialSystem. etMaterialBuilder().setName("Lead").setColor(5658219).build();
    var cobalt = MaterialSystem.getMaterialBuilder().setName("Cobalt").setColor(18347). uild();

    var metal_list = [Kupfer, Zinn, Silber, Blei, Kobalt] als Material[];
    var part_names = ["staub", "Getriebe", "Plate", "nugget", "ingot", "beam", "bolt"] als string[];
    var ore_types = ["Erz", "poor_ore", "dense_ore"] als string[];

    /////////////////////////////
    // Materialregistrierung
    ///////////////////////

    für i, /////// 

 für i, ///////// 

 für metall in metal_list {
        metal. egisterParts(part_names);

        var ores = Metall. egisterParts(ore_types);
        für i Erz in ores {
            var oreData = ore. etData();
            oreData. ddDataValue("Variante", "minecraft:stone,minecraft:end_stone,minecraft:netherrack");
            oreData. ddDataValue("Härte", "3,3,3");
            oreData. ddDataValue("resistance", "15,15,15");
            oreData. ddDataValue("harvestTool", "Spitzhacke, Spitzhacke, Spitzhacke");
            oreData. ddDataValue("harvestLevel", "1,1,1");
        }

        var blockData = Metall. egisterPart("block").getData();
        blockData. ddDataValue("hardness", "5");
        blockData.addDataValue("resistance", "30");
        blockData. ddDataValue("harvestTool", "pickaxe");
        blockData.addDataValue("harvestLevel", "1");
}
```