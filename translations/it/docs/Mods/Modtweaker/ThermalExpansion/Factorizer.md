# Factorizer

Il Factorizer Manager consente di aggiungere ricette al factorizer.

## Importa il pacchetto

Per abbreviare le chiamate di metodo è possibile [importare](/AdvancedFunctions/Import/) il pacchetto in questo modo:

```zenscript
import mods.thermalexpansion.Factorizer;
```

## Aggiungi Ricette

È possibile aggiungere oneway split/combinare ricette o rilegature bidirezionali.

```zenscript
//mods.thermalexpansion.Factorizer.addRecipeSplit(IItemStack in, IItemStack out);
mods.thermalexpansion.Factorizer.addRecipeSplit(<minecraft:dirt>, <minecraft:grass> * 5);

//mods.thermalexpansion.Factorizer.addRecipeCombine(IItemStack in, IItemStack out);
mods. hermalexpansion.Factorizer.addRecipeCombine(<minecraft:grass> * 5, <minecraft:dirt>);

//mods.thermalexpansion.Factorizer.addRecipeBoth(IItemStack combined, IItemStack split);
mods.thermalexpansion.Factorizer.addRecipeBoth(<minecraft:trapped_chest>, <minecraft:chest> * 13);
```

## Rimuovi Ricette

Naturalmente puoi anche rimuovere le ricette.  
Se vuoi rimuovere un'associazione bidirezionale avrai bisogno di due chiamate, però.

```zenscript
//mods.thermalexpansion.Factorizer.removeRecipeSplit(IItemStack in);
mods.thermalexpansion.Factorizer.removeRecipeSplit(<minecraft:iron_block>);

//mods.thermalexpansion.Factorizer.removeRecipeCombine(IItemStack in);
mods.thermalexpansion.Factorizer.removeRecipeCombine(<minecraft:iron_ingot> * 9);
```