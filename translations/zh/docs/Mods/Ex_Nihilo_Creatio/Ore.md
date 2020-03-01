# Ore

## 所属包名

`mods.exnihilocreatio.Ore`

Also needs to be in the `#loader preinit` or `#loader contenttweaker`

## Methods

- **String name** Name the ore chunks/piece/dust/ingot
- **String color** Color of material in hex.
- **[IItemStack](/Vanilla/Items/IItemStack/) output** requires an oredict.firstItem or errors out.
- **Map string[string]** Language code then translation.
- **String oreDict** The name of the oreDict you want.

## 添加配方

```zenscript
Ore.addRecipe(String,
    String,
    @Optional IItemStack,
    @Optional Map<string, String>,
    @Optional String);

Ore.addRecipe("Stone",
    "63452D",
    <ore:stone>.firstItem,
    {
    "en_au": "StoneDownUnder"
    },
    "Stone");
```

## Removal

```zenscript
Ore.removeAll();
```