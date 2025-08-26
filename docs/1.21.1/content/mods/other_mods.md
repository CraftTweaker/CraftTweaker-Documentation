# Generic Recipe Manipulation

## RecipeTypes: The basis of it all.

If it's not your first time with CraftTweaker, you'll have noticed that the mod makes it easier for you to add
recipes for the vanilla recipetypes: There's a [global alias](/globals#global-getters) for the vanilla types.
As that page clearly explains, all vanilla recipetypes have an associated [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager).

What does this mean though? In simple terms, all `<recipetype>` brackets that are available to you through the `/ct dump recipetype` command implement
[IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager), which in essence means that all methods you see in the [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager) page are usable on a
`<recipetype>` object, regardless of who registers it.

This is the reason why you can use `removeByName(recipeName as string)`, `remove(output as IItemStack)`, and `removeByInput(input as IItemStack)`, 
ordered from most precise to least precise in their application, on ANY recipetype, whether vanilla adds it or a mod like FarmersDelight does.

```zenscript
//Will work consistently.
//Only removes the targetted recipe.

stoneCutter.removeByName("minecraft:cut_copper_stairs_from_cut_copper_stonecutting");
stoneCutter.removeByName("minecraft:cut_copper_stairs_from_copper_block_stonecutting");

//Attempts to remove all crafting table recipes that output said item.
//Is guaranteed to work with vanilla recipes, might not work with modded.

craftingTable.remove(<item:minecraft:tnt>);

//Is really unreliable with anything that's not the vanilla types.
furnace.removeByInput(<item:minecraft:raw_iron>);
```

The note about precision and reliability above is dependant on the structure of the recipe we're targetting.
All recipes have a unique name they're registered under, but not all recipes have an output item, or an input item.
Some items might output multiple things, fluids, or energy. 

## The addJsonRecipe method

Anyway, since all `<recipetype>`s implement [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager), if they support datapacks, 
you can use the `addJsonRecipe` method present in that class to add a json recipe using both a unique name 
and a json recipe in the form of [IData](/vanilla/api/data/IData). 

This will only work if the mod supports datapacks though, which is almost certainly yes if the mod isn't made with MCreator or very poorly made.

## How do we write a JSON Recipe in CraftTweaker?

To begin with, you need to find out an example of a json recipe. 
A mod supports datapacks if it has a registered recipetype that can parse json datapacks and 
also ships a json file for each recipe inside of it. As mods contain code, a datapack and a resourcepack, 
you will be able to find json recipes in the mods source by Googling : `modid github source`, and browsing the repository.

Using Find File should make it fairly easy to find a json recipe file, but files are generally found under:
`src/main/resources/data/modid/recipes` OR `src/generated/resources/data/modid/recipes`.

Do keep in mind that each mod has **THEIR OWN UNIQUE** way of adding json recipes! You won't be able to always apply the same syntax to everything!
The same applies for different inputs: If you want to add a fluid or a tag, one mod might expect a `"tag"` json key, while another might parse it within their inputs...

## Making an example out of it

For the rest of this page, we will be looking at adding a Create Cutting recipe through `addJsonRecipe`.

