::requiredMod[Blood Magic]{buildIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/blood-magic}

# Blood Magic Alchemy Array

The Alchemy Array is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe that will output a Diamond when Dirt and Glass are given to an Alchemy Array. When the Dirt is given, the Alchemy Array will use the texture of a Diamond.

```zenscript
// <recipetype:bloodmagic:array>.addRecipe(String name, IItemStack output, IIngredient baseInput, IIngredient addedInput, ResourceLocation texture)
<recipetype:bloodmagic:array>.addRecipe("alchemy_array_test", <item:minecraft:diamond>, <item:minecraft:dirt>, <item:minecraft:glass>, <resource:textures/item/diamond.png>)
```

The `ResourceLocation texture` can be any texture in the game and is used when the `baseInput` has been added to the Alchemy Array.

The default values that Blood Magic themselves use are as follows, but you can use any texture that you want:
```zenscript
<resource:bloodmagic:textures/models/alchemyarrays/airsigil.png>
<resource:bloodmagic:textures/models/alchemyarrays/bindingarray.png>
<resource:bloodmagic:textures/models/alchemyarrays/bouncearray.png>
<resource:bloodmagic:textures/models/alchemyarrays/divinationsigil.png>
<resource:bloodmagic:textures/models/alchemyarrays/fastminersigil.png>
<resource:bloodmagic:textures/models/alchemyarrays/growthsigil.png>
<resource:bloodmagic:textures/models/alchemyarrays/lavasigil.png>
<resource:bloodmagic:textures/models/alchemyarrays/lightsigil.png>
<resource:bloodmagic:textures/models/alchemyarrays/magnetismsigil.png>
<resource:bloodmagic:textures/models/alchemyarrays/moonarray.png>
<resource:bloodmagic:textures/models/alchemyarrays/movementarray.png>
<resource:bloodmagic:textures/models/alchemyarrays/sightsigil.png>
<resource:bloodmagic:textures/models/alchemyarrays/spikearray.png>
<resource:bloodmagic:textures/models/alchemyarrays/sunarray.png>
<resource:bloodmagic:textures/models/alchemyarrays/updraftarray.png>
<resource:bloodmagic:textures/models/alchemyarrays/voidsigil.png>
<resource:bloodmagic:textures/models/alchemyarrays/watersigil.png>
```


#### Remove Recipes

The follow script will remove all recipes from the Alchemy Array that output a Divination Sigil.

```zenscript
<recipetype:bloodmagic:array>>.removeRecipe(IItemStack output);
<recipetype:bloodmagic:array>.removeRecipe(<item:bloodmagic:divinationsigil>);
```