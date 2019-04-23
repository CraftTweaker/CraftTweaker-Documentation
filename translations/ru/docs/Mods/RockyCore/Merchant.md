# Merchant

## Commands

The following commands are added to retrieve information about the availible merchant professions & carrers:

- `/ct merchant professions` - outputs a log of valid merchant professions
- `/ct merchant careers [profession]` - outputs a log of valid careers for all or the specified profession

## Package

`mods.rockycore.Merchant`

## Addition

Trades can be added to a specific merchant profession & carrer.

```java
// addTrade(String profession, String career, IItemstack input1, @Optional IItemstack input2, IItemstack output, int level);
mods.rockycore.Merchant.addTrade("minecraft:nitwit", "nitwit", <minecraft:emerald>, <minecraft:diamond>, <minecraft:cobblestone>, 1);
```

## Removal

Merchant trade removal is currently not possible.