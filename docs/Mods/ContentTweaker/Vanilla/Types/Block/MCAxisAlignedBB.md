# MCAxisAlignedBB

A MineCraft Axis Aligned Boundary Box object allows you change a [Block's](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block) Boundary borders to a given cuboid shape.


## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.AxisAlignedBB;` 

## Calling an MCAxisAlignedBB object
You can get such an object using a [Block's](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block) `axisAlignedBB` Property.  
Alternatively, you can use this package to create a new MCAxisAlignedBB object:
```JAVA
AxisAlignedBB.create(double minX, double minY, double minZ, double maxX, double maxY, double maxZ);
```
All parameters for this function are doubles between 0 and 1!

## ZenProperties
You can get and set each Property using `getProperty()` or `object.property`.

| ZenProperty | Type   |
|-------------|--------|
| minX        | double |
| minY        | double |
| minZ        | double |
| maxX        | double |
| maxY        | double |
| maxZ        | double |
