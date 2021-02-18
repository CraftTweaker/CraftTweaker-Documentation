# Ores

**Needs to be in the `#loader preinit` or `#loader contenttweaker`**


## Package
```zenscript
`mods.exnihilocreatio.Ore`
```

## Methods

- **String name** Name the ore chunks/piece/dust/ingot
- **String color** Color of material in hex.
- **[IItemStack](/Vanilla/Items/IItemStack/) output** requires an oredict.firstItem or errors out.
- **Map string[string]** Language code then translation.
- **String oreDict** The name of the oreDict you want.

## Addition

```zenscript
mods.exnihilocreatio.Ore.addRecipe(String,
    String,
    @Optional IItemStack,
    @Optional Map<string, String>,
    @Optional String);

mods.exnihilocreatio.Ore.addRecipe("Stone",
    "63452D",
    <ore:stone>.firstItem,
    {
    "en_au": "StoneDownUnder"
    },
    "Stone");
```

## Removal

```zenscript
mods.exnihilocreatio.Ore.removeAll();
```