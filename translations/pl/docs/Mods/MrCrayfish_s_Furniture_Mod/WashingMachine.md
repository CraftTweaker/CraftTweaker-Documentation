# Maszyny pralnicze

Maszyna do prania pozwala na czyszczenie brudnych ubrań.

Domyślnie naprawia trwałość pancerza wanilii, w tym Elytra.

## Usuwanie

## Usuń pasujące elementy do prania.

```zenscript
mods.cfm.WashingMachine.remove(@Optional final IIngredient item);

mods.cfm.WashingMachine.add(<minecraft:elytra>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_helmet>);
mods. fm.WashingMachine.remove(<minecraft:chainmail_chestplate>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_leggings>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_boots>);
// Usuń wszystkie przedmioty do prania.
mods.cfm.WashingMachine.remove();
```

## Dodawanie

## Dodaj przedmiot do zmywania.

```zenscript
mods.cfm.WashingMachine.add(@Nonnull final IItemStack);

mods.cfm.WashingMachine.add(<minecraft:elytra>);
mods.cfm.WashingMachine.add(<minecraft:leather_helmet>);
mods.cfm.WashingMachine.add(<minecraft:leather_chestplate>);
mods.cfm.WashingMachine.add(<minecraft:leather_leggings>);
mods.cfm.WashingMachine.add(<minecraft:leather_boots>);
```