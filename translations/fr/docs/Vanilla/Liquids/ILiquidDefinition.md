# ILiquidDefinition

The ILiquidDefinition defines the liquid an [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) consists of. Unlike the ILiquidStack, this interface allows you to change fluid properties.

## Importation du paquet

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.liquid.ILiquidDefinition;`

## Méthodes

So, what can we do with it?

### Multiplication

Multiplying a ILiquidDefinition results in a new [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) with the specified amount in millibuckets

```zenscript
val def = <liquid:lava>.definition;

//essentially the same
val bucketOfLava = def * 1000;
val bucketOfLava1 = <liquid:lava> * 1000;
```

## Get and Set fluid properties

As an ILiquidDefinition represents a liquid, you can get, but also set it's properties. Check the table below for further information.

Like in the table above, you set the Zengetter/Setter at the end of the ILiquidDefinition. Some ZenGetters have no according ZenSetter, you will need to rely on other means to alter these properties.

Be careful with Zensetters though, they only alter the fluid registry and have no effect on fluids in the world. You will probably only need the temperature setter when messing with [Tinkers' Construct Smeltery fuels](/Mods/Modtweaker/TConstruct/Fuel/).

```zenscript
val definition = <liquid:lava>.definition;

//Zengetter: luminosity
val lavaL = definition.luminosity;

//Zensetter: luminosity
definition.luminosity = 0;
```

| Zengetter   | Zensetter   | What is this?                                            | Return/Set Type      |
| ----------- | ----------- | -------------------------------------------------------- | -------------------- |
| Nom         |             | This returns the unlocalized liquid name                 | chaîne de caractères |
| displayName |             | This returns the localized liquid name                   | chaîne de caractères |
| luminosité  | luminosité  | This returns/sets the luminosity of the referred liquid  | Indice               |
| densité     | densité     | This returns/sets the density of the referred liquid     | Indice               |
| température | température | This returns/sets the temperature of the referred liquid | Indice               |
| viscosité   | viscosité   | This returns/sets the viscosity of the referred liquid   | Indice               |
| gaseous     | gaseous     | This returns/sets whether the referred liquid is gaseous | boolean              |