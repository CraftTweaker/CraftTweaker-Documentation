# Sistema de Material de Contenidos

¡Contenttweaker te permite no sólo añadir objetos individuales al juego, sino también materiales enteros! ¡Por ejemplo, puede utilizar estos materiales para generar automáticamente un nuevo mineral junto con aparejos, lingotes y cosas por el estilo!

Hay 5 Términos que son importantes:

- [Material](/Mods/ContentTweaker/Materials/Materials/Material/): El material que va a añadir/usar (por ejemplo, platino) → ¿De qué elementos están hechos
- [Tipo de pieza](/Mods/ContentTweaker/Materials/Parts/PartType/): Básicamente un grupo (por ejemplo, bloqueo, objeto, entidad, etc) → El tipo de las partes
- [Parte](/Mods/ContentTweaker/Materials/Parts/Part/): Formulario del artículo (ej: equipamiento, rota, ingot, etc)
- [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/): Combinación de piezas y material (p. ej. Varilla de Hierro, Equipo de Platino, etc) → Se puede utilizar para devolver el objeto como [ItemStack](/Vanilla/Items/IItemStack/) más adelante.
- [MaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/): Algunas configuraciones → Varias por tipo de pieza, compruebe la página de la wiki para más información.

## Ejemplo de script

```zenscript
    #loader contenttweaker
    ///////////
    // Llama
    /////////
    import mods. ontenttweaker.MaterialSystem;
    importar mods. ontenttweaker. aterial;

    /////////////////
    // Variables
    /////////////
    var copper = MaterialSystem. etMaterialBuilder().setName("Copper").setColor(15766817).build();
    var tin = MaterialSystem.getMaterialBuilder().setName("Tin").setColor(10275286). uild();
    var silver = MaterialSystem.getMaterialBuilder().setName("Silver").setColor(15592941).build();
    var lead = MaterialSystem. etMaterialBuilder().setName("Lead").setColor(5658219).build();
    var cobalt = MaterialSystem.getMaterialBuilder().setName("Cobalt").setColor(18347). uild();

    var metal_list = [cobre, estaño, plata, plomo, cobalto] como Material[];
    var part_names = ["dust", "gear", "plate", "nugget", "ingot", "beam", "bolt"] as string[];
    var ore_types = ["ore", "pobre_ore", "dense_ore"] as string[];

    ////////////////////////////////
    // Registro de materiales
    /////////////////////////////

    for i, metal en metal_list {
        metal. egisterParts(part_names);

        var ores = metal. egisterParts(ore_types);
        para i, ore en minerales {
            var oreData = ore. etData();
            oreData. ddDataValue("variantes", "minecraft:stone,minecraft:end_stone,minecraft:netherrack");
            oreData. ddDataValue("hardness", "3,3,3");
            oreData. ddDataValue("resistencia", "15,15,15");
            oreData. ddDataValue("harvestTool", "pickaxe,pickaxe,pickaxe");
            oreData. ddDataValue("harvestLevel", "1,1,1");
        }

        var blockData = metal. egisterPart("block").getData();
        blockData. ddDataValue("hardness", "5");
        blockData.addDataValue("resistance", "30");
        blockData. ddDataValue("harvestTool", "pickaxe");
        blockData.addDataValue("harvestLevel", "1");
}
```