You can find this recipe [here](https://github.com/Creators-of-Create/Create/blob/mc1.21.1/dev/src/generated/resources/data/create/recipe/cutting/bamboo_planks.json):

```json
{
  "type": "create:cutting",
  "ingredients": [
    {
      "item": "minecraft:bamboo_planks"
    }
  ],
  "processing_time": 20,
  "results": [
    {
      "id": "minecraft:bamboo_mosaic"
    }
  ]
}
```

The above recipe is a purely JSON file, and your job is to translate that into something CraftTweaker can work with.
The second parameter of the `addJsonRecipe` method is an IData, something JSON translates very similarly too.
That said, you should be able to sneak in BEPs and CraftTweaker should be able to convert them to IData if they have an implicit caster to IData.

Let's say we want to add a cutting recipe that takes in a diamond hoe and outputs a diamond. We also want it to be quick.
To do that, we want to first create the basic structure of the addJsonRecipe method, which is the following:

`<recipetype>.addJsonRecipe(recipeName as string, json as MapData) as void`

Using the recipe the example json recipe from above, we get:
```zenscript
//The recipetype we want to add to, the recipe name, and the json contents.

<recipetype:create:cutting>.addJsonRecipe("duplicate_cutting_recipe", {
  "type": "create:cutting",
  "ingredients": [
    {
      "item": "minecraft:bamboo_planks"
    }
  ],
  "processing_time": 20,
  "results": [
    {
      "id": "minecraft:bamboo_mosaic"
    }
  ]
}
);
```

We can now manipulate the above to get our intended recipe:

```zenscript
<recipetype:create:cutting>.addJsonRecipe("diamond_hoe_reusing", {
  "type": "create:cutting",
  "ingredients": [
    {
      "item" : "minecraft:diamond_hoe"
    }
  ],
  "processing_time": 10,
  "results": [
    {
      "id": "minecraft:diamond"
    }
  ]
}
);

```
This is simple and nice, but it only allows us to go from one item to one item! What if we want multiple items?
What if we want chanced outputs? What if we want input tags? What about NBT on the output?

That part is a bit more complicated to handle, as it depends **solely** on whether the mod we're modifying has support for those.
To find out whether it is possible or not you have to answer the following question:

Does the base mod do this somehow in any of it's default recipes?
If the answer is yes, then you'll be able to do so.

After some digging on the Create Repository, I was able to find out it does support tags, chanced outputs and multiple outputs.

```zenscript
<recipetype:create:cutting>.addJsonRecipe("._/-", {
  "type": "create:cutting",
  "ingredients": [
    {
      "tag": "minecraft:planks"
    }
  ],
  "processing_time": 200,
  "results": [
    {
      "id": "minecraft:stick",
      "count" : 3
    }
  ]
}
);
```

## Reducing script size through a function

This works, but it takes up a lot of space, so we are going to write a custom function that will handle most of our use cases. Remember that recipe names need to be unique!
For this reason, we autogenerate them dynamically based on the output and the duration. It's very much possible you 
will need to manipulate the way recipe names are generated somewhere, don't feel scared to do so.

It's just string manipulation!

Furthermore, as noted earlier, we know that some of the most common BEPs have casters to IData, which allows to not 
worry about the jsons as all, as long as we write proper zencode. 

In order to see how a BEP serializes to IData, you might want to do:

`println((bep as IData).getAsString())`

```zenscript
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.data.IData;
import crafttweaker.api.util.random.Percentaged;

//The name of the recipe must be unique, and it must abide by typical a-z0-9.-_/ restrictions.
function addCreateCutting(itemIn as IIngredient, itemOut as Percentaged<IItemStack>, duration as int) as void {
val internalItem = itemOut.getData();    
<recipetype:create:cutting>.addJsonRecipe("custom_cutting_recipe_" + duration + "_" + internalItem.descriptionId, {
  "type": "create:cutting",
  "ingredients": [
    itemIn as IData,
  ],
  "results": [
    (internalItem as IData).merge({"count" : internalItem.amount}).merge({"chance" : itemOut.getPercentage()})
  ],
  "processingTime": duration
}
);
}

//Just call this every time you require a new recipe, thus shortening the size of your scripts tremendously, as you don't need to paste massive jsons everywhere.
addCreateCutting(<tag:items:minecraft:planks>, <item:minecraft:stick> * 2 % 50, 200);

```

Crucial note: Some extra things, like NBT, or other non standard json things, might require you to figure out a way to code support for that...
This page just shows you the basics of setting it up.

For example, supporting multiple inputs might require you to have an input parameter that is an array and convert that to a ListData through casting.


This sums up the basics of messing with other mods, enjoy your JSON Recipes!