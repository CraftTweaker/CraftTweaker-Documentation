# IRegisterMaterialPart

The IRegisterMaterialPart function is a fucntion used to register [Material Parts](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) added using a custom [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/).

## 导入相关包

If you ever feel the need to import this function's class, here you go:

    import mods.contenttweaker.RegisterMaterialPart;
    

## Syntax

We have a void function, that takes a [Material Part](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) as input.  
This is the materialPart that should be registered.  
You could for example call the [Vanilla Factory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) at this point, but how proceed form this point is really up to you.

    function(materialPart) {
        //DoStuff
        return;
    }