# Rasgos personalizados

¡Usando este paquete puedes crear rasgos que puedes poner en tus herramientas!

## Importar la clase

Podría ser necesario que importes la clase si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar mods.contenttweaker.tconstruct.TraitBuilder;`

## Creando un rasgo

Primero y principal, necesitarás crear un constructor de rasgos.  
Esto puede hacerse usando la función estática:

```zenscript
//create(String identifier, int color, @Optional int maxLevel, @Optional int countPerLevel)
val myTrait = mods.contenttweaker.tconstruct.TraitBuilder.create("kindlich_test", 0xffaadd, 100, 20);
```

¡El identificador `` tiene que ser único!  
Para el `color`, se sugiere que utilice la notación hexadecimal como se muestra arriba.  
`máximo nivel` es el nivel máximo que el rasgo puede llegar a ser, y predeterminado a 0.  
`contadores por nivel` es cuántos subniveles puede tener el rasgo (como Redstone que tiene 50).

Después de que hayas terminado todas las modificaciones a continuación, necesitarás registrar tu rasgo.  
Esto puede hacerse utilizando el método `register` , que devolverá una [Representación](/Mods/ContentTweaker/Tinkers_Construct/Trait/) del nuevo rasgo.

```zenscript
miTrait.register();
```

Después de registrarse, todavía puede modificar el constructor, el rasgo en sí mismo ya no puede ser modificado.  
De esa manera puedes crear múltiples rasgos similares fácilmente.

## Elementos modificadores

Si combina el ingrediente dado con una herramienta en la forja de herramientas de un tinker, puede aplicar el rasgo como modificador.

```zenscript
//myTrait.addItem(elemento IIngredient, @Optional(1) int amountNeeded, @Optional(1) int amountMatched));
myTrait.addItem(<item:minecraft:iron_pickaxe>);
myTrait.addItem(<item:minecraft:iron_block>, 4, 2);

