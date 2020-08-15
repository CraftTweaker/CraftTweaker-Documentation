# Tooltips por niveles

Este mod es un complemento de vanidad para [ItemStages](https://minecraft.curseforge.com/projects/item-stages). Las Tooltips de Niveles utilizan el nuevo Evento RenderTooltipEvent en Forja, junto con alguna lógica inteligente para permitir al usuario final cambiar el color de la descripción de un objeto, en función de la fase a la que dicho elemento se limita a. Puede encontrar más información sobre el mod [aquí](https://minecraft.curseforge.com/projects/tiered-tooltips).

### 1.0.4 y posterior

```zenscript
//mods.tieredtooltips.colorStage(String stageName, String background, String borderStart, String borderEnd);
mods.tieredtooltips. olorStage("uno", "2969d1", "cccccc", "000000"); // RGB Hex Values
mods.tieredtooltips.colorStage("dos", "7fbf8200", "7fc43700", "32752202"); // Valores hexadecimales
```

### 1.0.2 y anteriores

```zenscript
//mods.TieredTooltips.colourStage(String stageName, String background, String borderStart, String borderEnd);
mods.TieredTooltips. olourStage("uno", "2969d1", "cccccc", "000000"); // Valores Hex RGB
mods.TieredTooltips.colourStage("dos", "7fbf8200", "7fc43700", "32752202"); // Valores Hex ARGB
```