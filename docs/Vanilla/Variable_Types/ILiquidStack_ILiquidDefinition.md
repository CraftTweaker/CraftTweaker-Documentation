# ILiquidStack

A LiquidStack consists  of a Liquid Definition as well as an optional tag and an optional amount value.

## Creating an ILiquidStack
An ILiquidStack can be created by using the Liquid Bracket Handler


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

| Zengetter   | What is this?                                             | Return Type       | Example                             |
|-------------|-----------------------------------------------------------|-------------------|-------------------------------------|
| name        | This returns the unlocalized liquid name                  | string            | `test = <liquid:lava>.name;`        |
| displayName | This returns the localized liquid name                    | string            | `test = <liquid:lava>.displayName;` |
| amount      | This returns the amount of the ILiquidObject              | int               | `test = <liquid:lava>.amount;`      |
| luminosity  | This returns the luminosity of the referred liquid        | int               | `test = <liquid:lava>.luminosity;`  |
| density     | This returns the density of the referred liquid           | int               | `test = <liquid:lava>.density;`     |
| temperature | This returns the temperature of the referred liquid       | int               | `test = <liquid:lava>.temperature;` |
| viscosity   | This returns the viscosity of the referred liquid         | int               | `test = <liquid:lava>.viscosity;`   |
| gaseous     | This returns whether the referred liquid is gaseous       | boolean           | `test = <liquid:lava>.gaseous;`     |
| tag         | This returns the ILiquidObject's tag                      | IData             | `test = <liquid:lava>.tag;`         |
| definition  | This returns the referred liquid's definition (see below) | ILiquidDefinition | `test = <liquid:lava>.definition;`  |

# ILiquidDefinition
The ILiquidDefinition is the earlier mentioned definition an ILiquidStack consists of.
Unlike the ILiquidStack, this interface allows you to change fluid properties.

## Methods
So, what can we do with it?

### Multiplication
Multiplying a ILiquidDefinition results in a new ILiquidStack with the specified amount in millibuckets

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

| Zengetter   | Zensetter   | What is this?                                            | Return/Set Type  |
|-------------|-------------|----------------------------------------------------------|------------------|
| name        |             | This returns the unlocalized liquid name                 | string           |
| displayName |             | This returns the localized liquid name                   | string           |
| luminosity  | luminosity  | This returns/sets the luminosity of the referred liquid  | int              |
| density     | density     | This returns/sets the density of the referred liquid     | int              |
| temperature | temperature | This returns/sets the temperature of the referred liquid | int              |
| viscosity   | viscosity   | This returns/sets the viscosity of the referred liquid   | int              |
| gaseous     | gaseous     | This returns/sets whether the referred liquid is gaseous | boolean          |
| containers  |             | This returns all Containers for the referred liquid      | List<IItemStack> |

# IIngredient Implementaion
Java Jargon: ILiquidStack implements IIngredient. In other words, all methods that can be used in IIngredients can also be used for ILiquidStacks
Refer to the IIngredient entry for further information on this.
Here are some special cases, as liquids just aren't items

* You can't mark ILiquidStacks, and you get null of you try to retrieve an ILiquidStack's mark
* .items returns an empty List
* .liquids returns this liquid as ILiquidStack (so, exactly this object)
* LiquidStacks can't have Transformers and asking for transformers always returns false
* LiquidStacks can't have Conditions (.only doesn't work)
* Matching with items always returns false