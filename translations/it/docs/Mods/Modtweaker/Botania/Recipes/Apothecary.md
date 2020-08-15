# Speziale Petalo

La confezione Speziale viene utilizzata per aggiungere o rimuovere ricette da/per l'Speziale Botania Petal.

## Chiamata

Puoi chiamare il pacchetto Apothecary usando `mods.botania.Apothecary`

## Aggiunta ricetta

È possibile aggiungere ricette utilizzando il restituito [IItemStack](/Vanilla/Items/IItemStack/) come parametro di output, o il nome del fiore botania come stringa. il nome stringa funziona solo per i fiori di botania.  
Ricordati di una cosa però:  
L'Speziale è **codificato a chiave per accettare solo petali**, così mentre è possibile aggiungere ricette con qualsiasi ingrediente, si dovrebbe utilizzare solo gli elementi che è possibile gettare nella Spezia.

```zenscript
//mods.botania.Apothecary.addRecipe(IItemStack output, IIngredient[] input);
mods.botania.Apothecary.addRecipe(<minecraft:melon>, [<ore:petalLime>, <ore:petalLime> <ore:petalLime>]);

//mods. otania.Apothecary.addRecipe(String output, IIngredient[] input);
mods.botania.Apothecary.addRecipe("daybloom", [<ore:petalLime>, <ore:petalLime>, <ore:petalLime>, <ore:petalRed>]);
```

## Rimozione ricetta

È possibile rimuovere le ricette utilizzando il restituito [IItemStack](/Vanilla/Items/IItemStack/) come parametro di output, o il nome del fiore botania come stringa. il nome stringa funziona solo per i fiori di botania.

```zenscript
//mods.botania.Apothecary.removeRecipe(IItemStack output);
mods.botania.Apothecary.removeRecipe(<minecraft:melon>);

//mods.botania.Apothecary.removeRecipe(String output);
mods.botania.Apothecary.removeRecipe("daybloom");
```