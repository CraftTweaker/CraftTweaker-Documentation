# Indebolimento Dei Materiali

Contenttweaker consente non solo di aggiungere singoli oggetti al gioco ma interi materiali! Ad esempio, puoi usare questi materiali per generare automaticamente un nuovo minerale insieme a ingranaggi, lingotti e simili!

Ci sono 5 Termini che sono importanti:

- [Materiale](/Mods/ContentTweaker/Materials/Materials/Material/): Il Materiale di cui hai intenzione di aggiungere/utilizzare (ad esempio Platinum) → Di che cosa sono fatti gli oggetti
- [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/): Fondamentalmente un gruppo (es. Blocco, Oggetto, Entità, ecc) → Il tipo di parti
- [Parte](/Mods/ContentTweaker/Materials/Parts/Part/): La forma dell'oggetto (ad esempio Gear, Rod, Ingot, ecc)
- [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/): Combinazione di parte e materiale (ad es. Barra di ferro, Platinum Gear, ecc) → Può essere usato per restituire l'oggetto come [IItemStack](/Vanilla/Items/IItemStack/) più tardi.
- [MaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/): Alcune configurazioni → Varies per tipo di parte, controllare la pagina wiki per ulteriori informazioni.

## Script Di Esempio

```zenscript
    #loader contenttweaker
    ////////
    // Chiamate
    //////
    import mods. ontenttweaker.MaterialSystem;
    import mods. ontenttweaker. ateriale;

    ////////////
    // Variables
    ////////////
    var rame = MaterialSystem. etMaterialBuilder().setName("Copper").setColor(15766817).build();
    var tin = MaterialSystem.getMaterialBuilder().setName("Tin").setColor(10275286). uild();
    var silver = MaterialSystem.getMaterialBuilder().setName("Silver").setColor(15592941).build();
    var lead = MaterialSystem. etMaterialBuilder().setName("Lead").setColor(5658219).build();
    var cobalt = MaterialSystem.getMaterialBuilder().setName("Cobalt").setColor(18347). uild();

    var metal_list = [rame, stagno, argento, piombo, cobalt] come Materiale[];
    var part_names = ["polvere", "ingranaggio", "plate", "nugget", "ingot", "beam", "bolt"] come stringa[];
    var ore_types = ["ore", "poor_ore", "dense_ore"] come stringa[];

    ///////////////////////////////
    // Registrazione del materiale
    ///////////////////////////

    for i, metal in metal_list {
        metal. egisterParts(part_names);

        var ores = metallo. egisterParts(ore_types);
        per i, ore in ores {
            var oreData = ore. etData();
            oreData. ddDataValue("variants", "minecraft:stone,minecraft:end_stone,minecraft:netherrack");
            oreData. ddDataValue("durezza", "3,3,3");
            oreData. ddDataValue("resistance", "15,15");
            oreData. ddDataValue("harvestTool", "pickaxe,pickaxe,pickaxe");
            oreData. ddDataValue("harvestLevel", "1,1,1");
        }

        var blockData = metallo. egisterPart("block").getData();
        blockData. ddDataValue("durezza", "5");
        blockData.addDataValue("resistance", "30");
        blockData. ddDataValue("harvestTool", "pickaxe");
        blockData.addDataValue("harvestLevel", "1");
}
```