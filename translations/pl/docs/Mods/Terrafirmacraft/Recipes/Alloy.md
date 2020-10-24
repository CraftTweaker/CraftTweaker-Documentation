# Alloy

## Package
```zenscript
import mods.terrafirmacraft.Alloy;
import mods.terrafirmacraft.AlloyRecipeBuilder;
```

## Addition
- For manipulating Alloy recipes a recipe builder is provided
```zenscript
AlloyRecipeBuilder builder = Alloy.addAlloy(String metal);
builder.addMetal(String input, double min, double max);
builder.build();
```

## Removal

```zenscript
Alloy.removeAlloy(String metal);
```

## Example scripts
- Please refer to [Metal](/Mods/Terrafirmacraft/Metal) for a complete reference on TFC Metals.
```zenscript
Alloy.addAlloy("BRONZE").addMetal("COPPER", 0.88, 0.92).addMetal("TIN", 0.08, 0.12).build();
Alloy.addAlloy("BISMUTH_BRONZE").addMetal("COPPER", 0.5, 0.65).addMetal("BISMUTH", 0.1, 0.2).addMetal("zinc", 0.2, 0.3).build();
```