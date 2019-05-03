# Carving

## Package

`mods.chisel.Carving`

## Addition

    //mods.chisel.Carving.addGroup(String name);
    //mods.chisel.Carving.addVariation(String groupName, IItemStack stack);
    mods.chisel.Carving.addGroup("test");
    mods.chisel.Carving.addVariation("test", <minecraft:stone>);
    

## Removal

You can get the names of the groups by running `/ct chiselGroups`

    //mods.chisel.Carving.removeGroup(String name);
    //mods.chisel.Carving.removeVariation(String groupName, IItemStack stack);
    mods.chisel.Carving.removeGroup("test");
    mods.chisel.Carving.removeVariation("test", <minecraft:stone>);