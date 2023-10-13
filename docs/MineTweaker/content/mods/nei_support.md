# NEI Support
_NOTICE: this page uses the 1.7+ item names_

NEI support can be used to hide items in NEI, add a specific item (with specific damage/tag) or to change the item name as displayed with NEI.

How? Just follow these examples:

```zenscript
import mods.nei.NEI;

NEI.hide(<minecraft:bread>);
NEI.addEntry(<minecraft:bread>.withTag({display: {Name: "Tasty bread", Lore: ["Thanks to MineTweaker,", "We can now have tastier bread"]}}));
NEI.overrideName(<minecraft:stick>, "Sticky");
```
These are the only NEI functions available. Enjoy! :)

_In 1.6.4, NEI.hide works per item ID. Thus, applying NEI.hide(<item:34>) will hide all items with that name, not only the ones with 34 meta value. This is a NEI API limitation and cannot be fixed. Additionally, in dedicated servers, there is no NEI support and loading of the file will fail. Put your NEI scripts in a separate file and other files will still load fine._