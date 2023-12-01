# Ingredients and Recipes

## About this page

This page aims to give the intermediate scripter a more detailed look into some of the common concepts passed around when dealing with recipes. 

## Let's talk semantics: The Good, the Bad and the Block

It is fairly possible that in your scripting adventures, you've seen the following types being mentioned:  [IItemStack](/vanilla/api/item/IItemStack), [IIngredient](/vanilla/api/ingredient/IIngredient), [ItemDefinition](/vanilla/api/item/ItemDefinition), [MCTag](/vanilla/api/tag/MCTag)s, and [Block](/vanilla/api/block/Block)s.

However, their meaning within the context of the game might be a bit vague, so let's break them down individually shall we?

- An [ItemDefinition](/vanilla/api/item/ItemDefinition) is an abstract representation of an in game item. At runtime, there is only one definition for each registered item during the whole execution of the game.
- An [IItemStack](/vanilla/api/item/IItemStack) is a bundle of data, containing an [ItemDefinition](/vanilla/api/item/ItemDefinition), a stack size, and extra NBT Data. Anything in your inventory is an [IItemStack](/vanilla/api/item/IItemStack). Tons and tons of them are instantiated during the normal execution of the game.
- An [IIngredient](/vanilla/api/ingredient/IIngredient) is a predicate that matches some [IItemStack](/vanilla/api/item/IItemStack)s. Like in a cooking recipe, it is essentially a guideline for what fits in a recipe. Said guideline can be really strict: "1x pumpkin_seed", or vague: "1x any seed".
- A [BlockState](/vanilla/api/block/BlockState) is a [Block](/vanilla/api/block/Block) with properties, found within a [Level](/vanilla/api/world/Level). A [Block](/vanilla/api/block/Block), like an [ItemDefinition](/vanilla/api/item/ItemDefinition) only has one instance.
- A [MCTag](/vanilla/api/tag/MCTag) (not to be confused with NBT Tags) is a collection of registry objects, such as [ItemDefinition](/vanilla/api/item/ItemDefinition)s, [Block](/vanilla/api/block/Block)s, [Fluid](/vanilla/api/fluid/Fluid)s, or [Biome](/vanilla/api/world/biome/Biome)s, along many others. [MCTag](/vanilla/api/tag/MCTag)s are the ones that have contents, and not the other way around:
An item (definition) *is in* many [MCTag](/vanilla/api/tag/MCTag)s, or a single [MCTag](/vanilla/api/tag/MCTag) contains many [ItemDefinition](/vanilla/api/item/ItemDefinition)s.

So what do we interpret from this?

- [Block](/vanilla/api/block/Block)s are rarely used in the context of recipes
- [MCTag](/vanilla/api/tag/MCTag)s do not contain [IItemStack](/vanilla/api/item/IItemStack)s, only [ItemDefinition](/vanilla/api/item/ItemDefinition)s. This means that any extra data (such as the stacksize, or NBT [IData](crafttweaker/api/data/IData)) won't be checked at the moment of looking at whether a [MCTag](/vanilla/api/tag/MCTag) contains an item.
- [IIngredient](/vanilla/api/ingredient/IIngredient)s are an abstract template that determine what can go in a recipe.

## About Ingredients and Predicates

Predicates are type of function. They take in one argument and return whether said argument passes all conditions.

```zenscript
//Checks if the given item is a diamond pickaxe. 
function overengineeredIngredient(ing as IItemStack) as boolean {
    //Remember, matches is not symmetric!
    //This check ignores all nbt data.
    //matches also checks stacksize. This does not matter for damageable items, but it is nice to know!
    return <item:minecraft:diamond_pickaxe>.matches(ing);
    //Would be the same as doing:
    //return <item:minecraft:diamond_pickaxe>.definition == ing.definition;
}

//Checks if the given ingredient is an undamaged, unenchanted diamond pickaxe
function strictIngredient(ing as IItemStack) as boolean {
    return ing.matches(<item:minecraft:diamond_pickaxe>);
}

```

Obviously, you don't need to do this at all! It is all handled behind the scenes by all recipes that take [IIngredient](/vanilla/api/ingredient/IIngredient)s as parameters. However, it is good to have a mental idea of how matching works with these types.

[MCTag](/vanilla/api/tag/MCTag)s can also be implicitly as well as explicitly be converted to [IIngredient](/vanilla/api/ingredient/IIngredient)s. Their check more or less looks like this:

```zenscript
function tagMatches(tag as MCTag<ItemDefinition>, ing as IItemStack) {
    //Only the definition is queried, not the item's stacksize or extra data!
    return tag.contains(ing.definition);
}
```

## Fine tuning your ingredients

Sometimes, you'll want more precision, or to group ingredients.
For this, you can use some of the methods found in the [IIngredient](/vanilla/api/ingredient/IIngredient) class:

- `anyDamage`
- `onlyDamaged`
- `onlyDamagedAtLeast` and `onlyDamagedAtMost`
- `onlyIf`, the more flexible of them all, allows you to define a custom predicate.
- `reuse`
- `transformCustom`
- `transformReplace`
- `transformDamage`


And the magic IIngredientTransformed, which modify the item after being used. However, these require special support, and in Vanilla they will only work in a Crafting Table.

## Using fancy ingredients in json recipes

CraftTweaker registers custom ingredient types so that you can use them in json recipes. The following are available to use:

- `crafttweaker:any`
- `crafttweaker:list`
- `crafttweaker:conditioned` (except for onlyIf)
- `crafttweaker:transformed` -> (except for transformCustom)
- `crafttweaker:partial_tag`

Those are the ingredient types. Just about half of what you want. The following script *should* provide you with a json object, which you can copy and paste as an ingredient in a Json Recipe.

```zenscript
import crafttweaker.api.data.IData;

val ing = /* your ingredient here, an example of it being an Or Ingredient */ <item:minecraft:pumpkin> | <item:minecraft:dirt>;

//This should print a json object you might be able to use in your Json Recipes. However, some mods might choose to ignore what you've given them, so test your changes!
println((ing as IData).getAsString());

```

# To sum up

So, what do we learn from this post?

- [IIngredient](/vanilla/api/ingredient/IIngredient)s are abstract. They're conditions an [IItemStack](/vanilla/api/item/IItemStack) must match in order to be considered valid.
- [MCTag](/vanilla/api/tag/MCTag)s are sets of [ItemDefinition](/vanilla/api/item/ItemDefinition)s, not [IItemStack](/vanilla/api/item/IItemStack)s.
- Most ingredients and conditions can be serialized into json and used by other mods. However, the most complex of transformations re quire explicit support.