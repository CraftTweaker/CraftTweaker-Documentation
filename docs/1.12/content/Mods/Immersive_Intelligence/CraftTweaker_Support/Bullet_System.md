::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Bullet System

The `bullet.*` package can be used to add and remove bullet cores, components and shrapnel to Immersive Intelligence
Bullet System.

## Importing the Package

```zenscript
import mods.immersiveintelligence.bullet.Bullets; //for addShrapnel, removeShrapnel
import mods.immersiveintelligence.bullet.CoreMaterialBuilder; //for creating bullet cores
import mods.immersiveintelligence.bullet.ComponentMaterialBuilder; //for creating bullet components
```

## Adding Shrapnel

### Parameters

| Type   | Name         | Required  |
|--------|--------------|-----------|
| String | Name         | Yes       |
| int    | Color        | Yes       |
| String | Texture Path | Yes       |
| int    | Damage       | Yes       |
| int    | Mass         | Yes       |
| float  | Brightness   | Yes       |

For the `Name` parameter use a simple material name, such as `dirt`, `iron` or `diamond`.  
The `Color` parameter is a color provided in RGB int format. To get it, pick a color (RGB) in hex and convert the number
to decimal.   
The `Texture` parameter is a texture path (resource location) string, f.e. `"minecraft:textures/blocks/dirt"`.  
The `Damage` parameter is a damage value in half-hearts. The `Mass` parameter determines gravity.

### Default Values

| Material Name | Color    | Damage | Texture                                                           | Mass |
|---------------|----------|--------|-------------------------------------------------------------------|------|
| `aluminum`    | 14281962 |        | `immersiveengineering:textures/blocks/sheetmetal_aluminum`        | 0.05 |
| `zinc`        | 14607324 |        | `immersiveintelligence:textures/blocks/metal/sheetmetal_zinc`     | 0.15 |
| `copper`      | 14908454 |        | `immersiveengineering:textures/blocks/sheetmetal_copper`          | 0.25 |
| `platinum`    | 14213601 |        | `immersiveintelligence:textures/blocks/metal/sheetmetal_platinum` | 0.05 |
| `gold`        | 13742137 |        | `minecraft:textures/blocks/gold_block`                            | 0.25 |
| `nickel`      | 8620151  |        | `immersiveengineering:textures/blocks/sheetmetal_nickel`          | 0.25 |
| `silver`      | 10996424 |        | `immersiveengineering:textures/blocks/sheetmetal_silver`          | 0.25 |
| `electrum`    | 16166233 |        | `immersiveengineering:textures/blocks/sheetmetal_electrum`        | 0.25 |
| `constantan`  | 16348246 |        | `immersiveengineering:textures/blocks/sheetmetal_constantan`      | 0.25 |
| `brass`       | 9795395  |        | `immersiveintelligence:textures/blocks/metal/sheetmetal_brass`    | 0.35 |
| `iron`        | 13092807 |        | `minecraft:textures/blocks/iron_block`                            | 0.25 |
| `lead`        | 3817028  |        | `immersiveengineering:textures/blocks/sheetmetal_lead`            | 0.75 |
| `steel`       | 5066061  |        | `immersiveengineering:textures/blocks/sheetmetal_steel`           | 0.35 |
| `tungsten`    | 3882563  |        | `immersiveintelligence:textures/blocks/metal/sheetmetal_tungsten` | 0.45 |
| `HOPGraphite` | 2631720  |        | `immersiveengineering:textures/blocks/stone_decoration_coke`      | 0.45 |
| `uranium`     | 6656617  |        | `immersiveengineering:textures/blocks/sheetmetal_uranium`         | 0.45 |

The `Brightness` parameter is a value 0.0-1.0, determining the glow effect for Albedo (colored lighting mod) compat.

### Syntax

```zenscript
mods.immersiveintelligence.bullet.Bullets.addShrapnel(String name, int color, String texture, int damage, float mass, float brightness);
```

