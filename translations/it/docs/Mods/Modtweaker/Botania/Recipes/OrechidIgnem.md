# Orechid Ignem

Il pacchetto OrechidIgnem è utilizzato per l'aggiunta o la rimozione di minerali generati da/per Botania Orechid Ignem Flowers.

## Chiamata

Puoi chiamare il pacchetto OrechidIgnem usando `mods.botania.OrechidIgnem`

## Aggiunta ricetta

È possibile aggiungere ricette utilizzando il restituito [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) come parametro di output, o il nome di detto oreDictEntry come stringa.

```zenscript
//mods.botania.OrechidIgnem.addOre(IOreDictEntry oreDict, int weight);
mods.botania.OrechidIgnem.addOre(<ore:logWood>, 500);

//mods.botania.OrechidIgnem.addOre(String oreDict, int weight);
mods.botania.OrechidIgnem.addOre("logWood", 500);
```

## Rimozione ricetta

È possibile rimuovere le ricette usando il restituito [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) come parametro di output, o il nome di detto oreDictEntry come stringa.

```zenscript
//mods.botania.OrechidIgnem.removeOre(IOreDictEntry oreDict);
mods.botania.OrechidIgnem.removeOre(<ore:oreGold>);

//mods.botania.OrechidIgnem.removeOre(String oreDict);
mods.botania.OrechidIgnem.removeOre("oreGold");
```