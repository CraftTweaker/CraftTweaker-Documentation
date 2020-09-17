# Rejestr ciepła

Rejestr ciepła umożliwia przypisanie wartości całkowitej do bloku, który wchodzi w interakcję z kociołem, cyklem i piecem.

* Wartości domyślne: Ognisko Vanilla | 1 Ognisko Stoked | 2

# Dodawanie źródła ciepła

```zenscript
//stack musi mieć zamaskowany stan bloku.
mods.betterwithmods.HeatRegistry.addHeatSource(IItemStack stack, int heat);

mods.betterwithmods.HeatRegistry.addHeatSource(IBlockState stack, int heat);

```