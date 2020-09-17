# Orechid

Das Orechid-Paket wird zum Hinzufügen oder Entfernen von generierten Erzen zu den Botania Orechid Blumen verwendet.

## Anruf

Sie können das Orechid-Paket mit `mods.botania.Orechid` aufrufen

## Alle registrierten Rezepte finden

Sie finden alle registrierten Orechid-Rezepte mit [`/ct botorechid`](/Mods/Modtweaker/Botania/Commands/).

## Rezeptzusatz

Sie können entweder Rezepte mit dem zurückgegebenen [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) als Ausgabeparameter hinzufügen oder den Namen des besagten oreDictEntry als String.

```zenscript
//mods.botania.Orechid.addOre(IOreDictEntry oreDict, int weight);
mods.botania.Orechid.addOre(<ore:logWood>, 500);

//mods.botania.Orechid.addOre(String oreDict, int weight);
mods.botania.Orechid.addOre("logWood", 500);
```

## Rezept-Entfernung

Sie können entweder Rezepte mit dem zurückgegebenen [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) als Ausgabeparameter entfernen oder den Namen des genannten oreDictEntry als String.

```zenscript
//mods.botania.Orechid.removeOre(IOreDictEntry oreDict);
mods.botania.Orechid.removeOre(<ore:oreGold>);

//mods.botania.Orechid.removeOre(String oreDict);
mods.botania.Orechid.removeOre("oreGold");
```