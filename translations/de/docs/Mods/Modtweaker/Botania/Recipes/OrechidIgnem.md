# Orechid Ignem

Das Paket OrechidIgnem wird zum Hinzufügen oder Entfernen generierter Erze zu/von den Ignem Blumen von Botania Orechid verwendet.

## Anruf

Du kannst das OrechidIgnee-Paket mit `mods.botania.OrechidIgnem` aufrufen

## Rezeptzusatz

Sie können entweder Rezepte mit dem zurückgegebenen [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) als Ausgabeparameter hinzufügen oder den Namen des besagten oreDictEntry als String.

```zenscript
//mods.botania.OrechidIgnem.addOre(IOreDictEntry oreDict, int weight);
mods.botania.OrechidIgnem.addOre(<ore:logWood>, 500);

//mods.botania.OrechidIgnem.addOre(String oreDict, int weight);
mods.botania.OrechidIgnem.addOre("logWood", 500);
```

## Rezept-Entfernung

Sie können entweder Rezepte mit dem zurückgegebenen [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) als Ausgabeparameter entfernen oder den Namen des genannten oreDictEntry als String.

```zenscript
//mods.botania.OrechidIgnem.removeOre(IOreDictEntry oreDict);
mods.botania.OrechidIgnem.removeOre(<ore:oreGold>);

//mods.botania.OrechidIgnem.removeOre(String oreDict);
mods.botania.OrechidIgnem.removeOre("oreGold");
```