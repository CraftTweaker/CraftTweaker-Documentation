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

| Parametro | Tipo                                                         | Descrizione             |
| --------- | ------------------------------------------------------------ | ----------------------- |
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) | No Description Provided |


:::

:::group{name=getDurabilityForSlot}

Return Type: int

```zenscript
ArmorMaterial.getDurabilityForSlot(slot as EquipmentSlot) as int
```

| Parametro | Tipo                                                         | Descrizione             |
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


## Proprietà

| Nome                | Tipo                                               | Ha Getter | Ha Setter | Descrizione             |
| ------------------- | -------------------------------------------------- | --------- | --------- | ----------------------- |
| enchantmentValue    | int                                                | sì        | no        | No Description Provided |
| equipSound          | [SoundEvent](/vanilla/api/sound/SoundEvent)        | sì        | no        | No Description Provided |
| knockbackResistance | float                                              | sì        | no        | No Description Provided |
| nome                | string                                             | sì        | no        | No Description Provided |
| repairIngredient    | [IIngredient](/vanilla/api/ingredient/IIngredient) | sì        | no        | No Description Provided |
| toughness           | float                                              | sì        | no        | No Description Provided |

