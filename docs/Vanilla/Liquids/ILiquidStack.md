# ILiquidStack

A LiquidStack consists of a [Liquid Definition](/Vanilla/Liquids/ILiquidDefinition/) as well as an optional tag and an optional amount value.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.liquid.ILiquidStack;`

## Creating an ILiquidStack
An ILiquidStack can be created by using the [Liquid Bracket Handler](/Vanilla/Brackets/Bracket_Liquid/)


```
//see The liquid bracket Handler for further information
val lava = <liquid:lava>;

//liquid.withTag(Tag as IData)
val lavaWithTag = <liquid:lava>.withTag(DATA);

//liquid * amount in millibuckets (-> 1000 = 1 Bucket)
val lavaWithAmount = <liquid:lava> * 1000;
```

## Get fluid properties
As an ILiquidStack represents a liquid, there surely must also be a way of retrieving the fluid's properties.  
Check the table to see what you can retrieve from the ILiquidStack Object using ZenGetters.

| Zengetter   | What is this?                                             | Return Type                             | Example                             |
|-------------|-----------------------------------------------------------|-----------------------------------------|-------------------------------------|
| name        | This returns the unlocalized liquid name                  | string                                  | `test = <liquid:lava>.name;`        |
| displayName | This returns the localized liquid name                    | string                                  | `test = <liquid:lava>.displayName;` |
| amount      | This returns the amount of the ILiquidObject              | int                                     | `test = <liquid:lava>.amount;`      |
| luminosity  | This returns the luminosity of the referred liquid        | int                                     | `test = <liquid:lava>.luminosity;`  |
| density     | This returns the density of the referred liquid           | int                                     | `test = <liquid:lava>.density;`     |
| temperature | This returns the temperature of the referred liquid       | int                                     | `test = <liquid:lava>.temperature;` |
| viscosity   | This returns the viscosity of the referred liquid         | int                                     | `test = <liquid:lava>.viscosity;`   |
| gaseous     | This returns whether the referred liquid is gaseous       | boolean                                 | `test = <liquid:lava>.gaseous;`     |
| tag         | This returns the ILiquidObject's tag                      | [IData](/Vanilla/Data/IData/)            | `test = <liquid:lava>.tag;`         |
| definition  | This returns the referred liquid's definition (see below) | [ILiquid Definition](/Vanilla/Liquids/ILiquidDefinition/) | `test = <liquid:lava>.definition;`  |

# IIngredient Implementaion
Java Jargon: ILiquidStack implements IIngredient. In other words, all methods that can be used in [IIngredients](/Vanilla/Variable_Types/IIngredient/) can also be used for ILiquidStacks
Refer to the IIngredient entry for further information on this.
Here are some special cases, as liquids just aren't items

* You can't mark ILiquidStacks, and you get null of you try to retrieve an ILiquidStack's mark
* .items returns an empty List
* .itemArray returns an empty Array
* .liquids returns this liquid as ILiquidStack (so, exactly this object)
* LiquidStacks can't have Transformers and asking for transformers always returns false
* LiquidStacks can't have Conditions (.only doesn't work)
* Matching with items always returns false