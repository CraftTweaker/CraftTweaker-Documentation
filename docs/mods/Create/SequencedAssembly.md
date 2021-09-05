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
<recipetype:create:sequenced_assembly>.registerRecipe("seq_test", (rb) => {
    rb.transitionTo(<item:minecraft:glass>);
    rb.require(<item:minecraft:arrow>);
    rb.loops(2);
    rb.addOutput(<item:minecraft:diamond>, 1);
    rb.addOutput(<item:minecraft:apple>, 1);
    rb.addStep(<recipetype:create:cutting>.factory(), (rb1) => rb1.duration(50));
    rb.addStep(<recipetype:create:pressing>.factory(), (rb1) => rb1.duration(500));
    rb.addStep(<recipetype:create:deploying>.factory(), (rb1) => rb1.require(<item:minecraft:dirt>));
});
```

#### Remove Recipe

Sequenced Assembly recipes can be removed via their name.

```zenscript
// <recipetype:create:sequenced_assembly>.removeByName(String name);

<recipetype:create:sequenced_assembly>.removeByName("create:sequenced_assembly/cogwheel");
```