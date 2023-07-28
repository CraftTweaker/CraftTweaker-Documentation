# ArmorMaterial

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.type.armor.ArmorMaterial;
```


## Methods

:::group{name=getDefenseForType}

Return Type: int

```zenscript
ArmorMaterial.getDefenseForType(type as Type) as int
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| type      | [Type](/vanilla/api/item/type/armor/ArmorItemType) |


:::

:::group{name=getDurabilityForType}

Return Type: int

```zenscript
ArmorMaterial.getDurabilityForType(type as Type) as int
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| type      | [Type](/vanilla/api/item/type/armor/ArmorItemType) |


:::

:::group{name=getEnchantmentValue}

Return Type: int

```zenscript
// ArmorMaterial.getEnchantmentValue() as int

myArmorMaterial.getEnchantmentValue();
```

:::

:::group{name=getEquipSound}

Return Type: [SoundEvent](/vanilla/api/sound/SoundEvent)

```zenscript
// ArmorMaterial.getEquipSound() as SoundEvent

myArmorMaterial.getEquipSound();
```

:::

:::group{name=getKnockbackResistance}

Return Type: float

```zenscript
// ArmorMaterial.getKnockbackResistance() as float

myArmorMaterial.getKnockbackResistance();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
// ArmorMaterial.getName() as string

myArmorMaterial.getName();
```

:::

:::group{name=getRepairIngredient}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// ArmorMaterial.getRepairIngredient() as IIngredient

myArmorMaterial.getRepairIngredient();
```

:::

:::group{name=getToughness}

Return Type: float

```zenscript
// ArmorMaterial.getToughness() as float

myArmorMaterial.getToughness();
```

:::


## Properties

|        Name         |                        Type                        | Has Getter | Has Setter |
|---------------------|----------------------------------------------------|------------|------------|
| enchantmentValue    | int                                                | true       | false      |
| equipSound          | [SoundEvent](/vanilla/api/sound/SoundEvent)        | true       | false      |
| knockbackResistance | float                                              | true       | false      |
| name                | string                                             | true       | false      |
| repairIngredient    | [IIngredient](/vanilla/api/ingredient/IIngredient) | true       | false      |
| toughness           | float                                              | true       | false      |

