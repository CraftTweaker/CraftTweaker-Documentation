# Iencantamiento

An IEnchantment essentially is an [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) and an enchantment level.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.enchantments.IEnchantment;`

## ZenGetters/ZenSetters

| ZenGetter          | Ajuste             | Tipo                                                                          |
| ------------------ | ------------------ | ----------------------------------------------------------------------------- |
| definición         |                    | [Definición de IEncantamiento](/Vanilla/Enchantments/IEnchantmentDefinition/) |
| nivel              |                    | int                                                                           |
| nombre de pantalla | nombre de pantalla | cadena                                                                        |

## Métodos

### Recuperar el encantamiento como NBT

Puede que quieras obtener el NBT-Tag del Encantamiento.  
Puedes usarlo como [IData](/Vanilla/Data/IData/) o usar el método:

```zenscript
ench.makeTag();
ench as crafttweaker.data.IData;
```