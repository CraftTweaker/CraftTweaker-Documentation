# Altare Naturale

## Pacchetto
```zenscript
mods.naturesaura.Altare
```

## Metodi
- **Nome Stringa**
- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient)** Ingresso altari.
- **[IItemStack](/Vanilla/Items/IItemStack) output** The altars output.
- **[Catalizzatore IIngrediente](/Vanilla/Variable_Types/IIngredient)** Il blocco catalizzatore che si trova su uno dei quattro blocchi angolari, può essere nullo
- **int aura** La quantità di Aura richiesta per il completamento della ricetta
- **int time** The time processes take in ticks

## Addizione

```zenscript
mods.naturesaura.Altar.addRecipe(nome string, ingresso IIngrediente, uscita IItemStack, catalizzatore IIngredient, int aura, int tempo)
```

## Rimozione

```zenscript
mods.naturesaura.Altar.removeRecipe(IItemStack output)
```