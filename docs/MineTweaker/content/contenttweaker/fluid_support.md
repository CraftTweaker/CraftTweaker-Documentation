# Fluid Support
## Handlers Supported
The following handlers are supported:

* Fluids
```zenscript
Parameters with '@Optional' are optional and can be left out

//Fluids
//String unlocalizedName, int density, boolean gaseous, int luminosity, int temperature, int viscosity, int color,boolean setFire, '@Optional int castingMaterialID, '@Optional String stillTexture, '@Optional String flowingTexture
mods.content.Fluid.registerFluid("content", 5,false,1,300,20,3914239, true,  50, "content_still", "content_flowing"

For fluids, you can add a texture, if you don't add the texture, it is the default texture, You put the texture in "/config/contenttweaker/icons/blocks/"
```

Commands Supported
Prints are stored in the minetweaker log in the minecraft directory.

```
/mt [] - Outputs a list of /
```