# Fluid

This allows you to add fluids to the game!

## Create the Fluid Representation

Before you can add the fluid, you need to create a Fluid Representation which will allow you to set the properties of the fluid you want to add.  
This is where the [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) comes in:

```zenscript
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, int color);
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, CTColor color);
```

## Import the representation Package

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.Fluid;`

## Propriétés Zen

To get/set the properties you can either use the respecting ZenGetters/Setters or the ZenMethods:

```zenscript
//property name: density
//ZenGetter
print(fluid.density);
//ZenSetter
fluid.density = 500;
//ZenMethods
fluid.getDensity();
fluid.setDensity(1000);
```

| Nom de la propriété | Type de texte                                                                            | Required | Default Value                    | Description/Notes                                                                    |
| ------------------- | ---------------------------------------------------------------------------------------- | -------- | -------------------------------- | ------------------------------------------------------------------------------------ |
| unlocalizedName     | chaîne de caractères                                                                     | Yes      |                                  | Name, should be all lowercase                                                        |
| density             | Indice                                                                                   | No       | 1000                             | How fast you can walk in the fluid                                                   |
| gaseous             | boolean                                                                                  | No       | Faux                             | Is the fluid gaseous (flows upwards instead of downwards)?                           |
| luminosity          | Indice                                                                                   | No       | 0                                | The light-level emitted by the fluid                                                 |
| temperature         | Indice                                                                                   | No       | 300                              | The Fluid's temperature                                                              |
| color               | Indice                                                                                   | Yes      |                                  | The Fluid's color-code                                                               |
| colorize            | boolean                                                                                  | No       | vrai                             | Is the fluid's color-code applied?                                                   |
| rarity              | chaîne de caractères                                                                     | No       | COMMON                           | How rare a fluid is, determines ToolTip color ("COMMON", "UNCOMMON", "RARE", "EPIC") |
| viscosity           | Indice                                                                                   | No       | 1000                             | How quickly the fluid spreads                                                        |
| fillSound           | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) | No       | ITEM_BUCKET_FILL               | The sound played when the fluid is picked up with a Bucket                           |
| emptySound          | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) | No       | ITEM_BUCKET_EMPTY              | The sound played when the fluid is placed                                            |
| vaporize            | boolean                                                                                  | No       | Faux                             | Does vaporize when placed in the Nether?                                             |
| stillLocation       | chaîne de caractères                                                                     | No       | contenttweaker:fluids/fluid      | The Location where to find the texture for the still fluid                           |
| flowingLocation     | chaîne de caractères                                                                     | No       | contenttweaker:fluids/fluid_flow | The Location where to find the texture for the flowing fluid                         |
| material            | [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/)     | No       | WATER                            | The Material the fluid is made of                                                    |

## Registering the fluid

You need to call this method to register the fluid in the game!  
Otherwise nothing will happen!  
After you have called this function, you cannot un-register the fluid or change any of it's properties!

```zenscript
fluid.register();
```

## Exemple de script

```zenscript
#loader contenttweaker
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Fluid;
import mods.contenttweaker.Color;

var zsFluid = VanillaFactory.createFluid("zs_fluid", Color.fromHex("FF69B4"));
zsFluid.fillSound = <soundevent:block.anvil.place>;
zsFluid.register();
```

## Localizing the fluid

You will need to add `fluid.fluidName = Localized Name` to the responding language files. Alternatively, you could use CraftTweaker's [localization feature](/Vanilla/Game/IGame/), though it's recommended using the language files!