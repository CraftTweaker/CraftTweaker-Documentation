# Zmywarka do naczyń

Zmywarka do naczyń pozwala na czyszczenie brudnych narzędzi.

Domyślnie naprawia trwałość narzędzi wanilii i broni.

## Usuwanie

## Usuń pasujące elementy do prania.

```zenscript
mods.cfm.Dishwasher.remove(@Optional final IIngredient item);

mods.cfm.Dishwasher.remove(<minecraft:flint_and_steel>);
// Usuń wszystkie spryskane przedmioty.
mods.cfm.Dishwasher.remove();
```

## Dodawanie

## Dodaj przedmiot do zmywania.

```zenscript
mods.cfm.Dishwasher.add(@Nonnull final element IItemStack);

mods.cfm.Dishwasher.add(<minecraft:wooden_shovel>);
mods.cfm.Dishwasher.add(<minecraft:stone_shovel>);
mods.cfm. ishwasher.add(<minecraft:iron_shovel>);
mods.cfm.Dishwasher.add(<minecraft:diamond_shovel>);
mods.cfm.Dishwasher.add(<minecraft:shield>);
mods.cfm.Dishwasher.add(<minecraft:bow>);
```