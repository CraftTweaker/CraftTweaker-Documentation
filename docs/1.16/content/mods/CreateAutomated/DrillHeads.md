::requiredMod[Create Automated]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/create-automated}
::requiredMod[Create Automated]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create-automated requiredMod=ContentTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/contenttweaker}

# Drill Heads

⚠ You can only do this with [ContentTweaker](https://www.curseforge.com/minecraft/mc-mods/contenttweaker) installed!

Allows creating custom drill heads with custom durability, and custom partials (model displayed on the extractor block).

The DrillHead is a type of [ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder),
so you obtain it by calling [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)#withType&lt;DrillHeadBuilder&gt;().

```zenscript
#loader contenttweaker

import mods.contenttweaker.item.ItemBuilder;
import mods.createautomated.item.DrillHeadBuilder;

new ItemBuilder()
    .withType<DrillHeadBuilder>()
    .durability(9898) // Sets the drill's durability, drill damage is defined in each extracting recipe
    .partial("block/my_drill") // Sets the model displayed on the extractor block. See how the partials work below
    .build("i_like_putting_jokes_in_ids"); // Registers the item with the id contenttweaker:i_like_putting_jokes_in_ids
```

The partials are the model displayed on the extractor block. 
If you don't register one, the default iron drill head will be used.


If your drill model is in `assets/contenttweaker/models/block/my_drill.json`, you would use `.partial("block/my_drill")`.
