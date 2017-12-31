# Position 3f

A Position in Minecraft consists of 3 values: x, y and z.  
A Position3f Object stores a position using those three values.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.util.Position3f;`

## Getting a Position3f object
You can get such an object using:

- The `position` ZenGetter on a [IPlayer](/Vanilla/Game/IPlayer) object
- The Position3f constructors below

## Position3f constructor
You can create a Position3f object yourself by using the following method:

```JAVA
crafttweaker.util.Position3f.create(float x, float y, float z);
```

The First method allows you to create a position at the given coordinates.  
The Second method allows you to create a random position between the given coordinates.


## ZenGetters and ZenSetters
| ZenGetter | ZenSetter | Description                    |
|-----------|-----------|--------------------------------|
|x          |x          | Returns the position's x value |
|y          |y          | Returns the position's y value |
|z          |z          | Returns the position's z value |