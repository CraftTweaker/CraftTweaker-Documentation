# Birra Botania

Il pacchetto Brew viene utilizzato per aggiungere o rimuovere ricette da/per lo stand di birra Botania.

## Chiamata

Puoi chiamare il pacchetto Brew usando `mods.botania.Brew`

## Nomi Di Brew

Per utilizzare questo pacchetto, è necessario conoscere i nomi di birra registrati della botania.  
Puoi trovarli usando [`/ct botbrews`](/Mods/Modtweaker/Botania/Commands/).

## Aggiunta ricetta

```zenscript
//mods.botania.Brew.addRecipe(IIngredient[] input, String brewName);
mods.botania.Brew.addRecipe([<minecraft:nether_wart>, <minecraft:reeds>, <minecraft:redstone>], "speed");
```

## Rimozione ricetta

```zenscript
//mods.botania.Brew.removeRecipe(String brewName);
mods.botania.Brew.removeRecipe("absorption");
```