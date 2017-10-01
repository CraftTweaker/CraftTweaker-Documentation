# Fluid

This allows you to add fluids to the game!

## Create the Fluid Representation
Before you can add the fluid, you need to create a Fluid Representation which will allow you to set the properties of the fluid you want to add.  
This is where the [VanillaFactory](VanillaFactory) comes in:
```JAVA
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, int color);
```

## Import the representation Package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.Fluid;` 

## ZenProperties

To get/set the properties you can either use the respecting ZenGetters/Setters or the ZenMethods:
```
//property name: density
//ZenGetter
print(fluid.density);
//ZenSetter
fluid.density = 500;
//ZenMethods
fluid.getDensity();
fluid.setDensity(1000);
```

| Property Name   | Type                                                                                    | Required | Default Value                    | Description/Notes                                                                    |
|-----------------|-----------------------------------------------------------------------------------------|----------|----------------------------------|--------------------------------------------------------------------------------------|
| unlocalizedName | String                                                                                  | Yes      |                                  | Name, should be all lowercase                                                        |
| density         | int                                                                                     | No       | 1000                             | How fast you can walk in the fluid                                                   |
| gaseous         | boolean                                                                                 | No       | false                            | Is the fluid gaseous (flows upwards instead of downwards)?                           |
| luminosity      | int                                                                                     | No       | 0                                | The light-level emitted by the fluid                                                 |
| temperature     | int                                                                                     | No       | 300                              | The Fluid's temperature                                                              |
| color           | int                                                                                     | Yes      |                                  | The Fluid's color-code                                                               |
| colorize        | boolean                                                                                 | No       | true                             | Is the fluid's color-code applied?                                                   |
| rarity          | String                                                                                  | No       | COMMON                           | How rare a fluid is, determines ToolTip color ("COMMON", "UNCOMMON", "RARE", "EPIC") |
| viscosity       | int                                                                                     | No       | 1000                             | How quickly the fluid spreads                                                        |
| fillSound       | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition) | No       | ITEM_BUCKET_FILL                 | The sound played when the fluid is placed                                            |
| emptySound      | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition) | No       | ITEM_BUCKET_EMPTY                | The sound played when the fluid is picked up                                         |
| vaporize        | boolean                                                                                 | No       | false                            |                                                                                      |
| stillLocation   | String                                                                                  | No       | contenttweaker:fluids/fluid      | The Location where to find the texture for the still fluid                           |
| flowingLocation | String                                                                                  | No       | contenttweaker:fluids/fluid_flow | The Location where to find the texture for the flowing fluid                         |
| material        | [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition)     | No       | WATER                            | The Material the fluid is made of                                                    |




## Registering the fluid
You need to call this method to register the fluid in the game!  
Otherwise nothing will happen!  
After you have called this function, you cannot un-register the fluid or change any of it's properties!

```
fluid.register();
```

## Example Script
```
#loader contenttweaker
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Fluid;

var zsFluid = VanillaFactory.createFluid("zs_fluid", 0);
zsFluid.fillSound = <soundevent:block.anvil.place>;
zsFluid.register();
```