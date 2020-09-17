# Compostaggio

## Pacchetto
```zenscript
mods.exnihilocreatio.Compost
```

## Metodi

- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)** L'input.
- **Possibilità galleggiante** La possibilità dovrebbe essere compresa tra 0-1.
- **Colore stringa** Il colore è esadecimale.
- **[IItemStack](/Vanilla/Items/IItemStack/) output** Il risultato della ricetta.

## Addizione

Non prende array in per IIngredient.

```zenscript
mods.exnihilocreatio.Compost.addRecipe(IIngrediente, Float chance, String color, IItemStack);

mods.exnihilocreatio.Compost.addRecipe(<ore:woodPlank>, 0.25, "63452D", <minecraft:log>);
```

## Rimozione

```zenscript
Compost.removeAll();
```