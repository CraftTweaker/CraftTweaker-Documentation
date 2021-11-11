::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Sequenced Assembly

The Sequenced Assembly mechanic is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

Sequenced Assembly recipes can only be added using a builder like pattern due to their complexity.
The following script will add a recipe that will, when an Arrow is Cut with a Saw, transition the Arrow to Glass.
That Glass now needs to be processed in a Press.
After being processed in a Press, it needs to be deployed with Dirt.

This process needs to be repeated 2 times.

When the whole process is complete, the recipe will create a Diamond and an Apple.

```zenscript
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_test")
    .transitionTo(<item:minecraft:glass>)
    .require(<item:minecraft:arrow>)
    .loops(2)
    .addOutput(<item:minecraft:diamond>, 1)
    .addOutput(<item:minecraft:apple>, 1)
    .addStep(<recipetype:create:cutting>.factory(), (rb) => rb.duration(50))
    .addStep(<recipetype:create:pressing>.factory(), (rb) => rb.duration(500))
    .addStep(<recipetype:create:deploying>.factory(), (rb) => rb.require(<item:minecraft:dirt>)));
```

#### Remove Recipe

Sequenced Assembly recipes can be removed via their name.

```zenscript
// <recipetype:create:sequenced_assembly>.removeByName(String name);

<recipetype:create:sequenced_assembly>.removeByName("create:sequenced_assembly/cogwheel");
```