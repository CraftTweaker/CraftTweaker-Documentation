# Rare Earth Extractor

## Package

```zenscript
import mods.ic2.RareEarthExtractor;
```

## Method

- **float value**
- **[IItemStack](/Vanilla/Items/IItemStack/)... inputs** Can have more then one specified for the input. If so all the specified items give the same specified value.

### Add Rare Earth Entries

```zenscript
mods.ic2.RareEarthExtractor.addRareEarthEntries(float value, IItemStack... input);

mods.ic2.RareEarthExtractor.addRareEarthEntries(1.0F, <minecraft:bedrock>, <minecraft:iron_block>);
```