# Śliwka Dusz

## Pakiet

`import mods.enderio.SoulBinder;`

## Metoda

- **[IItemStack](/Vanilla/Items/IItemStack/) wyjście** wynik przepisu.
- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wkład** Główny składnik (niedusze).
- **String[] entities** Dozwolone przedmioty, które muszą być obecne w fiolce z duchem, aby ten przepis działał.
- **int xp** Koszt doświadczenia dla tego przepisu
- **int energyCost** Ile FE używa przepisu. Domyślnie 5000.

## Dodanie

```zenscript
mods.enderio.SoulBinder.addRecipe(IItemStack output, IIngredient input, String[] entities, int xp, int energyCost);

mods.enderio.SoulBinder.addRecipe(<minecraft:nether_star>, <minecraft:bone>, ["minecraft:skeleton"], 50000);
```

## Usuwanie

```zenscript
mods.enderio.SoulBinder.removeRecipe(wyjście IItemStack);

mods.enderio.SoulBinder.removeRecipe(<enderio:item_material:19>);
```