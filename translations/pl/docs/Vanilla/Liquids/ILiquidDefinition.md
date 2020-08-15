# ILiquidDefinition

The ILiquidDefinition defines the liquid an [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) consists of. Unlike the ILiquidStack, this interface allows you to change fluid properties.

## Importowanie pakietu

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.liquid.ILiquidDefinition;`

## Metody

So, what can we do with it?

### Mnożenie

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

| Zengetter          | Zensetter   | What is this?                                            | Return/Set Type |
| ------------------ | ----------- | -------------------------------------------------------- | --------------- |
| Nazwa              |             | This returns the unlocalized liquid name                 | ciąg znaków     |
| nazwa wyświetlacza |             | This returns the localized liquid name                   | ciąg znaków     |
| luminancja         | luminancja  | This returns/sets the luminosity of the referred liquid  | odcień          |
| gęstość            | gęstość     | This returns/sets the density of the referred liquid     | odcień          |
| temperatura        | temperatura | This returns/sets the temperature of the referred liquid | odcień          |
| lepkość            | lepkość     | This returns/sets the viscosity of the referred liquid   | odcień          |
| gazowe             | gazowe      | This returns/sets whether the referred liquid is gaseous | boolean         |