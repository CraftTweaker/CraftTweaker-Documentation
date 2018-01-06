#Fuel Registration

##Motorboat

###registerMotorboatFuel
|Type               |Data Type       |
|------------------|-----------------|
|Input              |Fluidstack      |
|Usage/t            |Integer         |


####Code Example:
```JAVA
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(ILiquidStack fuelEntry, int mbPerTick);
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(<liquid:water>, 5);
```



##Portable Generator

###registerPortableGenFuel
|Type               |Data Type       |
|------------------|-----------------|
|Input              |Fluidstack      |
|Power/t            |Integer         |
|Usage/t            |Integer         |


####Code Example:
```JAVA
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(ILiquidStack fuelEntry, int fluxPerTick, int mbPerTick);
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(<liquid:water>, 2048, 50);
```