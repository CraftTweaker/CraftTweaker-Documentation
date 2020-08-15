# Schmelzbonus

Mit diesem Paket können Sie Elemente zur Schmelz-Bonusliste hinzufügen und aus der Schmelz-Bonusliste entfernen.  
Die Liste der Schmelz-Bonusse wird befragt, wann immer ein Höllenöfen einen Gegenstand kocht.

## Dieses Paket importieren

You can [import](/AdvancedFunctions/Import/) the package and its methods to facilitate the retrival of the methods.

```zenscript
import mods.thaumcraft.SmeltingBonus;
```

## Hinzufügen von Elementen

Hinweis: Eingabe muss entweder ein IItemStack oder ein IOreDictEintrag sein

```zenscript
//mods.thaumcraft.SmeltingBonus.addSmeltingBonus(IIngredient Eingabe, Gewichtetes ItemStack)
mods.thaumcraft.SmeltingBonus.addSmeltingBonus(<minecraft:cobblestone>, <minecraft:button> % 20);
```

## Entferne Elemente

Hinweis: Eingabe muss entweder ein IItemStack oder ein IOreDictEintrag sein

```zenscript
//mods.thaumcraft.SmeltingBonus.removeSmeltingBonus(IIngredient Eingabe, IItemStack Stack);
mods.thaumcraft.SmeltingBonus.removeSmeltingBonus(<minecraft:gold_ore>, <minecraft:gold_nugget>);
```