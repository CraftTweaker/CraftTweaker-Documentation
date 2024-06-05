# ArmorMaterial

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.type.armor.ArmorMaterial;
```


## Extending Record

ArmorMaterial extends Record. That means all methods available in Record are also available in ArmorMaterial

## Methods

:::group{name=enchantmentValue}

Return Type: int

```zenscript
// ArmorMaterial.enchantmentValue() as int

myArmorMaterial.enchantmentValue();
```

:::

:::group{name=equipSound}

Return Type: [SoundEvent](/vanilla/api/sound/SoundEvent)

```zenscript
// ArmorMaterial.equipSound() as SoundEvent

myArmorMaterial.equipSound();
```

:::

:::group{name=getDefense}

Return Type: int

```zenscript
ArmorMaterial.getDefense(type as Type) as int
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| type      | [Type](/vanilla/api/item/type/armor/ArmorItemType) |


:::

:::group{name=knockbackResistance}

Return Type: float

```zenscript
// ArmorMaterial.knockbackResistance() as float

myArmorMaterial.knockbackResistance();
```

:::

:::group{name=repairIngredient}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// ArmorMaterial.repairIngredient() as IIngredient

myArmorMaterial.repairIngredient();
```

:::

:::group{name=toughness}

Return Type: float

```zenscript
// ArmorMaterial.toughness() as float

myArmorMaterial.toughness();
```

:::


## Properties

|        Name         |                            Type                            | Has Getter | Has Setter |
|---------------------|------------------------------------------------------------|------------|------------|
| enchantmentValue    | int                                                        | true       | false      |
| equipSound          | [SoundEvent](/vanilla/api/sound/SoundEvent)                | true       | false      |
| knockbackResistance | float                                                      | true       | false      |
| registryName        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |
| repairIngredient    | [IIngredient](/vanilla/api/ingredient/IIngredient)         | true       | false      |
| toughness           | float                                                      | true       | false      |

