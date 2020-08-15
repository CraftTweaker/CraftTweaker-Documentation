# Blockschnitt

## Paket

`importieren mods.ic2.BlockCutter;`

## Methoden

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Eingabe**
- **@Optionale Int Härte** Mindesthärte für Klingen.

## Addition

```zenscript
mods.ic2.BlockCutter.addRecipe(IItemStack Output, IIngredient Input, @Optionale Int Standard 0);

mods.ic2.BlockCutter.addRecipe(<minecraft:diamond>, <minecraft:dirt>);
```

## Entfernen

Entfernen Sie vorerst einfach die entsprechende Zeile in `config/ic2/block_cutter.ini`.