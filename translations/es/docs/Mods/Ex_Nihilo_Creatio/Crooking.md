# Torneos

## Paquete
```zenscirpt
mods.exnihilocreatio.Crook
```
## Metodos

- **[IIngrediente](/Vanilla/Variable_Types/IIngredient/) entrada** La entrada.
- **[ItemStack](/Vanilla/Items/IItemStack/) recompensa** el objeto que tiene la oportunidad de soltar.
- **Probabilidad flotante** de probabilidad entre 0-1.
- **Probabilidad fortune flota** de probabilidad entre 0-1.

## Adicional

```zenscript
mods.exnihilocreatio.Crook.addRecipe(IIngrediente, ItemStack, Float, Float);

mods.exnihilocreatio.Crook.addRecipe(<minecraft:log>, <minecraft:plank>, 0.25, 0.5);
```

## Eliminar

```zenscript
mods.exnihilocreatio.Crook.removeAll();
```