//myTrait.removeItem(pila ItemStack);
myTrait.removeItem(<item:minecraft:iron_pickaxe>);
```

- `elemento` es el elemento que coincide en su lugar. Puede utilizar [Condiciones del artículo](/Vanilla/Items/Item_Conditions/) pero sin Transformadores. 
- `la cantidad requerida` es la cantidad de artículos que coinciden en contra. Puede dividirlos entre todas las ranuras que proporciona la forja de herramientas, lo que también le permite ir por encima de 64. En el ejemplo anterior, necesitas 4 bloques de hierro por adición. Por defecto es 1.
- `monto emparejado` es la cantidad de puntos de rasgo añadidos por `cantidad necesaria`. En el ejemplo de arriba cuatro bloques de hierro dan dos puntos característicos. Por defecto es 1.
- Si usas la función `remover`, se eliminarán todos los ingredientes característicos que coincidan con el objeto.

## Propiedades

Puede establecer y obtener estas propiedades usando los nombres dados:

| Nombre                 | Tipo   |
| ---------------------- | ------ |
| color                  | int    |
| cuenta por nivel       | int    |
| hidden                 | pluma  |
| identifier             | cadena |
| descripción localizada | cadena |
| localizedName          | cadena |
| nivel máximo           | int    |

## Propiedades calculadas

Algunas propiedades necesitarán ser calculadas.  
Puede establecer las funciones de propiedad dadas:

### Aplique juntos

Comprueba si un rasgo puede añadirse a una herramienta que ya tiene otro rasgo o [encantamiento](/Vanilla/Enchantments/IEnchantmentDefinition/).

```zenscript
myTrait.canApplyTogetherTrait = function(TraitRepresentation thisTrait, String otherTrait){....};
myTrait.canApplyTogetherEnchantment = function(TraitRepresentation thisTrait, IEnchantmentDefinition encant){....};
```

### Extra info

La cadena devuelta[] se mostrará como información adicional en la estación de herramientas.

```zenscript
myTrait.extraInfo = function(TraitRepresentation thisTrait, IItemStack item, IData tag){....};
```

## Añadiendo funcionalidad

Ahora que has creado un rasgo que necesitas hacer modificar algo, ¿verdad?  
Para eso son los controladores de eventos características:  
Se llaman cuando un usuario hace algo con la herramienta que contiene el rasgo.

Debajo verás todos los manejadores posibles, junto con información sobre lo que regresan y cómo escribir la función para ellos. Recuerda que tendrás que reemplazar `myTrait` con tu propio nombre de variable.  
Además, solo tienes que usar los manejadores que necesitas. no necesita manejadores vacíos sólo para que lo haya llenado todo.

<details>
    <summary>Todos los Manejadores en una cáscara</summary>
    <ul>
        <li><a href="#onupdate">onUpdate</a></li>
        <li><a href="#getminingspeed">getMiningSpeed</a></li>
        <li><a href="#beforeblockbreak">beforeBlockBreak</a></li>
        <li><a href="#afterblockbreak">afterBlockBreak</a></li>
        <li><a href="#onblockharvestdrops">onBlockHarvestDrops</a></li>
        <li><a href="#calccrit">calcCrit</a></li>
        <li><a href="#calcdamage">calcDaño</a></li>
        <li><a href="#onhit">onHit</a></li>
        <li><a href="#calcknockback">calcKnockBack</a></li>
        <li><a href="#afterhit">afterHit</a></li>
        <li><a href="#onblock">onBlock</a></li>
        <li><a href="#onplayerhurt">en Jugador</a></li>
        <li><a href="#ontooldamage">onToolDamage</a></li>
        <li><a href="#ontoolheal">onToolHeal</a></li>
        <li><a href="#ontoolrepair">en reparación</a></li>
    </ul>
</details>

### onUpdate

Llamado cada tick por la herramienta está cargado (eso significa en el inventario del jugador).  
Parámetros:

- Una representación de [rasgos](/Mods/ContentTweaker/Tinkers_Construct/Trait/) que representa el trait `utilizado actualmente.`.
- Un [ItemStack](/Vanilla/Items/IItemStack/) que representa la `herramienta usada`
- Un [IWorld](/Vanilla/World/IWorld/) que representa el `mundo`
- Una [Itidad](/Vanilla/Entities/IEntity/) representando al `dueño`
- Un int representando el `itemSlot`
- Un booleano que describe si la herramienta actualmente `está seleccionada`

**No devuelve nada.**

Creado usando:

```zenscript
myTrait.getMiningSpeed = function(trait, tool, world, owner, itemSlot, isSelected) {
    //CODE
};
```

### getMiningSpeed

Llamado cuando se extrae un bloque.  
Tenga cuidado ya que este evento también es capturado por manejadores de blockBreak de vainilla.  
Parámetros:

- Una representación de [rasgos](/Mods/ContentTweaker/Tinkers_Construct/Trait/) que representa el trait `utilizado actualmente.`.
- Un [ItemStack](/Vanilla/Items/IItemStack/) que representa la `herramienta usada`
- Un [Evento Rápido de PlayerBreak](/Vanilla/Events/Events/PlayerBreakSpeed/)

**No devuelve nada.**

Creado usando:

```zenscript
myTrait.getMiningSpeed = function(trait, tool, event) {
    //CODE
};
```

### beforeBlockBreak

Llamado justo antes de que un bloque esté roto.  
Tenga cuidado ya que este evento también es capturado por los manejadores de rotura de bloques de vainilla.  
Parámetros:

- Una representación de [rasgos](/Mods/ContentTweaker/Tinkers_Construct/Trait/) que representa el trait `utilizado actualmente.`.
- Un [ItemStack](/Vanilla/Items/IItemStack/) que representa la `herramienta usada`
- Un BlockBreakEvent [](/Vanilla/Events/Events/BlockBreak/)

**No devuelve nada.**

Creado usando:

```zenscript
myTrait.beforeBlockBreak = function(trait, tool, event) {
    //CODE
};
```

### afterBlockBreak

Llamado después de que el bloque ha sido destruido.  
Parámetros:

- Una representación de [rasgos](/Mods/ContentTweaker/Tinkers_Construct/Trait/) que representa el trait `utilizado actualmente.`.
- Un [ItemStack](/Vanilla/Items/IItemStack/) que representa la `herramienta usada`
- Un [IWorld](/Vanilla/World/IWorld/) que representa el `mundo`
- Un [IBlockState](/Vanilla/Blocks/IBlockState/) que representa el bloque `roto`
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) que representa al `minero`
- Una pluma que representa si la minería `pierde efecto`

**No devuelve nada.**

Creado usando:

```zenscript
myTrait.afterBlockBreak = function(trait, tool, world, blockstate, miner, wasEffective) {
    //CODE
};
```

### onBlockHarvestDrops

Llamado cada vez que un bloque ha sido roto.  
Tenga cuidado ya que este evento también es llamado por los manejadores de vanilla onBlockHarvestBreak.  
A diferencia del manejador de vainilla, este manejador sólo se ejecutará cuando un jugador rompa el bloque.  
Parámetros:

- Una representación de [rasgos](/Mods/ContentTweaker/Tinkers_Construct/Trait/) que representa el trait `utilizado actualmente.`.
- Un [ItemStack](/Vanilla/Items/IItemStack/) que representa la `herramienta usada`
- Un [BlockHarvestDropsEvent](/Vanilla/Events/Events/BlockHarvestDrops/)

**No devuelve nada**

Creado usando:

```zenscript
myTrait.onBlockHarvestDrops = function(trait, tool, event) {
    //CODE
};
```

### calcCrit

Llamado antes de que el daño causado a la entidad se calcula para determinar si será un crítico o no.  
Devolver `false` no evitará que un golpe que ya es un crit sea así.  
Parámetros:

- Una representación de [rasgos](/Mods/ContentTweaker/Tinkers_Construct/Trait/) que representa el trait `utilizado actualmente.`.
- Un [ItemStack](/Vanilla/Items/IItemStack/) que representa la `herramienta usada`
- Una [base de datos IEntityLiving](/Vanilla/Entities/IEntityLivingBase/) que representa al `atacante`
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) que representa al `objetivo`

**Devuelve un bool** que es `verdadero` si el golpe debe escribir, falso cuando quiera.

Creado usando:

```zenscript
myTrait.calcCrit = function(trait, tool, attacker, target) {
    //CODE
    return true; /ศfalse
};
```

### calcDaño

Llamado cuando una entidad es golpeada, pero aún antes de que el daño se haga y antes de que se agregue el daño crítico.  
El daño crítico se calculará a partir del resultado de esto.  
Parámetros:

- Una representación de [rasgos](/Mods/ContentTweaker/Tinkers_Construct/Trait/) que representa el trait `utilizado actualmente.`.
- Un [ItemStack](/Vanilla/Items/IItemStack/) que representa la `herramienta usada`
- Una [base de datos IEntityLiving](/Vanilla/Entities/IEntityLivingBase/) que representa al `atacante`
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) que representa al `objetivo`
- Un float que representa el `original Daño` de la herramienta (daño de herramienta sin modificar)
- Un float que representa el `nuevo Daño` de la herramienta (el daño que la herramienta hará hasta este punto, puede ser originalDaño o ya ser modificado por otros rasgos).
- Un booleano que representa si el golpe `es crítico`

**Devuelve un float** que representa el nuevo daño. De lo contrario, devuelve `de daño nuevo`

Creado con

```zenscript
myTrait.calcDamage = function(trait, tool, atacante, target, originalDamage, newDamage, isCritical) {
    //CODE
    return newDamage; //Or your modified value
};
```

### onHit

Llamado cuando una entidad es golpeada, justo antes de que el daño sea causado.  
Ya se han hecho todos los cálculos de daño en este punto.  
Parámetros:

- Una representación de [rasgos](/Mods/ContentTweaker/Tinkers_Construct/Trait/) que representa el trait `utilizado actualmente.`.
- Un [ItemStack](/Vanilla/Items/IItemStack/) que representa la `herramienta usada`
- Una [base de datos IEntityLiving](/Vanilla/Entities/IEntityLivingBase/) que representa al `atacante`
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) que representa al `objetivo`
- Un float que representa el `daño` de la herramienta (incluido el daño crítico)
- Un booleano que representa si el golpe `es crítico`

**No devuelve nada**

Creado con

```zenscript
myTrait.onHit = function(trait, tool, attacker, target, damage, isCritical) {
    //CODE
};
```

### calcKnockBack

Llamado después de que una entidad sea pulsada para modificar el golpe aplicado.  
Parámetros:

- Una representación de [rasgos](/Mods/ContentTweaker/Tinkers_Construct/Trait/) que representa el trait `utilizado actualmente.`.
- Un [ItemStack](/Vanilla/Items/IItemStack/) que representa la `herramienta usada`
- Una [base de datos IEntityLiving](/Vanilla/Entities/IEntityLivingBase/) que representa al `atacante`
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) que representa al `objetivo`
- Un float que representa el `de daño` de la herramienta (incluyendo el crítico)
- Un float que representa el `originalKnockback` de la herramienta (sin modificar)
- Un float que representa el `newKnockback` de la herramienta (el retroceso de la herramienta hará hasta este punto, puede ser originalKnockback, o ya ser modificado por otras características).
- Un booleano que representa si el golpe `es crítico`

**Devuelve un float** que representa el nuevo retroceso. De lo contrario, devuelve `newKnockback`

Creado con

```zenscript
myTrait.calcDamage = function(trait, herramienta, atacante, objetivo, daño, originalKnockBack, newKnockBack, isCritical) {
    //CODE
    return newDamage; //Or tu valor modificado
};
```

### afterHit

Llamado después de que una entidad sea golpeada y después de que el daño sea infligido.  
Parámetros:

- Una representación de [rasgos](/Mods/ContentTweaker/Tinkers_Construct/Trait/) que representa el trait `utilizado actualmente.`.
- Un [ItemStack](/Vanilla/Items/IItemStack/) que representa la `herramienta usada`
- Una [base de datos IEntityLiving](/Vanilla/Entities/IEntityLivingBase/) que representa al `atacante`
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) que representa al `objetivo`
- Un float que representa el `Daño de Oferta` de la herramienta
- Una pluma que representa si el golpe `se ha lavado`
- Una pluma que representa si la entidad `wasHit`. Puede ser falso si la entidad era invulnerable o tenía otras formas de exacerbar el daño.

**No devuelve nada**

Creado con

```zenscript
mytrait.afterHit = function(trait, tool, ataque, target, damageDealt, wasCritical, wasHit) {
    //CODE
};
```

### onBlock

Llamado cuando el jugador sostenido la herramienta bloquea el ataque.  
de lo contrario `onHit` será llamado.  
Parámetros:

- Una representación de [rasgos](/Mods/ContentTweaker/Tinkers_Construct/Trait/) que representa el trait `utilizado actualmente.`.
- Un [ItemStack](/Vanilla/Items/IItemStack/) que representa la `herramienta usada`
- Un [IPlayer](/Vanilla/Players/IPlayer/) que representa al `jugador`
- Una [EntityLivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt/)

**No devuelve nada**

Creado con

```zenscript
myTrait.onBlock = function(trait, tool, player, event) {
    //CODE
};
```

### en Jugador

Llamado cuando el jugador que sostenga la herramienta NO BLOQUEE el ataque.  
De lo contrario `onBlock` será llamado.  
Parámetros:

- Una representación de [rasgos](/Mods/ContentTweaker/Tinkers_Construct/Trait/) que representa el trait `utilizado actualmente.`.
- Un [ItemStack](/Vanilla/Items/IItemStack/) que representa la `herramienta usada`
- Un [IPlayer](/Vanilla/Players/IPlayer/) que representa al `jugador`
- Una [base de datos IEntityLiving](/Vanilla/Entities/IEntityLivingBase/) que representa al `atacante`
- Una [EntityLivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt/)

**No devuelve nada**

Creado con

```zenscript
myTrait.onPlayerHurt = function(trait, tool, player, event) {
    //CODE
};
```

### onToolDamage

Llamado antes de que disminuya la durabilidad de las herramientas.  
Parámetros:

- Una representación de [rasgos](/Mods/ContentTweaker/Tinkers_Construct/Trait/) que representa el trait `utilizado actualmente.`.
- Un [ItemStack](/Vanilla/Items/IItemStack/) que representa la `herramienta usada`
- Un int que representa la cantidad `sin modificar` de durabilidad a reducir.
- Un int que representa la `nueva cantidad` de durabilidad a reducir, que ya puede ser modificado por otros rasgos.
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) que representa el `titular de la herramienta actual`

**Devuelve un int** que representa la nueva cantidad. De lo contrario, devuelve `newAamount`

Creado con

```zenscript
myTrait.onToolDamage = function(trait, tool, unmodifiedAmount, newAmount, holder) {
    //CODE
    return newAmount; //O tu valor modificado
};
```

### calcToolHeal

Llamado antes de que se incremente la durabilidad de las herramientas.  
Parámetros:

- Una representación de [rasgos](/Mods/ContentTweaker/Tinkers_Construct/Trait/) que representa el trait `utilizado actualmente.`.
- Un [ItemStack](/Vanilla/Items/IItemStack/) que representa la `herramienta usada`
- Un int que representa la cantidad `sin modificar` de durabilidad a ser aumentada.
- Un int que representa la `nueva cantidad` de durabilidad a aumentar, que ya puede ser modificado por otros rasgos.
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) que representa el `titular de la herramienta actual`

**Devuelve un int** que representa la nueva cantidad. De lo contrario, devuelve `newAamount`

Creado con

```zenscript
myTrait.calcToolHeal = function(trait, tool, unmodifiedAmount, newAmount, holder) {
    //CODE
    return newAmount; //O tu valor modificado
};
```

### en reparación

Llamado antes de que la herramienta se repare con material de reparación de tis.  
No se debe confundir con `onToolHeal` que se llama después.  
Se llamará varias veces si se utilizan varios elementos a la vez.  
Parámetros:

- Una representación de [rasgos](/Mods/ContentTweaker/Tinkers_Construct/Trait/) que representa el trait `utilizado actualmente.`.
- Un [ItemStack](/Vanilla/Items/IItemStack/) que representa la herramienta `` para ser reparada
- Un int que representa la cantidad `de durabilidad` que se incrementará.

**No devuelve nada**

Creado con

```zenscript
myTrait.onToolRepair = function(trait, tool, amount) {
    //CODE
};
```

## Ejemplo

```zenscript
#loader contenttweaker
#modloaded tconstruct

val testTrait = mods.contenttweaker.tconstruct.TraitBuilder.create("kindlich_test");
testTrait.color = 0xffaadd;
testTrait.maxLevel = 100;
testTrait. ountPerLevel = 20;
testTrait.addItem(<item:minecraft:iron_pickaxe>);
testTrait.addItem(<item:minecraft:iron_block>, 4, 2);
testTrait.localizedName = "Whooooooo";
testTrait.localizedDescription = "¡Esto es divertido! Lamentablemente, no hace nada... \u2639";
testTrait.afterHit = function(thisTrait, tool, attacker, target, damageDealt, wasCrit, wasHit) {
    attacker.heal(damageDealt);
};
testTrait.register();
```