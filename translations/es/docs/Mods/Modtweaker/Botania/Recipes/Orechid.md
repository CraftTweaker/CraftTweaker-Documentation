# Orechid

El paquete Orechid se utiliza para añadir o quitar minerales generados para/de las flores Orechid de Botania.

## Llamando

Puedes llamar al paquete Orechid usando `mods.botania.Orechid`

## Encontrar todas las recetas registradas

Puedes encontrar todas las recetas registradas de Orechid usando [`/ct botorechid`](/Mods/Modtweaker/Botania/Commands/).

## Añadir receta

Puede agregar recetas usando el [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) devuelto como parámetro de salida, o el nombre de dicho oreDictEntry como string.

```zenscript
//mods.botania.Orechid.addOre(IOreDictEntry oreDict, int weight);
mods.botania.Orechid.addOre(<ore:logWood>, 500);

//mods.botania.Orechid.addOre(String oreDict, int weight);
mods.botania.Orechid.addOre("logWood", 500);
```

## Eliminación de receta

Puede eliminar recetas usando el [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) devuelto como parámetro de salida, o el nombre de dicho oreDictEntry como string.

```zenscript
//mods.botania.Orechid.removeOre(IOreDictEntry oreDict);
mods.botania.Orechid.removeOre(<ore:oreGold>);

//mods.botania.Orechid.removeOre(String oreDict);
mods.botania.Orechid.removeOre("oreGold");
```