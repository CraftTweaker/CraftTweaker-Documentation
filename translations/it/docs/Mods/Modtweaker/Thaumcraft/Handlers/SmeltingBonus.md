# Bonus fusione

Questo pacchetto ti permette di aggiungere e rimuovere elementi da/per la lista bonus di fusione.  
La lista Bonus Smelting viene interrogata ogni volta che un forno infernale cuoce un oggetto.

## Importazione del pacchetto

È possibile [importare](/AdvancedFunctions/Import/) il pacchetto e i suoi metodi per facilitare il retrival dei metodi.

```zenscript
import mods.thaumcraft.SmeltingBonus;
```

## Aggiunta elementi

Avviso: Input deve essere un IItemStack o un IOreDictEntry

```zenscript
//mods.thaumcraft.SmeltingBonus.addSmeltingBonus(IIngredient input, WeightedItemStack stack)
mods.thaumcraft.SmeltingBonus.addSmeltingBonus(<minecraft:cobblestone>, <minecraft:button> % 20);
```

## Rimozione elementi

Avviso: Input deve essere un IItemStack o un IOreDictEntry

```zenscript
//mods.thaumcraft.SmeltingBonus.removeSmeltingBonus(IIngredient input, IItemStack stack);
mods.thaumcraft.SmeltingBonus.removeSmeltingBonus(<minecraft:gold_ore>, <minecraft:gold_nugget>);
```