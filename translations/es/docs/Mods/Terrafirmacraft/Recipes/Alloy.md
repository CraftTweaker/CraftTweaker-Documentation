# Alloy

## Paquete
```zenscript
import mods.terrafirmacraft.Alloy;
import mods.terrafirmacraft.AlloyRecipeBuilder;Aleación;
importar mods.terrafirmacraft.AlloyRecipeBuilder;
```

## Adicional
- Para manipular las recetas de Aleación se proporciona un constructor de recetas
```zenscript
constructor de AleyRecipeBuilder = Alloy.addAlloy(String Metal);
builder.addMetal(String input, double min, double max);
builder.build();
```

## Eliminar

```zenscript
Aleación.removeAleación (String metal);
```

## Scripts de ejemplo
- Consulte [Metal](/Mods/Terrafirmacraft/Metal) para obtener una referencia completa sobre metales TFC.
```zenscript
Alloy.addAlloy("BRONZE").addMetal("COPPER", 0.88, 0.92).addMetal("TIN", 0.08, 0.12).build();
Alloy.addAlloy("BISMUTH_BRONZE").addMetal("COPPER", 0.5, 0.65).addMetal("BISMUTH", 0.1, 0.2).addMetal("zinc", 0.2, 0.3).build();
```