### Example

```zenscript
mods.immersiveintelligence.bullet.Bullets.addShrapnel("dirt", 6047289, "minecraft:textures/blocks/dirt", 123, 1, 0);
```

## Removing Shrapnel

### Parameters

| Type   | Name | Required |
|--------|------|----------|
| String | Name | Yes      |

### Syntax

```zenscript
mods.immersiveintelligence.bullet.Bullets.removeShrapnel();
```

### Example

```zenscript
mods.immersiveintelligence.bullet.Bullets.removeShrapnel("aluminium");
```

## Adding Bullet Cores

Bullet cores can be creating using a builder class called `CoreMaterialBuilder`. A new builder can be creating using
the `CoreMaterialBuilder.create(String name);` method. After creation, it needs to be assigned values and finally -
registered.

### Methods

| Method            | Parameter Type                                      | Parameter Name | Description                                                                                                                                 |
|-------------------|-----------------------------------------------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| setColor          | int                                                 | Color          | Color value in RGB Int format                                                                                                               |
| setDensity        | float                                               | Color          | Value used for calculating mass and gravity of the projectile                                                                               |
| setDmgModifier    | float                                               | Color          | Multiplier for the damage dealt by contact with the bullet, default 1.0                                                                     |
| setEffectModifier | float                                               | Color          | Multiplier for the strength/radius of component effect, default 1.0                                                                         |
| setPenHardness    | float                                               | Color          | Block Penetration hardness value, see [Block Penetration Values](Mods/Immersive_Intelligence/CraftTweaker_Support/Block_Penetration_Values) |
| setStack          | [IIngredient](/Vanilla/Variable_Types/IIngredient/) | Stack          | Ingredient that will be accepted in Projectile Workshop to create the core                                                                  |

### Default Values

| Core Name       | Color    | Density | Damage Modifier | Effect Modifier | Penetration Hardness | Stack                 |
|-----------------|----------|---------|-----------------|-----------------|----------------------|-----------------------|
| `core_brass`    | 14329930 | 0.75    | 0.65            | 1.25            | 4                    | `<ore:nuggetBrass>`   |
| `core_lead`     | 3817028  | 1.5     | 1.1             | 1.0             | 8                    | `<ore:nuggetLead>`    |
| `core_steel`    | 6580076  | 0.5     | 1.25            | 0.65            | 12                   | `<ore:nuggetSteel>`   |
| `core_tungsten` | 3026997  | 0.35    | 1.45            | 0.25            | 16                   | `<ore:nuggetBrass>`   |
| `core_uranium`  | 6656617  | 0.45    | 1.35            | 0.75            | 36                   | `<ore:nuggetUranium>` |

### Example

```zenscript
var core = mods.immersiveintelligence.bullet.CoreMaterialBuilder.create("dirt");
core.setColor(6047289);
core.setDensity(1.0);
core.setDmgModifier(0);
core.setExplosionModifier(5.0);
core.setPenHardness(0.1);
core.setStack(<minecraft:dirt>);
core.register();
```

## Removing Bullet Cores

### Parameters

| Type   | Name | Required |
|--------|------|----------|
| String | Name | Yes      |

### Syntax

```zenscript
mods.immersiveintelligence.bullet.Bullets.removeCore();
```

### Example

```zenscript
mods.immersiveintelligence.bullet.Bullets.removeCore("coreBrass");
```

## Adding Bullet Components

Bullet components can be creating using a builder class called `ComponentMaterialBuilder`. A new builder can be creating
using the `ComponentMaterialBuilder.create(String name);` method. After creation, it needs to be assigned values and
finally - registered using the `register()` method.

### Methods

