# Position 3f

A Position in Minecraft consists of 3 values: x, y and z.  
A Position3f Object stores a position using those three values.

## Importing the package
It might be required for you to [import](/AdvancedFunctions/Import) the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.util.Position3f;`

## Getting a Position3f object
You can get such an object using:

- The `position` ZenGetter on a [IPlayer](/Vanilla/Game/IPlayer) object
- The Position3f constructor below
- The [IBlockPos](/Vanilla/World/IBlockPos) Position3f caster.

## Position3f constructor
You can create a Position3f object yourself by using the following method:

```JAVA
crafttweaker.util.Position3f.create(float x, float y, float z);
```

The First method allows you to create a position at the given coordinates.  


## ZenGetters and ZenSetters
| ZenGetter | ZenSetter | Description                    |
|-----------|-----------|--------------------------------|
|x          |x          | Returns the position's x value |
|y          |y          | Returns the position's y value |
|z          |z          | Returns the position's z value |

## Casting as IBlockPos
You can use the two ways below to cast a Position3f Object to an [IBlockPos](/Vanilla/World/IBlockPos) Object:
Remember, for casting you need to [import](/AdvancedFunctions/Import) the type you want to cast to unless you use the full name.
```
posThree.asBlockPos();
posThree as IBlockPos;
```