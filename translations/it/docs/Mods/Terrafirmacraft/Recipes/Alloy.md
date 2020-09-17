# Alloy

## Pacchetto
```zenscript
import mods.terrafirmacraft.Lega;
import mods.terrafirmacraft.AlloyRecipeBuilder;
```

## Addizione
- Per manipolare le ricette di lega un costruttore di ricette è fornito
```zenscript
AlloyRecipeBuilder builder = Alloy.addAlloy(String metal);
builder.addMetal(String input, double min, double max);
builder.build();
```

## Rimozione

```zenscript
Alloy.removeAlloy(String metal);
```

## Script di esempio
- Fare riferimento a [Metal](/Mods/Terrafirmacraft/Metal) per un riferimento completo su TFC Metals.
```zenscript
Alloy.addAlloy("BRONZE").addMetal("COPPER", 0.88, 0.92).addMetal("TIN", 0.08, 0.12).build();
Alloy.addAlloy("BISMUTH_BRONZE").addMetal("COPPER", 0.5, 0.65).addMetal("BISMUTH", 0.1, 0.2).addMetal("zinc", 0.2, 0.3).build();
```