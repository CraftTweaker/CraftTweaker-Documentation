# Tiered Tooltips
This mod is a vanity addon to [ItemStages](https://minecraft.curseforge.com/projects/item-stages). Tiered Tooltips uses the new RenderTooltipEvent in Forge along with some clever logic to allow the end-user to change the tooltip colour of an item, based on which stage said item is restricted to.

```java
mods.TieredTooltips.colourStage(String stageName, String background, String borderStart, String borderEnd);
mods.TieredTooltips.colourStage("one", "2969d1", "cccccc", "000000"); // RGB Hex Values
mods.TieredTooltips.colourStage("two", "7fbf8200", "7fc43700", "32752202"); // ARGB Hex Values
```
