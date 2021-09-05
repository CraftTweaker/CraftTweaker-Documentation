::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Depoloyer Application

The Depoloyer Application mechanic is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe that will create Dirt when Glass is deployed.

```zenscript
// <recipetype:create:deploying>.addRecipe(String name, IIngredient processedItem, IIngredient heldItem, MCWeightedItemStack[] outputs)

<recipetype:create:deploying>.addRecipe("deploy_test", <item:minecraft:glass>, <item:minecraft:air>, [<item:minecraft:dirt>]);
```

#### Register Recipe using a ProcessingRecipeBuilder

The following script will register a deployer recipe that will output Dirt, Diamond and Glass, requiring a Stick and Apple as inputs.

Check out [Processing Recipe Builder](/mods/Create/util/ProcessingRecipeBuilder) for more information on what you can do with this method.

```zenscript
<recipetype:create:deploying>.registerRecipe("dep_test", (rb) => {
    rb.output(<item:minecraft:dirt>);
    rb.output(<item:minecraft:diamond>);
    rb.output(<item:minecraft:glass>);
    rb.require(<item:minecraft:stick>);
    rb.require(<item:minecraft:apple>);
});
```

#### Remove Recipe

Deployer recipes can be removed via their name, unfortunately Create doesn't ship any default Deployer recipes to remove, so the following script is commented out as it won't actually do anything.

```zenscript
// <recipetype:create:deploying>.removeByName(String name);

// <recipetype:create:deploying>.removeByName("name_here");
```

#### Get a Processing Recipe Factory

You can get a ProcessingRecipeFactory of this recipe type like so:

```zenscript
// <recipetype:create:deploying>.factory() as ProcessingRecipeFactory

<recipetype:create:deploying>.factory()
```