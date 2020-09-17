# Constructor de encantamientos

Usando este paquete puede crear encantamientos personalizados para herramientas, armas y probablemente todo lo demás.

## Importar la clase

It might be required for you to import the class if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import mods.contenttweaker.enchantments.EnchantmentBuilder;`

## Creando un Encantador

En primer lugar, necesitará crear un Constructor de Material  
Esto puede hacerse utilizando el método de creación estática.

```zenscript
//mods.contenttweaker.enchantments.EnchantmentBuilder.create(String name);
val myChant = mods.contenttweaker.enchantments.EnchantmentBuilder.create("kindlich_chant");
```

Recuerda que necesitarás registrar el encantamiento después de que hayas realizado tus cambios.  
Esto se puede hacer con el método `register` que devolverá una [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) del nuevo encantamiento.

```zenscript
miChant.register();
```

## Propiedades

Puede configurar y obtener estas propiedades usando `myChant.name`.

| nombre               | Tipo                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------ |
| nombre               | cadena                                                                               |
| Onbooks permitidos   | pluma                                                                                |
| Eslovaquia aplicable | [ItityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/)[] (por defecto: vacío) |
| maldición            | pluma                                                                                |
| dominio              | string (default: "contenttweaker")                                                   |
| nivel máximo         | int (por defecto: 1)                                                                 |
| minLevel             | int (por defecto: 1)                                                                 |
| rareza               | cadena (use los métodos personalizados a continuación)                               |
| tesoro               | pluma                                                                                |
| tipo                 | cadena (use los métodos personalizados a continuación)                               |

## Propiedades calculadas

Puede configurar y obtener estas funciones de propiedades.

| nombre                 | parámetros                                                                                                                                                                                                              | Tipo de devolución |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| puede aplicarse        | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [ItemStack](/Vanilla/Items/IItemStack/) elemento                                                                               | pluma              |
| Mesa de Atención Canal | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [ItemStack](/Vanilla/Items/IItemStack/) elemento                                                                               | pluma              |
| canApplyTogether       | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) other                                                  | pluma              |
| calcDaño por criatura  | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level, [String]() creatureType                                                                                         | flotante           |
| calcEnchantabilityMin  | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level                                                                                                                  | int                |
| calcEnchantabilityMax  | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level                                                                                                                  | int                |
| calcModifierDaño       | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level, [IDamageSource](/Vanilla/Damage/IDamageSource/) damageSource                                                    | int                |
| calcTranslatedName     | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level                                                                                                                  | cadena             |
|                        |                                                                                                                                                                                                                         |                    |
| ontidad dañada         | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) usuario, [IEntity](/Vanilla/Entities/IEntity/) target, [int]() level | vacío              |
| onUserHurt             | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) usuario, [Itity](/Vanilla/Entities/IEntity/) atacante, [int]() nivel | vacío              |

## Rareza y tipo

Utilice estos métodos para ser notificado instantáneamente si hizo un error tipográfico.

```zenscript
//Rarities
myChant.setRarityCommon()
myChant.setRarityUncommon()
myChant.setRarityRare()
myChant.setRarityVeryRare()

//Types
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

## Ejemplo

```zenscript
#loader contenttweaker
val builder = mods.contenttweaker.enchantments.EnchantBuilder.create("kindlich_chant");
builder.applicableSlots = [mainHand, offhand, feet, legs, chest, head];
builder.setTypeAll();
builder.setRarityVeryRare();
builder. alcModifierDamage = function(thisEnch, level, damageSource){
    return level;
};

builder. nUserHurt = function(thisEnch, entity, attacker, level) {
    entity.health = entity.maxHealth;
    if(entity instanceof crafttweaker. layer.IPlayer) {
        val player as crafttweaker.player. Jugador = entidad;
        jugador.foodStats.addStats(100, 10. f);
    }

};

builder.register();

builder.name = "other_chant";
builder. omain = "definitely_not_cot";
builder.calcModifierDamage = null;
constructores. nUserHurt = function(thisEnch, player, attacker, level) {
    player.sendMessage("¡EARNED IT!");   
};
builder.register();
```