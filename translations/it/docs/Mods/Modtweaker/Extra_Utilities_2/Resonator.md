# Risonatore

ModTweaker consente di aggiungere o rimuovere Extra Utilities 2 Ricette Risonatore

## Chiamata

Puoi chiamare il pacchetto Resonator usando `mods.extrautils2.Resonator`

## Rimozione

```zenscript
//mods.extrautils2.Resonator.remove(IItemStack outout);
mods.extrautils2.Resonator.remove(<minecraft:redstone>);
```

## Addizione

```zenscript
<br />//1 GP = 100 energia
//mods.extrautils2.Resonator.add(IItemStack output, IItemStack input, int energia, @Optional boolean addOwnerTag);
mods. xtrautils2.Resonator.add(<minecraft:redstone_block>, <minecraft:gold_block>, 100);
mods.extrautils2.Resonator.add(<minecraft:gold_block>, <minecraft:iron_block>, 200, falso);
```