# Ore

## Package

`mods.exnihilocreatio.Ore`
Also needs to be in the `#loader preinit` or `#loader contenttweaker`

## Methods

- **String name** Name the ore chunks/piece/dust/ingot
- **String color** Color of material in hex.
- **[IItemStack](/Vanilla/Items/IItemStack/) output** For pre-existing ingots.
- **Map string[string]** Not sure how it works.
- **String oreDict** The name of the oreDict you want.

## Addition

```zenscript
Ore.addRecipe(String,
	String,
	@Optional IItemStack,
	@Optional Map<string, String>,
	@Optional String);

Ore.addRecipe("Wood",
	"63452D",
	null,
	null,
	"Woody");
```

## Removal 

```zenscript
Ore.removeAll();
```
