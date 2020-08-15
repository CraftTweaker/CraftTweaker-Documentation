# Kreator zaklęć

Za pomocą tego pakietu możesz tworzyć niestandardowe zaklęcia dla narzędzi, broni i prawdopodobnie wszystkiego innego.

## Importowanie klasy

Może być wymagane zaimportowanie klasy, jeśli napotkasz jakiekolwiek problemy (np. rzucenie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj mods.contenttweaker.enchantments.EnchantmentBuilder;`

## Tworzenie zaklęcia

Przede wszystkim musisz utworzyć Budowniczego Materiałów.  
Można to zrobić za pomocą metody tworzenia statycznego.

```zenscript
//mods.contenttweaker.enchantments.EnchantmentBuilder.create(Nazwa ciągu);
walal myChant = mods.contenttweaker.enchantments.EnchantmentBuilder.create("kindlich_chant");
```

Pamiętaj, że musisz zarejestrować zaklęcie po dokonaniu zmian.  
Można to zrobić z metodą `rejestru` , która zwróci [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) nowego zaklęcia.

```zenscript
myChant.register();
```

## Właściwości

Możesz ustawić i pobrać te właściwości używając `myChant.name`.

| Nazwa               | Typ                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------ |
| Nazwa               | ciąg znaków                                                                          |
| dozwoloneOnBooks    | bool                                                                                 |
| Odpowiednie miejsca | [IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/)[] (domyślnie: puste) |
| przekleństwo        | bool                                                                                 |
| domena              | string (default: "contenttweaker")                                                   |
| maksymalny poziom   | int (domyślnie: 1)                                                                   |
| minLevel            | int (domyślnie: 1)                                                                   |
| rzadkość            | ciąg znaków (użyj niestandardowych metod poniżej)                                    |
| skarb               | bool                                                                                 |
| typ                 | ciąg znaków (użyj niestandardowych metod poniżej)                                    |

## Obliczone właściwości

Możesz ustawić i uzyskać te funkcje właściwości.

| Nazwa                                    | parametry                                                                                                                                                                                                                      | Typ zwrotu         |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| można zastosować                         | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IItemStack](/Vanilla/Items/IItemStack/) element                                                                                      | bool               |
| [PLACEHOLDER] canApplyAtEnchantmentTable | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IItemStack](/Vanilla/Items/IItemStack/) element                                                                                      | bool               |
| CanApplyTogether                         | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) other                                                           | bool               |
| calcDamageByCreature                     | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) ThisEnchantment, [int]() poziom, [String]() creatureType                                                                                               | zmiennoprzecinkowe |
| calcEnchantabilityMin                    | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) To zaklęcie, [int]() poziom                                                                                                                            | odcień             |
| calcEnchantabilityMax                    | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) To zaklęcie, [int]() poziom                                                                                                                            | odcień             |
| calcModifierDamage                       | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) ThisEnchantment, [int]() poziom, [IDamageSource](/Vanilla/Damage/IDamageSource/) obrażeńŹródło                                                         | odcień             |
| calcTranslatedName                       | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) To zaklęcie, [int]() poziom                                                                                                                            | ciąg znaków        |
|                                          |                                                                                                                                                                                                                                |                    |
| onEntityuszkodzony                       | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) użytkownik, [IEntity](/Vanilla/Entities/IEntity/) cel, [int]() poziom       | unieważnij         |
| onUserHurt                               | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) ThisEnchantment, [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) użytkownik, [IEntity](/Vanilla/Entities/IEntity/) atakujący, [int]() poziom | unieważnij         |

## Rzadkość i typ

Użyj tych metod, aby zostać natychmiast powiadomionym o utworzeniu typo.

```zenscript
//Rzadkości
myChant.setRarityCommon()
myChant.setRarityUncommon()
myChant.setRarityRare()
myChant.setRarityVeryRare()

//Typy
myChant.setTypeAll()
myChant.setTypeArmor()
myChant.setTypeFeed()
myChant. etTypeLegs()
myChant.setTypeChest()
myChant.setTypeHead()
myChant.setTypeWeapon()
myChant.setTypeDigger()
myChant.setTypeFishingRod()
myChant.setTypeBreakable()
myChant.setTypeBow()
myChant.setTypeWearable()
```

## Przykład

```zenscript
#loader contenttweaker
val builder = mods.contenttweaker.enchantments.EnchantmentBuilder.create("kindlich_chant");
builder.applicableSlots = [mainHand, offhand feet, nogi, chest, head];
builder.setTypeAll();
builder.setRarityVeryRare();
builder. alcModifierDamage = function(thisEnch, level, damageSource){
    return level;
};

builder. nUserHurt = function(thisEnch, entity, attacker, level) {
    entity.health = entity.maxHealth;
    if(entity instanceof crafttweaker. layer.IPlayer) {
        walowy gracz jako crafttweaker.player. Gracz = jednostka;
        gracz.foodStats.addStats(100, 10). f);
    }

};

builder.register();

builder.name = "other_chant";
builder. omain = "definitely_not_cot";
builder.calcModifierDamage = null;
builder. nUserHurt = function(thisEnch, player, attacker, level) {
    player.sendMessage("EARNED IT!");   
};
builder.register();
```