# Frantumatore

ModTweaker consente di aggiungere o rimuovere Extra Utilities 2 Crusher Ricette

## Chiamata

Puoi chiamare il pacchetto Crusher usando `mods.extrautils2.Crusher`

## Rimozione

```zenscript
//mods.extrautils2.Crusher.remove(IItemStack outout);
mods.extrautils2.Crusher.remove(<minecraft:redstone>);
```

## Addizione

```zenscript
//mods.extrautils2.Crusher.add(IItemStack output, IItemStack input, @Optional IItemStack secondaryOutput, @Optional float secondaryChance);
mods. xtrautils2.Crusher.add(<minecraft:gold_ingot> * 9, <minecraft:gold_block>, <minecraft:iron_ingot>, 0.1f);
mods.extrautils2.Crusher.add(<minecraft:iron_ingot> * 9, <minecraft:iron_block>);
```