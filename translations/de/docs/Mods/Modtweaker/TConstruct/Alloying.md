# Legende

Das `Legierungs-` Paket erlaubt das Hinzufügen oder Entfernen von Legierungsrezepten.

## Anruf

Sie können das Legierungspaket mit `mods.tconstruct.Alloy` aufrufen

## Legierungsrezepte hinzufügen

```zenscript
//mods.tconstruct.Alloy.addRecipe(ILiquidStack-Ausgabe, ILiquidStack[] Eingänge);
mods.tconstruct.Alloy.addRecipe(<liquid:water> * 10, [<liquid:lava> * 10, <liquid:molten_iron> * 5]);
```

## Entferne Legierungsrezepte

```zenscript
//mods.tconstruct.Alloy.removeRecipe(ILiquidStack output);
mods.tconstruct.Alloy.removeRecipe(<liquid:water>);

//mods.tconstruct.Alloy.removeRecipe(ILiquidStack output, ILiquidStack[] inputs);
mods.tconstruct.Alloy.removeRecipe(<liquid:water>, [<liquid:lava>, <liquid:molten_iron>]);
```