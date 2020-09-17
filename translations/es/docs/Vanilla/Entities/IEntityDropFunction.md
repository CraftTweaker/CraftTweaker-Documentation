# ItitityDropFunction

Una IEntityDropFunction es llamada cada vez que la entidad asociada es asesinada. Deje a su imagen lo que puede hacer con esto:

## Importando el pacak

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar crafttweaker.entity.IEntityDropFunction;`

## Parámetros

IEntityDropFunction es una función con los siguientes parámetros:

- [Entidad](/Vanilla/Entities/IEntity/) entidad → La entidad que acaba de morir.
- [IDamageSource](/Vanilla/Damage/IDamageSource/) dmgSourve → La fuente de la muerte de la entidad.

La función necesita devolver un [ItemStack](/Vanilla/Items/IItemStack/)o `null`.