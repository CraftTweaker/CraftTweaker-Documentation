# ArmorMaterial

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.type.armor.ArmorMaterial;
```


## Metodi

:::group{name=getDefenseForSlot}

Return Type: int

```zenscript
ArmorMaterial.getDefenseForSlot(slot as EquipmentSlot) as int
```

| Parametro | Tipo                                                         |
| --------- | ------------------------------------------------------------ |
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) |


:::

:::group{name=getDurabilityForSlot}

Return Type: int

```zenscript
ArmorMaterial.getDurabilityForSlot(slot as EquipmentSlot) as int
```

| Parametro | Tipo                                                         |
| --------- | ------------------------------------------------------------ |
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) |


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


## Proprietà

| Nome                | Tipo                                               | Ha Getter | Ha Setter |
| ------------------- | -------------------------------------------------- | --------- | --------- |
| enchantmentValue    | int                                                | sì        | no        |
| equipSound          | [SoundEvent](/vanilla/api/sound/SoundEvent)        | sì        | no        |
| knockbackResistance | float                                              | sì        | no        |
| nome                | string                                             | sì        | no        |
| repairIngredient    | [IIngredient](/vanilla/api/ingredient/IIngredient) | sì        | no        |
| toughness           | float                                              | sì        | no        |

