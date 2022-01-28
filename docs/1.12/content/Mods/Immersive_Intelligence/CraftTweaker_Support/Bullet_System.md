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
The `Texture` parameter is a texture path (resource location) string, f.e. `"minecraft:textures/blocks/dirt"`.  
The `Damage` parameter is a damage value in half-hearts. The `Mass` parameter determines gravity,
see [Common Ammunition Values]().  
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

Bullet cores can be creating using a builder class called `CoreMaterialBuilder`.
A new builder can be creating using the `CoreMaterialBuilder.create(String name);` method.
After creation, it needs to be assigned values and finally - registered.

### Methods

| Method            | Parameter Type                                      | Parameter Name | Description                                                                                                                                 |
|-------------------|-----------------------------------------------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| setColor          | int                                                 | Color          | Color value in RGB Int format                                                                                                               |
| setDensity        | float                                               | Color          | Value used for calculating mass and gravity of the projectile                                                                               |
| setDmgModifier    | float                                               | Color          | Multiplier for the damage dealt by contact with the bullet, default 1.0                                                                     |
| setEffectModifier | float                                               | Color          | Multiplier for the strength/radius of component effect, default 1.0                                                                         |
| setPenHardness    | float                                               | Color          | Block Penetration hardness value, see [Block Penetration Values](Mods/Immersive_Intelligence/CraftTweaker_Support/Block_Penetration_Values) |
| setStack          | [IIngredient](/Vanilla/Variable_Types/IIngredient/) | Stack          | Ingredient that will be accepted in Projectile Workshop to create the core                                                                  |

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

Bullet components can be creating using a builder class called `ComponentMaterialBuilder`.
A new builder can be creating using the `ComponentMaterialBuilder.create(String name);` method.
After creation, it needs to be assigned values and finally - registered using the `register()` method.

### Methods

| Method             | Parameter Type                                      | Parameter Name | Description                                                                |
|--------------------|-----------------------------------------------------|----------------|----------------------------------------------------------------------------|
| setColor           | int                                                 | Color          | Color value in RGB Int format                                              |
| setDensity         | float                                               | Color          | Value used for calculating mass and gravity of the projectile              |
| setStack           | [IIngredient](/Vanilla/Variable_Types/IIngredient/) | Stack          | Ingredient that will be accepted in Projectile Workshop to create the core |
| setComponentEffect | IComponentFunction                                  | Stack          | Function called during the explosion                                       |

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