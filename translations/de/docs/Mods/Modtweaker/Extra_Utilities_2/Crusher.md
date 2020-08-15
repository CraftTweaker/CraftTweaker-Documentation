# Kreuzritter

ModTweaker erlaubt dir, zusätzliche Werkzeuge 2 Kreuzfahrtrezepte hinzuzufügen oder zu entfernen

## Anruf

Du kannst das Crusher-Paket mit `mods.extrautils2.Crusher` anrufen

## Entfernen

```zenscript
//mods.extrautils2.Crusher.remove(IItemStack outout);
mods.extrautils2.Crusher.remove(<minecraft:redstone>);
```

## Addition

```zenscript
//mods.extrautils2.Crusher.add(IItemStack output, IItemStack input, @Optional IItemStack secondaryOutput, @Optional float secondaryChance);
mods. xtrautils2.Crusher.add(<minecraft:gold_ingot> * 9, <minecraft:gold_block>, <minecraft:iron_ingot>, 0.1f);
mods.extrautils2.Crusher.add(<minecraft:iron_ingot> * 9, <minecraft:iron_block>);
```