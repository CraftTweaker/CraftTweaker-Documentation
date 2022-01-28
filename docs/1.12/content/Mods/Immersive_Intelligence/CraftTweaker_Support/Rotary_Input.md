::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Rotary Input

The `RotaryInput` package can be used to make a Tile Entity supported by II Transmission Box.

## Importing the Package

```zenscript
import mods.immersiveintelligence.RotaryInput;
```

## Adding Tile Entities

### Parameters

| Type   | Name      | Required |
|--------|-----------|----------|
| String | Classpath | Yes      |
| float  | Torque    | Yes      |

For default torque values, check IIconfig file for `dynamo_windmill_torque` and `dynamo_watermill_torque`.  

### Syntax

```zenscript
mods.immersiveintelligence.RotaryInput.addInput(String classPath, float torque);
```

### Example

```zenscript
mods.immersiveintelligence.RotaryInput.addInput("com.examplemod.tile.ExampleTile", 20);
```