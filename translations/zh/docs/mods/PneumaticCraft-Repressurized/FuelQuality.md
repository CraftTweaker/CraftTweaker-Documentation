::requiredMod[PneumaticCraft: Repressurized]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized}

Requires PneumaticCraft: Repressurized v2.12.6 or newer.

# Fuel Quality

Fuel Quality is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

Fuel Quality recipes define the amount of compressed air produced by burning a given fluid in a Liquid Compressor (or Advanced Liquid Compressor). They also affect the length of time a fuel will burn in the Kerosene Lamp.

## 方法

#### 添加配方

Fuel Quality recipes require a single input fluid ingredient, an integer defining the amount of compressed air produced by burning that fluid, and an optional burn rate, which determines how fast the fuel burns without affecting the overall air generation.

For reference, the default fuel values for PneumaticCraft fuels are (for 1000mB of the fuel):

* Crude Oil: 200,000mL air (burn rate = 0.25)
* Ethanol: 400,000mL air
* Diesel and Biodiesel: 1,000,000mL air (burn rate = 0.8)
* Kerosene: 1,100,000mL air
* Gasoline: 1,500,000mL air (burn rate = 1.5)
* LPG: 1,800,000mL air (burn rate = 1.25)

Fuel values can be inspected in any Liquid Compressor GUI via the Fuels side tab.

The following script adds a recipe to give Memory Essence a fuel value of 2,500mL air/mB & a burn rate of 2.0:

```zenscript
// <recipetype:pneumaticcraft:fuel_quality>.addRecipe(name as string, inputFuel as CTFluidIngredient, airProduced as int, @Optional burnRate as float)
<recipetype:pneumaticcraft:fuel_quality>.addRecipe("memory_essence_fuel", <fluid:pneumaticcraft:memory_essence> * 1, 2500, 2.0);
```

The following script adds a recipe to give Water a fuel value of 1mL air/mB:

```zenscript
<recipetype:pneumaticcraft:fuel_quality>.addRecipe("water_fuel", <fluid:minecraft:water> * 1, 1);
```

#### Remove Recipes

The following script will remove all Fuel Quality entries (making Liquid Compressors useless!):

```zenscript
<recipetype:pneumaticcraft:fuel_quality>.removeAll();
```

