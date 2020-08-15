# SAG Mill

## Pacchetto

`import mods.enderio.SagMill;`

## Metodi

- **[IItemStack](/Vanilla/Items/IItemStack/)[] output** I risultati della ricetta.
- **galleggiante[] possibilità** La possibilità che questo oggetto appaia. Deve avere la stessa lunghezza dell'output.
- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)** L'input.
- **String bonusType** Questo influisce su come funzionano le sfere di macinazione. Può essere NONE (nessun bonus), MULTIPLY_OUTPUT (può aumentare probabilità > 1.0), e CHANCE_SOLO (caps chance a 1.0).
- **int energyCost** Quanto FE usa la ricetta. Predefinito a 5000.
- **float xp** L'xp è concesso da questa ricetta. Non può essere negativo.

## Addizione

```zenscript
mods.enderio.SagMill.addRecipe(IItemStack[] output, float[] chances, IIngredient input, @Optional String bonusType, @Optional int energyCost, @Optional float[] xp);

mods.enderio.SagMill.addRecipe([<minecraft:planks>], [100], <minecraft:log>);
```

## Rimozione

```zenscript
mods.enderio.SagMill.removeRecipe(IItemStack input);

mods.enderio.SagMill.removeRecipe(<minecraft:cobblestone>);
```