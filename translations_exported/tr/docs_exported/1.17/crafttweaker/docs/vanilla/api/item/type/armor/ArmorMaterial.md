# ArmorMaterial

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.type.armor.ArmorMaterial;
```


## Methods

:::group{name=getDefenseForSlot}

Return Type: int

```zenscript
ArmorMaterial.getDefenseForSlot(slot as EquipmentSlot) as int
```

| Parameter | Type                                                         | Description             |
| --------- | ------------------------------------------------------------ | ----------------------- |
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) | No Description Provided |


:::

:::group{name=getDurabilityForSlot}

Return Type: int

```zenscript
ArmorMaterial.getDurabilityForSlot(slot as EquipmentSlot) as int
```

| Parameter | Type                                                         | Description             |
| --------- | ------------------------------------------------------------ | ----------------------- |
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) | No Description Provided |


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

| Name                | Type                                               | Has Getter | Has Setter | Description             |
| ------------------- | -------------------------------------------------- | ---------- | ---------- | ----------------------- |
| enchantmentValue    | int                                                | true       | false      | No Description Provided |
| equipSound          | [SoundEvent](/vanilla/api/sound/SoundEvent)        | true       | false      | No Description Provided |
| knockbackResistance | float                                              | true       | false      | No Description Provided |
| name                | string                                             | true       | false      | No Description Provided |
| repairIngredient    | [IIngredient](/vanilla/api/ingredient/IIngredient) | true       | false      | No Description Provided |
| toughness           | float                                              | true       | false      | No Description Provided |

