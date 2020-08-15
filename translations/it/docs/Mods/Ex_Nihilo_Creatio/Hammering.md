# Hammering

## Pacchetto
```zenscirpt
`mods.exnihilocreatio.Hammer`
```

## Metodi

- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)** Il blocco che deve essere rotto.
- **[IItemStack](/Vanilla/Items/IItemStack/) output** L'elemento che il blocco cade quando è rotto.
- **Livello strumento interno** livello strumento per rompere il blocco.
- **Probabilità galleggiante** tra 0-1.
- **Probabilità di fortuna galleggiante** tra 0-1.

## Addizione

```zenscript
mods.exnihilocreatio.Hammer.addRecipe(IIngrediente, IItemStack, Int, Float, Float);

mods.exnihilocreatio.Hammer.addRecipe(<minecraft:log>, <minecraft:plank>, 0, 0.25, 0.5);
```

## Rimozione

```zenscript
mods.exnihilocreatio.Hammer.removeAll();
```
