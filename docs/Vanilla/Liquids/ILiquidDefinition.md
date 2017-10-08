# ILiquidDefinition
The ILiquidDefinition defines the liquid an [ILiquidStack](ILiquidStack) consists of.
Unlike the ILiquidStack, this interface allows you to change fluid properties.

## Methods
So, what can we do with it?

### Multiplication
Multiplying a ILiquidDefinition results in a new [ILiquidStack](ILiquidStack) with the specified amount in millibuckets

```
val def = <liquid:lava>.definition;

//essentially the same
val bucketOfLava = def * 1000;
val bucketOfLava1 = <liquid:lava> * 1000;
```

## Get and Set fluid properties

As an ILiquidDefinition represents a liquid, you can get, but also set it's properties.
Check the table below for further information.

Like in the table above, you set the Zengetter/Setter at the end of the ILiquidDefinition.
Some ZenGetters have no according ZenSetter, you will need to rely on other means to alter these properties.

Be careful with Zensetters though, they only alter the fluid registry and have no effect on fluids in the world.
In most cases you will not need them.

```
val definition = <liquid:lava>.definition;

//Zengetter: luminosity
val lavaL = definition.luminosity;

//Zensetter: luminosity
definition.luminosity = 0;
```

| Zengetter   | Zensetter   | What is this?                                            | Return/Set Type                               |
|-------------|-------------|----------------------------------------------------------|-----------------------------------------------|
| name        |             | This returns the unlocalized liquid name                 | string                                        |
| displayName |             | This returns the localized liquid name                   | string                                        |
| luminosity  | luminosity  | This returns/sets the luminosity of the referred liquid  | int                                           |
| density     | density     | This returns/sets the density of the referred liquid     | int                                           |
| temperature | temperature | This returns/sets the temperature of the referred liquid | int                                           |
| viscosity   | viscosity   | This returns/sets the viscosity of the referred liquid   | int                                           |
| gaseous     | gaseous     | This returns/sets whether the referred liquid is gaseous | boolean                                       |
| containers  |             | This returns all Containers for the referred liquid      | List<[IItemStack](/Vanilla/Items/IItemStack)> |