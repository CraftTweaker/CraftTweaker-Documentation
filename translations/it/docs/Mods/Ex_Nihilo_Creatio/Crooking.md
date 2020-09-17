# Crooking

## Pacchetto
```zenscirpt
mods.exnihilocreatio.Crook
```
## Metodi

- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)** L'input.
- **[IItemStack](/Vanilla/Items/IItemStack/) ricompensa** l'oggetto che ha la possibilità di cadere.
- **Probabilità galleggiante** tra 0-1.
- **Probabilità di fortuna galleggiante** tra 0-1.

## Addizione

```zenscript
mods.exnihilocreatio.Crook.addRecipe(IIngrediente, IItemStack, Float, Float);

mods.exnihilocreatio.Crook.addRecipe(<minecraft:log>, <minecraft:plank>, 0.25, 0.5);
```

## Rimozione

```zenscript
mods.exnihilocreatio.Crook.removeAll();
```