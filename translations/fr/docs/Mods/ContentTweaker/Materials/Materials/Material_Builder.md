# Material Builder

If you want to build a [material](/Mods/ContentTweaker/Materials/Materials/Material/), you will need a Material Builder!  
Doesn't sound that hard, does it?

## Importing the package

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.MaterialBuilder;`

## Retrieving such an object

You can retrieve a new, clear Builder using the [MaterialSystem Package](/Mods/ContentTweaker/Materials/MaterialSystem/):

```JAVA
var mBuilder = mods.contenttweaker.MaterialSystem.getMaterialBuilder();
```

## Set the Material's Properties

You can set these Properties

| ZenMethod               | Parameter                                                        |
| ----------------------- | ---------------------------------------------------------------- |
| setName(name)           | String name                                                      |
| setColor(color)         | int color                                                        |
| setColor(color)         | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) color |
| setHasEffect(hasEffect) | boolean hasEffect                                                |

All these Methods do 2 things: Firstly, they change the builder's Property, secondly they return the modified builder.  
You can see in the example scripts below what this means.

## Actually build the Material

Before you can build your material, you need to build it:

```JAVA
mBuilder.build();
```

This returns an [IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/) Object.

## Example Script

```JAVA
import mods.contentTweaker.MaterialSystem;

var builder = MaterialSystem.getMaterialBuilder();
builder.setName("Urubuntu");
builder.setColor(000151);
builder.setHasEffect(false);
val urubuntu = builder.build();

val arakantara = MaterialSystem.getMaterialBuilder().setName("Arakantara").setColor(15592941).setHasEffect(true).build();
```