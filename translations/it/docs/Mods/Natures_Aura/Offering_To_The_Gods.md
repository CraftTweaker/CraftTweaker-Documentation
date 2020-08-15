# Offerta agli Dei

## Pacchetto
```zenscript
mods.naturesaura.Offerta
```

## Metodi
- **Nome Stringa**
- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient)** L'offerta
- **int ininputAmount** The amount of items required for the input. Si noti che ciò significa che la quantità della variabile in ingresso è ignorata
- **[IIngrediente](/Vanilla/Variable_Types/IIngredient) startItem** l'elemento richiesto per iniziare l'offerta
- **[IItemStack](/Vanilla/Items/IItemStack) output** Il regalo dell'Offerta

## Addizione

```zenscript
mods.naturesaura.Offering.addRecipe(nome string, input IIngrediente, int inputAmount, elemento di avvio IIngrediente, uscita IItemStack)
```

## Rimozione

```zenscript
mods.naturesaura.Offering.removeRecipe(IItemStack output)
```