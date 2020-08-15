# Sieving

## Pacchetto

Per accedere a `Sieve` senza chiarire il percorso completo, è possibile importare il pacchetto nella parte superiore dello script con il seguente:

```zenscript
import mods.exnihilocreatio.Sieve;
```

## Metodi

- **[Blocco IIngrediente](/Vanilla/Variable_Types/IIngredient/)** Il blocco che rilascia l'output.
- **[IItemStack](/Vanilla/Items/IItemStack/) output** L'elemento che scende dal blocco..
- **Possibilità galleggiante** La possibilità dovrebbe essere compresa tra 0-1.

## Maglia Di Stringa

```zenscript
Sieve.addStringMeshRecipe(IIngrediente, IItemStack, Float chance);
Sieve.addStringMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.001);
```

## Maglia Flint

```zenscript
Sieve.addFlintMeshRecipe(IIngrediente, IItemStack, Float chance);
Sieve.addFlintMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.01);
```

## Maglia Di Ferro

```zenscript
Sieve.addIronMeshRecipe(IIngrediente, IItemStack, Float chance);
Sieve.addIronMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.1);
```

## Maglia Di Diamante

```zenscript
Sieve.addDiamondMeshRecipe(IIngrediente, IItemStack, Float chance);
Sieve.addDiamondMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 1);
```

## Rimozione

```zenscript
Sieve.removeAll();
```