| Method             | Parameter Type                                      | Parameter Name | Description                                                                                                                   |
|--------------------|-----------------------------------------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------|
| setColor           | int                                                 | Color          | Color value in RGB Int format                                                                                                 |
| setDensity         | float                                               | Color          | Value used for calculating mass and gravity of the projectile                                                                 |
| setRole            | string                                              | Role           | Value used for creating a generic projectile name, i.e. "armor-piercing - high-explosive", see the list below for valid roles |
| setStack           | [IIngredient](/Vanilla/Variable_Types/IIngredient/) | Stack          | Ingredient that will be accepted in Projectile Workshop to create the core                                                    |
| setComponentEffect | IComponentFunction                                  | Stack          | Function called during the explosion                                                                                          |

### Component Roles

A list of valid values for the `setRole` method.

- `general_purpose`
- `shrapnel`
- `piercing`
- `explosive`
- `incendiary`
- `tracer`
- `flare`
- `chemical`
- `special`

### IComponentFunction

`IComponentFunction` is a function type, used for creating effects during a bullet's explosion.

| Type      | Name     | Description                                                            |
|-----------|----------|------------------------------------------------------------------------|
| IWorld    | world    | World the explosion happened in                                        |
| IVector3d | pos      | Position vector of the bullet                                          |
| IVector3d | dir      | Direction vector of the bullet                                         |
| String    | coreType | Core type name                                                         |
| float     | amount   | How much of the component is contained within the projectile (0.0-1.0) |
| IData     | nbt      | NBT Data of the component (collected from item)                        |

### Default Values

Automatically generated components (based on fluids, gasses and shrapnel) and are not listed.

| Core Name          | Color    | Density | Role         | Stack                                     |
|--------------------|----------|---------|--------------|-------------------------------------------|
| `tnt`              | 14329930 | 1.0     | `explosive`  | `<ore:materialTNT>`                       |
| `rdx`              | 13812372 | 1.25    | `explosive`  | `<ore:materialHexogen>`                   |
| `hmx`              | 16514043 | 1.75    | `explosive`  | `<ore:materialHMX>`                       |
| `nuke`             | 3727570  | 1.0     | `special`    | `<ore:materialNuke>`                      |
| `white_phosphorus` | 13884332 | 2       | `incendiary` | `<ore:dustWhitePhosphorus>`               |
| `tracer_powder`    | 16777215 | 0.25    | `tracer`     | `<immersiveintelligence:tracer_powder:0>` |
| `tesla`            | 13283761 | 1.15    | `special`    | `<immersiveengineering:metal_device0:0>`  |
| `propaganda`       | 12234660 | 0.65    | `special`    | `<immersiveintelligence:printed_page:1>`  |
| `flare_powder`     | 16777215 | 0.25    | `flare`      | `<immersiveintelligence:tracer_powder:1>` |
| `firework`         | 13283761 | 1.0     | `flare`      | `<minecraft:firework_charge>`             |

### Example

```zenscript
import crafttweaker.entity.IEntity;
import crafttweaker.world.IBlockPos;
import crafttweaker.entity.IEntityDefinition;
import crafttweaker.util.Position3f;

var material = mods.immersiveintelligence.bullet.ComponentMaterialBuilder.create("furry_bomb");
material.setColor(6047289);
material.setDensity(1.0);
material.setStack(<minecraft:stone>);
material.setComponentRole("special");
material.setComponentEffect(
    function(world,pos,dir,coreType,amount,nbt) {
            print("*The Furries have Arrived*");
            var pp = (Position3f.create(pos.x as float, pos.y as float, pos.z as float) as IBlockPos);
            var count = (amount*20) as int;

            for i in 0 to count {
                <entity:minecraft:wolf>.spawnEntity(world, pp);
            }
        }
);
material.register();
```

## Removing Bullet Components

### Parameters

| Type   | Name | Required |
|--------|------|----------|
| String | Name | Yes      |

### Syntax

```zenscript
mods.immersiveintelligence.bullet.Bullets.removeComponent();
```

### Example

```zenscript
mods.immersiveintelligence.bullet.Bullets.removeComponent("white_phosphorus");
```