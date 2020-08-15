# Orechid

Il pacchetto Orechid è utilizzato per l'aggiunta o la rimozione di minerali generati a/dai fiori di Orechid di Botania.

## Chiamata

È possibile chiamare il pacchetto Orechid utilizzando `mods.botania.Orechid`

## Trova tutte le ricette registrate

Puoi trovare tutte le ricette Orechid registrate usando [`/ct botorechid`](/Mods/Modtweaker/Botania/Commands/).

## Aggiunta ricetta

È possibile aggiungere ricette utilizzando il restituito [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) come parametro di output, o il nome di detto oreDictEntry come stringa.

```zenscript
//mods.botania.Orechid.addOre(IOreDictEntry oreDict, int weight);
mods.botania.Orechid.addOre(<ore:logWood>, 500);

//mods.botania.Orechid.addOre(String oreDict, int weight);
mods.botania.Orechid.addOre("logWood", 500);
```

## Rimozione ricetta

È possibile rimuovere le ricette usando il restituito [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) come parametro di output, o il nome di detto oreDictEntry come stringa.

```zenscript
//mods.botania.Orechid.removeOre(IOreDictEntry oreDict);
mods.botania.Orechid.removeOre(<ore:oreGold>);

//mods.botania.Orechid.removeOre(String oreDict);
mods.botania.Orechid.removeOre("oreGold");
```