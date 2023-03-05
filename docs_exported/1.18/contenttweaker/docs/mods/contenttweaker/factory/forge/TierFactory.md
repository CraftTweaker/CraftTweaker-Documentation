# Expansion for TierFactory

## Methods

:::group{name=of}

Return Type: [TierReference](/mods/contenttweaker/object/vanilla/TierReference)

```zenscript
TierFactory.of(name as string, level as int, uses as int, speed as float, attackDamageBonus as float, enchantmentValue as int, tag as ResourceLocation, repairItem as ItemReference, lowerTiers as TierSortingStruct[], higherTiers as TierSortingStruct[]) as TierReference
```

|     Parameter     |                                Type                                | Optional |                    Default Value                     |
|-------------------|--------------------------------------------------------------------|----------|------------------------------------------------------|
| name              | string                                                             | false    |                                                      |
| level             | int                                                                | false    |                                                      |
| uses              | int                                                                | false    |                                                      |
| speed             | float                                                              | false    |                                                      |
| attackDamageBonus | float                                                              | false    |                                                      |
| enchantmentValue  | int                                                                | false    |                                                      |
| tag               | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation) | false    |                                                      |
| repairItem        | [ItemReference](/mods/contenttweaker/object/vanilla/ItemReference) | false    |                                                      |
| lowerTiers        | [TierSortingStruct](/mods/contenttweaker/rt/TierSortingStruct)[]   | true     | [] as contenttweaker._rt.vanilla.TierSortingStruct[] |
| higherTiers       | [TierSortingStruct](/mods/contenttweaker/rt/TierSortingStruct)[]   | true     | [] as contenttweaker._rt.vanilla.TierSortingStruct[] |


:::


