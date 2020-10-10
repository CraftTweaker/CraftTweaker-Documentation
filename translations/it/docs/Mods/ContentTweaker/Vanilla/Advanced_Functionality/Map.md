# Map

The Map Package allows you to set a waypoint using BASE's waypoint event handler.

## Importing the package

You can import the package so that you don't have to retype it everytime.

    import mods.contenttweaker.Map;
    

## Adding Waypoints

This is the only method exposed by the Map package and it allows you to set a waypoint at the given location.  
It is a void method with the parameters:

- string name
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/)
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/)
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)

    Map.setWaypoint(String name, IWorld world, IBlockPos pos, CTColor color)