# Orechid Ignem

El paquete OrechidIgnem se utiliza para añadir o eliminar los minerales generados para/de las flores de Ignem Orechid de Botania.

## Llamando

Puedes llamar al paquete OrechidIgnem usando `mods.botania.OrechidIgnem`

## Añadir receta

Puede agregar recetas usando el [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) devuelto como parámetro de salida, o el nombre de dicho oreDictEntry como string.

```zenscript
//mods.botania.OrechidIgnem.addOre(IOreDictEntry oreDict, int weight);
mods.botania.OrechidIgnem.addOre(<ore:logWood>, 500);

//mods.botania.OrechidIgnem.addOre(String oreDict, int weight);
mods.botania.OrechidIgnem.addOre("logWood", 500);
```

## Eliminación de receta

Puede eliminar recetas usando el [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) devuelto como parámetro de salida, o el nombre de dicho oreDictEntry como string.

```zenscript
//mods.botania.OrechidIgnem.removeOre(IOreDictEntry oreDict);
mods.botania.OrechidIgnem.removeOre(<ore:oreGold>);

//mods.botania.OrechidIgnem.removeOre(String oreDict);
mods.botania.OrechidIgnem.removeOre("oreGold");
```